import React from 'react';

const NumberFillThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-yellow-400 via-green-400 to-blue-400 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                transform: `rotate(${Math.random() * 360}deg)`,
                fontSize: Math.random() * 20 + 20 + 'px',
              }}
            >
              {['🎈', '🎪', '🎠', '🎯', '⭐', '🌟', '🎨', '🎭'][i % 8]}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-indigo-800 mb-4 text-center">
            Number Adventure
          </h1>

          {/* Preview grid */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {[1, '_', 3, '_', 5].map((number, index) => (
              <div
                key={index}
                className={`
                  w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold
                  ${number === '_' 
                    ? 'border-2 border-dashed border-indigo-300 text-indigo-300' 
                    : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 text-indigo-700'}
                `}
              >
                {number}
              </div>
            ))}
          </div>

          {/* Park-themed features */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎯</span>
              <span className="text-sm text-gray-600">Numbers 1-20</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎪</span>
              <span className="text-sm text-gray-600">Fun animations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎈</span>
              <span className="text-sm text-gray-600">Playful feedback</span>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(5deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default NumberFillThumbnail; 