import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number;
}

export const StarIllustration: React.FC<IllustrationProps> = ({ className = "", size = 80 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100">
    <path
      fill="#FFD700"
      d="M50 5 L61 39 L95 39 L68 61 L79 95 L50 75 L21 95 L32 61 L5 39 L39 39 Z"
    />
  </svg>
);

export const MoonIllustration: React.FC<IllustrationProps> = ({ className = "", size = 80 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="#D1D5DB" />
    <circle cx="30" cy="30" r="10" fill="#9CA3AF" />
    <circle cx="70" cy="60" r="15" fill="#9CA3AF" />
    <circle cx="40" cy="70" r="8" fill="#9CA3AF" />
  </svg>
);

export const PlanetIllustration: React.FC<IllustrationProps> = ({ className = "", size = 80 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="#60A5FA" />
    <path
      fill="#93C5FD"
      d="M20 30 Q50 10 80 30 T80 70 Q50 90 20 70 T20 30"
    />
  </svg>
);

export const RocketIllustration: React.FC<IllustrationProps> = ({ className = "", size = 80 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100">
    <path
      fill="#EF4444"
      d="M50 10 L70 50 L50 90 L30 50 Z"
    />
    <circle cx="50" cy="45" r="10" fill="#F9FAFB" />
    <path
      fill="#DC2626"
      d="M30 50 L20 60 L30 70 L50 90 L70 70 L80 60 L70 50"
    />
  </svg>
);

export const CometIllustration: React.FC<IllustrationProps> = ({ className = "", size = 80 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100">
    <circle cx="70" cy="30" r="20" fill="#F9FAFB" />
    <path
      fill="#E5E7EB"
      d="M60 40 L10 90 Q30 70 50 50"
    />
  </svg>
);

export const SunIllustration: React.FC<IllustrationProps> = ({ className = "", size = 80 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="30" fill="#FCD34D" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <rect
        key={angle}
        x="45"
        y="10"
        width="10"
        height="25"
        fill="#F59E0B"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
  </svg>
);

export const SatelliteIllustration: React.FC<IllustrationProps> = ({ className = "", size = 80 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100">
    <rect x="30" y="40" width="40" height="20" fill="#6B7280" />
    <rect x="10" y="45" width="80" height="10" fill="#4B5563" />
    <circle cx="20" cy="50" r="5" fill="#60A5FA" />
    <circle cx="80" cy="50" r="5" fill="#60A5FA" />
  </svg>
);

export const UFOIllustration: React.FC<IllustrationProps> = ({ className = "", size = 80 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100">
    <ellipse cx="50" cy="50" rx="45" ry="20" fill="#8B5CF6" />
    <circle cx="50" cy="45" r="15" fill="#C4B5FD" />
    {[20, 40, 60, 80].map((x) => (
      <rect key={x} x={x} y="55" width="5" height="10" fill="#7C3AED" />
    ))}
  </svg>
);

export const MeteorIllustration: React.FC<IllustrationProps> = ({ className = "", size = 80 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100">
    <path
      fill="#F87171"
      d="M70 30 L30 70 Q50 50 70 30"
    />
    <circle cx="70" cy="30" r="15" fill="#EF4444" />
    <path
      fill="#DC2626"
      d="M30 70 L10 90 Q20 80 30 70"
    />
  </svg>
); 