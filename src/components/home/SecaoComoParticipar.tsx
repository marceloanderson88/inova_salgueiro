import { UserPlus } from "lucide-react";

import { BotaoLink } from "@/components/ui/botao";
import { TituloSecao } from "@/components/ui/decoracoes";
import { Icone } from "@/components/ui/icones";
import { Revelar } from "@/components/ui/revelar";
import { passosParticipacao } from "@/content/site";

export function SecaoComoParticipar() {
  return (
    <section
      id="como-participar"
      className="scroll-mt-24 py-20 lg:py-24"
      aria-labelledby="titulo-como-participar"
    >
      <div className="container-inova">
        <Revelar>
          <TituloSecao id="titulo-como-participar">Como participar</TituloSecao>
        </Revelar>

        <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* trilha pontilhada que liga as etapas no desktop */}
          <div
            className="absolute top-8 right-[12%] left-[12%] hidden border-t-2 border-dashed border-borda lg:block"
            aria-hidden="true"
          />

          {passosParticipacao.map((passo, indice) => (
            <Revelar key={passo.numero} atraso={indice * 110} as="li" className="relative">
              <div className="flex items-center justify-center gap-3">
                <span
                  className={`relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-[1.05rem] font-extrabold text-white shadow-[0_8px_18px_-10px_rgba(23,53,42,0.7)] ${
                    indice % 2 === 0 ? "bg-verde" : "bg-laranja"
                  }`}
                >
                  {passo.numero}
                </span>
                <span
                  className={`relative z-10 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full ring-8 ring-fundo ${
                    indice % 2 === 0
                      ? "bg-verde-claro text-verde"
                      : "bg-laranja-claro text-laranja-escuro"
                  }`}
                >
                  <Icone nome={passo.icone} size={28} />
                </span>
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-display text-[1.06rem] font-extrabold text-verde-escuro">
                  {passo.titulo}
                </h3>
                <p className="mx-auto mt-2.5 max-w-[17rem] text-[0.95rem] leading-relaxed text-tinta-suave">
                  {passo.texto}
                </p>
              </div>
            </Revelar>
          ))}
        </ol>

        <Revelar atraso={200}>
          <div className="mt-14 flex justify-center">
            <BotaoLink href="/como-participar" tamanho="lg">
              Quero fazer parte
              <UserPlus size={18} strokeWidth={2.2} aria-hidden="true" />
            </BotaoLink>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
