import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const CartoonLetterMatchingTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding Letter Pairs",
      points: [
        "Capital letters are like Tom (big and tall)",
        "Lowercase letters are like Jerry (small but clever)",
        "Each letter has its own unique shape",
        "Some letters look similar in both forms (like 'U' and 'u')",
        "Other letters look different (like 'S' and 's')"
      ]
    },
    {
      title: "Letter Chase Tips",
      points: [
        "Look at one letter at a time, like Tom chasing Jerry",
        "Compare the shapes carefully, like finding clues",
        "Remember that matching pairs make the same sound",
        "Practice writing both forms to remember them better",
        "Use memory tricks (like 'Super S, small s')"
      ]
    },
    {
      title: "Letter Recognition Tips",
      points: [
        "Find letters in cartoon titles",
        "Look for letters on TV show credits",
        "Spot letters in comic books",
        "Practice writing letters in different sizes",
        "Make letter shapes with your body"
      ]
    },
    {
      title: "Fun Letter Activities",
      points: [
        "Play letter hide and seek",
        "Create letter stories with characters",
        "Draw letters in different styles",
        "Make letter cards with pictures",
        "Act out letter shapes with friends"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-blue-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Letter Chase - Tips & Strategies 🐱🐭
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-blue-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-yellow-300">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-yellow-300">•</span>
                      <span className="text-blue-50">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Remember! 🌟
            </h2>
            <div className="space-y-3 text-blue-50">
              <p>
                Take your time with each letter, just like Tom carefully planning his chase!
              </p>
              <p>
                Practice makes perfect - the more you work with letters, the better
                you'll get at recognizing them, just like Jerry getting better at escaping.
              </p>
              <p>
                Have fun while learning! Try to spot these letters everywhere you go,
                especially in your favorite cartoons and comics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartoonLetterMatchingTips; 