import React from 'react';
import dragonFruitImage from '../assets/dragon-fruit.png';

const FruitLettersThumbnail: React.FC = () => {
  // Sample fruits for thumbnail preview
  const previewFruits = [
    { emoji: '🍎', letter: 'A' },
    { image: dragonFruitImage, letter: 'D' },
    { emoji: '🍒', letter: 'C' },
  ];

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-4">
        {/* Title */}
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          Match Fruit Letters
        </h1>

        {/* Preview Grid */}
        <div className="flex justify-center items-center gap-4">
          {previewFruits.map((fruit, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              {/* Fruit Image/Emoji */}
              <div className="text-4xl mb-2">
                {fruit.emoji ? (
                  <span>{fruit.emoji}</span>
                ) : (
                  <img 
                    src={fruit.image} 
                    alt="Dragon Fruit"
                    className="w-12 h-12 object-contain"
                  />
                )}
              </div>

              {/* Letter Box */}
              <div className="w-10 h-10 border-4 border-white/70 rounded-lg flex items-center justify-center bg-white/50">
                <span className="text-xl font-bold text-green-700">
                  {fruit.letter}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Range Indicator */}
        <div className="text-white text-center mt-4">
          A → W
        </div>
      </div>
    </div>
  );
};

export default FruitLettersThumbnail; 