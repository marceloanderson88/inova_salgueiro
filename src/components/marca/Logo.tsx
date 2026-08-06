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
 * "SALGUEIRO" em laranja e a cena do sertão (sol nascente, mandacarus e a aba
 * do chapéu) apoiada sobre a perna direita do "A". Escala junto com o
 * font-size, então basta ajustar a classe de texto para mudar a marca inteira.
 *
 * As proporções seguem as medidas do arquivo oficial: a altura de "SALGUEIRO"
 * é cerca de 1/3 da de "INOVA" e as duas palavras têm larguras equivalentes —
 * daí o entreletras generoso na palavra de baixo, que também existe no
 * original.
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
      {/* o padding-left compensa o espaço que o entreletras deixa após o "O"
          final, mantendo a palavra opticamente centrada sob "INOVA" */}
      <span
        className={`mt-[0.14em] pl-[0.26em] text-[0.37em] tracking-[0.26em] ${
          claro ? "text-white/90" : "text-laranja"
        }`}
      >
        SALGUEIRO
      </span>
    </span>
  );
}

/** "INOVA" com a cena do sertão sobre a perna direita do "A". */
function PalavraInova({ claro }: { claro: boolean }) {
  return (
    <span className={claro ? "text-white" : "text-verde"}>
      INOV
      <span className="relative inline-block">
        A
        <CenaSertao className="pointer-events-none absolute -left-[10%] bottom-[0.12em] w-[107%]" />
      </span>
    </span>
  );
}

function CenaSertao({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 64"
      className={className}
      fill="none"
      role="presentation"
      focusable="false"
    >
      <defs>
        <linearGradient id="sol-inova" x1="70" y1="10" x2="70" y2="42">
          <stop stopColor="#FFE06B" />
          <stop offset="0.5" stopColor="#FCB52A" />
          <stop offset="1" stopColor="#EF8410" />
        </linearGradient>
      </defs>

      {/* sol nascente: o disco entra na aba, deixando a cúpula à mostra */}
      <path d="M40 40a30 30 0 0 1 60 0Z" fill="url(#sol-inova)" />

      {/* mandacarus recortados contra o sol */}
      <g stroke="#A5391A" strokeLinecap="round" fill="none">
        <path d="M52 35V14m0 8h-5.6v6.4M52 18.6h4.8v7.2" strokeWidth="3.6" />
        <path d="M70 35V19m0 5.6h4.4v6" strokeWidth="3.2" />
        <path d="M85 35V21.5m0 4.6h4v5.4M85 23.6h-3.6v5" strokeWidth="3.2" />
        <path d="M97 35v-8.5m0 3h3.2" strokeWidth="2.8" />
      </g>

      {/* touceiras de mato na ponta esquerda da aba */}
      <g stroke="#A5391A" strokeWidth="2.8" strokeLinecap="round" fill="none">
        <path d="M22 36c2.6-5.4 5-7.8 8.4-10M27 36c0-4.6 1.1-7.8 3.2-11M31.6 36c2-4.2 4.4-6.8 7.4-9" />
      </g>

      {/* aba do chapéu: banda achatada, larga, com as pontas viradas para cima */}
      <path
        d="M2 42.5C18 35 40 31.5 70 31.5s52 3.5 68 11c-16 8.5-38 12.5-68 12.5S18 51 2 42.5Z"
        fill="#BE4A1E"
      />
      {/* luz na borda de cima da aba, que dá volume à peça */}
      <path
        d="M16 40.6c13-4.6 32-7.2 54-7.2"
        stroke="#D96A33"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.75"
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
