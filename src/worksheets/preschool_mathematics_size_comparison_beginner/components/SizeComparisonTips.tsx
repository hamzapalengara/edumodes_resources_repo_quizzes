import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const SizeComparisonTips: React.FC = () => {
  const learningTips = [
    {
      title: "Understanding Size Differences",
      tips: [
        "Look at both objects carefully",
        "Think about which one would take up more space",
        "Compare with things you know",
        "Use your hands to show big and small"
      ],
      emoji: "📏"
    },
    {
      title: "Height Comparison",
      tips: [
        "Look at how tall each thing is",
        "Think about which one reaches higher",
        "Compare from bottom to top",
        "Use your hand to show tall and short"
      ],
      emoji: "📊"
    },
    {
      title: "Real-World Examples",
      tips: [
        "Big things: elephants, trees, buildings",
        "Small things: ants, flowers, toys",
        "Tall things: giraffes, buildings, trees",
        "Short things: cats, bushes, chairs"
      ],
      emoji: "🌍"
    }
  ];

  const practiceActivities = [
    {
      title: "Compare Your Toys",
      description: "Look at your toys and find which ones are bigger or smaller than others.",
      emoji: "🧸"
    },
    {
      title: "Family Height Line",
      description: "Stand next to family members to see who is taller or shorter.",
      emoji: "👨‍👩‍👧‍👦"
    },
    {
      title: "Nature Walk",
      description: "Go outside and find big and small leaves, or tall and short plants.",
      emoji: "🍃"
    },
    {
      title: "Size Sorting",
      description: "Collect different objects and sort them by size (big/small).",
      emoji: "🔄"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-4">
              Size Comparison Tips and Tricks! 🎯
            </h1>
            <p className="text-center text-purple-600">
              Let's learn how to compare sizes easily and have fun doing it!
            </p>
          </div>

          {/* Learning Tips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {learningTips.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-400"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{section.emoji}</span>
                  <h2 className="text-lg font-bold text-purple-700">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-purple-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Fun Practice Activities */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">🎮</span>
              Fun Practice Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {practiceActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-purple-50 rounded-lg p-4 border border-purple-100"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{activity.emoji}</span>
                    <h3 className="font-bold text-purple-700">{activity.title}</h3>
                  </div>
                  <p className="text-purple-600">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Remember Box */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Remember
            </h2>
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
              <ul className="space-y-2 text-yellow-800">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Take your time to look carefully
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Practice comparing different things every day
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Ask for help if you're not sure
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Have fun learning about sizes!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default SizeComparisonTips; 