import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, Flame, Tag } from "lucide-react";

const included = [
  "8 Módulos completos do Método",
  "Aulas gravadas e direto ao ponto",
  "4 Bônus exclusivos",
  "Acesso vitalício ao conteúdo",
  "Suporte via comunidade",
  "Atualizações gratuitas",
];

export const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Flame className="w-16 h-16 mx-auto text-secondary mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Veja tudo que você vai levar:
            </h2>
          </div>

          <Card className="shadow-elevated mb-8">
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Valor total do conteúdo:</span>
                  <span className="text-xl line-through text-muted-foreground">R$ 957,00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elevated bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary">
            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="text-center space-y-4">
                <Badge variant="secondary" className="text-base px-6 py-2">
                  <Tag className="w-4 h-4 mr-2" />
                  OFERTA ESPECIAL
                </Badge>
                
                <div>
                  <p className="text-muted-foreground mb-2">De R$ 957,00 por apenas:</p>
                  <div className="space-y-2">
                    <p className="text-4xl md:text-5xl font-bold text-secondary">
                      12x de R$ 49,70
                    </p>
                    <p className="text-2xl font-semibold">
                      ou R$ 497,00 à vista
                    </p>
                  </div>
                </div>

                <Button size="xl" variant="cta" className="w-full max-w-md h-auto py-4 px-6">
                  <DollarSign className="mr-2 shrink-0" />
                  <span>SIM, EU QUERO AMAMENTAR SEM DOR E SEM COMPLEMENTO!</span>
                </Button>

                <Badge variant="success" className="text-sm">
                  ✓ Acesso Imediato após a compra
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
