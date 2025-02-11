import React from 'react';

const LowercaseVowelsThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-400 to-purple-600 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {['a', 'e', 'i', 'o', 'u'][i % 5]}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-purple-800 mb-4 text-center">
            Find the Vowels
          </h1>

          {/* Preview grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { letter: 'a', isVowel: true },
              { letter: 'b', isVowel: false },
              { letter: 'e', isVowel: true },
              { letter: 'f', isVowel: false },
              { letter: 'i', isVowel: true },
              { letter: 'm', isVowel: false },
            ].map((item, index) => (
              <div
                key={index}
                className={`
                  w-full aspect-square rounded-lg flex items-center justify-center text-2xl font-bold
                  ${item.isVowel 
                    ? 'bg-green-500 text-white' 
                    : 'bg-purple-100 text-purple-800'}
                `}
              >
                {item.letter}
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎯</span>
              <span className="text-sm text-gray-600">Find lowercase vowels</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔊</span>
              <span className="text-sm text-gray-600">Voice guidance</span>
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

export default LowercaseVowelsThumbnail; 