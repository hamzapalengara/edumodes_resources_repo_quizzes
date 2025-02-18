import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const OrangeNumberMatchingTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding Numbers and Words",
      points: [
        "Numbers (6, 7, 8...) are like counting oranges on a tree",
        "Number words (six, seven, eight...) tell us how to say the numbers",
        "Each number has its own special word",
        "Practice saying the numbers while counting objects",
        "Look for numbers and words in your daily life"
      ]
    },
    {
      title: "Orange Counting Tips",
      points: [
        "Count oranges one at a time",
        "Say the number word as you count each orange",
        "Use your finger to point at each orange",
        "Group oranges to make counting easier",
        "Practice writing numbers and their words"
      ]
    },
    {
      title: "Number Recognition Tips",
      points: [
        "Look for numbers on calendars and clocks",
        "Count items in your fruit basket",
        "Find numbers on grocery store signs",
        "Count steps while jumping",
        "Look for numbers on house addresses"
      ]
    },
    {
      title: "Fun Number Activities",
      points: [
        "Count oranges in your fruit bowl",
        "Draw numbers in the sand",
        "Make number cards with orange stickers",
        "Play number matching games",
        "Count objects while helping in the kitchen"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-orange-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-orange-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Orange Number Match - Tips & Strategies 🍊
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-orange-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-yellow-300">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-yellow-300">•</span>
                      <span className="text-orange-50">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Remember! 🌟
            </h2>
            <div className="space-y-3 text-orange-50">
              <p>
                Take your time counting and matching numbers with their words.
              </p>
              <p>
                Practice makes perfect - the more you work with numbers,
                the better you'll get at recognizing them!
              </p>
              <p>
                Have fun while learning! Try to find numbers and count things
                everywhere you go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrangeNumberMatchingTips; 