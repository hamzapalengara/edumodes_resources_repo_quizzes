import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberOrderingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-teal-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-sky-800 mb-6">Answer Key: Number Ordering</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Correct Number Order</h2>
            <div className="flex justify-center gap-4 mb-6">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-lg shadow-sm border-2 border-teal-300"
                >
                  <span className="text-2xl font-bold text-sky-800">{num}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600">
              Numbers should be arranged from smallest (1) to largest (4)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Level Solutions</h2>
            <div className="space-y-4">
              {[
                { level: "Level 1", numbers: [2, 1, 4, 3] },
                { level: "Level 2", numbers: [4, 3, 1, 2] },
                { level: "Level 3", numbers: [3, 4, 2, 1] }
              ].map((level, index) => (
                <div key={index} className="bg-sky-50 rounded-lg p-4">
                  <h3 className="font-semibold text-sky-600 mb-2">{level.level}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      {level.numbers.map((num, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-sky-200"
                        >
                          <span className="text-xl font-bold text-sky-600">{num}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-xl">➡️</span>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <div
                          key={num}
                          className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg shadow-sm border-2 border-teal-300"
                        >
                          <span className="text-xl font-bold text-sky-600">{num}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Learning Points</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">📚</span>
                <span>Numbers get bigger as we count forward: 1, 2, 3, 4</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">🎯</span>
                <span>Each number is one more than the number before it</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">🔢</span>
                <span>The sequence stays the same no matter how mixed up they start</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">👥</span>
                <span>Each level increases in complexity with different starting arrangements</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">🎓</span>
                <span>Help children understand that the correct order is always the same</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">🌟</span>
                <span>Use physical objects to demonstrate number sequences</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberOrderingAnswerKey; 