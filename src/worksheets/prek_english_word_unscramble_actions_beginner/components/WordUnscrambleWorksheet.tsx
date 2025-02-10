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
      { word: 'RUN', image: '🏃', scrambled: 'NUR', hint: 'Move fast with your legs' },
      { word: 'JUMP', image: '⬆️', scrambled: 'PMUJ', hint: 'Go up in the air' },
      { word: 'WALK', image: '🚶', scrambled: 'LAKW', hint: 'Move slowly on your feet' }
    ]
  },
  {
    level: 2,
    words: [
      { word: 'DANCE', image: '💃', scrambled: 'CNADE', hint: 'Move to music' },
      { word: 'SLEEP', image: '😴', scrambled: 'ELPSE', hint: 'Rest with eyes closed' },
      { word: 'SMILE', image: '😊', scrambled: 'LIMES', hint: 'Show happiness on your face' }
    ]
  },
  {
    level: 3,
    words: [
      { word: 'LAUGH', image: '😂', scrambled: 'GLAUH', hint: 'Make happy sounds' },
      { word: 'WRITE', image: '✍️', scrambled: 'TIRWE', hint: 'Make letters with a pen' },
      { word: 'CLAP', image: '👏', scrambled: 'PLAC', hint: 'Hit hands together' },
      { word: 'SING', image: '🎤', scrambled: 'GNSI', hint: 'Make music with your voice' }
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
        speak(`Correct! The action is ${targetWord.toLowerCase()}`, 0.8);
        
        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          colors: ['#3B82F6', '#60A5FA', '#93C5FD'], // Blue colors
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
            speak("Excellent! You've learned all the action words!");
            // Final celebration
            confetti({
              particleCount: 200,
              spread: 90,
              colors: ['#3B82F6', '#60A5FA', '#93C5FD'], // Blue colors
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
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
                  <h1 className="text-3xl font-bold text-center text-blue-600 mt-4 mb-4">
                    Action Words Fun! 🎯
                  </h1>
                  {!isComplete && (
                    <div className="text-center text-lg text-blue-500">
                      Level {currentLevel + 1} - Word {currentWordIndex + 1} of {LEVELS[currentLevel].words.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Game Area */}
              <div className="bg-white shadow-md py-6 border-y-2 border-blue-100">
                {isComplete ? (
                  <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">
                      🎉 Amazing Job! 🎉
                    </h2>
                    <p className="text-xl text-blue-500 mb-4">
                      You've learned all the action words!
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

                    {/* Hint Button */}
                    <div className="text-center mb-6">
                      <button
                        onClick={handleHintClick}
                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors"
                      >
                        💡 Need a Hint?
                      </button>
                    </div>

                    {/* Hint Display */}
                    {showHint && currentWord?.hint && (
                      <div className="text-center mb-6 text-blue-600 animate-fade-in">
                        {currentWord.hint}
                      </div>
                    )}

                    {/* Letter Placement Area - Improved mobile layout */}
                    <div className="flex justify-center mb-8">
                      <div className="flex flex-wrap gap-2 px-4 justify-center max-w-full">
                        {targetWord.split('').map((_, index) => (
                          <motion.div
                            key={index}
                            className={`w-14 h-14 rounded-lg flex items-center justify-center text-xl font-bold border-4 
                              ${isCorrect ? 'bg-green-100 border-green-400' : 'bg-blue-50 border-blue-200'}`}
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.3 }}
                          >
                            {selectedLetters[index]?.letter || ''}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Scrambled Letters - Improved mobile layout */}
                    <div className="flex justify-center mb-8">
                      <div className="flex flex-wrap gap-2 px-4 justify-center max-w-full">
                        {scrambledLetters.map((letter, index) => (
                          <motion.button
                            key={index}
                            className={`w-14 h-14 rounded-lg bg-white shadow-lg border-4 border-blue-300 
                              text-xl font-bold text-blue-600 hover:bg-blue-50 active:scale-95 transition-all
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