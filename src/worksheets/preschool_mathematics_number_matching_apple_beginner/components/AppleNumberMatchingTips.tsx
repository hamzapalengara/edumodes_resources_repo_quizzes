import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const AppleNumberMatchingTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding Numbers and Words",
      points: [
        "Numbers (1, 2, 3...) are like counting apples on a tree",
        "Number words (one, two, three...) tell us how to say the numbers",
        "Each number has its own special word",
        "Practice saying the numbers while counting objects",
        "Look for numbers and words in your daily life"
      ]
    },
    {
      title: "Apple Counting Tips",
      points: [
        "Count apples one at a time",
        "Say the number word as you count each apple",
        "Use your finger to point at each apple",
        "Group apples to make counting easier",
        "Practice writing numbers and their words"
      ]
    },
    {
      title: "Number Recognition Tips",
      points: [
        "Look for numbers on clocks and phones",
        "Count items in your lunchbox",
        "Find numbers on price tags at the store",
        "Count steps as you walk",
        "Look for numbers on street signs"
      ]
    },
    {
      title: "Fun Number Activities",
      points: [
        "Count apples in your fruit bowl",
        "Draw numbers in the air",
        "Make number cards with pictures",
        "Play number matching games",
        "Count objects while setting the table"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-red-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Apple Number Match - Tips & Strategies 🍎
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-red-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-yellow-300">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-yellow-300">•</span>
                      <span className="text-red-50">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Remember! 🌟
            </h2>
            <div className="space-y-3 text-red-50">
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

export default AppleNumberMatchingTips; 