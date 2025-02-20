import React from 'react';

const NumberTracingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6 relative overflow-hidden">
        {/* Background stars */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-200 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ⭐
          </div>
        ))}
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white text-center mb-4">
            Numbers 11-20 Space Adventure
          </h1>
          
          {/* Sample Number with New Stroke Width */}
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="text-3xl text-white">11 → 20</div>
            <svg viewBox="0 0 240 200" className="w-24 h-24">
              <path
                d="M40 40L40 160"
                fill="none"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M160 40L160 160"
                fill="none"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          <div className="flex justify-center gap-3">
            <span className="text-2xl">•</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl">•</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberTracingThumbnail; 