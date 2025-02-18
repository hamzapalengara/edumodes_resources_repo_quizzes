import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const CarLetterMatchingAnswerKey: React.FC = () => {
  const letterPairs = [
    {
      uppercase: 'G',
      lowercase: 'g',
      explanation: "The letter G/g is found in words like Gear and Gas"
    },
    {
      uppercase: 'H',
      lowercase: 'h',
      explanation: "The letter H/h is found in words like Horn and Highway"
    },
    {
      uppercase: 'I',
      lowercase: 'i',
      explanation: "The letter I/i is found in words like Ignition and Interior"
    },
    {
      uppercase: 'J',
      lowercase: 'j',
      explanation: "The letter J/j is found in words like Journey and Jeep"
    },
    {
      uppercase: 'K',
      lowercase: 'k',
      explanation: "The letter K/k is found in words like Key and Kit"
    },
    {
      uppercase: 'L',
      lowercase: 'l',
      explanation: "The letter L/l is found in words like Light and Lane"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Speed Letter Match - Answer Key 🏎️
          </h1>

          <div className="grid gap-4">
            {letterPairs.map((pair, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex items-center gap-4 text-4xl font-bold">
                    <span className="bg-red-900 w-16 h-16 rounded-lg flex items-center justify-center">
                      {pair.uppercase}
                    </span>
                    <span className="text-2xl">→</span>
                    <span className="bg-red-900 w-16 h-16 rounded-lg flex items-center justify-center">
                      {pair.lowercase}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p className="text-red-200">{pair.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Tips for Learning Letters:</h2>
            <ul className="list-disc list-inside space-y-2 text-red-200">
              <li>Capital letters start sentences and names</li>
              <li>Lowercase letters are used in regular writing</li>
              <li>Practice writing both forms of each letter</li>
              <li>Look for these letters on road signs and car badges</li>
              <li>Say the letter sounds while practicing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLetterMatchingAnswerKey; 