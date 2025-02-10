import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberFillAnswerKey: React.FC = () => {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-6">
            Answer Key: Numbers 1-20
          </h1>

          {/* Complete Number Display */}
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-0.5 md:gap-4 mb-8">
            {numbers.map((number, index) => (
              <div
                key={index}
                className="w-full aspect-square rounded-lg border-2 border-indigo-200 
                         bg-gradient-to-br from-indigo-50 to-purple-50 
                         flex items-center justify-center text-2xl font-bold text-indigo-700"
              >
                {number}
              </div>
            ))}
          </div>

          {/* Tips and Explanations */}
          <div className="space-y-4 text-gray-600">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h2 className="font-bold text-yellow-800 mb-2">Number Patterns</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Numbers increase by 1 each time</li>
                <li>Every fifth number ends in 5 or 0</li>
                <li>Even numbers end in 2, 4, 6, 8, or 0</li>
                <li>Odd numbers end in 1, 3, 5, 7, or 9</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h2 className="font-bold text-green-800 mb-2">Number Groups</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-green-700 mb-1">First Ten (1-10)</h3>
                  <div className="flex flex-wrap gap-2">
                    {numbers.slice(0, 10).map(n => (
                      <span key={n} className="bg-white px-2 py-1 rounded-md text-green-600">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-green-700 mb-1">Second Ten (11-20)</h3>
                  <div className="flex flex-wrap gap-2">
                    {numbers.slice(10, 20).map(n => (
                      <span key={n} className="bg-white px-2 py-1 rounded-md text-green-600">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h2 className="font-bold text-blue-800 mb-2">Fun Facts</h2>
              <div className="space-y-2">
                <div>
                  <span className="font-bold text-blue-700">Even Numbers:</span>
                  <span className="ml-2">2, 4, 6, 8, 10, 12, 14, 16, 18, 20</span>
                </div>
                <div>
                  <span className="font-bold text-blue-700">Odd Numbers:</span>
                  <span className="ml-2">1, 3, 5, 7, 9, 11, 13, 15, 17, 19</span>
                </div>
                <div>
                  <span className="font-bold text-blue-700">Counting by 5s:</span>
                  <span className="ml-2">5, 10, 15, 20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberFillAnswerKey; 