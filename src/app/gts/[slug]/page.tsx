import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Check, Info, Target, UserPlus } from "lucide-react";

import { CabecalhoPagina } from "@/components/layout/CabecalhoPagina";
import { BotaoLink } from "@/components/ui/botao";
import { IconeCirculo } from "@/components/ui/icones";
import { Revelar } from "@/components/ui/revelar";
import { getDesafio } from "@/content/desafios";
import { getGT, gts } from "@/content/gts";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

export function generateStaticParams() {
  return gts.map((gt) => ({ slug: gt.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gt = getGT(slug);

  if (!gt) return { title: "Grupo de Trabalho não encontrado" };

  return {
    title: gt.nome,
    description: gt.objetivo,
    alternates: { canonical: `/gts/${gt.slug}` },
    openGraph: {
      title: `${gt.nome} — Inova Salgueiro`,
      description: gt.objetivo,
      url: `${site.url}/gts/${gt.slug}`,
    },
  };
}

export default async function PaginaGT({ params }: Props) {
  const { slug } = await params;
  const gt = getGT(slug);

  if (!gt) notFound();

  const desafios = gt.desafiosRelacionados
    .map((s) => getDesafio(s))
    .filter((d) => d !== undefined);

  const outros = gts.filter((item) => item.slug !== gt.slug).slice(0, 3);

  return (
    <>
      <CabecalhoPagina
        titulo={gt.nome}
        descricao={gt.resumo}
        migalhas={[{ rotulo: "GTs", href: "/gts" }, { rotulo: gt.nomeCurto }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-verde/20 bg-white px-4 py-2 text-[0.88rem] font-semibold text-verde-escuro">
            <CalendarDays size={16} className="text-laranja" aria-hidden="true" />
            {gt.periodicidade}
          </span>
          <BotaoLink href={`/como-participar?gt=${gt.slug}`}>
            Tenho interesse neste GT
            <UserPlus size={17} strokeWidth={2.2} aria-hidden="true" />
          </BotaoLink>
        </div>
      </CabecalhoPagina>

      <div className="container-inova grid gap-12 py-16 lg:grid-cols-[1.55fr_1fr] lg:gap-14 lg:py-20">
        <div>
          <Revelar>
            <section aria-labelledby="objetivo">
              <div className="flex items-start gap-5 rounded-2xl border border-verde/20 bg-verde-claro p-6 lg:p-7">
                <IconeCirculo nome={gt.icone} tom="verde" className="bg-white ring-white/60" />
                <div>
                  <h2
                    id="objetivo"
                    className="font-display text-[0.78rem] font-bold tracking-[0.14em] text-verde uppercase"
                  >
                    Objetivo do GT
                  </h2>
                  <p className="mt-2 text-[1.06rem] leading-relaxed font-semibold text-verde-escuro">
                    {gt.objetivo}
                  </p>
                </div>
              </div>
            </section>
          </Revelar>

          <Revelar atraso={80}>
            <section className="mt-12" aria-labelledby="descricao">
              <h2 id="descricao" className="text-[1.4rem] text-verde-escuro sm:text-[1.7rem]">
                Sobre o grupo
              </h2>
              <p className="mt-4 text-[1.02rem] leading-[1.8] text-tinta-suave">
                {gt.descricao}
              </p>

              {gt.observacao ? (
                <aside className="mt-6 flex items-start gap-4 rounded-2xl border border-laranja/25 bg-laranja-suave p-5">
                  <Info
                    size={20}
                    className="mt-0.5 shrink-0 text-laranja-escuro"
                    aria-hidden="true"
                  />
                  <p className="text-[0.95rem] leading-relaxed text-tinta">{gt.observacao}</p>
                </aside>
              ) : null}
            </section>
          </Revelar>

          <Revelar atraso={120}>
            <section className="mt-12" aria-labelledby="frentes">
              <h2 id="frentes" className="text-[1.4rem] text-verde-escuro sm:text-[1.7rem]">
                Frentes de atuação
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {gt.frentes.map((frente) => (
                  <div
                    key={frente}
                    className="rounded-2xl border border-borda bg-white p-5 shadow-card"
                  >
                    <Target size={20} className="text-laranja" aria-hidden="true" />
                    <p className="mt-3 text-[0.95rem] leading-relaxed font-semibold text-verde-escuro">
                      {frente}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Revelar>

          <Revelar atraso={140}>
            <section className="mt-12" aria-labelledby="entregas">
              <h2 id="entregas" className="text-[1.4rem] text-verde-escuro sm:text-[1.7rem]">
                Entregas previstas
              </h2>
              <ul className="mt-5 space-y-3">
                {gt.entregas.map((entrega) => (
                  <li key={entrega} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-verde-claro text-verde"
                      aria-hidden="true"
                    >
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-[0.99rem] leading-relaxed text-tinta">{entrega}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.88rem] text-tinta-suave italic">
                As entregas realizadas serão publicadas nesta página conforme
                forem concluídas pelo grupo.
              </p>
            </section>
          </Revelar>

          {desafios.length > 0 ? (
            <Revelar atraso={160}>
              <section className="mt-12" aria-labelledby="desafios-gt">
                <h2 id="desafios-gt" className="text-[1.4rem] text-verde-escuro sm:text-[1.7rem]">
                  Desafios relacionados
                </h2>
                <ul className="mt-5 space-y-3">
                  {desafios.map((desafio) => (
                    <li key={desafio.slug}>
                      <Link
                        href="/desafios"
                        className="group flex items-start justify-between gap-4 rounded-2xl border border-borda bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-laranja/30"
                      >
                        <span>
                          <span className="block font-display text-[1rem] font-extrabold text-verde-escuro">
                            {desafio.titulo}
                          </span>
                          <span className="mt-1.5 block text-[0.93rem] leading-relaxed text-tinta-suave">
                            {desafio.resumo}
                          </span>
                        </span>
                        <ArrowRight
                          size={18}
                          className="mt-1 shrink-0 text-laranja transition-transform duration-250 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </Revelar>
          ) : null}
        </div>

        {/* Coluna lateral */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Revelar atraso={100}>
            <div className="rounded-2xl border border-borda bg-white p-6 shadow-card">
              <h2 className="font-display text-[1.05rem] font-extrabold text-verde-escuro">
                Quem participa deste GT
              </h2>
              <ul className="mt-4 space-y-2.5">
                {gt.perfil.map((perfil) => (
                  <li
                    key={perfil}
                    className="flex items-start gap-2.5 text-[0.94rem] leading-relaxed text-tinta-suave"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-laranja" aria-hidden="true" />
                    {perfil}
                  </li>
                ))}
              </ul>

              <hr className="my-6 border-borda" />

              <h3 className="font-display text-[0.78rem] font-bold tracking-[0.14em] text-tinta-suave uppercase">
                Ponto de contato
              </h3>
              <p className="mt-2 text-[0.94rem] leading-relaxed text-tinta-suave">
                A liderança deste GT é definida pela governança do Inova
                Salgueiro. Para falar com o grupo, escreva para{" "}
                <a
                  href={`mailto:${site.contato.email}`}
                  className="link-sublinhado font-semibold text-verde"
                >
                  {site.contato.email}
                </a>
                .
              </p>

              <BotaoLink
                href={`/como-participar?gt=${gt.slug}`}
                className="mt-6 w-full"
                tamanho="lg"
              >
                Tenho interesse neste GT
                <UserPlus size={18} strokeWidth={2.2} aria-hidden="true" />
              </BotaoLink>
            </div>
          </Revelar>

          <Revelar atraso={160}>
            <div className="mt-6 rounded-2xl border border-borda bg-verde-suave p-6">
              <h2 className="font-display text-[1.05rem] font-extrabold text-verde-escuro">
                Outros Grupos de Trabalho
              </h2>
              <ul className="mt-4 space-y-2">
                {outros.map((outro) => (
                  <li key={outro.slug}>
                    <Link
                      href={`/gts/${outro.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[0.94rem] font-semibold text-verde-escuro transition-colors hover:bg-white"
                    >
                      {outro.nomeCurto}
                      <ArrowRight
                        size={16}
                        className="text-laranja transition-transform duration-250 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/gts"
                className="link-sublinhado mt-4 inline-block text-[0.92rem] font-bold text-verde"
              >
                Ver todos os GTs
              </Link>
            </div>
          </Revelar>
        </aside>
      </div>
    </>
  );
}
