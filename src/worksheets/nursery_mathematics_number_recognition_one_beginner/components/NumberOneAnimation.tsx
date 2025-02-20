import React, { useState, useEffect } from 'react';
import './NumberOneAnimation.css';

interface Props {
  onAnimationComplete?: () => void;
}

const NumberOneAnimation: React.FC<Props> = ({ onAnimationComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    // After the main animation completes, show the guide
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setShowGuide(true);
      onAnimationComplete?.();
    }, 3000); // Match this with the CSS animation duration

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 100 120"
        className="w-3/4 h-3/4"
      >
        {/* Background grid for reference */}
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="120" fill="url(#grid)" />

        {/* Guide dots */}
        <circle cx="50" cy="20" r="2" fill="#ddd" className="guide-dot start-dot" />
        <circle cx="50" cy="100" r="2" fill="#ddd" className="guide-dot end-dot" />

        {/* Main vertical stroke */}
        <path
          d="M 50,20 L 50,100"
          fill="none"
          stroke="#2563eb"
          strokeWidth="4"
          strokeLinecap="round"
          className={isAnimating ? "drawing-path main-stroke" : "completed-path"}
          pathLength="1"
        />

        {/* Guide arrows and hints */}
        {showGuide && (
          <>
            {/* Start indicator */}
            <circle cx="50" cy="20" r="4" fill="#22c55e" className="pulse-animation" />
            
            {/* Direction arrows */}
            <g className="guide-arrows">
              {[30, 50, 70, 90].map((_, i) => (
                <path
                  key={i}
                  d={`M 45,${30 + i * 20} L 50,${35 + i * 20} L 55,${30 + i * 20}`}
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  className="guide-arrow"
                  style={{ opacity: 0.5 }}
                />
              ))}
            </g>

            {/* Dotted guide path */}
            <path
              d="M 50,20 L 50,100"
              fill="none"
              stroke="#22c55e"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="4 4"
              className="guide-path"
              style={{ opacity: 0.3 }}
            />
          </>
        )}

        {/* Animated drawing guide */}
        {isAnimating && (
          <circle
            cx="50"
            cy="20"
            r="4"
            fill="#2563eb"
            className="drawing-guide"
          >
            <animate
              attributeName="cy"
              values="20;100"
              dur="3s"
              fill="freeze"
            />
          </circle>
        )}
      </svg>
    </div>
  );
};

export default NumberOneAnimation; 