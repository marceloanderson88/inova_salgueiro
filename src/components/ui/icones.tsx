import {
  BookOpen,
  Building2,
  ClipboardList,
  Coins,
  Compass,
  Database,
  FlaskConical,
  GraduationCap,
  Landmark,
  ListChecks,
  type LucideIcon,
  Network,
  Puzzle,
  Rocket,
  Scale,
  Shield,
  Sprout,
  Target,
  Users,
  UserRound,
} from "lucide-react";

const mapa = {
  building: Building2,
  listChecks: ListChecks,
  graduation: GraduationCap,
  landmark: Landmark,
  coins: Coins,
  shield: Shield,
  network: Network,
  sprout: Sprout,
  puzzle: Puzzle,
  target: Target,
  flask: FlaskConical,
  compass: Compass,
  database: Database,
  scale: Scale,
  users: Users,
  rocket: Rocket,
  book: BookOpen,
  user: UserRound,
  form: ClipboardList,
} satisfies Record<string, LucideIcon>;

export type NomeIcone = keyof typeof mapa;

export function Icone({
  nome,
  size = 24,
  className = "",
}: {
  nome: NomeIcone;
  size?: number;
  className?: string;
}) {
  const Componente = mapa[nome];
  return (
    <Componente
      size={size}
      className={className}
      strokeWidth={1.7}
      aria-hidden="true"
    />
  );
}

/** Ícone dentro do círculo suave usado em todos os cards do site. */
export function IconeCirculo({
  nome,
  tom = "verde",
  className = "",
}: {
  nome: NomeIcone;
  tom?: "verde" | "laranja";
  className?: string;
}) {
  const tons = {
    verde: "bg-verde-claro text-verde ring-verde/10",
    laranja: "bg-laranja-claro text-laranja-escuro ring-laranja/15",
  } as const;

  return (
    <span
      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-8 transition-transform duration-300 group-hover:scale-105 ${tons[tom]} ${className}`}
    >
      <Icone nome={nome} size={26} />
    </span>
  );
}
