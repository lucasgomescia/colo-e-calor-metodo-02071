import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
export const HeroSection = () => {
  return <section className="relative min-h-[90vh] flex items-center bg-secondary/10">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="space-y-8">
          {/* Text Content */}
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              É realmente possível amamentar{" "}
              <span className="text-secondary">sem dores</span> e{" "}
              <span className="text-secondary">fissuras</span>?
            </h1>
            <p className="text-xl text-muted-foreground">
              Assista ao vídeo e descubra os 8 passos para uma amamentação de sucesso.
            </p>
          </div>

          {/* YouTube Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lrTpcHoqdLg" title="Método Colo & Calor" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="xl" variant="cta" className="group">
              Quero começar agora!
            </Button>
          </div>

          {/* Badge Card */}
          
        </div>
      </div>
    </section>;
};