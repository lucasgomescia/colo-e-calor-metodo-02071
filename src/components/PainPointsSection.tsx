import { Card, CardContent } from "@/components/ui/card";
import { Frown, Baby, AlertCircle } from "lucide-react";
import baixaProducaoImg from "@/assets/baixa-producao.jpg";
import bebeMamandoHorasImg from "@/assets/bebe-mamando-horas.jpg";
import dorMamadaImg from "@/assets/dor-mamada.jpg";

const painPoints = [
  {
    icon: Frown,
    text: "Problemas com baixa produção?",
    image: baixaProducaoImg,
  },
  {
    icon: Baby,
    text: "Bebê fica horas no peito mamando?",
    image: bebeMamandoHorasImg,
  },
  {
    icon: AlertCircle,
    text: "Dor e medo da próxima mamada?",
    image: dorMamadaImg,
  },
];

export const PainPointsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            Você se identifica?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card key={index} className="shadow-card text-center overflow-hidden">
                  <CardContent className="p-0 space-y-4">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={point.image} 
                        alt={point.text}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="px-6 pb-6 space-y-3">
                      <Icon className="w-12 h-12 mx-auto text-secondary" />
                      <p className="font-medium">{point.text}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-primary text-primary-foreground shadow-elevated">
            <CardContent className="p-8 text-center space-y-4">
              <p className="text-xl md:text-2xl leading-relaxed">
                Existe um caminho para viver esse momento com{" "}
                <strong>prazer e confiança</strong>.
              </p>
              <p className="text-lg">A preparação certa muda tudo.</p>
              <div className="pt-4 border-t border-primary-foreground/20">
                <p className="text-lg font-semibold">
                  A culpa não é sua. Falta orientação certa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
