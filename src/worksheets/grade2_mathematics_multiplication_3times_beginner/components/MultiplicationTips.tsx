import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface Strategy {
  title: string;
  description: string;
  example: string;
  visual: string;
  animation?: string;
}

interface PracticeIdea {
  title: string;
  description: string;
  visual: string;
  steps?: string[];
}

const MultiplicationTips: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState<number | null>(null);
  const [activePractice, setActivePractice] = useState<number | null>(null);

  const strategies: Strategy[] = [
    {
      title: "Count by Threes",
      description: "Skip counting by 3s helps you learn the pattern in the 3 times table.",
      example: "3, 6, 9, 12, 15, 18, 21, 24, 27, 30",
      visual: "3️⃣ ➡️ 6️⃣ ➡️ 9️⃣",
      animation: "🔄 3 + 3 + 3 + 3..."
    },
    {
      title: "Groups of Three",
      description: "Think of multiplication by 3 as making equal groups of three items.",
      example: "4 × 3 = 3 + 3 + 3 + 3 = 12",
      visual: "🌟🌟🌟 | 🌟🌟🌟 | 🌟🌟🌟 | 🌟🌟🌟",
      animation: "👥👥👥 ➡️ Groups!"
    },
    {
      title: "Double Plus One Group",
      description: "First double the number, then add one more group.",
      example: "3 × 4 = (4 + 4) + 4 = 12",
      visual: "4️⃣+4️⃣+4️⃣=1️⃣2️⃣",
      animation: "2️⃣✖️ + 1️⃣"
    }
  ];

  const practiceIdeas: PracticeIdea[] = [
    {
      title: "Three-Step Dance",
      description: "Create dance moves in groups of three to practice counting by threes.",
      visual: "💃 🕺 👯",
      steps: [
        "Step 1: Make three different dance moves",
        "Step 2: Repeat them in order",
        "Step 3: Count as you dance: 3, 6, 9..."
      ]
    },
    {
      title: "Triangle Hunt",
      description: "Find triangles around you - they have 3 sides! Count groups of triangles.",
      visual: "📐 ▲ △",
      steps: [
        "Step 1: Spot a triangle",
        "Step 2: Count its sides (3)",
        "Step 3: Find more triangles and multiply!"
      ]
    },
    {
      title: "Three's Collection",
      description: "Collect items in groups of three and practice counting the total.",
      visual: "🎈🎈🎈",
      steps: [
        "Step 1: Choose an item to collect",
        "Step 2: Make groups of three",
        "Step 3: Count the total!"
      ]
    }
  ];

  const realLifeExamples = [
    {
      situation: "Counting wheels on tricycles",
      visual: "🚲",
      explanation: "Each tricycle has 3 wheels"
    },
    {
      situation: "Finding total slices when sharing 3 pizzas",
      visual: "🍕",
      explanation: "Each pizza has 3 slices"
    },
    {
      situation: "Counting legs on insects",
      visual: "🐜",
      explanation: "Each insect has 3 pairs of legs"
    },
    {
      situation: "Organizing items in trays",
      visual: "🗄️",
      explanation: "Each tray has 3 sections"
    },
    {
      situation: "Counting petals on trillium flowers",
      visual: "🌸",
      explanation: "Each flower has 3 petals"
    }
  ];

  return (
    <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8 bg-white min-h-screen">
      <WorksheetHeader>
        <h1 className="text-2xl font-bold text-white">Tips for Learning the 3 Times Table</h1>
      </WorksheetHeader>
      
      <div className="md:p-6 space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg md:p-6 p-4">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Welcome to the 3 Times Table!</h2>
          <p className="text-blue-700">
            Learning multiplication can be fun! Click on each card to discover more details and tips.
          </p>
        </div>
        
        {/* Strategies Section */}
        <section>
          <h2 className="text-xl font-bold text-blue-800 mb-4">Learning Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategies.map((strategy, index) => (
              <TouchContainer key={index}>
                <div 
                  className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 cursor-pointer ${
                    activeStrategy === index 
                      ? 'border-blue-400 shadow-lg' 
                      : 'border-gray-200 hover:border-blue-200'
                  }`}
                  onClick={() => setActiveStrategy(activeStrategy === index ? null : index)}
                >
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                      {strategy.title}
                      <span className="text-2xl">{strategy.visual}</span>
                    </h3>
                    <p className="text-gray-700">{strategy.description}</p>
                    {activeStrategy === index && (
                      <div className="mt-4 space-y-3 animate-fadeIn">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-blue-800 font-medium">Example: {strategy.example}</p>
                        </div>
                        {strategy.animation && (
                          <div className="text-2xl text-center animate-bounce">
                            {strategy.animation}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </TouchContainer>
            ))}
          </div>
        </section>

        {/* Practice Ideas Section */}
        <section>
          <h2 className="text-xl font-bold text-purple-800 mb-4">Fun Practice Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {practiceIdeas.map((idea, index) => (
              <TouchContainer key={index}>
                <div 
                  className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 cursor-pointer ${
                    activePractice === index 
                      ? 'border-purple-400 shadow-lg' 
                      : 'border-gray-200 hover:border-purple-200'
                  }`}
                  onClick={() => setActivePractice(activePractice === index ? null : index)}
                >
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-semibold text-purple-700 flex items-center gap-2">
                      {idea.title}
                      <span className="text-2xl">{idea.visual}</span>
                    </h3>
                    <p className="text-gray-700">{idea.description}</p>
                    {activePractice === index && idea.steps && (
                      <div className="mt-4 space-y-2 animate-fadeIn">
                        {idea.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2 text-purple-700">
                            <span className="text-lg">👉</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </TouchContainer>
            ))}
          </div>
        </section>

        {/* Real-Life Examples Section */}
        <section>
          <h2 className="text-xl font-bold text-green-800 mb-4">Where to Find Threes</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg md:p-6 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {realLifeExamples.map((example, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-3xl">{example.visual}</span>
                  <div>
                    <p className="font-medium text-green-800">{example.situation}</p>
                    <p className="text-sm text-green-600">{example.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Reference Section */}
        <section>
          <h2 className="text-xl font-bold text-orange-800 mb-4">Quick Reference: 3 Times Table</h2>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg md:p-6 p-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-orange-800 font-medium">
                    {i + 1} × 3 = {(i + 1) * 3}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Remember Box */}
        <section>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 rounded-lg md:p-6 p-4">
            <h2 className="text-lg font-bold text-yellow-800 mb-4">Remember!</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-yellow-800">
                <span className="text-2xl">🔢</span>
                <span>Multiplication is repeated addition</span>
              </li>
              <li className="flex items-center gap-2 text-yellow-800">
                <span className="text-2xl">📈</span>
                <span>The 3 times table increases by 3 each time</span>
              </li>
              <li className="flex items-center gap-2 text-yellow-800">
                <span className="text-2xl">🎵</span>
                <span>Use skip counting to help remember the pattern</span>
              </li>
              <li className="flex items-center gap-2 text-yellow-800">
                <span className="text-2xl">👀</span>
                <span>Look for groups of three in the world around you!</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MultiplicationTips; 