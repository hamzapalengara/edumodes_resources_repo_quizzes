import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Time questions with multiple choice options
const TIME_QUESTIONS = [
  {
    hours: 3,
    minutes: 0,
    options: ['3:00', '3:30', '4:00'],
    correctAnswer: '3:00'
  },
  {
    hours: 6,
    minutes: 30,
    options: ['6:00', '6:30', '7:00'],
    correctAnswer: '6:30'
  },
  {
    hours: 9,
    minutes: 0,
    options: ['8:00', '9:00', '9:30'],
    correctAnswer: '9:00'
  },
  {
    hours: 12,
    minutes: 0,
    options: ['11:00', '12:00', '1:00'],
    correctAnswer: '12:00'
  },
  {
    hours: 4,
    minutes: 30,
    options: ['4:00', '4:30', '5:00'],
    correctAnswer: '4:30'
  },
  {
    hours: 7,
    minutes: 0,
    options: ['6:00', '7:00', '7:30'],
    correctAnswer: '7:00'
  },
  {
    hours: 10,
    minutes: 30,
    options: ['10:00', '10:30', '11:00'],
    correctAnswer: '10:30'
  },
  {
    hours: 2,
    minutes: 0,
    options: ['1:00', '2:00', '2:30'],
    correctAnswer: '2:00'
  },
  {
    hours: 5,
    minutes: 30,
    options: ['5:00', '5:30', '6:00'],
    correctAnswer: '5:30'
  },
  {
    hours: 8,
    minutes: 0,
    options: ['7:30', '8:00', '8:30'],
    correctAnswer: '8:00'
  }
];

const ClockTimeWorksheet: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(TIME_QUESTIONS.length).fill(''));

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const getSuccessFeedback = (time: string) => {
    const phrases = [
      `Excellent! The clock shows ${time}!`,
      `Perfect! You got it right - it's ${time}!`,
      `Great job! The time is ${time}!`
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const provideFeedback = (isCorrect: boolean, time?: string) => {
    if (isCorrect && time) {
      const successSound = new Audio('/sounds/success.mp3');
      successSound.play();
      speak(getSuccessFeedback(time));
    } else {
      const errorSound = new Audio('/sounds/error.mp3');
      errorSound.play();
      speak('Try again! Look carefully at the hour and minute hands.');
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
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = option;
    setSelectedAnswers(newAnswers);

    markAttempted();
    const isCorrect = option === TIME_QUESTIONS[questionIndex].correctAnswer;
    
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
    return (
      <div className="relative w-48 h-48 bg-white rounded-full shadow-lg border-4 border-gray-200">
        {/* Clock Numbers */}
        {[...Array(12)].map((_, i) => {
          const angle = ((i + 1) * 30 * Math.PI) / 180;
          const radius = 65; // Increased from 20 to 65 for better spacing
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
        <WorksheetTracker
          totalQuestions={10}
          pointsPerQuestion={10}
          onSummaryGenerated={handleSummaryGenerated}
        >
          {({ markCorrect, markIncorrect, markAttempted, score }) => (
            <>
              {/* Score Display */}
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
                <ScoreDisplay score={score} totalQuestions={100} />
              </div>

              {/* Questions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4">
                {TIME_QUESTIONS.map((question, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-md rounded-xl p-4"
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
                        <button
                          key={optionIndex}
                          className={`
                            p-2 rounded-lg text-center font-bold transition-all
                            ${selectedAnswers[index] === option
                              ? option === TIME_QUESTIONS[index].correctAnswer
                                ? 'bg-emerald-500 text-white scale-105'
                                : 'bg-rose-500 text-white scale-105'
                              : 'bg-white/30 text-white hover:bg-white/40'
                            }
                          `}
                          onClick={() => handleOptionClick(index, option, {
                            markCorrect,
                            markIncorrect,
                            markAttempted
                          })}
                          disabled={selectedAnswers[index] === TIME_QUESTIONS[index].correctAnswer}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </WorksheetTracker>
      </div>

      <style>{`
        .clock-face {
          width: 200px;
          height: 200px;
          border: 8px solid white;
          border-radius: 50%;
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }
      `}</style>
    </div>
  );
};

export default ClockTimeWorksheet; 