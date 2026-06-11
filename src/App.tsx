import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Results from "./components/Results";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEOOptimization from "./pages/SEOOptimization";
import DigitalMarketing from "./pages/DigitalMarketing";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import BrandStrategy from "./pages/BrandStrategy";
import AutomationSolutions from "./pages/AutomationSolutions";

import WebsiteDevelopment from "./pages/WebsiteDevelopment";

function HomePage() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/website-development"
          element={<WebsiteDevelopment />}
        />
        <Route
  path="/seo-optimization"
  element={<SEOOptimization />}
/>
<Route path="/digital-marketing" element={<DigitalMarketing />} />

<Route
  path="/social-media-marketing"
  element={<SocialMediaMarketing />}
/>

<Route
  path="/brand-strategy"
  element={<BrandStrategy />}
/>

<Route
  path="/automation-solutions"
  element={<AutomationSolutions />}
/>
      </Routes>
    </BrowserRouter>
  );
}