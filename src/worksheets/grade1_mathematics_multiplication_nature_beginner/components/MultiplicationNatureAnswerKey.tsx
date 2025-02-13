import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_SOLUTIONS = [
  {
    id: 1,
    groups: 3,
    itemsPerGroup: 3,
    objectType: '🌸',
    explanation: 'There are 3 groups with 3 flowers in each group.',
    steps: [
      'Count the number of groups: 3',
      'Count flowers in each group: 3',
      'Multiply: 3 × 3 = 9'
    ],
    correctAnswer: '3 × 3 = 9',
    visualRepresentation: '🌸🌸🌸 | 🌸🌸🌸 | 🌸🌸🌸'
  },
  {
    id: 2,
    groups: 5,
    itemsPerGroup: 1,
    objectType: '🦋',
    explanation: 'There are 5 groups with 1 butterfly in each group.',
    steps: [
      'Count the number of groups: 5',
      'Count butterflies in each group: 1',
      'Multiply: 5 × 1 = 5'
    ],
    correctAnswer: '5 × 1 = 5',
    visualRepresentation: '🦋 | 🦋 | 🦋 | 🦋 | 🦋'
  },
  {
    id: 3,
    groups: 2,
    itemsPerGroup: 5,
    objectType: '🌳',
    explanation: 'There are 2 groups with 5 trees in each group.',
    steps: [
      'Count the number of groups: 2',
      'Count trees in each group: 5',
      'Multiply: 2 × 5 = 10'
    ],
    correctAnswer: '2 × 5 = 10',
    visualRepresentation: '🌳🌳🌳🌳🌳 | 🌳🌳🌳🌳🌳'
  },
  {
    id: 4,
    groups: 4,
    itemsPerGroup: 1,
    objectType: '🐦',
    explanation: 'There are 4 groups with 1 bird in each group.',
    steps: [
      'Count the number of groups: 4',
      'Count birds in each group: 1',
      'Multiply: 4 × 1 = 4'
    ],
    correctAnswer: '4 × 1 = 4',
    visualRepresentation: '🐦 | 🐦 | 🐦 | 🐦'
  },
  {
    id: 5,
    groups: 1,
    itemsPerGroup: 5,
    objectType: '🌺',
    explanation: 'There is 1 group with 5 flowers.',
    steps: [
      'Count the number of groups: 1',
      'Count flowers in the group: 5',
      'Multiply: 1 × 5 = 5'
    ],
    correctAnswer: '1 × 5 = 5',
    visualRepresentation: '🌺🌺🌺🌺🌺'
  }
];

const MultiplicationNatureAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-emerald-600 mb-6">
          Answer Key: Garden Groups Multiplication Facts
        </h1>

        <div className="space-y-6">
          {MULTIPLICATION_SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Question Number */}
              <div className="text-lg font-bold text-emerald-600 mb-4">
                Question {solution.id}
              </div>

              {/* Visual Representation */}
              <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-emerald-600 mb-2">Visual Groups:</h3>
                <div className="text-2xl font-mono">
                  {solution.visualRepresentation}
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-green-600 mb-2">Explanation:</h3>
                <p className="text-green-700">{solution.explanation}</p>
              </div>

              {/* Solution Steps */}
              <div className="bg-lime-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-lime-600 mb-2">Solution Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-lime-700">
                  {solution.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              {/* Correct Answer */}
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-600 mb-2">Correct Answer:</h3>
                <div className="bg-white px-4 py-2 rounded-lg text-emerald-600 font-semibold border-2 border-emerald-200 inline-block">
                  {solution.correctAnswer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Notes */}
        <motion.div
          className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl font-bold text-emerald-600 mb-4">
            Important Notes:
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              1. When multiplying by 1, the answer is the same as the other number.
              For example, 5 × 1 = 5
            </p>
            <p>
              2. Each group must have the same number of items (equal groups).
            </p>
            <p>
              3. The first number tells us how many groups, and the second number tells us how many items in each group.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationNatureAnswerKey; 