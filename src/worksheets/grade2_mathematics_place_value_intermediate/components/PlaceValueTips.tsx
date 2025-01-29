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
    title: "Making Largest Numbers",
    emoji: "⬆️",
    tips: [
      "Put biggest digit in hundreds place",
      "Put next biggest in tens place",
      "Put smallest digit in ones place",
      "Example: 3,5,2 → 532 is largest"
    ]
  },
  {
    title: "Making Smallest Numbers",
    emoji: "⬇️",
    tips: [
      "Put smallest non-zero digit in hundreds",
      "Put zero in tens if available",
      "Arrange remaining digits carefully",
      "Example: 6,0,4 → 406 is smallest"
    ]
  },
  {
    title: "Working with Ranges",
    emoji: "↔️",
    tips: [
      "Look at the hundreds place first",
      "Stay within the given range",
      "Check if number needs to be even/odd",
      "Example: 500-600 needs 5 in hundreds"
    ]
  },
  {
    title: "Adding & Subtracting",
    emoji: "🔢",
    tips: [
      "Add/subtract tens by counting by 10s",
      "Think: 600 + 30 = 630",
      "Think: 300 - 10 = 290",
      "Watch place values when calculating"
    ]
  }
];

const STRATEGIES = [
  {
    title: "Place Value Detective",
    description: "Look for clues about each digit's position. If a number needs '4 in tens place', check each option's tens digit.",
    emoji: "🔍"
  },
  {
    title: "Number Line Navigator",
    description: "Use a mental number line to find numbers between ranges or closest to a target. Example: Finding closest to 730.",
    emoji: "📏"
  },
  {
    title: "Zero Hero",
    description: "Pay special attention to zero! It can be in any position but can't be in hundreds if you need a three-digit number.",
    emoji: "0️⃣"
  },
  {
    title: "Even-Odd Expert",
    description: "For even numbers, the ones digit must be 0, 2, 4, 6, or 8. For odd numbers, it must be 1, 3, 5, 7, or 9.",
    emoji: "🎯"
  }
];

const COMMON_MISTAKES = [
  {
    mistake: "Wrong Order",
    fix: "Always arrange digits based on place value (hundreds, tens, ones). Don't read right to left!",
    emoji: "🔄"
  },
  {
    mistake: "Ignoring Zero",
    fix: "Zero is important! 407 and 470 are very different numbers. Pay attention to where zero goes.",
    emoji: "0️⃣"
  },
  {
    mistake: "Range Confusion",
    fix: "For numbers between 500-600, they must start with 5. Between 800-900, must start with 8.",
    emoji: "📊"
  }
];

const PlaceValueTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-700 mb-4">
              Advanced Place Value Strategies
            </h1>
            <p className="text-center text-orange-600">
              Master techniques for rearranging numbers and solving tricky problems!
            </p>
          </div>

          {/* Quick Reference */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>📊</span> Place Value Rules
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💯</div>
                <h3 className="font-bold text-purple-700 mb-1">Hundreds</h3>
                <p className="text-purple-600 text-sm">Controls size range</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔟</div>
                <h3 className="font-bold text-blue-700 mb-1">Tens</h3>
                <p className="text-blue-600 text-sm">Makes number bigger/smaller by 10s</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">1️⃣</div>
                <h3 className="font-bold text-green-700 mb-1">Ones</h3>
                <p className="text-green-600 text-sm">Controls even/odd</p>
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

          {/* Problem-Solving Strategies */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>🧩</span> Problem-Solving Strategies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {STRATEGIES.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-orange-50 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{strategy.emoji}</span>
                    <h3 className="font-bold text-orange-700">{strategy.title}</h3>
                  </div>
                  <p className="text-orange-600">{strategy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Common Mistakes to Avoid */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>⚠️</span> Common Mistakes to Avoid
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {COMMON_MISTAKES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-red-50 rounded-lg p-4"
                >
                  <div className="text-2xl mb-2 text-center">{item.emoji}</div>
                  <h3 className="font-bold text-red-700 mb-2 text-center">{item.mistake}</h3>
                  <p className="text-red-600 text-sm text-center">{item.fix}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Practice Tips */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>💪</span> Practice Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-bold text-orange-700 mb-2">Before Answering</h3>
                <ul className="space-y-2 text-orange-600">
                  <li>1. Read the question twice</li>
                  <li>2. Identify what's being asked</li>
                  <li>3. Look at available digits/options</li>
                  <li>4. Plan your strategy</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-bold text-orange-700 mb-2">Double-Check</h3>
                <ul className="space-y-2 text-orange-600">
                  <li>1. Does it fit the requirements?</li>
                  <li>2. Are digits in correct places?</li>
                  <li>3. Is it in the right range?</li>
                  <li>4. Does it make sense?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default PlaceValueTips; 