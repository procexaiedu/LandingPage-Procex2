/**
 * Captura de UTMs com persistencia entre navegacao.
 *
 * Estrategia:
 *  - Se a URL atual tem qualquer utm_*, captura todas e salva em
 *    sessionStorage (sobrevive recarregamentos e navegacao entre paginas
 *    durante a mesma sessao; nao polui o tracking de retornos).
 *  - Quando o formulario monta, le do sessionStorage como source da
 *    verdade. Se nao houver nada la, tenta de novo a URL.
 *
 * Tambem captura `source_page` (qual CTA disparou o link, via ?source=)
 * e `referrer` (document.referrer no momento da primeira chegada).
 */

export interface OriginContext {
  source_page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
}

const STORAGE_KEY = "procex_origin_v1";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

function parseFromUrl(): OriginContext | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);

  const utm: Record<string, string> = {};
  let hasUtm = false;
  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v) {
      utm[k] = v;
      hasUtm = true;
    }
  }

  const source = params.get("source") ?? "";
  const referrer = document.referrer || "";

  if (!hasUtm && !source && !referrer) return null;

  return {
    ...utm,
    ...(source ? { source_page: source } : {}),
    ...(referrer ? { referrer } : {}),
  };
}

/**
 * Chamar uma vez no carregamento do app (Provider/layout client) para
 * persistir UTMs que vieram no link de entrada.
 */
export function captureOriginIfPresent(): void {
  if (typeof window === "undefined") return;
  const incoming = parseFromUrl();
  if (!incoming) return;
  try {
    const existing = window.sessionStorage.getItem(STORAGE_KEY);
    // Nao sobrescreve dados ja persistidos se o usuario chegou via campanha
    // e depois navegou para uma pagina sem UTMs (ex.: /diagnostico-gratuito).
    if (existing) return;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(incoming));
  } catch {
    // sessionStorage indisponivel (modo privado, etc.) — ignorar
  }
}

/**
 * Le contexto de origem persistido + override com URL atual (ex.: o link
 * pro /diagnostico-gratuito traz ?source=hero_button — quero preservar
 * a UTM original mas usar source_page mais recente).
 */
export function readOriginContext(): OriginContext {
  if (typeof window === "undefined") return {};

  let stored: OriginContext = {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (raw) stored = JSON.parse(raw) as OriginContext;
  } catch {
    // ignora
  }

  // Source page mais recente (do link clicado) sobrescreve, se houver
  const params = new URLSearchParams(window.location.search);
  const sourceNow = params.get("source");
  if (sourceNow) {
    stored.source_page = sourceNow;
  }

  return stored;
}
