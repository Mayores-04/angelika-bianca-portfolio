import React from "react";

export default function AnimatedSeparator({ className }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className ?? ""}`}>
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g fill="#000">
          <path d="M0,50 Q250,20 500,50 T1000,50 L1000,100 L0,100 Z" opacity=".3">
            <animate
              attributeName="d"
              values="M0,50 Q250,20 500,50 T1000,50 L1000,100 L0,100 Z;
                      M0,50 Q250,80 500,50 T1000,50 L1000,100 L0,100 Z;
                      M0,50 Q250,20 500,50 T1000,50 L1000,100 L0,100 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>

          <path d="M0,60 Q250,30 500,60 T1000,60 L1000,100 L0,100 Z" opacity=".5">
            <animate
              attributeName="d"
              values="M0,60 Q250,30 500,60 T1000,60 L1000,100 L0,100 Z;
                      M0,60 Q250,90 500,60 T1000,60 L1000,100 L0,100 Z;
                      M0,60 Q250,30 500,60 T1000,60 L1000,100 L0,100 Z"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          <path d="M0,70 Q250,40 500,70 T1000,70 L1000,100 L0,100 Z">
            <animate
              attributeName="d"
              values="M0,70 Q250,40 500,70 T1000,70 L1000,100 L0,100 Z;
                      M0,70 Q250,100 500,70 T1000,70 L1000,100 L0,100 Z;
                      M0,70 Q250,40 500,70 T1000,70 L1000,100 L0,100 Z"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}