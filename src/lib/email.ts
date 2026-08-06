import { gts } from "@/content/gts";
import {
  disponibilidades,
  site,
  tiposContribuicao,
  tiposParticipacao,
} from "@/content/site";

import type { Interesse } from "./validacoes";

/**
 * Envio de e-mail das manifestações de interesse.
 *
 * Usa a API HTTP do Resend via fetch — sem SDK, para não crescer o bundle da
 * função serverless. Se as variáveis não estiverem configuradas, as funções
 * viram no-op: a manifestação continua sendo salva e o visitante continua
 * recebendo o protocolo na tela. E-mail nunca derruba um cadastro.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_API_URL = process.env.RESEND_API_URL ?? "https://api.resend.com/emails";
const EMAIL_REMETENTE = process.env.EMAIL_REMETENTE;
const EMAIL_NOTIFICACAO = process.env.EMAIL_NOTIFICACAO;

export const emailConfigurado = Boolean(RESEND_API_KEY && EMAIL_REMETENTE);

// ---------------------------------------------------------------------------
// Tradução dos valores codificados para rótulos legíveis
// ---------------------------------------------------------------------------

function rotular(
  lista: { valor: string; rotulo: string }[],
  valor: string | undefined,
): string {
  if (!valor) return "—";
  return lista.find((item) => item.valor === valor)?.rotulo ?? valor;
}

function rotularVarios(
  lista: { valor: string; rotulo: string }[],
  valores: string[] | undefined,
): string {
  if (!valores?.length) return "—";
  return valores.map((valor) => rotular(lista, valor)).join(", ");
}

function rotularGTs(slugs: string[] | undefined): string {
  if (!slugs?.length) return "—";
  return slugs
    .map((slug) => gts.find((gt) => gt.slug === slug)?.nome ?? slug)
    .join(", ");
}

/** Escapa o conteúdo vindo do formulário antes de interpolar no HTML. */
function esc(valor: string | null | undefined): string {
  if (!valor) return "—";
  return valor
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ---------------------------------------------------------------------------
// Envio
// ---------------------------------------------------------------------------

type Mensagem = {
  para: string;
  assunto: string;
  html: string;
  texto: string;
  responderPara?: string;
};

async function enviar({ para, assunto, html, texto, responderPara }: Mensagem) {
  const resposta = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: EMAIL_REMETENTE,
      to: [para],
      subject: assunto,
      html,
      text: texto,
      ...(responderPara ? { reply_to: responderPara } : {}),
    }),
  });

  if (!resposta.ok) {
    throw new Error(
      `Resend respondeu ${resposta.status}: ${await resposta.text()}`,
    );
  }
}

// ---------------------------------------------------------------------------
// Modelos
// ---------------------------------------------------------------------------

const VERDE = "#08783F";
const VERDE_ESCURO = "#07542F";
const LARANJA = "#F38A09";
const TINTA = "#17352A";
const TINTA_SUAVE = "#5B6B64";

function moldura(conteudo: string): string {
  return `<!doctype html>
<html lang="pt-BR"><body style="margin:0;padding:24px;background:#FAFBF9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${TINTA};">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #E4E9E6;border-radius:16px;overflow:hidden;">
    <div style="background:${VERDE_ESCURO};padding:22px 28px;">
      <span style="font-size:19px;font-weight:800;letter-spacing:-0.5px;color:#ffffff;">INOVA</span>
      <span style="font-size:19px;font-weight:800;letter-spacing:-0.5px;color:${LARANJA};"> SALGUEIRO</span>
    </div>
    <div style="padding:28px;">${conteudo}</div>
    <div style="padding:18px 28px;background:#FDF8F0;border-top:1px solid #E4E9E6;font-size:12px;line-height:1.6;color:${TINTA_SUAVE};">
      Inova Salgueiro — Ecossistema de Inovação de Salgueiro<br />
      <a href="mailto:${site.contato.email}" style="color:${VERDE};">${site.contato.email}</a> · ${site.contato.endereco}
    </div>
  </div>
</body></html>`;
}

function linha(rotulo: string, valor: string): string {
  return `<tr>
    <td style="padding:8px 0;vertical-align:top;width:180px;font-size:13px;color:${TINTA_SUAVE};">${rotulo}</td>
    <td style="padding:8px 0;vertical-align:top;font-size:14px;color:${TINTA};">${valor}</td>
  </tr>`;
}

/** Confirmação enviada para quem preencheu o formulário. */
function confirmacao(dados: Interesse, protocolo: string): Mensagem {
  const primeiroNome = dados.fullName.trim().split(/\s+/)[0];
  const completo = dados.tipo === "completo";

  const html = moldura(`
    <h1 style="margin:0 0 14px;font-size:22px;line-height:1.3;color:${VERDE_ESCURO};">
      Recebemos seu interesse, ${esc(primeiroNome)}!
    </h1>
    <p style="margin:0 0 18px;font-size:15px;line-height:1.65;color:${TINTA_SUAVE};">
      Obrigado por querer construir Salgueiro com a gente. Sua manifestação foi
      registrada e será analisada pela governança do Inova Salgueiro.
    </p>
    <div style="margin:0 0 22px;padding:16px 20px;background:#EAF5EE;border-radius:12px;text-align:center;">
      <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;font-weight:700;color:${TINTA_SUAVE};">Seu protocolo</div>
      <div style="margin-top:4px;font-size:22px;font-weight:800;letter-spacing:-0.5px;color:${VERDE};">${esc(protocolo)}</div>
    </div>
    <h2 style="margin:0 0 10px;font-size:16px;color:${VERDE_ESCURO};">Próximos passos</h2>
    <ol style="margin:0 0 22px;padding-left:20px;font-size:14px;line-height:1.75;color:${TINTA_SUAVE};">
      <li>A governança analisa sua manifestação.</li>
      <li>Entramos em contato pelo e-mail ou telefone informado.</li>
      <li>Você é convidado para a reunião de acolhimento do GT escolhido.</li>
    </ol>
    ${
      completo
        ? ""
        : `<p style="margin:0 0 22px;padding:14px 18px;background:#FFF8EF;border-radius:12px;font-size:14px;line-height:1.65;color:${TINTA};">
             Você preencheu o cadastro rápido. Para acelerar sua entrada, conte
             quais Grupos de Trabalho te interessam e como pode contribuir:
             <a href="${site.url}/como-participar" style="color:${VERDE};font-weight:600;">completar meu cadastro</a>.
           </p>`
    }
    <p style="margin:0;font-size:13px;line-height:1.65;color:${TINTA_SUAVE};">
      Guarde este protocolo. Em caso de dúvida, responda a este e-mail.
    </p>
  `);

  const texto = [
    `Recebemos seu interesse, ${primeiroNome}!`,
    "",
    "Sua manifestação foi registrada e será analisada pela governança do Inova Salgueiro.",
    "",
    `Protocolo: ${protocolo}`,
    "",
    "Próximos passos:",
    "1. A governança analisa sua manifestação.",
    "2. Entramos em contato pelo e-mail ou telefone informado.",
    "3. Você é convidado para a reunião de acolhimento do GT escolhido.",
    "",
    completo ? "" : `Complete seu cadastro em ${site.url}/como-participar`,
    "",
    `Inova Salgueiro — ${site.contato.email}`,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    para: dados.email,
    assunto: `Recebemos seu interesse — protocolo ${protocolo}`,
    html,
    texto,
    responderPara: site.contato.email,
  };
}

/** Aviso enviado para a governança a cada nova manifestação. */
function notificacao(dados: Interesse, protocolo: string): Mensagem {
  const completo = dados.tipo === "completo";

  const linhas = [
    linha("Protocolo", esc(protocolo)),
    linha("Origem", completo ? "Formulário completo" : "Cadastro rápido (home)"),
    linha("Nome", esc(dados.fullName)),
    linha(
      "E-mail",
      `<a href="mailto:${esc(dados.email)}" style="color:${VERDE};">${esc(dados.email)}</a>`,
    ),
    linha("Empresa / instituição", esc(dados.institutionName)),
  ];

  if (completo) {
    linhas.push(
      linha("Telefone", esc(dados.phone)),
      linha("Município", esc(dados.city)),
      linha("Tipo de participação", esc(rotular(tiposParticipacao, dados.participationType))),
      linha("Área de atuação", esc(dados.professionalArea)),
      linha("GTs de interesse", esc(rotularGTs(dados.workingGroupIds))),
      linha("Formas de contribuição", esc(rotularVarios(tiposContribuicao, dados.contributionTypes))),
      linha("Disponibilidade", esc(rotular(disponibilidades, dados.availability))),
      linha("Motivação", esc(dados.motivation).replace(/\n/g, "<br />")),
    );
  } else {
    linhas.push(linha("Área de interesse", esc(dados.professionalArea)));
  }

  const html = moldura(`
    <h1 style="margin:0 0 6px;font-size:20px;line-height:1.3;color:${VERDE_ESCURO};">
      Nova manifestação de interesse
    </h1>
    <p style="margin:0 0 20px;font-size:14px;color:${TINTA_SUAVE};">
      ${completo ? "Formulário completo" : "Cadastro rápido da página inicial"} · ${esc(protocolo)}
    </p>
    <table style="width:100%;border-collapse:collapse;">${linhas.join("")}</table>
    <p style="margin:22px 0 0;font-size:13px;line-height:1.65;color:${TINTA_SUAVE};">
      Responda a este e-mail para falar diretamente com a pessoa interessada.
    </p>
  `);

  const texto = [
    "Nova manifestação de interesse",
    `Protocolo: ${protocolo}`,
    `Origem: ${completo ? "formulário completo" : "cadastro rápido"}`,
    `Nome: ${dados.fullName}`,
    `E-mail: ${dados.email}`,
    `Empresa/instituição: ${dados.institutionName || "—"}`,
    ...(completo
      ? [
          `Telefone: ${dados.phone}`,
          `Município: ${dados.city}`,
          `Tipo de participação: ${rotular(tiposParticipacao, dados.participationType)}`,
          `Área de atuação: ${dados.professionalArea || "—"}`,
          `GTs de interesse: ${rotularGTs(dados.workingGroupIds)}`,
          `Formas de contribuição: ${rotularVarios(tiposContribuicao, dados.contributionTypes)}`,
          `Disponibilidade: ${rotular(disponibilidades, dados.availability)}`,
          `Motivação: ${dados.motivation}`,
        ]
      : [`Área de interesse: ${dados.professionalArea}`]),
  ].join("\n");

  return {
    para: EMAIL_NOTIFICACAO as string,
    assunto: `[Inova] Nova manifestação — ${dados.fullName} (${protocolo})`,
    html,
    texto,
    responderPara: dados.email,
  };
}

// ---------------------------------------------------------------------------
// Ponto de entrada
// ---------------------------------------------------------------------------

/**
 * Dispara a confirmação para o visitante e o aviso para a governança.
 *
 * Nunca lança: uma falha de e-mail não pode invalidar uma manifestação que já
 * foi persistida. As falhas ficam registradas no log da função.
 */
export async function enviarEmailsDeInteresse(
  dados: Interesse,
  protocolo: string,
): Promise<void> {
  if (!emailConfigurado) {
    console.info(
      "[inova] E-mail não configurado — nenhuma mensagem enviada.",
      { protocolo, destinatario: dados.email },
    );
    return;
  }

  const mensagens: Mensagem[] = [confirmacao(dados, protocolo)];
  if (EMAIL_NOTIFICACAO) mensagens.push(notificacao(dados, protocolo));

  const resultados = await Promise.allSettled(mensagens.map(enviar));

  resultados.forEach((resultado, indice) => {
    if (resultado.status === "rejected") {
      console.error(
        `[inova] Falha ao enviar e-mail para ${mensagens[indice].para} (${protocolo}):`,
        resultado.reason,
      );
    }
  });
}
