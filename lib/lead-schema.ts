import { z } from "zod";

// ---- Opcoes (centralizadas para reuso UI + validacao) ----

export const industryOptions = [
  { value: "comercio", label: "Comércio" },
  { value: "servicos", label: "Serviços" },
  { value: "saude", label: "Saúde" },
  { value: "educacao", label: "Educação" },
  { value: "alimentacao", label: "Alimentação" },
  { value: "beleza_estetica", label: "Beleza/Estética" },
  { value: "industria", label: "Indústria" },
  { value: "tech", label: "Tecnologia" },
  { value: "outro", label: "Outro" },
] as const;

export const employeeRangeOptions = [
  { value: "1", label: "Só eu" },
  { value: "2-5", label: "2 a 5" },
  { value: "6-10", label: "6 a 10" },
  { value: "11-30", label: "11 a 30" },
  { value: "31-100", label: "31 a 100" },
  { value: "100+", label: "Mais de 100" },
] as const;

export const revenueRangeOptions = [
  { value: "ate_10k", label: "Até R$ 10 mil" },
  { value: "10_30k", label: "R$ 10 mil – R$ 30 mil" },
  { value: "30_100k", label: "R$ 30 mil – R$ 100 mil" },
  { value: "100_500k", label: "R$ 100 mil – R$ 500 mil" },
  { value: "500k_mais", label: "Acima de R$ 500 mil" },
  { value: "prefer_not_say", label: "Prefiro não responder" },
] as const;

export const automationAreaOptions = [
  { value: "atendimento", label: "Atendimento & Suporte" },
  { value: "financeiro", label: "Financeiro & Cobrança" },
  { value: "operacoes", label: "Operações & Backoffice" },
  { value: "vendas", label: "Vendas & Comercial" },
  { value: "outras", label: "Outras" },
] as const;

export const implementationTimelineOptions = [
  { value: "now", label: "Agora — quanto antes melhor" },
  { value: "30d", label: "Próximos 30 dias" },
  { value: "1-3m", label: "Daqui a 1 a 3 meses" },
  { value: "exploring", label: "Ainda estou explorando" },
] as const;

// ---- Helpers para extrair so os values ----

const values = <T extends ReadonlyArray<{ value: string }>>(arr: T) =>
  arr.map((o) => o.value) as unknown as [T[number]["value"], ...T[number]["value"][]];

// ---- Schema zod compartilhado client + server ----

export const leadSchema = z.object({
  // Identificacao
  full_name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(120, "Nome muito longo"),
  email: z.string().trim().toLowerCase().email("E-mail inválido"),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\+?\d{10,15}$/, "WhatsApp em formato inválido (apenas números, com DDD)"),

  // Empresa
  company_name: z
    .string()
    .trim()
    .min(2, "Informe o nome da empresa")
    .max(120, "Nome muito longo"),
  company_url: z.string().trim().max(255).optional().or(z.literal("")),
  industry: z.enum(values(industryOptions)),
  employee_range: z.enum(values(employeeRangeOptions)),
  revenue_range: z.enum(values(revenueRangeOptions)),

  // Dor
  automation_areas: z
    .array(z.enum(values(automationAreaOptions)))
    .min(1, "Selecione ao menos uma área"),
  biggest_pain: z
    .string()
    .trim()
    .min(10, "Descreva sua dor com pelo menos 10 caracteres")
    .max(2000, "Máximo 2000 caracteres"),

  // Compromisso
  implementation_timeline: z.enum(values(implementationTimelineOptions)),

  // Origem (preenchido client-side via URL/cookie)
  source_page: z.string().max(120).optional().or(z.literal("")),
  utm_source: z.string().max(120).optional().or(z.literal("")),
  utm_medium: z.string().max(120).optional().or(z.literal("")),
  utm_campaign: z.string().max(120).optional().or(z.literal("")),
  utm_content: z.string().max(120).optional().or(z.literal("")),
  utm_term: z.string().max(120).optional().or(z.literal("")),
  referrer: z.string().max(500).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
