import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Mic, Instagram } from "lucide-react";
import camilaImage from "@/assets/camila-toniatti.jpg";

const credentials = [
  {
    icon: GraduationCap,
    text: "Consultora de amamentação desde 2020",
  },
  {
    icon: Mic,
    text: "Idealizadora do evento Bem Gestar",
  },
  {
    icon: BookOpen,
    text: "Coautora do livro CONHE'SER VOCÊ",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Conheça sua consultora
            </h2>
          </div>

          <Card className="shadow-elevated">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      Camila Toniatti
                    </h3>
                    <Badge variant="default" className="mb-4">
                      Consultora de Amamentação
                    </Badge>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Mãe de duas meninas e apaixonada por ajudar outras mães a viverem 
                    uma experiência positiva com a amamentação.
                  </p>

                  <div className="space-y-3">
                    {credentials.map((credential, index) => {
                      const Icon = credential.icon;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="font-medium">{credential.text}</p>
                        </div>
                      );
                    })}
                  </div>

                  <Button variant="default" size="lg" className="w-full md:w-auto">
                    <Instagram className="mr-2" />
                    Siga no Instagram @bemgestaroficial
                  </Button>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-elevated">
                      <img
                        src={camilaImage}
                        alt="Camila Toniatti - Consultora de Amamentação"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-elevated">
                      <p className="font-bold text-2xl">+600</p>
                      <p className="text-sm">Mães ajudadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
