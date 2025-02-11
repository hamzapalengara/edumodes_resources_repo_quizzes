import React from 'react';

const VowelHuntThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-400 to-purple-600 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white/20 backdrop-blur-sm rounded-xl p-4 flex flex-col">
        {/* Title */}
        <h1 className="text-2xl font-bold text-white text-center mb-2">
          Vowel Hunt
        </h1>
        <p className="text-white/90 text-center text-sm mb-4">
          Find all the vowel letters
        </p>

        {/* Preview Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { letter: 'A', isVowel: true },
            { letter: 'B', isVowel: false },
            { letter: 'E', isVowel: true },
            { letter: 'F', isVowel: false },
            { letter: 'I', isVowel: true },
            { letter: 'M', isVowel: false },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                w-full aspect-square rounded-lg flex items-center justify-center text-2xl font-bold
                ${item.isVowel 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white/90 text-purple-900'}
              `}
            >
              {item.letter}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex justify-center gap-4">
          <div className="flex items-center text-white text-xs">
            <span className="text-lg mr-1">🎯</span>
            Find Vowels
          </div>
          <div className="flex items-center text-white text-xs">
            <span className="text-lg mr-1">🔊</span>
            Voice Guide
          </div>
          <div className="flex items-center text-white text-xs">
            <span className="text-lg mr-1">🎨</span>
            Color Match
          </div>
        </div>
      </div>
    </div>
  );
};

export default VowelHuntThumbnail; 