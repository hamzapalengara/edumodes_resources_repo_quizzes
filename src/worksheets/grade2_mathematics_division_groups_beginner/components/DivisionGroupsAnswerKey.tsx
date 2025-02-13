import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DIVISION_SOLUTIONS = [
  {
    totalObjects: 20,
    divisor: 4,
    objectType: '🐰',
    explanation: 'When we divide 20 bunnies into 4 equal groups, each group gets 5 bunnies.',
    steps: [
      'Count the total number of bunnies: 20',
      'Make 4 equal groups',
      'Put 5 bunnies in each group',
      'Check: 5 bunnies × 4 groups = 20 bunnies total'
    ]
  },
  {
    totalObjects: 12,
    divisor: 3,
    objectType: '🌟',
    explanation: 'Dividing 12 stars into 3 equal groups means each group gets 4 stars.',
    steps: [
      'Count the total number of stars: 12',
      'Make 3 equal groups',
      'Put 4 stars in each group',
      'Check: 4 stars × 3 groups = 12 stars total'
    ]
  },
  {
    totalObjects: 15,
    divisor: 5,
    objectType: '🌸',
    explanation: 'When we share 15 flowers among 5 groups, each group receives 3 flowers.',
    steps: [
      'Count the total number of flowers: 15',
      'Make 5 equal groups',
      'Put 3 flowers in each group',
      'Check: 3 flowers × 5 groups = 15 flowers total'
    ]
  },
  {
    totalObjects: 16,
    divisor: 4,
    objectType: '🎈',
    explanation: 'Dividing 16 balloons into 4 equal groups gives us 4 balloons in each group.',
    steps: [
      'Count the total number of balloons: 16',
      'Make 4 equal groups',
      'Put 4 balloons in each group',
      'Check: 4 balloons × 4 groups = 16 balloons total'
    ]
  },
  {
    totalObjects: 18,
    divisor: 6,
    objectType: '🍎',
    explanation: 'Sharing 18 apples among 6 groups means each group gets 3 apples.',
    steps: [
      'Count the total number of apples: 18',
      'Make 6 equal groups',
      'Put 3 apples in each group',
      'Check: 3 apples × 6 groups = 18 apples total'
    ]
  }
];

const DivisionGroupsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Division by Grouping - Answer Key
        </h1>

        <div className="space-y-6">
          {DIVISION_SOLUTIONS.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-xl font-bold text-indigo-600 mb-4">
                Problem {index + 1}: {solution.totalObjects} ÷ {solution.divisor}
              </h2>

              {/* Visual Solution */}
              <div className="bg-indigo-50 p-4 rounded-xl mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: solution.divisor }).map((_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="bg-white p-4 rounded-xl border-2 border-indigo-200"
                    >
                      <div className="text-sm font-semibold text-indigo-600 mb-2">
                        Group {groupIndex + 1}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {Array.from(
                          { length: solution.totalObjects / solution.divisor },
                          (_, i) => (
                            <span key={i} className="text-2xl">
                              {solution.objectType}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explanation */}
              <div className="mb-4">
                <h3 className="font-semibold text-indigo-600 mb-2">Explanation:</h3>
                <p className="text-indigo-700">{solution.explanation}</p>
              </div>

              {/* Step by Step */}
              <div>
                <h3 className="font-semibold text-indigo-600 mb-2">Steps:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  {solution.steps.map((step, stepIndex) => (
                    <motion.li
                      key={stepIndex}
                      className="text-indigo-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (stepIndex * 0.1) }}
                    >
                      {step}
                    </motion.li>
                  ))}
                </ol>
              </div>

              {/* Division Fact */}
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
                {solution.totalObjects} ÷ {solution.divisor} = {solution.totalObjects / solution.divisor}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DivisionGroupsAnswerKey; 