import { Instagram, Youtube, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-colo-calor.png";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Sobre */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Método Colo & Calor - 8 passos para uma amamentação de sucesso" 
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando a experiência da amamentação com conhecimento, suporte e carinho.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navegação
            </h4>
            <nav className="flex flex-col space-y-2">
              <a href="#oferta" className="text-sm hover:text-secondary transition-colors">
                Sobre o Método
              </a>
              <a href="#preco" className="text-sm hover:text-secondary transition-colors">
                Investimento
              </a>
              <a href="#depoimentos" className="text-sm hover:text-secondary transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="text-sm hover:text-secondary transition-colors">
                Perguntas Frequentes
              </a>
            </nav>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Conecte-se
            </h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary hover:text-background flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary hover:text-background flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary hover:text-background flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary hover:text-background flex items-center justify-center transition-all"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Método Colo & Calor. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};