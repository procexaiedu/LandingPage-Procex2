"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { captureOriginIfPresent } from "@/lib/utm";

/**
 * Cliente unico para inicializar PostHog (se configurado) e capturar
 * UTMs/source no carregamento da pagina.
 *
 * PostHog soh inicializa se NEXT_PUBLIC_POSTHOG_KEY estiver definido.
 * Assim o app funciona sem o servico em dev/staging.
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    captureOriginIfPresent();

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    if ((posthog as unknown as { __loaded?: boolean }).__loaded) return;

    posthog.init(key, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      capture_pageview: true,
      capture_pageleave: true,
      person_profiles: "identified_only",
      // Privacidade: mascarar inputs sensiveis em session replay
      session_recording: {
        maskAllInputs: true,
        maskTextSelector: "[data-private]",
      },
    });
  }, []);

  return <>{children}</>;
}
