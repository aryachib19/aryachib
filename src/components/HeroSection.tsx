import React, { useState } from "react";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
// @ts-ignore
import cyberAvatar from "../assets/images/cyber_jack_avatar_1782029608610.jpg";
// @ts-ignore
import faceAvatar from "../assets/images/jack_face_avatar_1782030058666.jpg";

interface HeroSectionProps {
  onContactClick: () => void;
  id?: string;
}

export default function HeroSection({ onContactClick, id }: HeroSectionProps) {
  const [avatarMode, setAvatarMode] = useState<"classic" | "cyber" | "face" | "custom">("face");
  const [customUrl, setCustomUrl] = useState("https://i.pinimg.com/originals/ae/0f/f2/ae0ff281fd276ec9d62fd5a8c9b30d83.gif"); // Elegant default fallback
  const [showInput, setShowInput] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Price", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section
      id={id || "hero"}
      className="relative min-h-screen h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] select-none"
      style={{ overflowX: "clip" }}
    >
      {/* 1. NAVBAR - Fades in with delay 0, y -20 */}
      <FadeIn delay={0} y={-20} duration={0.6}>
        <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 bg-transparent z-50">
          <a
            href="#"
            className="text-[#D7E2EA] font-semibold text-sm md:text-lg lg:text-[1.4rem] tracking-wider uppercase hover:opacity-70 transition-opacity duration-200"
          >
            Arya Chib
          </a>
          <div className="flex gap-4 sm:gap-6 md:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={link.label === "Contact" ? (e) => { e.preventDefault(); onContactClick(); } : undefined}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* 2. HERO PORTRAIT - Center absolutely. Uses a Magnet component wrapping portrait image */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
        <div className="relative w-full h-full">
          <FadeIn
            delay={0.6}
            y={30}
            duration={0.8}
            className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto flex flex-col items-center gap-4"
          >
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            >
              {avatarMode === "classic" ? (
                <img
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                  alt="Jack portrait classic"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover select-none pointer-events-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
              ) : avatarMode === "cyber" ? (
                <img
                  src={cyberAvatar}
                  alt="Jack portrait cyber"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover select-none pointer-events-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-3xl border-2 border-[#BBCCD7]/30"
                />
              ) : avatarMode === "face" ? (
                <div className="w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] mx-auto rounded-full overflow-hidden border-[8px] border-[#161616] shadow-[0_15px_45px_rgba(0,0,0,0.6)] bg-[#1e1e1e]">
                  <img
                    src={faceAvatar}
                    alt="Jack portrait cartoon face"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
              ) : (
                <img
                  src={customUrl}
                  alt="Jack portrait custom"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover select-none pointer-events-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-3xl border-2 border-[#B600A8]/50"
                  onError={(e) => {
                    // Fail gracefully back to default
                    (e.target as HTMLImageElement).src = faceAvatar;
                  }}
                />
              )}
            </Magnet>

            {/* Seamless style toggling controller with Custom Input option */}
            <div className="flex flex-col items-center gap-2 bg-[#121212]/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-xl transform -translate-y-3 sm:translate-y-0 sm:-mt-2 select-none z-30 pointer-events-auto">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setAvatarMode("face");
                    setShowInput(false);
                  }}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    avatarMode === "face"
                      ? "bg-[#BBCCD7] text-[#0C0C0C] shadow-[0_0_8px_rgba(187,204,215,0.4)]"
                      : "text-[#D7E2EA]/55 hover:text-[#D7E2EA]"
                  }`}
                >
                  Cartoon Face
                </button>
                <button
                  onClick={() => {
                    setAvatarMode("classic");
                    setShowInput(false);
                  }}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    avatarMode === "classic"
                      ? "bg-[#D7E2EA] text-[#0C0C0C]"
                      : "text-[#D7E2EA]/55 hover:text-[#D7E2EA]"
                  }`}
                >
                  Classic
                </button>
                <button
                  onClick={() => {
                    setAvatarMode("cyber");
                    setShowInput(false);
                  }}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    avatarMode === "cyber"
                      ? "bg-[#BBCCD7] text-[#0C0C0C]/80"
                      : "text-[#D7E2EA]/55 hover:text-[#D7E2EA]"
                  }`}
                >
                  Cyber AI
                </button>
                <button
                  onClick={() => {
                    setAvatarMode("custom");
                    setShowInput(!showInput);
                  }}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    avatarMode === "custom"
                      ? "bg-[#B600A8] text-white shadow-[0_0_8px_rgba(182,0,168,0.5)]"
                      : "text-[#D7E2EA]/55 hover:text-[#D7E2EA]"
                  }`}
                >
                  Paste URL
                </button>
              </div>

              {/* Collapsible input panel for copying any raw image URL (Pinterest direct address, etc.) */}
              {avatarMode === "custom" && (showInput || customUrl === "") && (
                <div className="px-2 pb-1.5 pt-0.5 flex flex-col gap-1 w-[200px] sm:w-[240px]">
                  <input
                    type="text"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="Paste direct image URL..."
                    className="w-full bg-black/60 border border-white/20 focus:border-[#B600A8]/80 text-[10px] rounded-lg px-2 py-1 text-white placeholder-white/35 outline-none font-mono"
                  />
                  <div className="flex justify-between items-center text-[8px] text-white/50 tracking-wider">
                    <span>Right-click image &gt; Copy Image Address</span>
                    <button
                      onClick={() => setShowInput(false)}
                      className="text-[#BBCCD7] hover:text-white font-bold cursor-pointer underline"
                    >
                      Hide
                    </button>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 3. HERO HEADING - Fades in with delay 0.15, y 40 */}
      <div className="w-full flex-grow flex items-center pt-8 sm:pt-4 md:-mt-5 select-none relative z-0">
        <div className="w-full overflow-hidden py-4">
          <FadeIn delay={0.15} y={40} duration={0.8}>
            <h1 className="hero-heading text-[6.5vw] sm:text-[7.2vw] md:text-[7.8vw] lg:text-[8.5vw] font-black uppercase tracking-tight leading-none text-center whitespace-nowrap w-full">
              Hi, I&apos;m Arya Chib
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 4. BOTTOM BAR - Align things perfectly */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 relative select-none">
        {/* Left: Paragraph - Fades in with delay 0.35, y 20 */}
        <FadeIn delay={0.35} y={20} duration={0.7}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            automation and web developer
          </p>
        </FadeIn>

        {/* Right: ContactButton - Fades in with delay 0.5, y 20 */}
        <FadeIn delay={0.5} y={20} duration={0.7} className="pointer-events-auto">
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
