"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Lock,
  Mail,
  Tag,
  User,
  UserPlus,
} from "lucide-react";

import { areasDeInteresse } from "@/content/site";
import {
  esquemaInteresseRapido,
  type InteresseRapido,
} from "@/lib/validacoes";

const campoBase =
  "w-full rounded-xl border border-borda bg-white py-3 pl-11 pr-4 text-[0.97rem] text-tinta placeholder:text-tinta-suave/70 transition-colors focus:border-verde focus:outline-none";

export function FormularioRapido() {
  const [protocolo, setProtocolo] = useState<string | null>(null);
  const [erroGeral, setErroGeral] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InteresseRapido>({
    resolver: zodResolver(esquemaInteresseRapido),
    defaultValues: { tipo: "rapido", professionalArea: "" },
  });

  const enviar = handleSubmit(async (dados) => {
    setErroGeral(null);
    try {
      const resposta = await fetch("/api/interesse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dados, tipo: "rapido" }),
      });
      const corpo = await resposta.json();

      if (!resposta.ok || !corpo.success) {
        setErroGeral(corpo.error ?? "Não foi possível enviar agora.");
        return;
      }
      setProtocolo(corpo.protocol);
    } catch {
      setErroGeral("Falha de conexão. Verifique sua internet e tente novamente.");
    }
  });

  if (protocolo) {
    return (
      <div
        className="rounded-2xl border border-verde/20 bg-white p-8 text-center shadow-alto"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          size={46}
          className="mx-auto text-verde"
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <h2 className="mt-4 font-display text-xl font-extrabold text-verde-escuro">
          Recebemos seu interesse!
        </h2>
        <p className="mt-2 text-[0.96rem] leading-relaxed text-tinta-suave">
          Seu protocolo é{" "}
          <strong className="font-semibold text-tinta">{protocolo}</strong>. A
          governança do Inova Salgueiro entrará em contato pelo e-mail informado.
        </p>
        <Link
          href="/como-participar"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-verde px-6 font-display font-bold text-white transition-colors hover:bg-verde-escuro"
        >
          Completar meu cadastro
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={enviar}
      noValidate
      aria-labelledby="titulo-form-rapido"
      className="rounded-2xl border border-white/70 bg-white/95 p-6 shadow-alto backdrop-blur-sm sm:p-7"
    >
      <h2
        id="titulo-form-rapido"
        className="text-center text-[1.28rem] text-verde-escuro"
      >
        Tenho interesse em participar
      </h2>
      <p className="mt-1.5 text-center text-[0.92rem] text-tinta-suave">
        Preencha seus dados e junte-se a nós!
      </p>

      <div className="mt-6 space-y-3.5">
        <Campo
          id="rf-nome"
          rotulo="Nome"
          erro={errors.fullName?.message}
          icone={<User size={18} aria-hidden="true" />}
        >
          <input
            id="rf-nome"
            type="text"
            autoComplete="name"
            placeholder="Nome"
            className={campoBase}
            aria-invalid={Boolean(errors.fullName)}
            {...register("fullName")}
          />
        </Campo>

        <Campo
          id="rf-instituicao"
          rotulo="Empresa ou instituição"
          erro={errors.institutionName?.message}
          icone={<Building2 size={18} aria-hidden="true" />}
        >
          <input
            id="rf-instituicao"
            type="text"
            autoComplete="organization"
            placeholder="Empresa ou instituição"
            className={campoBase}
            {...register("institutionName")}
          />
        </Campo>

        <Campo
          id="rf-area"
          rotulo="Área de interesse"
          erro={errors.professionalArea?.message}
          icone={<Tag size={18} aria-hidden="true" />}
        >
          <div className="relative">
            <select
              id="rf-area"
              className={`${campoBase} appearance-none pr-11`}
              aria-invalid={Boolean(errors.professionalArea)}
              defaultValue=""
              {...register("professionalArea")}
            >
              <option value="" disabled>
                Área de interesse
              </option>
              {areasDeInteresse.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-tinta-suave"
              aria-hidden="true"
            />
          </div>
        </Campo>

        <Campo
          id="rf-email"
          rotulo="E-mail"
          erro={errors.email?.message}
          icone={<Mail size={18} aria-hidden="true" />}
        >
          <input
            id="rf-email"
            type="email"
            autoComplete="email"
            placeholder="E-mail"
            className={campoBase}
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </Campo>
      </div>

      {/* honeypot — invisível para pessoas, atrativo para bots */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="rf-website">Não preencha este campo</label>
        <input id="rf-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {erroGeral ? (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[0.9rem] text-red-700">
          {erroGeral}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-verde px-6 font-display text-[1rem] font-bold text-white shadow-[0_12px_26px_-14px_rgba(8,120,63,0.8)] transition-all duration-250 hover:bg-verde-escuro hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            Tenho interesse em participar
            <UserPlus size={18} strokeWidth={2.2} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-[0.83rem] text-tinta-suave">
        <Lock size={14} className="text-laranja" aria-hidden="true" />
        Seus dados estão seguros conosco.
      </p>
    </form>
  );
}

function Campo({
  id,
  rotulo,
  erro,
  icone,
  children,
}: {
  id: string;
  rotulo: string;
  erro?: string;
  icone: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {rotulo}
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute top-1/2 left-4 z-10 -translate-y-1/2 text-tinta-suave"
          aria-hidden="true"
        >
          {icone}
        </span>
        {children}
      </div>
      {erro ? (
        <p className="mt-1.5 pl-1 text-[0.83rem] font-medium text-red-600" role="alert">
          {erro}
        </p>
      ) : null}
    </div>
  );
}
