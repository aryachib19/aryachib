import React from "react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import { Cpu, Code2, Globe2 } from "lucide-react";

interface AboutSectionProps {
  onContactClick: () => void;
  id?: string;
}

export default function AboutSection({ onContactClick, id }: AboutSectionProps) {
  const paragraphText =
    "I am an Automation & Web Developer based in Delhi, India, passionate about engineering automated workflows, full-stack web applications, and rich interactive user experiences. By combining intelligent system scripts with pixel-perfect responsive frontends, I design tailored technical solutions that maximize efficiency and run workflows on autopilot.";

  const expertise = [
    {
      icon: Cpu,
      title: "Intelligent Automations",
      description: "Developing robust system integrations, automated data flows, API connectors, web scraping infrastructure, and cron-scheduled tasks to eliminate manual repetition.",
      badge: "Optimization"
    },
    {
      icon: Code2,
      title: "Full-Stack Web Apps",
      description: "Designing high-performance, responsive user interfaces in modern React paired with fast backend servers, structured state managers, and fluid micro-interactions.",
      badge: "Frontend & Backend"
    },
    {
      icon: Globe2,
      title: "Workflow & Cloud Systems",
      description: "Connecting disparate third-party services, establishing unified data pipelines, and structuring secure API frameworks to sustain scalable operations.",
      badge: "Systems"
    }
  ];

  return (
    <section
      id={id || "about"}
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 overflow-hidden select-none"
    >
      {/* Decorative 3D Elements Absolute Positioning */}
      
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none opacity-40 md:opacity-100">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Icon"
            referrerPolicy="no-referrer"
            className="w-[100px] sm:w-[130px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[4%] left-[3%] sm:left-[6%] md:left-[8%] z-10 pointer-events-none opacity-30 md:opacity-80">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Abstract Shape Object"
            referrerPolicy="no-referrer"
            className="w-[80px] sm:w-[110px] md:w-[150px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none opacity-40 md:opacity-100">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Block Icon"
            referrerPolicy="no-referrer"
            className="w-[100px] sm:w-[130px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[4%] right-[3%] sm:right-[6%] md:right-[8%] z-10 pointer-events-none opacity-30 md:opacity-80">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Geometrics Group Object"
            referrerPolicy="no-referrer"
            className="w-[110px] sm:w-[140px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* Main Core Central Block */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-6xl w-full">
        {/* Title: About me */}
        <FadeIn delay={0} y={40} duration={0.7} className="mb-6 sm:mb-8 md:mb-10">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Subtitle / Location hook */}
        <FadeIn delay={0.15} y={20} duration={0.7} className="mb-8">
          <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.2em] uppercase text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            Arya Chib — Delhi, India
          </span>
        </FadeIn>

        {/* Paragraph: Character reveal */}
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl px-4">
          <AnimatedText
            text={paragraphText}
            className="text-[#D7E2EA]/90 font-medium leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" } as any}
          />
        </div>

        {/* Expertises Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 mb-16 text-left">
          {expertise.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={0.25 + idx * 0.1} y={30} duration={0.8}>
                <div className="group relative bg-[#121212]/50 hover:bg-[#161616]/80 transition-all duration-300 rounded-2xl p-6 border border-white/5 hover:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between h-full overflow-hidden">
                  {/* Ambient hover glow gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="p-3 bg-white/5 group-hover:bg-white/10 rounded-xl transition-colors duration-300 text-[#D7E2EA] group-hover:text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-bold tracking-wider uppercase bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 px-2.5 py-1 rounded-full transition-all duration-300">
                        {item.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-base font-extrabold text-white mb-2.5 tracking-tight group-hover:text-[#D7E2EA] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Action Button */}
        <FadeIn delay={0.4} y={20} duration={0.7}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
