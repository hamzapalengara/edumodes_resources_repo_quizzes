import React from 'react';
import { motion } from 'framer-motion';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const TREASURES = ['💎', '🌟', '👑', '💍', '🏆', '🔮', '⭐', '💰', '🗝️', '✨'];
const TREASURE_NAMES = ['gem', 'star', 'crown', 'ring', 'trophy', 'crystal', 'medallion', 'gold', 'key', 'sparkle'];

const MultiplicationTreasureAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-yellow-900">
      <AnswerKeyHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Treasure Map Solution 💎
          </h2>

          <div className="space-y-6">
            <div className="bg-emerald-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Complete Treasure Map
              </h3>
              <p className="text-emerald-100 mb-4">
                Follow the numbers multiplied by 9, starting from 9 and ending at 90.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {[9, 18, 27, 36, 45, 54, 63, 72, 81, 90].map((number, index) => (
                  <React.Fragment key={number}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                        {number}
                      </div>
                      <div className="absolute -top-6 text-2xl">
                        {TREASURES[index]}
                      </div>
                    </div>
                    {index < 9 && (
                      <div className="text-white">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-yellow-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Multiplication Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                    <div className="text-yellow-100 font-semibold">
                      {index + 1} × 9 =
                    </div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                      {(index + 1) * 9}
                      <span className="text-xl">{TREASURES[index]}</span>
                    </div>
                    <div className="text-sm text-yellow-200">
                      {TREASURE_NAMES[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Pattern Recognition
              </h3>
              <ul className="list-disc list-inside space-y-2 text-emerald-100">
                <li>Each number in the path is a multiple of 9</li>
                <li>Each number is 9 more than the previous number</li>
                <li>The path follows the pattern: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90</li>
                <li>Final treasure is the sparkle (90) ✨</li>
              </ul>
            </div>

            <div className="bg-yellow-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Treasure Hunting Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-100">
                <li>To find any answer, multiply the position by 9</li>
                <li>Use skip counting: count by 9s to find the next treasure</li>
                <li>Think of each number as a treasure chest with 9 gems</li>
                <li>Visualize the treasure map getting more valuable with each discovery</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationTreasureAnswerKey; 