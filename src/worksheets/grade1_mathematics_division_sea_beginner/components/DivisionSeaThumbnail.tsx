import React from 'react';
import { motion } from 'framer-motion';

const DivisionSeaThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-cyan-600">Ocean Division</h1>
        
        <div className="flex items-center space-x-4">
          <span className="text-xl">6</span>
          <span className="text-xl">÷</span>
          <span className="text-xl">2</span>
          <span className="text-xl">=</span>
          <span className="text-xl">3</span>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-[240px]">
          {[0, 1].map((group) => (
            <motion.div
              key={group}
              className="bg-cyan-50 rounded-lg p-3 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: group * 0.2 }}
            >
              <div className="flex space-x-1">
                {[0, 1, 2].map((fish) => (
                  <span key={fish} role="img" aria-label="fish" className="text-2xl">
                    🐠
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <div className="text-sm font-medium text-cyan-500 px-3 py-1 bg-cyan-50 rounded-full border border-cyan-200">
            Numbers 2-10
          </div>
          <div className="text-sm font-medium text-cyan-500 px-3 py-1 bg-cyan-50 rounded-full border border-cyan-200">
            Equal Groups
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionSeaThumbnail; 