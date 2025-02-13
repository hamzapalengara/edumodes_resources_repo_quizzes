import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_SOLUTIONS = [
  {
    id: 1,
    problem: '6 × 8 = 48',
    visual: '🐠 🐠 🐠 🐠 🐠 🐠 🐠 🐠',
    explanation: [
      'Count 6 reefs with 8 tropical fish each:',
      'Reef 1: 8 fish',
      'Reef 2: 8 more fish (16 total)',
      'Reef 3: 8 more fish (24 total)',
      'Reef 4: 8 more fish (32 total)',
      'Reef 5: 8 more fish (40 total)',
      'Reef 6: 8 more fish (48 total)',
      'Total fish: 6 × 8 = 48'
    ]
  },
  {
    id: 2,
    problem: '7 × 7 = 49',
    visual: '🐟 🐟 🐟 🐟 🐟 🐟 🐟',
    explanation: [
      'Count 7 coral formations with 7 fish each:',
      'Coral A: 7 fish',
      'Coral B: 7 more fish (14 total)',
      'Coral C: 7 more fish (21 total)',
      'Coral D: 7 more fish (28 total)',
      'Coral E: 7 more fish (35 total)',
      'Coral F: 7 more fish (42 total)',
      'Coral G: 7 more fish (49 total)',
      'Total fish: 7 × 7 = 49'
    ]
  },
  {
    id: 3,
    problem: '8 × 6 = 48',
    visual: '🐋 🐋 🐋 🐋 🐋 🐋',
    explanation: [
      'Count 8 zones with 6 whales each:',
      'Pod 1: 6 whales',
      'Pod 2: 6 more whales (12 total)',
      'Pod 3: 6 more whales (18 total)',
      'Pod 4: 6 more whales (24 total)',
      'Pod 5: 6 more whales (30 total)',
      'Pod 6: 6 more whales (36 total)',
      'Pod 7: 6 more whales (42 total)',
      'Pod 8: 6 more whales (48 total)',
      'Total whales: 8 × 6 = 48'
    ]
  },
  {
    id: 4,
    problem: '9 × 5 = 45',
    visual: '🐢 🐢 🐢 🐢 🐢',
    explanation: [
      'Count 9 bays with 5 turtles each:',
      'Bay 1: 5 turtles',
      'Bay 2: 5 more turtles (10 total)',
      'Bay 3: 5 more turtles (15 total)',
      'Bay 4: 5 more turtles (20 total)',
      'Bay 5: 5 more turtles (25 total)',
      'Bay 6: 5 more turtles (30 total)',
      'Bay 7: 5 more turtles (35 total)',
      'Bay 8: 5 more turtles (40 total)',
      'Bay 9: 5 more turtles (45 total)',
      'Total turtles: 9 × 5 = 45'
    ]
  },
  {
    id: 5,
    problem: '6 × 9 = 54',
    visual: '🦈 🦈 🦈 🦈 🦈 🦈 🦈 🦈 🦈',
    explanation: [
      'Count 6 zones with 9 sharks each:',
      'Zone 1: 9 sharks',
      'Zone 2: 9 more sharks (18 total)',
      'Zone 3: 9 more sharks (27 total)',
      'Zone 4: 9 more sharks (36 total)',
      'Zone 5: 9 more sharks (45 total)',
      'Zone 6: 9 more sharks (54 total)',
      'Total sharks: 6 × 9 = 54'
    ]
  },
  {
    id: 6,
    problem: '8 × 8 = 64',
    visual: '🐡 🐡 🐡 🐡 🐡 🐡 🐡 🐡',
    explanation: [
      'Count 8 areas with 8 pufferfish each:',
      'Area α: 8 pufferfish',
      'Area β: 8 more pufferfish (16 total)',
      'Area γ: 8 more pufferfish (24 total)',
      'Area δ: 8 more pufferfish (32 total)',
      'Area ε: 8 more pufferfish (40 total)',
      'Area ζ: 8 more pufferfish (48 total)',
      'Area η: 8 more pufferfish (56 total)',
      'Area θ: 8 more pufferfish (64 total)',
      'Total pufferfish: 8 × 8 = 64'
    ]
  },
  {
    id: 7,
    problem: '7 × 9 = 63',
    visual: '🐬 🐬 🐬 🐬 🐬 🐬 🐬 🐬 🐬',
    explanation: [
      'Count 7 pods with 9 dolphins each:',
      'Pod I: 9 dolphins',
      'Pod II: 9 more dolphins (18 total)',
      'Pod III: 9 more dolphins (27 total)',
      'Pod IV: 9 more dolphins (36 total)',
      'Pod V: 9 more dolphins (45 total)',
      'Pod VI: 9 more dolphins (54 total)',
      'Pod VII: 9 more dolphins (63 total)',
      'Total dolphins: 7 × 9 = 63'
    ]
  },
  {
    id: 8,
    problem: '9 × 7 = 63',
    visual: '🦑 🦑 🦑 🦑 🦑 🦑 🦑',
    explanation: [
      'Count 9 deep zones with 7 squids each:',
      'Deep 1: 7 squids',
      'Deep 2: 7 more squids (14 total)',
      'Deep 3: 7 more squids (21 total)',
      'Deep 4: 7 more squids (28 total)',
      'Deep 5: 7 more squids (35 total)',
      'Deep 6: 7 more squids (42 total)',
      'Deep 7: 7 more squids (49 total)',
      'Deep 8: 7 more squids (56 total)',
      'Deep 9: 7 more squids (63 total)',
      'Total squids: 9 × 7 = 63'
    ]
  },
  {
    id: 9,
    problem: '9 × 8 = 72',
    visual: '🐙 🐙 🐙 🐙 🐙 🐙 🐙 🐙',
    explanation: [
      'Count 9 caves with 8 octopi each:',
      'Cave 1: 8 octopi',
      'Cave 2: 8 more octopi (16 total)',
      'Cave 3: 8 more octopi (24 total)',
      'Cave 4: 8 more octopi (32 total)',
      'Cave 5: 8 more octopi (40 total)',
      'Cave 6: 8 more octopi (48 total)',
      'Cave 7: 8 more octopi (56 total)',
      'Cave 8: 8 more octopi (64 total)',
      'Cave 9: 8 more octopi (72 total)',
      'Total octopi: 9 × 8 = 72'
    ]
  },
  {
    id: 10,
    problem: '9 × 9 = 81',
    visual: '🦐 🦐 🦐 🦐 🦐 🦐 🦐 🦐 🦐',
    explanation: [
      'Count 9 sectors with 9 shrimp each:',
      'Sector 1: 9 shrimp',
      'Sector 2: 9 more shrimp (18 total)',
      'Sector 3: 9 more shrimp (27 total)',
      'Sector 4: 9 more shrimp (36 total)',
      'Sector 5: 9 more shrimp (45 total)',
      'Sector 6: 9 more shrimp (54 total)',
      'Sector 7: 9 more shrimp (63 total)',
      'Sector 8: 9 more shrimp (72 total)',
      'Sector 9: 9 more shrimp (81 total)',
      'Total shrimp: 9 × 9 = 81'
    ]
  }
];

const MultiplicationOceanAdvancedAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-cyan-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-8">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-cyan-300 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ocean Multiplication Answer Key (Numbers 5-10)
        </motion.h1>

        <div className="space-y-8">
          {MULTIPLICATION_SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border-2 border-cyan-500/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col space-y-4">
                {/* Problem Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-cyan-300">
                    Problem {solution.id}
                  </h3>
                  <span className="text-2xl font-bold text-cyan-400">
                    {solution.problem}
                  </span>
                </div>

                {/* Visual Representation */}
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-sm text-cyan-300 mb-2">Visual Group:</p>
                  <div className="text-3xl space-x-2">
                    {solution.visual.split(' ').map((emoji, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {emoji}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step Explanation */}
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-sm text-cyan-300 mb-2">Step-by-Step Solution:</p>
                  <ul className="space-y-2">
                    {solution.explanation.map((step, i) => (
                      <motion.li
                        key={i}
                        className="text-cyan-200"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.05) }}
                      >
                        {step}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiplicationOceanAdvancedAnswerKey; 