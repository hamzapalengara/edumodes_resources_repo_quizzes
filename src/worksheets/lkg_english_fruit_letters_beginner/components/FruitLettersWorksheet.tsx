import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import dragonFruitImage from '../assets/dragon-fruit.png';

// Fruit data with name, image emoji/src, and correct first letter
const FRUITS = [
  { name: 'APPLE', emoji: '🍎', letter: 'A', sound: 'crunchy apple' },
  { name: 'BANANA', emoji: '🍌', letter: 'B', sound: 'sweet banana' },
  { name: 'CHERRY', emoji: '🍒', letter: 'C', sound: 'juicy cherry' },
  { name: 'DRAGON FRUIT', image: dragonFruitImage, letter: 'D', sound: 'exotic dragon fruit' },
  { name: 'GRAPES', emoji: '🍇', letter: 'G', sound: 'bouncy grapes' },
  { name: 'KIWI', emoji: '🥝', letter: 'K', sound: 'tangy kiwi' },
  { name: 'ORANGE', emoji: '🍊', letter: 'O', sound: 'zesty orange' },
  { name: 'PEAR', emoji: '🍐', letter: 'P', sound: 'sweet pear' },
  { name: 'STRAWBERRY', emoji: '🍓', letter: 'S', sound: 'yummy strawberry' },
  { name: 'WATERMELON', emoji: '🍉', letter: 'W', sound: 'refreshing watermelon' },
];

const FruitLettersWorksheet: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(FRUITS.length).fill(''));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Enhanced speak function with different voice options
  const speak = (text: string, isFruitSound = false) => {
    if ('speechSynthesis' in window) {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      speechRef.current = new SpeechSynthesisUtterance(text);
      
      if (isFruitSound) {
        // Use different voice settings for fruit descriptions
        speechRef.current.rate = 0.9;
        speechRef.current.pitch = 1.3;
        speechRef.current.volume = 1;
      } else {
        // Normal voice for instructions and feedback
        speechRef.current.rate = 0.8;
        speechRef.current.pitch = 1.2;
        speechRef.current.volume = 1;
      }
      
      window.speechSynthesis.speak(speechRef.current);
    }
  };

  // Handle box click/touch with fruit sounds
  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
    const fruit = FRUITS[index];
    speak(fruit.name); // Say the fruit name
    setTimeout(() => {
      speak(fruit.sound, true); // Describe the fruit after the name
    }, 1000);
  };

  // Enhanced feedback messages
  const getSuccessFeedback = (fruit: typeof FRUITS[0]) => {
    const messages = [
      `Correct! The ${fruit.sound}!`,
      `Well done! You found the letter ${fruit.letter} for ${fruit.name}!`,
      `Perfect! A ${fruit.sound}!`,
      `Great job! The ${fruit.name} is delicious!`,
      `Excellent! You know the ${fruit.name} starts with ${fruit.letter}!`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Handle key press with enhanced feedback
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    { markCorrect, markIncorrect }: { markCorrect: () => void; markIncorrect: () => void }
  ) => {
    const input = event.key.toUpperCase();
    if (/^[A-Z]$/.test(input)) {
      const newAnswers = [...answers];
      newAnswers[index] = input;
      setAnswers(newAnswers);

      const currentFruit = FRUITS[index];
      // Check if answer is correct
      if (input === currentFruit.letter) {
        // Only mark correct and award points if this is the first time getting it right
        if (!correctAnswers.has(index)) {
          markCorrect();
          setCorrectAnswers(prev => new Set([...prev, index]));
          speak(getSuccessFeedback(currentFruit));
          setTimeout(() => {
            speak(currentFruit.sound, true);
          }, 1500);
        }
        
        // Move to next empty box
        const nextIndex = answers.findIndex((answer, i) => i > index && answer === '');
        if (nextIndex !== -1) {
          setTimeout(() => {
            setActiveIndex(nextIndex);
            speak(FRUITS[nextIndex].name);
          }, 2500);
        }
      } else {
        markIncorrect();
        speak("Try again! Listen to the fruit name one more time.");
        setTimeout(() => {
          speak(currentFruit.name);
        }, 1500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={FRUITS.length}
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
                totalQuestions={FRUITS.length * 10}
              />
              <h2 className="text-xl font-bold text-white text-center mt-2">
                Type the First Letter of Each Fruit
              </h2>
            </div>

            {/* Fruit Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {FRUITS.map((fruit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Fruit Image/Emoji */}
                  <motion.div
                    className="text-6xl mb-4 drop-shadow-lg"
                    animate={{ 
                      scale: activeIndex === index ? [1, 1.1, 1] : 1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {fruit.emoji ? (
                      <span>{fruit.emoji}</span>
                    ) : (
                      <img 
                        src={fruit.image} 
                        alt={fruit.name}
                        className="w-20 h-20 object-contain"
                      />
                    )}
                  </motion.div>

                  {/* Input Box */}
                  <div 
                    className={`
                      w-12 h-12 border-4 rounded-lg flex items-center justify-center
                      text-2xl font-bold cursor-pointer shadow-md
                      ${activeIndex === index ? 'border-yellow-400 bg-white' : 'border-white/70 bg-white/50'}
                      ${answers[index] === fruit.letter ? 'bg-green-200' : ''}
                    `}
                    onClick={() => handleBoxClick(index)}
                  >
                    <input
                      type="text"
                      value={answers[index]}
                      onChange={() => {}} // Controlled input
                      onKeyDown={(e) => handleKeyPress(e, index, { markCorrect, markIncorrect })}
                      className={`
                        w-full h-full text-center bg-transparent outline-none
                        ${answers[index] === fruit.letter ? 'text-green-700' : 'text-gray-700'}
                      `}
                      maxLength={1}
                      autoFocus={activeIndex === index}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Instructions */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 text-white text-center shadow-lg">
              <p className="text-lg">
                👆 Touch a box to hear the fruit name, then type the first letter!
              </p>
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default FruitLettersWorksheet; 