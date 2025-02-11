import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { 
    word: 'RED', 
    emoji: '🔴', 
    hint: 'The color of apples and fire trucks',
    examples: '🍎 🚒 ❤️'
  },
  { 
    word: 'BLUE', 
    emoji: '🔵', 
    hint: 'The color of the sky and ocean',
    examples: '🌊 🦋 🌎'
  },
  { 
    word: 'GREEN', 
    emoji: '🟢', 
    hint: 'The color of grass and leaves',
    examples: '🌿 🌲 🥬'
  },
  { 
    word: 'YELLOW', 
    emoji: '💛', 
    hint: 'The color of the sun and bananas',
    examples: '☀️ 🌻 🍌'
  },
  { 
    word: 'PURPLE', 
    emoji: '💜', 
    hint: 'The color of grapes and eggplants',
    examples: '🍇 🍆 💜'
  },
  { 
    word: 'ORANGE', 
    emoji: '🟧', 
    hint: 'The color of carrots and pumpkins',
    examples: '🥕 🎃 🍊'
  },
  { 
    word: 'PINK', 
    emoji: '💗', 
    hint: 'The color of cotton candy and flamingos',
    examples: '🦩 🌸 🎀'
  },
  { 
    word: 'BROWN', 
    emoji: '🟫', 
    hint: 'The color of chocolate and tree trunks',
    examples: '🌳 🍫 🐻'
  },
  { 
    word: 'BLACK', 
    emoji: '⚫', 
    hint: 'The color of night sky and pandas',
    examples: '🐼 🎩 ⚫'
  },
  { 
    word: 'WHITE', 
    emoji: '⚪', 
    hint: 'The color of snow and clouds',
    examples: '☁️ ❄️ 🥚'
  },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Colors Word Search - Answer Key 🌈
          </h1>
        </div>

        {/* Colors and Their Examples */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Colors in Our World</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORD_LIST.map(({ word, emoji, hint, examples }) => (
              <div 
                key={word}
                className="bg-white/30 rounded-lg p-3"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{emoji}</span>
                  <h3 className="font-bold text-white">{word}</h3>
                </div>
                <p className="text-white/90 mb-2">{hint}</p>
                <div className="text-2xl">{examples}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning About Colors */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Learning About Colors</h2>
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Primary Colors</h3>
              <p className="text-white/90">
                RED, BLUE, and YELLOW are primary colors. They can be mixed to make other colors! 🎨
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Secondary Colors</h3>
              <p className="text-white/90">
                Mix primary colors to make PURPLE, GREEN, and ORANGE! 🖌️
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Colors in Nature</h3>
              <p className="text-white/90">
                Look for colors in flowers, animals, and the sky! 🌈
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4">Teaching Tips</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Color Recognition</h3>
              <p className="text-white/90">
                Ask children to find objects of each color in their environment.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Color Mixing</h3>
              <p className="text-white/90">
                Demonstrate how primary colors mix to create secondary colors.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Color Patterns</h3>
              <p className="text-white/90">
                Create patterns using different colors to reinforce recognition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 