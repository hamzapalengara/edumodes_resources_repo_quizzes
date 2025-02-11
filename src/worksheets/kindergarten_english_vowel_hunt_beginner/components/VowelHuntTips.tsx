import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const VowelHuntTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
            Vowel Hunt - Tips for Success
          </h1>

          {/* Strategy 1 */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 mb-4">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>🎯</span> Remember Your Vowels
            </h2>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {['A', 'E', 'I', 'O', 'U'].map((vowel) => (
                <div
                  key={vowel}
                  className="bg-white/20 rounded-lg p-2 text-center"
                >
                  <span className="text-2xl font-bold text-yellow-300">
                    {vowel}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-white">
              These are your five vowel friends. Look for them in the grid!
            </p>
          </div>

          {/* Strategy 2 */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 mb-4">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>🎮</span> Game Strategy
            </h2>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Start by finding the easiest vowels you know</li>
              <li>Take your time - there's no rush!</li>
              <li>If you make a mistake, learn from it</li>
              <li>Listen to the sounds when letters are spoken</li>
            </ul>
          </div>

          {/* Strategy 3 */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 mb-4">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>🌈</span> Color Clues
            </h2>
            <div className="space-y-2 text-white">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                <span>Green means you found a vowel - Great job!</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-500/50"></div>
                <span>Red means it's not a vowel - Keep looking!</span>
              </div>
            </div>
          </div>

          {/* Strategy 4 */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 mb-4">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>🎵</span> Sound It Out
            </h2>
            <p className="text-white">
              Vowels make special sounds. Try saying each letter's sound:
            </p>
            <div className="mt-2 space-y-1">
              <div className="bg-white/20 rounded-lg p-2 text-white">
                "A" as in "apple" 🍎
              </div>
              <div className="bg-white/20 rounded-lg p-2 text-white">
                "E" as in "elephant" 🐘
              </div>
              <div className="bg-white/20 rounded-lg p-2 text-white">
                "I" as in "igloo" 🏠
              </div>
              <div className="bg-white/20 rounded-lg p-2 text-white">
                "O" as in "orange" 🍊
              </div>
              <div className="bg-white/20 rounded-lg p-2 text-white">
                "U" as in "umbrella" ☔
              </div>
            </div>
          </div>

          {/* Encouragement */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              You Can Do It! 🌟
            </h2>
            <p className="text-white">
              Remember, practice makes perfect. The more you play, the better you'll get at finding vowels!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VowelHuntTips; 