import { Quote } from "lucide-react";

import { CactoDecorativo, LinhaSerra } from "@/components/ui/decoracoes";
import { Revelar } from "@/components/ui/revelar";
import { site } from "@/content/site";

export function SecaoProposito() {
  return (
    <section
      id="proposito"
      className="relative scroll-mt-24 overflow-hidden bg-verde-escuro py-20 lg:py-24"
      aria-labelledby="titulo-proposito"
    >
      {/* sol nascendo atrás do texto */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,138,9,0.42),transparent_66%)]"
        aria-hidden="true"
      />
      <LinhaSerra className="absolute inset-x-0 bottom-0 h-24 w-full text-white/10" />
      <CactoDecorativo className="absolute -left-4 bottom-0 h-56 w-28 text-white/10 lg:left-10" />
      <CactoDecorativo className="absolute -right-4 bottom-6 h-44 w-24 -scale-x-100 text-white/10 lg:right-16" />

      <div className="container-inova relative max-w-4xl text-center">
        <Revelar>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.16em] text-laranja uppercase ring-1 ring-white/15">
            Nosso propósito
          </span>
        </Revelar>

        <Revelar atraso={100}>
          <Quote
            size={40}
            className="mx-auto mt-8 text-laranja/60"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <blockquote>
            <p
              id="titulo-proposito"
              className="mt-5 font-display text-[1.55rem] leading-[1.32] font-extrabold tracking-[-0.02em] text-white sm:text-[2.05rem] lg:text-[2.35rem]"
            >
              {site.proposito}
            </p>
          </blockquote>
        </Revelar>

        <Revelar atraso={200}>
          <p className="mx-auto mt-8 max-w-2xl text-[1.02rem] leading-relaxed text-white/70">
            Inovação com raízes no sertão: nosso compromisso é com as pessoas
            que vivem, estudam, empreendem e constroem Salgueiro todos os dias.
          </p>
        </Revelar>
      </div>
    </section>
  );
}
