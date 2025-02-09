import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface Word {
  word: string;
  image: string;
  scrambled: string;
  hint?: string;
}

const LEVELS: { level: number; words: Word[] }[] = [
  {
    level: 1,
    words: [
      { word: 'LION', image: '🦁', scrambled: 'NOLI', hint: 'King of the jungle' },
      { word: 'BEAR', image: '🐻', scrambled: 'ABRE', hint: 'Loves honey' },
      { word: 'WOLF', image: '🐺', scrambled: 'FOWL', hint: 'Howls at the moon' }
    ]
  },
  {
    level: 2,
    words: [
      { word: 'TIGER', image: '🐯', scrambled: 'GRITE', hint: 'Has stripes' },
      { word: 'SNAKE', image: '🐍', scrambled: 'KEANS', hint: 'Slithers around' },
      { word: 'EAGLE', image: '🦅', scrambled: 'GEALE', hint: 'King of the sky' }
    ]
  },
  {
    level: 3,
    words: [
      { word: 'ZEBRA', image: '🦓', scrambled: 'BRAZE', hint: 'Has black and white stripes' },
      { word: 'HIPPO', image: '🦛', scrambled: 'POHIP', hint: 'Lives in the water' },
      { word: 'RHINO', image: '🦏', scrambled: 'NIRHO', hint: 'Has a horn' },
      { word: 'PANDA', image: '🐼', scrambled: 'NADAP', hint: 'Eats bamboo' }
    ]
  }
];

const TOTAL_QUESTIONS = 10; // Total number of words
const POINTS_PER_QUESTION = 10; // Points per word

const WordUnscrambleWorksheet: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<{letter: string, originalIndex: number}[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentWord = !isComplete ? LEVELS[currentLevel]?.words[currentWordIndex] : null;
  const scrambledLetters = currentWord?.scrambled.split('') || [];
  const targetWord = currentWord?.word || '';

  const handleLetterClick = useCallback((letter: string, index: number) => {
    if (selectedLetters.length < targetWord.length) {
      const isThisInstanceUsed = selectedLetters.some(sl => sl.originalIndex === index);
      if (!isThisInstanceUsed) {
        setSelectedLetters(prev => [...prev, { letter, originalIndex: index }]);
      }
    }
  }, [selectedLetters.length, targetWord.length]);

  const handleClear = useCallback(() => {
    setSelectedLetters([]);
    setIsCorrect(false);
  }, []);

  const checkAnswer = useCallback((
    markAttempted: () => void,
    markCorrect: () => void,
    markIncorrect: () => void
  ) => {
    if (selectedLetters.length === targetWord.length) {
      markAttempted();
      const attempt = selectedLetters.map(sl => sl.letter).join('');
      if (attempt === targetWord) {
        markCorrect();
        setIsCorrect(true);
        setShowHint(false);
        
        // Play success sound
        const audio = new Audio('/success.mp3');
        audio.play().catch(() => {});
        
        // Trigger jungle-themed confetti
        confetti({
          particleCount: 100,
          spread: 70,
          colors: ['#4CAF50', '#8BC34A', '#CDDC39'], // Jungle colors
          origin: { y: 0.6 }
        });

        // Move to next word after delay
        setTimeout(() => {
          if (currentWordIndex < LEVELS[currentLevel].words.length - 1) {
            setCurrentWordIndex(prev => prev + 1);
            setSelectedLetters([]);
            setIsCorrect(false);
          } else if (currentLevel < LEVELS.length - 1) {
            setCurrentLevel(prev => prev + 1);
            setCurrentWordIndex(0);
            setSelectedLetters([]);
            setIsCorrect(false);
          } else {
            setIsComplete(true);
            // Final celebration
            confetti({
              particleCount: 200,
              spread: 90,
              colors: ['#4CAF50', '#8BC34A', '#CDDC39'], // Jungle colors
              origin: { y: 0.6 }
            });
          }
        }, 2000);
      } else {
        markIncorrect();
        // Play error sound
        const audio = new Audio('/error.mp3');
        audio.play().catch(() => {});
        
        setTimeout(() => {
          setSelectedLetters([]);
        }, 1000);
      }
    }
  }, [currentLevel, currentWordIndex, selectedLetters, targetWord]);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={TOTAL_QUESTIONS}
        pointsPerQuestion={POINTS_PER_QUESTION}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markAttempted, markIncorrect, score }) => (
          <div className="p-4">
            <div className="max-w-4xl mx-auto">
              {/* Score Display */}
              <div className="bg-green-50 p-4 shadow-md mb-6 rounded-xl border-2 border-green-100">
                <div className="max-w-4xl mx-auto">
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={TOTAL_QUESTIONS * POINTS_PER_QUESTION}
                  />
                  <h1 className="text-3xl font-bold text-center text-green-700 mt-4 mb-4">
                    Jungle Word Safari! 🌴
                  </h1>
                  {!isComplete && (
                    <div className="text-center text-lg text-green-600">
                      Level {currentLevel + 1} - Animal {currentWordIndex + 1} of {LEVELS[currentLevel].words.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Game Area */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-100">
                {isComplete ? (
                  <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-green-700 mb-4">
                      🎉 Congratulations, Safari Explorer! 🎉
                    </h2>
                    <p className="text-xl text-green-600 mb-4">
                      You've discovered all the jungle animals!
                    </p>
                    <p className="text-lg text-gray-600">
                      Final Score: {score} / {TOTAL_QUESTIONS * POINTS_PER_QUESTION}
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Image Hint */}
                    <div className="flex justify-center mb-6">
                      <div className="text-8xl animate-bounce">
                        {currentWord?.image}
                      </div>
                    </div>

                    {/* Hint Button and Display */}
                    <div className="text-center mb-6">
                      <button
                        onClick={() => setShowHint(!showHint)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-bold hover:bg-yellow-600 active:scale-95 transition-all"
                      >
                        {showHint ? 'Hide Hint' : 'Show Hint'} 💡
                      </button>
                      {showHint && currentWord?.hint && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-yellow-700"
                        >
                          Hint: {currentWord.hint}
                        </motion.p>
                      )}
                    </div>

                    {/* Letter Placement Area */}
                    <div className="flex justify-center mb-8">
                      <div className="flex gap-4">
                        {targetWord.split('').map((_, index) => (
                          <motion.div
                            key={index}
                            className={`w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold border-4 
                              ${isCorrect ? 'bg-green-100 border-green-400' : 'bg-yellow-50 border-yellow-300'}`}
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.3 }}
                          >
                            {selectedLetters[index]?.letter || ''}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Scrambled Letters */}
                    <div className="flex justify-center gap-4 mb-8">
                      {scrambledLetters.map((letter, index) => (
                        <motion.button
                          key={index}
                          className={`w-16 h-16 rounded-lg bg-white shadow-lg border-4 border-green-300 
                            text-2xl font-bold text-green-600 hover:bg-green-50 active:scale-95 transition-all
                            ${selectedLetters.some(sl => sl.originalIndex === index) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                          onClick={() => handleLetterClick(letter, index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={selectedLetters.some(sl => sl.originalIndex === index)}
                        >
                          {letter}
                        </motion.button>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={handleClear}
                        className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-bold hover:bg-red-600 active:scale-95 transition-all"
                      >
                        Clear
                      </button>
                      <button
                        onClick={() => checkAnswer(markAttempted, markCorrect, markIncorrect)}
                        className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-bold hover:bg-green-700 active:scale-95 transition-all"
                      >
                        Check
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default WordUnscrambleWorksheet; 