import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OfferSection } from "@/components/OfferSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { MethodSection } from "@/components/MethodSection";
import { BonusSection } from "@/components/BonusSection";
import { SuccessStorySection } from "@/components/SuccessStorySection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <OfferSection />
      <PainPointsSection />
      <MethodSection />
      <BonusSection />
      <SuccessStorySection />
      <TargetAudienceSection />
      <PricingSection />
      <GuaranteeSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
