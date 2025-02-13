import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Fixed Roman numeral order
const ROMAN_NUMERALS = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

const ClockRomanTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Main Tips */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
            Tips for Learning Clock Time with Roman Numerals
          </h2>
          
          {/* Key Learning Points */}
          <div className="space-y-6">
            {/* Pattern Recognition */}
            <motion.div
              className="bg-white rounded-lg p-4 border border-indigo-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                1. Pattern Recognition
              </h3>
              <ul className="space-y-2 text-indigo-900">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2" />
                  Look for patterns in Roman numerals:
                  <ul className="ml-5 mt-2 space-y-1 text-sm">
                    <li>I = 1, II = 2, III = 3</li>
                    <li>V = 5, VI = 6, VII = 7, VIII = 8</li>
                    <li>IX = 9, X = 10, XI = 11, XII = 12</li>
                  </ul>
                </li>
              </ul>
            </motion.div>

            {/* Clock Face Organization */}
            <motion.div
              className="bg-white rounded-lg p-4 border border-indigo-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                2. Clock Face Organization
              </h3>
              <ul className="space-y-2 text-indigo-900">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  XII is always at the top (12 o'clock)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  VI is always at the bottom (6 o'clock)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  III is on the right (3 o'clock)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  IX is on the left (9 o'clock)
                </li>
              </ul>
            </motion.div>

            {/* Reading Time */}
            <motion.div
              className="bg-white rounded-lg p-4 border border-indigo-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                3. Reading Time Steps
              </h3>
              <ul className="space-y-2 text-indigo-900">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2" />
                  First, look at the minute hand:
                  <ul className="ml-5 mt-2 space-y-1 text-sm">
                    <li>When it points to XII, it's exactly on the hour</li>
                  </ul>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2" />
                  Then, look at the hour hand:
                  <ul className="ml-5 mt-2 space-y-1 text-sm">
                    <li>The Roman numeral it points to is the current hour</li>
                    <li>Convert the Roman numeral to a regular number</li>
                  </ul>
                </li>
              </ul>
            </motion.div>

            {/* Practice Tips */}
            <motion.div
              className="bg-white rounded-lg p-4 border border-indigo-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                4. Practice Tips
              </h3>
              <ul className="space-y-2 text-indigo-900">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Start with quarter hours (III, VI, IX, XII)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Practice saying the Roman numerals out loud
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Make connections between numbers and their Roman numerals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Use the voice feedback to check your answers
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Reference */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
            Quick Reference: Roman Numerals
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {ROMAN_NUMERALS.map((numeral, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-2 text-center border border-indigo-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.05 }}
              >
                <div className="text-lg font-bold text-indigo-600">{numeral}</div>
                <div className="text-sm text-indigo-400">= {(index + 1) % 12 || 12}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClockRomanTips; 