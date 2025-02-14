import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface TipSection {
  icon: string;
  title: string;
  tips: string[];
}

const tipSections: TipSection[] = [
  {
    icon: "👂",
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
      "Say the body part name slowly to yourself",
      "Think about other words that start with the same sound",
      "Use the body part pictures to help remember the words"
    ]
  },
  {
    icon: "🔍",
    title: "Sound Recognition Tips",
    tips: [
      "Focus on the very first sound you hear",
      "Try making the sound with your mouth",
      "Notice how your mouth moves when making the sound",
      "Connect the sound to familiar words you know"
    ]
  },
  {
    icon: "👤",
    title: "Body Part Word Tips",
    tips: [
      "Point to each body part as you say its name",
      "Practice in front of a mirror",
      "Draw a person and label the body parts",
      "Make movements with each body part as you say its name"
    ]
  },
  {
    icon: "❓",
    title: "Common Challenges",
    tips: [
      "Some letters can sound similar (like 'h' and 'n')",
      "Take your time - don't rush to answer",
      "If unsure, listen to the word again",
      "Practice each sound clearly and slowly"
    ]
  },
  {
    icon: "🎮",
    title: "Making It Fun",
    tips: [
      "Play 'Simon Says' with body parts",
      "Create body part flashcards",
      "Do the 'Head, Shoulders, Knees and Toes' song",
      "Make up stories about different body parts"
    ]
  }
];

const FirstLetterTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4 border-2 border-red-100">
          <h1 className="text-2xl font-bold text-red-800 text-center">
            Tips for Learning Body Part First Letters
          </h1>
          <p className="text-red-600 text-center mt-2">
            Helpful strategies to master identifying first letters of body part words
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid gap-6">
          {tipSections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-red-100"
            >
              {/* Section Header */}
              <div className="bg-red-100 p-4 flex items-center gap-3">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="text-xl font-bold text-red-800">
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
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="bg-white rounded-lg shadow-md mt-6 p-6 border-2 border-red-100">
          <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <span>👤</span>
            Quick Reference Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">Remember to:</h3>
              <ul className="space-y-2 text-red-600">
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
                  Practice with real body parts
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">Avoid:</h3>
              <ul className="space-y-2 text-red-600">
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