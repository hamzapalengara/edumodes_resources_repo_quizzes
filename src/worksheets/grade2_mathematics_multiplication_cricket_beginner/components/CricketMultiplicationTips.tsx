import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const CricketMultiplicationTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding the 3 Times Table",
      points: [
        "Think of scoring three runs in cricket - each multiplication fact shows how many total runs you get",
        "Visualize groups of three fielders to help remember the facts",
        "Count by threes, just like counting overs in cricket"
      ]
    },
    {
      title: "Cricket Scoring Strategy",
      points: [
        "3 × 1 is like scoring one boundary of three runs",
        "3 × 2 is like scoring two boundaries of three runs each",
        "3 × 3 is like three sets of three runs, and so on"
      ]
    },
    {
      title: "Memory Tricks",
      points: [
        "Use cricket field positions - three fielders in different areas",
        "Think of overs - each over can score three runs",
        "Remember that all answers in the 3 times table are multiples of 3"
      ]
    },
    {
      title: "Fun Cricket Activities",
      points: [
        "Practice counting runs in threes while watching cricket",
        "Set up fielders in groups of three to visualize multiplication",
        "Create your own cricket scoring scenarios using threes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-blue-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Cricket Multiplication Tips 🏏
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
                      <span className="text-blue-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Quick Practice Tips
            </h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Start with easier facts (3×1, 3×2, 3×5, 3×10) and build up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Practice daily using cricket scoring scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Use the matching game to test your knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Draw cricket field diagrams to visualize the facts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketMultiplicationTips; 