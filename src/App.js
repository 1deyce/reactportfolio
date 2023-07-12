import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import "./components/toggle.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: '768px' });

  useEffect(() => {
    document.title = "Portfolio | 1deyce"
    Aos.init();
  }, []);

  return (
    <div className={`min-h-screen ${isMobile ? 'overflow-x-hidden' : ''}`}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
