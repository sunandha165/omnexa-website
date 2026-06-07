import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Results from './components/Results';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <Results />
      <About />
      <Process />
      
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
