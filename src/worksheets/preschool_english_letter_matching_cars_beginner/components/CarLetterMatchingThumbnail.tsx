import React from 'react';

const CarLetterMatchingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-gray-800/80 backdrop-blur rounded-xl shadow-lg border border-red-500/30 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Racing effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-speed-line"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: '50px',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(255,0,0,0) 0%, rgba(255,0,0,0.5) 50%, rgba(255,0,0,0) 100%)',
                transform: 'rotate(-45deg)',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 relative">
          Speed Letter Match
        </h1>
        
        <div className="text-lg text-red-300 mb-4 relative">
          Capital & Lowercase Letters
        </div>

        <div className="flex items-center gap-4 text-xl relative">
          <div className="flex items-center gap-2 bg-red-900/50 rounded-lg px-4 py-2">
            <span className="text-white font-bold">Gg</span>
            <span className="text-red-300">→</span>
            <span className="text-white font-bold">Ll</span>
          </div>
          <span className="text-2xl">🏎️</span>
        </div>

        <style>
          {`
            @keyframes speed-line {
              0% { transform: translate(-100px, 100px) rotate(-45deg); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translate(200px, -200px) rotate(-45deg); opacity: 0; }
            }
            .animate-speed-line {
              animation: speed-line 2s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default CarLetterMatchingThumbnail; 