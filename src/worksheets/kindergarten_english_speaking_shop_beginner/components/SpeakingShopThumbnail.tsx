import React from 'react';
import { motion } from 'framer-motion';

const SpeakingShopThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative candy elements */}
      <motion.div 
        className="absolute top-4 right-4 w-16 h-16 bg-red-400 rounded-full opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-4 left-4 w-20 h-20 bg-blue-400 rounded-full opacity-50"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-1/2 left-8 w-12 h-12 bg-green-400 rounded-full opacity-50"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-8 left-1/2 w-14 h-14 bg-purple-400 rounded-full opacity-50"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-[420px] h-[240px] bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col relative overflow-hidden">
        {/* Candy shop decorations */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-200 to-red-200 rounded-full opacity-30" />
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-200 to-green-200 rounded-full opacity-30" />
        
        <h1 className="text-xl font-bold text-center bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4 relative z-10">
          Fun at the Candy Shop!
        </h1>

        {/* Dialogue Preview */}
        <div className="flex-1 flex flex-col justify-center space-y-4 relative z-10">
          {/* Shopkeeper's message */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
              🍬
            </div>
            <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg p-2">
              <p className="text-sm font-medium text-pink-800">
                Welcome to the candy shop! 🎈
              </p>
            </div>
          </div>

          {/* Kid's response area */}
          <div className="flex items-start justify-end gap-2">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-2 flex items-center gap-2">
              <span className="text-sm font-medium text-blue-800">
                🎤 Practice speaking
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              👧
            </div>
          </div>
        </div>

        {/* Feature Indicators */}
        <div className="flex justify-center gap-2 mt-4 relative z-10">
          <div className="px-3 py-1 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full text-sm text-pink-600 flex items-center gap-1 shadow-sm">
            🗣️ Voice Recognition
          </div>
          <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-sm text-blue-600 flex items-center gap-1 shadow-sm">
            🔊 Speech Synthesis
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingShopThumbnail; 