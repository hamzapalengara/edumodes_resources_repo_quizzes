import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BoxingMultiplicationTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding the 8 Times Table",
      points: [
        "Think of 8 rounds in a boxing match",
        "Each number in the 8 times table is like counting rounds",
        "8 × 1 = 8 (one round completed)",
        "8 × 2 = 16 (two rounds finished)",
        "Look for patterns in the answers (8, 16, 24, 32, 40...)"
      ]
    },
    {
      title: "Boxing Multiplication Strategies",
      points: [
        "Count by 8s like counting boxing rounds",
        "Use your fingers to keep track (each finger = one round)",
        "Visualize boxing ring corners",
        "Think of boxing matches (4 rounds × 8 points = 32)",
        "Remember: each new number adds another 8"
      ]
    },
    {
      title: "Memory Tricks",
      points: [
        "8 × 8 = 64 (like a full championship match)",
        "8 × 10 = 80 (like a perfect score in ten rounds)",
        "The ones digits follow a pattern: 8, 6, 4, 2, 0, 8, 6, 4, 2, 0",
        "Use boxing ring positions to help remember",
        "Practice counting in eights while shadow boxing"
      ]
    },
    {
      title: "Fun Boxing Activities",
      points: [
        "Count punches in sets of eight",
        "Do boxing exercises in groups of eight",
        "Time practice rounds in eight-second intervals",
        "Organize training sets with eight repetitions",
        "Set up mini-matches with eight scoring points"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Boxing Multiplication - Tips & Strategies 🥊
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-yellow-400">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-yellow-400">•</span>
                      <span className="text-slate-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-400">
              Quick Practice Tips
            </h2>
            <ul className="space-y-3 text-slate-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Start with easier facts (8×1, 8×2, 8×5, 8×10) and build up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Practice daily using boxing round scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Use the matching game to test your knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Draw boxing ring layouts to visualize groups of eight</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxingMultiplicationTips; 