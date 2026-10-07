import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { EducationLanguages } from "@/components/sections/EducationLanguages";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <EducationLanguages />
    </div>
  );
}
