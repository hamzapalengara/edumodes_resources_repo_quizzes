import React from 'react';
import { motion } from 'framer-motion';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const INGREDIENTS = ['🌟', '🌙', '🔮', '⚗️', '🧪', '🌿', '🍄', '💎', '🌺', '📖'];
const INGREDIENT_NAMES = ['stardust', 'moonlight', 'crystal ball', 'potion', 'elixir', 'herbs', 'mushroom', 'gem', 'flower', 'spellbook'];

const MultiplicationPotionAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 to-indigo-900">
      <AnswerKeyHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Magical Potion Solution 🧙‍♂️
          </h2>

          <div className="space-y-6">
            <div className="bg-indigo-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Complete Potion Recipe
              </h3>
              <p className="text-indigo-100 mb-4">
                Follow the numbers multiplied by 7, starting from 7 and ending at 70.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {[7, 14, 21, 28, 35, 42, 49, 56, 63, 70].map((number, index) => (
                  <React.Fragment key={number}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                        {number}
                      </div>
                      <div className="absolute -top-6 text-2xl">
                        {INGREDIENTS[index]}
                      </div>
                    </div>
                    {index < 9 && (
                      <div className="text-white">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-purple-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Multiplication Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                    <div className="text-purple-100 font-semibold">
                      {index + 1} × 7 =
                    </div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                      {(index + 1) * 7}
                      <span className="text-xl">{INGREDIENTS[index]}</span>
                    </div>
                    <div className="text-sm text-purple-200">
                      {INGREDIENT_NAMES[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Pattern Recognition
              </h3>
              <ul className="list-disc list-inside space-y-2 text-indigo-100">
                <li>Each number in the path is a multiple of 7</li>
                <li>Each number is 7 more than the previous number</li>
                <li>The path follows the pattern: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70</li>
                <li>Final ingredient is the spellbook (70) 📖</li>
              </ul>
            </div>

            <div className="bg-purple-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Wizard's Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-purple-100">
                <li>To find any answer, multiply the position by 7</li>
                <li>Use skip counting: count by 7s to find the next number</li>
                <li>Think of each number as a group of magical ingredients</li>
                <li>Visualize the potion getting stronger with each ingredient</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationPotionAnswerKey; 