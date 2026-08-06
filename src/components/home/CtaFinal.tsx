import { ArrowRight, UserPlus } from "lucide-react";

import { BotaoLink } from "@/components/ui/botao";
import { OndaSeparadora } from "@/components/ui/decoracoes";
import { Revelar } from "@/components/ui/revelar";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-fundo" aria-labelledby="titulo-cta">
      <div className="container-inova py-20 lg:py-24">
        <Revelar>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-verde via-verde to-verde-escuro px-7 py-14 text-center shadow-alto sm:px-12 lg:py-16">
            <div
              className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(243,138,9,0.45),transparent_68%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_68%)]"
              aria-hidden="true"
            />

            <div className="relative">
              <h2
                id="titulo-cta"
                className="mx-auto max-w-2xl text-[1.7rem] leading-tight text-white sm:text-[2.1rem]"
              >
                Salgueiro só inova com quem vive Salgueiro
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/80">
                Se você tem conhecimento, tempo, estrutura ou vontade de
                contribuir, existe um lugar para você em um dos nossos Grupos de
                Trabalho.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BotaoLink href="/como-participar" variante="claro" tamanho="lg">
                  Quero fazer parte
                  <UserPlus size={18} strokeWidth={2.2} aria-hidden="true" />
                </BotaoLink>
                <BotaoLink
                  href="/contato"
                  variante="secundario"
                  tamanho="lg"
                  className="border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/20"
                >
                  Falar com a governança
                  <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                </BotaoLink>
              </div>
            </div>
          </div>
        </Revelar>
      </div>

      {/* transição suave para o rodapé */}
      <OndaSeparadora
        className="absolute inset-x-0 bottom-0"
        cor="var(--color-areia)"
      />
    </section>
  );
}
