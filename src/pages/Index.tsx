import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductShowcase from "@/components/ProductShowcase";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ProductShowcase />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
