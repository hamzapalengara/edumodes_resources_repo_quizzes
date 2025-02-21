import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberTenAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 bg-[url('/fruits-bg.png')] bg-cover bg-center bg-blend-soft-light">
      <WorksheetHeader />
      
      <main className="p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6 text-center">
              Answer Key: Number 10 Worksheet
            </h1>
            
            <div className="space-y-8">
              {/* Tracing Guide */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-4">Correct Tracing Order</h2>
                <div className="bg-white/80 rounded-xl p-4 shadow-md">
                  <ol className="list-decimal list-inside space-y-3 text-indigo-700">
                    <li>Draw the vertical line (1)
                      <ul className="list-disc list-inside ml-6 mt-1 text-indigo-600">
                        <li>Start from the top</li>
                        <li>Draw straight down</li>
                        <li>Keep it tall and straight</li>
                      </ul>
                    </li>
                    <li>Draw the circle (0)
                      <ul className="list-disc list-inside ml-6 mt-1 text-indigo-600">
                        <li>Start from the top of the circle</li>
                        <li>Draw a smooth, round circle</li>
                        <li>Close the circle completely</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Number Finding Game Answers */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-4">Number Finding Game Answers</h2>
                <div className="bg-white/80 rounded-xl p-4 shadow-md">
                  <p className="text-indigo-700 mb-3">There are 10 number 10s in the grid, each paired with an orange emoji (🍊):</p>
                  <div className="grid grid-cols-5 gap-2 max-w-[350px] mx-auto">
                    {[
                      '10 🍊', '3 🍎', '10 🍊', '5 🍌', '10 🍊',
                      '10 🍊', '7 🍇', '2 🍎', '10 🍊', '4 🍐',
                      '6 🍌', '10 🍊', '8 🍇', '10 🍊', '1 🍎',
                      '10 🍊', '9 🍇', '10 🍊', '10 🍊', '5 🍌'
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`
                          aspect-square w-full text-xl font-bold rounded-lg
                          flex items-center justify-center
                          ${item.includes('10') ? 'bg-green-500 text-white' : 'bg-white text-indigo-900'}
                        `}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Success Criteria */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-4">Success Criteria</h2>
                <div className="bg-white/80 rounded-xl p-4 shadow-md">
                  <ul className="list-disc list-inside space-y-2 text-indigo-700">
                    <li>Complete 5 successful tracing practices</li>
                    <li>Each tracing should:
                      <ul className="list-disc list-inside ml-6 mt-1 text-indigo-600">
                        <li>Have a straight vertical line for 1</li>
                        <li>Have a well-formed circle for 0</li>
                        <li>Follow the correct stroke order</li>
                      </ul>
                    </li>
                    <li>Find all 10 number 10s in the grid</li>
                    <li>Total possible score: 150 points
                      <ul className="list-disc list-inside ml-6 mt-1 text-indigo-600">
                        <li>50 points from tracing (10 points each)</li>
                        <li>100 points from finding numbers (10 points each)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberTenAnswerKey; 