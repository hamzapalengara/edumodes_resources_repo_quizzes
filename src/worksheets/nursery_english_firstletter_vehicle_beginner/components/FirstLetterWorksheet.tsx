import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface Word {
  id: number;
  word: string;
  options: string[];
  correctLetter: string;
}

const words: Word[] = [
  { id: 1, word: "car", options: ["c", "b", "t"], correctLetter: "c" },
  { id: 2, word: "bus", options: ["p", "b", "d"], correctLetter: "b" },
  { id: 3, word: "train", options: ["d", "t", "p"], correctLetter: "t" },
  { id: 4, word: "plane", options: ["b", "t", "p"], correctLetter: "p" },
  { id: 5, word: "ship", options: ["f", "s", "l"], correctLetter: "s" },
  { id: 6, word: "truck", options: ["t", "p", "f"], correctLetter: "t" },
  { id: 7, word: "bike", options: ["p", "b", "d"], correctLetter: "b" },
  { id: 8, word: "van", options: ["w", "v", "b"], correctLetter: "v" },
  { id: 9, word: "taxi", options: ["p", "t", "d"], correctLetter: "t" },
  { id: 10, word: "rocket", options: ["p", "r", "n"], correctLetter: "r" }
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface RoadSignProps {
  letter: string;
  onClick: () => void;
  isSelected: boolean;
  isCorrect: boolean | null;
}

const RoadSign: React.FC<RoadSignProps> = ({ letter, onClick, isSelected, isCorrect }) => {
  let bgColor = "from-yellow-400 to-yellow-500";
  let ringColor = "ring-yellow-600";
  
  if (isSelected) {
    if (isCorrect) {
      bgColor = "from-green-400 to-green-500";
      ringColor = "ring-green-600";
    } else if (isCorrect === false) {
      bgColor = "from-red-400 to-red-500";
      ringColor = "ring-red-600";
    }
  }

  return (
    <motion.button
      className={`w-20 h-20 rounded-full bg-gradient-to-b ${bgColor} shadow-lg ring-4 ${ringColor} 
                 flex items-center justify-center transform transition-all duration-200
                 hover:scale-110 active:scale-95 focus:outline-none`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <span className="text-3xl font-bold text-white select-none">
        {letter.toUpperCase()}
      </span>
    </motion.button>
  );
};

const FirstLetterWorksheet: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledWords] = useState(() => shuffleArray(words));
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
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

  const moveToNextWord = () => {
    setSelectedLetter(null);
    setIsCorrect(null);
    if (currentWordIndex < shuffledWords.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleSignClick = (
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
        setIsCorrect(null);
        setIsProcessing(false);
      }, 1000);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-100">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6 mb-6">
              {!isCompleted ? (
                <>
                  {/* Current Word Display */}
                  <div className="text-center mb-8">
                    <button
                      onClick={() => speakWord(shuffledWords[currentWordIndex].word)}
                      className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6 py-3 rounded-full flex items-center gap-2 mx-auto text-lg"
                    >
                      <span>🔊</span>
                      Listen to the Vehicle
                    </button>
                  </div>

                  {/* Road Signs */}
                  <div className="flex justify-center gap-4 md:gap-8 mt-8">
                    <AnimatePresence mode="wait">
                      {shuffledWords[currentWordIndex].options.map((letter, index) => (
                        <RoadSign
                          key={`${currentWordIndex}-${index}`}
                          letter={letter}
                          onClick={() => handleSignClick(letter, markAttempted, markCorrect, markIncorrect)}
                          isSelected={selectedLetter === letter}
                          isCorrect={selectedLetter === letter ? isCorrect : null}
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
                        Listen to the vehicle name and click the road sign with the correct first letter!
                        <button
                          onClick={() => setShowInstruction(false)}
                          className="ml-2 text-blue-600 hover:text-blue-700"
                        >
                          Got it!
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    Congratulations! 🎉
                  </h2>
                  <p className="text-gray-600">
                    You've completed all the words! Great job learning vehicle names!
                  </p>
                  <button
                    onClick={() => {
                      setCurrentWordIndex(0);
                      setIsCompleted(false);
                    }}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
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