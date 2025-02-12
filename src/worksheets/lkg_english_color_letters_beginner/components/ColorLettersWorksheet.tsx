import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Color data with name, emoji/symbol, and correct first letter
const COLORS = [
  { name: 'RED', emoji: '🔴', letter: 'R', sound: 'like a rose', bgColor: 'bg-red-500', textColor: 'text-red-700' },
  { name: 'BLUE', emoji: '🔵', letter: 'B', sound: 'like the sky', bgColor: 'bg-blue-500', textColor: 'text-blue-700' },
  { name: 'GREEN', emoji: '🟢', letter: 'G', sound: 'like grass', bgColor: 'bg-green-500', textColor: 'text-green-700' },
  { name: 'YELLOW', emoji: '🟡', letter: 'Y', sound: 'like the sun', bgColor: 'bg-yellow-500', textColor: 'text-yellow-700' },
  { name: 'PURPLE', emoji: '🟣', letter: 'P', sound: 'like grapes', bgColor: 'bg-purple-500', textColor: 'text-purple-700' },
  { name: 'ORANGE', emoji: '🟠', letter: 'O', sound: 'like an orange', bgColor: 'bg-orange-500', textColor: 'text-orange-700' },
  { name: 'BLACK', emoji: '⚫', letter: 'B', sound: 'like night', bgColor: 'bg-gray-900', textColor: 'text-gray-700' },
  { name: 'WHITE', emoji: '⚪', letter: 'W', sound: 'like snow', bgColor: 'bg-gray-100', textColor: 'text-gray-700' },
  { name: 'BROWN', emoji: '🟤', letter: 'B', sound: 'like chocolate', bgColor: 'bg-amber-800', textColor: 'text-amber-700' },
  { name: 'PINK', emoji: '💗', letter: 'P', sound: 'like cotton candy', bgColor: 'bg-pink-500', textColor: 'text-pink-700' },
];

const ColorLettersWorksheet: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(COLORS.length).fill(''));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Enhanced speak function with different voice options
  const speak = (text: string, isColorSound = false) => {
    if ('speechSynthesis' in window) {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      speechRef.current = new SpeechSynthesisUtterance(text);
      
      if (isColorSound) {
        // Use different voice settings for color descriptions
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

  // Handle box click/touch with color sounds
  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
    const color = COLORS[index];
    speak(color.name);
    setTimeout(() => {
      speak(color.sound, true);
    }, 1000);
  };

  // Enhanced feedback messages
  const getSuccessFeedback = (color: typeof COLORS[0]) => {
    const messages = [
      `Correct! ${color.name} ${color.sound}!`,
      `Well done! You found the letter ${color.letter} for ${color.name}!`,
      `Perfect! ${color.name} is ${color.sound}!`,
      `Great job! ${color.name} starts with ${color.letter}!`,
      `Excellent! You know ${color.name} starts with ${color.letter}!`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Add provideFeedback function
  const provideFeedback = (isCorrect: boolean, colorName?: string) => {
    if (isCorrect && colorName) {
      setTimeout(() => {
        const color = COLORS.find(c => c.name === colorName);
        if (color) {
          speak(`${color.name.toLowerCase()} is ${color.sound}`, true);
        }
      }, 1500);

      // Move to next empty box
      const currentIndex = activeIndex ?? 0;
      const nextIndex = answers.findIndex((answer, i) => i > currentIndex && answer === '');
      if (nextIndex !== -1) {
        setTimeout(() => {
          setActiveIndex(nextIndex);
          speak(COLORS[nextIndex].name);
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
    const wasCorrect = answers[index] === COLORS[index].letter;

    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = input;
      return newAnswers;
    });

    // Check if answer is correct
    const isCorrect = input === COLORS[index].letter;
    if (isCorrect && !wasCorrect) { // Only mark correct if it wasn't already correct
      markCorrect();
      provideFeedback(true, COLORS[index].name);
      speak(getSuccessFeedback(COLORS[index]));
    } else if (!isCorrect) {
      markIncorrect();
      provideFeedback(false);
      speak('Try again');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={COLORS.length}
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
                totalQuestions={COLORS.length * 10}
              />
              <h2 className="text-xl font-bold text-white text-center mt-2">
                Type the First Letter of Each Color
              </h2>
            </div>

            {/* Color Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {COLORS.map((color, index) => (
                <motion.div
                  key={index}
                  className={`
                    bg-white/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg
                    ${activeIndex === index ? color.bgColor + ' bg-opacity-20' : ''}
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Color Symbol with Animation */}
                  <motion.div
                    className="text-6xl mb-4 drop-shadow-lg"
                    animate={{ 
                      scale: activeIndex === index ? [1, 1.1, 1] : 1,
                      rotate: activeIndex === index ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {color.emoji}
                  </motion.div>

                  {/* Input Box */}
                  <div 
                    className={`
                      w-12 h-12 border-4 rounded-lg flex items-center justify-center
                      text-2xl font-bold cursor-pointer shadow-md
                      ${activeIndex === index ? 'border-yellow-400 bg-white' : 'border-white/70 bg-white/50'}
                      ${answers[index] === color.letter ? color.bgColor + ' bg-opacity-50' : ''}
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
                        ${answers[index] === color.letter ? color.textColor : 'text-gray-700'}
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
                👆 Touch a color to hear its name, then type the first letter!
              </p>
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default ColorLettersWorksheet; 