import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import { speakLetter, speakHint, speakCongrats } from './SpeechHelper';

interface Word {
  word: string;
  emoji: string;
  scrambled: string;
  hint: string;
  funFact?: string;
}

const LEVELS: { title: string; words: Word[] }[] = [
  {
    title: "Easy Veggies",
    words: [
      { word: 'BEAN', emoji: '🫛', scrambled: 'EANB', hint: 'Green pods with seeds', funFact: 'Beans are full of protein!' },
      { word: 'CORN', emoji: '🌽', scrambled: 'NOCR', hint: 'Yellow kernels on a cob', funFact: 'Each ear has 800 kernels!' },
      { word: 'PEAS', emoji: '🫛', scrambled: 'ASPE', hint: 'Small round green veggies', funFact: 'One of the oldest crops!' }
    ]
  },
  {
    title: "Common Veggies",
    words: [
      { word: 'KALE', emoji: '🥬', scrambled: 'ELKA', hint: 'Curly green leaves', funFact: 'Super healthy green!' },
      { word: 'GARLIC', emoji: '🧄', scrambled: 'LICGAR', hint: 'Strong smelling bulb', funFact: 'Used as medicine for ages!' },
      { word: 'GINGER', emoji: '🫚', scrambled: 'GERING', hint: 'Spicy root', funFact: 'Helps upset stomachs!' }
    ]
  },
  {
    title: "More Veggies",
    words: [
      { word: 'CARROT', emoji: '🥕', scrambled: 'RTACRO', hint: 'Orange and long', funFact: 'Helps night vision!' },
      { word: 'CABBAGE', emoji: '🥬', scrambled: 'BEGCAB', hint: 'Round leafy head', funFact: 'Very ancient vegetable!' },
      { word: 'SPINACH', emoji: '🥬', scrambled: 'CHSPINA', hint: 'Dark green leaves', funFact: 'Makes you strong!' },
      { word: 'PUMPKIN', emoji: '🎃', scrambled: 'KINPUMP', hint: 'Halloween vegetable', funFact: 'Can grow huge!' }
    ]
  }
];

const WordUnscrambleWorksheet: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const word = LEVELS[currentLevel].words[currentWord];
  const scrambledLetters = word.scrambled.split('');
  const emptySpaces = word.word.length;

  const handleLetterClick = (letter: string) => {
    if (selectedLetters.length < emptySpaces) {
      setSelectedLetters([...selectedLetters, letter]);
      speakLetter(letter);
    }
  };

  const clearSelection = () => {
    setSelectedLetters([]);
    setShowHint(false);
  };

  const checkAnswer = (markAttempted: () => void, markCorrect: () => void, markIncorrect: () => void) => {
    markAttempted();
    const answer = selectedLetters.join('');
    
    if (answer === word.word) {
      setShowSuccess(true);
      markCorrect();
      speakCongrats();
      
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedLetters([]);
        setShowHint(false);
        
        if (currentWord < LEVELS[currentLevel].words.length - 1) {
          setCurrentWord(currentWord + 1);
        } else if (currentLevel < LEVELS.length - 1) {
          setCurrentLevel(currentLevel + 1);
          setCurrentWord(0);
        } else {
          setIsComplete(true);
        }
      }, 1500);
    } else {
      markIncorrect();
      setSelectedLetters([]);
    }
  };

  const handleHintClick = () => {
    setShowHint(true);
    speakHint(word.hint);
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={LEVELS.reduce((sum, level) => sum + level.words.length, 0)}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ score, markCorrect, markIncorrect, markAttempted }) => (
          <div className="px-0 md:px-4 py-4">
            <div className="bg-white shadow-lg border-y-2 border-green-100">
              <div className="p-2 md:p-4">
                <ScoreDisplay score={score} totalQuestions={100} />
                
                {isComplete ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-8"
                  >
                    <div className="text-center space-y-6">
                      <div className="text-6xl mb-4">🎉</div>
                      <h2 className="text-2xl font-bold text-green-600">
                        Congratulations!
                      </h2>
                      <p className="text-xl text-green-700">
                        You've completed all the vegetable words!
                      </p>
                      <div className="text-gray-600">
                        Final Score: {score} / 100
                      </div>
                      <div className="flex gap-4 justify-center mt-8">
                        <button
                          onClick={() => {
                            setCurrentLevel(0);
                            setCurrentWord(0);
                            setSelectedLetters([]);
                            setShowHint(false);
                            setShowSuccess(false);
                            setIsComplete(false);
                          }}
                          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors"
                        >
                          Play Again
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key={`${currentLevel}-${currentWord}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4"
                  >
                    <h2 className="text-xl font-bold text-center text-green-600 mb-2">
                      {LEVELS[currentLevel].title}
                    </h2>

                    {/* Word Display */}
                    <div className="flex flex-col items-center gap-4">
                      <motion.div
                        className="text-6xl"
                        animate={{ scale: showSuccess ? [1, 1.2, 1] : 1 }}
                      >
                        {word.emoji}
                      </motion.div>

                      {/* Selected Letters */}
                      <div className="flex gap-0.5 md:gap-2 justify-center">
                        {Array.from({ length: emptySpaces }).map((_, index) => (
                          <div
                            key={index}
                            className="w-10 h-10 md:w-12 md:h-12 border-2 border-green-300 rounded-lg flex items-center justify-center bg-white"
                          >
                            <span className="text-lg md:text-xl font-bold text-green-600">
                              {selectedLetters[index] || ''}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Scrambled Letters */}
                      <div className="flex flex-wrap gap-0.5 md:gap-2 justify-center">
                        {scrambledLetters.map((letter, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center text-lg md:text-xl font-bold text-green-600 hover:bg-green-200 active:bg-green-300 transition-colors"
                            onClick={() => handleLetterClick(letter)}
                          >
                            {letter}
                          </motion.button>
                        ))}
                      </div>

                      {/* Hint */}
                      {showHint && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-gray-600 italic"
                        >
                          {word.hint}
                        </motion.div>
                      )}

                      {/* Fun Fact */}
                      {showSuccess && word.funFact && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-green-600 font-medium"
                        >
                          Fun Fact: {word.funFact}
                        </motion.div>
                      )}

                      {/* Buttons */}
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={handleHintClick}
                          className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 active:bg-yellow-300 transition-colors"
                        >
                          Hint
                        </button>
                        <button
                          onClick={clearSelection}
                          className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 active:bg-red-300 transition-colors"
                        >
                          Clear
                        </button>
                        <button
                          onClick={() => checkAnswer(markAttempted, markCorrect, markIncorrect)}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors"
                        >
                          Check
                        </button>
                      </div>
                    </div>
                  </motion.div>
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