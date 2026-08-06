import type { Metadata } from "next";

import { CabecalhoPagina } from "@/components/layout/CabecalhoPagina";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Aviso de privacidade",
  description:
    "Como o Inova Salgueiro coleta, utiliza, armazena e protege os dados pessoais informados no site.",
  alternates: { canonical: "/privacidade" },
};

const secoes = [
  {
    titulo: "1. Quem trata seus dados",
    paragrafos: [
      `O Inova Salgueiro é o responsável pelo tratamento dos dados pessoais coletados neste site. Para qualquer solicitação relacionada a dados pessoais, o canal oficial é o e-mail ${site.contato.email}.`,
    ],
  },
  {
    titulo: "2. Quais dados coletamos",
    paragrafos: [
      "Coletamos apenas os dados que você informa voluntariamente no formulário de manifestação de interesse: nome completo, e-mail, telefone/WhatsApp, município, tipo de participação, organização ou instituição, área de atuação, Grupos de Trabalho de interesse, formas de contribuição, motivação e disponibilidade.",
      "Não utilizamos cookies de rastreamento publicitário e não coletamos dados sensíveis.",
    ],
  },
  {
    titulo: "3. Finalidade do uso",
    paragrafos: [
      "Os dados são utilizados exclusivamente para: (a) avaliar e organizar as manifestações de interesse; (b) entrar em contato com você sobre sua participação; (c) encaminhar sua manifestação à liderança do Grupo de Trabalho escolhido; e (d) produzir indicadores agregados e anônimos sobre o ecossistema.",
    ],
  },
  {
    titulo: "4. Base legal",
    paragrafos: [
      "O tratamento é realizado com fundamento no consentimento do titular (art. 7º, I, da Lei nº 13.709/2018 — LGPD), manifestado no momento do envio do formulário.",
    ],
  },
  {
    titulo: "5. Compartilhamento",
    paragrafos: [
      "Seus dados podem ser compartilhados com as lideranças dos Grupos de Trabalho indicados por você e com a governança do movimento, sempre no contexto da sua manifestação de interesse. Não vendemos, alugamos nem cedemos dados pessoais a terceiros para fins comerciais.",
    ],
  },
  {
    titulo: "6. Armazenamento e retenção",
    paragrafos: [
      "Os dados ficam armazenados em ambiente controlado, com acesso restrito por perfil de usuário. Manifestações não aproveitadas são mantidas por até 24 meses, período após o qual são eliminadas ou anonimizadas.",
    ],
  },
  {
    titulo: "7. Seus direitos",
    paragrafos: [
      "Você pode, a qualquer momento, solicitar confirmação do tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos seus dados, bem como revogar o consentimento.",
      `Para exercer esses direitos, escreva para ${site.contato.email}. O pedido será respondido em até 15 dias.`,
    ],
  },
  {
    titulo: "8. Segurança",
    paragrafos: [
      "Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda ou alteração indevida, incluindo transmissão criptografada, controle de acesso por papel e registro de alterações sensíveis.",
    ],
  },
  {
    titulo: "9. Atualizações deste aviso",
    paragrafos: [
      "Este aviso pode ser atualizado para refletir mudanças no funcionamento do movimento ou na legislação aplicável. A data da última atualização é sempre indicada no topo desta página.",
    ],
  },
];

export default function PaginaPrivacidade() {
  return (
    <>
      <CabecalhoPagina
        selo="LGPD"
        titulo="Aviso de privacidade"
        descricao="Este aviso explica como o Inova Salgueiro trata os dados pessoais informados neste site, em conformidade com a Lei Geral de Proteção de Dados."
        migalhas={[{ rotulo: "Privacidade" }]}
      />

      <article className="container-inova max-w-3xl py-16 lg:py-20">
        <p className="text-[0.9rem] text-tinta-suave">
          Última atualização:{" "}
          {new Date().toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="mt-10 space-y-10">
          {secoes.map((secao) => (
            <section key={secao.titulo}>
              <h2 className="text-[1.25rem] text-verde-escuro">{secao.titulo}</h2>
              {secao.paragrafos.map((paragrafo) => (
                <p
                  key={paragrafo.slice(0, 40)}
                  className="mt-3 text-[1rem] leading-[1.8] text-tinta-suave"
                >
                  {paragrafo}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
