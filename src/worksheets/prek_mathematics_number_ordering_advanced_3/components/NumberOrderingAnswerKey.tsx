import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberOrderingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-indigo-800 mb-6">Answer Key: Number Ordering</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Level Solutions</h2>
            <div className="space-y-6">
              {/* Level 1 */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-600 mb-3">Level 1 (10-13)</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex gap-2 flex-wrap">
                    {[12, 10, 11, 13].map((num, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-indigo-200"
                      >
                        <span className="text-lg font-bold text-indigo-600">{num}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xl">➡️</span>
                  <div className="flex gap-2 flex-wrap">
                    {[10, 11, 12, 13].map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg shadow-sm border-2 border-green-300"
                      >
                        <span className="text-lg font-bold text-indigo-600">{num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level 2 */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-600 mb-3">Level 2 (10-14)</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex gap-2 flex-wrap">
                    {[13, 11, 14, 10, 12].map((num, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-indigo-200"
                      >
                        <span className="text-lg font-bold text-indigo-600">{num}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xl">➡️</span>
                  <div className="flex gap-2 flex-wrap">
                    {[10, 11, 12, 13, 14].map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg shadow-sm border-2 border-green-300"
                      >
                        <span className="text-lg font-bold text-indigo-600">{num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level 3 */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-600 mb-3">Level 3 (10-15)</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex gap-2 flex-wrap">
                    {[12, 15, 10, 14, 11, 13].map((num, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-indigo-200"
                      >
                        <span className="text-lg font-bold text-indigo-600">{num}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xl">➡️</span>
                  <div className="flex gap-2 flex-wrap">
                    {[10, 11, 12, 13, 14, 15].map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg shadow-sm border-2 border-green-300"
                      >
                        <span className="text-lg font-bold text-indigo-600">{num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Learning Points</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">📚</span>
                <span>Teen numbers (10-19) start with the digit 1</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🎯</span>
                <span>Each number is one more than the number before it</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🔢</span>
                <span>The sequence follows the same pattern: 10, 11, 12, 13, 14, 15</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">👥</span>
                <span>Each level gradually introduces more numbers to build confidence</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🎓</span>
                <span>Help children understand the pattern in teen numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🌟</span>
                <span>Use physical objects or number lines to demonstrate the sequence</span>
              </li>
            </ul>
          </section>

          <div className="mt-8 bg-purple-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">
              Progressive Difficulty 📈
            </h3>
            <p className="text-gray-700">
              The worksheet is designed to gradually increase difficulty:
              <br />• Level 1 introduces ordering with four numbers (10-13)
              <br />• Level 2 adds one more number (10-14)
              <br />• Level 3 challenges with six numbers (10-15)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberOrderingAnswerKey; 