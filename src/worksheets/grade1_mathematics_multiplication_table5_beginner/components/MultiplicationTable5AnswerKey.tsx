import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TABLE_CELLS = [
  { num1: '5', num2: '1', answer: '5', explanation: 'Five taken once is 5' },
  { num1: '5', num2: '2', answer: '10', explanation: 'Five taken twice is 10' },
  { num1: '5', num2: '3', answer: '15', explanation: 'Five taken three times is 15' },
  { num1: '5', num2: '4', answer: '20', explanation: 'Five taken four times is 20' },
  { num1: '5', num2: '5', answer: '25', explanation: 'Five taken five times is 25' },
  { num1: '5', num2: '6', answer: '30', explanation: 'Five taken six times is 30' },
  { num1: '5', num2: '7', answer: '35', explanation: 'Five taken seven times is 35' },
  { num1: '5', num2: '8', answer: '40', explanation: 'Five taken eight times is 40' },
  { num1: '5', num2: '9', answer: '45', explanation: 'Five taken nine times is 45' },
  { num1: '5', num2: '10', answer: '50', explanation: 'Five taken ten times is 50' },
];

// Visual aids for each number using stars (⭐)
const VISUAL_AIDS: Record<string, string[]> = {
  '5': ['⭐', '⭐', '⭐', '⭐', '⭐'],
  '10': ['⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐'],
  '15': ['⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐'],
  '20': ['⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐'],
  '25': ['⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐'],
  '30': ['⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐'],
  '35': ['⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐'],
  '40': ['⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐'],
  '45': ['⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐'],
  '50': ['⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐', '|', '⭐', '⭐', '⭐', '⭐', '⭐']
};

const MultiplicationTable5AnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Title */}
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-teal-700 text-center">
            Multiplication Table of 5 - Answer Key
          </h1>
        </div>

        {/* Answer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TABLE_CELLS.map((cell, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            >
              {/* Equation */}
              <div className="flex items-center justify-center gap-3 text-xl mb-3">
                <span className="font-bold text-teal-700">{cell.num1}</span>
                <span className="text-teal-600">×</span>
                <span className="font-bold text-teal-700">{cell.num2}</span>
                <span className="text-teal-600">=</span>
                <span className="font-bold text-teal-700">{cell.answer}</span>
              </div>

              {/* Explanation */}
              <p className="text-center text-teal-600 mb-3">
                {cell.explanation}
              </p>

              {/* Visual Aid */}
              <div className="bg-teal-50 p-2 rounded-lg overflow-x-auto">
                <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                  {VISUAL_AIDS[cell.answer].map((item, i) => (
                    <span
                      key={i}
                      className={item === '|' ? 'text-teal-300 mx-1' : ''}
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
          <h2 className="text-xl font-bold text-teal-700 mb-3">
            Understanding the Pattern
          </h2>
          <ul className="space-y-2 text-teal-600">
            <li>• Each time we multiply by 5, we add 5 to the previous answer</li>
            <li>• All answers in the 5 times table end in either 0 or 5</li>
            <li>• When multiplying by even numbers (2,4,6,8,10), the answer ends in 0</li>
            <li>• When multiplying by odd numbers (1,3,5,7,9), the answer ends in 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable5AnswerKey; 