import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quando posso começar o curso?",
    answer:
      "Imediatamente. Mesmo durante a gestação, você já pode iniciar hoje mesmo.",
  },
  {
    question: "E se meu bebê já tiver nascido, ainda vale a pena fazer?",
    answer:
      "Sim! O Método Colo & Calor foi criado para ajudar em qualquer fase da amamentação — seja enfrentando dor, pega incorreta, baixa produção ou insegurança nas mamadas.",
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer:
      "Os resultados podem aparecer logo nas primeiras aulas. As técnicas são práticas, diretas e já trouxeram alívio para muitas mães em poucos dias — algumas sentiram diferença já na primeira mamada.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer:
      "Você terá acesso ao treinamento por 12 meses.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <HelpCircle className="w-12 h-12 mx-auto text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre o método
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background shadow-card rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
