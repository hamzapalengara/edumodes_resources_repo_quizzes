import React from 'react';
import { motion } from 'framer-motion';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const MultiplicationPathTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-teal-50">
      <TipsHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            Help the Cat Find Treats! 🐱
          </h2>

          <div className="space-y-6">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                🎯 How to Play
              </h3>
              <ul className="list-disc list-inside space-y-2 text-teal-700">
                <li>Help the hungry cat find treats by following multiplication by 2</li>
                <li>Start with number 2 (first treat is a fish 🐟)</li>
                <li>Find the next number by multiplying by 2</li>
                <li>Collect all treats to reach the food bowl 🥣</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-2">
                🧮 Multiplication Path
              </h3>
              <ul className="list-disc list-inside space-y-2 text-red-700">
                <li>1 × 2 = 2 (Fish 🐟)</li>
                <li>2 × 2 = 4 (Steak 🥩)</li>
                <li>3 × 2 = 6 (Chicken 🍗)</li>
                <li>4 × 2 = 8 (Sandwich 🥪)</li>
                <li>5 × 2 = 10 (Bacon 🥓)</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                💡 Strategy Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-teal-700">
                <li>Always start with number 2 in any row</li>
                <li>Each next number is 2 more than the previous</li>
                <li>Count by 2s: 2, 4, 6, 8, 10...</li>
                <li>Look for numbers that are even (end in 0, 2, 4, 6, or 8)</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-2">
                🌟 Remember
              </h3>
              <ul className="list-disc list-inside space-y-2 text-red-700">
                <li>Each correct number gives you a delicious treat</li>
                <li>Listen for the multiplication fact when you find a treat</li>
                <li>The cat is counting on you to find all the treats!</li>
                <li>Have fun while practicing multiplication by 2</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationPathTips; 