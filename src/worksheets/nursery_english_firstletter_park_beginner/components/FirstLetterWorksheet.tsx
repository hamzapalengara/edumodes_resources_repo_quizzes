import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  { id: 1, word: "swing", emoji: "", options: ["s", "p", "t"], correctLetter: "s" },
  { id: 2, word: "park", emoji: "", options: ["b", "p", "d"], correctLetter: "p" },
  { id: 3, word: "tree", emoji: "", options: ["d", "t", "p"], correctLetter: "t" },
  { id: 4, word: "ball", emoji: "", options: ["p", "d", "b"], correctLetter: "b" },
  { id: 5, word: "slide", emoji: "", options: ["f", "s", "l"], correctLetter: "s" },
  { id: 6, word: "flower", emoji: "", options: ["t", "p", "f"], correctLetter: "f" },
  { id: 7, word: "grass", emoji: "", options: ["c", "g", "d"], correctLetter: "g" },
  { id: 8, word: "monkey", emoji: "", options: ["n", "p", "m"], correctLetter: "m" },
  { id: 9, word: "leaf", emoji: "", options: ["r", "l", "k"], correctLetter: "l" },
  { id: 10, word: "rope", emoji: "", options: ["p", "r", "n"], correctLetter: "r" }
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const BALLOON_COLORS = [
  'from-red-400 to-red-500',
  'from-blue-400 to-blue-500',
  'from-yellow-400 to-yellow-500',
  'from-green-400 to-green-500',
  'from-purple-400 to-purple-500',
  'from-pink-400 to-pink-500'
];

interface BalloonProps {
  letter: string;
  onClick: () => void;
  color: string;
  isCorrect: boolean;
}

const Balloon: React.FC<BalloonProps> = ({ letter, onClick, color, isCorrect }) => {
  return (
    <motion.div
      className="relative cursor-pointer select-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      initial={{ y: 0 }}
      animate={isCorrect ? { 
        y: [-10, -20, -30, -40, -50],
        opacity: [1, 0.8, 0.6, 0.4, 0],
        scale: [1, 1.2, 1.4, 1.6, 2]
      } : { y: [0, -5, 0] }}
      transition={isCorrect ? {
        duration: 0.5,
        times: [0, 0.2, 0.4, 0.6, 0.8]
      } : {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {/* Balloon */}
      <div className={`w-16 h-20 rounded-full bg-gradient-to-b ${color} shadow-lg transform -skew-y-2 flex items-center justify-center relative`}>
        <span className="text-2xl font-bold text-white">{letter.toUpperCase()}</span>
        {/* Balloon shine */}
        <div className="absolute top-2 left-2 w-4 h-4 bg-white opacity-30 rounded-full"></div>
      </div>
      {/* Balloon string */}
      <div className="w-0.5 h-8 bg-gray-400 mx-auto mt-0.5 transform -skew-x-2"></div>
    </motion.div>
  );
};

const FirstLetterWorksheet: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledWords] = useState(() => shuffleArray(words));
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    const loadVoices = () => {
      return new Promise<void>((resolve) => {
        if (voices.length > 0) {
          resolve();
        } else {
          synth.addEventListener('voiceschanged', () => {
            resolve();
          }, { once: true });
        }
      });
    };

    loadVoices().then(() => {
      if (currentWordIndex < shuffledWords.length) {
        speakWord(shuffledWords[currentWordIndex].word);
      }
    });
  }, [currentWordIndex, shuffledWords]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const speakWord = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const playPopSound = () => {
    const audio = new Audio('/assets/sounds/pop.mp3');
    audio.play();
  };

  const moveToNextWord = () => {
    setSelectedLetter(null);
    setIsCorrect(false);
    if (currentWordIndex < shuffledWords.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBalloonClick = (
    letter: string,
    markAttempted: () => void,
    markCorrect: () => void,
    markIncorrect: () => void
  ) => {
    if (selectedLetter !== null || isProcessing) return;
    
    setSelectedLetter(letter);
    setIsProcessing(true);
    const currentWord = shuffledWords[currentWordIndex];
    const correct = letter === currentWord.correctLetter;
    setIsCorrect(correct);

    if (correct) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      playPopSound();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4ade80', '#22c55e', '#16a34a']
      });

      markAttempted();
      markCorrect();

      timeoutRef.current = setTimeout(() => {
        moveToNextWord();
        setIsProcessing(false);
      }, 1500);
    } else {
      markAttempted();
      markIncorrect();
      
      timeoutRef.current = setTimeout(() => {
        setSelectedLetter(null);
        setIsCorrect(false);
        setIsProcessing(false);
      }, 1000);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={words.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markAttempted, markIncorrect, score }) => (
          <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
            {/* Score Display */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mb-6 p-4">
              <ScoreDisplay score={score} totalQuestions={words.length * 10} />
            </div>

            {/* Main Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-6">
              {!isCompleted ? (
                <>
                  {/* Current Word Display */}
                  <div className="text-center mb-8">
                    <button
                      onClick={() => speakWord(shuffledWords[currentWordIndex].word)}
                      className="bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-full flex items-center gap-2 mx-auto text-lg"
                    >
                      <span>🔊</span>
                      Listen to the Word
                    </button>
                  </div>

                  {/* Balloons */}
                  <div className="flex justify-center gap-8 mt-8">
                    <AnimatePresence mode="wait">
                      {shuffledWords[currentWordIndex].options.map((letter, index) => (
                        <Balloon
                          key={`${currentWordIndex}-${index}`}
                          letter={letter}
                          onClick={() => handleBalloonClick(letter, markAttempted, markCorrect, markIncorrect)}
                          color={BALLOON_COLORS[index % BALLOON_COLORS.length]}
                          isCorrect={selectedLetter === letter && isCorrect}
                        />
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Instructions */}
                  <AnimatePresence>
                    {showInstruction && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center mt-8 text-gray-600"
                      >
                        Listen to the word and pop the balloon with the correct first letter!
                        <button
                          onClick={() => setShowInstruction(false)}
                          className="ml-2 text-green-600 hover:text-green-700"
                        >
                          Got it!
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-green-800 mb-4">
                    Congratulations! 🎉
                  </h2>
                  <p className="text-gray-600">
                    You've completed all the words! Great job learning first letters!
                  </p>
                  <button
                    onClick={() => {
                      setCurrentWordIndex(0);
                      setIsCompleted(false);
                    }}
                    className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full"
                  >
                    Play Again
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default FirstLetterWorksheet; 