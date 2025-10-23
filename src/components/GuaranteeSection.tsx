import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, CheckCircle } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-elevated bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-2 border-yellow-400">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-yellow-400 rounded-full flex items-center justify-center shadow-elevated">
                  <ShieldCheck className="w-20 h-20 text-yellow-900" />
                </div>
                <Badge variant="secondary" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-sm px-4 py-1">
                  Garantia Total
                </Badge>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 dark:text-yellow-100">
                  7 dias de garantia incondicional!
                </h2>
                
                <p className="text-lg md:text-xl text-yellow-900 dark:text-yellow-200">
                  Se o conteúdo não fizer sentido para você, reembolsamos{" "}
                  <strong>100% do valor</strong> investido.
                </p>

                <Card className="bg-yellow-50 dark:bg-yellow-900/30 border-yellow-300 max-w-md mx-auto">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 mx-auto mb-3 text-yellow-600" />
                    <p className="font-semibold text-yellow-900 dark:text-yellow-100">
                      Compromisso real com o seu resultado
                    </p>
                  </CardContent>
                </Card>

                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Você não tem nada a perder e uma amamentação tranquila a ganhar.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
