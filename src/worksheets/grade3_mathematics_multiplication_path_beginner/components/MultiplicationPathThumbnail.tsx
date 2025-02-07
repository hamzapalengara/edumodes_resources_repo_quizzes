import React from 'react';
import { motion } from 'framer-motion';

const MultiplicationPathThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-red-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 p-4 flex flex-col items-center justify-center"
        >
          <div className="text-4xl mb-2">🐱</div>
          <h3 className="text-xl font-bold text-teal-700 text-center mb-2">
            Multiplication Path Adventure
          </h3>
          <p className="text-sm text-teal-600 text-center mb-4">
            Help the cat collect treats!
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="text-teal-500">→</div>
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="text-teal-500">→</div>
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
              6
            </div>
          </div>

          <div className="flex gap-2 text-2xl">
            🐟 🥩 🍗 → 🥣
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationPathThumbnail; 