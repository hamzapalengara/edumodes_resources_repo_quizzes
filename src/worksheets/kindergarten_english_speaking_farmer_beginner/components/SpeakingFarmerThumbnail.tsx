import React from 'react';

const SpeakingFarmerThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-green-400 to-yellow-400 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="text-4xl mb-4 flex items-center gap-4">
          <span role="img" aria-label="farmer">👨‍🌾</span>
          <span role="img" aria-label="speech">💭</span>
          <span role="img" aria-label="kid">🧑</span>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-green-600 mb-4">
          Speaking with Farmer
        </h1>

        <div className="flex items-center justify-center gap-3 text-lg text-green-500">
          <span>Learn</span>
          <span>→</span>
          <span>Speak</span>
          <span>→</span>
          <span>Practice</span>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {['🌱', '🐄', '🥕', '🐔', '🍎'].map((emoji, index) => (
            <span 
              key={index}
              className="text-2xl"
              role="img"
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakingFarmerThumbnail; 