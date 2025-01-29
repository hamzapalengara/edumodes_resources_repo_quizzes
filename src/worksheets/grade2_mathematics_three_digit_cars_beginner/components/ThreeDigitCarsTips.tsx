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
    title: "Understanding Place Values",
    emoji: "🔢",
    tips: [
      "Each place has a different value",
      "Hundreds place: Multiply by 100",
      "Tens place: Multiply by 10",
      "Ones place: Keep the same value"
    ]
  },
  {
    title: "Quick Multiplication",
    emoji: "✖️",
    tips: [
      "For hundreds: Add two zeros (×100)",
      "For tens: Add one zero (×10)",
      "For ones: Keep the number as is (×1)",
      "Practice these patterns often"
    ]
  },
  {
    title: "Finding Place Values",
    emoji: "🔍",
    tips: [
      "Look at the digit's position",
      "Identify if it's hundreds, tens, or ones",
      "Multiply by the correct amount",
      "Write out the steps if needed"
    ]
  },
  {
    title: "Double-Check Steps",
    emoji: "✅",
    tips: [
      "1. Identify the place (H, T, or O)",
      "2. Remember the multiplier (100, 10, or 1)",
      "3. Multiply the digit",
      "4. Verify your answer makes sense"
    ]
  }
];

const PLACE_VALUE_CHART = [
  {
    place: "Hundreds",
    value: "× 100",
    example: "4 in hundreds = 400",
    color: "purple"
  },
  {
    place: "Tens",
    value: "× 10",
    example: "4 in tens = 40",
    color: "blue"
  },
  {
    place: "Ones",
    value: "× 1",
    example: "4 in ones = 4",
    color: "green"
  }
];

const PRACTICE_ACTIVITIES = [
  {
    title: "Place Value Detective",
    description: "Find a digit in a car's number and determine its value based on its place.",
    emoji: "🔍"
  },
  {
    title: "Value Race",
    description: "Quickly calculate the value of digits in different places - make it a speed game!",
    emoji: "🏎️"
  },
  {
    title: "Spot the Difference",
    description: "Compare the same digit in different places and see how its value changes.",
    emoji: "👀"
  },
  {
    title: "Place Value Sorting",
    description: "Sort digits by their actual values based on their place in the number.",
    emoji: "🔄"
  }
];

const REMEMBER_TRICKS = [
  {
    trick: "Hundreds Helper",
    explanation: "In hundreds place? × 100 (add two zeros)",
    emoji: "💯"
  },
  {
    trick: "Tens Trick",
    explanation: "In tens place? × 10 (add one zero)",
    emoji: "🔟"
  },
  {
    trick: "Ones Rule",
    explanation: "In ones place? × 1 (keep the same)",
    emoji: "1️⃣"
  }
];

const WATCH_OUT_FOR = [
  {
    mistake: "Wrong Multiplier",
    fix: "Make sure to use the right multiplier for each place",
    emoji: "⚠️"
  },
  {
    mistake: "Forgetting Place",
    fix: "Always check which place the digit is in first",
    emoji: "🔍"
  },
  {
    mistake: "Adding Instead",
    fix: "Remember to multiply, not add the place value",
    emoji: "❌"
  }
];

const ThreeDigitCarsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-700 mb-4">
              Understanding Place Values
            </h1>
            <p className="text-center text-orange-600">
              Tips and tricks for finding the value of digits in different places
            </p>
          </div>

          {/* Place Value Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>📊</span> Place Value Multipliers
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {PLACE_VALUE_CHART.map((place, index) => (
                <div
                  key={index}
                  className={`bg-${place.color}-50 rounded-lg p-4 text-center`}
                >
                  <h3 className={`font-bold text-${place.color}-700 mb-2`}>{place.place}</h3>
                  <p className={`text-${place.color}-600 text-2xl font-bold`}>{place.value}</p>
                  <p className={`text-sm text-${place.color}-500 mt-2`}>{place.example}</p>
                </div>
              ))}
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

          {/* Practice Activities */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>🎯</span> Practice Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRACTICE_ACTIVITIES.map((activity, index) => (
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
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>🧠</span> Quick Tricks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {REMEMBER_TRICKS.map((trick, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-yellow-50 rounded-lg p-4"
                >
                  <div className="text-2xl mb-2 text-center">{trick.emoji}</div>
                  <h3 className="font-bold text-yellow-700 mb-2 text-center">{trick.trick}</h3>
                  <p className="text-yellow-600 text-sm text-center">{trick.explanation}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Watch Out For */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>⚠️</span> Common Mistakes to Avoid
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WATCH_OUT_FOR.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="bg-red-50 rounded-lg p-4"
                >
                  <div className="text-2xl mb-2 text-center">{item.emoji}</div>
                  <h3 className="font-bold text-red-700 mb-2 text-center">{item.mistake}</h3>
                  <p className="text-red-600 text-sm text-center">{item.fix}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ThreeDigitCarsTips; 