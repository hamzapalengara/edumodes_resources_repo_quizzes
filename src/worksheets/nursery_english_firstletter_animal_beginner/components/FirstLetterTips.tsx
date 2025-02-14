import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface TipSection {
  icon: string;
  title: string;
  tips: string[];
}

const tipSections: TipSection[] = [
  {
    icon: "🦁",
    title: "Before You Start",
    tips: [
      "Find a quiet place to focus on the sounds",
      "Make sure your device's sound is turned on",
      "Get ready to listen carefully to each word",
      "Remember that learning takes time and practice"
    ]
  },
  {
    icon: "🎯",
    title: "Learning Strategies",
    tips: [
      "Listen to the word multiple times if needed",
      "Say the animal name slowly to yourself",
      "Think about other words that start with the same sound",
      "Use the animal pictures to help remember the words"
    ]
  },
  {
    icon: "🔍",
    title: "Sound Recognition Tips",
    tips: [
      "Focus on the very first sound you hear",
      "Try making the sound with your mouth",
      "Notice how your mouth moves when making the sound",
      "Connect the sound to animal noises when possible"
    ]
  },
  {
    icon: "🦒",
    title: "Animal Word Tips",
    tips: [
      "Think about animals you've seen at the zoo",
      "Practice with toy animals you can touch",
      "Draw pictures of animals and label them",
      "Make animal sounds while saying their names"
    ]
  },
  {
    icon: "❓",
    title: "Common Challenges",
    tips: [
      "Some letters can sound similar (like 'b' and 'p')",
      "Take your time - don't rush to answer",
      "If unsure, listen to the word again",
      "Practice each sound clearly and slowly"
    ]
  },
  {
    icon: "🎮",
    title: "Making It Fun",
    tips: [
      "Play 'I Spy' with animal pictures",
      "Sort toy animals by their first letter",
      "Make animal sounds and movements",
      "Create a zoo with animals grouped by their first letter"
    ]
  }
];

const FirstLetterTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4 border-2 border-green-100">
          <h1 className="text-2xl font-bold text-green-800 text-center">
            Tips for Learning Animal Word First Letters
          </h1>
          <p className="text-green-600 text-center mt-2">
            Helpful strategies to master identifying first letters of animal words
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid gap-6">
          {tipSections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-green-100"
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
        <div className="bg-white rounded-lg shadow-md mt-6 p-6 border-2 border-green-100">
          <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
            <span>🦁</span>
            Quick Reference Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Remember to:</h3>
              <ul className="space-y-2 text-green-600">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Listen carefully to each word
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Focus on the first sound
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  Practice with real animals
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Avoid:</h3>
              <ul className="space-y-2 text-green-600">
                <li className="flex items-center gap-2">
                  <span>✗</span>
                  Rushing to answer
                </li>
                <li className="flex items-center gap-2">
                  <span>✗</span>
                  Skipping practice
                </li>
                <li className="flex items-center gap-2">
                  <span>✗</span>
                  Getting discouraged
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