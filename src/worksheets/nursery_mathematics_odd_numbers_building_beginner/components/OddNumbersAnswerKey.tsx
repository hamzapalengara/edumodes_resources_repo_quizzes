import React from 'react';

const OddNumbersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-2 md:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
            Odd Numbers Guide 🏢
          </h1>

          {/* Odd Numbers Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🎯</span>
              Odd Numbers (1-10)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 3, 5, 7, 9].map(number => (
                <div key={number} className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <div className="flex items-center mb-2">
                    <div className="relative w-16 h-16 bg-gradient-to-b from-purple-300 to-purple-400 rounded-lg border-2 border-purple-500 flex items-center justify-center mr-4">
                      <span className="text-4xl font-bold text-white">{number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">Number {number}</h3>
                      <p className="text-gray-600 text-sm">
                        Cannot be divided evenly by 2
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    {Array.from({ length: number }).map((_, i) => (
                      <span key={i} className="w-4 h-4 bg-purple-400 rounded-full"></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Even Numbers Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">❌</span>
              Even Numbers to Avoid
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[2, 4, 6, 8, 10].map(number => (
                <div key={number} className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="relative w-16 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg border-2 border-gray-500 flex items-center justify-center mr-4">
                      <span className="text-4xl font-bold text-white">{number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">Number {number}</h3>
                      <p className="text-gray-600 text-sm">
                        Can be divided evenly by 2
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {Array.from({ length: number }).map((_, i) => (
                      <span key={i} className="w-4 h-4 bg-gray-400 rounded-full"></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Visual Guide */}
          <section className="mt-8 bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
            <h2 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              How to Remember Odd Numbers
            </h2>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Odd numbers end in 1, 3, 5, 7, or 9
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                They cannot be split into equal groups of two
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Count by 2s starting from 1: 1, 3, 5, 7, 9
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                When divided by 2, there's always a remainder of 1
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OddNumbersAnswerKey; 