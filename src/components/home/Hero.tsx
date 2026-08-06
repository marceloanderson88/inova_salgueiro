import { ArrowRight, Sprout, UserPlus } from "lucide-react";

import { PanoramaSertao } from "@/components/home/PanoramaSertao";
import { MarcaEmpilhada } from "@/components/marca/Logo";
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

      <div className="container-inova relative grid items-center gap-12 pt-14 pb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-20 lg:pb-36">
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
              <BotaoLink href="/como-participar" tamanho="lg">
                Tenho interesse em participar
                <UserPlus size={18} strokeWidth={2.2} aria-hidden="true" />
              </BotaoLink>
              <BotaoLink href="/gts" variante="secundario" tamanho="lg">
                Conheça os GTs
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </BotaoLink>
            </div>
          </Revelar>
        </div>

        {/* A marca ocupa a coluna que antes era do formulário curto. */}
        <Revelar atraso={200} className="hidden justify-center lg:flex">
          <div className="relative flex items-center justify-center">
            <div
              className="pointer-events-none absolute h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96),rgba(255,255,255,0.75)_38%,rgba(255,255,255,0)_72%)]"
              aria-hidden="true"
            />
            <MarcaEmpilhada className="relative text-[5.6rem] xl:text-[6.4rem]" />
          </div>
        </Revelar>
      </div>

      <OndaSeparadora className="absolute inset-x-0 bottom-0" cor="var(--color-fundo)" />
    </section>
  );
}
