import { ArrowRight } from "lucide-react";

import { BotaoLink } from "@/components/ui/botao";
import { CactoDecorativo } from "@/components/ui/decoracoes";

export default function NaoEncontrada() {
  return (
    <section className="relative overflow-hidden bg-verde-suave py-24 lg:py-32">
      <CactoDecorativo className="absolute -left-4 bottom-6 hidden h-56 w-28 text-verde/10 lg:block" />
      <CactoDecorativo className="absolute -right-4 bottom-12 hidden h-44 w-24 -scale-x-100 text-laranja/15 lg:block" />

      <div className="container-inova relative max-w-xl text-center">
        <p className="font-display text-[4.5rem] leading-none font-extrabold text-verde/20 sm:text-[6rem]">
          404
        </p>
        <h1 className="mt-2 text-[1.8rem] text-verde-escuro sm:text-[2.3rem]">
          Essa página se perdeu no sertão
        </h1>
        <p className="mt-5 text-[1.02rem] leading-relaxed text-tinta-suave">
          O endereço que você procurou não existe ou foi movido. Que tal
          recomeçar pelo início ou conhecer os Grupos de Trabalho?
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <BotaoLink href="/" tamanho="lg">
            Voltar ao início
          </BotaoLink>
          <BotaoLink href="/gts" variante="secundario" tamanho="lg">
            Conhecer os GTs
            <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </BotaoLink>
        </div>
      </div>
    </section>
  );
}
