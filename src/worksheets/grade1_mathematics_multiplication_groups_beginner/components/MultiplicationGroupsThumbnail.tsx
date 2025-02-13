import React from 'react';
import { motion } from 'framer-motion';

const MultiplicationGroupsThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 flex items-center justify-center p-10">
      <motion.div
        className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl font-bold text-amber-600 mb-4 text-center font-sans">
          Multiplication Story Problems
        </h1>

        {/* Example Problem */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-amber-700 text-center mb-4 font-sans">
            3 baskets × 4 apples
          </div>

          {/* Visual Groups */}
          <div className="flex gap-4 justify-center">
            <div className="bg-amber-50 p-2 rounded-lg">
              <div className="text-sm text-amber-600 mb-1 font-sans">Basket 1</div>
              <div className="flex gap-1">
                🍎🍎🍎🍎
              </div>
            </div>
            <div className="bg-amber-50 p-2 rounded-lg">
              <div className="text-sm text-amber-600 mb-1 font-sans">Basket 2</div>
              <div className="flex gap-1">
                🍎🍎🍎🍎
              </div>
            </div>
            <div className="bg-amber-50 p-2 rounded-lg">
              <div className="text-sm text-amber-600 mb-1 font-sans">Basket 3</div>
              <div className="flex gap-1">
                🍎🍎🍎🍎
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-4">
            <span className="bg-amber-100 text-amber-600 px-2 py-1 rounded text-sm font-sans">
              Numbers 2-4
            </span>
            <span className="bg-amber-100 text-amber-600 px-2 py-1 rounded text-sm font-sans">
              Equal Groups
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MultiplicationGroupsThumbnail; 