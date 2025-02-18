import React from 'react';

const LowercaseFillThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-teal-400 to-emerald-400 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Background bubbles */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-teal-500"
              style={{
                width: Math.random() * 40 + 20,
                height: Math.random() * 40 + 20,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-teal-800 mb-4 text-center">
            Lowercase Letters Adventure
          </h1>

          {/* Preview grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['a', '_', 'c', '_', 'e', '_', 'g'].map((letter, index) => (
              <div
                key={index}
                className={`
                  w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold
                  ${letter === '_' 
                    ? 'border-2 border-dashed border-teal-300 text-teal-300' 
                    : 'bg-teal-50 border-2 border-teal-200 text-teal-700'}
                `}
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Ocean-themed features */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌊</span>
              <span className="text-sm text-gray-600">Ocean-themed learning</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🐠</span>
              <span className="text-sm text-gray-600">Interactive feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🐚</span>
              <span className="text-sm text-gray-600">Fun animations</span>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default LowercaseFillThumbnail; 