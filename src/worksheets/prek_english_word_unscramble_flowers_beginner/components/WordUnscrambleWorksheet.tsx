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
      { word: 'ROSE', image: '🌹', scrambled: 'OSER', hint: 'A romantic red flower' },
      { word: 'LILY', image: '🌸', scrambled: 'LLIY', hint: 'A pure white flower' },
      { word: 'IRIS', image: '🌺', scrambled: 'RIIS', hint: 'A purple garden beauty' }
    ]
  },
  {
    level: 2,
    words: [
      { word: 'DAISY', image: '🌼', scrambled: 'YADIS', hint: 'White petals with yellow center' },
      { word: 'TULIP', image: '🌷', scrambled: 'PILUT', hint: 'Spring flower in many colors' },
      { word: 'LOTUS', image: '💮', scrambled: 'SOTUL', hint: 'Grows in water' }
    ]
  },
  {
    level: 3,
    words: [
      { word: 'ORCHID', image: '🌺', scrambled: 'DCHIOR', hint: 'An exotic indoor flower' },
      { word: 'POPPY', image: '🌸', scrambled: 'PYPPO', hint: 'Bright red wild flower' },
      { word: 'VIOLET', image: '💜', scrambled: 'TVIOLE', hint: 'Small purple flower' },
      { word: 'DAHLIA', image: '🌸', scrambled: 'AHLIDA', hint: 'Large colorful garden flower' }
    ]
  }
];

// Calculate total questions based on all words across levels
const TOTAL_QUESTIONS = LEVELS.reduce((acc, level) => acc + level.words.length, 0);
const POINTS_PER_QUESTION = 10;

const WordUnscrambleWorksheet: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<{letter: string, originalIndex: number}[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [completedWords, setCompletedWords] = useState<boolean[]>(Array(TOTAL_QUESTIONS).fill(false));

  const currentWord = !isComplete ? LEVELS[currentLevel]?.words[currentWordIndex] : null;
  const scrambledLetters = currentWord?.scrambled.split('') || [];
  const targetWord = currentWord?.word || '';

  // Calculate the global word index across all levels
  const getGlobalWordIndex = useCallback(() => {
    let index = currentWordIndex;
    for (let i = 0; i < currentLevel; i++) {
      index += LEVELS[i].words.length;
    }
    return index;
  }, [currentLevel, currentWordIndex]);

  // Speech synthesis
  const speak = useCallback((text: string, rate: number = 0.8) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleLetterClick = useCallback((letter: string, index: number) => {
    if (selectedLetters.length < targetWord.length) {
      const isThisInstanceUsed = selectedLetters.some(sl => sl.originalIndex === index);
      if (!isThisInstanceUsed) {
        // Speak the letter when clicked
        speak(letter);
        setSelectedLetters(prev => [...prev, { letter, originalIndex: index }]);
      }
    }
  }, [selectedLetters.length, targetWord.length, speak]);

  const handleClear = useCallback(() => {
    setSelectedLetters([]);
    setIsCorrect(false);
    speak("Let's try again");
  }, [speak]);

  const handleHintClick = useCallback(() => {
    setShowHint(true);
    if (currentWord?.hint) {
      speak(currentWord.hint);
    }
    setTimeout(() => setShowHint(false), 3000);
  }, [currentWord?.hint, speak]);

  const checkAnswer = useCallback((
    markAttempted: () => void,
    markCorrect: () => void,
    markIncorrect: () => void
  ) => {
    if (selectedLetters.length === targetWord.length) {
      const globalWordIndex = getGlobalWordIndex();
      markAttempted();
      
      const attempt = selectedLetters.map(sl => sl.letter).join('');
      if (attempt === targetWord && !completedWords[globalWordIndex]) {
        markCorrect();
        setIsCorrect(true);
        setShowHint(false);
        
        // Update completed words tracking
        const newCompletedWords = [...completedWords];
        newCompletedWords[globalWordIndex] = true;
        setCompletedWords(newCompletedWords);
        
        // Play success sound and speak the word
        const audio = new Audio('/success.mp3');
        audio.play().catch(() => {});
        speak(`Correct! This is a ${targetWord.toLowerCase()}`, 0.8);
        
        // Trigger flower-themed confetti
        confetti({
          particleCount: 100,
          spread: 70,
          colors: ['#FF69B4', '#FF1493', '#FFB6C1'], // Pink flower colors
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
            speak("Great job! Let's try the next level!");
          } else {
            setIsComplete(true);
            speak("Excellent! You've completed all the flower words!");
            // Final celebration
            confetti({
              particleCount: 200,
              spread: 90,
              colors: ['#FF69B4', '#FF1493', '#FFB6C1'], // Pink flower colors
              origin: { y: 0.6 }
            });
          }
        }, 2000);
      } else {
        if (!completedWords[globalWordIndex]) {
          markIncorrect();
          speak("Try again!");
          // Play error sound
          const audio = new Audio('/error.mp3');
          audio.play().catch(() => {});
          
          setTimeout(() => {
            setSelectedLetters([]);
          }, 1000);
        }
      }
    }
  }, [currentLevel, currentWordIndex, selectedLetters, targetWord, completedWords, getGlobalWordIndex, speak]);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
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
              <div className="bg-pink-50 py-4 shadow-md mb-6 border-y-2 border-pink-100">
                <div>
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={TOTAL_QUESTIONS * POINTS_PER_QUESTION}
                  />
                  <h1 className="text-3xl font-bold text-center text-pink-600 mt-4 mb-4">
                    Flower Word Garden! 🌸
                  </h1>
                  {!isComplete && (
                    <div className="text-center text-lg text-pink-500">
                      Level {currentLevel + 1} - Word {currentWordIndex + 1} of {LEVELS[currentLevel].words.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Game Area */}
              <div className="bg-white shadow-md py-6 border-y-2 border-pink-100">
                {isComplete ? (
                  <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-pink-600 mb-4">
                      🌸 Congratulations, Garden Explorer! 🌸
                    </h2>
                    <p className="text-xl text-pink-500 mb-4">
                      You've discovered all the beautiful flowers!
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
                        onClick={handleHintClick}
                        className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm hover:bg-pink-200 transition-colors"
                      >
                        💡 Need a Hint?
                      </button>
                    </div>

                    {/* Hint Display */}
                    {showHint && currentWord?.hint && (
                      <div className="text-center mb-6 text-pink-600 animate-fade-in">
                        {currentWord.hint}
                      </div>
                    )}

                    {/* Letter Placement Area */}
                    <div className="flex justify-center mb-8 overflow-x-auto">
                      <div className="flex gap-2 px-2">
                        {targetWord.split('').map((_, index) => (
                          <motion.div
                            key={index}
                            className={`w-14 h-14 rounded-lg flex items-center justify-center text-xl font-bold border-4 
                              ${isCorrect ? 'bg-green-100 border-green-400' : 'bg-rose-50 border-rose-200'}`}
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
                    <div className="flex justify-center gap-2 mb-8 overflow-x-auto">
                      <div className="flex gap-2 px-2">
                        {scrambledLetters.map((letter, index) => (
                          <motion.button
                            key={index}
                            className={`w-14 h-14 rounded-lg bg-white shadow-lg border-4 border-pink-300 
                              text-xl font-bold text-pink-600 hover:bg-pink-50 active:scale-95 transition-all
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
                        className="px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-bold hover:bg-pink-600 active:scale-95 transition-all"
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