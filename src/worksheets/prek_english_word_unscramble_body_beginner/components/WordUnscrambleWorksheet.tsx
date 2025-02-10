import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import { speakLetter, speakWord, speakHint, speakCongrats } from './SpeechHelper';

interface Word {
  word: string;
  emoji: string;
  scrambled: string;
  hint: string;
  funFact?: string;
}

const LEVELS: { level: number; words: Word[] }[] = [
  {
    level: 1,
    words: [
      { word: 'ARM', emoji: '💪', scrambled: 'RAM', hint: 'You use this to lift things', funFact: 'Your arms have over 30 muscles!' },
      { word: 'LEG', emoji: '🦵', scrambled: 'GLE', hint: 'You use this to walk and run', funFact: 'Your legs are the strongest parts of your body!' },
      { word: 'EYE', emoji: '👁️', scrambled: 'YEE', hint: 'You see with these', funFact: 'Your eyes blink about 15-20 times every minute!' }
    ]
  },
  {
    level: 2,
    words: [
      { word: 'HAND', emoji: '🤚', scrambled: 'HADN', hint: 'You use this to grab things', funFact: 'Each hand has 27 bones!' },
      { word: 'FOOT', emoji: '🦶', scrambled: 'OTOF', hint: 'You wear shoes on these', funFact: 'Your feet have 26 bones each!' },
      { word: 'HEAD', emoji: '👤', scrambled: 'DAHE', hint: 'Where your brain lives', funFact: 'Your brain is the size of two fists put together!' }
    ]
  },
  {
    level: 3,
    words: [
      { word: 'MOUTH', emoji: '👄', scrambled: 'UHTMO', hint: 'You eat and talk with this', funFact: 'Your tongue has about 10,000 taste buds!' },
      { word: 'TEETH', emoji: '🦷', scrambled: 'EEHTT', hint: 'You chew with these', funFact: 'Adults have 32 teeth!' },
      { word: 'NOSE', emoji: '👃', scrambled: 'EONS', hint: 'You smell with this', funFact: 'You can smell over 1 trillion different scents!' },
      { word: 'EARS', emoji: '👂', scrambled: 'RASE', hint: 'You hear with these', funFact: 'Your ears never stop growing!' }
    ]
  }
];

const TOTAL_QUESTIONS = 10;
const POINTS_PER_QUESTION = 10;

// Fun animations for correct answers
const CELEBRATIONS = [
  '🎈', '🎉', '⭐', '🌟', '✨', '🎊', '🌈', '🦄', '🎯', '🎨'
];

const WordUnscrambleWorksheet: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<{letter: string, originalIndex: number}[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showFunFact, setShowFunFact] = useState(false);

  const currentWord = !isComplete ? LEVELS[currentLevel]?.words[currentWordIndex] : null;
  const scrambledLetters = currentWord?.scrambled.split('') || [];
  const targetWord = currentWord?.word || '';

  const handleLetterClick = useCallback((letter: string, index: number) => {
    if (selectedLetters.length < targetWord.length) {
      const isThisInstanceUsed = selectedLetters.some(sl => sl.originalIndex === index);
      if (!isThisInstanceUsed) {
        setSelectedLetters(prev => [...prev, { letter, originalIndex: index }]);
        speakLetter(letter);
      }
    }
  }, [selectedLetters.length, targetWord.length]);

  const handleHintClick = useCallback(() => {
    if (currentWord?.hint) {
      speakHint(currentWord.hint);
    }
  }, [currentWord?.hint]);

  const handleClear = useCallback(() => {
    setSelectedLetters([]);
    setIsCorrect(false);
    setShowFunFact(false);
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
        setShowFunFact(true);
        
        // Play success sound and speak the word
        const audio = new Audio('/success.mp3');
        audio.play().catch(() => {});
        
        speakWord(targetWord);
        setTimeout(speakCongrats, 1000);
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF69B4', '#FFD700', '#87CEEB', '#98FB98', '#DDA0DD']
        });

        setTimeout(() => {
          if (currentWordIndex < LEVELS[currentLevel].words.length - 1) {
            setCurrentWordIndex(prev => prev + 1);
            setSelectedLetters([]);
            setIsCorrect(false);
            setShowFunFact(false);
          } else if (currentLevel < LEVELS.length - 1) {
            setCurrentLevel(prev => prev + 1);
            setCurrentWordIndex(0);
            setSelectedLetters([]);
            setIsCorrect(false);
            setShowFunFact(false);
          } else {
            setIsComplete(true);
            confetti({
              particleCount: 200,
              spread: 90,
              origin: { y: 0.6 },
              colors: ['#FF69B4', '#FFD700', '#87CEEB', '#98FB98', '#DDA0DD']
            });
          }
        }, 3000);
      } else {
        markIncorrect();
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
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-purple-50">
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
              <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 py-4 shadow-md mb-6 border-y-2 border-pink-200">
                <div>
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={TOTAL_QUESTIONS * POINTS_PER_QUESTION}
                  />
                  <h1 className="text-3xl font-bold text-center text-pink-600 mt-4 mb-4">
                    Body Parts Word Fun! {CELEBRATIONS[Math.floor(Math.random() * CELEBRATIONS.length)]}
                  </h1>
                  {!isComplete && (
                    <div className="text-center text-lg text-pink-500">
                      Level {currentLevel + 1} - Word {currentWordIndex + 1} of {LEVELS[currentLevel].words.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Game Area */}
              <div className="bg-white shadow-md py-6 border-y-2 border-pink-200 rounded-2xl mx-4">
                {isComplete ? (
                  <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-pink-600 mb-4">
                      {CELEBRATIONS[Math.floor(Math.random() * CELEBRATIONS.length)]} Amazing Job! {CELEBRATIONS[Math.floor(Math.random() * CELEBRATIONS.length)]}
                    </h2>
                    <p className="text-xl text-pink-500 mb-4">
                      You've learned all the body part words!
                    </p>
                    <p className="text-lg text-gray-600">
                      Final Score: {score} / {TOTAL_QUESTIONS * POINTS_PER_QUESTION}
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Emoji Display */}
                    <div className="flex justify-center mb-8">
                      <motion.div
                        className="text-8xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {currentWord?.emoji}
                      </motion.div>
                    </div>

                    {/* Hint and Fun Fact */}
                    <div className="text-center mb-8">
                      <p 
                        className="text-lg text-gray-600 mb-2 cursor-pointer hover:text-pink-600 transition-colors"
                        onClick={handleHintClick}
                      >
                        Hint: {currentWord?.hint} 🔊
                      </p>
                      {showFunFact && currentWord?.funFact && (
                        <motion.p
                          className="text-lg text-purple-600 font-bold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          Fun Fact: {currentWord.funFact}
                        </motion.p>
                      )}
                    </div>

                    {/* Letter Placement Area */}
                    <div className="flex justify-center mb-8">
                      <div className="flex gap-4">
                        {targetWord.split('').map((_, index) => (
                          <motion.div
                            key={index}
                            className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold border-4 
                              ${isCorrect ? 'bg-green-100 border-green-400' : 'bg-pink-50 border-pink-300'}`}
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
                          className={`w-16 h-16 rounded-xl bg-white shadow-lg border-4 border-yellow-300 
                            text-2xl font-bold text-purple-600 hover:bg-yellow-50 active:scale-95 transition-all
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
                        className="px-6 py-3 bg-pink-500 text-white rounded-xl text-lg font-bold hover:bg-pink-600 active:scale-95 transition-all"
                      >
                        Clear
                      </button>
                      <button
                        onClick={() => checkAnswer(markAttempted, markCorrect, markIncorrect)}
                        className="px-6 py-3 bg-purple-500 text-white rounded-xl text-lg font-bold hover:bg-purple-600 active:scale-95 transition-all"
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