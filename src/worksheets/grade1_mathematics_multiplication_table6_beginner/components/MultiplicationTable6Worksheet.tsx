import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

const TABLE_CELLS = [
  { num1: '6', num2: '1', answer: '6' },
  { num1: '6', num2: '2', answer: '12' },
  { num1: '6', num2: '3', answer: '18' },
  { num1: '6', num2: '4', answer: '24' },
  { num1: '6', num2: '5', answer: '30' },
  { num1: '6', num2: '6', answer: '36' },
  { num1: '6', num2: '7', answer: '42' },
  { num1: '6', num2: '8', answer: '48' },
  { num1: '6', num2: '9', answer: '54' },
  { num1: '6', num2: '10', answer: '60' },
];

// Visual aids for each multiplication fact using dice (🎲)
const VISUAL_AIDS: Record<string, string[]> = {
  '6': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '12': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '18': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '24': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '30': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '36': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '42': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '48': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '54': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '60': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲']
};

const CompletionMessage: React.FC<{ onRestart: () => void }> = ({ onRestart }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-blue-50 p-6 rounded-xl shadow-lg text-center"
  >
    <h2 className="text-2xl font-bold text-blue-700 mb-4">
      🎉 Fantastic Job! 🎉
    </h2>
    <p className="text-blue-600 mb-4">
      You've completed the multiplication table of 6!
    </p>
    <button
      onClick={onRestart}
      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Practice Again
    </button>
  </motion.div>
);

const MultiplicationTable6Worksheet: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(10).fill(''));
  const [showVisualAids, setShowVisualAids] = useState<boolean[]>(Array(10).fill(false));
  const [practiceMode, setPracticeMode] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const speakText = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => resolve();
      window.speechSynthesis.speak(utterance);
    });
  };

  const handleInputChange = (index: number, value: string, { markCorrect, markIncorrect, markAttempted }: {
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);

    if (value.trim() !== '') {
      markAttempted();
      if (value === TABLE_CELLS[index].answer) {
        markCorrect();
        speakText('Correct!');
      } else {
        markIncorrect();
        if (practiceMode) {
          speakText('Try again!');
        }
      }
    }

    // Check if all answers are correct
    const allCorrect = newAnswers.every(
      (ans, i) => ans === TABLE_CELLS[i].answer
    );
    setIsComplete(allCorrect);
  };

  const handleSummaryGenerated = (_summary: WorksheetSummary) => {
    // Handle summary if needed
  };

  const handleRestart = () => {
    setUserAnswers(Array(10).fill(''));
    setShowVisualAids(Array(10).fill(false));
    setIsComplete(false);
  };

  const togglePracticeMode = () => {
    setPracticeMode(!practiceMode);
  };

  const handleListenClick = (index: number) => {
    const text = `${TABLE_CELLS[index].num1} times ${TABLE_CELLS[index].num2}`;
    speakText(text);
  };

  const toggleVisualAid = (index: number) => {
    const newVisualAids = [...showVisualAids];
    newVisualAids[index] = !newVisualAids[index];
    setShowVisualAids(newVisualAids);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={10}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markIncorrect, markAttempted, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
            {/* Score Display */}
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
              <ScoreDisplay score={score} totalQuestions={100} />
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={togglePracticeMode}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    practiceMode
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Practice Mode: {practiceMode ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>

            {isComplete ? (
              <CompletionMessage onRestart={handleRestart} />
            ) : (
              <div className="space-y-4">
                {TABLE_CELLS.map((cell, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      {/* Equation */}
                      <div className="flex items-center gap-2 text-xl">
                        <span className="font-bold text-blue-700">{cell.num1}</span>
                        <span className="text-blue-600">×</span>
                        <span className="font-bold text-blue-700">{cell.num2}</span>
                        <span className="text-blue-600">=</span>
                        <input
                          type="number"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={userAnswers[index]}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value, {
                              markCorrect,
                              markIncorrect,
                              markAttempted,
                            })
                          }
                          className="w-20 h-10 text-center border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 ml-auto">
                        <button
                          onClick={() => handleListenClick(index)}
                          className="p-2 text-blue-600 hover:text-blue-700"
                          aria-label="Listen"
                        >
                          🔊
                        </button>
                        <button
                          onClick={() => toggleVisualAid(index)}
                          className="p-2 text-blue-600 hover:text-blue-700"
                          aria-label="Toggle Visual Aid"
                        >
                          👁️
                        </button>
                      </div>
                    </div>

                    {/* Visual Aid */}
                    {showVisualAids[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 bg-blue-50 p-2 rounded-lg overflow-x-auto"
                      >
                        <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                          {VISUAL_AIDS[cell.answer].map((item, i) => (
                            <span
                              key={i}
                              className={item === '|' ? 'text-blue-300 mx-1' : ''}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default MultiplicationTable6Worksheet; 