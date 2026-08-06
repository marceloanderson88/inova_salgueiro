import { z } from "zod";

import { gts } from "@/content/gts";
import {
  disponibilidades,
  tiposContribuicao,
  tiposParticipacao,
} from "@/content/site";

const slugsGT = gts.map((gt) => gt.slug) as [string, ...string[]];
const valoresParticipacao = tiposParticipacao.map((t) => t.valor) as [
  string,
  ...string[],
];
const valoresContribuicao = tiposContribuicao.map((t) => t.valor) as [
  string,
  ...string[],
];
const valoresDisponibilidade = disponibilidades.map((d) => d.valor) as [
  string,
  ...string[],
];

/** Aceita (87) 9 9999-9999, 87999999999, +55 87 99999-9999 etc. */
const telefoneBR = z
  .string()
  .trim()
  .refine((valor) => {
    const digitos = valor.replace(/\D/g, "");
    return digitos.length >= 10 && digitos.length <= 13;
  }, "Informe um telefone brasileiro válido, com DDD.");

const nome = z
  .string()
  .trim()
  .min(3, "Informe seu nome completo.")
  .max(120, "Nome muito longo.");

const email = z
  .string()
  .trim()
  .toLowerCase()
  .email("Informe um e-mail válido.")
  .max(160, "E-mail muito longo.");

/** Manifestação rápida — formulário do topo da página inicial. */
export const esquemaInteresseRapido = z.object({
  tipo: z.literal("rapido"),
  fullName: nome,
  institutionName: z.string().trim().max(160).optional().or(z.literal("")),
  professionalArea: z.string().trim().min(1, "Selecione uma área de interesse."),
  email,
  // honeypot anti-spam: precisa chegar vazio
  website: z.string().optional(),
});

/** Manifestação completa — página "Como participar". */
export const esquemaInteresseCompleto = z.object({
  tipo: z.literal("completo"),
  fullName: nome,
  email,
  phone: telefoneBR,
  city: z.string().trim().min(2, "Informe seu município.").max(80),
  participationType: z.enum(valoresParticipacao, {
    errorMap: () => ({ message: "Selecione o tipo de participação." }),
  }),
  institutionName: z.string().trim().max(160).optional().or(z.literal("")),
  professionalArea: z.string().trim().max(120).optional().or(z.literal("")),
  workingGroupIds: z
    .array(z.enum(slugsGT))
    .min(1, "Selecione ao menos um Grupo de Trabalho."),
  contributionTypes: z
    .array(z.enum(valoresContribuicao))
    .min(1, "Selecione ao menos uma forma de contribuição."),
  motivation: z
    .string()
    .trim()
    .min(30, "Conte um pouco mais: use ao menos 30 caracteres.")
    .max(1500, "Texto muito longo."),
  availability: z.enum(valoresDisponibilidade, {
    errorMap: () => ({ message: "Selecione sua disponibilidade." }),
  }),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar o aviso de privacidade." }),
  }),
  participationRulesConsent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar as regras de participação." }),
  }),
  website: z.string().optional(),
});

export const esquemaInteresse = z.discriminatedUnion("tipo", [
  esquemaInteresseRapido,
  esquemaInteresseCompleto,
]);

export type InteresseRapido = z.infer<typeof esquemaInteresseRapido>;
export type InteresseCompleto = z.infer<typeof esquemaInteresseCompleto>;
export type Interesse = z.infer<typeof esquemaInteresse>;

export const esquemaContato = z.object({
  name: nome,
  email,
  subject: z.string().trim().min(3, "Informe um assunto.").max(140),
  message: z
    .string()
    .trim()
    .min(20, "Escreva sua mensagem com ao menos 20 caracteres.")
    .max(2000),
  website: z.string().optional(),
});

export type Contato = z.infer<typeof esquemaContato>;
