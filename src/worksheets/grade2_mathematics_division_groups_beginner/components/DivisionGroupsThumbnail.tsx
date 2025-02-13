import React from 'react';
import { motion } from 'framer-motion';

const DivisionGroupsThumbnail: React.FC = () => {
  // Remove unused variable
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Division by Grouping</h1>
        <div className="flex items-center space-x-2">
          <span className="text-xl">12</span>
          <span className="text-xl">÷</span>
          <span className="text-xl">3</span>
          <span className="text-xl">=</span>
          <span className="text-xl">4</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map((group) => (
            <motion.div
              key={group}
              className="bg-blue-100 rounded-lg p-2 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: group * 0.2 }}
            >
              <div className="flex space-x-1">
                {[0, 1, 2, 3].map((star) => (
                  <span key={star} role="img" aria-label="star">
                    🌟
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DivisionGroupsThumbnail; 