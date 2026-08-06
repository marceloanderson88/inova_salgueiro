import { after, NextResponse } from "next/server";

import { excedeuLimite, salvarInteresse } from "@/lib/armazenamento";
import { enviarEmailsDeInteresse } from "@/lib/email";
import { esquemaInteresse } from "@/lib/validacoes";

export const runtime = "nodejs";

function identificar(request: Request): string {
  const encaminhado = request.headers.get("x-forwarded-for");
  return encaminhado?.split(",")[0]?.trim() || "desconhecido";
}

export async function POST(request: Request) {
  let corpo: unknown;

  try {
    corpo = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  const resultado = esquemaInteresse.safeParse(corpo);

  if (!resultado.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Dados inválidos.",
        campos: resultado.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const dados = resultado.data;

  // Honeypot preenchido = bot. Responde 200 para não revelar a proteção.
  if (dados.website) {
    return NextResponse.json({ success: true });
  }

  if (excedeuLimite(`${identificar(request)}|${dados.email}`)) {
    return NextResponse.json(
      {
        success: false,
        error: "Muitas tentativas em pouco tempo. Aguarde alguns minutos.",
      },
      { status: 429 },
    );
  }

  try {
    const protocolo = await salvarInteresse(dados);

    // Os e-mails saem depois da resposta: o visitante vê a confirmação na hora
    // e uma falha no envio não invalida a manifestação já registrada.
    after(() => enviarEmailsDeInteresse(dados, protocolo));

    // O protocolo fica só do lado do servidor — é referência da governança,
    // não algo que o visitante precise guardar.
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (erro) {
    console.error("[inova] Falha ao salvar manifestação de interesse:", erro);
    return NextResponse.json(
      {
        success: false,
        error:
          "Não foi possível registrar sua manifestação agora. Tente novamente em instantes.",
      },
      { status: 500 },
    );
  }
}
