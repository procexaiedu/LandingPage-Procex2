/**
 * Cliente minimalista para o PostgREST do Supabase self-hosted
 * (https://db.procexai.tech). So expoe `callRpc` para chamar funcoes
 * armazenadas — usamos `public.crm_insert_lead(jsonb)` para inserir
 * em `crm.leads` sem precisar incluir o schema `crm` em PGRST_DB_SCHEMAS.
 *
 * Usa SUPABASE_SERVICE_ROLE_KEY (apenas server-side; nunca expor no client).
 */

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export class SupabaseError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body: string,
  ) {
    super(message);
    this.name = "SupabaseError";
  }
}

export async function callRpc<T>(
  rpcName: string,
  args: Record<string, unknown>,
): Promise<T> {
  if (!SUPABASE_URL) {
    throw new Error("SUPABASE_URL nao definido");
  }
  if (!SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY nao definido");
  }

  const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/rpc/${rpcName}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    },
    body: JSON.stringify(args),
    // Evita cache em rotas do Next
    cache: "no-store",
  });

  const text = await res.text();
  if (!res.ok) {
    throw new SupabaseError(
      `Supabase RPC ${rpcName} falhou: ${res.status}`,
      res.status,
      text,
    );
  }

  // PostgREST RPCs retornam o valor escalar dentro de aspas (ex: "uuid").
  // Quando a funcao retorna jsonb/record, pode vir como JSON objeto.
  try {
    return JSON.parse(text) as T;
  } catch {
    return text as unknown as T;
  }
}
