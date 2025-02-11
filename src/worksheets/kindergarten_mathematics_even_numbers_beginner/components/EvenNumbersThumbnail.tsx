import React from 'react';

const EvenNumbersThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-purple-400 to-indigo-600 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          {[2, 4, 6, 8, 10].map((num, i) => (
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
          <h1 className="text-2xl font-bold text-purple-800 mb-4 text-center">
            Find Even Numbers
          </h1>

          {/* Preview grid */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {[6, 7, 8, 9, 10].map((num) => (
              <div
                key={num}
                className={`
                  w-full aspect-square rounded-lg flex items-center justify-center text-2xl font-bold
                  ${num % 2 === 0 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-purple-100 text-purple-800'}
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
              <span className="text-sm text-gray-600">Identify even numbers</span>
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

export default EvenNumbersThumbnail; 