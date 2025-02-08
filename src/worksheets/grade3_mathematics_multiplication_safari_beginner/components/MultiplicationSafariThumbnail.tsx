import React from 'react';
import { motion } from 'framer-motion';

const MultiplicationSafariThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-yellow-700 to-green-800 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 p-4 flex flex-col items-center justify-center"
        >
          <div className="text-4xl mb-2">🦮</div>
          <h3 className="text-xl font-bold text-white text-center mb-2">
            Safari Adventure Multiplication
          </h3>
          <p className="text-sm text-yellow-100 text-center mb-4">
            Discover animals with multiplication by 4!
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="text-white">→</div>
            <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">
              8
            </div>
            <div className="text-white">→</div>
            <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">
              12
            </div>
          </div>

          <div className="flex gap-2 text-2xl">
            🦁 🐘 🦒 → 🌴
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationSafariThumbnail; 