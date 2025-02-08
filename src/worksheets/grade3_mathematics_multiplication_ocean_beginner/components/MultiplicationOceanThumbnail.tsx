import React from 'react';
import { motion } from 'framer-motion';

const MultiplicationOceanThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-b from-blue-900 to-cyan-900 rounded-xl overflow-hidden relative">
      {/* Background bubbles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 0, -20],
              opacity: [0.5, 1, 0.5],
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
      <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Ocean Explorer
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-cyan-200 text-center mb-6"
        >
          Discover sea creatures with multiplication by 5!
        </motion.div>

        {/* Sea creatures and numbers */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="text-4xl">🐠</span>
            <span className="text-2xl font-bold">5</span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-4xl">🐋</span>
            <span className="text-2xl font-bold">10</span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2"
          >
            <span className="text-4xl">🐢</span>
            <span className="text-2xl font-bold">15</span>
          </motion.div>
        </div>

        {/* Ocean floor decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-950/30 flex items-end justify-around px-4">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                delay: 1 + i * 0.1,
                duration: 0.5,
              }}
              className="w-4 bg-cyan-800/50 rounded-t-lg"
              style={{
                height: `${30 + Math.random() * 30}px`,
              }}
            />
          ))}
        </div>

        {/* Swimming fish animation */}
        <motion.div
          className="absolute text-4xl"
          animate={{
            x: [-50, 550],
            y: [0, -20, 0],
          }}
          transition={{
            x: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            },
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          🐟
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationOceanThumbnail; 