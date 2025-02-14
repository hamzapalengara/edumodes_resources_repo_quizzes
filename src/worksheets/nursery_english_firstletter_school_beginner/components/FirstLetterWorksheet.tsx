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
    word: "book",
    emoji: "📚",
    options: ["b", "p", "d", "t"],
    correctLetter: "b"
  },
  {
    id: 2,
    word: "pencil",
    emoji: "✏️",
    options: ["p", "b", "t", "d"],
    correctLetter: "p"
  },
  {
    id: 3,
    word: "desk",
    emoji: "🪑",
    options: ["d", "b", "t", "p"],
    correctLetter: "d"
  },
  {
    id: 4,
    word: "teacher",
    emoji: "👩‍🏫",
    options: ["t", "d", "p", "b"],
    correctLetter: "t"
  },
  {
    id: 5,
    word: "ruler",
    emoji: "📏",
    options: ["r", "l", "w", "p"],
    correctLetter: "r"
  },
  {
    id: 6,
    word: "scissors",
    emoji: "✂️",
    options: ["s", "c", "z", "x"],
    correctLetter: "s"
  },
  {
    id: 7,
    word: "crayon",
    emoji: "🖍️",
    options: ["c", "k", "g", "t"],
    correctLetter: "c"
  },
  {
    id: 8,
    word: "map",
    emoji: "🗺️",
    options: ["m", "n", "w", "p"],
    correctLetter: "m"
  },
  {
    id: 9,
    word: "lunch",
    emoji: "🍱",
    options: ["l", "r", "w", "y"],
    correctLetter: "l"
  },
  {
    id: 10,
    word: "notebook",
    emoji: "📓",
    options: ["n", "m", "h", "b"],
    correctLetter: "n"
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
      // School-themed celebration colors
      const celebrationColors = ['#4B9CD3', '#FFD700', '#28A745'];
      
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
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
                
                // Success confetti with school colors
                confetti({
                  particleCount: 50,
                  spread: 70,
                  origin: { y: 0.7 },
                  colors: ['#4B9CD3', '#FFD700', '#28A745']
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
              <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden border-2 border-blue-100">
                {/* Score Display */}
                <div className="bg-blue-100 p-4">
                  <ScoreDisplay score={score} totalQuestions={words.length * 10} />
                </div>

                {/* Collapsible Instructions */}
                <div className="border-t border-blue-100">
                  <button
                    onClick={() => setShowInstructions(!showInstructions)}
                    className="w-full px-4 py-3 text-left text-blue-800 font-semibold flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">📚</span>
                      How to Play
                    </span>
                    <span className="text-xl">
                      {showInstructions ? '▼' : '▶'}
                    </span>
                  </button>
                  
                  {showInstructions && (
                    <div className="px-4 py-3 text-gray-700 bg-blue-50/50">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Listen to the school word carefully</li>
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
                  <div className="bg-white rounded-lg p-6 shadow-md border-2 border-blue-100">
                    <div className="flex flex-col items-center gap-6">
                      {/* Progress Indicator */}
                      <div className="flex items-center gap-3 text-blue-800">
                        <div className="text-xl font-bold">
                          Word {activeWordIndex + 1} of {words.length}
                        </div>
                        <div className="h-2 w-32 bg-blue-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 transition-all duration-500"
                            style={{ width: `${(activeWordIndex / words.length) * 100}%` }}
                          />
                        </div>
                      </div>
                      
                      {/* Listen Button */}
                      <motion.button
                        onClick={() => speakWord(words[activeWordIndex].word)}
                        className="bg-blue-100 text-blue-700 px-8 py-3 rounded-full flex items-center gap-2 text-lg shadow-md hover:bg-blue-200 transition-colors"
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
                            className="bg-blue-500 text-white text-2xl font-bold py-4 px-6 rounded-xl shadow-md hover:bg-blue-600 transition-colors"
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
                    className="bg-white p-8 rounded-lg shadow-lg text-center space-y-6 border-2 border-blue-100"
                  >
                    <div className="text-6xl mb-4 animate-bounce">🎓</div>
                    <motion.h2 
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      className="text-3xl font-bold text-blue-800 mb-2"
                    >
                      A+ Work!
                    </motion.h2>
                    
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <p className="text-lg text-blue-700">
                        You're a star student at identifying first letters!
                      </p>
                      <div className="flex justify-center items-center gap-2 text-lg">
                        <span className="text-blue-700">Your Score:</span>
                        <span className="font-bold text-2xl bg-blue-100 px-4 py-1 rounded-full text-blue-800">
                          {score} / {words.length * 10}
                        </span>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-blue-50 rounded-lg p-6 mt-6 max-w-md mx-auto"
                    >
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">
                        Skills Mastered:
                      </h3>
                      <ul className="text-left space-y-3">
                        <motion.li 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="flex items-center gap-3 text-blue-700"
                        >
                          <span className="text-2xl">📚</span>
                          <span>School Word Recognition</span>
                        </motion.li>
                        <motion.li 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          className="flex items-center gap-3 text-blue-700"
                        >
                          <span className="text-2xl">🎯</span>
                          <span>First Letter Identification</span>
                        </motion.li>
                        <motion.li 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="flex items-center gap-3 text-blue-700"
                        >
                          <span className="text-2xl">👂</span>
                          <span>Active Listening Skills</span>
                        </motion.li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-blue-600 mt-6 font-medium text-lg"
                    >
                      Ready for your next lesson? Keep learning!
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