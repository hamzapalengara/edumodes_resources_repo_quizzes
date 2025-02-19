import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const GolfMultiplicationAnswerKey: React.FC = () => {
  // Generate multiplication facts for 10 times table
  const facts = Array.from({ length: 10 }, (_, i) => ({
    num1: 10,
    num2: i + 1,
    answer: 10 * (i + 1)
  }));

  return (
    <div className="min-h-screen bg-emerald-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-emerald-200 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  10 Times Table Answer Key 🏌️
                </h1>
              </div>

              <div className="p-4 md:p-6">
                {/* Multiplication Facts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facts.map(({ num1, num2, answer }) => (
                    <div 
                      key={num2}
                      className="bg-emerald-50 rounded-lg p-4 border border-emerald-200 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 flex items-center justify-center bg-emerald-600 text-white rounded-full font-bold">
                          {num2}
                        </span>
                        <span className="text-lg font-medium">
                          {num1} × {num2} = {answer}
                        </span>
                      </div>
                      <span className="text-emerald-600">⛳</span>
                    </div>
                  ))}
                </div>

                {/* Pattern Explanation */}
                <div className="mt-6 bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h2 className="text-xl font-bold text-emerald-800 mb-3">
                    Pattern Explanation 🎯
                  </h2>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>When multiplying by 10, just add a zero to the number!</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Example: 4 × 10 = 40 (add 0 to 4)</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>The answers increase by 10 each time: 10, 20, 30, 40...</span>
                    </p>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="mt-6 bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h2 className="text-xl font-bold text-emerald-800 mb-3">
                    Quick Tips for Memorization 🌟
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">1.</span>
                      <span>Practice counting by 10s regularly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">2.</span>
                      <span>Notice that all answers end in zero</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">3.</span>
                      <span>The first digit is the same as the number being multiplied</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default GolfMultiplicationAnswerKey; 