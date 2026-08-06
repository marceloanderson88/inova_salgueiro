"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, UserPlus, X } from "lucide-react";

import { Logo } from "@/components/marca/Logo";
import { navegacao } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [rolado, setRolado] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    setMenuAberto(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  const ehAtivo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolado
          ? "border-b border-borda/80 bg-white/92 shadow-[0_6px_24px_-18px_rgba(23,53,42,0.45)] backdrop-blur-md"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-verde focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <div className="container-inova flex h-18 items-center justify-between gap-4">
        <Logo className="text-[1.35rem] sm:text-[1.55rem]" />

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {navegacao.map((item) => {
            const ativo = ehAtivo(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={ativo ? "page" : undefined}
                className={`relative py-2 text-[0.95rem] font-semibold transition-colors ${
                  ativo ? "text-verde" : "text-tinta-suave hover:text-verde"
                }`}
              >
                {item.rotulo}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[3px] rounded-full bg-verde transition-all duration-300 ${
                    ativo ? "w-full" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/como-participar"
            className="hidden min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 font-display text-[0.92rem] font-bold text-white shadow-[0_10px_22px_-12px_rgba(8,120,63,0.75)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-verde-escuro sm:inline-flex"
          >
            Quero fazer parte
            <UserPlus size={17} strokeWidth={2.2} aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-borda bg-white text-verde-escuro transition-colors hover:bg-verde-suave lg:hidden"
          >
            {menuAberto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      <div
        id="menu-mobile"
        hidden={!menuAberto}
        className="border-t border-borda bg-white lg:hidden"
      >
        <nav className="container-inova flex flex-col py-4" aria-label="Navegação principal">
          {navegacao.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={ehAtivo(item.href) ? "page" : undefined}
              className={`flex min-h-12 items-center rounded-lg px-3 text-[1.02rem] font-semibold transition-colors ${
                ehAtivo(item.href)
                  ? "bg-verde-claro text-verde"
                  : "text-tinta hover:bg-verde-suave"
              }`}
            >
              {item.rotulo}
            </Link>
          ))}
          <Link
            href="/como-participar"
            className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-verde px-5 font-display font-bold text-white"
          >
            Quero fazer parte
            <UserPlus size={18} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
