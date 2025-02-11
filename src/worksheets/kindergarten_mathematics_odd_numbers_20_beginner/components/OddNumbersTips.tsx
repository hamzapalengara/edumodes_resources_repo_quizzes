import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const OddNumbersTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-emerald-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
            Tips for Finding Odd Numbers
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Strategy 1: Count by Twos */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🔢</span> Count by Twos
              </h2>
              <p className="text-white/90 mb-4">
                Start at 1 and count by 2s to find all odd numbers:
              </p>
              <div className="flex flex-wrap gap-2">
                {[1, 3, 5, 7, 9, 11, 13, 15, 17, 19].map((num) => (
                  <div
                    key={num}
                    className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center font-bold text-white"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy 2: The Odd Number Song */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🎵</span> The Odd Number Song
              </h2>
              <p className="text-white/90 mb-4">
                Sing this fun song to remember odd numbers:
              </p>
              <div className="text-white/90 text-center italic">
                "One and three and five and seven,<br />
                Nine and eleven make me dance!<br />
                Thirteen, fifteen, seventeen, nineteen,<br />
                Odd numbers can't make pairs to prance!"
              </div>
            </div>

            {/* Strategy 3: Fun Ways to Remember */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🎮</span> Fun Ways to Remember
              </h2>
              <p className="text-white/90 mb-4">
                Try to pair up objects. With odd numbers, one will always be alone!
              </p>
              <div className="flex items-center gap-4 justify-center">
                <div className="flex gap-1">⭐⭐⭐⭐⭐</div>
                <span className="text-white">→</span>
                <div className="flex gap-1">⭐⭐ + ⭐⭐ + ⭐</div>
                <span className="text-white/90">(one star is alone!)</span>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Quick Tips
              </h2>
              <ul className="list-disc list-inside space-y-2 text-white/90">
                <li>Odd numbers end in 1, 3, 5, 7, or 9</li>
                <li>When you try to make pairs, one is always left alone</li>
                <li>Between any two even numbers, there's an odd number</li>
                <li>Think of odd numbers as "lonely numbers" that can't find a partner</li>
              </ul>
            </div>

            {/* Encouragement */}
            <div className="text-center text-white/90 italic">
              Remember: Practice makes perfect! Keep playing with numbers and you'll get better at spotting odd ones! 🌟
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddNumbersTips; 