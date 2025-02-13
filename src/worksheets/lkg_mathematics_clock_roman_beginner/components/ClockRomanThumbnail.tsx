import React from 'react';
import { motion } from 'framer-motion';

// Fixed Roman numeral order
const ROMAN_NUMERALS = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

const ClockRomanThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl font-bold text-indigo-600"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%) rotate(45deg)'
              }}
            >
              {ROMAN_NUMERALS[i]}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Title */}
          <motion.h1
            className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Learn Roman Numerals on Clock
          </motion.h1>

          {/* Clock Preview */}
          <div className="relative w-32 h-32 mx-auto">
            {/* Clock Face */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-100 border-4 border-indigo-300 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Sample Roman Numerals */}
              {['XII', 'III', 'VI', 'IX'].map((numeral, i) => {
                // Start from 12 o'clock position and rotate by 90 degrees each time
                const angle = ((i * 90 - 90) * Math.PI) / 180;
                const radius = 50;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 flex items-center justify-center text-sm font-bold"
                    style={{
                      left: `calc(50% + ${x}px - 12px)`,
                      top: `calc(50% + ${y}px - 12px)`
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <span className="bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      {numeral}
                    </span>
                  </motion.div>
                );
              })}

              {/* Clock Hands */}
              <motion.div
                className="absolute w-1 h-12 bg-gradient-to-t from-indigo-600 to-violet-500 rounded-full origin-bottom"
                style={{
                  left: 'calc(50% - 2px)',
                  bottom: '50%',
                  transformOrigin: 'bottom'
                }}
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 45, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <motion.div
                className="absolute w-1 h-16 bg-gradient-to-t from-purple-500 to-fuchsia-400 rounded-full origin-bottom"
                style={{
                  left: 'calc(50% - 1px)',
                  bottom: '50%',
                  transformOrigin: 'bottom'
                }}
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div
            className="text-center mt-4 text-sm text-indigo-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            I → XII Time Reading Practice
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClockRomanThumbnail; 