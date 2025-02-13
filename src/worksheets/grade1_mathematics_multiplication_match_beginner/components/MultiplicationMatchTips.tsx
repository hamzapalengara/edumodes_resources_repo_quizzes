import React from 'react';
import { motion } from 'framer-motion';

const TIPS = [
  {
    title: 'Count the Groups',
    icon: '👥',
    description: 'First, count how many separate groups you see.',
    example: 'If you see 3 boxes of rockets, that means you have 3 groups.'
  },
  {
    title: 'Count Items in Each Group',
    icon: '🔢',
    description: 'Next, count how many items are in one group.',
    example: 'If each box has 4 rockets, that means there are 4 items per group.'
  },
  {
    title: 'Write the Multiplication Formula',
    icon: '✍️',
    description: 'Put the numbers in order: (number of groups) × (items per group)',
    example: '3 groups × 4 items = 12 total items'
  },
  {
    title: 'Double Check Your Answer',
    icon: '✅',
    description: 'Count all items to verify your multiplication is correct.',
    example: 'Count every rocket to make sure there are 12 in total.'
  }
];

const PRACTICE_EXAMPLE = {
  groups: 2,
  itemsPerGroup: 3,
  emoji: '🚀',
  formula: '2 × 3 = 6'
};

const MultiplicationMatchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 px-0 md:p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-2 md:p-6">
          <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
            Tips for Matching Groups to Multiplication
          </h1>

          {/* Tips Section */}
          <div className="space-y-6 mb-8">
            {TIPS.map((tip, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{tip.icon}</span>
                  <div>
                    <h2 className="font-semibold text-lg text-indigo-600 mb-2">
                      {tip.title}
                    </h2>
                    <p className="text-gray-700 mb-2">{tip.description}</p>
                    <p className="text-sm text-purple-600 bg-purple-50 p-2 rounded">
                      Example: {tip.example}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Practice Example */}
          <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-lg text-indigo-600 mb-4">
              Let's Practice Together!
            </h2>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {[...Array(PRACTICE_EXAMPLE.groups)].map((_, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="bg-white rounded-lg p-2 flex flex-wrap gap-1 justify-center"
                    style={{ width: '100px' }}
                  >
                    {[...Array(PRACTICE_EXAMPLE.itemsPerGroup)].map((_, itemIndex) => (
                      <span key={itemIndex} className="text-2xl">
                        {PRACTICE_EXAMPLE.emoji}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-indigo-600">
                  1. Count the groups: <strong>2 groups</strong>
                </p>
                <p className="text-indigo-600">
                  2. Count items in each group: <strong>3 rockets</strong>
                </p>
                <p className="text-indigo-600">
                  3. Write the formula: <strong>{PRACTICE_EXAMPLE.formula}</strong>
                </p>
                <p className="text-indigo-600">
                  4. Verify by counting all rockets: <strong>6 total</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Remember Box */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h2 className="font-semibold text-lg text-purple-600 mb-2">
              Remember!
            </h2>
            <ul className="list-disc list-inside space-y-2 text-purple-700">
              <li>Multiplication is repeated addition</li>
              <li>The order of numbers matters in the formula</li>
              <li>Take your time to count carefully</li>
              <li>Always double-check your answer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationMatchTips; 