import { motion } from 'framer-motion';

const LetterRecognitionThumbnail = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Main content container */}
      <div className="w-[420px] bg-white/90 backdrop-blur-xl rounded-2xl border border-purple-100 p-6 shadow-lg relative">
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-4 -left-4 text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎪
        </motion.div>
        <motion.div
          className="absolute -top-4 -right-4 text-4xl"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎨
        </motion.div>

        <h1 className="text-2xl font-bold text-center text-purple-800 mb-6">
          Alphabet Adventure
        </h1>

        {/* Preview of letter grid */}
        <div className="grid grid-cols-5 gap-3 mb-6">
          {['A', 'B', '_', 'D', 'E', '_', 'G', 'H', '_', 'J'].map((letter, index) => (
            <motion.div
              key={index}
              className={`
                w-12 h-12 flex items-center justify-center text-xl font-bold rounded-lg
                ${letter === '_' 
                  ? 'border-2 border-dashed border-purple-300 bg-white' 
                  : 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200'}
              `}
              initial={letter === '_' ? { scale: 0.8 } : { scale: 1 }}
              animate={letter === '_' 
                ? { scale: [0.8, 1, 0.8] } 
                : { y: [0, -2, 0] }
              }
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.1 
              }}
            >
              <span className="text-purple-700">{letter}</span>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center space-y-2">
          <motion.p 
            className="text-purple-600 font-medium"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Fill in the Missing Letters! 🎯
          </motion.p>
          <p className="text-purple-500 text-sm">
            A Fun Letter Learning Adventure! ✨
          </p>
        </div>

        {/* Bottom decorations */}
        <div className="absolute -bottom-3 left-0 right-0 flex justify-center gap-4">
          {[..."🌟🎈🌈"].map((emoji, index) => (
            <motion.span
              key={index}
              className="text-2xl"
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3 
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LetterRecognitionThumbnail; 