import Hero from './components/Hero';
import Services from './components/Services';
import Differentiators from './components/Differentiators';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import EngagementModel from './components/EngagementModel';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Differentiators />
      <CaseStudies />
      <About />
      <EngagementModel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
