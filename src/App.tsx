import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GroveSection from "./components/GroveSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ResearchSection from "./components/ResearchSection";
import Services from "./components/Services";
import TvlSection from "./components/TvlSection";
import { LanguageProvider } from "./i18n";

export default function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <TvlSection />
          <Services />
          <GroveSection />
          <ResearchSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
