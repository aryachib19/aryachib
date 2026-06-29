import React from "react";

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export default function LiveProjectButton({ href, onClick, className = "", id }: LiveProjectButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA]/50 font-semibold uppercase tracking-widest select-none
    px-8 py-3 text-sm sm:px-10 sm:py-3.5 sm:text-base cursor-default ${className}`;

  return (
    <div id={id} className={baseClasses}>
      Ongoing Project
    </div>
  );
}
