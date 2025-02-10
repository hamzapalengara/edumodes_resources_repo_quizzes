import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface NumberState {
  value: number;
  isHidden: boolean;
  isCorrect?: boolean;
  userInput?: string;
}

// Worksheet specific configuration
const POINTS_PER_QUESTION = 10;
const TOTAL_HIDDEN_NUMBERS = 10;

// Fixed set of hidden numbers (indices 0-based)
const HIDDEN_INDICES = [
  1,  // 2
  3,  // 4
  5,  // 6
  8,  // 9
  10, // 11
  12, // 13
  14, // 15
  16, // 17
  17, // 18
  19  // 20
];

// Create initial number sequence with fixed hidden numbers
const NUMBERS: NumberState[] = Array.from({ length: 20 }, (_, index) => ({
  value: index + 1,
  isHidden: HIDDEN_INDICES.includes(index),
}));

// Park-themed success messages
const SUCCESS_MESSAGES = [
  "Fantastic fun! 🎈",
  "Super slide! 🛝",
  "Swing-tastic! 🎪",
  "Park perfect! 🌳",
  "Playground pro! 🎯",
  "Amazing adventure! 🌟",
  "Merry-go-round magic! 🎠",
  "Sandbox star! ⭐",
];

const NumberFillWorksheet: React.FC = () => {
  const [numbers, setNumbers] = useState<NumberState[]>(NUMBERS);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [completedNumbers, setCompletedNumbers] = useState<Set<number>>(new Set());
  
  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  const totalQuestions = TOTAL_HIDDEN_NUMBERS;

  // Function to stop current speech
  const stopCurrentSpeech = () => {
    if (window.speechSynthesis && currentSpeech.current) {
      window.speechSynthesis.cancel();
      currentSpeech.current = null;
    }
  };

  // Function to speak text
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      stopCurrentSpeech();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      currentSpeech.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Clean up speech on unmount
  React.useEffect(() => {
    return () => {
      stopCurrentSpeech();
    };
  }, []);

  // Play park sound effect
  const playParkSound = () => {
    const audio = new Audio('/playground.mp3');
    audio.volume = 0.3;
    audio.play().catch(console.error);
  };

  return (
    <WorksheetTracker 
      totalQuestions={totalQuestions}
      pointsPerQuestion={POINTS_PER_QUESTION}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Summary generated:', summary);
      }}
    >
      {({ score, maxScore, markAttempted, markCorrect, markIncorrect, reset }) => {
        // Handle reset - now only resets user progress, not number positions
        const handleReset = () => {
          stopCurrentSpeech();
          setNumbers(NUMBERS.map(number => ({
            ...number,
            isCorrect: undefined,
            userInput: undefined
          })));
          setIsComplete(false);
          setShowSuccess(false);
          setCompletedNumbers(new Set());
          reset();
        };

        return (
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50">
            <WorksheetHeader />
            
            <div className="px-0 md:px-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-600 mb-6">
                  Fill in the Missing Numbers
                </h1>

                <div className="mb-6">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-0.5 md:gap-4 mb-8">
                  {numbers.map((number, index) => {
                    const handleInput = (value: string) => {
                      const numValue = parseInt(value);
                      const newNumbers = [...numbers];
                      const currentNumber = newNumbers[index];

                      if (currentNumber.isHidden) {
                        if (!currentNumber.userInput || currentNumber.userInput !== value) {
                          markAttempted();
                        }

                        currentNumber.userInput = value;
                        currentNumber.isCorrect = numValue === currentNumber.value;

                        if (currentNumber.isCorrect && !completedNumbers.has(currentNumber.value)) {
                          markCorrect();
                          setShowSuccess(true);
                          setTimeout(() => setShowSuccess(false), 1500);
                          
                          playParkSound();

                          setCompletedNumbers(new Set([...completedNumbers, currentNumber.value]));

                          speak(`Correct! This is number ${currentNumber.value}`);

                          const allCorrect = newNumbers
                            .filter(n => n.isHidden)
                            .every(n => n.isCorrect || n === currentNumber);

                          if (allCorrect) {
                            setIsComplete(true);
                            const celebrationAudio = new Audio('/celebration.mp3');
                            celebrationAudio.play().catch(console.error);
                          }
                        } else if (value !== '') {
                          markIncorrect();

                          const errorAudio = new Audio('/error.mp3');
                          errorAudio.play().catch(console.error);

                          const hint = `Try again! This number is ${
                            currentNumber.value < numValue ? 'smaller' : 'bigger'
                          } than ${value}`;
                          speak(hint);
                        }

                        setNumbers(newNumbers);
                      }
                    };

                    return (
                      <motion.div
                        key={index}
                        className={`
                          w-full aspect-square rounded-lg border-3
                          ${number.isHidden ? 'border-dashed border-indigo-400' : 'border-indigo-200'} 
                          flex items-center justify-center text-2xl font-bold
                          ${number.isHidden ? 'bg-white' : 'bg-gradient-to-br from-indigo-50 to-purple-50'}
                          ${number.isCorrect === false ? 'border-red-400 bg-red-50' : ''}
                          ${number.isCorrect === true ? 'border-green-400 bg-green-50' : ''}
                          transition-colors duration-300 shadow-sm hover:shadow-md
                        `}
                        whileHover={number.isHidden && !number.isCorrect ? { scale: 1.05 } : {}}
                        whileTap={number.isHidden && !number.isCorrect ? { scale: 0.95 } : {}}
                        animate={number.isCorrect ? { scale: [1, 1.2, 1] } : {}}
                        onClick={() => handleInput(number.userInput || '')}
                      >
                        {number.isHidden ? (
                          number.isCorrect ? (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-green-600"
                            >
                              {number.value}
                            </motion.span>
                          ) : (
                            <input
                              type="text"
                              maxLength={2}
                              value={number.userInput || ''}
                              onChange={(e) => handleInput(e.target.value)}
                              className={`
                                w-full h-full text-center bg-transparent focus:outline-none
                                ${number.isCorrect === false ? 'text-red-500' : 'text-indigo-700'}
                              `}
                              style={{ fontSize: '1.5rem' }}
                            />
                          )
                        ) : (
                          <span className="text-indigo-700">{number.value}</span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Instructions */}
                <div className="text-center text-gray-600">
                  <p className="mb-2">Fill in the missing numbers from 1 to 20!</p>
                  <p className="text-sm">Click on any empty box and type the correct number</p>
                </div>

                {/* Success Animation */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="fixed inset-0 pointer-events-none flex items-center justify-center"
                  >
                    <div className="relative">
                      {/* Park-themed celebration emoji */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          scale: [1, 1.5, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-7xl">
                          {['🎈', '🎪', '🎠', '🎯', '⭐', '🌟', '🎨', '🎭'][Math.floor(Math.random() * 8)]}
                        </div>
                      </motion.div>

                      {/* Park-themed success message */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12
                                  bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-lg font-bold text-indigo-600 whitespace-nowrap">
                          {SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]}
                        </p>
                      </motion.div>

                      {/* Floating balloons */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2"
                        initial="hidden"
                        animate="visible"
                      >
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                              width: Math.random() * 20 + 10,
                              height: Math.random() * 20 + 10,
                              left: Math.random() * 100 + '%',
                              top: Math.random() * 100 + '%',
                              background: `hsl(${Math.random() * 360}, 80%, 60%)`,
                            }}
                            animate={{
                              y: [0, -100],
                              x: [0, Math.random() * 40 - 20],
                              opacity: [0.8, 0],
                            }}
                            transition={{
                              duration: Math.random() * 2 + 1,
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Completion celebration */}
                {isComplete && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-white p-8 rounded-2xl shadow-2xl text-center"
                    >
                      <h2 className="text-3xl font-bold text-indigo-600 mb-4">
                        Amazing! 🎈
                      </h2>
                      <p className="text-gray-600 mb-6">
                        You've completed the number adventure!
                      </p>
                      <button
                        onClick={handleReset}
                        className="bg-indigo-500 text-white px-6 py-2 rounded-full
                                 hover:bg-indigo-600 transition-colors"
                      >
                        Try Again
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default NumberFillWorksheet; 