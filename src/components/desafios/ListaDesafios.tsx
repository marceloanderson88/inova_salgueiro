"use client";

import { useMemo, useState } from "react";

import { CardDesafio } from "@/components/desafios/CardDesafio";
import { desafios, temas } from "@/content/desafios";

type Filtro = "todos" | (typeof temas)[number];

export function ListaDesafios() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const visiveis = useMemo(
    () => (filtro === "todos" ? desafios : desafios.filter((d) => d.tema === filtro)),
    [filtro],
  );

  const opcoes: Filtro[] = ["todos", ...temas];

  return (
    <>
      <div
        role="group"
        aria-label="Filtrar desafios por tema"
        className="flex flex-wrap justify-center gap-2.5"
      >
        {opcoes.map((opcao) => {
          const ativo = filtro === opcao;
          return (
            <button
              key={opcao}
              type="button"
              onClick={() => setFiltro(opcao)}
              aria-pressed={ativo}
              className={`min-h-11 rounded-full border px-5 text-[0.92rem] font-semibold transition-all duration-250 ${
                ativo
                  ? "border-verde bg-verde text-white shadow-[0_8px_18px_-10px_rgba(8,120,63,0.8)]"
                  : "border-borda bg-white text-tinta-suave hover:border-verde/40 hover:text-verde"
              }`}
            >
              {opcao === "todos" ? "Todos os temas" : opcao}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-center text-[0.92rem] text-tinta-suave" aria-live="polite">
        {visiveis.length}{" "}
        {visiveis.length === 1 ? "desafio encontrado" : "desafios encontrados"}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visiveis.map((desafio, indice) => (
          <CardDesafio
            key={desafio.slug}
            desafio={desafio}
            tom={indice % 2 === 0 ? "verde" : "laranja"}
            detalhado
          />
        ))}
      </div>
    </>
  );
}
