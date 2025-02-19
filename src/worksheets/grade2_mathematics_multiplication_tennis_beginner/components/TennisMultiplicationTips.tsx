import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TennisMultiplicationTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding the 4 Times Table",
      points: [
        "Think of 4 points making a game in tennis",
        "Each number in the 4 times table is like winning multiple points",
        "4 × 1 = 4 (like winning one game with four points)",
        "4 × 2 = 8 (like winning two games)",
        "Look for patterns in the answers (4, 8, 12, 16, 20...)"
      ]
    },
    {
      title: "Tennis Multiplication Strategies",
      points: [
        "Count by 4s like counting tennis games",
        "Use doubles twice (2×2 then double again)",
        "Visualize tennis courts in groups of four",
        "Think of tennis scoring: love, 15, 30, 40",
        "Remember: each new number adds another 4 points"
      ]
    },
    {
      title: "Memory Tricks",
      points: [
        "4 × 5 = 20 (like five games in tennis)",
        "4 × 10 = 40 (like reaching game point)",
        "Even numbers are like complete games",
        "Count points in sets of four",
        "Use tennis scoring to practice counting by 4s"
      ]
    },
    {
      title: "Fun Tennis Activities",
      points: [
        "Count tennis balls in groups of four",
        "Score practice games in fours",
        "Group tennis rackets in sets of four",
        "Count tennis court lines in fours",
        "Arrange tennis equipment in groups of four"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-green-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Tennis Multiplication - Tips & Strategies 🎾
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
                      <span className="text-green-50">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Quick Practice Tips
            </h2>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Start with easier facts (4×1, 4×2, 4×5, 4×10) and build up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Practice daily using tennis scoring scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Use the matching game to test your knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Draw tennis courts to visualize groups of four</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TennisMultiplicationTips; 