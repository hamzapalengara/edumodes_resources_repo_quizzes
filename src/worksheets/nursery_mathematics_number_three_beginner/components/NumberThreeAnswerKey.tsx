import React from 'react';

const NumberThreeAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 px-0 md:p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-6">
          Number Three - Answer Key and Tips
        </h1>

        <div className="space-y-6">
          {/* Writing Guide */}
          <section className="bg-indigo-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">How to Write Number 3</h2>
            <div className="space-y-3">
              <p className="text-indigo-600">Follow these steps to write number 3:</p>
              <ol className="list-decimal list-inside space-y-2 text-indigo-700">
                <li>Start at the top middle</li>
                <li>Draw a curve to the right and down</li>
                <li>Continue with a curve back to the middle</li>
                <li>Draw another curve to the right and down</li>
                <li>Finish with a curve back to the left</li>
              </ol>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-pink-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-pink-700 mb-4">Common Mistakes to Avoid</h2>
            <ul className="list-disc list-inside space-y-2 text-pink-700">
              <li>Making the curves too sharp or angular</li>
              <li>Not connecting the curves smoothly</li>
              <li>Starting from the wrong position</li>
              <li>Making the top and bottom curves uneven</li>
            </ul>
          </section>

          {/* Practice Tips */}
          <section className="bg-purple-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Practice Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-purple-700">
              <li>Practice drawing curves in the air first</li>
              <li>Use your finger to trace number 3 on different surfaces</li>
              <li>Look for number 3 in your surroundings</li>
              <li>Count groups of three objects while practicing</li>
            </ul>
          </section>

          {/* Fun Facts */}
          <section className="bg-blue-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Fun Facts About Number 3</h2>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Three is often called a "magic number" in stories</li>
              <li>Many things come in threes: traffic lights, primary colors, wishes in fairy tales</li>
              <li>Three is the first odd prime number</li>
              <li>A triangle has three sides and three angles</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberThreeAnswerKey; 