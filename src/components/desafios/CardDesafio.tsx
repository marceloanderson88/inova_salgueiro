import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { IconeCirculo } from "@/components/ui/icones";
import type { Desafio } from "@/content/desafios";
import { getGT } from "@/content/gts";

export function CardDesafio({
  desafio,
  tom,
  detalhado = false,
}: {
  desafio: Desafio;
  tom: "verde" | "laranja";
  detalhado?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-borda bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-laranja/25 hover:shadow-alto">
      <div className="flex items-start gap-4">
        <IconeCirculo nome={desafio.icone} tom={tom} />
        <h3 className="mt-1 font-display text-[1.05rem] leading-snug font-extrabold text-verde-escuro">
          {desafio.titulo}
        </h3>
      </div>

      <p className="mt-4 text-[0.95rem] leading-relaxed text-tinta-suave">
        {desafio.resumo}
      </p>

      {detalhado ? (
        <>
          <p className="mt-4 text-[0.93rem] leading-relaxed text-tinta-suave">
            {desafio.descricao}
          </p>

          <p className="mt-4 rounded-xl bg-laranja-suave px-4 py-3 text-[0.88rem] leading-relaxed text-tinta">
            <strong className="font-display font-bold text-laranja-escuro">
              Impacto no território:{" "}
            </strong>
            {desafio.impacto}
          </p>

          <div className="mt-5">
            <h4 className="font-display text-[0.78rem] font-bold tracking-[0.12em] text-tinta-suave uppercase">
              GTs relacionados
            </h4>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {desafio.gts.map((slug) => {
                const gt = getGT(slug);
                if (!gt) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/gts/${slug}`}
                      className="inline-flex rounded-full border border-verde/20 bg-verde-claro px-3 py-1.5 text-[0.8rem] font-semibold text-verde-escuro transition-colors hover:border-verde hover:bg-verde hover:text-white"
                    >
                      {gt.nomeCurto}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link
            href={`/como-participar?desafio=${desafio.slug}`}
            className="mt-6 inline-flex items-center gap-2 font-display text-[0.94rem] font-bold text-laranja-escuro transition-all duration-250 hover:gap-3"
          >
            Como posso contribuir?
            <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </>
      ) : null}
    </article>
  );
}
