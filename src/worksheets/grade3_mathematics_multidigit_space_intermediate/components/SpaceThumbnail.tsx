import React from 'react';

const SpaceThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-gray-800/80 backdrop-blur rounded-xl shadow-lg border border-blue-500/30 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-[twinkle_2s_infinite]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 relative">
          Space Math Adventure
        </h1>
        
        <div className="text-lg text-blue-300 mb-3 relative">
          Multi-Digit Operations
        </div>

        <div className="flex items-center gap-4 text-xl relative">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">+</span>
            <span className="text-blue-400">-</span>
            <span className="text-purple-400">×</span>
          </div>
          <span className="text-2xl">🚀</span>
        </div>

        {/* Animated shooting star */}
        <div 
          className="absolute w-1 h-1 bg-white rounded-full animate-[shooting-star_4s_linear_infinite]"
          style={{
            top: '20%',
            left: '-10%',
            boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.3)'
          }}
        />
      </div>

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          @keyframes shooting-star {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(500px, 100px) scale(0); }
          }
        `}
      </style>
    </div>
  );
};

export default SpaceThumbnail; 