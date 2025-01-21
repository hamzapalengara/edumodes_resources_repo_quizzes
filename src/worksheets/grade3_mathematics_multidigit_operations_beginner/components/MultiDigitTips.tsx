import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const MultiDigitTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <main className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Tips for Multi-Digit Math Success
            </h1>

            {/* Getting Started */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                🎯 Getting Started
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Welcome to Stack & Solve! This worksheet will help you master multi-digit 
                  addition and subtraction. Here's how to get the most out of your practice:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Take your time - accuracy is more important than speed</li>
                  <li>Use the provided space to work out your calculations</li>
                  <li>Double-check your answers before submitting</li>
                  <li>Learn from any mistakes - they're part of the learning process!</li>
                </ul>
              </div>
            </section>

            {/* Key Strategies */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-green-600 mb-4">
                🔑 Key Strategies
              </h2>
              
              <div className="space-y-6">
                {/* Addition Strategy */}
                <div className="border-l-4 border-green-200 pl-4">
                  <h3 className="font-medium text-gray-800 mb-3">Addition Tips:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">1️⃣</span>
                      <span>Line up digits by place value (ones under ones, tens under tens)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">2️⃣</span>
                      <span>Start from the right (ones column) and work left</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">3️⃣</span>
                      <span>When a column sum is 10 or more, carry the tens digit to the next column</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">4️⃣</span>
                      <span>Write carrying numbers small and clear above the next column</span>
                    </li>
                  </ul>
                </div>

                {/* Subtraction Strategy */}
                <div className="border-l-4 border-blue-200 pl-4">
                  <h3 className="font-medium text-gray-800 mb-3">Subtraction Tips:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">1️⃣</span>
                      <span>Line up digits carefully, keeping place values aligned</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">2️⃣</span>
                      <span>Start from the right and check if each digit on top is larger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">3️⃣</span>
                      <span>If you need to borrow, decrease the next digit by 1 and add 10 to current column</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">4️⃣</span>
                      <span>Keep track of borrowed numbers by crossing out and writing new values</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Common Mistakes to Avoid */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-red-600 mb-4">
                ⚠️ Common Mistakes to Avoid
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-medium text-red-800 mb-2">Addition Mistakes:</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>Forgetting to carry numbers</li>
                    <li>Misaligning digits</li>
                    <li>Adding carried numbers twice</li>
                    <li>Skipping columns</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-medium text-red-800 mb-2">Subtraction Mistakes:</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>Subtracting smaller from larger (regardless of position)</li>
                    <li>Forgetting to reduce borrowed-from digits</li>
                    <li>Misaligning numbers</li>
                    <li>Incorrect borrowing across zeros</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Practice Tips */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-purple-800 mb-4">
                💪 Practice Makes Perfect
              </h2>
              <div className="space-y-4 text-purple-900">
                <p>
                  Remember these helpful tips while practicing:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Start with easier problems and gradually increase difficulty</li>
                  <li>Use mental math to estimate your answer before calculating</li>
                  <li>Check your work by working backwards</li>
                  <li>Practice regularly - even 15 minutes a day makes a difference!</li>
                </ul>
                <div className="mt-4 bg-white bg-opacity-50 rounded-lg p-4">
                  <p className="text-purple-800 font-medium">
                    Remember: Everyone learns at their own pace. Stay positive and celebrate your progress! 🌟
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </TouchContainer>
    </div>
  );
};

export default MultiDigitTips; 