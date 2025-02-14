import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TABLE_CELLS = [
  { num1: '6', num2: '1', answer: '6', explanation: 'One group of six' },
  { num1: '6', num2: '2', answer: '12', explanation: 'Two groups of six' },
  { num1: '6', num2: '3', answer: '18', explanation: 'Three groups of six' },
  { num1: '6', num2: '4', answer: '24', explanation: 'Four groups of six' },
  { num1: '6', num2: '5', answer: '30', explanation: 'Five groups of six' },
  { num1: '6', num2: '6', answer: '36', explanation: 'Six groups of six' },
  { num1: '6', num2: '7', answer: '42', explanation: 'Seven groups of six' },
  { num1: '6', num2: '8', answer: '48', explanation: 'Eight groups of six' },
  { num1: '6', num2: '9', answer: '54', explanation: 'Nine groups of six' },
  { num1: '6', num2: '10', answer: '60', explanation: 'Ten groups of six' },
];

const VISUAL_AIDS: Record<string, string[]> = {
  '6': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '12': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '18': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '24': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '30': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '36': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '42': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '48': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '54': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '60': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲']
};

const MultiplicationTable6AnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-blue-700 mb-4">
            Multiplication Table of 6 - Answer Key
          </h1>
          <p className="text-blue-600 mb-4">
            Each multiplication fact is shown with a visual representation using groups of dice.
            The divider (|) separates each group of six to make counting easier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TABLE_CELLS.map((cell, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center gap-3 text-xl mb-3">
                <span className="font-bold text-blue-700">{cell.num1}</span>
                <span className="text-blue-600">×</span>
                <span className="font-bold text-blue-700">{cell.num2}</span>
                <span className="text-blue-600">=</span>
                <span className="font-bold text-blue-700">{cell.answer}</span>
              </div>

              <p className="text-center text-blue-600 mb-3">
                {cell.explanation}
              </p>

              <div className="bg-blue-50 p-2 rounded-lg overflow-x-auto">
                <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                  {VISUAL_AIDS[cell.answer].map((item, i) => (
                    <span
                      key={i}
                      className={item === '|' ? 'text-blue-300 mx-1' : ''}
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
          <h2 className="text-xl font-bold text-blue-700 mb-3">
            Understanding the Pattern
          </h2>
          <ul className="space-y-2 text-blue-600">
            <li>• Each time we multiply by 6, we add 6 to the previous answer</li>
            <li>• All answers in the 6 times table are even numbers</li>
            <li>• When multiplying by even numbers (2,4,6,8,10), the answer is divisible by 12</li>
            <li>• When multiplying by 5, the answer ends in 0</li>
            <li>• When multiplying by 10, just add a zero to 6 (60)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable6AnswerKey; 