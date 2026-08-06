import { ArrowRight, Check } from "lucide-react";

import { BotaoLink } from "@/components/ui/botao";
import { TituloSecao } from "@/components/ui/decoracoes";
import { IconeCirculo } from "@/components/ui/icones";
import { Revelar } from "@/components/ui/revelar";
import { segmentos } from "@/content/site";

export function SecaoQuemParticipa() {
  return (
    <section
      id="quem-participa"
      className="scroll-mt-24 bg-verde-suave py-20 lg:py-24"
      aria-labelledby="titulo-quem-participa"
    >
      <div className="container-inova">
        <Revelar>
          <TituloSecao
            id="titulo-quem-participa"
            descricao="O Inova Salgueiro se organiza em quádrupla hélice: empresas, instituições de ensino e pesquisa, poder público e sociedade civil na mesma mesa. Cada setor traz algo — e leva algo de volta."
          >
            Quem faz parte
          </TituloSecao>
        </Revelar>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {segmentos.map((segmento, indice) => (
            <Revelar key={segmento.sigla} atraso={indice * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-borda bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-alto lg:p-7">
                <div className="flex items-start gap-5">
                  <IconeCirculo
                    nome={segmento.icone}
                    tom={indice % 2 === 0 ? "laranja" : "verde"}
                  />
                  <div>
                    <span
                      className="font-display text-[0.72rem] font-bold tracking-[0.16em] text-tinta-suave"
                      aria-hidden="true"
                    >
                      {segmento.sigla}
                    </span>
                    <h3 className="mt-0.5 font-display text-[1.12rem] font-extrabold text-verde-escuro">
                      {segmento.titulo}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-[0.97rem] leading-relaxed text-tinta-suave">
                  {segmento.texto}
                </p>

                <h4 className="mt-6 font-display text-[0.78rem] font-bold tracking-[0.12em] text-verde uppercase">
                  O que encontra aqui
                </h4>
                <ul className="mt-3 space-y-2">
                  {segmento.ganhos.map((ganho) => (
                    <li key={ganho} className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-verde-claro text-verde"
                        aria-hidden="true"
                      >
                        <Check size={12} strokeWidth={3.2} />
                      </span>
                      <span className="text-[0.93rem] leading-relaxed text-tinta">
                        {ganho}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Revelar>
          ))}
        </div>

        <Revelar atraso={180}>
          <div className="mt-10 flex justify-center">
            <BotaoLink href="/como-participar" variante="secundario">
              Ver o que sua organização traz e recebe
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </BotaoLink>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
