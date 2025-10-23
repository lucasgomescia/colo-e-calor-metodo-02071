import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Apple, ClipboardList, Scale, Droplet } from "lucide-react";

const bonuses = [
  {
    icon: Apple,
    title: "Mini vídeo",
    description: "Como facilitar a introdução alimentar",
  },
  {
    icon: Droplet,
    title: "Check list",
    description: "7 alimentos que turbinarão seu leite",
  },
  {
    icon: Scale,
    title: "Vídeo aula",
    description: "Causas da perda de peso do bebê",
  },
  {
    icon: ClipboardList,
    title: "Check list",
    description: "Mamada sem dor",
  },
];

export const BonusSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Gift className="w-16 h-16 mx-auto text-secondary" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Bônus Exclusivos</h2>
          <p className="text-xl text-muted-foreground">
            Conteúdos extras para potencializar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 rounded-bl-lg text-xs font-bold">
                  BÔNUS {index + 1}
                </div>
                <CardContent className="p-6 space-y-4 pt-10">
                  <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-primary font-semibold mb-1">{bonus.title}</p>
                    <p className="font-bold">{bonus.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="xl" variant="cta">
            Quero todos os bônus!
          </Button>
        </div>
      </div>
    </section>
  );
};
