import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const AntonymTips: React.FC = () => {
  const tips = [
    {
      title: "Start with the Given Word",
      content: "Look at the word shown in the list. Think about what this word means.",
      icon: "👀"
    },
    {
      title: "Think About Opposites",
      content: "What would mean the complete opposite? If something is BIG, its opposite would be SMALL.",
      icon: "🤔"
    },
    {
      title: "Use the Pictures",
      content: "The emoji next to each word gives you a hint about the meaning. This can help you think of the opposite!",
      icon: "🖼️"
    },
    {
      title: "Search Carefully",
      content: "Look for the opposite word in the grid. It can go across (→) or down (↓).",
      icon: "🔍"
    },
    {
      title: "Check Your Answer",
      content: "When you find a word, it will appear below the given word if it's correct!",
      icon: "✅"
    }
  ];

  const examples = [
    {
      given: "BIG",
      opposite: "SMALL",
      explanation: "If BIG means taking up lots of space, what would be the opposite?",
      image: "🐘"
    },
    {
      given: "HOT",
      opposite: "COLD",
      explanation: "If HOT means warm like the sun, what would be the opposite?",
      image: "🌡️"
    },
    {
      given: "HAPPY",
      opposite: "SAD",
      explanation: "If HAPPY means feeling good and smiling, what would be the opposite?",
      image: "😊"
    },
    {
      given: "FAST",
      opposite: "SLOW",
      explanation: "If FAST means moving quickly, what would be the opposite?",
      image: "🐇"
    },
    {
      given: "NEW",
      opposite: "OLD",
      explanation: "If NEW means just made, what would be the opposite?",
      image: "📦"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      <WorksheetHeader />
      
      <div className="px-0 md:p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
          <h1 className="text-2xl font-bold text-center mb-4 md:mb-6 text-purple-600">
            Tips for Finding Opposite Words!
          </h1>

          {/* Main Tips */}
          <div className="space-y-4 mb-8">
            {tips.map(({ title, content, icon }) => (
              <div 
                key={title}
                className="bg-purple-50 p-4 rounded-lg flex gap-4 items-start"
              >
                <span className="text-3xl">{icon}</span>
                <div>
                  <h3 className="font-bold text-purple-700 mb-2">{title}</h3>
                  <p className="text-gray-700">{content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Example Thinking Process */}
          <div className="bg-indigo-50 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-4 text-purple-700">
              How to Think About Opposites:
            </h2>
            <div className="space-y-4">
              {examples.map(({ given, opposite, explanation, image }) => (
                <div 
                  key={given}
                  className="bg-white p-4 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{image}</span>
                    <div>
                      <div className="font-bold text-purple-600">
                        Given: {given}
                      </div>
                      <div className="text-sm text-purple-400">
                        Think: {explanation}
                      </div>
                      <div className="font-bold text-purple-600 mt-1">
                        Answer: {opposite}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Play */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-purple-700">
              Steps to Play:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Look at the word given in the list</li>
              <li>Think about what would be its opposite</li>
              <li>Find that opposite word in the grid</li>
              <li>Drag your finger or mouse over the letters</li>
              <li>If correct, you'll see and hear the word!</li>
            </ol>
          </div>

          {/* Encouragement */}
          <div className="mt-8 text-center">
            <p className="text-lg text-purple-600 font-semibold">
              Remember: Think carefully about meanings and take your time! 🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntonymTips; 