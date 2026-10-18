import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GitHub from "./components/GitHub";
import WhatsAppButton from "./components/WhatsAppButton";
import Reveal from "./components/Reveal";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <main className="min-h-screen bg-ink text-cream">
      <Navbar />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <GitHub />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Achievements />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}

export default App;