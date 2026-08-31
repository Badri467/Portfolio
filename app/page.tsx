import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <Metrics />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Interests />
      </main>
      <Contact />
    </>
  );
}
