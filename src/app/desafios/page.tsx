import type { Metadata } from "next";
import { UserPlus } from "lucide-react";

import { ListaDesafios } from "@/components/desafios/ListaDesafios";
import { CabecalhoPagina } from "@/components/layout/CabecalhoPagina";
import { BotaoLink } from "@/components/ui/botao";
import { Revelar } from "@/components/ui/revelar";

export const metadata: Metadata = {
  title: "Desafios",
  description:
    "Os desafios prioritários que o Inova Salgueiro busca enfrentar junto com o ecossistema local de inovação.",
  alternates: { canonical: "/desafios" },
};

export default function PaginaDesafios() {
  return (
    <>
      <CabecalhoPagina
        selo="Desafios prioritários"
        titulo="Os problemas que nos movem"
        descricao="Antes de propor soluções, o Inova Salgueiro nomeia os problemas. Estes são os desafios identificados junto ao ecossistema — cada um deles está ligado a um ou mais Grupos de Trabalho."
        migalhas={[{ rotulo: "Desafios" }]}
      />

      <section className="py-16 lg:py-20" aria-label="Lista de desafios">
        <div className="container-inova">
          <ListaDesafios />

          <Revelar>
            <div className="mt-16 rounded-3xl border border-borda bg-verde-suave p-8 text-center lg:p-12">
              <h2 className="text-[1.5rem] text-verde-escuro sm:text-[1.85rem]">
                Reconheceu um desafio que você pode ajudar a enfrentar?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[1.01rem] leading-relaxed text-tinta-suave">
                Manifeste seu interesse e conte como você pode contribuir. Cada
                competência somada aumenta a capacidade de resposta do território.
              </p>
              <div className="mt-8 flex justify-center">
                <BotaoLink href="/como-participar" tamanho="lg">
                  Quero contribuir
                  <UserPlus size={18} strokeWidth={2.2} aria-hidden="true" />
                </BotaoLink>
              </div>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  );
}
