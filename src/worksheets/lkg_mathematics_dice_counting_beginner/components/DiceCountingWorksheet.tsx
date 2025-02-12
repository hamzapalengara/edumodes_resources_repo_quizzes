import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Original dice patterns array
const ORIGINAL_DICE_PATTERNS = [
  { 
    pattern: (
      <div className="dice-face">
        <div className="dot center-dot"></div>
      </div>
    ),
    number: 1, 
    sound: 'one dot' 
  },
  { 
    pattern: (
      <div className="dice-face">
        <div className="dot top-right"></div>
        <div className="dot bottom-left"></div>
      </div>
    ),
    number: 2, 
    sound: 'two dots' 
  },
  { 
    pattern: (
      <div className="dice-face">
        <div className="dot top-right"></div>
        <div className="dot center-dot"></div>
        <div className="dot bottom-left"></div>
      </div>
    ),
    number: 3, 
    sound: 'three dots' 
  },
  { 
    pattern: (
      <div className="dice-face">
        <div className="dot top-left"></div>
        <div className="dot top-right"></div>
        <div className="dot bottom-left"></div>
        <div className="dot bottom-right"></div>
      </div>
    ),
    number: 4, 
    sound: 'four dots' 
  },
  { 
    pattern: (
      <div className="dice-face">
        <div className="dot top-left"></div>
        <div className="dot top-right"></div>
        <div className="dot center-dot"></div>
        <div className="dot bottom-left"></div>
        <div className="dot bottom-right"></div>
      </div>
    ),
    number: 5, 
    sound: 'five dots' 
  },
  { 
    pattern: (
      <div className="dice-face">
        <div className="dot top-left"></div>
        <div className="dot top-right"></div>
        <div className="dot middle-left"></div>
        <div className="dot middle-right"></div>
        <div className="dot bottom-left"></div>
        <div className="dot bottom-right"></div>
      </div>
    ),
    number: 6, 
    sound: 'six dots' 
  },
];

const DiceCountingWorksheet: React.FC = () => {
  const [dicePatterns, setDicePatterns] = useState(ORIGINAL_DICE_PATTERNS);
  const [isRolling, setIsRolling] = useState<number | null>(null);

  // Shuffle dice patterns on component mount
  useEffect(() => {
    const shuffled = [...ORIGINAL_DICE_PATTERNS]
      .sort(() => Math.random() - 0.5);
    setDicePatterns(shuffled);
  }, []);

  // Speech synthesis for audio feedback
  const speak = (text: string, isDiceSound = false) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = isDiceSound ? 0.8 : 1;
      utterance.pitch = isDiceSound ? 1.2 : 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Handle box click to play sound and show rolling animation
  const handleBoxClick = (index: number) => {
    if (isRolling !== null) return; // Prevent clicking while rolling

    setIsRolling(index);

    // Play rolling animation for 1 second
    setTimeout(() => {
      setIsRolling(null);
      const dice = dicePatterns[index];
      speak(`Count the dots: ${dice.sound}`, true);
    }, 1000);
  };

  // Get success feedback message
  const getSuccessFeedback = (dice: typeof ORIGINAL_DICE_PATTERNS[0]) => {
    const messages = [
      `Great job! That's ${dice.number}!`,
      `Perfect! You counted ${dice.number} correctly!`,
      `Excellent counting! ${dice.number} dots!`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Provide audio feedback
  const provideFeedback = (isCorrect: boolean, diceNumber?: string) => {
    if (isCorrect && diceNumber) {
      const dice = dicePatterns.find(d => d.number.toString() === diceNumber);
      if (dice) {
        speak(getSuccessFeedback(dice));
      }
    } else {
      speak("Try again! Count the dots carefully.");
    }
  };

  // Handle input change
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    { markCorrect, markIncorrect }: { markCorrect: () => void; markIncorrect: () => void }
  ) => {
    const input = event.target.value.trim();
    const dice = dicePatterns[index];

    if (input === '') return;

    if (input === dice.number.toString()) {
      markCorrect();
      provideFeedback(true, input);
    } else {
      markIncorrect();
      provideFeedback(false);
    }
  };

  // Handle summary generation
  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={dicePatterns.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ score, markCorrect, markIncorrect }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
              <ScoreDisplay 
                score={score}
                totalQuestions={dicePatterns.length * 10}
              />
            </div>

            {/* Dice Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {dicePatterns.map((dice, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Dice Container */}
                  <motion.div
                    className="dice-container mb-4 cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => handleBoxClick(index)}
                    animate={isRolling === index ? {
                      rotateX: [0, 360, 720, 1080],
                      rotateY: [0, 360, 720, 1080],
                      rotateZ: [0, 360, 720, 1080],
                    } : {}}
                    transition={isRolling === index ? {
                      duration: 1,
                      ease: "easeInOut"
                    } : {}}
                  >
                    {dice.pattern}
                  </motion.div>

                  {/* Input Box */}
                  <div className="w-full">
                    <input
                      type="text"
                      maxLength={1}
                      className="w-16 h-16 text-3xl font-bold text-center rounded-lg border-4 border-white/30 bg-white/30 mx-auto block focus:outline-none focus:border-purple-300 text-white placeholder-white/50"
                      onChange={(e) => handleInputChange(e, index, { markCorrect, markIncorrect })}
                      placeholder="#"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Instructions */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4 text-white text-center shadow-lg">
              <p className="text-lg">
                👆 Touch each dice to see it roll, then write the number you see!
              </p>
            </div>
          </div>
        )}
      </WorksheetTracker>

      {/* Add custom styles for 3D dice */}
      <style>{`
        .dice-container {
          width: 80px;
          height: 80px;
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .dice-face {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 10px;
          box-shadow: 
            inset 0 0 15px rgba(0,0,0,0.1),
            0 5px 15px rgba(0,0,0,0.2);
          position: relative;
          transform-style: preserve-3d;
        }

        .dot {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #333;
          border-radius: 50%;
          box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
        }

        .center-dot {
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
      `}</style>
    </div>
  );
};

export default DiceCountingWorksheet; 