import React, { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactModal from "./components/ContactModal";
import FadeIn from "./components/FadeIn";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="relative bg-[#0C0C0C] min-h-screen text-[#D7E2EA] overflow-x-hidden font-sans">
      {/* Scroll Progress Indicator Bar */}
      <motion.div
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B00085] via-[#7621B0] to-[#BBCCD7] z-[9999] origin-left"
        style={{ scaleX }}
      />

      {/* 1. HERO SECTION */}
      <HeroSection onContactClick={openContact} id="hero" />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection id="marquee" />

      {/* 3. ABOUT SECTION */}
      <AboutSection onContactClick={openContact} id="about" />

      {/* 4. SERVICES SECTION */}
      <ServicesSection id="services" />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection id="projects" />

      {/* 6. COMPLEMENTARY FOOTER & CALL-TO-ACTION (Anchor: #contact) */}
      <footer
        id="contact"
        className="bg-[#0C0C0C] py-20 pb-12 px-6 sm:px-10 border-t border-[#D7E2EA]/10 flex flex-col justify-between items-center relative z-30 select-none"
      >
        <div className="max-w-4xl w-full text-center flex flex-col items-center gap-6 sm:gap-8 mb-16">
          <FadeIn delay={0} y={30} duration={0.8}>
            <span className="text-[#BBCCD7] font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-2">
              RESERVE YOUR VENTURE SLOT
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1} y={40} duration={0.8}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
            >
              Let&apos;s Connect
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={30} duration={0.8}>
            <p className="font-light text-sm sm:text-base md:text-lg max-w-lg text-[#D7E2EA]/70 mt-2">
              Ready to automate workflows and craft striking web solutions? Feel free to start a conversation.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} y={20} duration={0.8} className="mt-4">
            <button
              onClick={openContact}
              className="inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-widest transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer px-10 py-4 text-xs sm:text-sm md:text-base border-2 border-white/80 bg-white text-[#0C0C0C] hover:bg-transparent hover:text-white"
            >
              Start Project Brief
            </button>
          </FadeIn>
        </div>

        {/* Brand credit bar */}
        <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[#D7E2EA]/10 pt-8 mt-4 text-center">
          <span className="font-black text-sm uppercase tracking-wider text-[#D7E2EA]/60">
            ARYA CHIB -- AUTOMATION & WEB DEVELOPER
          </span>
          <span className="text-xs text-[#D7E2EA]/40 font-light font-mono">
            © {new Date().getFullYear()} ARYA CHIB. ALL RIGHTS RESERVED.
          </span>
        </div>
      </footer>

      {/* 7. CONTACT PORTAL MODAL */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}
