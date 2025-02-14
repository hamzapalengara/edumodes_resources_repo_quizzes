import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

const TABLE_CELLS = [
  { num1: '8', num2: '1', answer: '8' },
  { num1: '8', num2: '2', answer: '16' },
  { num1: '8', num2: '3', answer: '24' },
  { num1: '8', num2: '4', answer: '32' },
  { num1: '8', num2: '5', answer: '40' },
  { num1: '8', num2: '6', answer: '48' },
  { num1: '8', num2: '7', answer: '56' },
  { num1: '8', num2: '8', answer: '64' },
  { num1: '8', num2: '9', answer: '72' },
  { num1: '8', num2: '10', answer: '80' },
];

// Using park-themed emojis for visual aids
const VISUAL_AIDS: Record<string, string[]> = {
  '8': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '16': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '24': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '32': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '40': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '48': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '56': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '64': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '72': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '80': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️']
};

const CompletionMessage: React.FC<{ onRestart: () => void }> = ({ onRestart }) => (
  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center">
    <h2 className="text-2xl font-bold text-green-700 mb-4">
      🎉 Congratulations! 🎉
    </h2>
    <p className="text-green-600 mb-4">
      You've completed the multiplication table of 8!
    </p>
    <button
      onClick={onRestart}
      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
    >
      Practice Again
    </button>
  </div>
);

const MultiplicationTable8Worksheet: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <WorksheetTracker
          totalQuestions={10}
          pointsPerQuestion={10}
          onSummaryGenerated={handleSummaryGenerated}
        >
          {({ score }) => (
            <>
              {/* Score Display */}
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
                <div className="max-w-4xl mx-auto">
                  <ScoreDisplay score={score} totalQuestions={100} />
                </div>
              </div>

              {/* Practice Mode Toggle */}
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-green-700">
                    Multiplication Table of 8
                  </h1>
                  <button
                    onClick={togglePracticeMode}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      practiceMode
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-green-600 border border-green-600'
                    }`}
                  >
                    {practiceMode ? 'Practice Mode: ON' : 'Practice Mode: OFF'}
                  </button>
                </div>
              </div>

              {isComplete ? (
                <CompletionMessage onRestart={handleRestart} />
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {TABLE_CELLS.map((cell, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                    >
                      <div className="flex flex-wrap items-center gap-4">
                        {/* Equation */}
                        <div className="flex items-center gap-2 text-xl">
                          <span className="font-bold text-green-700">{cell.num1}</span>
                          <span className="text-green-600">×</span>
                          <span className="font-bold text-green-700">{cell.num2}</span>
                          <span className="text-green-600">=</span>
                          <input
                            type="number"
                            value={answers[index]}
                            onChange={(e) => {
                              const trackerContext = {
                                markCorrect: () => {},
                                markIncorrect: () => {},
                                markAttempted: () => {},
                              };
                              handleInputChange(index, e.target.value, trackerContext);
                            }}
                            className="w-16 h-10 text-center border-2 border-green-200 rounded-lg focus:border-green-600 focus:outline-none"
                          />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleListenClick(index)}
                            className="p-2 text-green-600 hover:text-green-700"
                            title="Listen"
                          >
                            🔊
                          </button>
                          <button
                            onClick={() => toggleVisualAid(index)}
                            className="p-2 text-green-600 hover:text-green-700"
                            title="Show/Hide Visual Aid"
                          >
                            👁️
                          </button>
                        </div>
                      </div>

                      {/* Visual Aid */}
                      {showVisualAids[index] && (
                        <div className="mt-4 p-2 bg-green-50 rounded-lg overflow-x-auto">
                          <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                            {VISUAL_AIDS[cell.answer].map((item, i) => (
                              <span
                                key={i}
                                className={item === '|' ? 'text-green-300 mx-1' : ''}
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

export default MultiplicationTable8Worksheet; 