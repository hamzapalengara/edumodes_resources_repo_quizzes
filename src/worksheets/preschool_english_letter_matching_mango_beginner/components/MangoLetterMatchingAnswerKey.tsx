import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MangoLetterMatchingAnswerKey: React.FC = () => {
  const letterPairs = [
    {
      capital: 'M',
      lowercase: 'm',
      description: "M looks like mountain peaks, while m has three humps like mini mountains"
    },
    {
      capital: 'N',
      lowercase: 'n',
      description: "N stands tall with diagonal line, while n has one hump like a small hill"
    },
    {
      capital: 'O',
      lowercase: 'o',
      description: "O and o are both round like a perfect mango, just different sizes"
    },
    {
      capital: 'P',
      lowercase: 'p',
      description: "P has a proud curved top, while p hangs below the line with same curve"
    },
    {
      capital: 'Q',
      lowercase: 'q',
      description: "Q is like O with a tail, while q has its tail on the other side"
    },
    {
      capital: 'R',
      lowercase: 'r',
      description: "R has a curved top and leg, while r has a small hump and straight line"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-amber-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Sweet Mango Letter Match - Answer Key 🥭
          </h1>

          <div className="grid gap-6">
            {letterPairs.map((pair, index) => (
              <div key={index} className="bg-amber-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-900 rounded-lg text-4xl font-bold">
                    {pair.capital}
                  </div>
                  <div className="text-2xl">➡️</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-900 rounded-lg text-4xl font-bold">
                    {pair.lowercase}
                  </div>
                </div>
                <p className="text-center text-amber-100">
                  {pair.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-amber-300">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start gap-3">
                <span className="text-amber-300">•</span>
                <span>Capital letters always start at the top line and are bigger</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-300">•</span>
                <span>Lowercase letters often have parts that look like their capital partners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-300">•</span>
                <span>Some letters (like O/o) look very similar in both forms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-300">•</span>
                <span>Other letters (like R/r) have more noticeable differences</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangoLetterMatchingAnswerKey; 