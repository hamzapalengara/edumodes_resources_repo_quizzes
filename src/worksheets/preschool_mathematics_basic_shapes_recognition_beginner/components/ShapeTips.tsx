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
  benefits: string[];
}

const ShapeTips: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState<number | null>(null);
  const [activeActivity, setActiveActivity] = useState<number | null>(null);

  const strategies: Strategy[] = [
    {
      title: "Look at the Edges",
      description: "Count the sides and corners",
      example: "A triangle has 3 sides and 3 corners",
      visual: "▲",
      steps: [
        "Start at any corner",
        "Count each side as you go around",
        "Count each corner you find",
        "Remember how many you counted"
      ]
    },
    {
      title: "Compare Sizes",
      description: "Look at the width and height",
      example: "A square has equal sides, a rectangle is longer",
      visual: "⬛",
      steps: [
        "Look at the top and bottom",
        "Look at the left and right sides",
        "Are they the same length?",
        "This tells you the shape!"
      ]
    },
    {
      title: "Find in Nature",
      description: "Shapes are everywhere around us",
      example: "The sun is a circle, mountains are triangles",
      visual: "🌍",
      steps: [
        "Look at objects around you",
        "Think about their basic shape",
        "Compare to shapes you know",
        "Practice naming them"
      ]
    }
  ];

  const activities: Activity[] = [
    {
      title: "Shape Hunt",
      description: "Find shapes in your home",
      materials: ["Paper to draw found shapes", "Colored markers"],
      visual: "🔍",
      benefits: [
        "Improves shape recognition",
        "Connects shapes to real objects",
        "Makes learning fun and active"
      ]
    },
    {
      title: "Shape Drawing",
      description: "Practice drawing basic shapes",
      materials: ["Paper", "Crayons or markers"],
      visual: "✏️",
      benefits: [
        "Develops fine motor skills",
        "Reinforces shape properties",
        "Encourages creativity"
      ]
    },
    {
      title: "Shape Songs",
      description: "Learn shapes through music",
      materials: ["Shape-themed songs", "Space to move"],
      visual: "🎵",
      benefits: [
        "Makes learning memorable",
        "Adds movement to learning",
        "Fun for group activities"
      ]
    },
    {
      title: "Play Dough Shapes",
      description: "Create shapes with play dough",
      materials: ["Play dough", "Flat surface"],
      visual: "🎨",
      benefits: [
        "Tactile learning experience",
        "Strengthens hand muscles",
        "Allows shape manipulation"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <WorksheetHeader>
        <h1 className="text-xl sm:text-2xl font-bold text-white px-4">Shape Learning Tips</h1>
      </WorksheetHeader>

      <div className="p-4 md:p-6 space-y-6 md:space-y-8 max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 md:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-green-800 mb-3 sm:mb-4">Fun Ways to Learn Shapes!</h2>
          <p className="text-green-700 text-sm sm:text-base">
            Here are some helpful strategies and fun activities to practice recognizing shapes. Click on each card to learn more!
          </p>
        </div>

        {/* Strategies Section */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-green-800 mb-3 sm:mb-4">Shape Learning Strategies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                  <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl shrink-0">{strategy.visual}</span>
                      <h3 className="text-base sm:text-lg font-semibold text-green-700">
                        {strategy.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{strategy.description}</p>
                    <div className="text-sm sm:text-base text-green-600 italic">{strategy.example}</div>
                    {activeStrategy === index && (
                      <div className="mt-3 sm:mt-4 animate-fadeIn">
                        <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                          <h4 className="font-medium text-green-800 mb-2 text-sm sm:text-base">Try these steps:</h4>
                          <ol className="space-y-1">
                            {strategy.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="text-green-700 flex items-start gap-2 text-sm sm:text-base">
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
          <h2 className="text-lg sm:text-xl font-bold text-teal-800 mb-3 sm:mb-4">Fun Practice Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                  <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl shrink-0">{activity.visual}</span>
                      <h3 className="text-base sm:text-lg font-semibold text-teal-700">
                        {activity.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{activity.description}</p>
                    {activeActivity === index && (
                      <div className="mt-3 sm:mt-4 animate-fadeIn">
                        <div className="bg-teal-50 rounded-lg p-3 sm:p-4">
                          <div className="mb-3">
                            <h4 className="font-medium text-teal-800 mb-2 text-sm sm:text-base">What you need:</h4>
                            <ul className="space-y-1">
                              {activity.materials.map((material, materialIndex) => (
                                <li key={materialIndex} className="text-teal-700 flex items-center gap-2 text-sm sm:text-base">
                                  <span className="text-teal-500">•</span>
                                  <span>{material}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-800 mb-2 text-sm sm:text-base">Benefits:</h4>
                            <ul className="space-y-1">
                              {activity.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="text-teal-700 flex items-center gap-2 text-sm sm:text-base">
                                  <span className="text-teal-500">✓</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
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
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-3 sm:p-4 md:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-yellow-800 mb-3 sm:mb-4">Shape Properties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⭕</span>
                  <h4 className="font-semibold text-yellow-800">Circle</h4>
                </div>
                <ul className="space-y-1 text-sm sm:text-base text-yellow-700">
                  <li>• Round and smooth</li>
                  <li>• No corners</li>
                  <li>• Rolls easily</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">⬛</span>
                  <h4 className="font-semibold text-yellow-800">Square</h4>
                </div>
                <ul className="space-y-1 text-sm sm:text-base text-yellow-700">
                  <li>• 4 equal sides</li>
                  <li>• 4 corners</li>
                  <li>• Like a box</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">▲</span>
                  <h4 className="font-semibold text-yellow-800">Triangle</h4>
                </div>
                <ul className="space-y-1 text-sm sm:text-base text-yellow-700">
                  <li>• 3 sides</li>
                  <li>• 3 corners</li>
                  <li>• Like a mountain</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">▬</span>
                  <h4 className="font-semibold text-yellow-800">Rectangle</h4>
                </div>
                <ul className="space-y-1 text-sm sm:text-base text-yellow-700">
                  <li>• 4 sides</li>
                  <li>• Longer than tall</li>
                  <li>• Like a door</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShapeTips; 