import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { callRpc, SupabaseError } from "@/lib/supabase";

// Forca runtime Node (nao Edge) para suporte completo a fetch/network.
export const runtime = "nodejs";
// Sem cache, sem ISR.
export const dynamic = "force-dynamic";

/**
 * POST /api/leads
 * Recebe payload do formulario de diagnostico gratuito, valida com zod,
 * enriquece com IP + user-agent e insere em crm.leads via RPC.
 */
export async function POST(request: NextRequest) {
  // 1. Parse JSON do body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_json" },
      { status: 400 },
    );
  }

  // 2. Valida com zod
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "invalid_input",
        issues: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 422 },
    );
  }

  // 3. Enriquece com IP + user agent (capturados server-side)
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "";
  const userAgent = request.headers.get("user-agent") ?? "";

  const payload = {
    ...parsed.data,
    ip_address: ip,
    user_agent: userAgent,
  };

  // 4. Insere via RPC public.crm_insert_lead(jsonb)
  try {
    const leadId = await callRpc<string>("crm_insert_lead", { p: payload });

    return NextResponse.json(
      { id: leadId, success: true },
      { status: 201 },
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("POST /api/leads falhou:", err);

    if (err instanceof SupabaseError) {
      return NextResponse.json(
        { error: "database_error", detail: err.body },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: "internal_error" },
      { status: 500 },
    );
  }
}
