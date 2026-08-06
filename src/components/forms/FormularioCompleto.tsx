"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2, Lock, Send } from "lucide-react";

import { gts } from "@/content/gts";
import {
  areasDeInteresse,
  disponibilidades,
  tiposContribuicao,
  tiposParticipacao,
} from "@/content/site";
import {
  esquemaInteresseCompleto,
  type InteresseCompleto,
} from "@/lib/validacoes";

const campo =
  "w-full rounded-xl border border-borda bg-white px-4 py-3 text-[0.97rem] text-tinta placeholder:text-tinta-suave/70 transition-colors focus:border-verde focus:outline-none";

export function FormularioCompleto() {
  const router = useRouter();
  const parametros = useSearchParams();
  const gtPreSelecionado = parametros.get("gt");
  const [erroGeral, setErroGeral] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<InteresseCompleto>({
    resolver: zodResolver(esquemaInteresseCompleto),
    defaultValues: {
      tipo: "completo",
      workingGroupIds: gts.some((gt) => gt.slug === gtPreSelecionado)
        ? [gtPreSelecionado as string]
        : [],
      contributionTypes: [],
      city: "Salgueiro",
    },
  });

  const motivacao = watch("motivation") ?? "";

  const enviar = handleSubmit(async (dados) => {
    setErroGeral(null);
    try {
      const resposta = await fetch("/api/interesse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dados, tipo: "completo" }),
      });
      const corpo = await resposta.json();

      if (!resposta.ok || !corpo.success) {
        setErroGeral(corpo.error ?? "Não foi possível enviar sua manifestação.");
        return;
      }

      router.push(`/obrigado?protocolo=${encodeURIComponent(corpo.protocol)}`);
    } catch {
      setErroGeral("Falha de conexão. Verifique sua internet e tente novamente.");
    }
  });

  return (
    <form onSubmit={enviar} noValidate className="space-y-10">
      {/* 1. Identificação */}
      <Bloco numero={1} titulo="Seus dados">
        <div className="grid gap-5 sm:grid-cols-2">
          <Campo id="nome" rotulo="Nome completo" obrigatorio erro={errors.fullName?.message}>
            <input
              id="nome"
              type="text"
              autoComplete="name"
              className={campo}
              aria-invalid={Boolean(errors.fullName)}
              {...register("fullName")}
            />
          </Campo>

          <Campo id="email" rotulo="E-mail" obrigatorio erro={errors.email?.message}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={campo}
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
          </Campo>

          <Campo
            id="telefone"
            rotulo="Telefone / WhatsApp"
            obrigatorio
            erro={errors.phone?.message}
            ajuda="Com DDD. Ex.: (87) 9 9999-9999"
          >
            <input
              id="telefone"
              type="tel"
              autoComplete="tel"
              className={campo}
              aria-invalid={Boolean(errors.phone)}
              {...register("phone")}
            />
          </Campo>

          <Campo id="cidade" rotulo="Município" obrigatorio erro={errors.city?.message}>
            <input
              id="cidade"
              type="text"
              autoComplete="address-level2"
              className={campo}
              aria-invalid={Boolean(errors.city)}
              {...register("city")}
            />
          </Campo>
        </div>
      </Bloco>

      {/* 2. Vínculo */}
      <Bloco numero={2} titulo="Seu vínculo">
        <div className="grid gap-5 sm:grid-cols-2">
          <Campo
            id="tipo-participacao"
            rotulo="Tipo de participação"
            obrigatorio
            erro={errors.participationType?.message}
          >
            <select
              id="tipo-participacao"
              className={campo}
              defaultValue=""
              aria-invalid={Boolean(errors.participationType)}
              {...register("participationType")}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {tiposParticipacao.map((tipo) => (
                <option key={tipo.valor} value={tipo.valor}>
                  {tipo.rotulo}
                </option>
              ))}
            </select>
          </Campo>

          <Campo
            id="instituicao"
            rotulo="Organização / instituição"
            erro={errors.institutionName?.message}
            ajuda="Se você participa como pessoa física, deixe em branco."
          >
            <input id="instituicao" type="text" className={campo} {...register("institutionName")} />
          </Campo>

          <Campo
            id="area"
            rotulo="Área de atuação"
            erro={errors.professionalArea?.message}
            className="sm:col-span-2"
          >
            <select id="area" className={campo} defaultValue="" {...register("professionalArea")}>
              <option value="">Selecione uma área</option>
              {areasDeInteresse.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </Campo>
        </div>
      </Bloco>

      {/* 3. GTs */}
      <Bloco
        numero={3}
        titulo="Grupos de Trabalho de interesse"
        descricao="Selecione um ou mais GTs. Você pode indicar mais de um."
      >
        <fieldset>
          <legend className="sr-only">Grupos de Trabalho de interesse</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {gts.map((gt) => (
              <label
                key={gt.slug}
                className="group flex cursor-pointer items-start gap-3 rounded-xl border border-borda bg-white p-4 transition-colors hover:border-verde/40 has-checked:border-verde has-checked:bg-verde-claro"
              >
                <input
                  type="checkbox"
                  value={gt.slug}
                  className="mt-1 h-4.5 w-4.5 shrink-0 accent-[#08783F]"
                  {...register("workingGroupIds")}
                />
                <span>
                  <span className="block font-display text-[0.98rem] font-bold text-verde-escuro">
                    {gt.nome}
                  </span>
                  <span className="mt-1 block text-[0.88rem] leading-relaxed text-tinta-suave">
                    {gt.resumo}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <MensagemErro texto={errors.workingGroupIds?.message} />
      </Bloco>

      {/* 4. Contribuição */}
      <Bloco
        numero={4}
        titulo="Como você deseja contribuir"
        descricao="Marque todas as formas que fizerem sentido para você."
      >
        <fieldset>
          <legend className="sr-only">Formas de contribuição</legend>
          <div className="flex flex-wrap gap-2.5">
            {tiposContribuicao.map((tipo) => (
              <label
                key={tipo.valor}
                /* o input é visualmente oculto: o anel de foco vai no label
                   para que a navegação por teclado continue visível */
                className="cursor-pointer rounded-full border border-borda bg-white px-4 py-2.5 text-[0.92rem] font-semibold text-tinta-suave transition-colors hover:border-verde/40 has-checked:border-verde has-checked:bg-verde has-checked:text-white has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-laranja"
              >
                <input
                  type="checkbox"
                  value={tipo.valor}
                  className="sr-only"
                  {...register("contributionTypes")}
                />
                {tipo.rotulo}
              </label>
            ))}
          </div>
        </fieldset>
        <MensagemErro texto={errors.contributionTypes?.message} />

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Campo
            id="disponibilidade"
            rotulo="Disponibilidade"
            obrigatorio
            erro={errors.availability?.message}
          >
            <select
              id="disponibilidade"
              className={campo}
              defaultValue=""
              aria-invalid={Boolean(errors.availability)}
              {...register("availability")}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {disponibilidades.map((item) => (
                <option key={item.valor} value={item.valor}>
                  {item.rotulo}
                </option>
              ))}
            </select>
          </Campo>
        </div>

        <Campo
          id="motivacao"
          rotulo="O que motiva sua participação?"
          obrigatorio
          erro={errors.motivation?.message}
          ajuda={`Mínimo de 30 caracteres — ${motivacao.length} escritos.`}
          className="mt-5"
        >
          <textarea
            id="motivacao"
            rows={5}
            className={`${campo} resize-y`}
            aria-invalid={Boolean(errors.motivation)}
            {...register("motivation")}
          />
        </Campo>
      </Bloco>

      {/* 5. Consentimentos */}
      <Bloco numero={5} titulo="Consentimentos">
        <div className="space-y-4">
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-borda bg-white p-4 transition-colors has-checked:border-verde has-checked:bg-verde-claro">
            <input
              type="checkbox"
              className="mt-1 h-4.5 w-4.5 shrink-0 accent-[#08783F]"
              aria-invalid={Boolean(errors.privacyConsent)}
              {...register("privacyConsent")}
            />
            <span className="text-[0.95rem] leading-relaxed text-tinta">
              Li e aceito o{" "}
              <Link href="/privacidade" className="link-sublinhado font-semibold text-verde">
                aviso de privacidade
              </Link>{" "}
              e autorizo o uso dos meus dados para fins de articulação do Inova
              Salgueiro.
            </span>
          </label>
          <MensagemErro texto={errors.privacyConsent?.message} />

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-borda bg-white p-4 transition-colors has-checked:border-verde has-checked:bg-verde-claro">
            <input
              type="checkbox"
              className="mt-1 h-4.5 w-4.5 shrink-0 accent-[#08783F]"
              aria-invalid={Boolean(errors.participationRulesConsent)}
              {...register("participationRulesConsent")}
            />
            <span className="text-[0.95rem] leading-relaxed text-tinta">
              Estou de acordo com as{" "}
              <Link href="/termos" className="link-sublinhado font-semibold text-verde">
                regras de participação
              </Link>{" "}
              e com os princípios de colaboração e respeito do movimento.
            </span>
          </label>
          <MensagemErro texto={errors.participationRulesConsent?.message} />
        </div>
      </Bloco>

      {/* honeypot */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="fc-website">Não preencha este campo</label>
        <input id="fc-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {erroGeral ? (
        <p
          role="alert"
          className="flex items-start gap-3 rounded-xl bg-red-50 px-5 py-4 text-[0.95rem] text-red-700"
        >
          <AlertCircle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
          {erroGeral}
        </p>
      ) : null}

      <div className="flex flex-col items-start gap-4 border-t border-borda pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-[0.88rem] text-tinta-suave">
          <Lock size={15} className="text-laranja" aria-hidden="true" />
          Seus dados são tratados conforme a LGPD.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-verde px-8 font-display text-[1rem] font-bold text-white shadow-[0_12px_26px_-14px_rgba(8,120,63,0.8)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-verde-escuro disabled:translate-y-0 disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              Enviando…
            </>
          ) : (
            <>
              Enviar manifestação de interesse
              <Send size={18} strokeWidth={2.2} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Bloco({
  numero,
  titulo,
  descricao,
  children,
}: {
  numero: number;
  titulo: string;
  descricao?: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={`bloco-${numero}`}>
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-verde-claro font-display text-[0.95rem] font-extrabold text-verde"
          aria-hidden="true"
        >
          {numero}
        </span>
        <h2 id={`bloco-${numero}`} className="text-[1.25rem] text-verde-escuro">
          {titulo}
        </h2>
      </div>
      {descricao ? (
        <p className="mt-2 ml-12 text-[0.94rem] text-tinta-suave">{descricao}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Campo({
  id,
  rotulo,
  obrigatorio = false,
  erro,
  ajuda,
  className = "",
  children,
}: {
  id: string;
  rotulo: string;
  obrigatorio?: boolean;
  erro?: string;
  ajuda?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1.5 block font-display text-[0.9rem] font-bold text-verde-escuro"
      >
        {rotulo}
        {obrigatorio ? (
          <span className="ml-1 text-laranja" aria-hidden="true">
            *
          </span>
        ) : null}
        {obrigatorio ? <span className="sr-only"> (obrigatório)</span> : null}
      </label>
      {children}
      {ajuda && !erro ? (
        <p className="mt-1.5 text-[0.83rem] text-tinta-suave">{ajuda}</p>
      ) : null}
      <MensagemErro texto={erro} />
    </div>
  );
}

function MensagemErro({ texto }: { texto?: string }) {
  if (!texto) return null;
  return (
    <p role="alert" className="mt-1.5 text-[0.85rem] font-medium text-red-600">
      {texto}
    </p>
  );
}
