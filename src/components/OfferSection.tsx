import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Video, Heart, Lightbulb } from "lucide-react";
const features = [{
  icon: Target,
  title: "Plano claro e objetivo",
  description: "Método estruturado e emocionalmente seguro"
}, {
  icon: Video,
  title: "Aulas gravadas",
  description: "Conteúdo direto ao ponto, sem enrolação"
}, {
  icon: Heart,
  title: "Suporte completo",
  description: "Técnicas aplicáveis antes e depois do nascimento"
}, {
  icon: Lightbulb,
  title: "Aulas bônus",
  description: "Conteúdo exclusivo para turbinar seus resultados"
}];
export const OfferSection = () => {
  return <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            No Método <span className="text-secondary">Colo & Calor</span> você vai ter:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>;
        })}
        </div>

        <Card className="mt-12 bg-secondary/5 border-secondary/20 shadow-elevated">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-2xl md:text-3xl font-bold">
              Tenha uma experiência positiva desde a <span className="text-secondary">primeira mamada</span>
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-base px-4 py-2">
                Para Gestantes
              </Badge>
              <span className="text-muted-foreground">e</span>
              <Badge variant="secondary" className="text-base px-4 py-2">
                Para Lactantes
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};