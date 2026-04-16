import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import WritingSection from "@/components/WritingSection";
import CredentialsSection from "@/components/CredentialsSection";
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
      <CredentialsSection />
      <NowAndTestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
