import React from 'react';

const NumberTwoTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="px-0 md:px-4 py-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
            Tips for Writing Number Two
          </h1>

          <div className="space-y-8">
            {/* General Tips */}
            <section className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                Before You Start
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-3">
                    👋
                  </span>
                  <p>Make sure you're sitting comfortably at a table</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-3">
                    ✏️
                  </span>
                  <p>Hold your pencil or finger properly</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-3">
                    👀
                  </span>
                  <p>Watch the animation carefully before starting</p>
                </li>
              </ul>
            </section>

            {/* Writing Tips */}
            <section className="max-w-md mx-auto bg-blue-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                Writing Tips
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 rounded-full mr-3">
                    1️⃣
                  </span>
                  <div>
                    <p className="font-semibold">Start at the Top Left</p>
                    <p className="text-sm mt-1">Begin with a smooth curve to the right</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 rounded-full mr-3">
                    2️⃣
                  </span>
                  <div>
                    <p className="font-semibold">Make a Big Curve</p>
                    <p className="text-sm mt-1">Curve down and to the left smoothly</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 rounded-full mr-3">
                    3️⃣
                  </span>
                  <div>
                    <p className="font-semibold">Draw the Bottom Line</p>
                    <p className="text-sm mt-1">Make a straight line to the right</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Practice Tips */}
            <section className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                Practice Makes Perfect
              </h2>
              <div className="bg-yellow-50 p-4 rounded-lg text-gray-700">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Focus on making smooth curves
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Keep the bottom line straight
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Practice each part until you feel confident
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberTwoTips; 