import { CtaFinal } from "@/components/home/CtaFinal";
import { Hero } from "@/components/home/Hero";
import { SecaoComoAtuamos } from "@/components/home/SecaoComoAtuamos";
import { SecaoComoParticipar } from "@/components/home/SecaoComoParticipar";
import { SecaoDesafios } from "@/components/home/SecaoDesafios";
import { SecaoGTs } from "@/components/home/SecaoGTs";
import { SecaoOQueE } from "@/components/home/SecaoOQueE";
import { SecaoProposito } from "@/components/home/SecaoProposito";
import { SecaoQuemParticipa } from "@/components/home/SecaoQuemParticipa";

export default function PaginaInicial() {
  return (
    <>
      <Hero />
      <SecaoOQueE />
      <SecaoProposito />
      <SecaoGTs />
      <SecaoQuemParticipa />
      <SecaoDesafios />
      <SecaoComoAtuamos />
      <SecaoComoParticipar />
      <CtaFinal />
    </>
  );
}
