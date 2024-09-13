import HeroSection from '../components/ui/HeroSection';
import Solutions from '../components/ui/Solutions';
import Services from '../components/ui/Services';
import Blogs from '../components/ui/Blogs';
import About from '../components/ui/About';
import Contact from '../components/ui/Contact';
import Founder from '../components/ui/Founder';
import Footer from '../components/shared/Footer';
import WhyChooseUs from '../components/ui/WhyChooseUs';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Solutions Section */}
      <section id="solutions">
        <Solutions />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Blogs Section */}
      <section id="blogs">
        <Blogs />
      </section>

       {/* Founder Section */}
      <section id="aboutus">
        <About />
      </section>

      {/* Founder Section */}
      <section id="founder">
        <Founder />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
