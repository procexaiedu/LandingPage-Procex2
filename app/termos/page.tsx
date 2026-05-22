import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { LegalFooter } from "@/components/legal-footer";

export const metadata: Metadata = {
  title: "Termos de Uso | ProceX AI",
  description:
    "Termos e condições de uso do site e dos serviços oferecidos pela ProceX AI.",
};

export default function TermosPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <article className="container px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-12">
          <p className="text-sm text-muted-foreground mb-2">Última atualização: 22 de maio de 2026</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Termos de <span className="text-gradient-amber">Uso</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Ao acessar e utilizar este site, você concorda com os termos abaixo. Se não concordar
            com qualquer parte, recomendamos que não continue navegando.
          </p>
        </header>

        <div className="space-y-10 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold mb-3">1. Quem somos</h2>
            <p>
              Este site é operado pela <strong>ProceX AI</strong>, inscrita sob a denominação
              <strong> Lucas Vinicius Farjallat — MEI — CNPJ 60.330.684/0001-11</strong>, com sede
              na Avenida Rotary, 25, Vila Brandina, Campinas/SP, CEP 13.092-509.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">2. Objeto</h2>
            <p>
              Este site tem como objeto apresentar a ProceX AI e seus serviços de implementação
              de agentes de Inteligência Artificial para pequenas e médias empresas, bem como
              receber solicitações de contato comercial por meio dos formulários disponíveis.
            </p>
            <p className="mt-2">
              A contratação efetiva de qualquer serviço se dá por meio de proposta comercial
              específica, formalizada entre as partes em documento próprio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">3. Aceite</h2>
            <p>
              Ao acessar, navegar ou enviar informações neste site, você confirma que leu,
              compreendeu e aceita estes Termos de Uso e a nossa{" "}
              <a href="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">4. Cadastro e formulários</h2>
            <p>Ao preencher formulários, você se compromete a:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Informar dados verdadeiros, atuais e completos</li>
              <li>Ser maior de 18 anos ou estar devidamente autorizado a representar a
                empresa que está cadastrando</li>
              <li>Não utilizar identidade de terceiros sem permissão</li>
            </ul>
            <p className="mt-3">
              A ProceX pode recusar ou descartar cadastros que aparentem ser falsos, automatizados
              ou em desacordo com estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">5. Conduta esperada</h2>
            <p>Ao utilizar este site, você concorda em NÃO:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Praticar atos ilícitos, lesivos ou em desacordo com a moral e a ordem pública</li>
              <li>Interferir no funcionamento normal do site (scrapers maliciosos, ataques DDoS,
                injeções, etc.)</li>
              <li>Tentar acessar áreas restritas ou dados de terceiros</li>
              <li>Utilizar conteúdo do site para fins comerciais sem autorização</li>
              <li>Enviar mensagens não solicitadas (spam) por meio dos canais de contato</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">6. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste site — incluindo textos, logos, marca, identidade visual,
              ilustrações, animações e código-fonte — é de titularidade da ProceX AI ou de seus
              licenciadores e está protegido pela legislação brasileira de propriedade intelectual.
            </p>
            <p className="mt-2">
              É vedada a reprodução, distribuição, modificação ou utilização do conteúdo, no todo
              ou em parte, para fins comerciais, sem autorização prévia e expressa da ProceX.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">7. Limitação de responsabilidade</h2>
            <p>
              O conteúdo deste site é meramente informativo. A ProceX se esforça para manter as
              informações atualizadas e precisas, mas não garante a ausência de erros ou
              imprecisões.
            </p>
            <p className="mt-2">
              A ProceX não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Indisponibilidades temporárias por motivos técnicos ou de força maior</li>
              <li>Conteúdo de sites de terceiros eventualmente referenciados</li>
              <li>Danos indiretos, lucros cessantes ou perdas decorrentes da impossibilidade de
                uso do site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">8. Modificações</h2>
            <p>
              A ProceX pode atualizar estes Termos a qualquer momento, sem aviso prévio
              individual. A versão vigente é sempre a publicada nesta página. Recomendamos
              consulta periódica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">9. Lei aplicável e foro</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito
              o foro da Comarca de <strong>Campinas/SP</strong> para dirimir quaisquer controvérsias
              decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que
              seja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">10. Contato</h2>
            <p>
              Dúvidas sobre estes Termos podem ser encaminhadas para{" "}
              <a href="mailto:contato@procexai.tech" className="text-primary hover:underline">
                contato@procexai.tech
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      <LegalFooter />
    </main>
  );
}
