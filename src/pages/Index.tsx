 import { Navbar } from "@/components/Navbar";
 import { HeroSection } from "@/components/HeroSection";
 import { TrustedBySection } from "@/components/TrustedBySection";
 import { StatsSection } from "@/components/StatsSection";
 import { PortfolioSection } from "@/components/PortfolioSection";
 import { VideoSection } from "@/components/VideoSection";
 import { AboutSection } from "@/components/AboutSection";
 import { ContactSection } from "@/components/ContactSection";
 import { Footer } from "@/components/Footer";
 import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ThemeSwitcher />
       <HeroSection />
       <TrustedBySection />
       <StatsSection />
       <PortfolioSection />
      <VideoSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;