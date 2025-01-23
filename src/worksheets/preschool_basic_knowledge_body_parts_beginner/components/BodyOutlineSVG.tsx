import React from 'react';

interface BodyOutlineSVGProps {
  className?: string;
}

const BodyOutlineSVG: React.FC<BodyOutlineSVGProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle
        cx="100"
        cy="50"
        r="35"
        fill="#FFF5F7"
        stroke="#7C3AED"
        strokeWidth="2"
      />

      {/* Face Features */}
      <g fill="#7C3AED">
        {/* Eyes */}
        <circle cx="85" cy="40" r="4" />
        <circle cx="115" cy="40" r="4" />
        
        {/* Nose */}
        <path d="M98 45 L102 45 L100 55 Z" />
        
        {/* Mouth */}
        <path
          d="M85 65 Q100 75 115 65"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
        />

        {/* Ears */}
        <path d="M60 45 Q65 35 65 50 Q60 55 60 45" />
        <path d="M140 45 Q135 35 135 50 Q140 55 140 45" />
      </g>

      {/* Neck */}
      <path
        d="M85 80 L85 100 L115 100 L115 80"
        fill="#FFF5F7"
        stroke="#7C3AED"
        strokeWidth="2"
      />

      {/* Body */}
      <path
        d="M85 100 
           C85 100 60 150 60 200 
           C60 250 80 280 100 280 
           C120 280 140 250 140 200 
           C140 150 115 100 115 100 Z"
        fill="#FFF5F7"
        stroke="#7C3AED"
        strokeWidth="2"
      />

      {/* Arms */}
      <path
        d="M85 120 
           C70 130 50 180 45 220 
           C40 260 45 270 55 275"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="2"
      />
      <path
        d="M115 120 
           C130 130 150 180 155 220 
           C160 260 155 270 145 275"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="2"
      />

      {/* Hands */}
      <path
        d="M45 270 C35 275 35 285 45 290 C55 295 65 285 55 275"
        fill="#FFF5F7"
        stroke="#7C3AED"
        strokeWidth="2"
      />
      <path
        d="M155 270 C165 275 165 285 155 290 C145 295 135 285 145 275"
        fill="#FFF5F7"
        stroke="#7C3AED"
        strokeWidth="2"
      />

      {/* Legs */}
      <path
        d="M85 280 
           C80 300 75 350 75 380"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="2"
      />
      <path
        d="M115 280 
           C120 300 125 350 125 380"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="2"
      />

      {/* Feet */}
      <path
        d="M75 380 C75 385 65 390 60 385 C55 380 65 375 75 380"
        fill="#FFF5F7"
        stroke="#7C3AED"
        strokeWidth="2"
      />
      <path
        d="M125 380 C125 385 135 390 140 385 C145 380 135 375 125 380"
        fill="#FFF5F7"
        stroke="#7C3AED"
        strokeWidth="2"
      />
    </svg>
  );
};

export default BodyOutlineSVG; 