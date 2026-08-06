import Link from "next/link";

type Props = {
  className?: string;
  /** Usa a versão monocromática clara, para fundos escuros. */
  claro?: boolean;
  /** Se falso, renderiza apenas a marca (sem link). */
  comLink?: boolean;
};

/**
 * Marca do Inova Salgueiro.
 *
 * Reconstruída em HTML + SVG a partir do logotipo oficial: "INOVA" em verde,
 * "SALGUEIRO" em laranja e a cena do sertão (sol, mandacarus e a aba do chapéu)
 * apoiada na base da letra "A". Escala junto com o font-size, então basta
 * ajustar a classe de texto para mudar o tamanho da marca inteira.
 *
 * Duas composições: {@link Marca} (horizontal, para header e rodapé) e
 * {@link MarcaEmpilhada} (vertical, como no logotipo oficial).
 */
export function Marca({ className = "", claro = false }: Omit<Props, "comLink">) {
  return (
    <span
      className={`inline-flex select-none items-baseline font-display text-[1.5rem] leading-none font-extrabold tracking-[-0.03em] ${className}`}
      aria-hidden="true"
    >
      <PalavraInova claro={claro} />
      <span className={`ml-[0.32em] ${claro ? "text-white/90" : "text-laranja"}`}>
        SALGUEIRO
      </span>
    </span>
  );
}

export function MarcaEmpilhada({
  className = "",
  claro = false,
}: Omit<Props, "comLink">) {
  return (
    <span
      className={`inline-flex select-none flex-col items-center font-display text-[4rem] leading-[0.92] font-extrabold tracking-[-0.03em] ${className}`}
      aria-hidden="true"
    >
      <PalavraInova claro={claro} />
      <span
        className={`mt-[0.12em] text-[0.46em] tracking-[0.105em] ${
          claro ? "text-white/90" : "text-laranja"
        }`}
      >
        SALGUEIRO
      </span>
    </span>
  );
}

/** "INOVA" com a cena do sertão apoiada na base do "A". */
function PalavraInova({ claro }: { claro: boolean }) {
  return (
    <span className={claro ? "text-white" : "text-verde"}>
      INOV
      <span className="relative inline-block">
        A
        <CenaSertao className="pointer-events-none absolute -left-[20%] bottom-[0.02em] w-[142%]" />
      </span>
    </span>
  );
}

function CenaSertao({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 46"
      className={className}
      fill="none"
      role="presentation"
      focusable="false"
    >
      <defs>
        <linearGradient id="sol-marca" x1="60" y1="10" x2="60" y2="36">
          <stop stopColor="#FFD24D" />
          <stop offset="1" stopColor="#F07C0A" />
        </linearGradient>
      </defs>

      {/* sol nascente */}
      <path d="M40 36a20 20 0 0 1 40 0Z" fill="url(#sol-marca)" />

      {/* mandacarus recortados contra o sol */}
      <path
        d="M50 36V22m0 6h-4.4v4.6M50 25.4h3.8v5.4"
        stroke="#B4451F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M66 36V26m0 4h3.2v4"
        stroke="#B4451F"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M74 36v-6.5m0 2.6h2.4"
        stroke="#B4451F"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      {/* touceira de mato à esquerda */}
      <path
        d="M24 35c1.8-3.4 3.4-5 5.6-6.4M27 35c0-3 .7-5 2-7.2M30 35c1.2-2.8 2.8-4.6 4.8-6"
        stroke="#B4451F"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      {/* aba do chapéu / horizonte de caatinga */}
      <path
        d="M8 37c14-6.6 34.5-9.6 52-9.6s38 3 52 9.6c-13.5 5.8-33 8.6-52 8.6S21.5 42.8 8 37Z"
        fill="#B4451F"
      />
    </svg>
  );
}

export function Logo({ className, claro, comLink = true }: Props) {
  if (!comLink) return <Marca className={className} claro={claro} />;

  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-lg transition-transform duration-300 hover:-translate-y-0.5"
      aria-label="Inova Salgueiro — ir para a página inicial"
    >
      <Marca className={className} claro={claro} />
    </Link>
  );
}
