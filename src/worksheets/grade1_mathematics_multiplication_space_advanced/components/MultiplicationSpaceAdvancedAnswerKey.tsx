import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_SOLUTIONS = [
  {
    id: 1,
    problem: '6 × 8 = 48',
    visual: '🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀',
    explanation: [
      'Count 6 squadrons of 8 rockets each:',
      'Squadron 1: 8 rockets',
      'Squadron 2: 8 more rockets (16 total)',
      'Squadron 3: 8 more rockets (24 total)',
      'Squadron 4: 8 more rockets (32 total)',
      'Squadron 5: 8 more rockets (40 total)',
      'Squadron 6: 8 more rockets (48 total)',
      'Total rockets: 6 × 8 = 48'
    ]
  },
  {
    id: 2,
    problem: '7 × 7 = 49',
    visual: '👾 👾 👾 👾 👾 👾 👾',
    explanation: [
      'Count 7 waves of 7 invaders each:',
      'Wave 1: 7 invaders',
      'Wave 2: 7 more invaders (14 total)',
      'Wave 3: 7 more invaders (21 total)',
      'Wave 4: 7 more invaders (28 total)',
      'Wave 5: 7 more invaders (35 total)',
      'Wave 6: 7 more invaders (42 total)',
      'Wave 7: 7 more invaders (49 total)',
      'Total invaders: 7 × 7 = 49'
    ]
  },
  {
    id: 3,
    problem: '8 × 6 = 48',
    visual: '🛸 🛸 🛸 🛸 🛸 🛸',
    explanation: [
      'Count 8 zones with 6 UFOs each:',
      'Zone A: 6 UFOs',
      'Zone B: 6 more UFOs (12 total)',
      'Zone C: 6 more UFOs (18 total)',
      'Zone D: 6 more UFOs (24 total)',
      'Zone E: 6 more UFOs (30 total)',
      'Zone F: 6 more UFOs (36 total)',
      'Zone G: 6 more UFOs (42 total)',
      'Zone H: 6 more UFOs (48 total)',
      'Total UFOs: 8 × 6 = 48'
    ]
  },
  {
    id: 4,
    problem: '9 × 5 = 45',
    visual: '💫 💫 💫 💫 💫',
    explanation: [
      'Count 9 clusters of 5 stars each:',
      'Cluster 1: 5 stars',
      'Cluster 2: 5 more stars (10 total)',
      'Cluster 3: 5 more stars (15 total)',
      'Cluster 4: 5 more stars (20 total)',
      'Cluster 5: 5 more stars (25 total)',
      'Cluster 6: 5 more stars (30 total)',
      'Cluster 7: 5 more stars (35 total)',
      'Cluster 8: 5 more stars (40 total)',
      'Cluster 9: 5 more stars (45 total)',
      'Total stars: 9 × 5 = 45'
    ]
  },
  {
    id: 5,
    problem: '6 × 9 = 54',
    visual: '🌠 🌠 🌠 🌠 🌠 🌠 🌠 🌠 🌠',
    explanation: [
      'Count 6 sectors with 9 meteors each:',
      'Sector 1: 9 meteors',
      'Sector 2: 9 more meteors (18 total)',
      'Sector 3: 9 more meteors (27 total)',
      'Sector 4: 9 more meteors (36 total)',
      'Sector 5: 9 more meteors (45 total)',
      'Sector 6: 9 more meteors (54 total)',
      'Total meteors: 6 × 9 = 54'
    ]
  },
  {
    id: 6,
    problem: '8 × 8 = 64',
    visual: '🌌 🌌 🌌 🌌 🌌 🌌 🌌 🌌',
    explanation: [
      'Count 8 regions with 8 nebulae each:',
      'Region α: 8 nebulae',
      'Region β: 8 more nebulae (16 total)',
      'Region γ: 8 more nebulae (24 total)',
      'Region δ: 8 more nebulae (32 total)',
      'Region ε: 8 more nebulae (40 total)',
      'Region ζ: 8 more nebulae (48 total)',
      'Region η: 8 more nebulae (56 total)',
      'Region θ: 8 more nebulae (64 total)',
      'Total nebulae: 8 × 8 = 64'
    ]
  },
  {
    id: 7,
    problem: '7 × 9 = 63',
    visual: '🌍 🌍 🌍 🌍 🌍 🌍 🌍 🌍 🌍',
    explanation: [
      'Count 7 systems with 9 planets each:',
      'System I: 9 planets',
      'System II: 9 more planets (18 total)',
      'System III: 9 more planets (27 total)',
      'System IV: 9 more planets (36 total)',
      'System V: 9 more planets (45 total)',
      'System VI: 9 more planets (54 total)',
      'System VII: 9 more planets (63 total)',
      'Total planets: 7 × 9 = 63'
    ]
  },
  {
    id: 8,
    problem: '9 × 7 = 63',
    visual: '🛰️ 🛰️ 🛰️ 🛰️ 🛰️ 🛰️ 🛰️',
    explanation: [
      'Count 9 orbits with 7 satellites each:',
      'Orbit 1: 7 satellites',
      'Orbit 2: 7 more satellites (14 total)',
      'Orbit 3: 7 more satellites (21 total)',
      'Orbit 4: 7 more satellites (28 total)',
      'Orbit 5: 7 more satellites (35 total)',
      'Orbit 6: 7 more satellites (42 total)',
      'Orbit 7: 7 more satellites (49 total)',
      'Orbit 8: 7 more satellites (56 total)',
      'Orbit 9: 7 more satellites (63 total)',
      'Total satellites: 9 × 7 = 63'
    ]
  },
  {
    id: 9,
    problem: '9 × 8 = 72',
    visual: '🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟',
    explanation: [
      'Count 9 regions with 8 supernovas each:',
      'Nova 1: 8 supernovas',
      'Nova 2: 8 more supernovas (16 total)',
      'Nova 3: 8 more supernovas (24 total)',
      'Nova 4: 8 more supernovas (32 total)',
      'Nova 5: 8 more supernovas (40 total)',
      'Nova 6: 8 more supernovas (48 total)',
      'Nova 7: 8 more supernovas (56 total)',
      'Nova 8: 8 more supernovas (64 total)',
      'Nova 9: 8 more supernovas (72 total)',
      'Total supernovas: 9 × 8 = 72'
    ]
  },
  {
    id: 10,
    problem: '9 × 9 = 81',
    visual: '🌎 🌎 🌎 🌎 🌎 🌎 🌎 🌎 🌎',
    explanation: [
      'Count 9 sectors with 9 Earth-like planets each:',
      'Sector Alpha: 9 planets',
      'Sector Beta: 9 more planets (18 total)',
      'Sector Gamma: 9 more planets (27 total)',
      'Sector Delta: 9 more planets (36 total)',
      'Sector Epsilon: 9 more planets (45 total)',
      'Sector Zeta: 9 more planets (54 total)',
      'Sector Eta: 9 more planets (63 total)',
      'Sector Theta: 9 more planets (72 total)',
      'Sector Omega: 9 more planets (81 total)',
      'Total Earth-like planets: 9 × 9 = 81'
    ]
  }
];

const MultiplicationSpaceAdvancedAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-8">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-purple-300 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Space Multiplication Answer Key (Numbers 5-10)
        </motion.h1>

        <div className="space-y-8">
          {MULTIPLICATION_SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col space-y-4">
                {/* Problem Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-purple-300">
                    Problem {solution.id}
                  </h3>
                  <span className="text-2xl font-bold text-purple-400">
                    {solution.problem}
                  </span>
                </div>

                {/* Visual Representation */}
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-sm text-purple-300 mb-2">Visual Group:</p>
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
                  <p className="text-sm text-purple-300 mb-2">Step-by-Step Solution:</p>
                  <ul className="space-y-2">
                    {solution.explanation.map((step, i) => (
                      <motion.li
                        key={i}
                        className="text-purple-200"
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

export default MultiplicationSpaceAdvancedAnswerKey; 