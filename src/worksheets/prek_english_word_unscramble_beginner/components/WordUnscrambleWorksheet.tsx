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
}

const LEVELS: { level: number; words: Word[] }[] = [
  {
    level: 1,
    words: [
      { word: 'CAT', image: '🐱', scrambled: 'TCA' },
      { word: 'DOG', image: '🐶', scrambled: 'GDO' },
      { word: 'SUN', image: '☀️', scrambled: 'NSU' },
      { word: 'HAT', image: '🎩', scrambled: 'THA' }
    ]
  },
  {
    level: 2,
    words: [
      { word: 'BED', image: '🛏️', scrambled: 'DBE' },
      { word: 'BAG', image: '👜', scrambled: 'BGA' },
      { word: 'FISH', image: '🐠', scrambled: 'HSIF' }
    ]
  },
  {
    level: 3,
    words: [
      { word: 'STAR', image: '⭐', scrambled: 'RATS' },
      { word: 'CAKE', image: '🎂', scrambled: 'EKAC' },
      { word: 'TREE', image: '🌳', scrambled: 'ERET' }
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
        
        // Play success sound
        const audio = new Audio('/success.mp3');
        audio.play().catch(() => {});
        
        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={TOTAL_QUESTIONS}
        pointsPerQuestion={POINTS_PER_QUESTION}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markAttempted, markIncorrect, score }) => (
          <div className="py-4">
            <div>
              {/* Score Display */}
              <div className="bg-blue-50 py-4 shadow-md mb-6 border-y-2 border-blue-100">
                <div>
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={TOTAL_QUESTIONS * POINTS_PER_QUESTION}
                  />
                  <h1 className="text-3xl font-bold text-center text-purple-600 mt-4 mb-4">
                    Word Unscramble Fun!
                  </h1>
                  {!isComplete && (
                    <div className="text-center text-lg text-purple-500">
                      Level {currentLevel + 1} - Word {currentWordIndex + 1} of {LEVELS[currentLevel].words.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Game Area */}
              <div className="bg-white shadow-md py-6 border-y-2 border-blue-100">
                {isComplete ? (
                  <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-purple-600 mb-4">
                      🎉 Congratulations! 🎉
                    </h2>
                    <p className="text-xl text-purple-500 mb-4">
                      You've completed all the words!
                    </p>
                    <p className="text-lg text-gray-600">
                      Final Score: {score} / {TOTAL_QUESTIONS * POINTS_PER_QUESTION}
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Image Hint */}
                    <div className="flex justify-center mb-8">
                      <div className="text-8xl animate-bounce">
                        {currentWord?.image}
                      </div>
                    </div>

                    {/* Letter Placement Area */}
                    <div className="flex justify-center mb-8">
                      <div className="flex gap-4">
                        {targetWord.split('').map((_, index) => (
                          <motion.div
                            key={index}
                            className={`w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold border-4 
                              ${isCorrect ? 'bg-green-100 border-green-400' : 'bg-purple-50 border-purple-300'}`}
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
                          className={`w-16 h-16 rounded-lg bg-white shadow-lg border-4 border-blue-300 
                            text-2xl font-bold text-blue-600 hover:bg-blue-50 active:scale-95 transition-all
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
                        className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-bold hover:bg-green-600 active:scale-95 transition-all"
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