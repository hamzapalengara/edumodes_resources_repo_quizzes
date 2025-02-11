import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const OddNumbersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-emerald-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
            Odd Numbers (1-20) - Answer Key
          </h1>

          {/* Odd Numbers Display */}
          <div className="grid grid-cols-5 gap-2 mb-8">
            {[1, 3, 5, 7, 9, 11, 13, 15, 17, 19].map((num) => (
              <div
                key={num}
                className="w-full aspect-square rounded-lg bg-green-500 
                         flex flex-col items-center justify-center p-2"
              >
                <span className="text-3xl font-bold text-white">
                  {num}
                </span>
              </div>
            ))}
          </div>

          {/* Tips and Explanations */}
          <div className="space-y-4">
            <div className="p-4 bg-white/10 rounded-lg">
              <h2 className="font-bold text-white mb-2">How to Identify Odd Numbers</h2>
              <ul className="list-disc list-inside space-y-2 text-white/90">
                <li>Odd numbers cannot be divided evenly by 2</li>
                <li>When you try to make pairs, there's always one left over</li>
                <li>Odd numbers end in 1, 3, 5, 7, or 9</li>
                <li>Between any two even numbers, there's an odd number</li>
              </ul>
            </div>

            <div className="p-4 bg-white/10 rounded-lg">
              <h2 className="font-bold text-white mb-2">Visual Examples</h2>
              <div className="space-y-2 text-white/90">
                <p>When you try to split odd numbers into equal groups:</p>
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span>→</span>
                  <div className="flex gap-1">
                    ⭐⭐ + ⭐⭐ + ⭐
                  </div>
                  <span className="text-sm">(5 can't be split evenly)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/10 rounded-lg">
              <h2 className="font-bold text-white mb-2">Quick Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-white/90">
                <li>Count by 2s starting from 1: 1, 3, 5, 7, ...</li>
                <li>Look at the last digit to quickly identify odd numbers</li>
                <li>Remember: odd + odd = even</li>
                <li>Think of odd numbers as "lonely numbers" that can't make equal pairs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddNumbersAnswerKey; 