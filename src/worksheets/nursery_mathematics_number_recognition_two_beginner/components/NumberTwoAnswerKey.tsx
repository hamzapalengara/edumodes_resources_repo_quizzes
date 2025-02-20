import React, { useState, useEffect } from 'react';
import './NumberTwoWorksheet.css';

const NUMBER_TWO = {
  value: '2',
  viewBox: '0 0 200 200',
  paths: [
    { 
      id: 'top_curve', 
      d: 'M60 60C60 40 80 30 100 30C120 30 140 40 140 60C140 90 60 140 60 160', 
      order: 1 
    },
    { 
      id: 'base', 
      d: 'M60 160L140 160', 
      order: 2 
    }
  ]
};

const NumberTwoAnswerKey: React.FC = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationKey(prev => prev + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleReplayAnimation = () => {
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="px-0 md:px-4 py-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
            How to Write Number Two
          </h1>

          <div className="space-y-6">
            {/* Animation Demo */}
            <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-4 shadow-lg border-2 border-indigo-200">
              <h2 className="text-xl font-bold text-center text-indigo-600 mb-4 flex items-center justify-center gap-2">
                <span className="text-2xl">✨</span>
                Watch How to Write Number 2
                <span className="text-2xl">✨</span>
              </h2>
              <div className="relative w-4/5 mx-auto aspect-square bg-white rounded-xl overflow-hidden border-4 border-dashed border-indigo-200 shadow-inner">
                <svg
                  key={animationKey}
                  viewBox={NUMBER_TWO.viewBox}
                  className="w-full h-full"
                >
                  <pattern id="demo-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e7ff" strokeWidth="1"/>
                  </pattern>
                  <rect width="200" height="200" fill="url(#demo-grid)" className="opacity-50"/>
                  <circle cx="100" cy="100" r="90" fill="rgba(99, 102, 241, 0.1)"/>

                  {NUMBER_TWO.paths.map((path) => (
                    <path
                      key={`animation-${path.id}-${animationKey}`}
                      d={path.d}
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="number-path-animation"
                      style={{
                        animationDelay: `${(path.order - 1) * 2}s`
                      }}
                    />
                  ))}
                </svg>
              </div>
              <div className="relative mt-4 flex justify-center">
                <button 
                  onClick={handleReplayAnimation} 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 transform hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  Watch Again!
                </button>
              </div>
            </div>

            {/* Step by Step Instructions */}
            <div className="max-w-md mx-auto bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
                <span className="text-2xl">📝</span>
                Step by Step Guide
              </h2>
              
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full mr-3 text-indigo-600 font-semibold">1</span>
                  <p>Start at the top left point</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full mr-3 text-indigo-600 font-semibold">2</span>
                  <p>Draw a curved line to the right and then down</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full mr-3 text-indigo-600 font-semibold">3</span>
                  <p>Continue curving to the left</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full mr-3 text-indigo-600 font-semibold">4</span>
                  <p>Draw a straight line to the right at the bottom</p>
                </li>
              </ol>
            </div>

            {/* Tips */}
            <div className="max-w-md mx-auto bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Remember
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Make the curve smooth and round
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Keep the bottom line straight
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Practice makes perfect!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberTwoAnswerKey; 