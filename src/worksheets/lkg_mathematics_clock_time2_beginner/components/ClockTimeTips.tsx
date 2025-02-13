import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ClockTimeTips: React.FC = () => {
  const renderExampleClock = (hours: number, minutes: number, size: string = "w-24 h-24") => {
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    const minuteDegrees = minutes * 6;

    return (
      <div className={`relative ${size}`}>
        {/* Clock Face */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-pink-50 shadow-lg border-4 border-purple-200">
          {/* Hour Numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = ((i + 1) * 30 * Math.PI) / 180;
            const radius = parseInt(size) * 0.4;
            const x = Math.sin(angle) * radius;
            const y = -Math.cos(angle) * radius;
            return (
              <div
                key={i}
                className="absolute text-sm font-bold text-purple-800"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  left: '50%',
                  top: '50%'
                }}
              >
                {i + 1}
              </div>
            );
          })}

          {/* Hour Hand */}
          <motion.div
            className="absolute w-1.5 bg-purple-600 rounded-full origin-bottom"
            style={{
              height: '30%',
              left: 'calc(50% - 3px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: hourDegrees,
              boxShadow: '0 0 4px rgba(0,0,0,0.2)'
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: hourDegrees }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Minute Hand */}
          <motion.div
            className="absolute w-1 bg-pink-500 rounded-full origin-bottom"
            style={{
              height: '40%',
              left: 'calc(50% - 2px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: minuteDegrees,
              boxShadow: '0 0 4px rgba(0,0,0,0.2)'
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: minuteDegrees }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Center Dot */}
          <div className="absolute w-3 h-3 bg-purple-800 rounded-full"
            style={{
              left: 'calc(50% - 6px)',
              top: 'calc(50% - 6px)',
              boxShadow: '0 0 4px rgba(0,0,0,0.2)'
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-purple-900 text-center mb-4">
            Tips for Reading Clock Time
          </h1>
          <p className="text-purple-800 text-center">
            Learn how to read the time on an analog clock with these helpful tips!
          </p>
        </div>

        {/* Main Tips */}
        <div className="space-y-4 p-4">
          {/* Clock Hands */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold text-purple-900 mb-4">Understanding Clock Hands</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                {renderExampleClock(3, 0)}
              </div>
              <div className="space-y-3">
                <p className="text-purple-800">
                  <span className="font-bold text-purple-600">Hour Hand (Purple):</span> The shorter hand that points to the current hour
                </p>
                <p className="text-purple-800">
                  <span className="font-bold text-pink-500">Minute Hand (Pink):</span> The longer hand that points to the minutes
                </p>
              </div>
            </div>
          </motion.div>

          {/* Reading Exact Hours */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-purple-900 mb-4">Reading Exact Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                {renderExampleClock(3, 0)}
                <div>
                  <p className="font-bold text-purple-900">3:00</p>
                  <p className="text-sm text-purple-800">Hour hand on 3, minute hand on 12</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {renderExampleClock(6, 0)}
                <div>
                  <p className="font-bold text-purple-900">6:00</p>
                  <p className="text-sm text-purple-800">Hour hand on 6, minute hand on 12</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Points */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-purple-900 mb-4">Remember These Points</h2>
            <ul className="space-y-3 text-purple-800">
              <li className="flex items-center gap-2">
                <span className="text-purple-500">•</span>
                When the minute hand points to 12, we read the time as "o'clock"
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">•</span>
                The hour hand moves slowly between numbers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">•</span>
                The minute hand moves faster than the hour hand
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">•</span>
                Numbers 1-12 go clockwise around the clock face
              </li>
            </ul>
          </motion.div>

          {/* Practice Tips */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-purple-900 mb-4">Tips for Practice</h2>
            <ul className="space-y-3 text-purple-800">
              <li className="flex items-center gap-2">
                <span className="text-purple-500">•</span>
                Start with exact hours (when minute hand points to 12)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">•</span>
                Practice saying the time out loud
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">•</span>
                Look at real clocks throughout the day
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">•</span>
                Draw clock faces and practice setting different times
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClockTimeTips; 