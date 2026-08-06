import type { Metadata } from "next";
import { Check } from "lucide-react";

import { CabecalhoPagina } from "@/components/layout/CabecalhoPagina";
import { regrasParticipacao } from "@/content/site";

export const metadata: Metadata = {
  title: "Regras de participação",
  description:
    "Princípios, direitos e responsabilidades de quem integra os Grupos de Trabalho do Inova Salgueiro.",
  alternates: { canonical: "/termos" },
};

const principios = [
  {
    titulo: "Colaboração acima da disputa",
    texto:
      "O espaço é de construção coletiva. Divergência de ideias é bem-vinda; disputa por protagonismo, não.",
  },
  {
    titulo: "Respeito às pessoas e às instituições",
    texto:
      "Toda pessoa participante é tratada com respeito, independentemente de origem, cargo, formação ou instituição de vínculo.",
  },
  {
    titulo: "Transparência",
    texto:
      "Decisões, agendas e resultados dos GTs são registrados e comunicados ao ecossistema.",
  },
  {
    titulo: "Compromisso com o território",
    texto:
      "As iniciativas do movimento têm como destinatário final a população de Salgueiro e região.",
  },
  {
    titulo: "Contribuição ativa",
    texto:
      "Participar é assumir tarefas. Integrantes contribuem com tempo, competências, conexões ou recursos.",
  },
];

const responsabilidades = [
  "Comparecer às reuniões do GT ou justificar a ausência com antecedência.",
  "Assumir e concluir as tarefas com as quais se comprometer.",
  "Manter dados de contato atualizados junto à governança.",
  "Comunicar eventual afastamento ou saída do grupo.",
  "Não utilizar o nome do Inova Salgueiro para fins particulares ou político-partidários.",
  "Preservar informações de caráter reservado compartilhadas nos grupos.",
];

export default function PaginaTermos() {
  return (
    <>
      <CabecalhoPagina
        selo="Participação"
        titulo="Regras de participação"
        descricao="Integrar o Inova Salgueiro é assumir um compromisso com o território e com as pessoas que constroem o movimento. Estas são as regras que orientam essa convivência."
        migalhas={[{ rotulo: "Termos" }]}
      />

      <article className="container-inova max-w-3xl py-16 lg:py-20">
        <section aria-labelledby="entrada">
          <h2 id="entrada" className="text-[1.4rem] text-verde-escuro sm:text-[1.7rem]">
            Como funciona a entrada
          </h2>
          <ul className="mt-6 space-y-3">
            {regrasParticipacao.map((regra) => (
              <li key={regra} className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-verde text-white"
                  aria-hidden="true"
                >
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-[1rem] leading-relaxed text-tinta">{regra}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14" aria-labelledby="principios">
          <h2 id="principios" className="text-[1.4rem] text-verde-escuro sm:text-[1.7rem]">
            Princípios de convivência
          </h2>
          <div className="mt-6 space-y-3">
            {principios.map((principio) => (
              <div
                key={principio.titulo}
                className="rounded-2xl border border-borda bg-white p-6 shadow-card"
              >
                <h3 className="font-display text-[1.05rem] font-extrabold text-verde-escuro">
                  {principio.titulo}
                </h3>
                <p className="mt-2 text-[0.96rem] leading-relaxed text-tinta-suave">
                  {principio.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="responsabilidades">
          <h2
            id="responsabilidades"
            className="text-[1.4rem] text-verde-escuro sm:text-[1.7rem]"
          >
            Responsabilidades de quem participa
          </h2>
          <ul className="mt-6 space-y-3">
            {responsabilidades.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-laranja"
                  aria-hidden="true"
                />
                <span className="text-[1rem] leading-relaxed text-tinta-suave">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14" aria-labelledby="desligamento">
          <h2 id="desligamento" className="text-[1.4rem] text-verde-escuro sm:text-[1.7rem]">
            Desligamento
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.8] text-tinta-suave">
            A participação pode ser encerrada a pedido da pessoa integrante, a
            qualquer momento, ou por decisão da governança em caso de ausência
            reiterada sem justificativa ou de conduta incompatível com os
            princípios acima. O desligamento não impede uma nova manifestação de
            interesse no futuro.
          </p>
        </section>
      </article>
    </>
  );
}
