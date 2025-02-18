import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LetterMatchingAnswerKey: React.FC = () => {
  const letterPairs = [
    {
      uppercase: 'A',
      lowercase: 'a',
      explanation: "The letter A/a is found in words like Animal and Ant"
    },
    {
      uppercase: 'B',
      lowercase: 'b',
      explanation: "The letter B/b is found in words like Bear and Bird"
    },
    {
      uppercase: 'C',
      lowercase: 'c',
      explanation: "The letter C/c is found in words like Cat and Cheetah"
    },
    {
      uppercase: 'D',
      lowercase: 'd',
      explanation: "The letter D/d is found in words like Dog and Deer"
    },
    {
      uppercase: 'E',
      lowercase: 'e',
      explanation: "The letter E/e is found in words like Elephant and Eagle"
    },
    {
      uppercase: 'F',
      lowercase: 'f',
      explanation: "The letter F/f is found in words like Fox and Frog"
    }
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-green-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Jungle Letter Match - Answer Key 🦁
          </h1>

          <div className="grid gap-4">
            {letterPairs.map((pair, index) => (
              <div key={index} className="bg-green-700 rounded-lg p-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex items-center gap-4 text-4xl font-bold">
                    <span className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center">
                      {pair.uppercase}
                    </span>
                    <span className="text-2xl">→</span>
                    <span className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center">
                      {pair.lowercase}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p className="text-green-200">{pair.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Tips for Learning Letters:</h2>
            <ul className="list-disc list-inside space-y-2 text-green-200">
              <li>Capital letters are used at the beginning of sentences and names</li>
              <li>Lowercase letters are used most often in regular writing</li>
              <li>Practice writing both forms of each letter</li>
              <li>Look for these letters in books and signs around you</li>
              <li>Say the letter sounds while practicing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterMatchingAnswerKey; 