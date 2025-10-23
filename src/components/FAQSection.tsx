import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer:
      "Você terá acesso vitalício a todo o conteúdo do método! Assista quantas vezes quiser, no seu ritmo, sem pressa.",
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer:
      "Muitas mães relatam melhorias já nas primeiras mamadas após aplicar as técnicas. Porém, cada caso é único. O método foi desenvolvido para funcionar tanto como preparação quanto como correção de problemas.",
  },
  {
    question: "E se meu bebê já nasceu?",
    answer:
      "O método funciona perfeitamente! Você aprenderá técnicas para corrigir a pega, aumentar a produção e eliminar as dores, mesmo que já esteja amamentando.",
  },
  {
    question: "Quando posso começar o curso?",
    answer:
      "Imediatamente após a compra! Você recebe acesso instantâneo a todo o conteúdo e pode começar a estudar na mesma hora.",
  },
  {
    question: "O método funciona para todas as mães?",
    answer:
      "O Método Colo & Calor é baseado em técnicas comprovadas e já ajudou mais de 600 mães. Ele foi desenvolvido para funcionar para a maioria dos casos. Porém, oferecemos 7 dias de garantia caso você sinta que não é para você.",
  },
  {
    question: "Preciso de algum material especial?",
    answer:
      "Não! O método ensina técnicas que você pode aplicar com o que já tem em casa. Não há necessidade de comprar equipamentos especiais.",
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
