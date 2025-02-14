import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

const TABLE_CELLS = [
  { num1: '10', num2: '1', answer: '10', explanation: 'One group of ten tickets' },
  { num1: '10', num2: '2', answer: '20', explanation: 'Two groups of ten tickets' },
  { num1: '10', num2: '3', answer: '30', explanation: 'Three groups of ten tickets' },
  { num1: '10', num2: '4', answer: '40', explanation: 'Four groups of ten tickets' },
  { num1: '10', num2: '5', answer: '50', explanation: 'Five groups of ten tickets' },
  { num1: '10', num2: '6', answer: '60', explanation: 'Six groups of ten tickets' },
  { num1: '10', num2: '7', answer: '70', explanation: 'Seven groups of ten tickets' },
  { num1: '10', num2: '8', answer: '80', explanation: 'Eight groups of ten tickets' },
  { num1: '10', num2: '9', answer: '90', explanation: 'Nine groups of ten tickets' },
  { num1: '10', num2: '10', answer: '100', explanation: 'Ten groups of ten tickets' },
];

const VISUAL_AIDS: Record<string, string[]> = {
  '10': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️'],
  '20': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️'],
  '30': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️'],
  '40': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️'],
  '50': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️'],
  '60': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️'],
  '70': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️'],
  '80': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️'],
  '90': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '��️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️'],
  '100': ['🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '|', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️', '🎟️']
};

const CompletionMessage: React.FC<{ onRestart: () => void }> = ({ onRestart }) => (
  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center">
    <h2 className="text-2xl font-bold text-rose-700 mb-4">
      🎡 Congratulations! 🎡
    </h2>
    <p className="text-rose-600 mb-4">
      You've completed the multiplication table of 10! Keep practicing to master it completely.
    </p>
    <button
      onClick={onRestart}
      className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors"
    >
      Practice Again
    </button>
  </div>
);

const MultiplicationTable10Worksheet: React.FC = () => {
  const [showVisualAids, setShowVisualAids] = useState<boolean[]>(Array(10).fill(false));
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(''));
  const [practiceMode, setPracticeMode] = useState(false);
  const [completed, setCompleted] = useState(false);

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
    // Only allow numerical values
    if (value !== '' && !/^\d+$/.test(value)) {
      return;
    }

    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    if (value.length > 0) {
      markAttempted();
      if (value === TABLE_CELLS[index].answer) {
        markCorrect();
        // Voice the multiplication fact
        const { num1, num2, answer } = TABLE_CELLS[index];
        speakText(`${num1} times ${num2} equals ${answer}`);
      } else if (value.length === TABLE_CELLS[index].answer.length) {
        markIncorrect();
        if (practiceMode) {
          speakText('Try again! You can do it!');
        }
      }
    }
  };

  const handleSummaryGenerated = (_summary: WorksheetSummary) => {
    setCompleted(true);
  };

  const handleRestart = () => {
    setAnswers(Array(10).fill(''));
    setShowVisualAids(Array(10).fill(false));
    setCompleted(false);
  };

  const togglePracticeMode = () => {
    setPracticeMode(!practiceMode);
  };

  const handleListenClick = (index: number) => {
    const { num1, num2, answer } = TABLE_CELLS[index];
    speakText(`${num1} times ${num2} equals ${answer}`);
  };

  const toggleVisualAid = (index: number) => {
    const newShowVisualAids = [...showVisualAids];
    newShowVisualAids[index] = !newShowVisualAids[index];
    setShowVisualAids(newShowVisualAids);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <WorksheetTracker
          totalQuestions={10}
          pointsPerQuestion={10}
          onSummaryGenerated={handleSummaryGenerated}
        >
          {({ markCorrect, markIncorrect, markAttempted, score }) => (
            <>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                  <h1 className="text-2xl font-bold text-rose-700">
                    🎡 Multiplication Table of 10 🎡
                  </h1>
                  <ScoreDisplay score={score} totalQuestions={100} />
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={togglePracticeMode}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      practiceMode
                        ? 'bg-rose-600 text-white'
                        : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    Practice Mode: {practiceMode ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>

              {completed ? (
                <CompletionMessage onRestart={handleRestart} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {TABLE_CELLS.map((cell, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                    >
                      <div className="flex items-center justify-center gap-3 text-xl mb-3">
                        <span className="font-bold text-rose-700">{cell.num1}</span>
                        <span className="text-rose-600">×</span>
                        <span className="font-bold text-rose-700">{cell.num2}</span>
                        <span className="text-rose-600">=</span>
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={answers[index]}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value, {
                              markCorrect,
                              markIncorrect,
                              markAttempted,
                            })
                          }
                          className="w-16 text-center border-2 border-rose-200 rounded-lg focus:border-rose-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-wrap gap-2 justify-center">
                        <button
                          onClick={() => handleListenClick(index)}
                          className="px-3 py-1 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition-colors"
                        >
                          🔊 Listen
                        </button>
                        <button
                          onClick={() => toggleVisualAid(index)}
                          className="px-3 py-1 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition-colors"
                        >
                          👀 {showVisualAids[index] ? 'Hide' : 'Show'} Visual
                        </button>
                      </div>

                      {showVisualAids[index] && (
                        <div className="mt-3 bg-rose-50 p-2 rounded-lg overflow-x-auto">
                          <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                            {VISUAL_AIDS[cell.answer].map((item, i) => (
                              <span
                                key={i}
                                className={item === '|' ? 'text-rose-300 mx-1' : ''}
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
              )}
            </>
          )}
        </WorksheetTracker>
      </div>
    </div>
  );
};

export default MultiplicationTable10Worksheet; 