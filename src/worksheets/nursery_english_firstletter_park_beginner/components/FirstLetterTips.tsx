import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface TipSection {
  icon: string;
  title: string;
  tips: string[];
}

const tipSections: TipSection[] = [
  {
    icon: "🎈",
    title: "Before You Start",
    tips: [
      "Find a quiet spot to focus on the balloon game",
      "Make sure your device's sound is turned on",
      "Get ready to listen and pop balloons",
      "Remember that learning is fun with balloons!"
    ]
  },
  {
    icon: "🎯",
    title: "Balloon Game Strategies",
    tips: [
      "Listen to each park word carefully",
      "Look at the letters on the balloons",
      "Think about which sound comes first",
      "Pop the balloon with the matching letter"
    ]
  },
  {
    icon: "🌳",
    title: "Park Word Tips",
    tips: [
      "Think about things you see at the park",
      "Connect words to park activities",
      "Use the pictures to help remember words",
      "Practice saying park words slowly"
    ]
  },
  {
    icon: "👂",
    title: "Sound Recognition Tips",
    tips: [
      "Focus on the very first sound you hear",
      "Say the sound out loud before choosing",
      "Match the sound to the letter balloon",
      "Practice making the sound yourself"
    ]
  },
  {
    icon: "❓",
    title: "Common Challenges",
    tips: [
      "Take your time - don't rush to pop balloons",
      "Listen to the word again if needed",
      "Some letters might look similar",
      "Practice each sound clearly"
    ]
  },
  {
    icon: "🎮",
    title: "Making It Fun",
    tips: [
      "Pretend you're at a park balloon festival",
      "Celebrate each correct answer",
      "Try to beat your previous score",
      "Share what you learn with friends"
    ]
  }
];

const FirstLetterTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4 border-2 border-green-200">
          <h1 className="text-2xl font-bold text-green-800 text-center">
            Tips for Park Word Balloon Game
          </h1>
          <p className="text-green-600 text-center mt-2">
            Fun strategies to master first letters with balloon popping!
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid gap-6">
          {tipSections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-green-200"
            >
              {/* Section Header */}
              <div className="bg-green-100 p-4 flex items-center gap-3">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="text-xl font-bold text-green-800">
                  {section.title}
                </h2>
              </div>

              {/* Tips List */}
              <div className="p-4">
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li 
                      key={tipIndex}
                      className="flex items-start gap-3"
                    >
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="bg-white rounded-lg shadow-md mt-6 p-6 border-2 border-green-200">
          <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
            <span>🎈</span>
            Quick Balloon Game Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Do:</h3>
              <ul className="space-y-2 text-green-600">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Listen carefully to each word
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Pop the correct letter balloon
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Have fun learning!
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Don't:</h3>
              <ul className="space-y-2 text-green-600">
                <li className="flex items-center gap-2">
                  <span>✗</span>
                  Rush to pop balloons
                </li>
                <li className="flex items-center gap-2">
                  <span>✗</span>
                  Skip listening to words
                </li>
                <li className="flex items-center gap-2">
                  <span>✗</span>
                  Get discouraged by mistakes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterTips; 