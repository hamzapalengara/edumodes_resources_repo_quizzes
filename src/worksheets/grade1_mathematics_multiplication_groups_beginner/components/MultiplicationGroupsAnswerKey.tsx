import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_SOLUTIONS = [
  {
    groups: 3,
    itemsPerGroup: 4,
    objectType: '🍎',
    story: 'There are 3 baskets, and each basket has 4 apples.',
    explanation: 'When we count all the apples in 3 baskets, with 4 apples in each basket, we get 12 apples in total.',
    steps: [
      'Count the number of baskets: 3',
      'Count apples in each basket: 4',
      'Add all apples: 4 + 4 + 4 = 12',
      'Or multiply: 3 × 4 = 12'
    ],
    groupNames: ['Basket 1', 'Basket 2', 'Basket 3']
  },
  {
    groups: 2,
    itemsPerGroup: 5,
    objectType: '🌸',
    story: 'Each garden has 5 flowers. How many flowers are there in 2 gardens?',
    explanation: 'When we count all the flowers in 2 gardens, with 5 flowers in each garden, we get 10 flowers in total.',
    steps: [
      'Count the number of gardens: 2',
      'Count flowers in each garden: 5',
      'Add all flowers: 5 + 5 = 10',
      'Or multiply: 2 × 5 = 10'
    ],
    groupNames: ['Garden 1', 'Garden 2']
  },
  {
    groups: 4,
    itemsPerGroup: 2,
    objectType: '🎈',
    story: 'Each child has 2 balloons. How many balloons do 4 children have?',
    explanation: 'When we count all the balloons that 4 children have, with 2 balloons each, we get 8 balloons in total.',
    steps: [
      'Count the number of children: 4',
      'Count balloons per child: 2',
      'Add all balloons: 2 + 2 + 2 + 2 = 8',
      'Or multiply: 4 × 2 = 8'
    ],
    groupNames: ['Tom', 'Lisa', 'Maya', 'Jack']
  },
  {
    groups: 3,
    itemsPerGroup: 3,
    objectType: '🍕',
    story: 'Each plate has 3 pizza slices. How many slices are on 3 plates?',
    explanation: 'When we count all the pizza slices on 3 plates, with 3 slices on each plate, we get 9 slices in total.',
    steps: [
      'Count the number of plates: 3',
      'Count slices on each plate: 3',
      'Add all slices: 3 + 3 + 3 = 9',
      'Or multiply: 3 × 3 = 9'
    ],
    groupNames: ['Plate 1', 'Plate 2', 'Plate 3']
  },
  {
    groups: 2,
    itemsPerGroup: 3,
    objectType: '🎁',
    story: 'Each sister got 3 presents. How many presents did 2 sisters get?',
    explanation: 'When we count all the presents that 2 sisters got, with 3 presents each, we get 6 presents in total.',
    steps: [
      'Count the number of sisters: 2',
      'Count presents per sister: 3',
      'Add all presents: 3 + 3 = 6',
      'Or multiply: 2 × 3 = 6'
    ],
    groupNames: ['Emma', 'Lucy']
  }
];

const MultiplicationGroupsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-amber-600 mb-6">
          Multiplication Story Problems - Answer Key
        </h1>

        <div className="space-y-6">
          {MULTIPLICATION_SOLUTIONS.map((solution, index) => (
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
                  {Array.from({ length: solution.groups }).map((_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="bg-white p-4 rounded-xl border-2 border-amber-200"
                    >
                      <div className="text-sm font-semibold text-amber-600 mb-2">
                        {solution.groupNames[groupIndex]}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {Array.from(
                          { length: solution.itemsPerGroup },
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

              {/* Multiplication Fact */}
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
                {solution.groups} × {solution.itemsPerGroup} = {solution.groups * solution.itemsPerGroup}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiplicationGroupsAnswerKey; 