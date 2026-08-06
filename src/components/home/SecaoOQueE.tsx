import { ArrowRight } from "lucide-react";

import { BotaoLink } from "@/components/ui/botao";
import { TituloSecao } from "@/components/ui/decoracoes";
import { IconeCirculo } from "@/components/ui/icones";
import { Revelar } from "@/components/ui/revelar";
import { pilares } from "@/content/site";

export function SecaoOQueE() {
  return (
    <section
      id="o-que-e"
      className="scroll-mt-24 py-20 lg:py-24"
      aria-labelledby="titulo-o-que-e"
    >
      <div className="container-inova">
        <Revelar>
          <TituloSecao id="titulo-o-que-e">O que é o Inova Salgueiro?</TituloSecao>
        </Revelar>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {pilares.map((pilar, indice) => (
            <Revelar key={pilar.titulo} atraso={indice * 90}>
              <article className="group flex h-full items-start gap-5 rounded-2xl border border-borda bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-verde/25 hover:shadow-alto lg:p-7">
                <IconeCirculo
                  nome={pilar.icone}
                  tom={indice % 2 === 0 ? "verde" : "laranja"}
                />
                <div>
                  <h3 className="font-display text-[1.12rem] font-extrabold text-verde-escuro">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-tinta-suave">
                    {pilar.texto}
                  </p>
                </div>
              </article>
            </Revelar>
          ))}
        </div>

        <Revelar atraso={200}>
          <div className="mt-10 flex justify-center">
            <BotaoLink href="/o-que-e" variante="secundario">
              Conhecer o movimento por dentro
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </BotaoLink>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
