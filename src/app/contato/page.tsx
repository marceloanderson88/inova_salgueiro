import type { Metadata } from "next";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  UserPlus,
  Youtube,
} from "lucide-react";

import { CabecalhoPagina } from "@/components/layout/CabecalhoPagina";
import { BotaoLink } from "@/components/ui/botao";
import { Revelar } from "@/components/ui/revelar";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a governança do Inova Salgueiro: e-mail, telefone e redes sociais do ecossistema de inovação de Salgueiro.",
  alternates: { canonical: "/contato" },
};

const canais = [
  {
    Icone: Mail,
    titulo: "E-mail",
    valor: site.contato.email,
    href: `mailto:${site.contato.email}`,
    descricao: "Para assuntos institucionais, parcerias e imprensa.",
  },
  {
    Icone: MessageCircle,
    titulo: "WhatsApp",
    valor: site.contato.telefone,
    href: site.redes.whatsapp,
    descricao: "Para dúvidas rápidas sobre os GTs e a participação.",
  },
  {
    Icone: MapPin,
    titulo: "Onde estamos",
    valor: site.contato.endereco,
    descricao: "As reuniões dos GTs acontecem em espaços parceiros do município.",
  },
];

const redes = [
  { href: site.redes.instagram, rotulo: "Instagram", Icone: Instagram },
  { href: site.redes.linkedin, rotulo: "LinkedIn", Icone: Linkedin },
  { href: site.redes.youtube, rotulo: "YouTube", Icone: Youtube },
  { href: site.redes.whatsapp, rotulo: "WhatsApp", Icone: Phone },
];

export default function PaginaContato() {
  return (
    <>
      <CabecalhoPagina
        selo="Contato"
        titulo="Fale com o Inova Salgueiro"
        descricao="Quer propor uma parceria, tirar uma dúvida ou entender melhor como o movimento funciona? Estes são os canais oficiais da governança."
        migalhas={[{ rotulo: "Contato" }]}
      />

      <section className="py-16 lg:py-20" aria-label="Canais de contato">
        <div className="container-inova">
          <div className="grid gap-5 md:grid-cols-3">
            {canais.map(({ Icone, titulo, valor, href, descricao }, indice) => (
              <Revelar key={titulo} atraso={indice * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-borda bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-alto">
                  <span
                    className={`inline-flex h-13 w-13 items-center justify-center rounded-full ${
                      indice % 2 === 0
                        ? "bg-verde-claro text-verde"
                        : "bg-laranja-claro text-laranja-escuro"
                    }`}
                  >
                    <Icone size={24} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-display text-[1.08rem] font-extrabold text-verde-escuro">
                    {titulo}
                  </h2>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="link-sublinhado mt-2 font-semibold break-all text-verde"
                    >
                      {valor}
                    </a>
                  ) : (
                    <p className="mt-2 font-semibold text-tinta">{valor}</p>
                  )}
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-tinta-suave">
                    {descricao}
                  </p>
                </article>
              </Revelar>
            ))}
          </div>

          <Revelar atraso={120}>
            <div className="mt-14 grid items-center gap-8 rounded-3xl border border-borda bg-verde-suave p-8 lg:grid-cols-[1.3fr_1fr] lg:p-12">
              <div>
                <h2 className="text-[1.5rem] text-verde-escuro sm:text-[1.85rem]">
                  Quer participar dos Grupos de Trabalho?
                </h2>
                <p className="mt-4 text-[1.01rem] leading-relaxed text-tinta-suave">
                  Para manifestar interesse em integrar o movimento, use o
                  formulário completo — ele já leva suas informações direto para
                  a governança e para a liderança do GT escolhido.
                </p>
                <div className="mt-7">
                  <BotaoLink href="/como-participar" tamanho="lg">
                    Quero fazer parte
                    <UserPlus size={18} strokeWidth={2.2} aria-hidden="true" />
                  </BotaoLink>
                </div>
              </div>

              <div>
                <h3 className="font-display text-[1.05rem] font-extrabold text-verde-escuro">
                  Siga o Inova Salgueiro
                </h3>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {redes.map(({ href, rotulo, Icone }) => (
                    <li key={rotulo}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-verde/25 bg-white px-5 font-semibold text-verde transition-all duration-250 hover:-translate-y-0.5 hover:border-verde hover:bg-verde hover:text-white"
                      >
                        <Icone size={18} aria-hidden="true" />
                        {rotulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  );
}
