import React from 'react';

const WordUnscrambleThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-400 via-yellow-300 to-purple-400 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-xl p-6 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-2 left-2 text-4xl opacity-20">👀</div>
          <div className="absolute top-2 right-2 text-4xl opacity-20">👂</div>
          <div className="absolute bottom-2 left-2 text-4xl opacity-20">🦶</div>
          <div className="absolute bottom-2 right-2 text-4xl opacity-20">🤚</div>
        </div>

        <div className="relative flex flex-col items-center space-y-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-pink-600 text-center">
            Body Parts Word Fun
          </h1>

          {/* Preview */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-4xl animate-bounce">💪</span>
            <span className="text-2xl font-bold text-purple-600">→</span>
            <div className="flex space-x-2">
              {['A', 'R', 'M'].map((letter, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-pink-300 rounded-lg flex items-center justify-center font-bold text-pink-600"
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 text-center mt-2">
            Learn body parts with fun animations!
          </p>

          {/* Level Indicator */}
          <div className="flex space-x-2 mt-2">
            {[1, 2, 3].map((level) => (
              <div
                key={level}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-100 to-purple-100 border-2 border-yellow-300 flex items-center justify-center text-sm font-bold text-yellow-600"
              >
                {level}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleThumbnail; 