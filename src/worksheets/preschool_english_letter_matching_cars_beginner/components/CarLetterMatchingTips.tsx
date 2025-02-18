import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const CarLetterMatchingTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding Letter Pairs",
      points: [
        "Capital letters are like big race cars",
        "Lowercase letters are like small race cars",
        "Each letter has its own unique shape",
        "Some letters look similar in both forms (like 'I' and 'i')",
        "Other letters look different (like 'G' and 'g')"
      ]
    },
    {
      title: "Racing to Match Letters",
      points: [
        "Look at one letter at a time, like checking each car",
        "Compare the shapes carefully, like matching car models",
        "Remember that matching pairs make the same sound",
        "Practice writing both forms to remember them better",
        "Use memory tricks (like 'big G, little g')"
      ]
    },
    {
      title: "Letter Recognition Tips",
      points: [
        "Find letters on car license plates",
        "Look for letters on road signs",
        "Spot letters on car badges and logos",
        "Practice writing letters in the air like smoke trails",
        "Make letter shapes with toy cars"
      ]
    },
    {
      title: "Fun Car-Themed Letter Activities",
      points: [
        "Race to match letter pairs",
        "Sort letters by size like sorting cars",
        "Create letter collages using car magazines",
        "Draw letters that look like cars",
        "Make letter roads with tape and drive toy cars on them"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Speed Letter Match - Tips & Strategies 🏎️
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-red-400">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span className="text-gray-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-red-400">
              Remember! 🌟
            </h2>
            <div className="space-y-3 text-gray-100">
              <p>
                Take your time with each letter, just like checking each part of a car!
              </p>
              <p>
                Practice makes perfect - the more you work with letters, the faster
                you'll recognize them, just like becoming a better driver.
              </p>
              <p>
                Have fun while learning! Try to spot these letters everywhere you go,
                especially on cars and road signs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLetterMatchingTips; 