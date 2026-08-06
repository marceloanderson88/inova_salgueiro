import { ArrowRight } from "lucide-react";

import { CardDesafio } from "@/components/desafios/CardDesafio";
import { BotaoLink } from "@/components/ui/botao";
import { TituloSecao } from "@/components/ui/decoracoes";
import { Revelar } from "@/components/ui/revelar";
import { desafiosDestaque } from "@/content/desafios";

export function SecaoDesafios() {
  return (
    <section
      id="desafios"
      className="relative scroll-mt-24 overflow-hidden bg-areia py-20 lg:py-24"
      aria-labelledby="titulo-desafios"
    >
      <div className="textura-areia pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="container-inova relative">
        <Revelar>
          <TituloSecao
            id="titulo-desafios"
            descricao="Estes são os problemas que motivaram a criação do movimento — e que orientam o trabalho dos GTs."
          >
            Desafios que queremos enfrentar
          </TituloSecao>
        </Revelar>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {desafiosDestaque.map((desafio, indice) => (
            <Revelar key={desafio.slug} atraso={indice * 80}>
              <CardDesafio
                desafio={desafio}
                tom={indice % 2 === 0 ? "verde" : "laranja"}
              />
            </Revelar>
          ))}
        </div>

        <Revelar atraso={150}>
          <div className="mt-10 flex justify-center">
            <BotaoLink href="/desafios" variante="secundario">
              Ver todos os desafios
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </BotaoLink>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
