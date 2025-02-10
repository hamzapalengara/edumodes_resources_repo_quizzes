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

const LEVELS: { level: number; title: string; words: Word[] }[] = [
  {
    level: 1,
    title: "School Items",
    words: [
      { 
        word: 'BOOK', 
        emoji: '📚', 
        scrambled: 'OKBO', 
        hint: 'We read stories in this', 
        funFact: 'The first books were written on clay tablets!' 
      },
      { 
        word: 'DESK', 
        emoji: '🪑', 
        scrambled: 'EKSD', 
        hint: 'You sit and work at this', 
        funFact: 'School desks were first used over 130 years ago!' 
      },
      { 
        word: 'PEN', 
        emoji: '✏️', 
        scrambled: 'NEP', 
        hint: 'You write with this', 
        funFact: 'The first pens were made from bird feathers!' 
      }
    ]
  },
  {
    level: 2,
    title: "Home Objects",
    words: [
      { 
        word: 'LAMP', 
        emoji: '💡', 
        scrambled: 'APLM', 
        hint: 'Gives us light at home', 
        funFact: 'The first lamp was invented over 70,000 years ago!' 
      },
      { 
        word: 'DOOR', 
        emoji: '🚪', 
        scrambled: 'ODRO', 
        hint: 'You walk through this', 
        funFact: 'The tallest door in the world is 495 feet high!' 
      },
      { 
        word: 'CLOCK', 
        emoji: '⏰', 
        scrambled: 'KOLCC', 
        hint: 'Tells us the time', 
        funFact: 'The first alarm clock could only ring at 4 AM!' 
      }
    ]
  },
  {
    level: 3,
    title: "Daily Activities",
    words: [
      { 
        word: 'PLAY', 
        emoji: '🎮', 
        scrambled: 'YALP', 
        hint: 'Having fun with toys or games', 
        funFact: 'Playing helps your brain grow stronger!' 
      },
      { 
        word: 'WASH', 
        emoji: '🚿', 
        scrambled: 'HSWA', 
        hint: 'Getting clean with water', 
        funFact: 'We use about 17 gallons of water in a shower!' 
      },
      { 
        word: 'READ', 
        emoji: '📖', 
        scrambled: 'DERA', 
        hint: 'Looking at words in a book', 
        funFact: 'Reading makes you smarter every day!' 
      },
      { 
        word: 'DRAW', 
        emoji: '🎨', 
        scrambled: 'WADR', 
        hint: 'Making pictures with colors', 
        funFact: 'The first crayons were made in 1903!' 
      }
    ]
  }
];

const TOTAL_QUESTIONS = 10;
const POINTS_PER_QUESTION = 10;

const CELEBRATIONS = [
  '🎈', '🎉', '⭐', '🌟', '✨', '🎊', '🌈', '🎨', '🎯', '🎪'
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
          colors: ['#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C']
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
              colors: ['#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C']
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={TOTAL_QUESTIONS}
        pointsPerQuestion={POINTS_PER_QUESTION}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ score, markCorrect, markIncorrect, markAttempted }) => (
          <div className="px-0 py-4 md:px-4">
            <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto overflow-hidden">
              <div className="p-4">
                <ScoreDisplay score={score} totalQuestions={TOTAL_QUESTIONS * POINTS_PER_QUESTION} />

                {!isComplete ? (
                  <>
                    {/* Level Title */}
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-purple-600">
                        Level {currentLevel + 1}: {LEVELS[currentLevel].title}
                      </h2>
                      <p className="text-gray-600">
                        Word {currentWordIndex + 1} of {LEVELS[currentLevel].words.length}
                      </p>
                    </div>

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
                        className="text-lg text-gray-600 mb-2 cursor-pointer hover:text-purple-600 transition-colors"
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
                      {scrambledLetters.map((letter, index) => {
                        const isUsed = selectedLetters.some(sl => sl.originalIndex === index);
                        return (
                          <motion.div
                            key={index}
                            className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold cursor-pointer
                              ${isUsed ? 'bg-gray-100 border-gray-300' : 'bg-white border-purple-300 hover:bg-purple-100'} 
                              border-4 transition-colors`}
                            onClick={() => !isUsed && handleLetterClick(letter, index)}
                            whileHover={{ scale: isUsed ? 1 : 1.1 }}
                            whileTap={{ scale: isUsed ? 1 : 0.95 }}
                          >
                            {isUsed ? '' : letter}
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={handleClear}
                        className="px-6 py-3 bg-gray-500 text-white rounded-lg text-lg font-bold hover:bg-gray-600 active:scale-95 transition-all"
                      >
                        Clear
                      </button>
                      <button
                        onClick={() => checkAnswer(markAttempted, markCorrect, markIncorrect)}
                        className="px-6 py-3 bg-purple-500 text-white rounded-lg text-lg font-bold hover:bg-purple-600 active:scale-95 transition-all"
                      >
                        Check
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-purple-600 mb-4">
                      Congratulations! 🎉
                    </h2>
                    <p className="text-xl text-gray-600">
                      You've completed all the levels!
                    </p>
                    <div className="flex justify-center gap-2 mt-4">
                      {CELEBRATIONS.map((emoji, index) => (
                        <motion.span
                          key={index}
                          className="text-4xl"
                          animate={{ y: [0, -20, 0] }}
                          transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
                        >
                          {emoji}
                        </motion.span>
                      ))}
                    </div>
                  </div>
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