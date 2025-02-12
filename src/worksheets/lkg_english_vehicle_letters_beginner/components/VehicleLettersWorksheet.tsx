import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Vehicle data with name, emoji, and correct first letter
const VEHICLES = [
  { name: 'AIRPLANE', emoji: '✈️', letter: 'A', sound: 'zoom through the sky' },
  { name: 'BUS', emoji: '🚌', letter: 'B', sound: 'beep beep' },
  { name: 'CAR', emoji: '🚗', letter: 'C', sound: 'vroom vroom' },
  { name: 'DRONE', emoji: '🛸', letter: 'D', sound: 'buzz buzz' },
  { name: 'HELICOPTER', emoji: '🚁', letter: 'H', sound: 'whir whir whir' },
  { name: 'MOTORCYCLE', emoji: '🏍️', letter: 'M', sound: 'rum rum rum' },
  { name: 'ROCKET', emoji: '🚀', letter: 'R', sound: 'blast off' },
  { name: 'SUBMARINE', emoji: '🛥️', letter: 'S', sound: 'dive deep' },
  { name: 'TRAIN', emoji: '🚂', letter: 'T', sound: 'choo choo' },
  { name: 'YACHT', emoji: '⛵', letter: 'Y', sound: 'sail away' },
];

const VehicleLettersWorksheet: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(VEHICLES.length).fill(''));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Enhanced speak function with different voice options
  const speak = (text: string, isVehicleSound = false) => {
    if ('speechSynthesis' in window) {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      speechRef.current = new SpeechSynthesisUtterance(text);
      
      if (isVehicleSound) {
        // Use different voice settings for vehicle sounds
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

  // Handle box click/touch with vehicle sounds
  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
    const vehicle = VEHICLES[index];
    speak(vehicle.name);
    setTimeout(() => {
      speak(vehicle.sound, true);
    }, 1000);
  };

  // Enhanced feedback messages
  const getSuccessFeedback = (vehicle: typeof VEHICLES[0]) => {
    const messages = [
      `Correct! The ${vehicle.name} goes ${vehicle.sound}!`,
      `Well done! You found the letter ${vehicle.letter} for ${vehicle.name}!`,
      `Perfect! Listen to the ${vehicle.name}: ${vehicle.sound}!`,
      `Great job! The ${vehicle.name} is ready to go: ${vehicle.sound}!`,
      `Excellent! You know the ${vehicle.name} starts with ${vehicle.letter}!`
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

      const currentVehicle = VEHICLES[index];
      // Check if answer is correct
      if (input === currentVehicle.letter) {
        // Only mark correct and award points if this is the first time getting it right
        if (!correctAnswers.has(index)) {
          markCorrect();
          setCorrectAnswers(prev => new Set([...prev, index]));
          speak(getSuccessFeedback(currentVehicle));
          setTimeout(() => {
            speak(currentVehicle.sound, true);
          }, 1500);
        }
        
        // Move to next empty box
        const nextIndex = answers.findIndex((answer, i) => i > index && answer === '');
        if (nextIndex !== -1) {
          setTimeout(() => {
            setActiveIndex(nextIndex);
            speak(VEHICLES[nextIndex].name);
          }, 2500);
        }
      } else {
        markIncorrect();
        speak("Try again! Listen to the vehicle name one more time.");
        setTimeout(() => {
          speak(currentVehicle.name);
        }, 1500);
      }
    }
  };

  // Add input change handler for mobile
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    { markCorrect, markIncorrect }: { markCorrect: () => void; markIncorrect: () => void }
  ) => {
    const input = event.target.value.toUpperCase();
    if (/^[A-Z]$/.test(input)) {
      const newAnswers = [...answers];
      newAnswers[index] = input;
      setAnswers(newAnswers);

      const currentVehicle = VEHICLES[index];
      if (input === currentVehicle.letter) {
        if (!correctAnswers.has(index)) {
          markCorrect();
          setCorrectAnswers(prev => new Set([...prev, index]));
          speak(getSuccessFeedback(currentVehicle));
          setTimeout(() => {
            speak(currentVehicle.sound, true);
          }, 1500);
        }
        
        const nextIndex = answers.findIndex((answer, i) => i > index && answer === '');
        if (nextIndex !== -1) {
          setTimeout(() => {
            setActiveIndex(nextIndex);
            speak(VEHICLES[nextIndex].name);
          }, 2500);
        }
      } else {
        markIncorrect();
        speak("Try again! Listen to the vehicle name one more time.");
        setTimeout(() => {
          speak(currentVehicle.name);
        }, 1500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={VEHICLES.length}
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
                totalQuestions={VEHICLES.length * 10}
              />
              <h2 className="text-xl font-bold text-white text-center mt-2">
                Type the First Letter of Each Vehicle
              </h2>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {VEHICLES.map((vehicle, index) => (
                <motion.div
                  key={index}
                  className="bg-white/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Vehicle Emoji with Animation */}
                  <motion.div
                    className="text-6xl mb-4 drop-shadow-lg"
                    animate={{ 
                      scale: activeIndex === index ? [1, 1.1, 1] : 1,
                      rotate: activeIndex === index ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {vehicle.emoji}
                  </motion.div>

                  {/* Input Box */}
                  <div 
                    className={`
                      w-12 h-12 border-4 rounded-lg flex items-center justify-center
                      text-2xl font-bold cursor-pointer shadow-md
                      ${activeIndex === index ? 'border-yellow-400 bg-white' : 'border-white/70 bg-white/50'}
                      ${answers[index] === vehicle.letter ? 'bg-green-200' : ''}
                    `}
                    onClick={() => handleBoxClick(index)}
                  >
                    <input
                      type="text"
                      inputMode="text"
                      pattern="[A-Za-z]*"
                      value={answers[index]}
                      onChange={(e) => handleInputChange(e, index, { markCorrect, markIncorrect })}
                      onKeyDown={(e) => handleKeyPress(e, index, { markCorrect, markIncorrect })}
                      className={`
                        w-full h-full text-center bg-transparent outline-none
                        ${answers[index] === vehicle.letter ? 'text-green-700' : 'text-gray-700'}
                      `}
                      maxLength={1}
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                      autoCapitalize="characters"
                      autoFocus={activeIndex === index}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Instructions */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 text-white text-center shadow-lg">
              <p className="text-lg">
                👆 Touch a vehicle to hear its name, then type the first letter!
              </p>
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default VehicleLettersWorksheet;