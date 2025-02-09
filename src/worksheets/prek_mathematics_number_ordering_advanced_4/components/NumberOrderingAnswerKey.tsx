import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberOrderingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-teal-800 mb-6">Answer Key: Number Ordering</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-teal-700 mb-4">Level Solutions</h2>
            <div className="space-y-6">
              {/* Level 1 */}
              <div className="bg-teal-50 rounded-lg p-4">
                <h3 className="font-semibold text-teal-600 mb-3">Level 1 (15-17)</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex gap-2 flex-wrap">
                    {[16, 15, 17].map((num, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-teal-200"
                      >
                        <span className="text-lg font-bold text-teal-600">{num}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xl">➡️</span>
                  <div className="flex gap-2 flex-wrap">
                    {[15, 16, 17].map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg shadow-sm border-2 border-green-300"
                      >
                        <span className="text-lg font-bold text-teal-600">{num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level 2 */}
              <div className="bg-teal-50 rounded-lg p-4">
                <h3 className="font-semibold text-teal-600 mb-3">Level 2 (15-18)</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex gap-2 flex-wrap">
                    {[17, 15, 18, 16].map((num, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-teal-200"
                      >
                        <span className="text-lg font-bold text-teal-600">{num}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xl">➡️</span>
                  <div className="flex gap-2 flex-wrap">
                    {[15, 16, 17, 18].map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg shadow-sm border-2 border-green-300"
                      >
                        <span className="text-lg font-bold text-teal-600">{num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level 3 */}
              <div className="bg-teal-50 rounded-lg p-4">
                <h3 className="font-semibold text-teal-600 mb-3">Level 3 (15-20)</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex gap-2 flex-wrap">
                    {[17, 20, 15, 19, 16, 18].map((num, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-teal-200"
                      >
                        <span className="text-lg font-bold text-teal-600">{num}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xl">➡️</span>
                  <div className="flex gap-2 flex-wrap">
                    {[15, 16, 17, 18, 19, 20].map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg shadow-sm border-2 border-green-300"
                      >
                        <span className="text-lg font-bold text-teal-600">{num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-teal-700 mb-4">Learning Points</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">📚</span>
                <span>Teen numbers (15-20) continue the pattern after 14</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🎯</span>
                <span>Each number is one more than the number before it</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🔢</span>
                <span>The sequence follows the same pattern: 15, 16, 17, 18, 19, 20</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">👥</span>
                <span>Each level gradually introduces more numbers to build confidence</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🎓</span>
                <span>Help children understand that these numbers follow the same pattern as earlier teen numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🌟</span>
                <span>Use physical objects or number lines to demonstrate the sequence</span>
              </li>
            </ul>
          </section>

          <div className="mt-8 bg-cyan-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-teal-700 mb-2">
              Progressive Difficulty 📈
            </h3>
            <p className="text-gray-700">
              The worksheet is designed to gradually increase difficulty:
              <br />• Level 1 introduces ordering with three numbers (15-17)
              <br />• Level 2 adds one more number (15-18)
              <br />• Level 3 challenges with six numbers (15-20)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberOrderingAnswerKey; 