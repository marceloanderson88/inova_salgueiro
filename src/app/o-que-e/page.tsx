import type { Metadata } from "next";
import { ArrowRight, Check, Info, UserPlus } from "lucide-react";

import { CabecalhoPagina } from "@/components/layout/CabecalhoPagina";
import { BotaoLink } from "@/components/ui/botao";
import { LinhaSerra } from "@/components/ui/decoracoes";
import { IconeCirculo } from "@/components/ui/icones";
import { Revelar } from "@/components/ui/revelar";
import { avisoInstitucional, comoAtuamos, pilares, site } from "@/content/site";

export const metadata: Metadata = {
  title: "O que é",
  description:
    "O Inova Salgueiro é o movimento que articula o ecossistema de inovação de Salgueiro: conheça seu propósito, seu papel e como ele atua no território.",
  alternates: { canonical: "/o-que-e" },
};

const papeis = [
  "Articulador do ecossistema local de inovação",
  "Conector entre pessoas, empresas, instituições de ensino, governo e organizações",
  "Espaço de planejamento colaborativo",
  "Mobilizador de parceiros, recursos, competências e oportunidades",
  "Indutor de programas e ações executados pelos parceiros do ecossistema",
];

const distincao = [
  {
    titulo: "Articulação",
    texto: "É o papel do núcleo: aproximar, organizar, planejar e acompanhar.",
    tom: "verde" as const,
  },
  {
    titulo: "Execução",
    texto:
      "Responsabilidade de parceiros, instituições e organizações participantes de cada iniciativa.",
    tom: "laranja" as const,
  },
  {
    titulo: "Execução própria eventual",
    texto:
      "Rodas de conversa, encontros, mobilizações e ações colaborativas de baixa complexidade.",
    tom: "verde" as const,
  },
];

export default function PaginaOQueE() {
  return (
    <>
      <CabecalhoPagina
        selo="O movimento"
        titulo="O que é o Inova Salgueiro"
        descricao="Uma iniciativa colaborativa que articula pessoas, instituições, empresas, governo e organizações para fortalecer a inovação, o empreendedorismo e o desenvolvimento sustentável de Salgueiro e região."
        migalhas={[{ rotulo: "O que é" }]}
      />

      {/* Propósito */}
      <section className="py-16 lg:py-20" aria-labelledby="proposito">
        <div className="container-inova">
          <Revelar>
            <div className="relative overflow-hidden rounded-3xl bg-verde-escuro px-7 py-12 text-center sm:px-12">
              <div
                className="pointer-events-none absolute -top-28 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,138,9,0.4),transparent_66%)]"
                aria-hidden="true"
              />
              <LinhaSerra className="absolute inset-x-0 bottom-0 h-20 w-full text-white/10" />
              <div className="relative">
                <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-laranja uppercase">
                  Nosso propósito
                </p>
                <h2
                  id="proposito"
                  className="mx-auto mt-5 max-w-3xl text-[1.45rem] leading-[1.35] text-white sm:text-[1.95rem]"
                >
                  {site.proposito}
                </h2>
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      {/* Pilares */}
      <section className="pb-16 lg:pb-20" aria-labelledby="pilares">
        <div className="container-inova">
          <Revelar>
            <h2 id="pilares" className="text-[1.6rem] text-verde-escuro sm:text-[2rem]">
              Quatro pilares sustentam o movimento
            </h2>
          </Revelar>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pilares.map((pilar, indice) => (
              <Revelar key={pilar.titulo} atraso={indice * 80}>
                <article className="group flex h-full items-start gap-5 rounded-2xl border border-borda bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-alto">
                  <IconeCirculo
                    nome={pilar.icone}
                    tom={indice % 2 === 0 ? "verde" : "laranja"}
                  />
                  <div>
                    <h3 className="font-display text-[1.1rem] font-extrabold text-verde-escuro">
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
        </div>
      </section>

      {/* Papel */}
      <section className="bg-verde-suave py-16 lg:py-20" aria-labelledby="papel">
        <div className="container-inova grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Revelar>
            <h2 id="papel" className="text-[1.6rem] text-verde-escuro sm:text-[2rem]">
              Qual é o papel do Inova Salgueiro
            </h2>
            <p className="mt-5 text-[1.02rem] leading-[1.75] text-tinta-suave">
              O Inova Salgueiro não substitui nenhuma instituição do território.
              Ele existe para que o que já acontece em Salgueiro converse,
              se some e alcance mais gente.
            </p>
            <ul className="mt-7 space-y-3.5">
              {papeis.map((papel) => (
                <li key={papel} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-verde text-white"
                    aria-hidden="true"
                  >
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-[0.99rem] leading-relaxed text-tinta">{papel}</span>
                </li>
              ))}
            </ul>
          </Revelar>

          <Revelar atraso={120}>
            <div className="space-y-4">
              {distincao.map((item) => (
                <div
                  key={item.titulo}
                  className={`rounded-2xl border-l-4 bg-white p-6 shadow-card ${
                    item.tom === "verde" ? "border-l-verde" : "border-l-laranja"
                  }`}
                >
                  <h3 className="font-display text-[1.05rem] font-extrabold text-verde-escuro">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-[0.96rem] leading-relaxed text-tinta-suave">
                    {item.texto}
                  </p>
                </div>
              ))}

              <aside className="flex items-start gap-4 rounded-2xl border border-laranja/25 bg-laranja-suave p-6">
                <Info
                  size={22}
                  className="mt-0.5 shrink-0 text-laranja-escuro"
                  aria-hidden="true"
                />
                <p className="text-[0.95rem] leading-relaxed text-tinta">
                  {avisoInstitucional}
                </p>
              </aside>
            </div>
          </Revelar>
        </div>
      </section>

      {/* Como atuamos */}
      <section className="py-16 lg:py-20" aria-labelledby="ciclo">
        <div className="container-inova">
          <Revelar>
            <h2 id="ciclo" className="text-[1.6rem] text-verde-escuro sm:text-[2rem]">
              Como atuamos, na prática
            </h2>
          </Revelar>

          <ol className="mt-10 space-y-3">
            {comoAtuamos.map((etapa, indice) => (
              <Revelar key={etapa.titulo} atraso={indice * 70} as="li">
                <div className="flex items-start gap-5 rounded-2xl border border-borda bg-white p-6 shadow-card">
                  <span
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display font-extrabold text-white ${
                      indice % 2 === 0 ? "bg-verde" : "bg-laranja"
                    }`}
                    aria-hidden="true"
                  >
                    {indice + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.06rem] font-extrabold text-verde-escuro">
                      {etapa.titulo}
                    </h3>
                    <p className="mt-1.5 text-[0.96rem] leading-relaxed text-tinta-suave">
                      {etapa.texto}
                    </p>
                  </div>
                </div>
              </Revelar>
            ))}
          </ol>

          <Revelar atraso={150}>
            <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
              <BotaoLink href="/gts" tamanho="lg">
                Conheça os GTs
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </BotaoLink>
              <BotaoLink href="/como-participar" variante="secundario" tamanho="lg">
                Quero fazer parte
                <UserPlus size={18} strokeWidth={2.2} aria-hidden="true" />
              </BotaoLink>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  );
}
