import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

import { BotaoLink } from "@/components/ui/botao";
import { CactoDecorativo } from "@/components/ui/decoracoes";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Manifestação recebida",
  description: "Recebemos sua manifestação de interesse no Inova Salgueiro.",
  robots: { index: false, follow: true },
};

const proximosPassos = [
  "A governança do Inova Salgueiro analisa sua manifestação.",
  "Você recebe um contato pelo e-mail ou telefone informado.",
  "É feito o convite para a reunião de acolhimento do GT escolhido.",
];

export default async function PaginaObrigado({
  searchParams,
}: {
  searchParams: Promise<{ protocolo?: string }>;
}) {
  const { protocolo } = await searchParams;

  return (
    <section className="relative overflow-hidden bg-verde-suave py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,138,9,0.16),transparent_66%)]"
        aria-hidden="true"
      />
      <CactoDecorativo className="absolute -left-6 bottom-8 hidden h-56 w-28 text-verde/10 lg:block" />
      <CactoDecorativo className="absolute -right-6 bottom-16 hidden h-44 w-24 -scale-x-100 text-laranja/15 lg:block" />

      <div className="container-inova relative max-w-2xl text-center">
        <CheckCircle2
          size={64}
          className="mx-auto text-verde"
          strokeWidth={1.6}
          aria-hidden="true"
        />

        <h1 className="mt-6 text-[2rem] leading-tight text-verde-escuro sm:text-[2.5rem]">
          Manifestação recebida!
        </h1>
        <p className="mt-5 text-[1.05rem] leading-[1.75] text-tinta-suave">
          Obrigado por querer construir Salgueiro com a gente. Sua manifestação
          de interesse foi registrada e será analisada pela governança do
          movimento.
        </p>

        {protocolo ? (
          <div className="mt-8 inline-flex flex-col items-center rounded-2xl border border-verde/20 bg-white px-8 py-5 shadow-card">
            <span className="font-display text-[0.75rem] font-bold tracking-[0.14em] text-tinta-suave uppercase">
              Seu protocolo
            </span>
            <strong className="mt-1.5 font-display text-[1.5rem] font-extrabold tracking-tight text-verde">
              {protocolo}
            </strong>
            <span className="mt-1 text-[0.85rem] text-tinta-suave">
              Guarde este número para acompanhar seu processo.
            </span>
          </div>
        ) : null}

        <div className="mt-10 rounded-2xl border border-borda bg-white p-7 text-left shadow-card">
          <h2 className="font-display text-[1.1rem] font-extrabold text-verde-escuro">
            Próximos passos
          </h2>
          <ol className="mt-4 space-y-3">
            {proximosPassos.map((passo, indice) => (
              <li key={passo} className="flex items-start gap-3">
                <span
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-verde-claro font-display text-[0.85rem] font-extrabold text-verde"
                  aria-hidden="true"
                >
                  {indice + 1}
                </span>
                <span className="text-[0.97rem] leading-relaxed text-tinta-suave">
                  {passo}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-6 flex items-start gap-3 rounded-xl bg-laranja-suave px-4 py-3 text-[0.92rem] leading-relaxed text-tinta">
            <Mail size={18} className="mt-0.5 shrink-0 text-laranja-escuro" aria-hidden="true" />
            <span>
              Dúvidas? Escreva para{" "}
              <a
                href={`mailto:${site.contato.email}`}
                className="link-sublinhado font-semibold text-verde"
              >
                {site.contato.email}
              </a>
              .
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <BotaoLink href="/gts" tamanho="lg">
            Conhecer os GTs
            <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </BotaoLink>
          <BotaoLink href="/" variante="secundario" tamanho="lg">
            Voltar ao início
          </BotaoLink>
        </div>
      </div>
    </section>
  );
}
