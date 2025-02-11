import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 to-amber-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Main Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white mb-4">Tips for Finding Home Words</h2>
          
          <div className="space-y-4">
            {/* Tip 1 */}
            <div className="bg-white/30 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🏠</span>
                <h3 className="text-xl font-bold text-white">Look Around Your Home</h3>
              </div>
              <p className="text-white">
                Think about things you see in your house! Each word is something you can find at home.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white/30 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">➡️</span>
                <h3 className="text-xl font-bold text-white">Read Left to Right</h3>
              </div>
              <p className="text-white">
                Some words go across from left to right, just like when you read a book!
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-white/30 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">⬇️</span>
                <h3 className="text-xl font-bold text-white">Look Up and Down</h3>
              </div>
              <p className="text-white">
                Some words go down from top to bottom. Try looking up and down to find them!
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-white/30 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🎯</span>
                <h3 className="text-xl font-bold text-white">Start with Short Words</h3>
              </div>
              <p className="text-white">
                Look for short words like 'BED' and 'TOY' first. They're easier to find!
              </p>
            </div>

            {/* Tip 5 */}
            <div className="bg-white/30 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🌈</span>
                <h3 className="text-xl font-bold text-white">Watch the Colors</h3>
              </div>
              <p className="text-white">
                When you find a word, it changes color! Each home word gets its own special color.
              </p>
            </div>
          </div>
        </div>

        {/* How to Play */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h3 className="text-xl font-bold text-white mb-2">How to Play</h3>
          <ul className="text-white space-y-2">
            <li className="flex items-center">
              <span className="text-xl mr-2">1️⃣</span>
              Touch and hold a letter
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">2️⃣</span>
              Slide your finger to the next letter
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">3️⃣</span>
              Let go when you find a home word
            </li>
          </ul>
        </div>

        {/* Encouragement */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">You Can Do It! 🏠</h3>
            <p className="text-white">
              Take your time and have fun finding words from your home! Each word you find helps you become a better reader!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 