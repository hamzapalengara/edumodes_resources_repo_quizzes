import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberOrderingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-emerald-800 mb-6">Answer Key: Number Ordering</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Correct Number Order</h2>
            <div className="flex justify-center gap-4 mb-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-lg shadow-sm border-2 border-green-300"
                >
                  <span className="text-2xl font-bold text-emerald-800">{num}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600">
              Numbers should be arranged from smallest (1) to largest (5)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Level Solutions</h2>
            <div className="space-y-4">
              {[
                { level: "Level 1", numbers: [2, 1, 4, 3, 5] },
                { level: "Level 2", numbers: [5, 3, 1, 2, 4] },
                { level: "Level 3", numbers: [3, 5, 2, 1, 4] }
              ].map((level, index) => (
                <div key={index} className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-600 mb-2">{level.level}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      {level.numbers.map((num, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-emerald-200"
                        >
                          <span className="text-lg font-bold text-emerald-600">{num}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-xl">➡️</span>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <div
                          key={num}
                          className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg shadow-sm border-2 border-green-300"
                        >
                          <span className="text-lg font-bold text-emerald-600">{num}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Learning Points</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">📚</span>
                <span>Numbers get bigger as we count forward: 1, 2, 3, 4, 5</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🎯</span>
                <span>Each number is one more than the number before it</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🔢</span>
                <span>The sequence stays the same no matter how mixed up they start</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">👥</span>
                <span>Each level increases in complexity with different starting arrangements</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🎓</span>
                <span>Help children understand that the correct order is always the same</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🌟</span>
                <span>Use physical objects to demonstrate number sequences up to 5</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberOrderingAnswerKey; 