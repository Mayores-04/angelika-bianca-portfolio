import React from "react";

export default function Separator({ className }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className ?? ""}`}>
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-20 md:h-24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g fill="#000">
          <path d="M0 0v100c250 0 375-24 500-48 125 24 250 48 500 48V0H0Z" opacity=".5"></path>
          <path d="M0 0v4c250 0 375 24 500 48C625 28 750 4 1000 4V0H0Z"></path>
        </g>
      </svg>
    </div>
  );
}
