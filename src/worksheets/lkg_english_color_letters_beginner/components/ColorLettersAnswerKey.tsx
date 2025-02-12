import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Color data with name, emoji/symbol, and correct first letter
const COLORS = [
  { name: 'RED', emoji: '🔴', letter: 'R', sound: 'like a rose', bgColor: 'bg-red-500', textColor: 'text-red-700' },
  { name: 'BLUE', emoji: '🔵', letter: 'B', sound: 'like the sky', bgColor: 'bg-blue-500', textColor: 'text-blue-700' },
  { name: 'GREEN', emoji: '🟢', letter: 'G', sound: 'like grass', bgColor: 'bg-green-500', textColor: 'text-green-700' },
  { name: 'YELLOW', emoji: '🟡', letter: 'Y', sound: 'like the sun', bgColor: 'bg-yellow-500', textColor: 'text-yellow-700' },
  { name: 'PURPLE', emoji: '🟣', letter: 'P', sound: 'like grapes', bgColor: 'bg-purple-500', textColor: 'text-purple-700' },
  { name: 'ORANGE', emoji: '🟠', letter: 'O', sound: 'like an orange', bgColor: 'bg-orange-500', textColor: 'text-orange-700' },
  { name: 'BLACK', emoji: '⚫', letter: 'B', sound: 'like night', bgColor: 'bg-gray-900', textColor: 'text-gray-700' },
  { name: 'WHITE', emoji: '⚪', letter: 'W', sound: 'like snow', bgColor: 'bg-gray-100', textColor: 'text-gray-700' },
  { name: 'BROWN', emoji: '🟤', letter: 'B', sound: 'like chocolate', bgColor: 'bg-amber-800', textColor: 'text-amber-700' },
  { name: 'PINK', emoji: '💗', letter: 'P', sound: 'like cotton candy', bgColor: 'bg-pink-500', textColor: 'text-pink-700' },
];

const ColorLettersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Color Letters - Answer Key
          </h2>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {COLORS.map((color, index) => (
            <motion.div
              key={index}
              className={`
                bg-white/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg
                ${color.bgColor} bg-opacity-20
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Color Symbol */}
              <div className="text-6xl mb-4 drop-shadow-lg">
                {color.emoji}
              </div>

              {/* Color Name and Letter */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {color.name}
                </h3>
                <div className={`
                  w-12 h-12 border-4 rounded-lg flex items-center justify-center
                  text-2xl font-bold bg-white shadow-md mx-auto
                  ${color.textColor} border-yellow-400
                `}>
                  {color.letter}
                </div>
                <p className="mt-2 text-white">
                  {color.sound}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 text-white text-center shadow-lg">
          <p className="text-lg">
            Each color starts with its highlighted letter. Help students associate colors with their first letters!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorLettersAnswerKey; 