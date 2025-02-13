import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Time questions with answers
const TIME_QUESTIONS = [
  {
    hours: 3,
    minutes: 0,
    correctAnswer: '3:00',
    options: ['3:00', '3:30', '4:00']
  },
  {
    hours: 6,
    minutes: 30,
    correctAnswer: '6:30',
    options: ['6:00', '6:30', '7:00']
  },
  {
    hours: 9,
    minutes: 0,
    correctAnswer: '9:00',
    options: ['8:30', '9:00', '9:30']
  },
  {
    hours: 12,
    minutes: 0,
    correctAnswer: '12:00',
    options: ['11:30', '12:00', '12:30']
  },
  {
    hours: 4,
    minutes: 30,
    correctAnswer: '4:30',
    options: ['4:00', '4:30', '5:00']
  },
  {
    hours: 7,
    minutes: 0,
    correctAnswer: '7:00',
    options: ['6:30', '7:00', '7:30']
  },
  {
    hours: 10,
    minutes: 30,
    correctAnswer: '10:30',
    options: ['10:00', '10:30', '11:00']
  },
  {
    hours: 1,
    minutes: 30,
    correctAnswer: '1:30',
    options: ['1:00', '1:30', '2:00']
  },
  {
    hours: 5,
    minutes: 0,
    correctAnswer: '5:00',
    options: ['4:30', '5:00', '5:30']
  },
  {
    hours: 8,
    minutes: 30,
    correctAnswer: '8:30',
    options: ['8:00', '8:30', '9:00']
  }
];

const ClockTimeAnswerKey: React.FC = () => {
  const renderClock = (hours: number, minutes: number) => {
    return (
      <div className="relative w-48 h-48 bg-white rounded-full shadow-lg border-4 border-gray-200">
        {/* Clock Numbers */}
        {[...Array(12)].map((_, i) => {
          const angle = ((i + 1) * 30 * Math.PI) / 180;
          const radius = 65;
          const x = Math.sin(angle) * radius;
          const y = -Math.cos(angle) * radius;
          return (
            <div
              key={i}
              className="absolute w-6 h-6 flex items-center justify-center font-bold text-gray-800"
              style={{
                left: `calc(50% + ${x}px - 12px)`,
                top: `calc(50% + ${y}px - 12px)`,
              }}
            >
              {i + 1}
            </div>
          );
        })}

        {/* Hour Hand */}
        <div
          className="absolute w-1 bg-gray-800 rounded-full origin-bottom"
          style={{
            height: '30%',
            left: 'calc(50% - 2px)',
            bottom: '50%',
            transformOrigin: 'bottom',
            transform: `rotate(${hours * 30 + minutes * 0.5}deg)`,
          }}
        />

        {/* Minute Hand */}
        <div
          className="absolute w-1 bg-gray-600 rounded-full origin-bottom"
          style={{
            height: '40%',
            left: 'calc(50% - 1px)',
            bottom: '50%',
            transformOrigin: 'bottom',
            transform: `rotate(${minutes * 6}deg)`,
          }}
        />

        {/* Center Dot */}
        <div className="absolute w-3 h-3 bg-gray-800 rounded-full" style={{ left: 'calc(50% - 6px)', top: 'calc(50% - 6px)' }} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Clock Time - Answer Key
          </h2>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4">
          {TIME_QUESTIONS.map((question, index) => (
            <motion.div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Question Number */}
              <div className="text-white text-lg font-bold mb-2 text-center">
                Question {index + 1}
              </div>

              {/* Clock */}
              <div className="flex justify-center mb-4">
                {renderClock(question.hours, question.minutes)}
              </div>

              {/* Options */}
              <div className="grid grid-cols-3 gap-2">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`
                      p-2 rounded-lg text-center font-bold
                      ${option === question.correctAnswer
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/30 text-white'
                      }
                    `}
                  >
                    {option}
                  </div>
                ))}
              </div>

              {/* Explanation */}
              <div className="mt-3 text-white text-center">
                <span className="font-bold">Correct Answer:</span> {question.correctAnswer}
                <br />
                <span className="text-sm opacity-90">
                  Hour hand points to {question.hours}, 
                  {question.minutes === 0 ? " exactly" : " and minute hand shows half past"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4 text-white">
          <h3 className="text-xl font-bold mb-2 text-center">Reading Time Tips</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>The short hand (hour hand) shows the hour</li>
            <li>When the long hand (minute hand) points to 12, it's o'clock</li>
            <li>When the long hand points to 6, it's half past the hour</li>
            <li>Always read the hour hand first, then the minute hand</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClockTimeAnswerKey; 