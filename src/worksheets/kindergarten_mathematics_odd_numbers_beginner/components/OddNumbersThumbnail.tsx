import React from 'react';

const OddNumbersThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-teal-400 to-emerald-600 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          {[1, 3, 5, 7, 9].map((num, i) => (
            <div
              key={i}
              className="absolute text-4xl font-bold"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-teal-800 mb-4 text-center">
            Find Odd Numbers
          </h1>

          {/* Preview grid */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className={`
                  w-full aspect-square rounded-lg flex items-center justify-center text-2xl font-bold
                  ${num % 2 === 1 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-teal-100 text-teal-800'}
                `}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎯</span>
              <span className="text-sm text-gray-600">Find numbers 1-10</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔢</span>
              <span className="text-sm text-gray-600">Identify odd numbers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✨</span>
              <span className="text-sm text-gray-600">Fun animations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddNumbersThumbnail; 