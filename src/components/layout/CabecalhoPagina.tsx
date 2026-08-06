import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { CactoDecorativo, OndaSeparadora, Selo } from "@/components/ui/decoracoes";

type Migalha = { rotulo: string; href?: string };

export function CabecalhoPagina({
  selo,
  titulo,
  descricao,
  migalhas = [],
  children,
}: {
  selo?: string;
  titulo: string;
  descricao?: string;
  migalhas?: Migalha[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-verde-suave pt-12 pb-24 lg:pt-16 lg:pb-28">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(243,138,9,0.14),transparent_66%)]"
        aria-hidden="true"
      />
      <CactoDecorativo className="absolute -right-6 -bottom-6 hidden h-56 w-28 text-verde/10 lg:block" />

      <div className="container-inova relative max-w-4xl">
        {migalhas.length > 0 ? (
          <nav aria-label="Trilha de navegação" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.85rem] text-tinta-suave">
              <li>
                <Link href="/" className="link-sublinhado hover:text-verde">
                  Início
                </Link>
              </li>
              {migalhas.map((migalha) => (
                <li key={migalha.rotulo} className="flex items-center gap-1.5">
                  <ChevronRight size={14} aria-hidden="true" />
                  {migalha.href ? (
                    <Link href={migalha.href} className="link-sublinhado hover:text-verde">
                      {migalha.rotulo}
                    </Link>
                  ) : (
                    <span aria-current="page" className="font-semibold text-verde-escuro">
                      {migalha.rotulo}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {selo ? <Selo>{selo}</Selo> : null}

        <h1 className="mt-5 text-[2.05rem] leading-[1.12] text-verde-escuro sm:text-[2.6rem] lg:text-[3rem]">
          {titulo}
        </h1>

        {descricao ? (
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-[1.75] text-tinta-suave">
            {descricao}
          </p>
        ) : null}

        {children}
      </div>

      <OndaSeparadora className="absolute inset-x-0 bottom-0" cor="var(--color-fundo)" />
    </section>
  );
}
