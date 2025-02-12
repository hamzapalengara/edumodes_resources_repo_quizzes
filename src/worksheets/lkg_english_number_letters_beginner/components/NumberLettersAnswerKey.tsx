import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Number data with name, emoji/symbol, and correct first letter
const NUMBERS = [
  { name: 'ONE', numeral: '1', letter: 'O', sound: 'like ocean', bgColor: 'bg-blue-500', textColor: 'text-blue-700' },
  { name: 'TWO', numeral: '2', letter: 'T', sound: 'like tree', bgColor: 'bg-green-500', textColor: 'text-green-700' },
  { name: 'THREE', numeral: '3', letter: 'T', sound: 'like train', bgColor: 'bg-yellow-500', textColor: 'text-yellow-700' },
  { name: 'FOUR', numeral: '4', letter: 'F', sound: 'like fish', bgColor: 'bg-red-500', textColor: 'text-red-700' },
  { name: 'FIVE', numeral: '5', letter: 'F', sound: 'like flower', bgColor: 'bg-pink-500', textColor: 'text-pink-700' },
  { name: 'SIX', numeral: '6', letter: 'S', sound: 'like snake', bgColor: 'bg-purple-500', textColor: 'text-purple-700' },
  { name: 'SEVEN', numeral: '7', letter: 'S', sound: 'like sun', bgColor: 'bg-orange-500', textColor: 'text-orange-700' },
  { name: 'EIGHT', numeral: '8', letter: 'E', sound: 'like elephant', bgColor: 'bg-indigo-500', textColor: 'text-indigo-700' },
  { name: 'NINE', numeral: '9', letter: 'N', sound: 'like nest', bgColor: 'bg-teal-500', textColor: 'text-teal-700' },
  { name: 'TEN', numeral: '10', letter: 'T', sound: 'like tiger', bgColor: 'bg-amber-500', textColor: 'text-amber-700' },
];

const NumberLettersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Number Letters - Answer Key
          </h2>
        </div>

        {/* Number Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {NUMBERS.map((number, index) => (
            <motion.div
              key={index}
              className={`
                bg-white/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg
                ${number.bgColor} bg-opacity-20
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Number */}
              <div className="text-6xl mb-4 drop-shadow-lg font-bold">
                {number.numeral}
              </div>

              {/* Number Name and Letter */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {number.name}
                </h3>
                <div className={`
                  w-12 h-12 border-4 rounded-lg flex items-center justify-center
                  text-2xl font-bold bg-white shadow-md mx-auto
                  ${number.textColor} border-yellow-400
                `}>
                  {number.letter}
                </div>
                <p className="mt-2 text-white">
                  {number.sound}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 text-white text-center shadow-lg">
          <p className="text-lg">
            Each number word starts with its highlighted letter. Help students associate numbers with their first letters!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumberLettersAnswerKey; 