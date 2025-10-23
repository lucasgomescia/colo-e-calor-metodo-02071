import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Quote } from "lucide-react";

export const SuccessStorySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elevated bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 mx-auto text-secondary mb-4 fill-secondary" />
                <Badge variant="success" className="mb-4">História Real</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  A Daiane transformou a amamentação dela com o Método Colo & Calor!
                </h2>
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-2 w-12 h-12 text-primary/20" />
                <blockquote className="text-lg md:text-xl text-center italic text-foreground pl-8 pr-8">
                  "Eu estava quase desistindo por causa das dores e fissuras. Depois do método, 
                  consegui amamentar meu bebê sem sofrimento. Foi a melhor decisão que tomei! 
                  Hoje amamento com prazer e meu filho está se desenvolvendo lindamente."
                </blockquote>
                <Quote className="absolute -bottom-4 -right-2 w-12 h-12 text-primary/20 rotate-180" />
              </div>

              <div className="text-center mt-8">
                <p className="font-bold text-lg text-primary">— Daiane M.</p>
                <p className="text-muted-foreground">Mãe de primeira viagem</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
