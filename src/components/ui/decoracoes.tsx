import type { ReactNode } from "react";

/** Onda orgânica que separa o hero das seções seguintes. */
export function OndaSeparadora({
  className = "",
  cor = "var(--color-fundo)",
  invertida = false,
}: {
  className?: string;
  cor?: string;
  invertida?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`block h-[52px] w-full md:h-[80px] ${invertida ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 62c96-16 192-26 288-24 96 3 192 19 288 24 96 6 192 1 288-9s192-25 288-30c96-4 192 3 288 12v55H0V62Z"
        fill={cor}
      />
    </svg>
  );
}

/** Traço decorativo que acompanha os títulos de seção. */
function TracoTitulo({ espelhado = false }: { espelhado?: boolean }) {
  return (
    <svg
      viewBox="0 0 84 16"
      className={`hidden h-4 w-16 shrink-0 text-laranja/70 sm:block lg:w-21 ${espelhado ? "scale-x-[-1]" : ""}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 11c9-6 17 4 26-1s16 5 25 0 15 3 29-2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TituloSecao({
  children,
  id,
  descricao,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  descricao?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="flex items-center justify-center gap-4">
        <TracoTitulo />
        <h2
          id={id}
          className="text-verde text-[1.65rem] leading-tight sm:text-[2.1rem] lg:text-[2.4rem]"
        >
          {children}
        </h2>
        <TracoTitulo espelhado />
      </div>
      {descricao ? (
        <p className="text-tinta-suave mt-4 max-w-2xl text-[1.02rem] leading-relaxed">
          {descricao}
        </p>
      ) : null}
    </div>
  );
}

/** Selo pequeno com fundo suave — usado no hero e nos cards. */
export function Selo({
  children,
  icone,
  tom = "verde",
  className = "",
}: {
  children: ReactNode;
  icone?: ReactNode;
  tom?: "verde" | "laranja" | "claro";
  className?: string;
}) {
  const tons = {
    verde: "bg-verde-claro text-verde-escuro",
    laranja: "bg-laranja-claro text-laranja-escuro",
    claro: "bg-white/85 text-verde-escuro backdrop-blur-sm",
  } as const;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase ${tons[tom]} ${className}`}
    >
      {icone}
      {children}
    </span>
  );
}

/** Mandacaru em traço fino usado como marca d'água nas laterais. */
export function CactoDecorativo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 220"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M60 214V44" />
        <path d="M60 128H30a14 14 0 0 1-14-14V82" />
        <path d="M60 104h30a14 14 0 0 0 14-14V60" />
        <path d="M60 44a10 10 0 0 1 20 0M16 82a8 8 0 0 1 16 0M104 60a8 8 0 0 0-16 0" />
        <path d="M44 214h32" opacity="0.5" />
      </g>
      <g stroke="currentColor" strokeWidth="1.6" opacity="0.55">
        <path d="M52 70v130M68 70v130" strokeDasharray="4 9" />
      </g>
    </svg>
  );
}

/** Horizonte de serra desenhado — rodapé e faixas de destaque. */
export function LinhaSerra({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 80"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 66c48-4 74-30 108-30s52 22 88 22 58-34 96-34 60 30 96 30 56-18 92-18 78 20 120 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
