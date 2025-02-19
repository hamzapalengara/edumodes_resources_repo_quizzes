import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BasketballMultiplicationTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding the 7 Times Table",
      points: [
        "Think of 7 players in a basketball team lineup",
        "Each number in the 7 times table is like adding another team",
        "7 × 1 = 7 (one team of players)",
        "7 × 2 = 14 (two teams ready to play)",
        "Look for patterns in the answers (7, 14, 21, 28, 35...)"
      ]
    },
    {
      title: "Basketball Multiplication Strategies",
      points: [
        "Count by 7s like counting basketball teams",
        "Use your fingers to keep track (each finger = one team of 7)",
        "Visualize basketball team formations",
        "Think of basketball games (2 teams × 7 players = 14)",
        "Remember: each new number adds another 7"
      ]
    },
    {
      title: "Memory Tricks",
      points: [
        "7 × 7 = 49 (like a full court of teams)",
        "7 × 10 = 70 (like ten teams in a tournament)",
        "The ones digits follow a pattern: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0",
        "Use basketball team formations to help remember",
        "Practice counting in sevens while dribbling"
      ]
    },
    {
      title: "Fun Basketball Activities",
      points: [
        "Arrange players in groups of seven",
        "Score baskets in sets of seven",
        "Count basketball passes in groups of seven",
        "Organize practice drills with seven players",
        "Set up mini-tournaments with seven players per team"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-orange-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-orange-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Basketball Multiplication - Tips & Strategies 🏀
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-orange-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-amber-400">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-amber-400">•</span>
                      <span className="text-orange-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-amber-400">
              Quick Practice Tips
            </h2>
            <ul className="space-y-3 text-orange-100">
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Start with easier facts (7×1, 7×2, 7×5, 7×10) and build up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Practice daily using basketball team scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Use the matching game to test your knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Draw basketball formations to visualize groups of seven</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketballMultiplicationTips; 