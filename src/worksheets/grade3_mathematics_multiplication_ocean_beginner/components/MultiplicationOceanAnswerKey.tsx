import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationOceanAnswerKey: React.FC = () => {
  const facts = [
    { multiplier: 1, result: 5, creature: '🐠' },
    { multiplier: 2, result: 10, creature: '🐋' },
    { multiplier: 3, result: 15, creature: '🐢' },
    { multiplier: 4, result: 20, creature: '🦈' },
    { multiplier: 5, result: 25, creature: '🐙' },
    { multiplier: 6, result: 30, creature: '🦑' },
    { multiplier: 7, result: 35, creature: '🐡' },
    { multiplier: 8, result: 40, creature: '🦀' },
    { multiplier: 9, result: 45, creature: '🐚' },
    { multiplier: 10, result: 50, creature: '🤿' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-cyan-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <h1 className="text-3xl font-bold text-center text-white mb-8">
              Ocean Explorer Multiplication - Answer Key 🌊
            </h1>

            <div className="grid gap-6 md:grid-cols-2">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{fact.creature}</span>
                    <div className="text-xl text-white">
                      {fact.multiplier} × 5 = {fact.result}
                    </div>
                  </div>
                  <div className="text-cyan-300 font-semibold">
                    Step {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                Path to Success 🗺️
              </h2>
              <p className="text-cyan-100 mb-4">
                Students should follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-white">
                <li>Start at number 5 (1 × 5)</li>
                <li>Find the next multiple of 5 by adding 5 each time</li>
                <li>Continue until reaching 50 (10 × 5)</li>
                <li>Collect sea creatures along the way! 🐠 → 🌊</li>
              </ol>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex gap-2 text-3xl mb-4">
                {facts.map((fact, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {fact.creature}
                  </motion.span>
                ))}
              </div>
              <p className="text-cyan-200 text-lg">
                Complete path of sea creatures discovered!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationOceanAnswerKey; 