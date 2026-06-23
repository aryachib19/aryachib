import React, { useRef, useState, useEffect } from "react";

interface MarqueeSectionProps {
  id?: string;
}

export default function MarqueeSection({ id }: MarqueeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // Exact 21 GIF URLs sorted as described
  const allGifs = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
    "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif", // 11th
    "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif", // 12th
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
    "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
    "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
    "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
    "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif", // 21st
  ];

  const row1Base = allGifs.slice(0, 11);
  const row2Base = allGifs.slice(11);

  // Triple for seamless feel
  const row1Images = [...row1Base, ...row1Base, ...row1Base];
  const row2Images = [...row2Base, ...row2Base, ...row2Base];

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;

      // Track active scrolling if section is visible in viewport area
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Offset scroll calculation: (window.scrollY - sectionTop + window.innerHeight) * 0.3
        const val = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setOffset(val);
      }
    };

    // Initialize layout positions
    handleScroll();

    const handleScrollPassive = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollPassive, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScrollPassive);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Tile dimensions spec: 420px x 270px. Gap: gap-3 (12px).
  // Total copy lengths: 
  // Row 1: 11 images * 432px = 4752px. Centered by starting one full copy left.
  // Row 2: 10 images * 432px = 4320px. Centered by starting one full copy left.
  const slide1 = (offset - 200) - 2500; 
  const slide2 = -(offset - 200) - 2500;

  return (
    <section
      id={id || "marquee"}
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* ROW 1: Moves right */}
        <div className="overflow-hidden w-full relative">
          <div
            className="flex gap-3 flex-nowrap shrink-0"
            style={{
              transform: `translate3d(${slide1}px, 0px, 0px)`,
              willChange: "transform",
              transition: "transform 0.05s linear", // seamless, very clean feel
            }}
          >
            {row1Images.map((src, i) => (
              <div
                key={`r1-${i}`}
                className="w-[420px] h-[270px] shrink-0 overflow-hidden rounded-2xl bg-[#141414]"
              >
                <img
                  src={src}
                  alt={`Portfolio Giphy r1-${i}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves left */}
        <div className="overflow-hidden w-full relative">
          <div
            className="flex gap-3 flex-nowrap shrink-0"
            style={{
              transform: `translate3d(${slide2}px, 0px, 0px)`,
              willChange: "transform",
              transition: "transform 0.05s linear",
            }}
          >
            {row2Images.map((src, i) => (
              <div
                key={`r2-${i}`}
                className="w-[420px] h-[270px] shrink-0 overflow-hidden rounded-2xl bg-[#141414]"
              >
                <img
                  src={src}
                  alt={`Portfolio Giphy r2-${i}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
