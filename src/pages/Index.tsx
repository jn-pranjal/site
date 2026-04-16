import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import WritingSection from "@/components/WritingSection";
import NowAndTestimonialsSection from "@/components/NowAndTestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ProjectsSection />
      <WritingSection />
      <NowAndTestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
