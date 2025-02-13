import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TIME_QUESTIONS = [
  {
    hours: 3,
    minutes: 0,
    correctAnswer: '3:00',
    explanation: 'The hour hand points to 3 and the minute hand points to 12, showing exactly 3:00.'
  },
  {
    hours: 6,
    minutes: 0,
    correctAnswer: '6:00',
    explanation: 'The hour hand points to 6 and the minute hand points to 12, showing exactly 6:00.'
  },
  {
    hours: 9,
    minutes: 0,
    correctAnswer: '9:00',
    explanation: 'The hour hand points to 9 and the minute hand points to 12, showing exactly 9:00.'
  },
  {
    hours: 12,
    minutes: 0,
    correctAnswer: '12:00',
    explanation: 'The hour hand points to 12 and the minute hand points to 12, showing exactly 12:00.'
  },
  {
    hours: 5,
    minutes: 0,
    correctAnswer: '5:00',
    explanation: 'The hour hand points to 5 and the minute hand points to 12, showing exactly 5:00.'
  },
  {
    hours: 7,
    minutes: 0,
    correctAnswer: '7:00',
    explanation: 'The hour hand points to 7 and the minute hand points to 12, showing exactly 7:00.'
  },
  {
    hours: 10,
    minutes: 0,
    correctAnswer: '10:00',
    explanation: 'The hour hand points to 10 and the minute hand points to 12, showing exactly 10:00.'
  },
  {
    hours: 2,
    minutes: 0,
    correctAnswer: '2:00',
    explanation: 'The hour hand points to 2 and the minute hand points to 12, showing exactly 2:00.'
  }
];

const ClockTimeAnswerKey: React.FC = () => {
  const renderClock = (hours: number, minutes: number) => {
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    const minuteDegrees = minutes * 6;

    return (
      <div className="relative w-32 h-32 mx-auto mb-4">
        {/* Clock Face */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-pink-50 shadow-lg border-4 border-purple-200">
          {/* Hour Numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = ((i + 1) * 30 * Math.PI) / 180;
            const radius = 50;
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
            Clock Time Answer Key
          </h1>
          <p className="text-purple-800 text-center">
            Each clock shows an exact hour time. The hour hand points to the hour number,
            and the minute hand always points to 12.
          </p>
        </div>

        {/* Answer Key Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {TIME_QUESTIONS.map((question, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  {renderClock(question.hours, question.minutes)}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-purple-900">
                    {question.correctAnswer}
                  </h2>
                  <p className="text-purple-700 text-sm mt-2">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg mt-6 mb-8">
          <h2 className="text-xl font-bold text-purple-900 mb-4">Tips for Reading Time</h2>
          <ul className="space-y-2 text-purple-800">
            <li>• The short hand (hour hand) tells us the hour</li>
            <li>• The long hand (minute hand) points to 12 for exact hours</li>
            <li>• When the minute hand points to 12, we say "o'clock"</li>
            <li>• The numbers 1-12 around the clock show both hours and minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClockTimeAnswerKey; 