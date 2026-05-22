/**
 * Footer minimalista usado nas paginas legais (/privacidade, /termos).
 * Diferente do <FinalCTA /> que vai no fim da home e das paginas de
 * solucao, aqui nao queremos CTA grande nem efeitos animados —
 * essas paginas sao de leitura.
 */
export function LegalFooter() {
  return (
    <footer className="border-t border-border mt-16 pt-12 pb-8">
      <div className="container px-4 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
          {/* Marca */}
          <div>
            <h3 className="text-xl font-display font-bold mb-2 text-gradient-amber">
              ProceX
            </h3>
            <p className="text-muted-foreground">
              IA acessível para o dia a dia da sua empresa
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="/termos" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="/" className="hover:text-primary transition-colors">Voltar para o site</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:contato@procexai.tech" className="hover:text-primary transition-colors">
                  contato@procexai.tech
                </a>
              </li>
              <li className="pt-3 leading-relaxed">
                Av. Rotary, 25<br />
                Vila Brandina<br />
                Campinas/SP — 13.092-509
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center text-xs text-muted-foreground space-y-1">
          <p>ProceX AI — Lucas Vinicius Farjallat — CNPJ 60.330.684/0001-11</p>
          <p>© {new Date().getFullYear()} ProceX. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
