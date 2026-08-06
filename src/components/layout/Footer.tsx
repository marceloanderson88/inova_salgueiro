import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Logo } from "@/components/marca/Logo";
import { CactoDecorativo, LinhaSerra } from "@/components/ui/decoracoes";
import { gts } from "@/content/gts";
import { navegacao, site } from "@/content/site";

const redes = [
  { href: site.redes.instagram, rotulo: "Instagram", Icone: Instagram },
  { href: site.redes.linkedin, rotulo: "LinkedIn", Icone: Linkedin },
  { href: site.redes.youtube, rotulo: "YouTube", Icone: Youtube },
  { href: site.redes.whatsapp, rotulo: "WhatsApp", Icone: Phone },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-areia">
      <LinhaSerra className="absolute inset-x-0 top-0 h-14 w-full text-laranja/20" />
      <CactoDecorativo className="absolute -right-4 bottom-16 h-56 w-28 text-laranja/15 lg:right-16" />

      <div className="container-inova relative grid gap-12 pt-20 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Logo className="text-[1.5rem]" />
          <p className="mt-5 max-w-xs text-[0.98rem] leading-relaxed text-tinta-suave">
            Inovação com raízes no sertão. Juntos, construímos um futuro melhor
            para Salgueiro e região.
          </p>
        </div>

        <nav aria-labelledby="rodape-navegacao">
          <h2
            id="rodape-navegacao"
            className="font-display text-[1.05rem] font-bold text-verde-escuro"
          >
            Navegação
          </h2>
          <ul className="mt-5 space-y-3">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-sublinhado text-[0.96rem] text-tinta-suave transition-colors hover:text-verde"
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="rodape-gts">
          <h2
            id="rodape-gts"
            className="font-display text-[1.05rem] font-bold text-verde-escuro"
          >
            Grupos de Trabalho
          </h2>
          <ul className="mt-5 space-y-3">
            {gts.map((gt) => (
              <li key={gt.slug}>
                <Link
                  href={`/gts/${gt.slug}`}
                  className="link-sublinhado text-[0.96rem] text-tinta-suave transition-colors hover:text-verde"
                >
                  {gt.nomeCurto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-[1.05rem] font-bold text-verde-escuro">
            Contato
          </h2>
          <ul className="mt-5 space-y-3.5 text-[0.96rem] text-tinta-suave">
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-laranja" aria-hidden="true" />
              <a
                href={`mailto:${site.contato.email}`}
                className="link-sublinhado break-all hover:text-verde"
              >
                {site.contato.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-laranja" aria-hidden="true" />
              <a
                href={`tel:${site.contato.telefoneLink}`}
                className="link-sublinhado hover:text-verde"
              >
                {site.contato.telefone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-laranja" aria-hidden="true" />
              <span>{site.contato.endereco}</span>
            </li>
          </ul>

          <h3 className="mt-8 font-display text-[1.05rem] font-bold text-verde-escuro">
            Siga-nos
          </h3>
          <ul className="mt-4 flex gap-3">
            {redes.map(({ href, rotulo, Icone }) => (
              <li key={rotulo}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rotulo}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-verde/25 bg-white text-verde transition-all duration-250 hover:-translate-y-0.5 hover:border-verde hover:bg-verde hover:text-white"
                >
                  <Icone size={19} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-verde-escuro">
        <div className="container-inova flex flex-col items-center justify-between gap-3 py-5 text-center text-[0.88rem] text-white/80 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Inova Salgueiro. Todos os direitos
            reservados.
          </p>
          <p className="flex gap-5">
            <Link href="/privacidade" className="link-sublinhado hover:text-white">
              Privacidade
            </Link>
            <Link href="/termos" className="link-sublinhado hover:text-white">
              Termos
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
