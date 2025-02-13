import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DIVISION_SOLUTIONS = [
  {
    totalObjects: 8,
    divisor: 4,
    objectType: '🍪',
    story: 'Divide 8 cookies among 4 friends equally.',
    explanation: 'When we share 8 cookies with Alex, Ben, Charlie, and Dana, each friend gets 2 cookies.',
    steps: [
      'Count the total number of cookies: 8',
      'Count the number of friends: 4 (Alex, Ben, Charlie, Dana)',
      'Share one cookie with each friend first',
      'Share another cookie with each friend',
      'Check: Each friend has 2 cookies (2 × 4 = 8 total)'
    ],
    groupNames: ['Alex', 'Ben', 'Charlie', 'Dana']
  },
  {
    totalObjects: 6,
    divisor: 2,
    objectType: '🎈',
    story: 'Share 6 balloons between 2 children.',
    explanation: 'When we divide 6 balloons between Emma and Finn, each child gets 3 balloons.',
    steps: [
      'Count the total number of balloons: 6',
      'Count the number of children: 2 (Emma and Finn)',
      'Give one balloon to each child',
      'Repeat two more times',
      'Check: Each child has 3 balloons (3 × 2 = 6 total)'
    ],
    groupNames: ['Emma', 'Finn']
  },
  {
    totalObjects: 10,
    divisor: 5,
    objectType: '🌸',
    story: 'Plant 10 flowers in 5 garden pots equally.',
    explanation: 'When planting 10 flowers in 5 pots, each pot gets 2 flowers.',
    steps: [
      'Count the total number of flowers: 10',
      'Count the number of pots: 5',
      'Plant one flower in each pot first',
      'Plant another flower in each pot',
      'Check: Each pot has 2 flowers (2 × 5 = 10 total)'
    ],
    groupNames: ['Pot 1', 'Pot 2', 'Pot 3', 'Pot 4', 'Pot 5']
  },
  {
    totalObjects: 9,
    divisor: 3,
    objectType: '🍕',
    story: 'Split 9 pizza slices among 3 plates equally.',
    explanation: 'When sharing 9 pizza slices on 3 plates, each plate gets 3 slices.',
    steps: [
      'Count the total number of pizza slices: 9',
      'Count the number of plates: 3',
      'Put one slice on each plate',
      'Repeat two more times',
      'Check: Each plate has 3 slices (3 × 3 = 9 total)'
    ],
    groupNames: ['Plate 1', 'Plate 2', 'Plate 3']
  },
  {
    totalObjects: 4,
    divisor: 2,
    objectType: '🎁',
    story: 'Share 4 presents between 2 sisters equally.',
    explanation: 'When sharing 4 presents between Grace and Hannah, each sister gets 2 presents.',
    steps: [
      'Count the total number of presents: 4',
      'Count the number of sisters: 2 (Grace and Hannah)',
      'Give one present to each sister',
      'Give another present to each sister',
      'Check: Each sister has 2 presents (2 × 2 = 4 total)'
    ],
    groupNames: ['Grace', 'Hannah']
  }
];

const DivisionStoryAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-amber-600 mb-6">
          Division Story Problems - Answer Key
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
              <h2 className="text-xl font-bold text-amber-600 mb-4">
                Story {index + 1}: {solution.story}
              </h2>

              {/* Visual Solution */}
              <div className="bg-amber-50 p-4 rounded-xl mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: solution.divisor }).map((_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="bg-white p-4 rounded-xl border-2 border-amber-200"
                    >
                      <div className="text-sm font-semibold text-amber-600 mb-2">
                        {solution.groupNames[groupIndex]}
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
                <h3 className="font-semibold text-amber-600 mb-2">Explanation:</h3>
                <p className="text-amber-700">{solution.explanation}</p>
              </div>

              {/* Step by Step */}
              <div>
                <h3 className="font-semibold text-amber-600 mb-2">Steps:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  {solution.steps.map((step, stepIndex) => (
                    <motion.li
                      key={stepIndex}
                      className="text-amber-700"
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

export default DivisionStoryAnswerKey; 