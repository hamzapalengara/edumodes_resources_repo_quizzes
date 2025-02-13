import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ClockRomanAdvancedTips: React.FC = () => {
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
            Tips for Reading Advanced Clock Times with Roman Numerals
          </h2>
          
          {/* Key Learning Points */}
          <div className="space-y-6">
            {/* Understanding Half Past */}
            <motion.div
              className="bg-white rounded-lg p-4 border border-indigo-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                1. Half Past Times
              </h3>
              <ul className="space-y-2 text-indigo-900">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2" />
                  When the minute hand points to VI (6):
                  <ul className="ml-5 mt-2 space-y-1 text-sm">
                    <li>It means 30 minutes past the hour</li>
                    <li>We say "Half past" followed by the Roman numeral</li>
                    <li>Example: Half past III = 3:30</li>
                  </ul>
                </li>
              </ul>
            </motion.div>

            {/* Understanding Quarter Past */}
            <motion.div
              className="bg-white rounded-lg p-4 border border-indigo-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                2. Quarter Past Times
              </h3>
              <ul className="space-y-2 text-indigo-900">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2" />
                  When the minute hand points to III (3):
                  <ul className="ml-5 mt-2 space-y-1 text-sm">
                    <li>It means 15 minutes past the hour</li>
                    <li>We say "Quarter past" followed by the Roman numeral</li>
                    <li>Example: Quarter past IX = 9:15</li>
                  </ul>
                </li>
              </ul>
            </motion.div>

            {/* Understanding Quarter To */}
            <motion.div
              className="bg-white rounded-lg p-4 border border-indigo-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                3. Quarter To Times
              </h3>
              <ul className="space-y-2 text-indigo-900">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2" />
                  When the minute hand points to IX (9):
                  <ul className="ml-5 mt-2 space-y-1 text-sm">
                    <li>It means 15 minutes before the next hour</li>
                    <li>We say "Quarter to" followed by the next Roman numeral</li>
                    <li>Example: Quarter to VI = 5:45 (since at 5:45 we're approaching VI)</li>
                  </ul>
                </li>
              </ul>
            </motion.div>

            {/* Reading Steps */}
            <motion.div
              className="bg-white rounded-lg p-4 border border-indigo-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                4. Steps to Read Advanced Times
              </h3>
              <ul className="space-y-2 text-indigo-900">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2" />
                  First, look at the minute hand:
                  <ul className="ml-5 mt-2 space-y-1 text-sm">
                    <li>At VI = Half past</li>
                    <li>At III = Quarter past</li>
                    <li>At IX = Quarter to</li>
                  </ul>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2" />
                  Then, look at the hour hand:
                  <ul className="ml-5 mt-2 space-y-1 text-sm">
                    <li>For half past and quarter past: use the hour it has just passed</li>
                    <li>For quarter to: use the next hour</li>
                  </ul>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Practice Tips */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
            Practice Tips
          </h2>
          <ul className="space-y-3 text-indigo-900">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
              Practice saying the times out loud
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
              Focus on one type of time first (e.g., all half past times)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
              Use the voice feedback to check your pronunciation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
              Look for patterns in how the hands move together
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ClockRomanAdvancedTips; 