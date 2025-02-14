import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TABLE_CELLS = [
  { num1: '7', num2: '1', answer: '7', explanation: 'One group of seven' },
  { num1: '7', num2: '2', answer: '14', explanation: 'Two groups of seven' },
  { num1: '7', num2: '3', answer: '21', explanation: 'Three groups of seven' },
  { num1: '7', num2: '4', answer: '28', explanation: 'Four groups of seven' },
  { num1: '7', num2: '5', answer: '35', explanation: 'Five groups of seven' },
  { num1: '7', num2: '6', answer: '42', explanation: 'Six groups of seven' },
  { num1: '7', num2: '7', answer: '49', explanation: 'Seven groups of seven' },
  { num1: '7', num2: '8', answer: '56', explanation: 'Eight groups of seven' },
  { num1: '7', num2: '9', answer: '63', explanation: 'Nine groups of seven' },
  { num1: '7', num2: '10', answer: '70', explanation: 'Ten groups of seven' },
];

const VISUAL_AIDS: Record<string, string[]> = {
  '7': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '14': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '21': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '28': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '35': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '42': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '49': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '56': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '63': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '70': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲']
};

const MultiplicationTable7AnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-fuchsia-700 mb-4">
            Multiplication Table of 7 - Answer Key
          </h1>
          <p className="text-fuchsia-600 mb-4">
            Each multiplication fact is shown with a visual representation using groups of lucky dice.
            The divider (|) separates each group of seven to make counting easier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TABLE_CELLS.map((cell, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center gap-3 text-xl mb-3">
                <span className="font-bold text-fuchsia-700">{cell.num1}</span>
                <span className="text-fuchsia-600">×</span>
                <span className="font-bold text-fuchsia-700">{cell.num2}</span>
                <span className="text-fuchsia-600">=</span>
                <span className="font-bold text-fuchsia-700">{cell.answer}</span>
              </div>

              <p className="text-center text-fuchsia-600 mb-3">
                {cell.explanation}
              </p>

              <div className="bg-fuchsia-50 p-2 rounded-lg overflow-x-auto">
                <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                  {VISUAL_AIDS[cell.answer].map((item, i) => (
                    <span
                      key={i}
                      className={item === '|' ? 'text-fuchsia-300 mx-1' : ''}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pattern Explanation */}
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mt-6">
          <h2 className="text-xl font-bold text-fuchsia-700 mb-3">
            Understanding the Pattern
          </h2>
          <ul className="space-y-2 text-fuchsia-600">
            <li>• Each time we multiply by 7, we add 7 to the previous answer</li>
            <li>• When multiplying by 2, double the result of 7 × 1</li>
            <li>• When multiplying by 5, half the result of 7 × 10</li>
            <li>• When multiplying by 10, just add a zero to 7 (70)</li>
            <li>• Look for patterns in the ones digit: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable7AnswerKey; 