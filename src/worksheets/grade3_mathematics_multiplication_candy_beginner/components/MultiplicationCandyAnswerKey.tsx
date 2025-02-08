import React from 'react';
import { motion } from 'framer-motion';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const CANDIES = ['🍬', '🍭', '🍫', '🧁', '🍪', '🍩', '🍡', '🍰', '🍮', '📦'];
const CANDY_NAMES = ['candy', 'lollipop', 'chocolate', 'cupcake', 'cookie', 'donut', 'dango', 'cake', 'pudding', 'candy box'];

const MultiplicationCandyAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 to-purple-600">
      <AnswerKeyHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Candy Factory Solution 🏭
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Complete Packaging Path
              </h3>
              <p className="text-pink-100 mb-4">
                Follow the numbers multiplied by 6, starting from 6 and ending at 60.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {[6, 12, 18, 24, 30, 36, 42, 48, 54, 60].map((number, index) => (
                  <React.Fragment key={number}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-pink-500 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                        {number}
                      </div>
                      <div className="absolute -top-6 text-2xl">
                        {CANDIES[index]}
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
                      {index + 1} × 6 =
                    </div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                      {(index + 1) * 6}
                      <span className="text-xl">{CANDIES[index]}</span>
                    </div>
                    <div className="text-sm text-purple-200">
                      {CANDY_NAMES[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pink-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Pattern Recognition
              </h3>
              <ul className="list-disc list-inside space-y-2 text-pink-100">
                <li>Each number in the path is a multiple of 6</li>
                <li>Each number is 6 more than the previous number</li>
                <li>The path follows the pattern: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60</li>
                <li>Final destination is the candy box (60) 📦</li>
              </ul>
            </div>

            <div className="bg-purple-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Quick Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-purple-100">
                <li>To find any answer, multiply the position by 6</li>
                <li>Even numbers that are multiples of 6 end in 6 or 0</li>
                <li>Use skip counting: count by 6s to find the next number</li>
                <li>Think of each number as a package of 6 candies</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationCandyAnswerKey; 