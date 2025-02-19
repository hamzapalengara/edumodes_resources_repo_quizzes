import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const HockeyMultiplicationTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding the 5 Times Table",
      points: [
        "Think of 5 players on a hockey team on the ice",
        "Each number in the 5 times table is like adding another line of players",
        "5 × 1 = 5 (like one line of players)",
        "5 × 2 = 10 (like two lines ready to play)",
        "Look for patterns in the answers (5, 10, 15, 20, 25...)"
      ]
    },
    {
      title: "Hockey Multiplication Strategies",
      points: [
        "Count by 5s like counting hockey players",
        "Use your hand to count (5 fingers = one group)",
        "Visualize hockey lines with 5 players each",
        "Think of hockey periods (3 periods × 5 players = 15)",
        "Remember: each new number adds another 5"
      ]
    },
    {
      title: "Memory Tricks",
      points: [
        "5 × 5 = 25 (like a full team roster)",
        "5 × 10 = 50 (like ten lines of players)",
        "All answers end in 5 or 0",
        "Even multipliers give answers ending in 0",
        "Odd multipliers give answers ending in 5"
      ]
    },
    {
      title: "Fun Hockey Activities",
      points: [
        "Count players in groups of five",
        "Score goals in sets of five",
        "Group hockey cards in sets of five",
        "Count hockey sticks in fives",
        "Arrange hockey pucks in groups of five"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Hockey Multiplication - Tips & Strategies 🏒
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-red-400">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span className="text-slate-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-red-400">
              Quick Practice Tips
            </h2>
            <ul className="space-y-3 text-slate-100">
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span>Start with easier facts (5×1, 5×2, 5×5, 5×10) and build up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span>Practice daily using hockey team scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span>Use the matching game to test your knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span>Draw hockey lineups to visualize groups of five</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HockeyMultiplicationTips; 