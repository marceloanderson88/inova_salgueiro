import { ArrowRight } from "lucide-react";

import { CardGT } from "@/components/gts/CardGT";
import { BotaoLink } from "@/components/ui/botao";
import { CactoDecorativo, TituloSecao } from "@/components/ui/decoracoes";
import { Revelar } from "@/components/ui/revelar";
import { gts } from "@/content/gts";

export function SecaoGTs() {
  return (
    <section
      id="gts"
      className="relative scroll-mt-24 overflow-hidden py-20 lg:py-24"
      aria-labelledby="titulo-gts"
    >
      <CactoDecorativo className="absolute -right-6 top-24 hidden h-64 w-32 text-verde/10 xl:block" />
      <CactoDecorativo className="absolute -left-8 bottom-16 hidden h-52 w-28 -scale-x-100 text-laranja/10 xl:block" />

      <div className="container-inova relative">
        <Revelar>
          <TituloSecao
            id="titulo-gts"
            descricao="Seis grupos de trabalho organizam a agenda do ecossistema. Cada um reúne pessoas e instituições em torno de um recorte específico do desenvolvimento de Salgueiro."
          >
            GTs em destaque
          </TituloSecao>
        </Revelar>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gts.map((gt, indice) => (
            <Revelar key={gt.slug} atraso={(indice % 3) * 90}>
              <CardGT gt={gt} tom={indice % 2 === 0 ? "verde" : "laranja"} />
            </Revelar>
          ))}
        </div>

        <Revelar atraso={150}>
          <div className="mt-10 flex justify-center">
            <BotaoLink href="/gts" variante="secundario">
              Ver todos os Grupos de Trabalho
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </BotaoLink>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
