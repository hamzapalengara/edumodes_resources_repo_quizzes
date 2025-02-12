import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Body parts data with name, emoji, and correct first letter
const BODY_PARTS = [
  { name: 'ARM', emoji: '💪', letter: 'A', sound: 'strong and flexible' },
  { name: 'BRAIN', emoji: '🧠', letter: 'B', sound: 'thinks and learns' },
  { name: 'CHEST', emoji: '👕', letter: 'C', sound: 'breathes up and down' },
  { name: 'EAR', emoji: '👂', letter: 'E', sound: 'listens carefully' },
  { name: 'FOOT', emoji: '🦶', letter: 'F', sound: 'walks and jumps' },
  { name: 'HAND', emoji: '🤚', letter: 'H', sound: 'waves hello' },
  { name: 'LEG', emoji: '🦵', letter: 'L', sound: 'runs and kicks' },
  { name: 'MOUTH', emoji: '👄', letter: 'M', sound: 'talks and eats' },
  { name: 'NOSE', emoji: '👃', letter: 'N', sound: 'smells nice things' },
  { name: 'TEETH', emoji: '🦷', letter: 'T', sound: 'chews and smiles' },
];

const BodyLettersWorksheet: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(BODY_PARTS.length).fill(''));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Provide feedback for correct/incorrect answers
  const provideFeedback = (isCorrect: boolean, bodyPartName?: string) => {
    if (isCorrect && bodyPartName) {
      setCorrectAnswers(prev => new Set([...prev]));
      setTimeout(() => {
        const bodyPart = BODY_PARTS.find(part => part.name === bodyPartName);
        if (bodyPart) {
          speak(`The ${bodyPart.name.toLowerCase()} ${bodyPart.sound}`, true);
        }
      }, 1500);

      // Move to next empty box
      const currentIndex = activeIndex ?? 0;
      const nextIndex = answers.findIndex((answer, i) => i > currentIndex && answer === '');
      if (nextIndex !== -1) {
        setTimeout(() => {
          setActiveIndex(nextIndex);
          speak(BODY_PARTS[nextIndex].name);
        }, 2500);
      }
    }
  };

  // Enhanced speak function with different voice options
  const speak = (text: string, isActionSound = false) => {
    if ('speechSynthesis' in window) {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      speechRef.current = new SpeechSynthesisUtterance(text);
      
      if (isActionSound) {
        // Use different voice settings for action sounds
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

  // Handle box click/touch with body part sounds
  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
    const bodyPart = BODY_PARTS[index];
    speak(bodyPart.name);
    setTimeout(() => {
      speak(`The ${bodyPart.name.toLowerCase()} ${bodyPart.sound}`, true);
    }, 1000);
  };

  // Enhanced feedback messages
  const getSuccessFeedback = (bodyPart: typeof BODY_PARTS[0]) => {
    const messages = [
      `Correct! Your ${bodyPart.name.toLowerCase()} ${bodyPart.sound}!`,
      `Well done! You found the letter ${bodyPart.letter} for ${bodyPart.name}!`,
      `Perfect! The ${bodyPart.name.toLowerCase()} starts with ${bodyPart.letter}!`,
      `Great job! The ${bodyPart.name.toLowerCase()} helps you ${bodyPart.sound}!`,
      `Excellent! ${bodyPart.name} begins with the letter ${bodyPart.letter}!`
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

      const currentBodyPart = BODY_PARTS[index];
      // Check if answer is correct
      if (input === currentBodyPart.letter) {
        // Only mark correct and award points if this is the first time getting it right
        if (!correctAnswers.has(index)) {
          markCorrect();
          setCorrectAnswers(prev => new Set([...prev, index]));
          speak(getSuccessFeedback(currentBodyPart));
          setTimeout(() => {
            speak(`The ${currentBodyPart.name.toLowerCase()} ${currentBodyPart.sound}`, true);
          }, 1500);
        }
        
        // Move to next empty box
        const nextIndex = answers.findIndex((answer, i) => i > index && answer === '');
        if (nextIndex !== -1) {
          setTimeout(() => {
            setActiveIndex(nextIndex);
            speak(BODY_PARTS[nextIndex].name);
          }, 2500);
        }
      } else {
        markIncorrect();
        speak("Try again! Listen to the body part name one more time.");
        setTimeout(() => {
          speak(currentBodyPart.name);
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

    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = input;
      return newAnswers;
    });

    // Check if answer is correct
    const isCorrect = input === BODY_PARTS[index].letter;
    if (isCorrect) {
      markCorrect();
      provideFeedback(true, BODY_PARTS[index].name);
      speak(getSuccessFeedback(BODY_PARTS[index]));
    } else {
      markIncorrect();
      provideFeedback(false);
      speak('Try again');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={BODY_PARTS.length}
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
                totalQuestions={BODY_PARTS.length * 10}
              />
              <h2 className="text-xl font-bold text-white text-center mt-2">
                Type the First Letter of Each Body Part
              </h2>
            </div>

            {/* Body Parts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {BODY_PARTS.map((bodyPart, index) => (
                <motion.div
                  key={index}
                  className="bg-white/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Body Part Emoji */}
                  <motion.div
                    className="text-6xl mb-4 drop-shadow-lg"
                    animate={{ 
                      scale: activeIndex === index ? [1, 1.1, 1] : 1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {bodyPart.emoji}
                  </motion.div>

                  {/* Input Box */}
                  <div 
                    className={`
                      w-12 h-12 border-4 rounded-lg flex items-center justify-center
                      text-2xl font-bold cursor-pointer shadow-md
                      ${activeIndex === index ? 'border-yellow-400 bg-white' : 'border-white/70 bg-white/50'}
                      ${answers[index] === bodyPart.letter ? 'bg-green-200' : ''}
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
                        w-full h-full text-center bg-transparent outline-none select-none
                        ${answers[index] === bodyPart.letter ? 'text-green-700' : 'text-gray-700'}
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
                👆 Touch a box to hear the body part name, then type the first letter!
              </p>
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default BodyLettersWorksheet; 