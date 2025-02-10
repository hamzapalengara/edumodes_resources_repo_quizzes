import React from 'react';
import { SPACE_EMOJIS } from './EmojiHelper';

const WordUnscrambleThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-xl p-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-blue-600 text-center">
            Space Word Explorer
          </h1>

          {/* Preview */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-4xl">{SPACE_EMOJIS.rocket}</span>
            <span className="text-2xl">→</span>
            <span className="text-2xl font-bold text-blue-600">ROCKET</span>
          </div>

          {/* Scrambled Letters */}
          <div className="flex items-center justify-center space-x-2">
            {['T', 'K', 'O', 'C', 'R', 'E'].map((letter, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-blue-100 border-2 border-blue-300 rounded-lg flex items-center justify-center font-bold text-blue-600"
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 text-center mt-2">
            Unscramble space words with fun animations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleThumbnail; 