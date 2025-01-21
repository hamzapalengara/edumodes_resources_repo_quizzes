import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const MemoryTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="flex flex-col items-center max-w-2xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
            Tips for Memory Masters 🧠
          </h1>

          {/* Student Tips */}
          <div className="w-full space-y-6">
            {/* Strategy Tips */}
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-100">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Game Strategies
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-xl mr-3">1.</span>
                  <div>
                    <p className="font-bold text-blue-700">Look Carefully</p>
                    <p className="text-blue-600">Take a good look at each animal when it's shown. What makes it special?</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">2.</span>
                  <div>
                    <p className="font-bold text-blue-700">Remember the Spots</p>
                    <p className="text-blue-600">Try to remember where each animal is hiding. Is it at the top? Bottom? Corner?</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">3.</span>
                  <div>
                    <p className="font-bold text-blue-700">Take Your Time</p>
                    <p className="text-blue-600">Don't rush! It's okay to think before you pick a card.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Memory Tricks */}
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-100">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">✨</span>
                Memory Tricks
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-xl mr-3">1.</span>
                  <div>
                    <p className="font-bold text-purple-700">Name the Animals</p>
                    <p className="text-purple-600">Say the animal names in your head when you see them. This helps you remember!</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">2.</span>
                  <div>
                    <p className="font-bold text-purple-700">Make a Story</p>
                    <p className="text-purple-600">Make up a fun story about where you saw the animals. "The puppy was in the top corner!"</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">3.</span>
                  <div>
                    <p className="font-bold text-purple-700">Group Similar Cards</p>
                    <p className="text-purple-600">Try to remember which animals are near each other.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bonus Points Tips */}
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-100">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                Getting Bonus Points
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-xl mr-3">1.</span>
                  <div>
                    <p className="font-bold text-green-700">Be Quick!</p>
                    <p className="text-green-600">Find matches quickly to earn 5 extra points! You have 3 seconds for each match.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">2.</span>
                  <div>
                    <p className="font-bold text-green-700">Practice Makes Perfect</p>
                    <p className="text-green-600">The more you play, the better you'll get at remembering where the animals are!</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-3">3.</span>
                  <div>
                    <p className="font-bold text-green-700">Stay Focused</p>
                    <p className="text-green-600">Keep your eyes on the game and listen to the friendly voice that helps you!</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fun Facts */}
            <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-100">
              <h2 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                Fun Facts
              </h2>
              <ul className="space-y-4 text-yellow-700">
                <li>Playing memory games helps your brain grow stronger! 🧠</li>
                <li>The more you practice, the better your memory becomes! 📈</li>
                <li>Memory champions use the same tricks you're learning! 🏆</li>
                <li>Your brain can remember more than you think! 💪</li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default MemoryTips; 