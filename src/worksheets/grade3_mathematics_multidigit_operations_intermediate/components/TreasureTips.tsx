import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const TreasureTips: React.FC = () => {
  const additionTips = [
    {
      title: "Line Up Your Numbers",
      description: "Always line up numbers by their place values (ones under ones, tens under tens, hundreds under hundreds).",
      example: {
        problem: "347 + 285",
        visual: `
  3 4 7
+ 2 8 5
-------`
      }
    },
    {
      title: "Start from the Right",
      description: "Begin adding from the rightmost column (ones place) and work your way left.",
      example: {
        problem: "First add 7 + 5 = 12",
        visual: `
  3 4 7
+ 2 8 5
------
    1 2`
      }
    },
    {
      title: "Remember to Carry",
      description: "When a column sum is 10 or more, write down the ones digit and carry the tens digit to the next column.",
      example: {
        problem: "Carry the 1 to the tens column",
        visual: `
  1
  3 4 7
+ 2 8 5
------
    1 2`
      }
    }
  ];

  const subtractionTips = [
    {
      title: "Bigger Number on Top",
      description: "Make sure the larger number is on top when subtracting.",
      example: {
        problem: "943 - 675",
        visual: `
  9 4 3
- 6 7 5
-------`
      }
    },
    {
      title: "Borrowing Strategy",
      description: "When you can't subtract the bottom digit from the top digit, borrow from the next column to the left.",
      example: {
        problem: "Can't subtract 5 from 3, so borrow from 4",
        visual: `
  9 3 13
- 6 7  5
-------
      8`
      }
    },
    {
      title: "Check Your Work",
      description: "Add your answer to the number you subtracted to check if you get the original number.",
      example: {
        problem: "If 943 - 675 = 268, then 268 + 675 should equal 943",
        visual: `
  2 6 8
+ 6 7 5
-------
  9 4 3`
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <WorksheetHeader />
      <TouchContainer>
        <div className="p-4">
          <div className="bg-pink-50 rounded-lg p-4 mb-6">
            <h1 className="text-2xl font-bold text-center text-pink-800 mb-4">
              Cherry Blossom Math Tips & Tricks 🌸
            </h1>
            <p className="text-pink-700 text-center">
              Master these strategies to reveal the beautiful spring scene!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Addition Tips */}
            <div>
              <div className="bg-pink-100/50 rounded-lg p-4 mb-4">
                <h2 className="text-xl font-bold text-pink-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">➕</span> Addition Strategies
                </h2>
                <p className="text-pink-700">
                  Follow these tips to solve addition problems with confidence!
                </p>
              </div>
              
              <div className="space-y-4">
                {additionTips.map((tip, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200">
                    <h3 className="font-bold text-pink-800 mb-2 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-800 flex items-center justify-center text-sm mr-2">
                        {index + 1}
                      </span>
                      {tip.title}
                    </h3>
                    <p className="text-pink-700 mb-3">
                      {tip.description}
                    </p>
                    <div className="bg-pink-50 rounded p-3">
                      <p className="text-pink-600 mb-2 text-sm font-medium">Example:</p>
                      <pre className="font-mono text-pink-800 whitespace-pre-wrap">
                        {tip.example.problem}
                        {tip.example.visual}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtraction Tips */}
            <div>
              <div className="bg-pink-100/50 rounded-lg p-4 mb-4">
                <h2 className="text-xl font-bold text-pink-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">➖</span> Subtraction Strategies
                </h2>
                <p className="text-pink-700">
                  Master these tips to solve subtraction problems easily!
                </p>
              </div>
              
              <div className="space-y-4">
                {subtractionTips.map((tip, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200">
                    <h3 className="font-bold text-pink-800 mb-2 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-800 flex items-center justify-center text-sm mr-2">
                        {index + 1}
                      </span>
                      {tip.title}
                    </h3>
                    <p className="text-pink-700 mb-3">
                      {tip.description}
                    </p>
                    <div className="bg-pink-50 rounded p-3">
                      <p className="text-pink-600 mb-2 text-sm font-medium">Example:</p>
                      <pre className="font-mono text-pink-800 whitespace-pre-wrap">
                        {tip.example.problem}
                        {tip.example.visual}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* General Tips */}
          <div className="bg-pink-50 rounded-lg p-4 mt-6 border-2 border-pink-200">
            <h2 className="text-lg font-bold text-pink-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">💡</span> Remember:
            </h2>
            <ul className="space-y-2 text-pink-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Take your time and double-check your work</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Use scrap paper to work out problems step by step</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>If you make a mistake, try again - each attempt helps you learn and grow!</span>
              </li>
            </ul>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default TreasureTips; 