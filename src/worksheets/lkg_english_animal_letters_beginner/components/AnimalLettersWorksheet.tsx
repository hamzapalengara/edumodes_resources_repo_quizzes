import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Animal data with name, image emoji, and correct first letter
const ANIMALS = [
  { name: 'DOG', emoji: '🐕', letter: 'D', sound: 'woof woof' },
  { name: 'CAT', emoji: '🐱', letter: 'C', sound: 'meow meow' },
  { name: 'ELEPHANT', emoji: '🐘', letter: 'E', sound: 'trumpet' },
  { name: 'LION', emoji: '🦁', letter: 'L', sound: 'roar' },
  { name: 'MONKEY', emoji: '🐒', letter: 'M', sound: 'ooh ooh ah ah' },
  { name: 'RABBIT', emoji: '🐰', letter: 'R', sound: 'hop hop' },
  { name: 'TIGER', emoji: '🐯', letter: 'T', sound: 'growl' },
  { name: 'BEAR', emoji: '🐻', letter: 'B', sound: 'grr grr' },
  { name: 'PENGUIN', emoji: '🐧', letter: 'P', sound: 'waddle waddle' },
  { name: 'ZEBRA', emoji: '🦓', letter: 'Z', sound: 'neigh' },
];

const AnimalLettersWorksheet: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(ANIMALS.length).fill(''));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Enhanced speak function with different voice options
  const speak = (text: string, isAnimalSound = false) => {
    if ('speechSynthesis' in window) {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      speechRef.current = new SpeechSynthesisUtterance(text);
      
      if (isAnimalSound) {
        // Use different voice settings for animal sounds
        speechRef.current.rate = 1;
        speechRef.current.pitch = 1.5;
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

  // Handle box click/touch with animal sounds
  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
    const animal = ANIMALS[index];
    speak(animal.name); // Say the animal name
    setTimeout(() => {
      speak(animal.sound, true); // Make the animal sound after the name
    }, 1000);
  };

  // Enhanced feedback messages
  const getSuccessFeedback = (animal: typeof ANIMALS[0]) => {
    const messages = [
      `Correct! The ${animal.name} goes ${animal.sound}!`,
      `Well done! You found the letter ${animal.letter} for ${animal.name}!`,
      `Perfect! Listen to the ${animal.name}: ${animal.sound}!`,
      `Great job! The ${animal.name} is happy: ${animal.sound}!`,
      `Excellent! You know the ${animal.name} starts with ${animal.letter}!`
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

      const currentAnimal = ANIMALS[index];
      // Check if answer is correct
      if (input === currentAnimal.letter) {
        // Only mark correct and award points if this is the first time getting it right
        if (!correctAnswers.has(index)) {
          markCorrect();
          setCorrectAnswers(prev => new Set([...prev, index]));
          speak(getSuccessFeedback(currentAnimal));
          setTimeout(() => {
            speak(currentAnimal.sound, true);
          }, 1500);
        }
        
        // Move to next empty box
        const nextIndex = answers.findIndex((answer, i) => i > index && answer === '');
        if (nextIndex !== -1) {
          setTimeout(() => {
            setActiveIndex(nextIndex);
            speak(ANIMALS[nextIndex].name);
          }, 2500);
        }
      } else {
        markIncorrect();
        speak("Try again! Listen to the animal name one more time.");
        setTimeout(() => {
          speak(currentAnimal.name);
        }, 1500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-500 to-lime-400">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={ANIMALS.length}
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
                totalQuestions={ANIMALS.length * 10}
              />
              <h2 className="text-xl font-bold text-white text-center mt-2">
                Type the First Letter of Each Animal
              </h2>
            </div>

            {/* Animal Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {ANIMALS.map((animal, index) => (
                <motion.div
                  key={index}
                  className="bg-white/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animal Emoji */}
                  <motion.div
                    className="text-6xl mb-4 drop-shadow-lg"
                    animate={{ 
                      scale: activeIndex === index ? [1, 1.1, 1] : 1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {animal.emoji}
                  </motion.div>

                  {/* Input Box */}
                  <div 
                    className={`
                      w-12 h-12 border-4 rounded-lg flex items-center justify-center
                      text-2xl font-bold cursor-pointer shadow-md
                      ${activeIndex === index ? 'border-yellow-400 bg-white' : 'border-white/70 bg-white/50'}
                      ${answers[index] === animal.letter ? 'bg-green-200' : ''}
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
                        ${answers[index] === animal.letter ? 'text-green-700' : 'text-gray-700'}
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
                👆 Touch a box to hear the animal name, then type the first letter!
              </p>
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default AnimalLettersWorksheet; 