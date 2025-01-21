import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface Strategy {
  title: string;
  description: string;
  example: string;
  visual: string;
  steps: string[];
}

interface Activity {
  title: string;
  description: string;
  materials: string[];
  visual: string;
}

const TreasureTips: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState<number | null>(null);
  const [activeActivity, setActiveActivity] = useState<number | null>(null);

  const strategies: Strategy[] = [
    {
      title: "Follow the Steps",
      description: "Count each footprint as you go",
      example: "One footprint at a time: 1, 2, 3...",
      visual: "👣",
      steps: [
        "Start from the leftmost footprint",
        "Count each footprint once",
        "Say each number clearly",
        "Follow the running friend"
      ]
    },
    {
      title: "Left to Right",
      description: "Always count from left to right",
      example: "⬅️ Start here and move right ➡️",
      visual: "➡️",
      steps: [
        "Begin at the left side",
        "Move one step right",
        "Keep going right",
        "Reach the treasure at the end"
      ]
    },
    {
      title: "Watch Your Friend",
      description: "Follow the running friend's path",
      example: "Run along with your friend 🏃",
      visual: "🏃",
      steps: [
        "Look where your friend is",
        "Count the footprint below",
        "Move with your friend",
        "Reach the treasure together"
      ]
    }
  ];

  const activities: Activity[] = [
    {
      title: "Step and Count",
      description: "Take steps and count each one",
      materials: ["Open space", "Walking shoes"],
      visual: "👣"
    },
    {
      title: "Follow the Leader",
      description: "Follow a friend and count steps",
      materials: ["A friend", "Space to walk"],
      visual: "🏃"
    },
    {
      title: "Make a Path",
      description: "Draw footprints and count them",
      materials: ["Paper", "Crayons"],
      visual: "✏️"
    },
    {
      title: "Treasure Hunt",
      description: "Count steps to find hidden treasures",
      materials: ["Small toys", "Places to hide"],
      visual: "🎁"
    }
  ];

  const renderExample = (count: number) => {
    return (
      <div className="flex items-center gap-2">
        {Array.from({ length: count }, (_, i) => (
          <span key={i} className="text-xl">👣</span>
        ))}
        <span className="text-xl" style={{ transform: 'scaleX(-1)' }}>🏃</span>
        <span className="text-xl">🎁</span>
      </div>
    );
  };

  return (
    <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8 bg-white min-h-screen">
      <WorksheetHeader>
        <h1 className="text-2xl font-bold text-white">Fun Counting Tips</h1>
      </WorksheetHeader>

      <div className="md:p-6 space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg md:p-6 p-4">
          <h2 className="text-xl font-bold text-green-800 mb-4">Let's Count Steps!</h2>
          <p className="text-green-700">
            Here are some fun ways to practice counting steps from 1 to 10. Click on each card to learn more!
          </p>
        </div>

        {/* Strategies Section */}
        <section>
          <h2 className="text-xl font-bold text-green-800 mb-4">Counting Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {strategies.map((strategy, index) => (
              <TouchContainer key={index}>
                <div 
                  className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 h-full cursor-pointer ${
                    activeStrategy === index 
                      ? 'border-green-400 shadow-lg' 
                      : 'border-gray-200 hover:border-green-200'
                  }`}
                  onClick={() => setActiveStrategy(activeStrategy === index ? null : index)}
                >
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{strategy.visual}</span>
                      <h3 className="text-lg font-semibold text-green-700">
                        {strategy.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{strategy.description}</p>
                    <div className="text-green-600 italic">{strategy.example}</div>
                    {activeStrategy === index && (
                      <div className="mt-4 animate-fadeIn">
                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-medium text-green-800 mb-2">Follow these steps:</h4>
                          <ol className="space-y-1">
                            {strategy.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="text-green-700 flex items-start gap-2">
                                <span className="text-green-500">{stepIndex + 1}.</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TouchContainer>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section>
          <h2 className="text-xl font-bold text-teal-800 mb-4">Fun Practice Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <TouchContainer key={index}>
                <div 
                  className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 cursor-pointer ${
                    activeActivity === index 
                      ? 'border-teal-400 shadow-lg' 
                      : 'border-gray-200 hover:border-teal-200'
                  }`}
                  onClick={() => setActiveActivity(activeActivity === index ? null : index)}
                >
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{activity.visual}</span>
                      <h3 className="text-lg font-semibold text-teal-700">
                        {activity.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{activity.description}</p>
                    {activeActivity === index && (
                      <div className="mt-4 animate-fadeIn">
                        <div className="bg-teal-50 rounded-lg p-3">
                          <h4 className="font-medium text-teal-800 mb-2">What you need:</h4>
                          <ul className="space-y-1">
                            {activity.materials.map((material, materialIndex) => (
                              <li key={materialIndex} className="text-teal-700 flex items-center gap-2">
                                <span className="text-teal-500">•</span>
                                <span>{material}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TouchContainer>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg md:p-6 p-4">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Remember These Steps!</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <div className="text-2xl mb-2">{i + 1}</div>
                  <div className="text-yellow-700">
                    {renderExample(i + 1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TreasureTips; 