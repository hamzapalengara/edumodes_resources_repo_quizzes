import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Fixed Roman numeral order - matches clock positions starting from 12 o'clock
const ROMAN_NUMERALS = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

const ClockRomanAnswerKey: React.FC = () => {
  const renderClock = (hours: number, minutes: number) => {
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    const minuteDegrees = minutes * 6;

    return (
      <div className="relative w-32 h-32">
        {/* Clock Face */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-100 shadow-lg border-4 border-indigo-300">
          {/* Hour Numbers (Roman Numerals) */}
          {ROMAN_NUMERALS.map((numeral, i) => {
            const angle = ((i * 30 - 90) * Math.PI) / 180;
            const radius = 45; // Adjusted for better visibility
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={i}
                className="absolute w-6 h-6 flex items-center justify-center text-sm font-bold"
                style={{
                  left: `calc(50% + ${x}px - 12px)`,
                  top: `calc(50% + ${y}px - 12px)`
                }}
              >
                <span className="bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  {numeral}
                </span>
              </div>
            );
          })}

          {/* Hour Hand */}
          <motion.div
            className="absolute w-1.5 bg-gradient-to-t from-indigo-600 to-violet-500 rounded-full origin-bottom"
            style={{
              height: '30%',
              left: 'calc(50% - 3px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: hourDegrees
            }}
          />

          {/* Minute Hand */}
          <motion.div
            className="absolute w-1 bg-gradient-to-t from-purple-500 to-fuchsia-400 rounded-full origin-bottom"
            style={{
              height: '40%',
              left: 'calc(50% - 2px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: minuteDegrees
            }}
          />

          {/* Center Dot */}
          <div
            className="absolute w-3 h-3 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full"
            style={{
              left: 'calc(50% - 6px)',
              top: 'calc(50% - 6px)'
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Introduction */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
            Understanding Roman Numerals on the Clock
          </h2>
          <p className="text-indigo-900 mb-4">
            Roman numerals are used in many traditional clock faces. Here's how to read them:
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {ROMAN_NUMERALS.map((numeral, index) => {
              // Calculate the correct number value
              let numberValue;
              if (numeral === 'XII') {
                numberValue = 12;
              } else if (index > 0) {
                numberValue = index;
              }
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-3 text-center shadow-sm border border-indigo-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-lg font-bold text-indigo-600">{numeral}</div>
                  <div className="text-sm text-indigo-400">= {numberValue}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Example Times */}
        <div className="space-y-6">
          {[12, 3, 6, 9].map((hour, index) => {
            // Get correct Roman numeral for the hour
            const romanHour = hour === 12 ? 'XII' : ROMAN_NUMERALS[hour];
            return (
              <motion.div
                key={hour}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    {renderClock(hour, 0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-600 mb-2">
                      {romanHour} = {hour}:00
                    </h3>
                    <p className="text-indigo-900">
                      When the hour hand points to {romanHour},
                      it represents {hour} o'clock
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tips Section */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
            Tips for Reading Roman Numerals
          </h2>
          <ul className="space-y-3 text-indigo-900">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
              Remember that XII (12) is always at the top
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
              III (3), VI (6), and IX (9) are at the quarter positions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
              The minute hand on XII means it's exactly on the hour
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ClockRomanAnswerKey; 