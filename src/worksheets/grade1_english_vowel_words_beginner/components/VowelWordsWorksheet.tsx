import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

// Word data with vowel and non-vowel words
const WORD_DATA = [
  { word: 'ant', isVowel: true, emoji: '🐜' },
  { word: 'egg', isVowel: true, emoji: '🥚' },
  { word: 'ink', isVowel: true, emoji: '🖋️' },
  { word: 'owl', isVowel: true, emoji: '🦉' },
  { word: 'ice', isVowel: true, emoji: '🧊' },
  { word: 'dog', isVowel: false, emoji: '🐕' },
  { word: 'cat', isVowel: false, emoji: '🐱' },
  { word: 'sun', isVowel: false, emoji: '☀️' },
  { word: 'pig', isVowel: false, emoji: '🐷' },
  { word: 'hat', isVowel: false, emoji: '🎩' },
  { word: 'end', isVowel: true, emoji: '🔚' },
  { word: 'up', isVowel: true, emoji: '⬆️' },
  { word: 'box', isVowel: false, emoji: '📦' },
  { word: 'red', isVowel: false, emoji: '🔴' },
  { word: 'toy', isVowel: false, emoji: '🧸' },
  { word: 'ear', isVowel: true, emoji: '👂' },
];

// Success messages with garden theme
const SUCCESS_MESSAGES = [
  "Blooming brilliant! 🌸",
  "Growing great! 🌱",
  "Wonderful watering! 💦",
  "Perfect picking! 🌺",
  "Super sprouting! 🌷",
  "Amazing gardening! 🌻",
];

const VowelWordsWorksheet: React.FC = () => {
  const [words, setWords] = useState(WORD_DATA.map(word => ({ ...word, isSelected: false })));
  const [showSuccess, setShowSuccess] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedWords, setSelectedWords] = useState<Set<string>>(new Set());
  
  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  const totalQuestions = WORD_DATA.filter(word => word.isVowel).length;
  const POINTS_PER_QUESTION = 10;

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

  // Play garden sound effect
  const playGardenSound = (correct: boolean) => {
    const audio = new Audio(correct ? '/correct-garden.mp3' : '/wrong-garden.mp3');
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
        const handleWordClick = (index: number) => {
          const word = words[index];
          if (selectedWords.has(word.word)) return;

          markAttempted();
          const newWords = [...words];
          const newWord = { ...word, isSelected: true };
          newWords[index] = newWord;
          setWords(newWords);
          setSelectedWords(new Set([...selectedWords, word.word]));

          if (word.isVowel) {
            markCorrect();
            playGardenSound(true);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 1500);
            speak(`Correct! ${word.word} starts with a vowel!`);

            if (selectedWords.size + 1 === totalQuestions) {
              setIsComplete(true);
              const celebrationAudio = new Audio('/celebration.mp3');
              celebrationAudio.play().catch(console.error);
            }
          } else {
            markIncorrect();
            playGardenSound(false);
            speak(`Try again! ${word.word} doesn't start with a vowel.`);
          }
        };

        const handleReset = () => {
          stopCurrentSpeech();
          setWords(WORD_DATA.map(word => ({ ...word, isSelected: false })));
          setIsComplete(false);
          setShowSuccess(false);
          setSelectedWords(new Set());
          reset();
        };

        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-pink-50">
            <WorksheetHeader />
            
            <div className="px-0 md:px-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-6">
                  Pick Words Starting with Vowels
                </h1>

                <div className="mb-6">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                {/* Instructions */}
                <div className="text-center text-gray-600 mb-6">
                  <p className="mb-2">Click on words that start with vowels (a, e, i, o, u)!</p>
                  <p className="text-sm">Each flower is a word - pick the vowel flowers!</p>
                </div>

                {/* Word Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-0.5 md:gap-4 mb-8">
                  {words.map((word, index) => (
                    <motion.button
                      key={index}
                      className={`
                        w-full aspect-square rounded-lg border-3 p-2
                        ${word.isSelected 
                          ? word.isVowel 
                            ? 'border-green-400 bg-green-50' 
                            : 'border-red-400 bg-red-50'
                          : 'border-dashed border-green-400 hover:border-green-500 bg-white'}
                        flex flex-col items-center justify-center
                        transition-colors duration-300
                        ${word.isSelected ? 'cursor-default' : 'cursor-pointer'}
                      `}
                      onClick={() => !word.isSelected && handleWordClick(index)}
                      whileHover={!word.isSelected ? { scale: 1.05 } : {}}
                      whileTap={!word.isSelected ? { scale: 0.95 } : {}}
                    >
                      <span className="text-3xl mb-2">{word.emoji}</span>
                      <span className={`
                        text-lg font-bold
                        ${word.isSelected 
                          ? word.isVowel 
                            ? 'text-green-600' 
                            : 'text-red-600'
                          : 'text-gray-600'}
                      `}>
                        {word.word}
                      </span>
                    </motion.button>
                  ))}
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
                      {/* Garden-themed celebration emoji */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          scale: [1, 1.5, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-7xl">
                          {['🌸', '🌺', '🌷', '🌹', '🌻', '🌼'][Math.floor(Math.random() * 6)]}
                        </div>
                      </motion.div>

                      {/* Success message */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12
                                  bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-lg font-bold text-green-600 whitespace-nowrap">
                          {SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]}
                        </p>
                      </motion.div>

                      {/* Floating flowers */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2"
                        initial="hidden"
                        animate="visible"
                      >
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-2xl"
                            style={{
                              left: Math.random() * 100 + '%',
                              top: Math.random() * 100 + '%',
                            }}
                            animate={{
                              y: [0, -100],
                              x: [0, Math.random() * 40 - 20],
                              opacity: [1, 0],
                              rotate: [0, Math.random() * 360],
                            }}
                            transition={{
                              duration: Math.random() * 2 + 1,
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: Math.random() * 2,
                            }}
                          >
                            {['🌸', '🌺', '🌷', '🌹', '🌻', '🌼'][i % 6]}
                          </motion.div>
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
                      <h2 className="text-3xl font-bold text-green-600 mb-4">
                        Garden Complete! 🌸
                      </h2>
                      <p className="text-gray-600 mb-6">
                        You've found all the vowel words!
                      </p>
                      <button
                        onClick={handleReset}
                        className="bg-green-500 text-white px-6 py-2 rounded-full
                                 hover:bg-green-600 transition-colors"
                      >
                        Plant New Garden
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

export default VowelWordsWorksheet; 