import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { IconeCirculo } from "@/components/ui/icones";
import type { GT } from "@/content/gts";

export function CardGT({ gt, tom }: { gt: GT; tom: "verde" | "laranja" }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-borda bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-verde/25 hover:shadow-alto">
      <div className="flex items-center gap-4">
        <IconeCirculo nome={gt.icone} tom={tom} />
        <h3 className="font-display text-[1.1rem] leading-tight font-extrabold text-verde-escuro">
          {gt.nome}
        </h3>
      </div>

      <hr className="my-5 border-borda" />

      <p className="text-[0.97rem] leading-relaxed text-tinta-suave">{gt.resumo}</p>

      <Link
        href={`/gts/${gt.slug}`}
        className={`mt-6 inline-flex items-center gap-2 font-display text-[0.94rem] font-bold transition-all duration-250 group-hover:gap-3 ${
          tom === "laranja" ? "text-laranja-escuro" : "text-verde"
        }`}
      >
        Saiba mais
        <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
        <span className="absolute inset-0" aria-hidden="true" />
        <span className="sr-only">sobre o {gt.nome}</span>
      </Link>
    </article>
  );
}
