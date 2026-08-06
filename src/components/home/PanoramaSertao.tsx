/**
 * Panorama ilustrado de Salgueiro ao entardecer.
 *
 * Substitui a foto panorâmica do território sem custo de rede: é um SVG
 * vetorial, escala em qualquer viewport e não afeta o LCP. Para trocar por
 * uma fotografia oficial, basta sobrepor um <Image fill /> nesta mesma área.
 */
export function PanoramaSertao({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="ceu" x1="720" y1="0" x2="720" y2="620">
            <stop stopColor="#FEFCF8" />
            <stop offset="0.3" stopColor="#FFF0D6" />
            <stop offset="0.6" stopColor="#FFD79A" />
            <stop offset="1" stopColor="#F7B963" />
          </linearGradient>
          <radialGradient id="brilho-sol" cx="0.72" cy="0.78" r="0.55">
            <stop stopColor="#FFC46A" stopOpacity="0.95" />
            <stop offset="1" stopColor="#FFC46A" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="serra-longe" x1="720" y1="360" x2="720" y2="560">
            <stop stopColor="#C9A87A" stopOpacity="0.55" />
            <stop offset="1" stopColor="#B8905F" stopOpacity="0.42" />
          </linearGradient>
          <linearGradient id="serra-perto" x1="720" y1="430" x2="720" y2="640">
            <stop stopColor="#A97F52" stopOpacity="0.6" />
            <stop offset="1" stopColor="#8A6238" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="chao" x1="720" y1="560" x2="720" y2="720">
            <stop stopColor="#E9C489" stopOpacity="0.75" />
            <stop offset="1" stopColor="#DDA95F" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        <rect width="1440" height="720" fill="url(#ceu)" />
        <ellipse cx="1040" cy="560" rx="620" ry="380" fill="url(#brilho-sol)" />
        <circle cx="1040" cy="540" r="86" fill="#FFC15E" opacity="0.55" />

        {/* serra distante */}
        <path
          d="M0 512l96-52 78 34 120-72 92 46 104-30 118 58 132-84 112 62 96-40 122 66 92-34 178 66v198H0V512Z"
          fill="url(#serra-longe)"
        />
        {/* serra próxima */}
        <path
          d="M0 592l128-56 104 42 140-64 118 54 126-38 152 62 138-52 148 60 130-40 156 52v108H0V592Z"
          fill="url(#serra-perto)"
        />
        {/* chão da caatinga */}
        <path d="M0 636c220-28 420-16 640 6s460 30 800-8v86H0v-84Z" fill="url(#chao)" />

        {/* vegetação rasteira */}
        <g stroke="#7C5B33" strokeWidth="2.5" strokeLinecap="round" opacity="0.35">
          <path d="M212 664c8-16 16-24 28-32M232 664c-2-14 0-26 6-38M252 664c8-14 18-22 30-28" />
          <path d="M980 676c8-16 16-24 28-32M1000 676c-2-14 0-26 6-38M1020 676c8-14 18-22 30-28" />
          <path d="M600 690c8-16 16-24 28-32M620 690c-2-14 0-26 6-38" />
        </g>

        {/* mandacarus em silhueta */}
        <g fill="#6E4E2C" opacity="0.5">
          <CactoSilhueta x={96} y={700} altura={148} escala={1.05} />
          <CactoSilhueta x={1332} y={706} altura={172} escala={1.18} />
          <CactoSilhueta x={1246} y={700} altura={104} escala={0.8} />
          <CactoSilhueta x={412} y={694} altura={86} escala={0.66} />
        </g>
      </svg>
    </div>
  );
}

function CactoSilhueta({
  x,
  y,
  altura,
  escala = 1,
}: {
  x: number;
  y: number;
  altura: number;
  escala?: number;
}) {
  const l = 13 * escala;
  const braco = 30 * escala;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-l / 2} y={-altura} width={l} height={altura} rx={l / 2} />
      <path
        d={`M${-l / 2} ${-altura * 0.62} h${-braco} a${l / 2} ${l / 2} 0 0 0 ${-l / 2} ${l / 2} v${-altura * 0.3} a${l / 2} ${l / 2} 0 0 1 ${l} 0 v${altura * 0.24} a${l / 2} ${l / 2} 0 0 0 ${l / 2} ${l / 2} h${braco - l / 2} z`}
      />
      <path
        d={`M${l / 2} ${-altura * 0.76} h${braco} a${l / 2} ${l / 2} 0 0 1 ${l / 2} ${l / 2} v${-altura * 0.22} a${l / 2} ${l / 2} 0 0 0 ${-l} 0 v${altura * 0.18} a${l / 2} ${l / 2} 0 0 1 ${-l / 2} ${l / 2} h${-braco + l / 2} z`}
      />
    </g>
  );
}
