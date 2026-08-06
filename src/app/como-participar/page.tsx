import type { Metadata } from "next";
import { Suspense } from "react";
import { Check, Gift, HandHeart, Info } from "lucide-react";

import { FormularioCompleto } from "@/components/forms/FormularioCompleto";
import { CabecalhoPagina } from "@/components/layout/CabecalhoPagina";
import { Icone } from "@/components/ui/icones";
import { Revelar } from "@/components/ui/revelar";
import {
  passosParticipacao,
  regrasParticipacao,
  trocaEcossistema,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Como participar",
  description:
    "Manifeste seu interesse em integrar o Inova Salgueiro: conheça as etapas, as regras de participação e preencha o formulário.",
  alternates: { canonical: "/como-participar" },
};

const etapas = [
  ...passosParticipacao,
  {
    numero: 5,
    icone: "user" as const,
    titulo: "Receber confirmação",
    texto: "Você recebe um protocolo assim que a manifestação é registrada.",
  },
  {
    numero: 6,
    icone: "users" as const,
    titulo: "Aguardar contato",
    texto: "A governança ou a liderança do GT entra em contato com você.",
  },
  {
    numero: 7,
    icone: "book" as const,
    titulo: "Reunião de acolhimento",
    texto: "Você conhece o grupo, a agenda e onde pode começar a contribuir.",
  },
];

export default function PaginaComoParticipar() {
  return (
    <>
      <CabecalhoPagina
        selo="Como participar"
        titulo="Existe um lugar para você no Inova Salgueiro"
        descricao="Participar é simples: conte quem você é, escolha os Grupos de Trabalho com mais aderência ao seu perfil e diga como pode contribuir. A governança faz o resto."
        migalhas={[{ rotulo: "Como participar" }]}
      />

      {/* Etapas */}
      <section className="py-16 lg:py-20" aria-labelledby="etapas">
        <div className="container-inova">
          <Revelar>
            <h2 id="etapas" className="text-[1.6rem] text-verde-escuro sm:text-[2rem]">
              As sete etapas do caminho
            </h2>
          </Revelar>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((etapa, indice) => (
              <Revelar key={etapa.numero} atraso={indice * 60} as="li">
                <div className="flex h-full flex-col rounded-2xl border border-borda bg-white p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display font-extrabold text-white ${
                        indice % 2 === 0 ? "bg-verde" : "bg-laranja"
                      }`}
                      aria-hidden="true"
                    >
                      {etapa.numero}
                    </span>
                    <Icone
                      nome={etapa.icone}
                      size={24}
                      className={indice % 2 === 0 ? "text-verde" : "text-laranja"}
                    />
                  </div>
                  <h3 className="mt-4 font-display text-[1.02rem] font-extrabold text-verde-escuro">
                    {etapa.titulo}
                  </h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-tinta-suave">
                    {etapa.texto}
                  </p>
                </div>
              </Revelar>
            ))}
          </ol>
        </div>
      </section>

      {/* Regras */}
      <section className="bg-verde-suave py-16 lg:py-20" aria-labelledby="regras">
        <div className="container-inova">
          <Revelar>
            <h2 id="regras" className="text-[1.6rem] text-verde-escuro sm:text-[2rem]">
              Regras de participação
            </h2>
            <p className="mt-4 max-w-2xl text-[1.01rem] leading-relaxed text-tinta-suave">
              Antes de enviar sua manifestação, é importante conhecer como
              funciona a entrada nos Grupos de Trabalho.
            </p>
          </Revelar>

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {regrasParticipacao.map((regra, indice) => (
              <Revelar key={regra} atraso={indice * 60} as="li">
                <div className="flex h-full items-start gap-3 rounded-2xl border border-borda bg-white p-5">
                  <Info size={19} className="mt-0.5 shrink-0 text-laranja" aria-hidden="true" />
                  <p className="text-[0.95rem] leading-relaxed text-tinta">{regra}</p>
                </div>
              </Revelar>
            ))}
          </ul>
        </div>
      </section>

      {/* Via de mão dupla */}
      <section className="py-16 lg:py-20" aria-labelledby="troca">
        <div className="container-inova">
          <Revelar>
            <h2 id="troca" className="text-[1.6rem] text-verde-escuro sm:text-[2rem]">
              Uma via de mão dupla
            </h2>
            <p className="mt-4 max-w-2xl text-[1.01rem] leading-relaxed text-tinta-suave">
              Participar não é doar tempo a fundo perdido. A modelagem do Núcleo
              registrou o que o ecossistema traz e o que recebe de volta — vale
              tanto para uma pessoa quanto para uma empresa, uma instituição de
              ensino, um órgão público ou uma organização da sociedade civil.
            </p>
          </Revelar>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Revelar>
              <article className="h-full rounded-2xl border border-borda bg-white p-7 shadow-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-laranja-claro text-laranja-escuro">
                  <HandHeart size={24} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[1.2rem] font-extrabold text-verde-escuro">
                  O que você traz
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {trocaEcossistema.traz.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-laranja"
                        aria-hidden="true"
                      />
                      <span className="text-[0.97rem] leading-relaxed text-tinta">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Revelar>

            <Revelar atraso={100}>
              <article className="h-full rounded-2xl border border-verde/20 bg-verde-claro p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-verde">
                  <Gift size={24} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[1.2rem] font-extrabold text-verde-escuro">
                  O que você encontra
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {trocaEcossistema.recebe.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-verde text-white"
                        aria-hidden="true"
                      >
                        <Check size={12} strokeWidth={3.2} />
                      </span>
                      <span className="text-[0.97rem] leading-relaxed text-tinta">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Revelar>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="formulario" className="scroll-mt-24 py-16 lg:py-20" aria-labelledby="form">
        <div className="container-inova max-w-3xl">
          <Revelar>
            <h2 id="form" className="text-[1.6rem] text-verde-escuro sm:text-[2rem]">
              Manifestação de interesse
            </h2>
            <p className="mt-4 text-[1.01rem] leading-relaxed text-tinta-suave">
              Os campos marcados com{" "}
              <span className="font-bold text-laranja" aria-hidden="true">
                *
              </span>{" "}
              <span className="sr-only">asterisco</span> são obrigatórios.
            </p>
          </Revelar>

          <div className="mt-10">
            <Suspense
              fallback={
                <p className="text-tinta-suave">Carregando formulário…</p>
              }
            >
              <FormularioCompleto />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
