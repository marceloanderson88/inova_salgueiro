import type { Metadata } from "next";
import { UserPlus } from "lucide-react";

import { CardGT } from "@/components/gts/CardGT";
import { CabecalhoPagina } from "@/components/layout/CabecalhoPagina";
import { BotaoLink } from "@/components/ui/botao";
import { Revelar } from "@/components/ui/revelar";
import { gts } from "@/content/gts";

export const metadata: Metadata = {
  title: "Grupos de Trabalho",
  description:
    "Conheça os seis Grupos de Trabalho do Inova Salgueiro: ambientes de inovação, programas e ações, ICTIs, políticas públicas, capital e fomento e governança.",
  alternates: { canonical: "/gts" },
};

export default function PaginaGTs() {
  return (
    <>
      <CabecalhoPagina
        selo="Grupos de Trabalho"
        titulo="Seis GTs, uma agenda comum para Salgueiro"
        descricao="Cada Grupo de Trabalho reúne pessoas e instituições em torno de um recorte do desenvolvimento do território. É nos GTs que os desafios viram plano e o plano vira ação."
        migalhas={[{ rotulo: "GTs" }]}
      />

      <section className="py-16 lg:py-20" aria-label="Lista de Grupos de Trabalho">
        <div className="container-inova">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gts.map((gt, indice) => (
              <Revelar key={gt.slug} atraso={(indice % 3) * 90}>
                <CardGT gt={gt} tom={indice % 2 === 0 ? "verde" : "laranja"} />
              </Revelar>
            ))}
          </div>

          <Revelar atraso={150}>
            <div className="mt-14 rounded-3xl border border-borda bg-verde-suave p-8 text-center lg:p-12">
              <h2 className="text-[1.5rem] text-verde-escuro sm:text-[1.85rem]">
                Não sabe em qual GT você se encaixa?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[1.01rem] leading-relaxed text-tinta-suave">
                Sem problema. Conte no formulário como você pode contribuir e a
                governança ajuda a encontrar o grupo com mais aderência ao seu
                perfil.
              </p>
              <div className="mt-8 flex justify-center">
                <BotaoLink href="/como-participar" tamanho="lg">
                  Manifestar interesse
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
