import React from 'react';
import { motion } from 'framer-motion';

const DivisionStoryThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-amber-600">Story Division</h1>
        
        {/* Story Example */}
        <div className="text-center mb-2">
          <p className="text-lg text-amber-700">
            Share 6 cookies with 2 friends
          </p>
        </div>

        {/* Division Groups */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-[240px]">
          {[0, 1].map((group) => (
            <motion.div
              key={group}
              className="bg-amber-50 rounded-lg p-3 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: group * 0.2 }}
            >
              <div className="flex space-x-1">
                {[0, 1, 2].map((cookie) => (
                  <span key={cookie} role="img" aria-label="cookie" className="text-2xl">
                    🍪
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <div className="text-sm font-medium text-amber-500 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
            Numbers 2-10
          </div>
          <div className="text-sm font-medium text-amber-500 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
            Equal Sharing
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionStoryThumbnail; 