import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberOrderingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-purple-800 mb-6">Answer Key: Number Ordering</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Correct Number Order</h2>
            <div className="flex justify-center gap-4 mb-6">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-lg shadow-sm border-2 border-purple-300"
                >
                  <span className="text-2xl font-bold text-purple-800">{num}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600">
              Numbers should be arranged from smallest (1) to largest (3)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Learning Points</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">📚</span>
                <span>Numbers get bigger as we count forward: 1, 2, 3</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎯</span>
                <span>The smallest number (1) comes first</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔢</span>
                <span>Each number is one more than the number before it</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">👥</span>
                <span>Help children understand that numbers follow a specific order</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎓</span>
                <span>Practice counting forward and backward to reinforce number sequence</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🌟</span>
                <span>Use physical objects to demonstrate counting and ordering</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberOrderingAnswerKey; 