import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import WritingSection from "@/components/WritingSection";
import CredentialsSection from "@/components/CredentialsSection";
import NowAndTestimonialsSection from "@/components/NowAndTestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AITwin from "@/components/AITwin";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-page-in">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <CredentialsSection />
      <NowAndTestimonialsSection />
      <ContactSection />
      <WritingSection />
      <Footer />
      <AITwin />
    </div>
  );
};

export default Index;
