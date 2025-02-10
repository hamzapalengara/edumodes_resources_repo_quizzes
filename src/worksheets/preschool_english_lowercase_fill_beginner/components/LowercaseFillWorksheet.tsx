import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface LetterState {
  value: string;
  isHidden: boolean;
  isCorrect?: boolean;
  userInput?: string;
}

// Worksheet specific configuration
const POINTS_PER_QUESTION = 10;
const TOTAL_HIDDEN_LETTERS = 10;

// Fixed set of hidden letters (indices 0-based)
const HIDDEN_INDICES = [
  2,  // c
  4,  // e
  7,  // h
  9,  // j
  12, // m
  15, // p
  17, // r
  20, // u
  22, // w
  25  // z
];

// Create initial alphabet with fixed hidden letters
const ALPHABET: LetterState[] = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, index) => ({
  value: letter,
  isHidden: HIDDEN_INDICES.includes(index),
}));

// Ocean-themed success messages
const SUCCESS_MESSAGES = [
  "Splashing good job! 🌊",
  "Ocean-tastic! 🐠",
  "Swim-credible! 🐋",
  "Shell-tacular! 🐚",
  "Fin-tastic work! 🐬",
  "Sea-per awesome! 🦈",
  "Turtle-y amazing! 🐢",
  "Crab-ulous! 🦀",
];

const LowercaseFillWorksheet: React.FC = () => {
  const [letters, setLetters] = useState<LetterState[]>(ALPHABET);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [completedLetters, setCompletedLetters] = useState<Set<string>>(new Set());
  
  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  const totalQuestions = TOTAL_HIDDEN_LETTERS; // Fixed number of questions

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

  // Play ocean sound effect
  const playOceanSound = () => {
    const audio = new Audio('/ocean-wave.mp3');
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
        // Handle reset - now only resets user progress, not letter positions
        const handleReset = () => {
          stopCurrentSpeech();
          setLetters(ALPHABET.map(letter => ({
            ...letter,
            isCorrect: undefined,
            userInput: undefined
          })));
          setIsComplete(false);
          setShowSuccess(false);
          setCompletedLetters(new Set());
          reset(); // Reset tracker state
        };

        return (
          <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
            <WorksheetHeader />
            
            <div className="px-0 md:px-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-teal-800 mb-6">
                  Fill in the Missing Letters
                </h1>

                <div className="mb-6">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                <div className="grid grid-cols-5 sm:grid-cols-7 gap-0.5 md:gap-4 mb-8">
                  {letters.map((letter, index) => {
                    const handleInput = (value: string) => {
                      const lowerValue = value.toLowerCase();
                      const newLetters = [...letters];
                      const currentLetter = newLetters[index];

                      if (currentLetter.isHidden) {
                        // Mark as attempted if this is a new attempt or different answer
                        if (!currentLetter.userInput || currentLetter.userInput !== lowerValue) {
                          markAttempted();
                        }

                        currentLetter.userInput = lowerValue;
                        currentLetter.isCorrect = lowerValue === currentLetter.value;

                        if (currentLetter.isCorrect && !completedLetters.has(currentLetter.value)) {
                          markCorrect();
                          setShowSuccess(true);
                          setTimeout(() => setShowSuccess(false), 1500);
                          
                          // Play ocean sound
                          playOceanSound();

                          // Add to completed letters
                          setCompletedLetters(new Set([...completedLetters, currentLetter.value]));

                          // Speak feedback
                          speak(`Correct! This is the letter ${currentLetter.value}`);

                          // Check if this was the last letter needed
                          const allCorrect = newLetters
                            .filter(l => l.isHidden)
                            .every(l => l.isCorrect || l === currentLetter);

                          if (allCorrect) {
                            setIsComplete(true);
                            const celebrationAudio = new Audio('/celebration.mp3');
                            celebrationAudio.play().catch(console.error);
                          }
                        } else if (lowerValue !== '') {
                          markIncorrect();

                          // Play error sound
                          const errorAudio = new Audio('/error.mp3');
                          errorAudio.play().catch(console.error);

                          // Speak hint
                          const hint = `Try again! This letter comes ${
                            currentLetter.value < lowerValue ? 'before' : 'after'
                          } ${lowerValue} in the alphabet.`;
                          speak(hint);
                        }

                        setLetters(newLetters);
                      }
                    };

                    return (
                      <motion.div
                        key={index}
                        className={`
                          w-full aspect-square rounded-lg border-2 
                          ${letter.isHidden ? 'border-dashed border-teal-300' : 'border-teal-200'} 
                          flex items-center justify-center text-2xl font-bold
                          ${letter.isHidden ? 'bg-white' : 'bg-teal-50'}
                          ${letter.isCorrect === false ? 'border-red-300 bg-red-50' : ''}
                          ${letter.isCorrect === true ? 'border-emerald-300 bg-emerald-50' : ''}
                          transition-colors duration-300
                        `}
                        whileHover={letter.isHidden && !letter.isCorrect ? { scale: 1.05 } : {}}
                        whileTap={letter.isHidden && !letter.isCorrect ? { scale: 0.95 } : {}}
                        animate={letter.isCorrect ? { scale: [1, 1.2, 1] } : {}}
                        onClick={() => handleInput(letter.userInput || '')}
                      >
                        {letter.isHidden ? (
                          letter.isCorrect ? (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-emerald-600"
                            >
                              {letter.value}
                            </motion.span>
                          ) : (
                            <input
                              type="text"
                              maxLength={1}
                              value={letter.userInput || ''}
                              onChange={(e) => handleInput(e.target.value)}
                              className={`
                                w-full h-full text-center bg-transparent focus:outline-none
                                ${letter.isCorrect === false ? 'text-red-500' : 'text-teal-700'}
                              `}
                              style={{ fontSize: '1.5rem' }}
                            />
                          )
                        ) : (
                          <span className="text-teal-700">{letter.value}</span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Instructions */}
                <div className="text-center text-gray-600">
                  <p className="mb-2">Fill in the missing lowercase letters to complete the alphabet!</p>
                  <p className="text-sm">Click on any empty circle and type the correct letter</p>
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
                      {/* Ocean-themed celebration emoji */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          scale: [1, 1.5, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-7xl">
                          {['🐠', '🐋', '🐬', '🦈', '🐢', '🦀', '🐚'][Math.floor(Math.random() * 7)]}
                        </div>
                      </motion.div>

                      {/* Ocean-themed success message */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12
                                  bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-lg font-bold text-teal-600 whitespace-nowrap">
                          {SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]}
                        </p>
                      </motion.div>

                      {/* Floating bubbles */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2"
                        initial="hidden"
                        animate="visible"
                      >
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute rounded-full bg-teal-200/30"
                            style={{
                              width: Math.random() * 20 + 10,
                              height: Math.random() * 20 + 10,
                              left: Math.random() * 100 + '%',
                              top: Math.random() * 100 + '%',
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
                      <h2 className="text-3xl font-bold text-teal-600 mb-4">
                        Ocean-tastic! 🌊
                      </h2>
                      <p className="text-gray-600 mb-6">
                        You've completed the alphabet adventure!
                      </p>
                      <button
                        onClick={handleReset}
                        className="bg-teal-500 text-white px-6 py-2 rounded-full
                                 hover:bg-teal-600 transition-colors"
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

export default LowercaseFillWorksheet; 