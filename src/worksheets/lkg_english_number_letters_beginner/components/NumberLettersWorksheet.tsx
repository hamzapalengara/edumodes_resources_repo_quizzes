import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Number data with name, emoji/symbol, and correct first letter
const NUMBERS = [
  { name: 'ONE', numeral: '1', letter: 'O', sound: 'like ocean', bgColor: 'bg-blue-500', textColor: 'text-blue-700' },
  { name: 'TWO', numeral: '2', letter: 'T', sound: 'like tree', bgColor: 'bg-green-500', textColor: 'text-green-700' },
  { name: 'THREE', numeral: '3', letter: 'T', sound: 'like train', bgColor: 'bg-yellow-500', textColor: 'text-yellow-700' },
  { name: 'FOUR', numeral: '4', letter: 'F', sound: 'like fish', bgColor: 'bg-red-500', textColor: 'text-red-700' },
  { name: 'FIVE', numeral: '5', letter: 'F', sound: 'like flower', bgColor: 'bg-pink-500', textColor: 'text-pink-700' },
  { name: 'SIX', numeral: '6', letter: 'S', sound: 'like snake', bgColor: 'bg-purple-500', textColor: 'text-purple-700' },
  { name: 'SEVEN', numeral: '7', letter: 'S', sound: 'like sun', bgColor: 'bg-orange-500', textColor: 'text-orange-700' },
  { name: 'EIGHT', numeral: '8', letter: 'E', sound: 'like elephant', bgColor: 'bg-indigo-500', textColor: 'text-indigo-700' },
  { name: 'NINE', numeral: '9', letter: 'N', sound: 'like nest', bgColor: 'bg-teal-500', textColor: 'text-teal-700' },
  { name: 'TEN', numeral: '10', letter: 'T', sound: 'like tiger', bgColor: 'bg-amber-500', textColor: 'text-amber-700' },
];

const NumberLettersWorksheet: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(NUMBERS.length).fill(''));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Enhanced speak function with different voice options
  const speak = (text: string, isNumberSound = false) => {
    if ('speechSynthesis' in window) {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      speechRef.current = new SpeechSynthesisUtterance(text);
      
      if (isNumberSound) {
        // Use different voice settings for number descriptions
        speechRef.current.rate = 0.9;
        speechRef.current.pitch = 1.2;
        speechRef.current.volume = 1;
      } else {
        // Normal voice for instructions and feedback
        speechRef.current.rate = 0.8;
        speechRef.current.pitch = 1.1;
        speechRef.current.volume = 1;
      }
      
      window.speechSynthesis.speak(speechRef.current);
    }
  };

  // Handle box click/touch with number sounds
  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
    const number = NUMBERS[index];
    speak(number.name);
    setTimeout(() => {
      speak(number.sound, true);
    }, 1000);
  };

  // Enhanced feedback messages
  const getSuccessFeedback = (number: typeof NUMBERS[0]) => {
    const messages = [
      `Correct! ${number.name} ${number.sound}!`,
      `Well done! You found the letter ${number.letter} for ${number.name}!`,
      `Perfect! ${number.name} starts with ${number.letter}!`,
      `Great job! ${number.name} begins with ${number.letter}!`,
      `Excellent! You know ${number.name} starts with ${number.letter}!`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Add provideFeedback function
  const provideFeedback = (isCorrect: boolean, numberName?: string) => {
    if (isCorrect && numberName) {
      setTimeout(() => {
        const number = NUMBERS.find(n => n.name === numberName);
        if (number) {
          speak(`${number.name.toLowerCase()} is ${number.sound}`, true);
        }
      }, 1500);

      // Move to next empty box
      const currentIndex = activeIndex ?? 0;
      const nextIndex = answers.findIndex((answer, i) => i > currentIndex && answer === '');
      if (nextIndex !== -1) {
        setTimeout(() => {
          setActiveIndex(nextIndex);
          speak(NUMBERS[nextIndex].name);
        }, 2500);
      }
    }
  };

  // Update handleInputChange for better mobile support
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    { markCorrect, markIncorrect }: { markCorrect: () => void; markIncorrect: () => void }
  ) => {
    // Get the last character entered
    const input = event.target.value.slice(-1).toUpperCase();
    
    // Allow empty input for backspace/delete
    if (!input) {
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[index] = '';
        return newAnswers;
      });
      return;
    }

    // Only proceed if input is a letter
    if (!/^[A-Z]$/.test(input)) return;

    // Check if this answer was already correct
    const wasCorrect = answers[index] === NUMBERS[index].letter;

    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = input;
      return newAnswers;
    });

    // Check if answer is correct
    const isCorrect = input === NUMBERS[index].letter;
    if (isCorrect && !wasCorrect) { // Only mark correct if it wasn't already correct
      markCorrect();
      provideFeedback(true, NUMBERS[index].name);
      speak(getSuccessFeedback(NUMBERS[index]));
    } else if (!isCorrect) {
      markIncorrect();
      provideFeedback(false);
      speak('Try again');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={NUMBERS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={(summary: WorksheetSummary) => {
          console.log('Worksheet Summary:', summary);
        }}
      >
        {({ markCorrect, markIncorrect, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mb-4">
              <ScoreDisplay
                score={score}
                totalQuestions={NUMBERS.length * 10}
              />
              <h2 className="text-xl font-bold text-white text-center mt-2">
                Type the First Letter of Each Number
              </h2>
            </div>

            {/* Number Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {NUMBERS.map((number, index) => (
                <motion.div
                  key={index}
                  className={`
                    bg-white/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg
                    ${activeIndex === index ? number.bgColor + ' bg-opacity-20' : ''}
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Number with Animation */}
                  <motion.div
                    className="text-6xl mb-4 drop-shadow-lg font-bold"
                    animate={{ 
                      scale: activeIndex === index ? [1, 1.1, 1] : 1,
                      rotate: activeIndex === index ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {number.numeral}
                  </motion.div>

                  {/* Input Box */}
                  <div 
                    className={`
                      w-12 h-12 border-4 rounded-lg flex items-center justify-center
                      text-2xl font-bold cursor-pointer shadow-md
                      ${activeIndex === index ? 'border-yellow-400 bg-white' : 'border-white/70 bg-white/50'}
                      ${answers[index] === number.letter ? number.bgColor + ' bg-opacity-50' : ''}
                    `}
                    onClick={() => handleBoxClick(index)}
                  >
                    <input
                      type="text"
                      inputMode="text"
                      pattern="[A-Za-z]*"
                      value={answers[index]}
                      onChange={(e) => handleInputChange(e, index, { markCorrect, markIncorrect })}
                      className={`
                        w-full h-full text-center bg-transparent outline-none
                        ${answers[index] === number.letter ? number.textColor : 'text-gray-700'}
                      `}
                      maxLength={1}
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                      autoCapitalize="characters"
                      autoFocus={activeIndex === index}
                      style={{ caretColor: 'transparent' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Instructions */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 text-white text-center shadow-lg">
              <p className="text-lg">
                👆 Touch a number to hear its name, then type the first letter!
              </p>
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default NumberLettersWorksheet; 