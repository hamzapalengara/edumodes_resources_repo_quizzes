import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LetterMatchingTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding Letter Pairs",
      points: [
        "Capital letters are bigger and start sentences",
        "Lowercase letters are smaller and used more often",
        "Each letter has its own unique shape",
        "Some letters look similar in both forms (like 'O' and 'o')",
        "Other letters look different (like 'L' and 'l')"
      ]
    },
    {
      title: "Matching Strategies",
      points: [
        "Look at one letter at a time",
        "Compare the shapes carefully",
        "Remember that matching pairs make the same sound",
        "Practice writing both forms to remember them better",
        "Use memory tricks (like 'big L, little l')"
      ]
    },
    {
      title: "Letter Recognition Tips",
      points: [
        "Find letters in your favorite books",
        "Point out letters on signs and labels",
        "Practice writing letters in sand or with finger paint",
        "Make letter shapes with your body",
        "Draw letters in the air"
      ]
    },
    {
      title: "Fun Letter Activities",
      points: [
        "Play letter matching card games",
        "Sort letters by size (capital vs. lowercase)",
        "Create letter collages from magazines",
        "Draw pictures that start with each letter",
        "Make letters with playdough"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-green-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Jungle Letter Match - Tips & Strategies 🦁
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-green-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-yellow-300">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-yellow-300">•</span>
                      <span className="text-green-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Remember! 🌟
            </h2>
            <div className="space-y-3 text-green-100">
              <p>
                Take your time to look at each letter carefully. It's not a race!
              </p>
              <p>
                Practice makes perfect - the more you work with letters, the easier
                it becomes to recognize them.
              </p>
              <p>
                Have fun while learning! Try to spot these letters in the world around
                you, like on signs, in books, or on packages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterMatchingTips; 