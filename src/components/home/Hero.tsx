import { ArrowRight, LogIn, Sprout } from "lucide-react";

import { FormularioRapido } from "@/components/forms/FormularioRapido";
import { PanoramaSertao } from "@/components/home/PanoramaSertao";
import { BotaoLink } from "@/components/ui/botao";
import { OndaSeparadora, Selo } from "@/components/ui/decoracoes";
import { Revelar } from "@/components/ui/revelar";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="titulo-hero">
      <PanoramaSertao />
      {/* véu claro para garantir contraste do texto sobre a paisagem */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/94 via-white/72 to-white/30 lg:from-white/92 lg:via-white/58 lg:to-white/10"
        aria-hidden="true"
      />
      {/* clareia o topo para o header não competir com a paisagem */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
        aria-hidden="true"
      />

      <div className="container-inova relative grid items-center gap-12 pt-14 pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-20 lg:pb-36">
        <div>
          <Revelar>
            <Selo
              tom="verde"
              icone={<Sprout size={15} className="text-laranja" aria-hidden="true" />}
              className="ring-1 ring-verde/12"
            >
              Ecossistema de inovação de Salgueiro
            </Selo>
          </Revelar>

          <Revelar atraso={80}>
            <h1
              id="titulo-hero"
              className="mt-6 text-[2.3rem] leading-[1.08] text-pretty text-verde-escuro sm:text-[2.9rem] lg:text-[3.15rem]"
            >
              Conectando pessoas, ideias e instituições para{" "}
              <span className="text-laranja">inovar em Salgueiro</span>
            </h1>
          </Revelar>

          <Revelar atraso={160}>
            <p className="mt-6 max-w-xl text-[1.06rem] leading-[1.75] text-tinta-suave">
              O Inova Salgueiro é uma iniciativa colaborativa que articula
              pessoas, instituições, empresas, governo e organizações para
              fortalecer a inovação, o empreendedorismo e o desenvolvimento
              sustentável do território.
            </p>
          </Revelar>

          <Revelar atraso={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BotaoLink href="/gts" tamanho="lg">
                Conheça os GTs
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </BotaoLink>
              <BotaoLink href="/o-que-e" variante="secundario" tamanho="lg">
                <LogIn size={18} strokeWidth={2.1} aria-hidden="true" />
                Entrar no Inova
              </BotaoLink>
            </div>
          </Revelar>
        </div>

        <Revelar atraso={200} className="lg:pl-4">
          <div id="formulario" className="scroll-mt-28">
            <FormularioRapido />
          </div>
        </Revelar>
      </div>

      <OndaSeparadora className="absolute inset-x-0 bottom-0" cor="var(--color-fundo)" />
    </section>
  );
}
