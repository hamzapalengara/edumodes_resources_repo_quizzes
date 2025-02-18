import React from 'react';

const LetterMatchingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-green-900 via-green-800 to-yellow-900 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-green-800/80 backdrop-blur rounded-xl shadow-lg border border-green-500/30 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Floating leaves effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              {['🌿', '🍃', '🌱'][Math.floor(Math.random() * 3)]}
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 relative">
          Jungle Letter Match
        </h1>
        
        <div className="text-lg text-green-300 mb-4 relative">
          Capital & Lowercase Letters
        </div>

        <div className="flex items-center gap-4 text-xl relative">
          <div className="flex items-center gap-2 bg-green-700/50 rounded-lg px-4 py-2">
            <span className="text-white font-bold">Aa</span>
            <span className="text-green-300">→</span>
            <span className="text-white font-bold">Zz</span>
          </div>
          <span className="text-2xl">🦁</span>
        </div>

        <style>
          {`
            @keyframes float {
              0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translate(20px, -100px) rotate(360deg); opacity: 0; }
            }
            .animate-float {
              animation: float 5s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default LetterMatchingThumbnail; 