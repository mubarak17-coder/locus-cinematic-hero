import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductShowcase from "@/components/ProductShowcase";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ProductShowcase />
    </main>
  );
};

export default Index;
