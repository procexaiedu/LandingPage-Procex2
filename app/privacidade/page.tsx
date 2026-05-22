import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { LegalFooter } from "@/components/legal-footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | ProceX AI",
  description:
    "Como a ProceX AI coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <article className="container px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-12">
          <p className="text-sm text-muted-foreground mb-2">Última atualização: 22 de maio de 2026</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Política de <span className="text-gradient-amber">Privacidade</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Esta política descreve como a ProceX AI coleta, usa, compartilha e protege seus dados
            pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 —
            LGPD).
          </p>
        </header>

        <div className="space-y-10 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold mb-3">1. Quem somos</h2>
            <p>
              A <strong>ProceX AI</strong> é um hub de implementação de Inteligência Artificial
              para pequenas e médias empresas brasileiras. Operamos sob a inscrição
              <strong> Lucas Vinicius Farjallat — MEI — CNPJ 60.330.684/0001-11</strong>, com sede
              na Avenida Rotary, 25, Vila Brandina, Campinas/SP, CEP 13.092-509.
            </p>
            <p className="mt-2">
              Para fins desta política, somos o <strong>Controlador</strong> dos dados pessoais
              que coletamos por meio deste site e dos serviços associados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">2. Quais dados coletamos</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">2.1. Dados que você nos fornece</h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Nome completo</li>
              <li>E-mail</li>
              <li>Número de WhatsApp</li>
              <li>Nome da empresa, site/Instagram, setor de atuação</li>
              <li>Faixa de funcionários e de faturamento</li>
              <li>Descrição das suas dores e áreas que deseja automatizar</li>
              <li>Outras informações que você nos enviar voluntariamente por formulário,
                e-mail ou WhatsApp</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">2.2. Dados coletados automaticamente</h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Endereço IP e dados aproximados de localização</li>
              <li>Tipo de navegador, sistema operacional e dispositivo</li>
              <li>Páginas visitadas, tempo de permanência e fluxo de navegação</li>
              <li>Origem do tráfego (UTM, referrer)</li>
              <li>Cookies e identificadores de sessão (ver Seção 8)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">3. Para que usamos os dados</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Contato comercial:</strong> retornar sua solicitação de diagnóstico e
                avaliar fit do nosso serviço com sua empresa.</li>
              <li><strong>Qualificação e atendimento:</strong> personalizar a proposta com base
                no porte e nas dores do seu negócio.</li>
              <li><strong>Melhoria contínua:</strong> entender quais conteúdos e seções geram
                mais interesse, otimizar a experiência do site e nossas soluções.</li>
              <li><strong>Comunicações operacionais:</strong> envio de mensagens relacionadas
                ao serviço solicitado.</li>
              <li><strong>Obrigações legais:</strong> cumprir determinações legais, regulatórias
                ou judiciais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">4. Bases legais</h2>
            <p>O tratamento dos seus dados se apoia nas seguintes bases legais (LGPD, art. 7º):</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li><strong>Consentimento</strong>, ao preencher voluntariamente nossos formulários
                de contato.</li>
              <li><strong>Execução de procedimentos preliminares relacionados a contrato</strong>,
                quando você nos solicita avaliação ou proposta comercial.</li>
              <li><strong>Legítimo interesse</strong> da ProceX, para entender e melhorar a
                jornada do usuário no site (analytics agregados).</li>
              <li><strong>Cumprimento de obrigação legal</strong>, quando aplicável.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">5. Com quem compartilhamos</h2>
            <p>
              Não vendemos seus dados. Nossos bancos de dados rodam em infraestrutura própria
              auto-hospedada da ProceX — seus dados pessoais não saem do nosso controle direto.
              Compartilhamos apenas com os operadores abaixo, estritamente necessários para a
              operação do serviço:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>
                <strong>Vercel Inc.</strong> (EUA) — hospedagem do site e execução das funções
                serverless que processam requisições. Dados podem trafegar fora do Brasil.
                Política:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </li>
              <li>
                <strong>PostHog Inc.</strong> (EUA/UE) — analytics de eventos e gravação de
                sessões em ambiente privacy-friendly, com mascaramento de dados sensíveis em
                inputs. Política:{" "}
                <a
                  href="https://posthog.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  posthog.com/privacy
                </a>
              </li>
              <li>
                <strong>Meta Platforms Inc.</strong> (WhatsApp Business) e <strong>yCloud</strong>{" "}
                (BSP) — apenas quando você opta por receber contato via WhatsApp. Política
                Meta:{" "}
                <a
                  href="https://www.facebook.com/privacy/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  facebook.com/privacy/policy
                </a>
              </li>
              <li>
                <strong>Autoridades públicas</strong>, mediante ordem judicial ou exigência
                legal.
              </li>
            </ul>
            <p className="mt-3">
              Todos os parceiros possuem políticas próprias de privacidade e estão sujeitos
              às respectivas legislações de proteção de dados aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">6. Por quanto tempo guardamos</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para as finalidades descritas nesta
              política e enquanto houver obrigação legal de retenção. Após este período, os
              dados são eliminados ou anonimizados, salvo se você solicitar exclusão antes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">7. Seus direitos (LGPD, art. 18)</h2>
            <p>Você pode, a qualquer momento, solicitar:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos seus dados</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
              <li>Portabilidade dos dados</li>
              <li>Eliminação dos dados tratados com base em consentimento</li>
              <li>Informação sobre com quem compartilhamos seus dados</li>
              <li>Revogação do consentimento</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer destes direitos, envie um e-mail para{" "}
              <a href="mailto:contato@procexai.tech" className="text-primary hover:underline">
                contato@procexai.tech
              </a>
              . Responderemos em até 15 dias úteis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">8. Cookies e tecnologias similares</h2>
            <p>
              Usamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li><strong>Essenciais:</strong> funcionamento básico do site (sessão, preferências).</li>
              <li><strong>Analíticos:</strong> contagem agregada de visitas e fluxo de navegação.</li>
              <li><strong>De performance:</strong> identificação de pontos de fricção via session
                replay anonimizado.</li>
            </ul>
            <p className="mt-3">
              Você pode desabilitar cookies no seu navegador, mas algumas funcionalidades podem
              ser impactadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">9. Segurança</h2>
            <p>
              Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados de
              acessos não autorizados, perda, alteração ou divulgação indevida. Apesar de nossos
              esforços, nenhum sistema é 100% seguro — caso identifiquemos qualquer incidente
              relevante, você será informado conforme exigido pela LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">10. Crianças e adolescentes</h2>
            <p>
              Nossos serviços são destinados a empresas e profissionais maiores de 18 anos. Não
              coletamos intencionalmente dados de crianças e adolescentes. Caso tenhamos
              recebido tais dados por engano, eles serão eliminados ao serem identificados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">11. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A data da última atualização
              está no topo do documento. Mudanças relevantes serão comunicadas no site ou por
              e-mail, quando possível.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">12. Encarregado e contato</h2>
            <p>
              <strong>Encarregado pelo Tratamento de Dados (DPO):</strong> Lucas Vinicius Farjallat<br />
              <strong>E-mail:</strong>{" "}
              <a href="mailto:contato@procexai.tech" className="text-primary hover:underline">
                contato@procexai.tech
              </a>
              <br />
              <strong>Endereço:</strong> Av. Rotary, 25 — Vila Brandina — Campinas/SP —
              CEP 13.092-509
            </p>
          </section>
        </div>
      </article>

      <LegalFooter />
    </main>
  );
}
