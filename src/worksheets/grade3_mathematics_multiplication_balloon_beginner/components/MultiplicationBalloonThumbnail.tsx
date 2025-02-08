import React from 'react';
import { motion } from 'framer-motion';

const MultiplicationBalloonThumbnail: React.FC = () => {
  return (
    <div className="w-[600px] h-[400px] bg-gradient-to-br from-sky-100 via-white to-pink-100 relative overflow-hidden">
      {/* Background Balloon Pattern */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={false}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-sky-600 text-center mb-4"
        >
          Balloon Festival
          <br />
          <span className="text-pink-500">Multiplication</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-sky-700 text-center mb-6"
        >
          Collect balloons in groups of 10!
        </motion.p>

        {/* Balloon Examples */}
        <div className="flex gap-4 mb-6">
          {[1, 2, 3].map((num, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg"
            >
              <div className="text-2xl mb-2">
                {Array(num).fill('🎈').join(' ')}
              </div>
              <div className="text-sky-600 font-bold text-center">
                {num} × 10 = {num * 10}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Balloons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {['🎈', '🎈', '🎈'].map((balloon, i) => (
            <motion.div
              key={i}
              className="text-3xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            >
              {balloon}
            </motion.div>
          ))}
        </div>

        {/* Grade Level */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-4 left-4 bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-bold"
        >
          Grade 3
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationBalloonThumbnail; 