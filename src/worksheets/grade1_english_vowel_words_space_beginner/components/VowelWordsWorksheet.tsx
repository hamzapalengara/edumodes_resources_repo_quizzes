import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

// Word data with vowel and non-vowel words (space theme)
const WORD_DATA = [
  { word: 'air', isVowel: true, emoji: '💨' },
  { word: 'earth', isVowel: true, emoji: '🌍' },
  { word: 'ice', isVowel: true, emoji: '❄️' },
  { word: 'orbit', isVowel: true, emoji: '🛸' },
  { word: 'up', isVowel: true, emoji: '⬆️' },
  { word: 'star', isVowel: false, emoji: '⭐' },
  { word: 'moon', isVowel: false, emoji: '🌙' },
  { word: 'light', isVowel: false, emoji: '💡' },
  { word: 'dark', isVowel: false, emoji: '🌑' },
  { word: 'nova', isVowel: false, emoji: '💫' },
  { word: 'echo', isVowel: true, emoji: '🔊' },
  { word: 'atom', isVowel: true, emoji: '⚛️' },
  { word: 'beam', isVowel: false, emoji: '🌟' },
  { word: 'dust', isVowel: false, emoji: '✨' },
  { word: 'ring', isVowel: false, emoji: '💍' },
  { word: 'orb', isVowel: true, emoji: '🔮' },
];

// Space-themed success messages
const SUCCESS_MESSAGES = [
  "Stellar discovery! 🌟",
  "Cosmic success! 🚀",
  "Astronomical win! 🌌",
  "Space-tacular! ✨",
  "Out of this world! 🛸",
  "Mission complete! 🌠",
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

  // Play space sound effect
  const playSpaceSound = (correct: boolean) => {
    const audio = new Audio(correct ? '/space-correct.mp3' : '/space-wrong.mp3');
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
            playSpaceSound(true);
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
            playSpaceSound(false);
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
          <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <WorksheetHeader />
            
            <div className="px-0 md:px-4 max-w-4xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-2 md:p-6 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-300 mb-6">
                  Find Vowel Stars in the Galaxy
                </h1>

                <div className="mb-6">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                {/* Instructions */}
                <div className="text-center text-purple-200 mb-6">
                  <p className="mb-2">Click on stars that begin with vowels (a, e, i, o, u)!</p>
                  <p className="text-sm">Each star is a word - collect the vowel stars!</p>
                </div>

                {/* Word Grid - Hexagonal Layout */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-0.5 md:gap-4 mb-8">
                  {words.map((word, index) => (
                    <motion.button
                      key={index}
                      className={`
                        w-full aspect-square rounded-lg p-2 relative
                        ${word.isSelected 
                          ? word.isVowel 
                            ? 'bg-purple-900/50 ring-2 ring-purple-400' 
                            : 'bg-red-900/50 ring-2 ring-red-400'
                          : 'bg-indigo-900/30 hover:bg-indigo-800/40 ring-1 ring-indigo-300/30'}
                        flex flex-col items-center justify-center
                        transition-all duration-300
                        ${word.isSelected ? 'cursor-default' : 'cursor-pointer'}
                        transform hover:scale-105
                      `}
                      onClick={() => !word.isSelected && handleWordClick(index)}
                      whileHover={!word.isSelected ? { scale: 1.05 } : {}}
                      whileTap={!word.isSelected ? { scale: 0.95 } : {}}
                    >
                      {/* Twinkling star effect */}
                      <div className="absolute inset-0 opacity-20">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                              left: Math.random() * 100 + '%',
                              top: Math.random() * 100 + '%',
                              animation: `twinkle ${Math.random() * 2 + 1}s infinite`,
                            }}
                          />
                        ))}
                      </div>

                      <span className="text-3xl mb-2 filter drop-shadow-lg">{word.emoji}</span>
                      <span className={`
                        text-lg font-bold
                        ${word.isSelected 
                          ? word.isVowel 
                            ? 'text-purple-200' 
                            : 'text-red-200'
                          : 'text-indigo-200'}
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
                      {/* Space-themed celebration emoji */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          scale: [1, 1.5, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-7xl">
                          {['🌟', '✨', '💫', '⭐', '🌠', '🚀'][Math.floor(Math.random() * 6)]}
                        </div>
                      </motion.div>

                      {/* Success message */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12
                                  bg-purple-900/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-lg font-bold text-purple-200 whitespace-nowrap">
                          {SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]}
                        </p>
                      </motion.div>

                      {/* Floating stars */}
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
                            {['🌟', '✨', '💫', '⭐', '🌠', '🚀'][i % 6]}
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
                    className="fixed inset-0 bg-black/70 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-indigo-900/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center"
                    >
                      <h2 className="text-3xl font-bold text-purple-300 mb-4">
                        Mission Complete! 🚀
                      </h2>
                      <p className="text-purple-200 mb-6">
                        You've discovered all the vowel constellations!
                      </p>
                      <button
                        onClick={handleReset}
                        className="bg-purple-600 text-white px-6 py-2 rounded-full
                                 hover:bg-purple-500 transition-colors"
                      >
                        Start New Mission
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Twinkling stars background */}
            <style>
              {`
                @keyframes twinkle {
                  0%, 100% { opacity: 0.2; }
                  50% { opacity: 1; }
                }
              `}
            </style>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default VowelWordsWorksheet; 