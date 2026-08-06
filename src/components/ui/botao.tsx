import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variante = "primario" | "secundario" | "claro" | "texto";
type Tamanho = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-xl font-display font-bold transition-all duration-250 ease-out disabled:cursor-not-allowed disabled:opacity-60 min-h-11";

const variantes: Record<Variante, string> = {
  primario:
    "bg-verde text-white shadow-[0_10px_24px_-12px_rgba(8,120,63,0.7)] hover:bg-verde-escuro hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-14px_rgba(8,120,63,0.75)] active:translate-y-0",
  secundario:
    "bg-white text-verde-escuro border border-borda hover:border-verde/40 hover:bg-verde-suave hover:-translate-y-0.5 shadow-[0_4px_14px_-8px_rgba(23,53,42,0.35)]",
  claro:
    "bg-laranja text-white shadow-[0_10px_24px_-12px_rgba(243,138,9,0.75)] hover:bg-laranja-escuro hover:-translate-y-0.5 active:translate-y-0",
  texto:
    "text-verde hover:text-verde-escuro px-0 gap-2 hover:gap-3 shadow-none",
};

const tamanhos: Record<Tamanho, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-[1rem]",
};

type BotaoProps = {
  variante?: Variante;
  tamanho?: Tamanho;
  children: ReactNode;
  className?: string;
};

export function Botao({
  variante = "primario",
  tamanho = "md",
  className = "",
  children,
  ...props
}: BotaoProps & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${variantes[variante]} ${variante === "texto" ? "" : tamanhos[tamanho]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function BotaoLink({
  variante = "primario",
  tamanho = "md",
  className = "",
  children,
  href,
  ...props
}: BotaoProps & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={`${base} ${variantes[variante]} ${variante === "texto" ? "" : tamanhos[tamanho]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
