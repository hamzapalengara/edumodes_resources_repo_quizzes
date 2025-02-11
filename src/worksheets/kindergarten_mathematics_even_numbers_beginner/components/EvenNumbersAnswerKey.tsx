import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const EVEN_NUMBERS = [2, 4, 6, 8, 10];
const ODD_NUMBERS = [1, 3, 5, 7, 9];

const EvenNumbersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-6">
            Even Numbers (1-10) - Answer Key
          </h1>

          {/* Numbers Display */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Even Numbers:</h2>
            <div className="grid grid-cols-5 gap-2">
              {EVEN_NUMBERS.map((number) => (
                <div
                  key={number}
                  className="w-full aspect-square rounded-xl bg-indigo-500 
                           flex items-center justify-center text-3xl font-bold text-white"
                >
                  {number}
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-purple-800 mt-6 mb-4">Odd Numbers:</h2>
            <div className="grid grid-cols-5 gap-2">
              {ODD_NUMBERS.map((number) => (
                <div
                  key={number}
                  className="w-full aspect-square rounded-xl bg-purple-100 
                           flex items-center justify-center text-3xl font-bold text-purple-800"
                >
                  {number}
                </div>
              ))}
            </div>
          </div>

          {/* Explanations */}
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-xl p-4">
              <h2 className="font-bold text-purple-800 mb-2">What are Even Numbers?</h2>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>Even numbers can be divided evenly by 2</li>
                <li>When you split even numbers into pairs, there's no leftover</li>
                <li>The even numbers from 1 to 10 are: 2, 4, 6, 8, 10</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-xl p-4">
              <h2 className="font-bold text-purple-800 mb-2">Visual Examples</h2>
              <div className="space-y-4">
                {EVEN_NUMBERS.map(number => (
                  <div key={number} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500 text-white 
                                  flex items-center justify-center text-2xl font-bold">
                      {number}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: number }).map((_, i) => (
                          <div key={i} 
                               className={`w-4 h-4 rounded-full ${i % 2 === 0 ? 'bg-purple-600' : 'bg-indigo-600'}`}>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <h2 className="font-bold text-purple-800 mb-2">Quick Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>Even numbers end in 0, 2, 4, 6, or 8</li>
                <li>When you count by 2s starting from 2, you get even numbers</li>
                <li>Even numbers can be split into equal pairs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvenNumbersAnswerKey; 