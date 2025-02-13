import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Fixed dice combinations for consistent questions and answers
const DICE_COMBINATIONS = [
  { dice1: 2, dice2: 3, sum: 5 },  // Simple addition starting with smaller numbers
  { dice1: 4, dice2: 2, sum: 6 },  // Common sum of 6
  { dice1: 3, dice2: 5, sum: 8 },  // Mixed numbers
  { dice1: 6, dice2: 4, sum: 10 }, // Larger sum
  { dice1: 5, dice2: 5, sum: 10 }, // Double numbers
  { dice1: 6, dice2: 6, sum: 12 }, // Maximum possible sum
  { dice1: 1, dice2: 4, sum: 5 },  // Starting with 1
  { dice1: 3, dice2: 3, sum: 6 },  // Double numbers
  { dice1: 2, dice2: 5, sum: 7 },  // Mixed numbers
  { dice1: 4, dice2: 5, sum: 9 }   // Near maximum sum
];

const DiceAdditionWorksheet: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(new Array(10).fill(''));

  const renderDots = (number: number) => {
    const positions = {
      1: ['center'],
      2: ['top-left', 'bottom-right'],
      3: ['top-left', 'center', 'bottom-right'],
      4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
      6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right'],
    };

    return positions[number as keyof typeof positions].map((position, index) => (
      <div key={index} className={`dot ${position}`} />
    ));
  };

  const speak = (text: string, isDiceSound = false) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = isDiceSound ? 1.2 : 1;
      speechSynthesis.speak(utterance);
    }
  };

  const handleBoxClick = (index: number) => {
    const { dice1, dice2 } = DICE_COMBINATIONS[index];
    speak(`${dice1} plus ${dice2} equals what?`);
  };

  const getSuccessFeedback = (combination: typeof DICE_COMBINATIONS[0]) => {
    const phrases = [
      `Great job! ${combination.dice1} plus ${combination.dice2} equals ${combination.sum}!`,
      `Excellent! The sum is ${combination.sum}!`,
      `Perfect! ${combination.dice1} and ${combination.dice2} make ${combination.sum}!`
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const provideFeedback = (isCorrect: boolean) => {
    if (isCorrect) {
      const successSound = new Audio('/sounds/success.mp3');
      successSound.play();
    } else {
      const errorSound = new Audio('/sounds/error.mp3');
      errorSound.play();
      speak('Try again! Count the dots carefully and add them together.');
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    { markCorrect, markIncorrect, markAttempted }: { 
      markCorrect: () => void; 
      markIncorrect: () => void;
      markAttempted: () => void;
    }
  ) => {
    const value = event.target.value;
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    if (value.length > 0) {
      markAttempted();
      const isCorrect = parseInt(value) === DICE_COMBINATIONS[index].sum;
      if (isCorrect) {
        markCorrect();
        provideFeedback(true);
        speak(getSuccessFeedback(DICE_COMBINATIONS[index]));
      } else {
        markIncorrect();
        provideFeedback(false);
      }
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-rose-400">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 md:p-4">
                {DICE_COMBINATIONS.map((combo, index) => (
                  <div 
                    key={index}
                    className="bg-white/20 backdrop-blur-md rounded-xl p-2 md:p-4 flex flex-col items-center"
                    onClick={() => handleBoxClick(index)}
                  >
                    {/* Question Number */}
                    <div className="text-white text-lg font-bold mb-2">
                      Question {index + 1}
                    </div>

                    {/* Dice Container - Stack on mobile, row on larger screens */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                      {/* First Dice */}
                      <div className="dice-face">
                        {renderDots(combo.dice1)}
                      </div>

                      {/* Plus Sign */}
                      <div className="text-2xl md:text-3xl font-bold text-white">+</div>

                      {/* Second Dice */}
                      <div className="dice-face">
                        {renderDots(combo.dice2)}
                      </div>

                      {/* Equals Sign */}
                      <div className="text-2xl md:text-3xl font-bold text-white">=</div>

                      {/* Answer Input */}
                      <input
                        type="number"
                        className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-lg text-center text-2xl font-bold text-white"
                        value={answers[index] || ''}
                        onChange={(e) => handleInputChange(e, index, { markCorrect, markIncorrect, markAttempted })}
                        min={1}
                        max={12}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </WorksheetTracker>
      </div>

      <style>{`
        .dice-face {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 8px;
          box-shadow: 
            inset 0 0 15px rgba(0,0,0,0.1),
            0 5px 15px rgba(0,0,0,0.2);
          position: relative;
        }

        .dot {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #333;
          border-radius: 50%;
          box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
        }

        .center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .top-left {
          top: 20%;
          left: 20%;
        }

        .top-right {
          top: 20%;
          right: 20%;
        }

        .middle-left {
          top: 50%;
          left: 20%;
          transform: translateY(-50%);
        }

        .middle-right {
          top: 50%;
          right: 20%;
          transform: translateY(-50%);
        }

        .bottom-left {
          bottom: 20%;
          left: 20%;
        }

        .bottom-right {
          bottom: 20%;
          right: 20%;
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default DiceAdditionWorksheet; 