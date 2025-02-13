import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DIVISION_SOLUTIONS = [
  {
    totalObjects: 6,
    divisor: 2,
    objectType: '🐠',
    explanation: 'When we divide 6 fish into 2 equal groups, each group gets 3 fish.',
    steps: [
      'Count the total number of fish: 6',
      'Make 2 equal groups',
      'Put 3 fish in each group',
      'Check: 3 fish × 2 groups = 6 fish total'
    ]
  },
  {
    totalObjects: 9,
    divisor: 3,
    objectType: '🦀',
    explanation: 'Dividing 9 crabs into 3 equal groups means each group gets 3 crabs.',
    steps: [
      'Count the total number of crabs: 9',
      'Make 3 equal groups',
      'Put 3 crabs in each group',
      'Check: 3 crabs × 3 groups = 9 crabs total'
    ]
  },
  {
    totalObjects: 8,
    divisor: 2,
    objectType: '🐋',
    explanation: 'When we share 8 whales between 2 groups, each group receives 4 whales.',
    steps: [
      'Count the total number of whales: 8',
      'Make 2 equal groups',
      'Put 4 whales in each group',
      'Check: 4 whales × 2 groups = 8 whales total'
    ]
  },
  {
    totalObjects: 10,
    divisor: 5,
    objectType: '🐢',
    explanation: 'Dividing 10 turtles into 5 equal groups gives us 2 turtles in each group.',
    steps: [
      'Count the total number of turtles: 10',
      'Make 5 equal groups',
      'Put 2 turtles in each group',
      'Check: 2 turtles × 5 groups = 10 turtles total'
    ]
  },
  {
    totalObjects: 6,
    divisor: 3,
    objectType: '🐡',
    explanation: 'Sharing 6 pufferfish among 3 groups means each group gets 2 pufferfish.',
    steps: [
      'Count the total number of pufferfish: 6',
      'Make 3 equal groups',
      'Put 2 pufferfish in each group',
      'Check: 2 pufferfish × 3 groups = 6 pufferfish total'
    ]
  }
];

const DivisionSeaAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-cyan-600 mb-6">
          Ocean Division - Answer Key
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
              <h2 className="text-xl font-bold text-cyan-600 mb-4">
                Problem {index + 1}: {solution.totalObjects} ÷ {solution.divisor}
              </h2>

              {/* Visual Solution */}
              <div className="bg-cyan-50 p-4 rounded-xl mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: solution.divisor }).map((_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="bg-white p-4 rounded-xl border-2 border-cyan-200"
                    >
                      <div className="text-sm font-semibold text-cyan-600 mb-2">
                        Ocean Group {groupIndex + 1}
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
                <h3 className="font-semibold text-cyan-600 mb-2">Explanation:</h3>
                <p className="text-cyan-700">{solution.explanation}</p>
              </div>

              {/* Step by Step */}
              <div>
                <h3 className="font-semibold text-cyan-600 mb-2">Steps:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  {solution.steps.map((step, stepIndex) => (
                    <motion.li
                      key={stepIndex}
                      className="text-cyan-700"
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

export default DivisionSeaAnswerKey; 