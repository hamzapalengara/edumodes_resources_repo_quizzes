import React from 'react';
import { motion } from 'framer-motion';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const MultiplicationSafariTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-700 to-green-800">
      <TipsHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Safari Guide's Handbook 🦮
          </h2>

          <div className="space-y-6">
            <div className="bg-yellow-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                🌍 How to Play
              </h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-100">
                <li>Follow the safari guide through the wilderness by multiplying by 4</li>
                <li>Start with number 4 (first discovery is a lion 🦁)</li>
                <li>Find the next number by multiplying by 4</li>
                <li>Discover all animals to reach the oasis 🌴</li>
              </ul>
            </div>

            <div className="bg-green-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                🦁 Animal Discovery Path
              </h3>
              <ul className="list-disc list-inside space-y-2 text-green-100">
                <li>1 × 4 = 4 (Lion 🦁)</li>
                <li>2 × 4 = 8 (Elephant 🐘)</li>
                <li>3 × 4 = 12 (Giraffe 🦒)</li>
                <li>4 × 4 = 16 (Rhino 🦏)</li>
                <li>5 × 4 = 20 (Zebra 🦓)</li>
              </ul>
            </div>

            <div className="bg-yellow-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                🧭 Navigation Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-100">
                <li>Always start with number 4 in any row</li>
                <li>Each next number is 4 more than the previous</li>
                <li>Count by 4s: 4, 8, 12, 16, 20...</li>
                <li>Look for numbers that are multiples of 4</li>
              </ul>
            </div>

            <div className="bg-green-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                🌴 Safari Rules
              </h3>
              <ul className="list-disc list-inside space-y-2 text-green-100">
                <li>Each correct number reveals a new animal</li>
                <li>Listen for the multiplication fact when you spot an animal</li>
                <li>The oasis awaits at the end of your journey!</li>
                <li>Have fun exploring while practicing multiplication by 4</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationSafariTips; 