import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Mic, Instagram } from "lucide-react";
import camilaImage from "@/assets/camila-toniatti.jpg";
const credentials = [{
  icon: GraduationCap,
  text: "Consultora de amamentação desde 2020"
}, {
  icon: Mic,
  text: "Idealizadora do evento Bem Gestar"
}, {
  icon: BookOpen,
  text: "Coautora do livro CONHE'SER VOCÊ"
}];
export const AboutSection = () => {
  return <section className="py-20">
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

                  <div className="space-y-4 text-lg leading-relaxed text-justify">
                    <p className="indent-8">
                      Sou mãe de duas linda meninas e passei por dificuldades e desafios diferentes com cada uma delas. Foi esta experiência que me fez entender que muitas mães passavam pelos mesmos desafios que passei e que como consultora eu poderia facilitar muito o processo e tornar a amamentação prazerosa e tranquila, como ela deve ser. Me formei consultora de amamentação em 2020 e desde então venho fazendo atendimentos domiciliares e atendimentos on-line para localidades onde não posso atender presencialmente. Foi desta realidade que desenvolvi os 8 passos para uma amamentação de sucesso e vejo meu sonho de ajudar o máximo de mães possível se tornando uma realidade neste curso.
                    </p>
                    <p className="indent-8">
                      Sou idealizadora do evento <strong>Bem Gestar</strong>, um evento preparatório para gestantes que acontece em Mogi das Cruzes. Conheça esta iniciativa no meu instagram @bemgestaroficial, que é um grande sucesso na cidade e já se encontra na 7 edição.
                    </p>
                    <p className="indent-8">
                      Por fim, também sou coautora do livro <strong>CONHE'SER VOCÊ</strong>, onde conto minhas experiência na amamentação como mãe e como consegui propesperar a duras penas e como a consultoria poderia ter feito a difererença na minha vida!
                    </p>
                  </div>

                  <div className="space-y-3">
                    {credentials.map((credential, index) => {
                    const Icon = credential.icon;
                    return <div key={index} className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="font-medium">{credential.text}</p>
                        </div>;
                  })}
                  </div>

                  
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-elevated">
                      <img src={camilaImage} alt="Camila Toniatti - Consultora de Amamentação" className="w-full h-auto object-cover" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};