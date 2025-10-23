import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Home, Clock, MessageSquare, Baby, Lock, Hand, Moon, Video } from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Teoria", description: "Base científica da amamentação" },
  { icon: Home, title: "Ambiente", description: "Preparação do espaço ideal" },
  { icon: Clock, title: "Golden Hour", description: "A primeira hora de ouro" },
  { icon: MessageSquare, title: "Mitos", description: "Derrubando falsas crenças" },
  { icon: Baby, title: "Pega", description: "Técnica correta de amamentação" },
  { icon: Lock, title: "Acoplagem", description: "Conexão perfeita mãe-bebê" },
  { icon: Hand, title: "Desacoplar", description: "Como retirar o bebê do peito" },
  { icon: Moon, title: "Pós-mamada", description: "Cuidados após amamentar" },
];

const bonusVideos = [
  "Técnicas para aumentar sua produção",
  "Como tratar fissuras mamárias em casa",
];

export const MethodSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            O que você vai encontrar dentro do{" "}
            <span className="text-primary">Método Colo & Calor</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">
                        Módulo {index + 1}
                      </Badge>
                      <h3 className="font-bold">{module.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-accent shadow-elevated max-w-3xl mx-auto">
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-accent-foreground">
                Vídeo aulas especiais:
              </h3>
            </div>
            <ul className="space-y-3">
              {bonusVideos.map((video, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-lg text-accent-foreground">{video}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
