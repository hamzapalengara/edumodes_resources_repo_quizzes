import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const MultiplicationTips: React.FC = () => {
  const examples = [
    {
      title: "Groups of Objects",
      description: "Think of multiplication as making equal groups of things",
      visual: "🍎🍎 + 🍎🍎 + 🍎🍎",
      explanation: "3 groups of 2 apples = 3 × 2 = 6 apples"
    },
    {
      title: "Skip Counting",
      description: "Count by the same number to find the answer",
      visual: "2, 4, 6, 8, 10",
      explanation: "Counting by 2s five times = 5 × 2 = 10"
    },
    {
      title: "Arrays",
      description: "Arrange objects in rows and columns",
      visual: "⭐⭐⭐\n⭐⭐⭐\n⭐⭐⭐",
      explanation: "3 rows of 3 stars = 3 × 3 = 9 stars"
    }
  ];

  const strategies = [
    {
      icon: "🎯",
      title: "Start Small",
      tips: [
        "Begin with small numbers (1-5)",
        "Practice one number at a time",
        "Use objects you can touch and count"
      ]
    },
    {
      icon: "🎨",
      title: "Make It Visual",
      tips: [
        "Draw pictures for each problem",
        "Use different colors for groups",
        "Make arrays with objects"
      ]
    },
    {
      icon: "🎮",
      title: "Make It Fun",
      tips: [
        "Create stories about the groups",
        "Use your favorite toys or snacks",
        "Play multiplication games"
      ]
    },
    {
      icon: "🌟",
      title: "Practice Tips",
      tips: [
        "Practice a little bit every day",
        "Say the problems out loud",
        "Look for multiplication in daily life"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <WorksheetHeader />
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Fun Ways to Learn Multiplication! 🎯
            </h1>

            {/* Introduction */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8 border-2 border-blue-200">
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                Welcome to Multiplication Adventure! 🚀
              </h2>
              <p className="text-blue-700">
                Multiplication is like a superpower that helps us add the same number many times, really fast! 
                Let's discover fun ways to learn and practice multiplication together.
              </p>
            </div>

            {/* Visual Examples */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-purple-600 mb-4">
                Ways to Think About Multiplication 🤔
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {examples.map((example, index) => (
                  <div 
                    key={index}
                    className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200"
                  >
                    <h3 className="font-bold text-purple-700 mb-2">
                      {example.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {example.description}
                    </p>
                    <div className="text-2xl mb-2 text-center whitespace-pre-line">
                      {example.visual}
                    </div>
                    <p className="text-sm text-purple-600 text-center">
                      {example.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Strategies */}
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <div 
                  key={index}
                  className="bg-green-50 rounded-lg p-6 border-2 border-green-200"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{strategy.icon}</span>
                    <h3 className="text-lg font-bold text-green-700">
                      {strategy.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {strategy.tips.map((tip, tipIndex) => (
                      <li 
                        key={tipIndex}
                        className="flex items-start text-gray-700"
                      >
                        <span className="mr-2 text-green-500">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Fun Facts */}
            <div className="mt-8 bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
              <h2 className="text-xl font-bold text-yellow-700 mb-4">
                Fun Facts About Multiplication! ⭐
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">🎈</span>
                  Multiplying by 2 is like adding a number to itself!
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎪</span>
                  Multiplying by 5 is like counting by 5s!
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎭</span>
                  Multiplying by 10 just adds a zero to the end!
                </li>
              </ul>
            </div>

            {/* Encouragement */}
            <div className="mt-8 text-center">
              <p className="text-xl text-blue-600 font-bold">
                Remember: Practice makes progress! 🌟
              </p>
              <p className="text-gray-600 mt-2">
                Every time you practice, your multiplication skills get stronger!
              </p>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default MultiplicationTips; 