import React from 'react';

const BlinkingNumbersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-2 md:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
            Train Station Number Guide 🚉
          </h1>

          {/* Level 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🚂</span>
              Station 1: Numbers 1-5
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5].map(number => (
                <div key={number} className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center mb-2">
                    <div className="relative w-16 h-16 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-lg border-2 border-yellow-500 flex items-center justify-center mr-4">
                      <span className="text-4xl font-bold">{number}</span>
                      {/* Train car wheels */}
                      <div className="absolute -bottom-2 left-2 w-3 h-3 bg-gray-800 rounded-full"></div>
                      <div className="absolute -bottom-2 right-2 w-3 h-3 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">Train Car {number}</h3>
                      <p className="text-gray-600 text-sm">
                        Carries {number === 1 ? 'one item' : `${number} items`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    {Array.from({ length: number }).map((_, i) => (
                      <span key={i} className="w-4 h-4 bg-blue-500 rounded-full"></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Level 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🚅</span>
              Station 2: Numbers 6-10
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[6, 7, 8, 9, 10].map(number => (
                <div key={number} className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <div className="flex items-center mb-2">
                    <div className="relative w-16 h-16 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-lg border-2 border-yellow-500 flex items-center justify-center mr-4">
                      <span className="text-4xl font-bold">{number}</span>
                      {/* Train car wheels */}
                      <div className="absolute -bottom-2 left-2 w-3 h-3 bg-gray-800 rounded-full"></div>
                      <div className="absolute -bottom-2 right-2 w-3 h-3 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">Express Car {number}</h3>
                      <p className="text-gray-600 text-sm">{number} items aboard</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {Array.from({ length: number }).map((_, i) => (
                      <span key={i} className="w-4 h-4 bg-green-500 rounded-full"></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Train Facts */}
          <section className="mt-8 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
              <span className="mr-2">🎯</span>
              Number Train Facts
            </h2>
            <ul className="space-y-2 text-yellow-800">
              <li className="flex items-center">
                <span className="mr-2">🚂</span>
                Each train car shows a specific number
              </li>
              <li className="flex items-center">
                <span className="mr-2">📈</span>
                Numbers increase as you progress through stations
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎨</span>
                Train cars are color-coded for easy recognition
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎮</span>
                Practice counting objects in each train car
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlinkingNumbersAnswerKey; 