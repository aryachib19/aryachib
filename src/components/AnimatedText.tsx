import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  key?: any;
}

function Character({ char, index, total, progress }: CharacterProps) {
  // Calculate relative fade-in segment for this character
  // Give it a small window (e.g. 0.08) for smooth overlapping scroll-revealing
  const start = index / total;
  const end = Math.min(1, start + 0.1); 
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  if (char === " ") {
    return <span className="inline-block w-[0.25em]">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for layout constraints & sizing */}
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      {/* Absolutely positioned active rendering layer */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none"
      >
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = "", id, style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Split into words first to maintain natural CSS wrapping behaviors
  const words = text.split(" ");
  
  // Pre-calculate full sequence character offsets so we have continuous global indices
  let globalCharIndex = 0;
  
  // We want to construct the word nodes
  const wordNodes = words.map((word, wordIdx) => {
    const chars = word.split("");
    const wordNode = (
      <span key={`w-${wordIdx}`} className="inline-block whitespace-nowrap">
        {chars.map((char, charIdx) => {
          const currentIndex = globalCharIndex;
          globalCharIndex++;
          return (
            <Character
              key={`c-${charIdx}`}
              char={char}
              index={currentIndex}
              total={text.length}
              progress={scrollYProgress}
            />
          );
        })}
      </span>
    );
    
    // Add space after word, except the last one. Let's make sure space acts as a wrapping space.
    const spaceIndex = globalCharIndex;
    globalCharIndex++; // Count space in index
    
    return (
      <React.Fragment key={`f-${wordIdx}`}>
        {wordNode}
        {wordIdx < words.length - 1 && (
          <Character
            char=" "
            index={spaceIndex}
            total={text.length}
            progress={scrollYProgress}
          />
        )}
      </React.Fragment>
    );
  });

  return (
    <p
      id={id}
      ref={containerRef}
      style={style}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto ${className}`}
    >
      {wordNodes}
    </p>
  );
}
