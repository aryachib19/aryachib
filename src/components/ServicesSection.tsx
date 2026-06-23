import React from "react";
import FadeIn from "./FadeIn";

interface ServicesSectionProps {
  id?: string;
}

export default function ServicesSection({ id }: ServicesSectionProps) {
  const services = [
    {
      num: "01",
      name: "Workflow Automation",
      description:
        "Designing custom scripts, automated workflows, and integrations (Zapier, custom webhooks, cloud triggers) to streamline operations and save hundreds of manual hours.",
    },
    {
      num: "02",
      name: "Full-Stack Web Apps",
      description:
        "End-to-end development of high-performance, dynamic custom web solutions using modern tech stacks (React, Vite, Node, Tailwind CSS) from scratch.",
    },
    {
      num: "03",
      name: "API & Tool Integration",
      description:
        "Designing and connecting robust systems, payment portals, cloud databases, and third-party APIs with absolute type-safe synchronization.",
    },
    {
      num: "04",
      name: "Custom Scripting",
      description:
        "Developing specialized scripts in TypeScript/Python to process large data sets, perform scraping tasks, or manage local development work securely.",
    },
    {
      num: "05",
      name: "Web Speed & Scaling",
      description:
        "Optimizing server response pathways, asset bundling, and critical front-end render loops to achieve near-instantaneous page speeds.",
    },
  ];

  return (
    <section
      id={id || "services"}
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 w-full select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: Services */}
        <FadeIn delay={0} y={40} duration={0.7} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List Block */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {services.map((service, index) => (
            <FadeIn
              key={service.num}
              delay={index * 0.1}
              y={30}
              duration={0.8}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-10">
                {/* Number on the left */}
                <span
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {service.num}
                </span>

                {/* Name + Description stacked vertically on the right */}
                <div className="flex flex-col flex-grow sm:pl-4 md:pl-8">
                  <h3
                    className="font-medium text-[#000000] uppercase mb-2"
                    style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C]/60 leading-relaxed max-w-2xl"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
