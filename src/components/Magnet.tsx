import React, { useRef, useState, useEffect } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  id?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
  id,
}: MagnetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Expand the element's bounding box by `padding` to check activation area
      const minX = rect.left - padding;
      const maxX = rect.right + padding;
      const minY = rect.top - padding;
      const maxY = rect.bottom + padding;

      const isInside =
        clientX >= minX && clientX <= maxX && clientY >= minY && clientY <= maxY;

      if (isInside) {
        // Calculate the center of the elements
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate translation offset based on cursor coordinate distance divided by strength
        const tx = (clientX - centerX) / strength;
        const ty = (clientY - centerY) / strength;

        setTransition(activeTransition);
        setTransform(`translate3d(${tx}px, ${ty}px, 0px)`);
      } else {
        // Reset transformation when cursor is outside the proximity box
        setTransition(inactiveTransition);
        setTransform("translate3d(0px, 0px, 0px)");
      }
    };

    // Attach handler at window level to get fluid proximity tracking
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={`relative select-none ${className}`}
      style={{
        transform,
        transition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
