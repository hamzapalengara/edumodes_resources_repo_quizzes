import React, { useState, useEffect } from 'react';
import './NumberTwoAnimation.css';

interface Props {
  onAnimationComplete?: () => void;
}

const NumberTwoAnimation: React.FC<Props> = ({ onAnimationComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showGuide, setShowGuide] = useState(false);
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setIsAnimating(true);
    setShowGuide(false);
    setKey(prev => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setShowGuide(true);
      onAnimationComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete, key]);

  return (
    <div className="relative w-full min-h-[400px] flex flex-col items-center justify-center">
      {/* SVG Container */}
      <div className="w-full max-w-[300px] aspect-square mb-6">
        <svg
          key={key}
          viewBox="0 0 100 120"
          className="w-full h-full"
        >
          {/* Background grid for reference */}
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="120" fill="url(#grid)" />

          {/* Guide dots */}
          <circle cx="30" cy="30" r="2" fill="#ddd" className="guide-dot start-dot" />
          <circle cx="70" cy="80" r="2" fill="#ddd" className="guide-dot" />

          {/* Main curved stroke */}
          <path
            d="M30 30C30 20 40 15 50 15C60 15 70 20 70 30C70 45 30 70 30 80"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
            className={isAnimating ? "drawing-path main-stroke" : "completed-path"}
            pathLength="1"
          />

          {/* Bottom line */}
          <path
            d="M30 80L70 80"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
            className={isAnimating ? "drawing-path bottom-stroke" : "completed-path"}
            pathLength="1"
          />

          {/* Guide arrows and hints */}
          {showGuide && (
            <>
              {/* Start indicator */}
              <circle cx="30" cy="30" r="4" fill="#22c55e" className="pulse-animation" />
              
              {/* Direction arrows for curve */}
              <g className="guide-arrows">
                <path
                  d="M 35,25 L 40,30 L 45,25"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  className="guide-arrow"
                  style={{ opacity: 0.5 }}
                />
                <path
                  d="M 55,35 L 60,40 L 65,35"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  className="guide-arrow"
                  style={{ opacity: 0.5 }}
                />
                <path
                  d="M 45,60 L 40,65 L 35,60"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  className="guide-arrow"
                  style={{ opacity: 0.5 }}
                />
              </g>

              {/* Direction arrow for bottom line */}
              <g className="guide-arrows">
                <path
                  d="M 45,75 L 50,80 L 45,85"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  className="guide-arrow"
                  style={{ opacity: 0.5 }}
                />
              </g>

              {/* Dotted guide paths */}
              <path
                d="M30 30C30 20 40 15 50 15C60 15 70 20 70 30C70 45 30 70 30 80"
                fill="none"
                stroke="#22c55e"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="4 4"
                className="guide-path"
                style={{ opacity: 0.3 }}
              />
              <path
                d="M30 80L70 80"
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
            <>
              <circle
                cx="30"
                cy="30"
                r="4"
                fill="#2563eb"
                className="drawing-guide curve-guide"
              >
                <animateMotion
                  dur="1.5s"
                  fill="freeze"
                  path="M0 0C0 -10 10 -15 20 -15C30 -15 40 -10 40 0C40 15 0 40 0 50"
                />
              </circle>
              <circle
                cx="30"
                cy="80"
                r="4"
                fill="#2563eb"
                className="drawing-guide line-guide"
                style={{ opacity: 0 }}
              >
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.1s"
                  begin="1.5s"
                  fill="freeze"
                />
                <animate
                  attributeName="cx"
                  values="30;70"
                  dur="1s"
                  begin="1.5s"
                  fill="freeze"
                />
              </circle>
            </>
          )}
        </svg>
      </div>

      {/* Replay Button - Fixed size and position */}
      <button 
        onClick={handleReplay}
        className="fixed-size-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" 
            clipRule="evenodd" 
          />
        </svg>
        Replay
      </button>
    </div>
  );
};

export default NumberTwoAnimation; 