import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

import { BotaoLink } from "@/components/ui/botao";
import { CactoDecorativo } from "@/components/ui/decoracoes";
import { site } from "@/content/site";
import { emailConfigurado } from "@/lib/email";

export const metadata: Metadata = {
  title: "Manifestação recebida",
  description: "Recebemos sua manifestação de interesse no Inova Salgueiro.",
  robots: { index: false, follow: true },
};

export default function PaginaObrigado() {
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
          Obrigado pelo seu interesse!
        </h1>

        <p className="mt-5 text-[1.05rem] leading-[1.75] text-tinta-suave">
          {emailConfigurado ? (
            <>
              Sua manifestação foi enviada e um e-mail de confirmação já seguiu
              para o endereço que você informou. Em breve a governança do Inova
              Salgueiro entrará em contato com você.
            </>
          ) : (
            <>
              Sua manifestação foi enviada e registrada. Em breve a governança
              do Inova Salgueiro entrará em contato pelo e-mail que você
              informou.
            </>
          )}
        </p>

        <p className="mt-5 text-[1.02rem] leading-[1.75] text-tinta-suave">
          Obrigado por querer construir Salgueiro com a gente — é com gente como
          você que este ecossistema acontece.
        </p>

        <p className="mx-auto mt-8 flex max-w-md items-start gap-3 rounded-2xl border border-borda bg-white px-5 py-4 text-left text-[0.94rem] leading-relaxed text-tinta-suave">
          <Mail size={19} className="mt-0.5 shrink-0 text-laranja" aria-hidden="true" />
          <span>
            Alguma dúvida enquanto isso? Escreva para{" "}
            <a
              href={`mailto:${site.contato.email}`}
              className="link-sublinhado font-semibold text-verde"
            >
              {site.contato.email}
            </a>
            .
          </span>
        </p>

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
