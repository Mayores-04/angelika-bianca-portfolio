import React from "react";

export default function AnimatedSeparatorWave({ className }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className ?? ""}`}>
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g fill="#000">
          {/* Top line */}
          <path d="M0 0h1000v4H0z">
            <animate
              attributeName="opacity"
              values="1;0.7;1"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* Layer 1 - Shallowest arc */}
          <path d="M0 0h1000v80.8S550 100 500 100 0 80.8 0 80.8V0Z" opacity=".2">
            <animate
              attributeName="d"
              values="M0 0h1000v80.8S550 100 500 100 0 80.8 0 80.8V0Z;
                      M0 0h1000v80.8S550 95 500 95 0 80.8 0 80.8V0Z;
                      M0 0h1000v80.8S550 100 500 100 0 80.8 0 80.8V0Z"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          {/* Layer 2 */}
          <path d="M0 0h1000v61.6S600 100 500 100 0 61.6 0 61.6V0Z" opacity=".3">
            <animate
              attributeName="d"
              values="M0 0h1000v61.6S600 100 500 100 0 61.6 0 61.6V0Z;
                      M0 0h1000v61.6S600 92 500 92 0 61.6 0 61.6V0Z;
                      M0 0h1000v61.6S600 100 500 100 0 61.6 0 61.6V0Z"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </path>

          {/* Layer 3 */}
          <path d="M0 0h1000v42.4S650 100 500 100 0 42.4 0 42.4V0Z" opacity=".4">
            <animate
              attributeName="d"
              values="M0 0h1000v42.4S650 100 500 100 0 42.4 0 42.4V0Z;
                      M0 0h1000v42.4S650 88 500 88 0 42.4 0 42.4V0Z;
                      M0 0h1000v42.4S650 100 500 100 0 42.4 0 42.4V0Z"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* Layer 4 */}
          <path d="M0 0h1000v23.2S700 100 500 100 0 23.2 0 23.2V0Z" opacity=".5">
            <animate
              attributeName="d"
              values="M0 0h1000v23.2S700 100 500 100 0 23.2 0 23.2V0Z;
                      M0 0h1000v23.2S700 85 500 85 0 23.2 0 23.2V0Z;
                      M0 0h1000v23.2S700 100 500 100 0 23.2 0 23.2V0Z"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>

          {/* Layer 5 - Deepest arc */}
          <path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z">
            <animate
              attributeName="d"
              values="M0 0v4s250 96 500 96 500-96 500-96V0H0Z;
                      M0 0v4s250 82 500 82 500-82 500-82V0H0Z;
                      M0 0v4s250 96 500 96 500-96 500-96V0H0Z"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}