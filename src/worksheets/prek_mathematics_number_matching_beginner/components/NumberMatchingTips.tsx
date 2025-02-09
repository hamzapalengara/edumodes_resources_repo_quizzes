import React from 'react';

const NumberMatchingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-100">
      <div className="px-0 md:px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-600 text-center mb-6">
              Tips for Number Matching Game 🎮
            </h1>

            <div className="space-y-6">
              {/* Tip 1 */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-orange-700 mb-2 flex items-center gap-2">
                  <span className="text-2xl">1️⃣</span> Count the Fruits
                </h2>
                <p className="text-gray-600">
                  Look at each fruit card and count how many fruits you see. This will help you match it with the correct number!
                </p>
              </div>

              {/* Tip 2 */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-orange-700 mb-2 flex items-center gap-2">
                  <span className="text-2xl">2️⃣</span> Use Your Fingers
                </h2>
                <p className="text-gray-600">
                  You can use your fingers to count along with the fruits. This makes counting easier and more fun!
                </p>
              </div>

              {/* Tip 3 */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-orange-700 mb-2 flex items-center gap-2">
                  <span className="text-2xl">3️⃣</span> Take Your Time
                </h2>
                <p className="text-gray-600">
                  Don't rush! Take your time to look at each card carefully. It's not a race - it's about learning and having fun!
                </p>
              </div>

              {/* Tip 4 */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-orange-700 mb-2 flex items-center gap-2">
                  <span className="text-2xl">4️⃣</span> Listen to the Numbers
                </h2>
                <p className="text-gray-600">
                  When you click on a card, you'll hear the number. This can help you remember and learn the numbers better!
                </p>
              </div>

              {/* Tip 5 */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-orange-700 mb-2 flex items-center gap-2">
                  <span className="text-2xl">5️⃣</span> Celebrate Success
                </h2>
                <p className="text-gray-600">
                  Every time you make a correct match, celebrate! Watch for the fun animations and keep going until you match them all!
                </p>
              </div>
            </div>

            {/* Parent/Teacher Note */}
            <div className="mt-8 border-t-2 border-orange-100 pt-6">
              <h3 className="text-lg font-semibold text-orange-700 mb-3">
                Note for Parents/Teachers 👥
              </h3>
              <p className="text-gray-600">
                This game helps develop number recognition, counting skills, and matching abilities. 
                Encourage your child to count out loud and use their fingers. Celebrate their successes 
                and help them understand any mistakes. The audio feedback and animations make learning 
                more engaging and fun!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberMatchingTips; 