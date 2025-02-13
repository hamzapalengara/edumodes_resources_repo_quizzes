import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_SOLUTIONS = [
  {
    id: 1,
    problem: '6 × 8 = 48',
    visual: '🍫 🍫 🍫 🍫 🍫 🍫 🍫 🍫',
    explanation: [
      'Count 6 boxes with 8 chocolates each:',
      'Box 1: 8 chocolates',
      'Box 2: 8 more chocolates (16 total)',
      'Box 3: 8 more chocolates (24 total)',
      'Box 4: 8 more chocolates (32 total)',
      'Box 5: 8 more chocolates (40 total)',
      'Box 6: 8 more chocolates (48 total)',
      'Total chocolates: 6 × 8 = 48'
    ]
  },
  {
    id: 2,
    problem: '7 × 7 = 49',
    visual: '🍭 🍭 🍭 🍭 🍭 🍭 🍭',
    explanation: [
      'Count 7 jars with 7 lollipops each:',
      'Jar A: 7 lollipops',
      'Jar B: 7 more lollipops (14 total)',
      'Jar C: 7 more lollipops (21 total)',
      'Jar D: 7 more lollipops (28 total)',
      'Jar E: 7 more lollipops (35 total)',
      'Jar F: 7 more lollipops (42 total)',
      'Jar G: 7 more lollipops (49 total)',
      'Total lollipops: 7 × 7 = 49'
    ]
  },
  {
    id: 3,
    problem: '8 × 6 = 48',
    visual: '🍬 🍬 🍬 🍬 🍬 🍬',
    explanation: [
      'Count 8 bags with 6 candies each:',
      'Bag 1: 6 candies',
      'Bag 2: 6 more candies (12 total)',
      'Bag 3: 6 more candies (18 total)',
      'Bag 4: 6 more candies (24 total)',
      'Bag 5: 6 more candies (30 total)',
      'Bag 6: 6 more candies (36 total)',
      'Bag 7: 6 more candies (42 total)',
      'Bag 8: 6 more candies (48 total)',
      'Total candies: 8 × 6 = 48'
    ]
  },
  {
    id: 4,
    problem: '9 × 5 = 45',
    visual: '🍪 🍪 🍪 🍪 🍪',
    explanation: [
      'Count 9 plates with 5 cookies each:',
      'Plate 1: 5 cookies',
      'Plate 2: 5 more cookies (10 total)',
      'Plate 3: 5 more cookies (15 total)',
      'Plate 4: 5 more cookies (20 total)',
      'Plate 5: 5 more cookies (25 total)',
      'Plate 6: 5 more cookies (30 total)',
      'Plate 7: 5 more cookies (35 total)',
      'Plate 8: 5 more cookies (40 total)',
      'Plate 9: 5 more cookies (45 total)',
      'Total cookies: 9 × 5 = 45'
    ]
  },
  {
    id: 5,
    problem: '6 × 9 = 54',
    visual: '🧁 🧁 🧁 🧁 🧁 🧁 🧁 🧁 🧁',
    explanation: [
      'Count 6 trays with 9 cupcakes each:',
      'Tray 1: 9 cupcakes',
      'Tray 2: 9 more cupcakes (18 total)',
      'Tray 3: 9 more cupcakes (27 total)',
      'Tray 4: 9 more cupcakes (36 total)',
      'Tray 5: 9 more cupcakes (45 total)',
      'Tray 6: 9 more cupcakes (54 total)',
      'Total cupcakes: 6 × 9 = 54'
    ]
  },
  {
    id: 6,
    problem: '8 × 8 = 64',
    visual: '🍡 🍡 🍡 🍡 🍡 🍡 🍡 🍡',
    explanation: [
      'Count 8 displays with 8 dango each:',
      'Display α: 8 dango',
      'Display β: 8 more dango (16 total)',
      'Display γ: 8 more dango (24 total)',
      'Display δ: 8 more dango (32 total)',
      'Display ε: 8 more dango (40 total)',
      'Display ζ: 8 more dango (48 total)',
      'Display η: 8 more dango (56 total)',
      'Display θ: 8 more dango (64 total)',
      'Total dango: 8 × 8 = 64'
    ]
  },
  {
    id: 7,
    problem: '7 × 9 = 63',
    visual: '🍰 🍰 🍰 🍰 🍰 🍰 🍰 🍰 🍰',
    explanation: [
      'Count 7 shelves with 9 cake slices each:',
      'Shelf I: 9 slices',
      'Shelf II: 9 more slices (18 total)',
      'Shelf III: 9 more slices (27 total)',
      'Shelf IV: 9 more slices (36 total)',
      'Shelf V: 9 more slices (45 total)',
      'Shelf VI: 9 more slices (54 total)',
      'Shelf VII: 9 more slices (63 total)',
      'Total cake slices: 7 × 9 = 63'
    ]
  },
  {
    id: 8,
    problem: '9 × 7 = 63',
    visual: '🍩 🍩 🍩 🍩 🍩 🍩 🍩',
    explanation: [
      'Count 9 boxes with 7 donuts each:',
      'Box 1: 7 donuts',
      'Box 2: 7 more donuts (14 total)',
      'Box 3: 7 more donuts (21 total)',
      'Box 4: 7 more donuts (28 total)',
      'Box 5: 7 more donuts (35 total)',
      'Box 6: 7 more donuts (42 total)',
      'Box 7: 7 more donuts (49 total)',
      'Box 8: 7 more donuts (56 total)',
      'Box 9: 7 more donuts (63 total)',
      'Total donuts: 9 × 7 = 63'
    ]
  },
  {
    id: 9,
    problem: '9 × 8 = 72',
    visual: '🍮 🍮 🍮 🍮 🍮 🍮 🍮 🍮',
    explanation: [
      'Count 9 tables with 8 puddings each:',
      'Table 1: 8 puddings',
      'Table 2: 8 more puddings (16 total)',
      'Table 3: 8 more puddings (24 total)',
      'Table 4: 8 more puddings (32 total)',
      'Table 5: 8 more puddings (40 total)',
      'Table 6: 8 more puddings (48 total)',
      'Table 7: 8 more puddings (56 total)',
      'Table 8: 8 more puddings (64 total)',
      'Table 9: 8 more puddings (72 total)',
      'Total puddings: 9 × 8 = 72'
    ]
  },
  {
    id: 10,
    problem: '9 × 9 = 81',
    visual: '🍦 🍦 🍦 🍦 🍦 🍦 🍦 🍦 🍦',
    explanation: [
      'Count 9 freezers with 9 ice creams each:',
      'Freezer 1: 9 ice creams',
      'Freezer 2: 9 more ice creams (18 total)',
      'Freezer 3: 9 more ice creams (27 total)',
      'Freezer 4: 9 more ice creams (36 total)',
      'Freezer 5: 9 more ice creams (45 total)',
      'Freezer 6: 9 more ice creams (54 total)',
      'Freezer 7: 9 more ice creams (63 total)',
      'Freezer 8: 9 more ice creams (72 total)',
      'Freezer 9: 9 more ice creams (81 total)',
      'Total ice creams: 9 × 9 = 81'
    ]
  }
];

const MultiplicationCandyAdvancedAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-pink-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-8">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-pink-300 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Sweet Shop Multiplication Answer Key (Numbers 5-10)
        </motion.h1>

        <div className="space-y-8">
          {MULTIPLICATION_SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border-2 border-pink-500/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col space-y-4">
                {/* Problem Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-pink-300">
                    Problem {solution.id}
                  </h3>
                  <span className="text-2xl font-bold text-pink-400">
                    {solution.problem}
                  </span>
                </div>

                {/* Visual Representation */}
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-sm text-pink-300 mb-2">Visual Group:</p>
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
                  <p className="text-sm text-pink-300 mb-2">Step-by-Step Solution:</p>
                  <ul className="space-y-2">
                    {solution.explanation.map((step, i) => (
                      <motion.li
                        key={i}
                        className="text-pink-200"
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

export default MultiplicationCandyAdvancedAnswerKey; 