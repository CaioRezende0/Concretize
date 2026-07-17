import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Excellence from './components/Excellence';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-[#f27a24] selection:text-white">
      {/* 1. Header Navigation bar */}
      <Navbar onContactClick={() => scrollToSection('#contato')} />

      <main id="main-content">
        {/* 2. Hero Presentation Section */}
        <Hero
          onQuoteClick={() => scrollToSection('#contato')}
          onServicesClick={() => scrollToSection('#servicos')}
        />

        {/* 3. Overlapping Split Card: Excellence Values */}
        <Excellence />

        {/* 4. Specialized Engineering Services (Dark Blue) */}
        <Services />

        {/* 5. Structural Portfolio with Modal Detail sheets */}
        <Portfolio />

        {/* 6. Professional Value Differentials */}
        <Differentials />

        {/* 7. The 5-Step Process Sequence */}
        <Process />

        {/* 8. Verified Customer Testimonials */}
        <Testimonials />

        {/* 9. Interactive Conversion Call-to-Action Banner */}
        <CallToAction onActionClick={() => scrollToSection('#contato')} />

        {/* 10. Study & Quote Request Form */}
        <ContactForm />
      </main>

      {/* 11. Complete Professional Corporate Footer */}
      <Footer />

      {/* Floating Action WhatsApp Button for Lead Conversion */}
      <WhatsAppButton />
    </div>
  );
}

