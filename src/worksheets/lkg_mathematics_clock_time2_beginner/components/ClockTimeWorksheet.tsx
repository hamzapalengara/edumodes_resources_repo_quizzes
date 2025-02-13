import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Time questions with multiple choice options (only round hours)
const TIME_QUESTIONS = [
  {
    hours: 3,
    minutes: 0,
    options: ['3:00', '6:00', '9:00'],
    correctAnswer: '3:00'
  },
  {
    hours: 6,
    minutes: 0,
    options: ['12:00', '6:00', '3:00'],
    correctAnswer: '6:00'
  },
  {
    hours: 9,
    minutes: 0,
    options: ['3:00', '9:00', '12:00'],
    correctAnswer: '9:00'
  },
  {
    hours: 12,
    minutes: 0,
    options: ['12:00', '3:00', '6:00'],
    correctAnswer: '12:00'
  },
  {
    hours: 5,
    minutes: 0,
    options: ['5:00', '7:00', '10:00'],
    correctAnswer: '5:00'
  },
  {
    hours: 7,
    minutes: 0,
    options: ['4:00', '7:00', '10:00'],
    correctAnswer: '7:00'
  },
  {
    hours: 10,
    minutes: 0,
    options: ['8:00', '10:00', '2:00'],
    correctAnswer: '10:00'
  },
  {
    hours: 2,
    minutes: 0,
    options: ['11:00', '2:00', '5:00'],
    correctAnswer: '2:00'
  }
];

const ClockTimeWorksheet: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(TIME_QUESTIONS.length).fill(''));
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Optimized speech function with cancellation of previous speech
  const speak = (text: string) => {
    if (speechSynthesisRef.current) {
      window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    speechSynthesisRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const getSuccessFeedback = (time: string) => {
    const phrases = [
      `Great job! It's ${time}!`,
      `Correct! The time is ${time}!`,
      `Perfect! You found ${time}!`
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const provideFeedback = (isCorrect: boolean, time?: string) => {
    if (isCorrect && time) {
      speak(getSuccessFeedback(time));
    } else {
      speak("Try again! Look carefully at where the hour hand is pointing.");
    }
  };

  const handleOptionClick = (
    questionIndex: number,
    option: string,
    { markCorrect, markIncorrect, markAttempted }: {
      markCorrect: () => void;
      markIncorrect: () => void;
      markAttempted: () => void;
    }
  ) => {
    markAttempted();
    const isCorrect = option === TIME_QUESTIONS[questionIndex].correctAnswer;
    
    setSelectedAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = option;
      return newAnswers;
    });

    if (isCorrect) {
      markCorrect();
      provideFeedback(true, option);
    } else {
      markIncorrect();
      provideFeedback(false);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  const renderClock = (hours: number, minutes: number) => {
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    const minuteDegrees = minutes * 6;

    return (
      <div className="relative w-48 h-48 mx-auto mb-4">
        {/* Clock Face */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-pink-50 shadow-lg border-4 border-purple-200">
          {/* Hour Numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = ((i + 1) * 30 * Math.PI) / 180;
            const radius = 80;
            const x = Math.sin(angle) * radius;
            const y = -Math.cos(angle) * radius;
            return (
              <div
                key={i}
                className="absolute text-xl font-bold text-purple-800"
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
            className="absolute w-2 bg-purple-600 rounded-full origin-bottom"
            style={{
              height: '30%',
              left: 'calc(50% - 4px)',
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
          <div className="absolute w-4 h-4 bg-purple-800 rounded-full"
            style={{
              left: 'calc(50% - 8px)',
              top: 'calc(50% - 8px)',
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
      
      <WorksheetTracker
        totalQuestions={TIME_QUESTIONS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ score, markCorrect, markIncorrect, markAttempted }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-4">
              <ScoreDisplay 
                score={score}
                totalQuestions={TIME_QUESTIONS.length * 10}
              />
            </div>

            {/* Questions */}
            <div className="space-y-8 p-4">
              {TIME_QUESTIONS.map((question, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="text-xl font-bold text-purple-900 text-center mb-4">
                    What time is shown on the clock?
                  </h2>

                  {renderClock(question.hours, question.minutes)}

                  <div className="grid grid-cols-3 gap-2">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`
                          p-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105
                          ${selectedAnswers[index] === option
                            ? option === question.correctAnswer
                              ? 'bg-emerald-500 text-white scale-105'
                              : 'bg-rose-500 text-white scale-105'
                            : 'bg-white text-purple-600 hover:bg-purple-50'
                          }
                          ${selectedAnswers[index] === question.correctAnswer ? 'cursor-default' : 'cursor-pointer'}
                        `}
                        onClick={() => handleOptionClick(index, option, { markCorrect, markIncorrect, markAttempted })}
                        disabled={selectedAnswers[index] === question.correctAnswer}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default ClockTimeWorksheet; 