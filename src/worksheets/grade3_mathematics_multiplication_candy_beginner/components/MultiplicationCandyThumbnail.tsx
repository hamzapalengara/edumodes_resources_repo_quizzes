import React from 'react';
import { motion } from 'framer-motion';

const MultiplicationCandyThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Floating candy animations in the background */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            initial={{ 
              x: Math.random() * 420,
              y: Math.random() * 240,
              opacity: 0.3
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {['🍬', '🍭', '🍫', '🧁', '🍪'][i]}
          </motion.div>
        ))}

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative flex flex-col items-center justify-center h-full"
        >
          <div className="text-4xl mb-2">🏭</div>
          <h3 className="text-xl font-bold text-white text-center mb-2">
            Candy Factory Multiplication
          </h3>
          <p className="text-sm text-pink-100 text-center mb-4">
            Package candies with multiplication by 6!
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
              6
            </div>
            <div className="text-white">→</div>
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
              12
            </div>
            <div className="text-white">→</div>
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
              18
            </div>
          </div>

          <div className="flex gap-2 text-2xl">
            🍬 🍭 🍫 → 📦
          </div>

          {/* Factory conveyor belt decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '-40px 0px']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationCandyThumbnail; 