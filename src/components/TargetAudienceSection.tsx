import { Card, CardContent } from "@/components/ui/card";
import { Baby, Users, ThumbsUp } from "lucide-react";

const audience = [
  {
    icon: Baby,
    title: "Gestantes",
    description: "Que querem segurança e preparo para a amamentação",
  },
  {
    icon: Users,
    title: "Mães Amamentando",
    description: "Que precisam corrigir pega e eliminar dores",
  },
  {
    icon: ThumbsUp,
    title: "Baixa Produção",
    description: "Mulheres com baixa produção ou fissuras",
  },
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Para quem é o <span className="text-primary">Método Colo & Calor</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-primary text-primary-foreground shadow-elevated max-w-3xl mx-auto">
          <CardContent className="p-8 text-center">
            <p className="text-xl md:text-2xl font-bold">
              Viva uma experiência positiva desde a primeira mamada.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
