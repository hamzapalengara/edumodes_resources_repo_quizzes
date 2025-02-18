import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MangoLetterMatchingTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding Letter Pairs",
      points: [
        "Capital letters are like ripe mangoes",
        "Lowercase letters are like small mango seeds",
        "Each letter has its own unique shape",
        "Some letters look similar in both forms (like 'O' and 'o')",
        "Other letters look different (like 'Q' and 'q')"
      ]
    },
    {
      title: "Sweet Letter Learning",
      points: [
        "Look at one letter at a time, like picking mangoes",
        "Compare the shapes carefully, like sorting ripe mangoes",
        "Remember that matching pairs make the same sound",
        "Practice writing both forms to remember them better",
        "Use memory tricks (like 'mighty M, mini m')"
      ]
    },
    {
      title: "Letter Recognition Tips",
      points: [
        "Find letters on fruit labels",
        "Look for letters in grocery store signs",
        "Spot letters on food packages",
        "Practice writing letters in sand",
        "Make letter shapes with mango slices"
      ]
    },
    {
      title: "Fun Mango-Themed Letter Activities",
      points: [
        "Sort letters like sorting mangoes",
        "Create letter art with mango prints",
        "Play letter matching with fruit cards",
        "Draw letters in yellow and orange",
        "Make letter shapes with mango pieces"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-amber-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-amber-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Sweet Mango Letter Match - Tips & Strategies 🥭
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-amber-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-amber-300">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-amber-300">•</span>
                      <span className="text-amber-50">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-amber-300">
              Remember! 🌟
            </h2>
            <div className="space-y-3 text-amber-50">
              <p>
                Take your time with each letter, just like carefully choosing a ripe mango!
              </p>
              <p>
                Practice makes perfect - the more you work with letters, the better
                you'll get at recognizing them, just like becoming a mango expert.
              </p>
              <p>
                Have fun while learning! Try to spot these letters everywhere you go,
                especially in the fruit section of your grocery store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangoLetterMatchingTips; 