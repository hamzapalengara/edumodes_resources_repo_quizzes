import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/TipsHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface TipSection {
  title: string;
  emoji: string;
  tips: string[];
}

const LEARNING_TIPS: TipSection[] = [
  {
    title: "Reading Three-Digit Numbers",
    emoji: "👀",
    tips: [
      "Start from the left side (hundreds first)",
      "Look at each place value one at a time",
      "Say the number out loud as you read it",
      "Remember: Hundreds → Tens → Ones"
    ]
  },
  {
    title: "Working with Zeros",
    emoji: "0️⃣",
    tips: [
      "Zero means 'nothing' in that place",
      "308 means 3 hundreds, no tens, 8 ones",
      "150 means 1 hundred, 5 tens, no ones",
      "Don't skip zeros - they're important!"
    ]
  },
  {
    title: "Building Numbers",
    emoji: "🏗️",
    tips: [
      "Think: How many hundreds do I need?",
      "Then: How many tens do I need?",
      "Last: How many ones do I need?",
      "Check if your number matches the target"
    ]
  },
  {
    title: "Checking Your Work",
    emoji: "✅",
    tips: [
      "Add up all place values (H + T + O)",
      "Make sure digits are in correct places",
      "Double-check zeros carefully",
      "Use the hint button if you need help"
    ]
  }
];

const ACTIVITIES = [
  {
    title: "Number Detective Game",
    description: "Find three-digit numbers around you (on books, signs, or price tags). Break them down into hundreds, tens, and ones.",
    emoji: "🔍"
  },
  {
    title: "Zero Hero Challenge",
    description: "Practice making numbers with zeros like 304, 150, 670. Remember: zero means nothing in that place!",
    emoji: "0️⃣"
  },
  {
    title: "Place Value Blocks",
    description: "Use blocks or draw squares to show hundreds, tens, and ones. Make it visual!",
    emoji: "🟦"
  },
  {
    title: "Number Building Race",
    description: "Have someone call out a number. Race to build it using place value blocks. First correct answer wins!",
    emoji: "🏃"
  }
];

const MEMORY_TRICKS = [
  {
    trick: "Place Value Song",
    description: "Hundreds, tens, and ones, that's the way we go!\nFrom left to right, not too fast, not too slow!",
    emoji: "🎵"
  },
  {
    trick: "Zero Hero",
    description: "When you see a zero, just say 'none' in that place!\n(203 = 2 hundreds, none tens, 3 ones)",
    emoji: "0️⃣"
  },
  {
    trick: "Left to Right",
    description: "Always start from the left, just like reading a book!\nHundreds first, then tens, then ones - take a look!",
    emoji: "📚"
  }
];

const ThreeDigitNumbersTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-700 mb-4">
              Tips & Tricks for Three-Digit Numbers
            </h1>
            <p className="text-center text-orange-600">
              Fun ways to master place values and number building!
            </p>
          </div>

          {/* Place Value Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>📊</span> Quick Place Value Guide
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💯</div>
                <h3 className="font-bold text-purple-700 mb-1">Hundreds</h3>
                <p className="text-purple-600 text-sm">Worth 100 each</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔟</div>
                <h3 className="font-bold text-blue-700 mb-1">Tens</h3>
                <p className="text-blue-600 text-sm">Worth 10 each</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">1️⃣</div>
                <h3 className="font-bold text-green-700 mb-1">Ones</h3>
                <p className="text-green-600 text-sm">Worth 1 each</p>
              </div>
            </div>
          </div>

          {/* Learning Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {LEARNING_TIPS.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{section.emoji}</span>
                  <h2 className="text-xl font-bold text-orange-700">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span className="text-orange-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Fun Activities */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>🎮</span> Practice Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACTIVITIES.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-orange-50 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{activity.emoji}</span>
                    <h3 className="font-bold text-orange-700">{activity.title}</h3>
                  </div>
                  <p className="text-orange-600">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Memory Tricks */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>🧠</span> Remember It!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MEMORY_TRICKS.map((trick, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-orange-50 rounded-lg p-4 text-center"
                >
                  <div className="text-3xl mb-2">{trick.emoji}</div>
                  <h3 className="font-bold text-orange-700 mb-2">{trick.trick}</h3>
                  <pre className="text-orange-600 text-sm whitespace-pre-wrap">
                    {trick.description}
                  </pre>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Common Mistakes to Avoid */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>⚠️</span> Watch Out For...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-bold text-orange-700 mb-2">Reading Right to Left</h3>
                <p className="text-orange-600">
                  Always read from left to right! 234 is "two hundred thirty-four", not "four thirty-two"
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-bold text-orange-700 mb-2">Skipping Zeros</h3>
                <p className="text-orange-600">
                  Don't forget zeros! 308 is "three hundred eight", not "thirty-eight"
                </p>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ThreeDigitNumbersTips; 