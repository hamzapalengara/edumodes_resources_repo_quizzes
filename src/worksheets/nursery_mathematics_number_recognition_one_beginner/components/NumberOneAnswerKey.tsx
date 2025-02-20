import React from 'react';
import NumberOneAnimation from './NumberOneAnimation';

const NumberOneAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="px-0 md:px-4 py-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
            How to Write Number One
          </h1>

          <div className="space-y-6">
            {/* Animation Demo */}
            <div className="w-full aspect-square max-w-md mx-auto bg-blue-100 rounded-lg">
              <NumberOneAnimation />
            </div>

            {/* Step by Step Instructions */}
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                Step by Step Guide
              </h2>
              
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-semibold">1</span>
                  <p>Start at the top dot.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-semibold">2</span>
                  <p>Draw a straight line down to the bottom dot.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-semibold">3</span>
                  <p>Go back to the top.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-semibold">4</span>
                  <p>Draw a small line diagonally down to the left.</p>
                </li>
              </ol>
            </div>

            {/* Tips */}
            <div className="max-w-md mx-auto bg-blue-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                Remember
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Keep your line straight and steady
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Start from the top and go down
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default NumberOneAnswerKey; 