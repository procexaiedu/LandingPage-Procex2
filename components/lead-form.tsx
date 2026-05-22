"use client";

import { useState, useMemo, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2, Check } from "lucide-react";
import posthog from "posthog-js";
import {
  leadSchema,
  type LeadInput,
  industryOptions,
  employeeRangeOptions,
  revenueRangeOptions,
  automationAreaOptions,
  implementationTimelineOptions,
} from "@/lib/lead-schema";
import { readOriginContext } from "@/lib/utm";
import { cn } from "@/lib/utils";

// ---------- Tipos auxiliares ----------

type FormState = {
  full_name: string;
  email: string;
  whatsapp: string;
  company_name: string;
  company_url: string;
  industry: string;
  employee_range: string;
  revenue_range: string;
  automation_areas: string[];
  biggest_pain: string;
  implementation_timeline: string;
};

const initialState: FormState = {
  full_name: "",
  email: "",
  whatsapp: "",
  company_name: "",
  company_url: "",
  industry: "",
  employee_range: "",
  revenue_range: "",
  automation_areas: [],
  biggest_pain: "",
  implementation_timeline: "",
};

const TOTAL_STEPS = 4;

const stepFields: ReadonlyArray<ReadonlyArray<keyof FormState>> = [
  ["full_name", "email", "whatsapp"],
  [
    "company_name",
    "company_url",
    "industry",
    "employee_range",
    "revenue_range",
  ],
  ["automation_areas", "biggest_pain"],
  ["implementation_timeline"],
];

// ---------- Componente principal ----------

export function LeadForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const progress = useMemo(
    () => Math.round(((step + 1) / TOTAL_STEPS) * 100),
    [step],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function toggleAutomationArea(area: string) {
    setData((prev) => {
      const areas = prev.automation_areas.includes(area)
        ? prev.automation_areas.filter((a) => a !== area)
        : [...prev.automation_areas, area];
      return { ...prev, automation_areas: areas };
    });
    if (errors.automation_areas) {
      setErrors((prev) => ({ ...prev, automation_areas: undefined }));
    }
  }

  function validateCurrentStep(): boolean {
    const fields = stepFields[step];
    const stepData = Object.fromEntries(
      fields.map((f) => [f, data[f]]),
    ) as Partial<FormState>;

    // Faz um parse parcial usando o leadSchema completo, mas pegando so erros
    // dos campos atuais. Os campos "futuros" ainda nao foram preenchidos —
    // vamos preencher com valores temporariamente validos para o schema nao
    // reclamar deles agora (eles serao validados quando o usuario chegar la).
    const tempPayload = {
      ...data,
      ...stepData,
      // valores fallback para passar pelo schema nos campos futuros
      full_name: data.full_name || "TempoNomePlaceholder",
      email: data.email || "temp@example.com",
      whatsapp: data.whatsapp || "+5511999999999",
      company_name: data.company_name || "TempoCompany",
      industry: data.industry || "outro",
      employee_range: data.employee_range || "1",
      revenue_range: data.revenue_range || "prefer_not_say",
      automation_areas:
        data.automation_areas.length > 0 ? data.automation_areas : ["atendimento"],
      biggest_pain:
        data.biggest_pain || "placeholder placeholder placeholder",
      implementation_timeline: data.implementation_timeline || "exploring",
    };

    // Override os campos do step atual com os valores reais
    for (const f of fields) {
      (tempPayload as Record<string, unknown>)[f] = data[f];
    }

    const parsed = leadSchema.safeParse(tempPayload);
    if (parsed.success) return true;

    const newErrors: Partial<Record<keyof FormState, string>> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path[0] as keyof FormState;
      if (fields.includes(path) && !newErrors[path]) {
        newErrors[path] = issue.message;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function next() {
    if (!validateCurrentStep()) return;

    // Tracking PostHog (no-op se nao configurado)
    try {
      posthog.capture("lead_form_step_completed", {
        step: step + 1,
        total_steps: TOTAL_STEPS,
      });
    } catch {
      // ignora
    }

    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    setSubmitting(true);
    setSubmitError(null);

    // Captura origem (UTMs persistidas em sessionStorage + source_page atual)
    const origin = readOriginContext();

    const payload: LeadInput = {
      ...data,
      automation_areas: data.automation_areas as LeadInput["automation_areas"],
      industry: data.industry as LeadInput["industry"],
      employee_range: data.employee_range as LeadInput["employee_range"],
      revenue_range: data.revenue_range as LeadInput["revenue_range"],
      implementation_timeline:
        data.implementation_timeline as LeadInput["implementation_timeline"],
      source_page: origin.source_page,
      utm_source: origin.utm_source,
      utm_medium: origin.utm_medium,
      utm_campaign: origin.utm_campaign,
      utm_content: origin.utm_content,
      utm_term: origin.utm_term,
      referrer: origin.referrer,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error ?? `HTTP ${res.status}`);
      }

      const { id } = (await res.json()) as { id: string };

      try {
        posthog.capture("lead_form_submitted", {
          lead_id: id,
          industry: payload.industry,
          employee_range: payload.employee_range,
          implementation_timeline: payload.implementation_timeline,
          source_page: payload.source_page,
        });
        // Identifica para session tracking
        posthog.identify(id, {
          email: payload.email,
          name: payload.full_name,
          company: payload.company_name,
        });
      } catch {
        // ignora
      }

      router.push("/obrigado");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Erro ao enviar lead:", err);
      setSubmitError(
        "Não conseguimos enviar agora. Tenta de novo em alguns segundos? Se persistir, escreva para contato@procexai.tech.",
      );
      try {
        posthog.capture("lead_form_error", {
          error: err instanceof Error ? err.message : String(err),
        });
      } catch {
        // ignora
      }
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>
            Etapa {step + 1} de {TOTAL_STEPS}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-muted/40 rounded-full overflow-hidden">
          <motion.div
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
          />
        </div>
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
          data-private
        >
          {step === 0 && (
            <StepIdentification
              data={data}
              errors={errors}
              update={update}
            />
          )}
          {step === 1 && (
            <StepBusiness data={data} errors={errors} update={update} />
          )}
          {step === 2 && (
            <StepPain
              data={data}
              errors={errors}
              update={update}
              toggleArea={toggleAutomationArea}
            />
          )}
          {step === 3 && (
            <StepCommitment data={data} errors={errors} update={update} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Submit error */}
      {submitError && (
        <div className="mt-6 p-4 rounded-lg bg-destructive/10 border border-destructive/40 text-sm text-destructive">
          {submitError}
        </div>
      )}

      {/* Botões */}
      <div className="mt-10 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={back}
          disabled={step === 0 || submitting}
          className={cn(
            "px-6 py-3 rounded-lg font-medium text-sm border border-border transition-all",
            "hover:bg-card disabled:opacity-30 disabled:cursor-not-allowed",
            "flex items-center gap-2",
          )}
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        {step < TOTAL_STEPS - 1 ? (
          <button
            type="button"
            onClick={next}
            disabled={submitting}
            className={cn(
              "px-8 py-3 rounded-lg font-semibold",
              "bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100",
              "text-primary-foreground transition-all duration-500 hover:scale-[1.02]",
              "flex items-center gap-2",
            )}
          >
            Avançar <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className={cn(
              "px-8 py-3 rounded-lg font-semibold",
              "bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100",
              "text-primary-foreground transition-all duration-500 hover:scale-[1.02]",
              "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100",
              "flex items-center gap-2",
            )}
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
              </>
            ) : (
              <>
                Quero meu diagnóstico gratuito <Check className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}

// ---------- Sub-componentes de step ----------

type StepProps = {
  data: FormState;
  errors: Partial<Record<keyof FormState, string>>;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
};

function StepIdentification({ data, errors, update }: StepProps) {
  return (
    <>
      <header>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Vamos nos conhecer
        </h2>
        <p className="text-muted-foreground">
          Como podemos te encontrar para o diagnóstico.
        </p>
      </header>

      <Field label="Nome completo" error={errors.full_name} required>
        <input
          type="text"
          value={data.full_name}
          onChange={(e) => update("full_name", e.target.value)}
          autoComplete="name"
          className={inputClass(!!errors.full_name)}
          placeholder="Seu nome completo"
        />
      </Field>

      <Field label="E-mail" error={errors.email} required>
        <input
          type="email"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          autoComplete="email"
          className={inputClass(!!errors.email)}
          placeholder="voce@empresa.com"
        />
      </Field>

      <Field
        label="WhatsApp"
        error={errors.whatsapp}
        required
        hint="DDD + número (apenas dígitos)"
      >
        <input
          type="tel"
          value={data.whatsapp}
          onChange={(e) =>
            update("whatsapp", e.target.value.replace(/[^\d+]/g, ""))
          }
          autoComplete="tel"
          className={inputClass(!!errors.whatsapp)}
          placeholder="+5511999999999"
        />
      </Field>
    </>
  );
}

function StepBusiness({ data, errors, update }: StepProps) {
  return (
    <>
      <header>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Sobre seu negócio
        </h2>
        <p className="text-muted-foreground">
          Para entender o porte e o contexto da operação.
        </p>
      </header>

      <Field label="Nome da empresa" error={errors.company_name} required>
        <input
          type="text"
          value={data.company_name}
          onChange={(e) => update("company_name", e.target.value)}
          autoComplete="organization"
          className={inputClass(!!errors.company_name)}
          placeholder="Nome fantasia ou razão social"
        />
      </Field>

      <Field
        label="Site ou Instagram"
        error={errors.company_url}
        hint="Opcional, mas ajuda a entender o negócio"
      >
        <input
          type="text"
          value={data.company_url}
          onChange={(e) => update("company_url", e.target.value)}
          className={inputClass(!!errors.company_url)}
          placeholder="https://seusite.com ou @suaempresa"
        />
      </Field>

      <Field label="Setor / Nicho" error={errors.industry} required>
        <Select
          value={data.industry}
          onChange={(v) => update("industry", v)}
          options={industryOptions}
          placeholder="Selecione..."
          error={!!errors.industry}
        />
      </Field>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Funcionários" error={errors.employee_range} required>
          <Select
            value={data.employee_range}
            onChange={(v) => update("employee_range", v)}
            options={employeeRangeOptions}
            placeholder="Selecione..."
            error={!!errors.employee_range}
          />
        </Field>

        <Field label="Faturamento mensal" error={errors.revenue_range} required>
          <Select
            value={data.revenue_range}
            onChange={(v) => update("revenue_range", v)}
            options={revenueRangeOptions}
            placeholder="Selecione..."
            error={!!errors.revenue_range}
          />
        </Field>
      </div>
    </>
  );
}

function StepPain({
  data,
  errors,
  update,
  toggleArea,
}: StepProps & { toggleArea: (area: string) => void }) {
  return (
    <>
      <header>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Onde dói?
        </h2>
        <p className="text-muted-foreground">
          Quanto mais específico, melhor o diagnóstico.
        </p>
      </header>

      <Field
        label="Quais áreas você quer automatizar?"
        error={errors.automation_areas}
        required
        hint="Pode selecionar mais de uma"
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {automationAreaOptions.map((opt) => {
            const checked = data.automation_areas.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleArea(opt.value)}
                className={cn(
                  "px-4 py-3 rounded-lg border text-sm font-medium text-left transition-all",
                  checked
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border hover:border-muted-foreground/50 text-muted-foreground",
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "w-4 h-4 rounded border-2 flex items-center justify-center",
                      checked
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/50",
                    )}
                  >
                    {checked && (
                      <Check className="w-3 h-3 text-primary-foreground" />
                    )}
                  </span>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      </Field>

      <Field
        label="Descreva em 1-2 frases qual é seu maior gargalo hoje"
        error={errors.biggest_pain}
        required
      >
        <textarea
          value={data.biggest_pain}
          onChange={(e) => update("biggest_pain", e.target.value)}
          rows={4}
          className={cn(inputClass(!!errors.biggest_pain), "resize-none")}
          placeholder="Ex.: Perdemos vendas porque demoramos a responder no WhatsApp..."
        />
      </Field>
    </>
  );
}

function StepCommitment({ data, errors, update }: StepProps) {
  return (
    <>
      <header>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Quando você quer resolver isso?
        </h2>
        <p className="text-muted-foreground">
          Para priorizarmos seu atendimento.
        </p>
      </header>

      <Field label="Horizonte de implementação" error={errors.implementation_timeline} required>
        <div className="space-y-3">
          {implementationTimelineOptions.map((opt) => {
            const checked = data.implementation_timeline === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => update("implementation_timeline", opt.value)}
                className={cn(
                  "w-full px-4 py-4 rounded-lg border text-left transition-all",
                  checked
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-muted-foreground/50",
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "w-4 h-4 rounded-full border-2",
                      checked
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/50",
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium",
                      checked ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {opt.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </Field>

      <p className="text-xs text-muted-foreground pt-4">
        Ao enviar, você concorda com nossa{" "}
        <a href="/privacidade" className="underline hover:text-primary">
          Política de Privacidade
        </a>{" "}
        e{" "}
        <a href="/termos" className="underline hover:text-primary">
          Termos de Uso
        </a>
        .
      </p>
    </>
  );
}

// ---------- Primitivos UI ----------

function inputClass(hasError: boolean) {
  return cn(
    "w-full px-4 py-3 rounded-lg bg-card/50 border text-foreground placeholder:text-muted-foreground/60",
    "focus:outline-none focus:ring-2 transition-all",
    hasError
      ? "border-destructive focus:ring-destructive/40"
      : "border-border focus:border-primary focus:ring-primary/40",
  );
}

function Field({
  label,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  error?: string | string[];
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  const errorText = Array.isArray(error) ? error[0] : error;
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {children}
      {hint && !errorText && (
        <p className="text-xs text-muted-foreground mt-1.5">{hint}</p>
      )}
      {errorText && (
        <p className="text-xs text-destructive mt-1.5">{errorText}</p>
      )}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  options: ReadonlyArray<{ value: string; label: string }>;
  placeholder: string;
  error?: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(inputClass(!!error), "appearance-none cursor-pointer")}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
