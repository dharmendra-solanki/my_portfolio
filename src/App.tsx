import { AboutSection } from "./components/AboutSection";
import  ContactSection  from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-mint text-ink">
      <Header />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
