import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TABLE_CELLS = [
  { num1: '3', num2: '1', answer: '3', explanation: 'One group of three' },
  { num1: '3', num2: '2', answer: '6', explanation: 'Two groups of three' },
  { num1: '3', num2: '3', answer: '9', explanation: 'Three groups of three' },
  { num1: '3', num2: '4', answer: '12', explanation: 'Four groups of three' },
  { num1: '3', num2: '5', answer: '15', explanation: 'Five groups of three' },
  { num1: '3', num2: '6', answer: '18', explanation: 'Six groups of three' },
  { num1: '3', num2: '7', answer: '21', explanation: 'Seven groups of three' },
  { num1: '3', num2: '8', answer: '24', explanation: 'Eight groups of three' },
  { num1: '3', num2: '9', answer: '27', explanation: 'Nine groups of three' },
  { num1: '3', num2: '10', answer: '30', explanation: 'Ten groups of three' },
];

const VISUAL_AIDS: Record<string, string[]> = {
  '3': ['🍊', '🍊', '🍊'],
  '6': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '9': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '12': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '15': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '18': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '21': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '24': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '27': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '30': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊']
};

const MultiplicationTable3AnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-orange-700 mb-4">
            Multiplication Table of 3 - Answer Key
          </h1>
          <p className="text-orange-600 mb-4">
            Each multiplication fact is shown with a visual representation using groups of oranges.
            The divider (|) separates each group of three to make counting easier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TABLE_CELLS.map((cell, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center gap-3 text-xl mb-3">
                <span className="font-bold text-orange-700">{cell.num1}</span>
                <span className="text-orange-600">×</span>
                <span className="font-bold text-orange-700">{cell.num2}</span>
                <span className="text-orange-600">=</span>
                <span className="font-bold text-orange-700">{cell.answer}</span>
              </div>

              <p className="text-center text-orange-600 mb-3">
                {cell.explanation}
              </p>

              <div className="bg-orange-50 p-2 rounded-lg overflow-x-auto">
                <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                  {VISUAL_AIDS[cell.answer].map((item, i) => (
                    <span
                      key={i}
                      className={item === '|' ? 'text-orange-300 mx-1' : ''}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable3AnswerKey; 