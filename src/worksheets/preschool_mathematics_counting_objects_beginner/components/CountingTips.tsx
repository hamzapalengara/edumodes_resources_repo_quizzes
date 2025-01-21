import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface Strategy {
  title: string;
  description: string;
  example: string;
  visual: string;
  steps?: string[];
}

interface Activity {
  title: string;
  description: string;
  materials: string[];
  visual: string;
}

const CountingTips: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState<number | null>(null);
  const [activeActivity, setActiveActivity] = useState<number | null>(null);

  const strategies: Strategy[] = [
    {
      title: "One at a Time",
      description: "Touch each object as you count it",
      example: "Touch and count: 1, 2, 3...",
      visual: "👆",
      steps: [
        "Start from one side",
        "Touch each object once",
        "Say the number clearly",
        "Move to the next object"
      ]
    },
    {
      title: "Left to Right",
      description: "Always count from left to right",
      example: "⬅️ Start here and move right ➡️",
      visual: "➡️",
      steps: [
        "Begin at the left",
        "Move one step right",
        "Keep going right",
        "Stop at the last object"
      ]
    },
    {
      title: "Group and Count",
      description: "Arrange objects in a line to count easily",
      example: "Line up objects in a row",
      visual: "📏",
      steps: [
        "Put objects in a line",
        "Start from one end",
        "Count each object",
        "Check your counting"
      ]
    }
  ];

  const activities: Activity[] = [
    {
      title: "Counting Steps",
      description: "Count your steps as you walk",
      materials: ["Open space", "Walking shoes"],
      visual: "👣"
    },
    {
      title: "Counting Toys",
      description: "Count your favorite toys",
      materials: ["Different toys", "Clear space"],
      visual: "🧸"
    },
    {
      title: "Counting Snacks",
      description: "Count snacks before eating",
      materials: ["Small snacks", "Plate"],
      visual: "🍪"
    },
    {
      title: "Counting Claps",
      description: "Clap and count together",
      materials: ["Just your hands!", "Happy mood"],
      visual: "👏"
    }
  ];

  return (
    <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8 bg-white min-h-screen">
      <WorksheetHeader>
        <h1 className="text-2xl font-bold text-white">Fun Counting Tips</h1>
      </WorksheetHeader>

      <div className="md:p-6 space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg md:p-6 p-4">
          <h2 className="text-xl font-bold text-green-800 mb-4">Let's Learn to Count!</h2>
          <p className="text-green-700">
            Here are some fun ways to practice counting from 1 to 10. Click on each card to learn more!
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
                    {activeStrategy === index && strategy.steps && (
                      <div className="mt-4 space-y-2 animate-fadeIn">
                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-medium text-green-800 mb-2">How to do it:</h4>
                          {strategy.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center gap-2 text-green-700 mb-1">
                              <span className="text-green-500">•</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-green-600 italic">
                          Example: {strategy.example}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TouchContainer>
            ))}
          </div>
        </section>

        {/* Fun Activities Section */}
        <section>
          <h2 className="text-xl font-bold text-green-800 mb-4">Fun Counting Activities</h2>
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
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Remember These Numbers!</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <div className="text-2xl mb-2">{i + 1}</div>
                  <div className="text-yellow-700">
                    {'⭐'.repeat(i + 1)}
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

export default CountingTips; 