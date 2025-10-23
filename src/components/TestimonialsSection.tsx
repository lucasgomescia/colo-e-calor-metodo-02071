import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Milena Santana",
    text: "Camila é uma profissional excelente! Me ajudou muitíssimo no início da amamentação, onde muita dor se tornou em alegria na hora de amamentar. Com as melhores estratégias ensinadas por ela, hoje amamento com zero dor.",
    stars: 5,
  },
  {
    name: "Fernanda Caxito",
    text: "O trabalho dela é excepcional, ela é paciente e ajuda a desmistificar tudo que aprendemos ao longo da vida que amamentar tem que doer, quando não tem e que apesar de ser por instinto, tem a forma correta. Depois que conheci ela amamentar realmente se tornou algo prazeroso tanto para mim como para minha bebê.",
    stars: 5,
  },
  {
    name: "Yanca Oliveira",
    text: "Simplesmente ela salvou minha vida. Estava tendo bastante dificuldades com a amamentação, muita dor pela pega errada e fissuras no meu peito. Se não fosse por ela, não teria conseguido. Agradeço muito ao trabalho excepcional que ela fez, ao carinho e dedicação, uma profissional excelente.",
    stars: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <MessageCircle className="w-12 h-12 mx-auto text-primary" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Veja o que as mamães estão falando
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de quem venceu a dor e conquistou uma amamentação tranquila.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="xl" variant="cta" className="h-auto py-4">
            <span className="text-center leading-tight">
              Sim! Eu quero o método Colo & Calor
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
