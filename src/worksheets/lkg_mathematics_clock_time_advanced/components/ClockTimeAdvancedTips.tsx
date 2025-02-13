import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ClockTimeAdvancedTips: React.FC = () => {
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
            Tips for Reading Advanced Clock Times
          </h1>
          <p className="text-gray-600 text-center">
            Master telling time with these helpful strategies
          </p>
        </motion.div>

        <div className="space-y-6 p-4">
          {/* Understanding Clock Hands */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
              Understanding Clock Hands
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• The <span className="font-semibold text-indigo-600">short hand</span> shows the hour</li>
              <li>• The <span className="font-semibold text-violet-600">long hand</span> shows the minutes</li>
              <li>• When the long hand moves, the short hand moves slightly between numbers</li>
            </ul>
          </motion.div>

          {/* Half Past Times */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
              Reading "Half Past" Times
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• The minute hand points to 6 (30 minutes)</li>
              <li>• The hour hand is halfway between two numbers</li>
              <li>• Example: When it's half past 3, the minute hand points to 6 and the hour hand is between 3 and 4</li>
            </ul>
          </motion.div>

          {/* Quarter Past Times */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
              Reading "Quarter Past" Times
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• The minute hand points to 3 (15 minutes)</li>
              <li>• The hour hand has just passed a number</li>
              <li>• Example: At quarter past 4, the minute hand points to 3 and the hour hand has just passed 4</li>
            </ul>
          </motion.div>

          {/* Quarter To Times */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
              Reading "Quarter To" Times
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• The minute hand points to 9 (45 minutes)</li>
              <li>• Look at the next hour (where the hour hand is approaching)</li>
              <li>• Example: At quarter to 7, the minute hand points to 9 and the hour hand is between 6 and 7</li>
            </ul>
          </motion.div>

          {/* Practice Tips */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
              Practice Tips
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>1. Always look at both hands before answering</li>
              <li>2. Practice saying the time out loud</li>
              <li>3. Remember that "quarter to" means looking at the upcoming hour</li>
              <li>4. Notice how the hour hand moves gradually between numbers</li>
              <li>5. Use a real clock for extra practice at home</li>
            </ul>
          </motion.div>

          {/* Common Mistakes to Avoid */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
              Common Mistakes to Avoid
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Don't confuse the hour and minute hands</li>
              <li>• Don't forget to look at where the hour hand is between numbers</li>
              <li>• For "quarter to" times, remember to look at the next hour</li>
              <li>• Don't rush - take time to read both hands carefully</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClockTimeAdvancedTips; 