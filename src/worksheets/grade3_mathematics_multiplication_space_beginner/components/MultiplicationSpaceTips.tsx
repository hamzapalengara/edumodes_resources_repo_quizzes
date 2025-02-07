import React from 'react';
import { motion } from 'framer-motion';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const MultiplicationSpaceTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900">
      <TipsHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Space Explorer's Guide 👨‍🚀
          </h2>

          <div className="space-y-6">
            <div className="bg-indigo-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                🚀 How to Play
              </h3>
              <ul className="list-disc list-inside space-y-2 text-indigo-100">
                <li>Guide the astronaut through space by following multiplication by 3</li>
                <li>Start with number 3 (first discovery is a star 🌟)</li>
                <li>Find the next number by multiplying by 3</li>
                <li>Collect all space objects to reach the galaxy 🌌</li>
              </ul>
            </div>

            <div className="bg-purple-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                🌠 Space Objects Path
              </h3>
              <ul className="list-disc list-inside space-y-2 text-purple-100">
                <li>1 × 3 = 3 (Star 🌟)</li>
                <li>2 × 3 = 6 (Earth 🌍)</li>
                <li>3 × 3 = 9 (Moon 🌙)</li>
                <li>4 × 3 = 12 (Saturn 🪐)</li>
                <li>5 × 3 = 15 (Comet ☄️)</li>
              </ul>
            </div>

            <div className="bg-indigo-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                💫 Navigation Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-indigo-100">
                <li>Always start with number 3 in any row</li>
                <li>Each next number is 3 more than the previous</li>
                <li>Count by 3s: 3, 6, 9, 12, 15...</li>
                <li>Look for numbers that are multiples of 3</li>
              </ul>
            </div>

            <div className="bg-purple-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                🌌 Mission Control
              </h3>
              <ul className="list-disc list-inside space-y-2 text-purple-100">
                <li>Each correct number reveals a new space object</li>
                <li>Listen for the multiplication fact when you discover an object</li>
                <li>The galaxy awaits at the end of your journey!</li>
                <li>Have fun exploring space while practicing multiplication by 3</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationSpaceTips; 