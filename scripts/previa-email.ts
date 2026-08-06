/**
 * Envia o e-mail de confirmação para os endereços informados, usando exatamente
 * o mesmo modelo que o site usa em produção.
 *
 *   npm run previa-email -- alguem@exemplo.com outra@exemplo.com
 *
 * Precisa de RESEND_API_KEY e EMAIL_REMETENTE no ambiente (use um .env.local
 * ou exporte as variáveis antes de rodar).
 */
import { enviarPrevia } from "../src/lib/email";

const destinatarios = process.argv.slice(2).filter((a) => a.includes("@"));

if (destinatarios.length === 0) {
  console.error(
    "Informe ao menos um destinatário:\n  npm run previa-email -- alguem@exemplo.com",
  );
  process.exit(1);
}

const nome = process.env.PREVIA_NOME ?? "Fulano de Tal";

// sem top-level await: o esbuild do tsx compila este arquivo como CJS
async function principal() {
  console.log(
    `Enviando prévia da confirmação para ${destinatarios.length} endereço(s)…`,
  );
  await enviarPrevia(destinatarios, nome);
  console.log("Pronto.");
}

principal().catch((erro) => {
  console.error(erro instanceof Error ? erro.message : erro);
  process.exit(1);
});
