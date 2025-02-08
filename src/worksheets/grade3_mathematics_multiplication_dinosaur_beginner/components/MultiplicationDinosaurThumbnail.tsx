import React from 'react';
import { motion } from 'framer-motion';

const MultiplicationDinosaurThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-amber-800 via-amber-700 to-green-900 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Prehistoric plants in the background */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ 
              x: Math.random() * 420,
              y: Math.random() * 240,
              opacity: 0.2
            }}
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {'🌿'}
          </motion.div>
        ))}

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative flex flex-col items-center justify-center h-full"
        >
          <div className="text-4xl mb-2">🦖</div>
          <h3 className="text-xl font-bold text-amber-100 text-center mb-2">
            Dinosaur Park Multiplication
          </h3>
          <p className="text-sm text-amber-200 text-center mb-4">
            Discover dinosaurs with multiplication by 11!
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">
              11
            </div>
            <div className="text-amber-200">→</div>
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">
              22
            </div>
            <div className="text-amber-200">→</div>
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">
              33
            </div>
          </div>

          <div className="flex gap-2 text-2xl">
            🦖 🦕 🦖 → 🌋
          </div>

          {/* Animated dinosaur scene */}
          <motion.div
            className="absolute bottom-0 right-4 text-4xl"
            animate={{
              x: [-20, 0, -20],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🦕
            <motion.div
              className="absolute -top-4 -right-4 text-lg"
              animate={{
                y: [-5, -10, -5],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              🌿
            </motion.div>
          </motion.div>

          {/* Footprints trail */}
          <div className="absolute bottom-2 left-4 flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="text-amber-900/30 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                👣
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationDinosaurThumbnail; 