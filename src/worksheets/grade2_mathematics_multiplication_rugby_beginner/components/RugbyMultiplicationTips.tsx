import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const RugbyMultiplicationTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding the 6 Times Table",
      points: [
        "Think of 6 players in a rugby team formation",
        "Each number in the 6 times table is like adding another team",
        "6 × 1 = 6 (one team of players)",
        "6 × 2 = 12 (two teams ready to play)",
        "Look for patterns in the answers (6, 12, 18, 24, 30...)"
      ]
    },
    {
      title: "Rugby Multiplication Strategies",
      points: [
        "Count by 6s like counting rugby teams",
        "Use your fingers to keep track (each finger = one team of 6)",
        "Visualize rugby formations with 6 players each",
        "Think of rugby matches (2 teams × 6 players = 12)",
        "Remember: each new number adds another 6"
      ]
    },
    {
      title: "Memory Tricks",
      points: [
        "6 × 6 = 36 (like a full tournament of teams)",
        "6 × 10 = 60 (like ten teams in a league)",
        "All answers are even numbers",
        "The ones digit follows a pattern: 6, 2, 8, 4, 0",
        "Use rugby team formations to help remember"
      ]
    },
    {
      title: "Fun Rugby Activities",
      points: [
        "Arrange players in groups of six",
        "Score tries in sets of six",
        "Count rugby balls in groups of six",
        "Organize practice drills with six players",
        "Set up mini-tournaments with six players per team"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-green-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Rugby Multiplication - Tips & Strategies 🏉
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-green-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-amber-400">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-amber-400">•</span>
                      <span className="text-green-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-amber-400">
              Quick Practice Tips
            </h2>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Start with easier facts (6×1, 6×2, 6×5, 6×10) and build up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Practice daily using rugby team scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Use the matching game to test your knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Draw rugby formations to visualize groups of six</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RugbyMultiplicationTips; 