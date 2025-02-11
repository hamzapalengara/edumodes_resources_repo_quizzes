import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordOppositesTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-6">
            Space Opposites - Tips for Success
          </h1>

          <div className="space-y-6">
            {/* Strategy 1 */}
            <div className="bg-black/20 rounded-lg p-4 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-2 flex items-center gap-2">
                <span>🎯</span> Focus on One Pair at a Time
              </h2>
              <p className="text-blue-100">
                Take your time to study each word pair. Look at the emojis and think about how they
                relate to the words. For example, when you see ✨ (bright) and 🌑 (dark), imagine
                a bright star shining in the dark night sky.
              </p>
            </div>

            {/* Strategy 2 */}
            <div className="bg-black/20 rounded-lg p-4 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-2 flex items-center gap-2">
                <span>🔄</span> Use Memory Patterns
              </h2>
              <p className="text-blue-100">
                Create a mental picture for each pair. For example:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-blue-100">
                <li>Near (🛸) and Far (🌌): Imagine a spaceship traveling from nearby to distant galaxies</li>
                <li>Heavy (🪨) and Light (☁️): Picture an asteroid versus floating space dust</li>
                <li>Cold (❄️) and Hot (🔥): Think about the temperature differences in space</li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-black/20 rounded-lg p-4 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-2 flex items-center gap-2">
                <span>🎮</span> Game Strategies
              </h2>
              <ul className="list-disc list-inside space-y-1 text-blue-100">
                <li>Start with the pairs you remember best</li>
                <li>Use the emojis as visual clues</li>
                <li>If you make a mistake, try to remember why it was wrong</li>
                <li>Listen carefully to the words when they are spoken</li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-black/20 rounded-lg p-4 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-2 flex items-center gap-2">
                <span>🌟</span> Practice Ideas
              </h2>
              <ul className="list-disc list-inside space-y-1 text-blue-100">
                <li>Create your own sentences using the word pairs</li>
                <li>Draw pictures to represent each opposite pair</li>
                <li>Make up stories about space using these words</li>
                <li>Share what you learn with friends and family</li>
              </ul>
            </div>

            {/* Encouragement */}
            <div className="bg-blue-900/30 rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold text-blue-300 mb-2">
                You're Ready for Launch! 🚀
              </h2>
              <p className="text-blue-100">
                Remember, learning opposites is like exploring space - take it one step at a time,
                and soon you'll be a master of these cosmic word pairs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesTips; 