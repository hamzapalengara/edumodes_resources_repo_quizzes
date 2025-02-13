import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_SOLUTIONS = [
  {
    id: 1,
    groups: 1,
    itemsPerGroup: 3,
    objectType: '🚀',
    explanation: 'There is 1 group with 3 rockets.',
    steps: [
      'Count the number of groups: 1',
      'Count rockets in the group: 3',
      'Multiply: 1 × 3 = 3'
    ],
    correctAnswer: '1 × 3 = 3',
    visualRepresentation: '🚀🚀🚀'
  },
  {
    id: 2,
    groups: 3,
    itemsPerGroup: 1,
    objectType: '🛸',
    explanation: 'There are 3 groups with 1 UFO in each group.',
    steps: [
      'Count the number of groups: 3',
      'Count UFOs in each group: 1',
      'Multiply: 3 × 1 = 3'
    ],
    correctAnswer: '3 × 1 = 3',
    visualRepresentation: '🛸 | 🛸 | 🛸'
  },
  {
    id: 3,
    groups: 4,
    itemsPerGroup: 5,
    objectType: '⭐',
    explanation: 'There are 4 groups with 5 stars in each group.',
    steps: [
      'Count the number of groups: 4',
      'Count stars in each group: 5',
      'Multiply: 4 × 5 = 20'
    ],
    correctAnswer: '4 × 5 = 20',
    visualRepresentation: '⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐'
  },
  {
    id: 4,
    groups: 2,
    itemsPerGroup: 1,
    objectType: '👨‍🚀',
    explanation: 'There are 2 groups with 1 astronaut in each group.',
    steps: [
      'Count the number of groups: 2',
      'Count astronauts in each group: 1',
      'Multiply: 2 × 1 = 2'
    ],
    correctAnswer: '2 × 1 = 2',
    visualRepresentation: '👨‍🚀 | 👨‍🚀'
  },
  {
    id: 5,
    groups: 5,
    itemsPerGroup: 4,
    objectType: '🌟',
    explanation: 'There are 5 groups with 4 bright stars in each group.',
    steps: [
      'Count the number of groups: 5',
      'Count stars in each group: 4',
      'Multiply: 5 × 4 = 20'
    ],
    correctAnswer: '5 × 4 = 20',
    visualRepresentation: '🌟🌟🌟🌟 | 🌟🌟🌟🌟 | 🌟🌟🌟🌟 | 🌟🌟🌟🌟 | 🌟🌟🌟🌟'
  }
];

const MultiplicationSpaceAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Answer Key: Space Groups Multiplication Facts
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
              <div className="text-lg font-bold text-indigo-600 mb-4">
                Question {solution.id}
              </div>

              {/* Visual Representation */}
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-indigo-600 mb-2">Visual Groups:</h3>
                <div className="text-2xl font-mono">
                  {solution.visualRepresentation}
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-violet-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-violet-600 mb-2">Explanation:</h3>
                <p className="text-violet-700">{solution.explanation}</p>
              </div>

              {/* Solution Steps */}
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-blue-600 mb-2">Solution Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-700">
                  {solution.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              {/* Correct Answer */}
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-bold text-indigo-600 mb-2">Correct Answer:</h3>
                <div className="bg-white px-4 py-2 rounded-lg text-indigo-600 font-semibold border-2 border-indigo-200 inline-block">
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
          <h2 className="text-xl font-bold text-indigo-600 mb-4">
            Important Space Math Notes:
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              1. When multiplying by 1, the answer is the same as the other number.
              For example, 3 × 1 = 3 rockets
            </p>
            <p>
              2. Each group must have the same number of space objects (equal groups).
            </p>
            <p>
              3. The first number tells us how many groups, and the second number tells us how many space objects in each group.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationSpaceAnswerKey; 