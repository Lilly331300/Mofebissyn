import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectVideo } from "@/components/ProjectVideo";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { SurveyForm } from "@/components/SurveyForm";
import { ComingSoonPreview } from "@/components/ComingSoonPreview";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-pine text-ivory">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectVideo />
      <ServicesSection />
      <HowItWorks />
      <SurveyForm />
      <ComingSoonPreview />
      <Footer />
    </main>
  );
}