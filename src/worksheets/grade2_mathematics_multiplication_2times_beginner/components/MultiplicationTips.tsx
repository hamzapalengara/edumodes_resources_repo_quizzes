import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const MultiplicationTips: React.FC = () => {
  const strategies = [
    {
      title: "Count by Twos",
      description: "Practice counting by 2s: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20",
      example: "Like climbing stairs, taking 2 steps at a time! 🪜",
      visual: "2️⃣ ➡️ 4️⃣ ➡️ 6️⃣ ➡️ 8️⃣ ➡️ 🔟"
    },
    {
      title: "Double the Number",
      description: "Multiplying by 2 is the same as doubling the number",
      example: "3 × 2 is the same as 3 + 3 = 6",
      visual: "🍎🍎🍎 + 🍎🍎🍎 = 6 apples"
    },
    {
      title: "Use Your Fingers",
      description: "Hold up fingers to represent groups of 2",
      example: "For 4 × 2, hold up 4 fingers and count each finger as 2",
      visual: "👆(2) 👆(4) 👆(6) 👆(8)"
    },
    {
      title: "Look for Pairs",
      description: "Look for things that come in pairs in real life",
      example: "Shoes, socks, eyes, hands, wings",
      visual: "👞👞 🧦🧦 👀 🤲 🦋"
    }
  ];

  const practiceIdeas = [
    {
      title: "Pair Up Objects",
      description: "Practice with toys, blocks, or other objects by making pairs",
      visual: "🧸🧸 | 🎯🎯 | 🎲🎲"
    },
    {
      title: "Draw Pictures",
      description: "Draw groups of objects to visualize multiplication",
      visual: "✏️ 📝 🎨"
    },
    {
      title: "Play Memory Games",
      description: "Make cards with multiplication facts and play matching games",
      visual: "🃏 🎴 🎮"
    },
    {
      title: "Sing Songs",
      description: "Learn multiplication songs to remember the 2 times table",
      visual: "🎵 🎶 🎤"
    }
  ];

  const realLifeExamples = [
    "Counting pairs of shoes in your closet 👞👞",
    "Counting wheels on bikes (2 wheels each) 🚲",
    "Counting eyes on people or animals 👀",
    "Counting hands (2 per person) 🤲",
    "Counting wings on birds or butterflies 🦋"
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <WorksheetHeader />
      <TouchContainer>
        <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8">
          <div className="bg-white md:rounded-lg md:border md:border-gray-200 p-4 md:p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Tips for Learning the 2 Times Table! 💡
            </h1>

            {/* Main Strategies */}
            <div className="space-y-6 mb-6 md:mb-8">
              <h2 className="text-xl font-bold text-blue-700">
                Helpful Strategies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {strategies.map((strategy, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-2">
                      {strategy.title}
                    </h3>
                    <p className="text-blue-700 mb-2">
                      {strategy.description}
                    </p>
                    <div className="bg-white rounded p-2 text-center">
                      <p className="text-gray-600 mb-1">Example:</p>
                      <p className="text-lg">{strategy.example}</p>
                      <p className="text-xl md:text-2xl mt-2">{strategy.visual}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Ideas */}
            <div className="space-y-6 mb-6 md:mb-8">
              <h2 className="text-xl font-bold text-green-700">
                Fun Practice Ideas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {practiceIdeas.map((idea, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <h3 className="font-bold text-green-800 mb-2">
                      {idea.title}
                    </h3>
                    <p className="text-green-700 mb-2">
                      {idea.description}
                    </p>
                    <div className="text-center text-xl md:text-2xl">
                      {idea.visual}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Life Examples */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-purple-700">
                Find Multiplication in Real Life!
              </h2>
              <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                <ul className="space-y-3">
                  {realLifeExamples.map((example, index) => (
                    <li key={index} className="flex items-center text-purple-700">
                      <span className="mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="mt-6 md:mt-8 bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
              <h2 className="font-bold text-yellow-800 mb-4 text-lg">
                Quick Reference: 2 Times Table
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 text-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <div key={num} className="bg-white rounded-lg p-2 shadow-sm">
                    <div className="font-medium text-yellow-700">
                      {num} × 2 = {num * 2}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remember Box */}
            <div className="mt-6 md:mt-8 bg-pink-50 rounded-lg p-4 border-2 border-pink-200">
              <h2 className="font-bold text-pink-800 mb-2 text-lg">
                Remember! 🌟
              </h2>
              <ul className="list-disc list-inside space-y-2 text-pink-700">
                <li>Multiplication is repeated addition</li>
                <li>The 2 times table is about finding pairs</li>
                <li>Practice counting by 2s</li>
                <li>Look for groups of 2 in everyday life</li>
                <li>Take your time and have fun learning!</li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default MultiplicationTips; 