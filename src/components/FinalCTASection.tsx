import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Trophy, DollarSign } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elevated border-2 border-secondary">
            <CardContent className="p-8 md:p-12 text-center space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Heart className="w-12 h-12 text-secondary fill-secondary" />
                  <Trophy className="w-12 h-12 text-primary" />
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Chegou sua hora de amamentar{" "}
                  <span className="text-primary">sem dor</span> e com{" "}
                  <span className="text-primary">confiança</span>!
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Junte-se a mais de 600 mães que transformaram a experiência da amamentação
                </p>
              </div>

              <div className="bg-muted p-6 rounded-xl">
                <p className="text-sm text-muted-foreground mb-2">
                  Investimento que transforma vidas:
                </p>
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                  12x de R$ 49,70
                </p>
                <p className="text-xl font-semibold mb-4">
                  ou R$ 497,00 à vista
                </p>
                <p className="text-sm text-primary font-semibold">
                  ✓ Acesso imediato • ✓ Garantia de 7 dias • ✓ Suporte completo
                </p>
              </div>

              <Button size="xl" variant="cta" className="w-full max-w-md text-lg h-auto py-4">
                <DollarSign className="mr-2 shrink-0" />
                <span>QUERO COMEÇAR AGORA!</span>
              </Button>

              <p className="text-sm text-muted-foreground">
                🔒 Compra 100% segura e protegida
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
