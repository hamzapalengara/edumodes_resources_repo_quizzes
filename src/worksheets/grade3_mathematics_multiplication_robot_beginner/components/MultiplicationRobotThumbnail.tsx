import React from 'react';
import { motion } from 'framer-motion';

const MultiplicationRobotThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-cyan-900 to-pink-900 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Circuit board pattern in the background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-cyan-400 border rounded-full"
              style={{
                width: `${20 + i * 40}px`,
                height: `${20 + i * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative flex flex-col items-center justify-center h-full"
        >
          <div className="text-4xl mb-2">🤖</div>
          <h3 className="text-xl font-bold text-white text-center mb-2">
            Robot Factory Multiplication
          </h3>
          <p className="text-sm text-cyan-100 text-center mb-4">
            Build robots with multiplication by 8!
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
              8
            </div>
            <div className="text-white">→</div>
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
              16
            </div>
            <div className="text-white">→</div>
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
              24
            </div>
          </div>

          <div className="flex gap-2 text-2xl">
            🔧 ⚡ 🔌 → 🤖
          </div>

          {/* Animated robot assembly effect */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl"
            animate={{
              y: [0, -4, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🚀
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-lg"
              animate={{
                y: [-10, -20],
                opacity: [0.8, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              ⚡
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationRobotThumbnail; 