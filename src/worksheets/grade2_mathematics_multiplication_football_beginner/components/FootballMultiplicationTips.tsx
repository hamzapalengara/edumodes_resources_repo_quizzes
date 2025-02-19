import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const FootballMultiplicationTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding the 2 Times Table",
      points: [
        "Think of 2 times table as scoring 2 goals at a time",
        "Each number in the 2 times table is like adding another pair of goals",
        "2 × 1 = 2 (like scoring 2 goals in one shot)",
        "2 × 2 = 4 (like scoring 2 goals twice)",
        "Look for patterns in the answers (2, 4, 6, 8, 10...)"
      ]
    },
    {
      title: "Football Multiplication Strategies",
      points: [
        "Count by 2s like counting pairs of football boots",
        "Use the doubles strategy (1+1, 2+2, 3+3, etc.)",
        "Visualize players in pairs on the field",
        "Think of football teams with 2 players each",
        "Remember: each new number adds another 2"
      ]
    },
    {
      title: "Memory Tricks",
      points: [
        "2 × 5 = 10 (like 5 pairs of players make a team of 10)",
        "2 × 10 = 20 (like 10 pairs make two full teams)",
        "Even numbers are like complete pairs",
        "Count the goals in pairs",
        "Use your fingers in pairs to count up"
      ]
    },
    {
      title: "Fun Football Activities",
      points: [
        "Count players in pairs during a match",
        "Score goals in pairs during practice",
        "Group football cards in pairs",
        "Count football boots in pairs",
        "Arrange football stickers in pairs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-green-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Football Multiplication - Tips & Strategies ⚽
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
              Remember! 🌟
            </h2>
            <div className="space-y-3 text-green-50">
              <p>
                Take your time with each multiplication fact, just like practicing penalty kicks!
              </p>
              <p>
                Practice makes perfect - the more you work with the 2 times table,
                the better you'll get at scoring these multiplication goals!
              </p>
              <p>
                Have fun while learning! Try to spot pairs and use the 2 times table
                in your football activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballMultiplicationTips; 