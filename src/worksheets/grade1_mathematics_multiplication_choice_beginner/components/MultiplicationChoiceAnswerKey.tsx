import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_SOLUTIONS = [
  {
    id: 1,
    groups: 2,
    itemsPerGroup: 3,
    objectType: '🍎',
    explanation: 'There are 2 groups with 3 apples in each group.',
    steps: [
      'Count the number of groups: 2',
      'Count apples in each group: 3',
      'Multiply: 2 × 3 = 6',
      'Note: 3 × 2 = 6 is also correct (commutative property)'
    ],
    correctAnswers: ['2 × 3 = 6', '3 × 2 = 6'],
    visualRepresentation: '🍎🍎🍎 | 🍎🍎🍎'
  },
  {
    id: 2,
    groups: 4,
    itemsPerGroup: 2,
    objectType: '🎈',
    explanation: 'There are 4 groups with 2 balloons in each group.',
    steps: [
      'Count the number of groups: 4',
      'Count balloons in each group: 2',
      'Multiply: 4 × 2 = 8',
      'Note: 2 × 4 = 8 is also correct (commutative property)'
    ],
    correctAnswers: ['4 × 2 = 8', '2 × 4 = 8'],
    visualRepresentation: '🎈🎈 | 🎈🎈 | 🎈🎈 | 🎈🎈'
  },
  {
    id: 3,
    groups: 3,
    itemsPerGroup: 4,
    objectType: '⭐',
    explanation: 'There are 3 groups with 4 stars in each group.',
    steps: [
      'Count the number of groups: 3',
      'Count stars in each group: 4',
      'Multiply: 3 × 4 = 12',
      'Note: 4 × 3 = 12 is also correct (commutative property)'
    ],
    correctAnswers: ['3 × 4 = 12', '4 × 3 = 12'],
    visualRepresentation: '⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐'
  },
  {
    id: 4,
    groups: 5,
    itemsPerGroup: 2,
    objectType: '🍊',
    explanation: 'There are 5 groups with 2 oranges in each group.',
    steps: [
      'Count the number of groups: 5',
      'Count oranges in each group: 2',
      'Multiply: 5 × 2 = 10',
      'Note: 2 × 5 = 10 is also correct (commutative property)'
    ],
    correctAnswers: ['5 × 2 = 10', '2 × 5 = 10'],
    visualRepresentation: '🍊🍊 | 🍊🍊 | 🍊🍊 | 🍊🍊 | 🍊🍊'
  },
  {
    id: 5,
    groups: 3,
    itemsPerGroup: 5,
    objectType: '🎲',
    explanation: 'There are 3 groups with 5 dice in each group.',
    steps: [
      'Count the number of groups: 3',
      'Count dice in each group: 5',
      'Multiply: 3 × 5 = 15',
      'Note: 5 × 3 = 15 is also correct (commutative property)'
    ],
    correctAnswers: ['3 × 5 = 15', '5 × 3 = 15'],
    visualRepresentation: '🎲🎲🎲🎲🎲 | 🎲🎲🎲🎲🎲 | 🎲🎲🎲🎲🎲'
  }
];

const MultiplicationChoiceAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Answer Key: Match Groups to Multiplication Facts
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
              <div className="text-lg font-bold text-purple-600 mb-4">
                Question {solution.id}
              </div>

              {/* Visual Representation */}
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-purple-600 mb-2">Visual Groups:</h3>
                <div className="text-2xl font-mono">
                  {solution.visualRepresentation}
                </div>
              </div>

              {/* Explanation */}
              <div className="bg-rose-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-rose-600 mb-2">Explanation:</h3>
                <p className="text-rose-700">{solution.explanation}</p>
              </div>

              {/* Solution Steps */}
              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-amber-600 mb-2">Solution Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-amber-700">
                  {solution.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              {/* Correct Answers */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-600 mb-2">Correct Answers:</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.correctAnswers.map((answer, i) => (
                    <div
                      key={i}
                      className="bg-white px-4 py-2 rounded-lg text-green-600 font-semibold border-2 border-green-200"
                    >
                      {answer}
                    </div>
                  ))}
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
          <h2 className="text-xl font-bold text-purple-600 mb-4">
            Important Notes:
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              1. The order of numbers in multiplication doesn't change the result (commutative property).
              For example, 2 × 3 = 3 × 2
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

export default MultiplicationChoiceAnswerKey; 