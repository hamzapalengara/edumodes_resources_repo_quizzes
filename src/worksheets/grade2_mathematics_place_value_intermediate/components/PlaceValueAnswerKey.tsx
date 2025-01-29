import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface PlaceValueExample {
  id: number;
  question: string;
  answer: number;
  explanation: string;
  strategy: string;
  commonMistakes?: string[];
}

const EXAMPLES: PlaceValueExample[] = [
  {
    id: 1,
    question: "Rearrange 3, 5, 2 to make the largest possible number:",
    answer: 532,
    explanation: "To make the largest number:\n1. Put the biggest digit (5) in hundreds place\n2. Put the next biggest digit (3) in tens place\n3. Put the smallest digit (2) in ones place\n\n5 hundreds + 3 tens + 2 ones = 532",
    strategy: "When making the largest number, arrange digits from biggest to smallest, left to right.",
    commonMistakes: [
      "352 (original order)",
      "235 (ascending order)",
      "253 (mixed up tens and ones)"
    ]
  },
  {
    id: 2,
    question: "Which number has 4 in the tens place and 2 in the hundreds place?",
    answer: 247,
    explanation: "Looking at 274, 247, 427, 472:\n• 247 has 2 in hundreds and 4 in tens\n• 274 has 2 in hundreds but 7 in tens\n• 427 has 4 in hundreds\n• 472 has 4 in hundreds\n\nSo 247 is correct: 2 hundreds + 4 tens + 7 ones",
    strategy: "First find numbers with 2 in hundreds, then check which one has 4 in tens."
  },
  {
    id: 3,
    question: "Rearrange 6, 0, 4 to make the smallest possible number:",
    answer: 406,
    explanation: "To make the smallest number:\n1. Put the smallest non-zero digit (4) in hundreds\n2. Put zero (0) in tens\n3. Put the remaining digit (6) in ones\n\n4 hundreds + 0 tens + 6 ones = 406",
    strategy: "For smallest number with these digits, put smallest non-zero digit in hundreds.",
    commonMistakes: [
      "604 (original order)",
      "460 (zero at end)",
      "640 (largest to smallest)"
    ]
  },
  {
    id: 4,
    question: "Which number has 8 tens and is greater than 350?",
    answer: 380,
    explanation: "Looking at 308, 380, 830, 803:\n• 380 has 8 tens and is 380 (> 350)\n• 308 has 0 tens\n• 830 has 3 tens\n• 803 has 0 tens\n\nSo 380 is correct: 3 hundreds + 8 tens + 0 ones = 380",
    strategy: "Find numbers with 8 in tens place, then check if it's greater than 350."
  },
  {
    id: 5,
    question: "Using 1, 5, 5, make a number between 500 and 600:",
    answer: 515,
    explanation: "To be between 500 and 600:\n1. Must put 5 in hundreds place (5__)\n2. Can put 1 or 5 in tens place\n3. Put remaining digit in ones\n\n5 hundreds + 1 ten + 5 ones = 515",
    strategy: "For a number between 500-600, must use 5 in hundreds place.",
    commonMistakes: [
      "155 (too small)",
      "551 (too large)",
      "555 (can't use 5 three times)"
    ]
  },
  {
    id: 6,
    question: "Which number is 30 more than six hundred?",
    answer: 630,
    explanation: "To find 30 more than 600:\n1. Start with 600\n2. Add 30\n3. 600 + 30 = 630\n\nLooking at options:\n• 360 (too small)\n• 603 (only 3 more than 600)\n• 630 (correct: 600 + 30)\n• 306 (too small)",
    strategy: "Think: 600 + 30 = 630"
  },
  {
    id: 7,
    question: "Make the largest number with zero in the middle:",
    answer: 704,
    explanation: "To make largest number with 0 in tens place:\n1. Put larger digit (7) in hundreds\n2. Must put 0 in tens\n3. Put smaller digit (4) in ones\n\n7 hundreds + 0 tens + 4 ones = 704",
    strategy: "Put zero in tens, then arrange other digits for largest possible number.",
    commonMistakes: [
      "407 (zero not in middle)",
      "470 (zero not in middle)",
      "047 (starts with zero)"
    ]
  },
  {
    id: 8,
    question: "Which number is 10 less than three hundred?",
    answer: 290,
    explanation: "To find 10 less than 300:\n1. Start with 300\n2. Subtract 10\n3. 300 - 10 = 290\n\nLooking at options:\n• 209 (too small)\n• 290 (correct: 300 - 10)\n• 920 (too large)\n• 902 (too large)",
    strategy: "Think: 300 - 10 = 290"
  },
  {
    id: 9,
    question: "Make an even number between 800 and 900:",
    answer: 846,
    explanation: "To make number between 800-900 that's even:\n1. Must put 8 in hundreds place\n2. Can use 4 or 6 in ones (to be even)\n3. Put remaining digit in tens\n\n8 hundreds + 4 tens + 6 ones = 846",
    strategy: "Must start with 8, end with even digit (4 or 6).",
    commonMistakes: [
      "648 (too small)",
      "864 (too large)",
      "845 (not even)"
    ]
  },
  {
    id: 10,
    question: "Which number is closest to 700 + 30?",
    answer: 725,
    explanation: "To find closest to 730:\n1. 730 is the target\n2. Compare options to 730:\n• 752 (22 more than 730)\n• 725 (5 less than 730)\n• 572 (158 less than 730)\n• 257 (473 less than 730)\n\n725 is closest to 730",
    strategy: "Find 700 + 30 = 730, then find the closest number."
  }
];

const PlaceValueAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-4">
              Place Value Mastery: Intermediate Level
            </h1>
            <p className="text-center text-green-600">
              Learn strategies for rearranging digits and understanding place values!
            </p>
          </div>

          {/* Key Strategies Box */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              Key Strategies 🔑
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-700 mb-2">Making Numbers</h3>
                <ul className="space-y-2 text-green-600">
                  <li>• Largest: Put biggest digit in hundreds</li>
                  <li>• Smallest: Put smallest non-zero digit in hundreds</li>
                  <li>• Middle: Look at the range needed</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-700 mb-2">Quick Math</h3>
                <ul className="space-y-2 text-green-600">
                  <li>• Adding tens: Count by 10s</li>
                  <li>• Subtracting tens: Go back by 10s</li>
                  <li>• Compare: Use place values</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            {EXAMPLES.map((example) => (
              <div
                key={example.id}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
              >
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  Question {example.id}: {example.question}
                </h3>

                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <div className="font-bold text-green-700 mb-2">Answer: {example.answer}</div>
                  <pre className="whitespace-pre-wrap text-green-700 font-medium">
                    {example.explanation}
                  </pre>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="font-bold text-blue-700 mb-2">Strategy:</div>
                  <div className="text-blue-600">{example.strategy}</div>
                </div>

                {example.commonMistakes && (
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="font-bold text-red-700 mb-2">Watch out for:</div>
                    <ul className="space-y-1">
                      {example.commonMistakes.map((mistake, index) => (
                        <li key={index} className="text-red-600">• {mistake}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final Tips */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              Remember These Tips 💡
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-green-700">
                  When rearranging digits, think about what makes a number bigger or smaller
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-green-700">
                  For numbers between ranges, focus on the hundreds digit first
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-green-700">
                  When adding or subtracting tens, think in groups of 10
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-green-700">
                  Always check if your answer makes sense with the question
                </span>
              </li>
            </ul>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default PlaceValueAnswerKey; 