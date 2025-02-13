import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TIME_ANSWERS = [
  {
    hours: 3,
    minutes: 30,
    answer: 'Half past 3',
    explanation: 'When the hour hand is between 3 and 4, and the minute hand points to 6, it shows half past 3.'
  },
  {
    hours: 9,
    minutes: 15,
    answer: 'Quarter past 9',
    explanation: 'When the hour hand is just past 9, and the minute hand points to 3, it shows quarter past 9.'
  },
  {
    hours: 6,
    minutes: 45,
    answer: 'Quarter to 7',
    explanation: 'When the hour hand is between 6 and 7, and the minute hand points to 9, it shows quarter to 7.'
  },
  {
    hours: 12,
    minutes: 30,
    answer: 'Half past 12',
    explanation: 'When the hour hand points to 12, and the minute hand points to 6, it shows half past 12.'
  },
  {
    hours: 4,
    minutes: 15,
    answer: 'Quarter past 4',
    explanation: 'When the hour hand is just past 4, and the minute hand points to 3, it shows quarter past 4.'
  },
  {
    hours: 8,
    minutes: 45,
    answer: 'Quarter to 9',
    explanation: 'When the hour hand is between 8 and 9, and the minute hand points to 9, it shows quarter to 9.'
  },
  {
    hours: 2,
    minutes: 30,
    answer: 'Half past 2',
    explanation: 'When the hour hand is between 2 and 3, and the minute hand points to 6, it shows half past 2.'
  },
  {
    hours: 11,
    minutes: 45,
    answer: 'Quarter to 12',
    explanation: 'When the hour hand is between 11 and 12, and the minute hand points to 9, it shows quarter to 12.'
  }
];

const ClockTimeAdvancedAnswerKey: React.FC = () => {
  const renderClock = (hours: number, minutes: number) => {
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    const minuteDegrees = minutes * 6;

    return (
      <div className="relative w-32 h-32">
        {/* Clock Face with fun background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 shadow-lg border-2 border-indigo-300 overflow-hidden">
          {/* Fun Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {['🌟', '✨', '⭐️', '🌈'].map((emoji, i) => (
              <div
                key={i}
                className="absolute text-sm"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {emoji}
              </div>
            ))}
          </div>

          {/* Hour Numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = ((i * 30 - 90) * Math.PI) / 180;
            const radius = 40;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const number = ((i - 1 + 12) % 12) + 1;
            return (
              <div
                key={i}
                className="absolute w-6 h-6 flex items-center justify-center"
                style={{
                  left: `calc(50% + ${x}px - 12px)`,
                  top: `calc(50% + ${y}px - 12px)`
                }}
              >
                <div className="relative">
                  <span className="text-sm font-bold bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-sm border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
                    {number}
                  </span>
                  {/* Fun indicators for special positions */}
                  {number === 12 && <span className="absolute -top-4 text-xs">🎯</span>}
                  {number === 3 && <span className="absolute -right-4 text-xs">🌟</span>}
                  {number === 6 && <span className="absolute -bottom-4 text-xs">🌈</span>}
                  {number === 9 && <span className="absolute -left-4 text-xs">✨</span>}
                </div>
              </div>
            );
          })}

          {/* Hour Hand */}
          <div
            className="absolute flex items-center justify-center origin-bottom"
            style={{
              width: '4px',
              height: '30%',
              left: 'calc(50% - 2px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              transform: `rotate(${hourDegrees}deg)`
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-indigo-600 to-violet-500 rounded-full shadow-lg" />
            <span className="absolute -top-3 text-xs">🌙</span>
          </div>

          {/* Minute Hand */}
          <div
            className="absolute flex items-center justify-center origin-bottom"
            style={{
              width: '2px',
              height: '40%',
              left: 'calc(50% - 1px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              transform: `rotate(${minuteDegrees}deg)`
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-purple-500 to-fuchsia-400 rounded-full shadow-lg" />
            <span className="absolute -top-3 text-xs">☀️</span>
          </div>

          {/* Center Dot */}
          <div
            className="absolute w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
            style={{
              left: 'calc(50% - 8px)',
              top: 'calc(50% - 8px)',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
          >
            <span className="text-[8px]">🎈</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6"
        >
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 text-center mb-2">
            Answer Key: Advanced Clock Time
          </h1>
          <p className="text-gray-600 text-center">
            Detailed explanations for each clock time question
          </p>
        </motion.div>

        <div className="space-y-6 p-4">
          {TIME_ANSWERS.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  {renderClock(item.hours, item.minutes)}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-2">
                    {item.answer}
                  </h3>
                  <p className="text-gray-600">
                    {item.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClockTimeAdvancedAnswerKey; 