import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const CartoonLetterMatchingAnswerKey: React.FC = () => {
  const letterPairs = [
    {
      capital: 'S',
      lowercase: 's',
      description: "S slithers like a snake, while s is a smaller curvy shape"
    },
    {
      capital: 'T',
      lowercase: 't',
      description: "T stands tall with a top bar, while t has a smaller cross"
    },
    {
      capital: 'U',
      lowercase: 'u',
      description: "U and u are both curved at the bottom, like a smile"
    },
    {
      capital: 'V',
      lowercase: 'v',
      description: "V and v both point down like an arrow, just different sizes"
    },
    {
      capital: 'W',
      lowercase: 'w',
      description: "W and w look like waves, one big and one small"
    },
    {
      capital: 'X',
      lowercase: 'x',
      description: "X and x both cross in the middle, like crossing paths"
    },
    {
      capital: 'Y',
      lowercase: 'y',
      description: "Y branches up while y dips below, like different directions"
    },
    {
      capital: 'Z',
      lowercase: 'z',
      description: "Z zigs and zags, while z does the same but smaller"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-blue-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Letter Chase - Answer Key 🐱🐭
          </h1>

          <div className="grid gap-6">
            {letterPairs.map((pair, index) => (
              <div key={index} className="bg-blue-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-900 rounded-lg text-4xl font-bold">
                    {pair.capital}
                  </div>
                  <div className="text-2xl">➡️</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-900 rounded-lg text-4xl font-bold">
                    {pair.lowercase}
                  </div>
                </div>
                <p className="text-center text-blue-100">
                  {pair.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Capital letters are always bigger and start at the top line</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Lowercase letters often have similar shapes to their capital partners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Some letters (like V/v) look almost identical except for size</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Other letters (like S/s) have more noticeable differences</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartoonLetterMatchingAnswerKey; 