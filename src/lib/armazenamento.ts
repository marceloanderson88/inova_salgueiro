import type { Interesse } from "./validacoes";

/**
 * Persistência das manifestações de interesse.
 *
 * O site funciona sem banco: se as variáveis do Supabase não estiverem
 * configuradas, o registro é apenas logado no servidor e o protocolo é
 * devolvido normalmente. Assim o deploy na Vercel sobe antes do banco existir.
 */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const bancoConfigurado = Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);

export function gerarProtocolo(): string {
  const ano = new Date().getFullYear();
  const aleatorio = Math.floor(Math.random() * 1_000_000)
    .toString()
    .padStart(6, "0");
  return `IS-${ano}-${aleatorio}`;
}

type RegistroInteresse = {
  protocol: string;
  full_name: string;
  email: string;
  phone: string;
  city: string;
  participation_type: string;
  institution_name: string | null;
  professional_area: string | null;
  contribution_types: string[];
  motivation: string;
  availability: string;
  privacy_consent: boolean;
  participation_rules_consent: boolean;
  status: "novo";
};

function paraRegistro(dados: Interesse, protocolo: string): RegistroInteresse {
  return {
    protocol: protocolo,
    full_name: dados.fullName,
    email: dados.email,
    phone: dados.phone,
    city: dados.city,
    participation_type: dados.participationType,
    institution_name: dados.institutionName || null,
    professional_area: dados.professionalArea || null,
    contribution_types: dados.contributionTypes,
    motivation: dados.motivation,
    availability: dados.availability,
    privacy_consent: dados.privacyConsent,
    participation_rules_consent: dados.participationRulesConsent,
    status: "novo",
  };
}

async function chamarSupabase(caminho: string, corpo: unknown) {
  const resposta = await fetch(`${SUPABASE_URL}/rest/v1/${caminho}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY as string,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(corpo),
  });

  if (!resposta.ok) {
    const detalhe = await resposta.text();
    throw new Error(`Supabase ${caminho} respondeu ${resposta.status}: ${detalhe}`);
  }

  return resposta.json();
}

export async function salvarInteresse(dados: Interesse): Promise<string> {
  const protocolo = gerarProtocolo();
  const registro = paraRegistro(dados, protocolo);

  if (!bancoConfigurado) {
    console.info(
      "[inova] Banco não configurado — manifestação registrada apenas em log.",
      { protocolo, email: registro.email },
    );
    return protocolo;
  }

  const [criado] = (await chamarSupabase("interest_submissions", registro)) as {
    id: string;
  }[];

  if (criado?.id && dados.workingGroupIds.length > 0) {
    await chamarSupabase(
      "submission_working_groups",
      dados.workingGroupIds.map((slug) => ({
        submission_id: criado.id,
        working_group_slug: slug,
      })),
    );
  }

  return protocolo;
}

/**
 * Rate limiting simples em memória.
 *
 * Suficiente para conter envios repetidos de um mesmo visitante. Como a Vercel
 * roda várias instâncias, para proteção forte troque por Upstash/Vercel KV.
 */
const janelas = new Map<string, number[]>();
const JANELA_MS = 10 * 60 * 1000;
const LIMITE = 5;

export function excedeuLimite(chave: string): boolean {
  const agora = Date.now();
  const registros = (janelas.get(chave) ?? []).filter((t) => agora - t < JANELA_MS);

  if (registros.length >= LIMITE) {
    janelas.set(chave, registros);
    return true;
  }

  registros.push(agora);
  janelas.set(chave, registros);

  if (janelas.size > 5000) janelas.clear();
  return false;
}
