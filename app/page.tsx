import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Experience from "@/app/components/experience";
import Intro from "@/app/components/intro";
import Projects from "@/app/components/Projects/projects";
import SectionDivider from "@/app/components/section-divider";
import Skills from "@/app/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
