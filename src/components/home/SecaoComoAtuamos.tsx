import { Info } from "lucide-react";

import { TituloSecao } from "@/components/ui/decoracoes";
import { Revelar } from "@/components/ui/revelar";
import { avisoInstitucional, comoAtuamos } from "@/content/site";

export function SecaoComoAtuamos() {
  return (
    <section
      id="como-atuamos"
      className="scroll-mt-24 bg-verde-suave py-20 lg:py-24"
      aria-labelledby="titulo-como-atuamos"
    >
      <div className="container-inova">
        <Revelar>
          <TituloSecao
            id="titulo-como-atuamos"
            descricao="O Inova Salgueiro trabalha em ciclo: escuta o território, articula quem pode responder e acompanha o que foi feito."
          >
            Como atuamos
          </TituloSecao>
        </Revelar>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {comoAtuamos.map((etapa, indice) => (
            <Revelar key={etapa.titulo} atraso={indice * 80} as="li">
              <div className="relative flex h-full flex-col rounded-2xl border border-borda bg-white p-6 shadow-card">
                <span
                  className="font-display text-[2.4rem] leading-none font-extrabold text-verde/12"
                  aria-hidden="true"
                >
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[1.02rem] leading-snug font-extrabold text-verde-escuro">
                  {etapa.titulo}
                </h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-tinta-suave">
                  {etapa.texto}
                </p>
              </div>
            </Revelar>
          ))}
        </ol>

        <Revelar atraso={200}>
          <aside className="mt-10 flex items-start gap-4 rounded-2xl border border-laranja/25 bg-laranja-suave p-6">
            <Info
              size={22}
              className="mt-0.5 shrink-0 text-laranja-escuro"
              aria-hidden="true"
            />
            <p className="text-[0.97rem] leading-relaxed text-tinta">
              {avisoInstitucional}
            </p>
          </aside>
        </Revelar>
      </div>
    </section>
  );
}
