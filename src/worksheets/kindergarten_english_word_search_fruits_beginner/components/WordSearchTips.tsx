import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-yellow-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            How to Play the Fruit Word Search 🍎
          </h1>
        </div>

        {/* How to Play */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">How to Play</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">1. Find the Words</h3>
              <p className="text-white/80">
                Look at the list of fruit words on the right side of the game. These are
                the words you need to find in the letter grid.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">2. Search the Grid</h3>
              <p className="text-white/80">
                Words can be found in two ways:
                <br />• Going across from left to right (➡️)
                <br />• Going down from top to bottom (⬇️)
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">3. Select Words</h3>
              <p className="text-white/80">
                When you find a word:
                <br />• Touch or click the first letter
                <br />• Drag to the last letter
                <br />• Release to select the word
              </p>
            </div>
          </div>
        </div>

        {/* Helpful Strategies */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Helpful Strategies</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Look for First Letters</h3>
              <p className="text-white/80">
                Start by finding the first letter of each fruit. For example, look for 'A'
                when searching for 'APPLE' 🍎.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Go Row by Row</h3>
              <p className="text-white/80">
                Search one row at a time, then go column by column. This helps you not miss
                any words!
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Use the Emojis</h3>
              <p className="text-white/80">
                The fruit emojis can help you remember what words you're looking for. Match
                the emoji to the word!
              </p>
            </div>
          </div>
        </div>

        {/* Fun Fruit Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Fun Fruit Facts</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <p className="text-white/80">
                🍎 Apples float in water because they are 25% air!
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <p className="text-white/80">
                🍇 Grapes can be made into juice, jelly, and raisins!
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <p className="text-white/80">
                🥝 Kiwis have more vitamin C than oranges!
              </p>
            </div>
          </div>
        </div>

        {/* Remember */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Remember</h2>
          <div className="bg-white/30 rounded-lg p-3">
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Take your time - it's not a race! 🐢</li>
              <li>Celebrate each word you find! 🎉</li>
              <li>Ask for help if you need it! 🤝</li>
              <li>Have fun learning about fruits! 🍎</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 