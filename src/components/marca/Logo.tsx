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
 * "SALGUEIRO" em laranja e a cena do sertão (sol, caatinga e chapéu) apoiada
 * na base da letra "A". Escala junto com o font-size, então basta ajustar a
 * classe de texto para mudar o tamanho da marca inteira.
 */
export function Marca({ className = "", claro = false }: Omit<Props, "comLink">) {
  return (
    <span
      className={`inline-flex select-none items-baseline font-display text-[1.5rem] leading-none font-extrabold tracking-[-0.03em] ${className}`}
      aria-hidden="true"
    >
      <span className={claro ? "text-white" : "text-verde"}>
        INOV
        <span className="relative inline-block">
          A
          <CenaSertao className="pointer-events-none absolute -left-[18%] bottom-[0.02em] w-[136%]" />
        </span>
      </span>
      <span className={`ml-[0.32em] ${claro ? "text-white/90" : "text-laranja"}`}>
        SALGUEIRO
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
        <linearGradient id="sol-marca" x1="60" y1="6" x2="60" y2="34">
          <stop stopColor="#FFC53D" />
          <stop offset="1" stopColor="#F38A09" />
        </linearGradient>
      </defs>
      {/* sol nascente, visível no vazado da letra */}
      <path d="M40 35a20 20 0 0 1 40 0Z" fill="url(#sol-marca)" />
      {/* mandacaru — poucos traços para não empastar em tamanhos pequenos */}
      <path
        d="M52 35v-11m0 5h-4v4.5M52 26h3.6v5"
        stroke="#1F7A45"
        strokeWidth="2.4"
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
