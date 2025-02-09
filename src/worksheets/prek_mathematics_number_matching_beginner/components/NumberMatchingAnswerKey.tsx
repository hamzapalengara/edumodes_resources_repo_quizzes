import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const FRUITS = ['🍎', '🍌', '🍊', '🍇', '🍓'];

// Helper to render multiple fruits
const renderFruits = (emoji: string, count: number) => {
  return (
    <div className="grid grid-cols-3 gap-0.5 place-items-center">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="text-2xl md:text-3xl">
          {emoji}
        </span>
      ))}
    </div>
  );
};

const NumberMatchingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-100">
      {/* Standard Header */}
      <WorksheetHeader />

      <div className="px-0 md:px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-600 text-center mb-6">
              Number Matching - Answer Key 🔑
            </h1>

            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((number, index) => (
                <div key={number} className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-orange-200">
                        <span className="text-4xl font-bold text-orange-600">
                          {number}
                        </span>
                      </div>
                      <span className="text-2xl">=</span>
                      <div className="w-24 h-24 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-orange-200 p-2">
                        {renderFruits(FRUITS[index], number)}
                      </div>
                    </div>
                    <div className="text-gray-600">
                      <span className="text-sm md:text-base">
                        {number} {number === 1 ? 'fruit' : 'fruits'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Points */}
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold text-orange-700">
                Learning Points 📚
              </h2>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Count the fruits in each group to find its matching number
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Practice counting from 1 to 5 with different fruits
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Learn to recognize numbers and their corresponding quantities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Develop one-to-one counting skills
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-8 border-t-2 border-orange-100 pt-6">
              <h3 className="text-lg font-semibold text-orange-700 mb-3">
                Additional Notes for Parents/Teachers 📝
              </h3>
              <div className="text-gray-600 space-y-3">
                <p>
                  This worksheet helps children develop:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Number recognition (1-5)</li>
                  <li>Counting skills</li>
                  <li>One-to-one correspondence</li>
                  <li>Visual discrimination</li>
                  <li>Memory and concentration</li>
                </ul>
                <p className="mt-4 bg-orange-50 p-4 rounded-lg">
                  <strong>Teaching Tip:</strong> Encourage children to count out loud as they touch each fruit. 
                  This helps reinforce one-to-one correspondence and makes counting more concrete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberMatchingAnswerKey; 