import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

const TABLE_CELLS = [
  { num1: '7', num2: '1', answer: '7' },
  { num1: '7', num2: '2', answer: '14' },
  { num1: '7', num2: '3', answer: '21' },
  { num1: '7', num2: '4', answer: '28' },
  { num1: '7', num2: '5', answer: '35' },
  { num1: '7', num2: '6', answer: '42' },
  { num1: '7', num2: '7', answer: '49' },
  { num1: '7', num2: '8', answer: '56' },
  { num1: '7', num2: '9', answer: '63' },
  { num1: '7', num2: '10', answer: '70' },
];

const VISUAL_AIDS: Record<string, string[]> = {
  '7': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '14': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '21': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '28': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '35': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '42': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '49': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '56': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '63': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲'],
  '70': ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '|', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲', '🎲']
};

const CompletionMessage: React.FC<{ onRestart: () => void }> = ({ onRestart }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white p-6 rounded-xl shadow-lg text-center"
  >
    <h2 className="text-2xl font-bold mb-4">🎉 Amazing Job! 🎉</h2>
    <p className="mb-4">You've mastered the multiplication table of 7!</p>
    <button
      onClick={onRestart}
      className="bg-white text-fuchsia-600 px-6 py-2 rounded-lg font-semibold hover:bg-fuchsia-50 transition-colors"
    >
      Practice Again
    </button>
  </motion.div>
);

const MultiplicationTable7Worksheet: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(''));
  const [showVisualAids, setShowVisualAids] = useState<boolean[]>(Array(10).fill(false));
  const [practiceMode, setPracticeMode] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const speakText = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => resolve();
      speechSynthesis.speak(utterance);
    });
  };

  const handleInputChange = (index: number, value: string, { markCorrect, markIncorrect, markAttempted }: {
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    if (value.trim() === '') return;

    markAttempted();
    
    if (value === TABLE_CELLS[index].answer) {
      markCorrect();
      // Speak the multiplication fact when correct
      const fact = `${TABLE_CELLS[index].num1} times ${TABLE_CELLS[index].num2} equals ${TABLE_CELLS[index].answer}`;
      speakText(fact);
    } else {
      markIncorrect();
      if (practiceMode) {
        speakText(`Try again. ${TABLE_CELLS[index].num1} times ${TABLE_CELLS[index].num2} equals ${TABLE_CELLS[index].answer}`);
      }
    }

    const allCorrect = newAnswers.every((answer, i) => answer === TABLE_CELLS[i].answer);
    setIsComplete(allCorrect);
  };

  const handleSummaryGenerated = (_summary: WorksheetSummary) => {
    // Handle summary if needed
  };

  const handleRestart = () => {
    setAnswers(Array(10).fill(''));
    setShowVisualAids(Array(10).fill(false));
    setIsComplete(false);
  };

  const togglePracticeMode = () => {
    setPracticeMode(!practiceMode);
  };

  const handleListenClick = (index: number) => {
    speakText(`${TABLE_CELLS[index].num1} times ${TABLE_CELLS[index].num2}`);
  };

  const toggleVisualAid = (index: number) => {
    const newShowVisualAids = [...showVisualAids];
    newShowVisualAids[index] = !newShowVisualAids[index];
    setShowVisualAids(newShowVisualAids);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <WorksheetTracker
          totalQuestions={10}
          pointsPerQuestion={10}
          onSummaryGenerated={handleSummaryGenerated}
        >
          {({ markCorrect, markIncorrect, markAttempted, score }) => (
            <>
              {/* Score Display */}
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
                <ScoreDisplay score={score} totalQuestions={100} />
                
                {/* Practice Mode Toggle */}
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={togglePracticeMode}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      practiceMode
                        ? 'bg-fuchsia-600 text-white'
                        : 'bg-white text-fuchsia-600 border border-fuchsia-600'
                    }`}
                  >
                    {practiceMode ? 'Practice Mode: ON' : 'Practice Mode: OFF'}
                  </button>
                </div>
              </div>

              {isComplete ? (
                <CompletionMessage onRestart={handleRestart} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {TABLE_CELLS.map((cell, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3 text-xl">
                          <span className="font-bold text-fuchsia-700">{cell.num1}</span>
                          <span className="text-fuchsia-600">×</span>
                          <span className="font-bold text-fuchsia-700">{cell.num2}</span>
                          <span className="text-fuchsia-600">=</span>
                          <input
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={answers[index]}
                            onChange={(e) => handleInputChange(index, e.target.value, { markCorrect, markIncorrect, markAttempted })}
                            className="w-16 h-10 text-center border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:outline-none"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleListenClick(index)}
                            className="p-2 text-fuchsia-600 hover:text-fuchsia-700"
                          >
                            🔊
                          </button>
                          <button
                            onClick={() => toggleVisualAid(index)}
                            className="p-2 text-fuchsia-600 hover:text-fuchsia-700"
                          >
                            👁️
                          </button>
                        </div>
                      </div>

                      {showVisualAids[index] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-fuchsia-50 p-2 rounded-lg overflow-x-auto"
                        >
                          <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                            {VISUAL_AIDS[cell.answer].map((item, i) => (
                              <span
                                key={i}
                                className={item === '|' ? 'text-fuchsia-300 mx-1' : ''}
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
            </>
          )}
        </WorksheetTracker>
      </div>
    </div>
  );
};

export default MultiplicationTable7Worksheet; 