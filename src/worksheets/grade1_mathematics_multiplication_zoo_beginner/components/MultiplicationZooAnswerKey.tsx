import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_SOLUTIONS = [
  {
    id: 1,
    groups: 3,
    itemsPerGroup: 2,
    objectType: 'lions',
    story: 'There are 3 lion enclosures, and each enclosure has 2 lions.',
    explanation: 'To find the total number of lions, we multiply the number of enclosures (3) by the number of lions in each enclosure (2).',
    steps: [
      'Count the number of enclosures: 3',
      'Count lions in each enclosure: 2',
      'Multiply: 3 × 2 = 6',
      'Therefore, there are 6 lions in total'
    ],
    groupNames: ['Savanna 1', 'Savanna 2', 'Savanna 3']
  },
  {
    id: 2,
    groups: 4,
    itemsPerGroup: 3,
    objectType: 'monkeys',
    story: 'The zoo has 4 monkey habitats, with 3 monkeys in each habitat.',
    explanation: 'To find the total number of monkeys, we multiply the number of habitats (4) by the number of monkeys in each habitat (3).',
    steps: [
      'Count the number of habitats: 4',
      'Count monkeys in each habitat: 3',
      'Multiply: 4 × 3 = 12',
      'Therefore, there are 12 monkeys in total'
    ],
    groupNames: ['Jungle 1', 'Jungle 2', 'Jungle 3', 'Jungle 4']
  },
  {
    id: 3,
    groups: 5,
    itemsPerGroup: 2,
    objectType: 'penguins',
    story: 'The Arctic zone has 5 penguin pools, with 2 penguins in each pool.',
    explanation: 'To find the total number of penguins, we multiply the number of pools (5) by the number of penguins in each pool (2).',
    steps: [
      'Count the number of pools: 5',
      'Count penguins in each pool: 2',
      'Multiply: 5 × 2 = 10',
      'Therefore, there are 10 penguins in total'
    ],
    groupNames: ['Arctic 1', 'Arctic 2', 'Arctic 3', 'Arctic 4', 'Arctic 5']
  },
  {
    id: 4,
    groups: 2,
    itemsPerGroup: 4,
    objectType: 'giraffes',
    story: 'The zoo has 2 giraffe areas, with 4 giraffes in each area.',
    explanation: 'To find the total number of giraffes, we multiply the number of areas (2) by the number of giraffes in each area (4).',
    steps: [
      'Count the number of areas: 2',
      'Count giraffes in each area: 4',
      'Multiply: 2 × 4 = 8',
      'Therefore, there are 8 giraffes in total'
    ],
    groupNames: ['Savanna A', 'Savanna B']
  },
  {
    id: 5,
    groups: 3,
    itemsPerGroup: 3,
    objectType: 'gorillas',
    story: 'There are 3 gorilla sanctuaries, with 3 gorillas in each sanctuary.',
    explanation: 'To find the total number of gorillas, we multiply the number of sanctuaries (3) by the number of gorillas in each sanctuary (3).',
    steps: [
      'Count the number of sanctuaries: 3',
      'Count gorillas in each sanctuary: 3',
      'Multiply: 3 × 3 = 9',
      'Therefore, there are 9 gorillas in total'
    ],
    groupNames: ['Jungle X', 'Jungle Y', 'Jungle Z']
  }
];

const MultiplicationZooAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-amber-600 mb-6">
          Zoo Multiplication Answer Key
        </h1>

        <div className="space-y-6">
          {MULTIPLICATION_SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-xl font-bold text-amber-600 mb-4">
                Problem {solution.id}: {solution.objectType.charAt(0).toUpperCase() + solution.objectType.slice(1)}
              </h2>

              <div className="space-y-4">
                {/* Story */}
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-700">{solution.story}</p>
                </div>

                {/* Visual Representation */}
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-amber-600 mb-2">Visual Groups:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {Array.from({ length: solution.groups }).map((_, i) => (
                      <div key={i} className="bg-amber-50 p-3 rounded-lg text-center">
                        <p className="text-sm text-amber-600 mb-1">{solution.groupNames[i]}</p>
                        <div className="flex justify-center gap-1 flex-wrap">
                          {Array.from({ length: solution.itemsPerGroup }).map((_, j) => (
                            <span key={j} className="text-2xl">
                              {solution.objectType === 'lions' && '🦁'}
                              {solution.objectType === 'monkeys' && '🐒'}
                              {solution.objectType === 'penguins' && '🐧'}
                              {solution.objectType === 'giraffes' && '🦒'}
                              {solution.objectType === 'gorillas' && '🦍'}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold text-amber-600 mb-2">Explanation:</h3>
                  <p className="text-amber-700">{solution.explanation}</p>
                </div>

                {/* Solution Steps */}
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-amber-600 mb-2">Solution Steps:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-amber-700">
                    {solution.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>

                {/* Multiplication Fact */}
                <div className="bg-amber-100 p-4 rounded-lg text-center">
                  <p className="text-lg font-bold text-amber-700">
                    {solution.groups} × {solution.itemsPerGroup} = {solution.groups * solution.itemsPerGroup}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiplicationZooAnswerKey; 