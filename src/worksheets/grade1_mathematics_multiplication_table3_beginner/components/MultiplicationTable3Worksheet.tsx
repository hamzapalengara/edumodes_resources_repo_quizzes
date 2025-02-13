import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

const TABLE_CELLS = [
  { num1: '3', num2: '1', answer: '3' },
  { num1: '3', num2: '2', answer: '6' },
  { num1: '3', num2: '3', answer: '9' },
  { num1: '3', num2: '4', answer: '12' },
  { num1: '3', num2: '5', answer: '15' },
  { num1: '3', num2: '6', answer: '18' },
  { num1: '3', num2: '7', answer: '21' },
  { num1: '3', num2: '8', answer: '24' },
  { num1: '3', num2: '9', answer: '27' },
  { num1: '3', num2: '10', answer: '30' },
];

// Visual aids for each number using oranges (🍊) for variety
const VISUAL_AIDS: Record<string, string[]> = {
  '3': ['🍊', '🍊', '🍊'],
  '6': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '9': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '12': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '15': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '18': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '21': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '24': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '27': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊'],
  '30': ['🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊', '|', '🍊', '🍊', '🍊']
};

const CompletionMessage: React.FC<{ onRestart: () => void }> = ({ onRestart }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4"
  >
    <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
      <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
        Amazing Work! 🎉
      </h2>
      <div className="text-center mb-6">
        <p className="text-lg text-orange-600 font-medium">
          You've completed the multiplication table of 3! Keep practicing to become a multiplication master! ⭐
        </p>
      </div>
      <button
        onClick={onRestart}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Practice Again
      </button>
    </div>
  </motion.div>
);

const MultiplicationTable3Worksheet: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCorrect, setIsCorrect] = useState<Record<number, boolean>>({});
  const [practiceMode, setPracticeMode] = useState<'write' | 'listen'>('write');
  const [showCompletion, setShowCompletion] = useState(false);
  const [showVisualAids, setShowVisualAids] = useState<Record<number, boolean>>({});

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
    const newAnswers = { ...answers, [index]: value };
    setAnswers(newAnswers);

    if (value.trim() === '') {
      return;
    }

    markAttempted();
    const isAnswerCorrect = value === TABLE_CELLS[index].answer;
    setIsCorrect({ ...isCorrect, [index]: isAnswerCorrect });

    if (isAnswerCorrect) {
      markCorrect();
      speakText(`${TABLE_CELLS[index].num1} times ${TABLE_CELLS[index].num2} equals ${value}`);
      // Show visual aid when answer is correct
      setShowVisualAids(prev => ({ ...prev, [index]: true }));
    } else {
      markIncorrect();
    }

    // Check if all questions are answered correctly
    const allCorrect = TABLE_CELLS.every((_, i) => 
      newAnswers[i] === TABLE_CELLS[i].answer
    );

    if (allCorrect) {
      setShowCompletion(true);
    }
  };

  const handleSummaryGenerated = (_summary: WorksheetSummary) => {
    console.log('Worksheet completed!');
  };

  const handleRestart = () => {
    setAnswers({});
    setIsCorrect({});
    setShowCompletion(false);
  };

  const togglePracticeMode = () => {
    setPracticeMode(mode => mode === 'write' ? 'listen' : 'write');
  };

  const handleListenClick = (index: number) => {
    const { num1, num2, answer } = TABLE_CELLS[index];
    speakText(`${num1} times ${num2} equals ${answer}`);
  };

  const toggleVisualAid = (index: number) => {
    setShowVisualAids(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={TABLE_CELLS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markIncorrect, markAttempted, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
            {/* Score Display */}
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
              <ScoreDisplay 
                score={score}
                totalQuestions={TABLE_CELLS.length * 10}
              />
            </div>

            {/* Practice Mode Toggle */}
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-orange-700">
                  Multiplication Table of 3
                </h1>
                <button
                  onClick={togglePracticeMode}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  {practiceMode === 'write' ? '🔊 Switch to Listen Mode' : '✏️ Switch to Write Mode'}
                </button>
              </div>
            </div>

            {/* Multiplication Table Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TABLE_CELLS.map((cell, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-center gap-3 text-xl mb-3">
                    <span className="font-bold text-orange-700">{cell.num1}</span>
                    <span className="text-orange-600">×</span>
                    <span className="font-bold text-orange-700">{cell.num2}</span>
                    <span className="text-orange-600">=</span>
                    {practiceMode === 'write' ? (
                      <input
                        type="text"
                        value={answers[index] || ''}
                        onChange={(e) => handleInputChange(index, e.target.value, { markCorrect, markIncorrect, markAttempted })}
                        className={`w-16 h-12 text-center rounded-lg border-2 ${
                          isCorrect[index] ? 'border-orange-500 bg-orange-50' : 'border-gray-300'
                        }`}
                      />
                    ) : (
                      <button
                        onClick={() => handleListenClick(index)}
                        className="w-16 h-12 bg-orange-100 hover:bg-orange-200 rounded-lg flex items-center justify-center"
                      >
                        🔊
                      </button>
                    )}
                  </div>

                  {/* Visual Aid Toggle Button */}
                  <div className="flex justify-center mb-2">
                    <button
                      onClick={() => toggleVisualAid(index)}
                      className={`text-sm px-3 py-1 rounded-lg transition-colors ${
                        showVisualAids[index]
                          ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {showVisualAids[index] ? 'Hide Visual Aid' : 'Show Visual Aid'}
                    </button>
                  </div>

                  {/* Visual Aid */}
                  {showVisualAids[index] && (
                    <div className="bg-orange-50 p-2 rounded-lg overflow-x-auto">
                      <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                        {VISUAL_AIDS[cell.answer].map((item, i) => (
                          <span
                            key={i}
                            className={item === '|' ? 'text-orange-300 mx-1' : ''}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Completion Message */}
            {showCompletion && (
              <CompletionMessage
                onRestart={handleRestart}
              />
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default MultiplicationTable3Worksheet; 