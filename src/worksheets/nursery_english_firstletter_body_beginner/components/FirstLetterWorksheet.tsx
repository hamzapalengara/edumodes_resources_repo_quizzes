import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface Word {
  id: number;
  word: string;
  emoji: string;
  options: string[];
  correctLetter: string;
}

const words: Word[] = [
  {
    id: 1,
    word: "head",
    emoji: "👤",
    options: ["h", "n", "d", "b"],
    correctLetter: "h"
  },
  {
    id: 2,
    word: "nose",
    emoji: "👃",
    options: ["n", "m", "h", "d"],
    correctLetter: "n"
  },
  {
    id: 3,
    word: "mouth",
    emoji: "👄",
    options: ["m", "n", "w", "p"],
    correctLetter: "m"
  },
  {
    id: 4,
    word: "ear",
    emoji: "👂",
    options: ["e", "i", "a", "o"],
    correctLetter: "e"
  },
  {
    id: 5,
    word: "finger",
    emoji: "👆",
    options: ["f", "t", "p", "v"],
    correctLetter: "f"
  },
  {
    id: 6,
    word: "leg",
    emoji: "🦵",
    options: ["l", "r", "n", "d"],
    correctLetter: "l"
  },
  {
    id: 7,
    word: "arm",
    emoji: "💪",
    options: ["a", "e", "i", "o"],
    correctLetter: "a"
  },
  {
    id: 8,
    word: "tooth",
    emoji: "🦷",
    options: ["t", "d", "p", "b"],
    correctLetter: "t"
  },
  {
    id: 9,
    word: "hand",
    emoji: "✋",
    options: ["h", "n", "m", "b"],
    correctLetter: "h"
  },
  {
    id: 10,
    word: "knee",
    emoji: "🦵",
    options: ["k", "n", "p", "t"],
    correctLetter: "k"
  }
];

// Shuffle array function
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const FirstLetterWorksheet: React.FC = () => {
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
  const [completedWords, setCompletedWords] = useState<boolean[]>(Array(words.length).fill(false));
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(words.length).fill(''));
  const [shuffledOptions] = useState<string[][]>(
    words.map(word => shuffleArray(word.options))
  );
  const [showInstructions, setShowInstructions] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Speech synthesis setup
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          // Optionally set a preferred voice here
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Auto-play word when moving to next question
  useEffect(() => {
    if (activeWordIndex < words.length) {
      speakWord(words[activeWordIndex].word);
    }
  }, [activeWordIndex]);

  // Modified completion check
  useEffect(() => {
    if (activeWordIndex >= words.length && !isComplete) {
      setIsComplete(true);
      // Body-themed celebration colors
      const celebrationColors = ['#FF9999', '#FFB366', '#99FF99'];
      
      // Initial burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: celebrationColors
      });

      // Side bursts after a delay
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 80,
          origin: { x: 0, y: 0.6 },
          colors: celebrationColors
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 80,
          origin: { x: 1, y: 0.6 },
          colors: celebrationColors
        });
      }, 750);

      // Final burst
      setTimeout(() => {
        confetti({
          particleCount: 75,
          spread: 360,
          origin: { x: 0.5, y: 0.5 },
          colors: celebrationColors
        });
      }, 1500);
    }
  }, [activeWordIndex, isComplete]);

  const speakWord = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.pitch = 1.0;
    utterance.rate = 0.8;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={words.length}
        pointsPerQuestion={10}
        onSummaryGenerated={(summary: WorksheetSummary) => {
          console.log('Worksheet Summary:', summary);
        }}
      >
        {({ score, markCorrect, markAttempted }) => {
          const handleOptionClick = (letter: string) => {
            const currentWord = words[activeWordIndex];
            markAttempted();
            
            if (letter === currentWord.correctLetter) {
              if (!completedWords[activeWordIndex]) {
                markCorrect();
                
                const newCompleted = [...completedWords];
                newCompleted[activeWordIndex] = true;
                setCompletedWords(newCompleted);

                const newAnswers = [...selectedAnswers];
                newAnswers[activeWordIndex] = letter;
                setSelectedAnswers(newAnswers);
                
                // Success confetti with body-themed colors
                confetti({
                  particleCount: 50,
                  spread: 70,
                  origin: { y: 0.7 },
                  colors: ['#FF9999', '#FFB366', '#99FF99']
                });

                // Check if this was the last word
                if (activeWordIndex === words.length - 1) {
                  setTimeout(() => {
                    setActiveWordIndex(activeWordIndex + 1);
                  }, 1000);
                } else {
                  setTimeout(() => {
                    setActiveWordIndex(activeWordIndex + 1);
                  }, 1000);
                }
              }
            }
          };

          return (
            <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
              {/* Top Section with Score and Instructions Toggle */}
              <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden border-2 border-red-100">
                {/* Score Display */}
                <div className="bg-red-100 p-4">
                  <ScoreDisplay score={score} totalQuestions={words.length * 10} />
                </div>

                {/* Collapsible Instructions */}
                <div className="border-t border-red-100">
                  <button
                    onClick={() => setShowInstructions(!showInstructions)}
                    className="w-full px-4 py-3 text-left text-red-800 font-semibold flex items-center justify-between hover:bg-red-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">👂</span>
                      How to Play
                    </span>
                    <span className="text-xl">
                      {showInstructions ? '▼' : '▶'}
                    </span>
                  </button>
                  
                  {showInstructions && (
                    <div className="px-4 py-3 text-gray-700 bg-red-50/50">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Listen to the body part word carefully</li>
                        <li>Choose the letter that the word starts with</li>
                        <li>Click the listen button if you need to hear it again</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Content Area - Fixed Height */}
              <div className="min-h-[400px] relative">
                {/* Current Word Section */}
                {activeWordIndex < words.length && (
                  <div className="bg-white rounded-lg p-6 shadow-md border-2 border-red-100">
                    <div className="flex flex-col items-center gap-6">
                      {/* Progress Indicator */}
                      <div className="flex items-center gap-3 text-red-800">
                        <div className="text-xl font-bold">
                          Word {activeWordIndex + 1} of {words.length}
                        </div>
                        <div className="h-2 w-32 bg-red-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-red-500 transition-all duration-500"
                            style={{ width: `${(activeWordIndex / words.length) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* Body Part Emoji Display */}
                      <div className="text-6xl animate-bounce">
                        {words[activeWordIndex].emoji}
                      </div>
                      
                      {/* Listen Button */}
                      <motion.button
                        onClick={() => speakWord(words[activeWordIndex].word)}
                        className="bg-red-100 text-red-700 px-8 py-3 rounded-full flex items-center gap-2 text-lg shadow-md hover:bg-red-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🔊 Listen Again
                      </motion.button>

                      {/* Letter Options */}
                      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                        {shuffledOptions[activeWordIndex].map((letter, letterIndex) => (
                          <motion.button
                            key={letterIndex}
                            onClick={() => handleOptionClick(letter)}
                            className="bg-red-500 text-white text-2xl font-bold py-4 px-6 rounded-xl shadow-md hover:bg-red-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {letter.toUpperCase()}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Completion Message */}
                {isComplete && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-lg shadow-lg text-center space-y-6 border-2 border-red-100"
                  >
                    <div className="text-6xl mb-4 animate-bounce">👏</div>
                    <motion.h2 
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      className="text-3xl font-bold text-red-800 mb-2"
                    >
                      Amazing Job!
                    </motion.h2>
                    
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <p className="text-lg text-red-700">
                        You're excellent at identifying body part word sounds!
                      </p>
                      <div className="flex justify-center items-center gap-2 text-lg">
                        <span className="text-red-700">Your Score:</span>
                        <span className="font-bold text-2xl bg-red-100 px-4 py-1 rounded-full text-red-800">
                          {score} / {words.length * 10}
                        </span>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-red-50 rounded-lg p-6 mt-6 max-w-md mx-auto"
                    >
                      <h3 className="text-lg font-semibold text-red-800 mb-3">
                        Skills Mastered:
                      </h3>
                      <ul className="text-left space-y-3">
                        <motion.li 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="flex items-center gap-3 text-red-700"
                        >
                          <span className="text-2xl">👂</span>
                          <span>Active Listening Skills</span>
                        </motion.li>
                        <motion.li 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          className="flex items-center gap-3 text-red-700"
                        >
                          <span className="text-2xl">🎯</span>
                          <span>First Letter Recognition</span>
                        </motion.li>
                        <motion.li 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="flex items-center gap-3 text-red-700"
                        >
                          <span className="text-2xl">✨</span>
                          <span>Body Part Vocabulary</span>
                        </motion.li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-red-600 mt-6 font-medium text-lg"
                    >
                      Ready to learn more body part words? Keep practicing!
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          );
        }}
      </WorksheetTracker>
    </div>
  );
};

export default FirstLetterWorksheet; 