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

function App() {
  return (
    <main className="min-h-screen bg-[var(--navy)] text-[var(--cream)]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Services />
      <Process />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;
