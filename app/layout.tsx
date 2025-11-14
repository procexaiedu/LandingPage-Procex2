import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ProceX AI | Agentes de IA para sua Empresa",
  description: "IA trabalhando com você para você ser mais. Agentes que assumem tarefas repetitivas na sua rotina — de vendas ao financeiro — sem precisar virar especialista em tecnologia.",
  keywords: ["IA", "Inteligência Artificial", "Automação", "Agentes de IA", "ProceX", "Vendas", "Financeiro", "Operações"],
  authors: [{ name: "ProceX" }],
  openGraph: {
    title: "ProceX AI | Agentes de IA para sua Empresa",
    description: "IA trabalhando com você para você ser mais. Pare de só ouvir falar sobre IA.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${syne.variable} ${instrumentSans.variable} antialiased grain`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
