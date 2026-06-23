import React from "react";

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export default function LiveProjectButton({ href, onClick, className = "", id }: LiveProjectButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10 cursor-pointer select-none
    px-8 py-3 text-sm sm:px-10 sm:py-3.5 sm:text-base ${className}`;

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        Live Project
      </a>
    );
  }

  return (
    <button id={id} onClick={onClick} className={baseClasses}>
      Live Project
    </button>
  );
}
