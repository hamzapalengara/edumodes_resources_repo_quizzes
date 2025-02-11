import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-yellow-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* How to Play */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            How to Play 🎮
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="font-bold">1.</span>
                <p>Look at the list of exotic fruits you need to find.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold">2.</span>
                <p>Words can be found going across (→) or down (↓) in the grid.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold">3.</span>
                <p>Touch and drag your finger over the letters to select a word.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold">4.</span>
                <p>When you find a word, it will light up and show a fruit emoji! 🎉</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Helpful Strategies */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Helpful Strategies 💡
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span>•</span>
                <p>Start with short words like "FIG" and "STAR" - they're easier to spot!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <p>Look for the first letter of each word in the grid.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <p>Use your finger to follow each row and column carefully.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <p>Take your time - it's not a race! 🐢</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Fun Fruit Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun Fruit Facts 🍎
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span>🐉</span>
                <p>Dragon fruit got its name because its outer skin looks like dragon scales!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>⭐</span>
                <p>Star fruit is shaped like a star when you cut it into slices!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🍌</span>
                <p>Bananas don't grow on trees - they grow on plants that are actually giant herbs!</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Reminders */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Remember 🌟
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span>🎯</span>
                <p>Every word you find makes you better at reading!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌈</span>
                <p>Have fun learning about different fruits from around the world!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🎉</span>
                <p>Celebrate each word you find - you're doing great!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 