import React from 'react';
import NumberTwoAnimation from './NumberTwoAnimation';

const NumberTwoAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="px-0 md:px-4 py-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
            How to Write Number Two
          </h1>

          <div className="space-y-6">
            {/* Animation Demo */}
            <div className="w-full aspect-square max-w-md mx-auto bg-blue-100 rounded-lg">
              <NumberTwoAnimation />
            </div>

            {/* Step by Step Instructions */}
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                Step by Step Guide
              </h2>
              
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-semibold">1</span>
                  <p>Start at the top left.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-semibold">2</span>
                  <p>Draw a curved line to the right and then down.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-semibold">3</span>
                  <p>Continue curving to the left.</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-semibold">4</span>
                  <p>Draw a straight line to the right at the bottom.</p>
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
                  Make the curve smooth and round
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Keep the bottom line straight
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

export default NumberTwoAnswerKey; 