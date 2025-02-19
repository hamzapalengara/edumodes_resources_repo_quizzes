import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const AthleticsMultiplicationTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding the 9 Times Table",
      points: [
        "Think of 9 lanes on a running track",
        "Each number in the 9 times table is like completing laps",
        "9 × 1 = 9 (one lap completed)",
        "9 × 2 = 18 (two laps finished)",
        "Look for patterns in the answers (9, 18, 27, 36, 45...)"
      ]
    },
    {
      title: "Athletics Multiplication Strategies",
      points: [
        "Count by 9s like counting track laps",
        "Use your fingers to keep track (each finger = one lap)",
        "Visualize running track lanes",
        "Think of relay races (4 runners × 9 points = 36)",
        "Remember: each new number adds another 9"
      ]
    },
    {
      title: "Memory Tricks",
      points: [
        "9 × 9 = 81 (like a full decathlon event)",
        "9 × 10 = 90 (like a perfect score in track events)",
        "The ones digits follow a pattern: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0",
        "Use track lane positions to help remember",
        "Practice counting in nines while jogging in place"
      ]
    },
    {
      title: "Fun Athletics Activities",
      points: [
        "Count jumps in sets of nine",
        "Do running exercises in groups of nine",
        "Time practice sprints in nine-second intervals",
        "Organize training sets with nine repetitions",
        "Set up mini-races with nine scoring points"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-blue-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Athletics Multiplication - Tips & Strategies 🏃
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-blue-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-yellow-400">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-yellow-400">•</span>
                      <span className="text-blue-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-400">
              Quick Practice Tips
            </h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Start with easier facts (9×1, 9×2, 9×5, 9×10) and build up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Practice daily using track and field scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Use the matching game to test your knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Draw running track layouts to visualize groups of nine</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleticsMultiplicationTips; 