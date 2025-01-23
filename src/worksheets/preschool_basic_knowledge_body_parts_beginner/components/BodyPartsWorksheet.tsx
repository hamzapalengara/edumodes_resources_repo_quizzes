import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import bodyOutlineSvg from '../assets/body_outline.svg';

interface BodyPart {
  id: string;
  name: string;
  label: string;
  position: { x: number; y: number };
  labelPosition: 'left' | 'right';  // Which side the label should appear
  isCorrect?: boolean;
}

const BODY_PARTS: BodyPart[] = [
  { id: 'hair', name: 'Hair', label: 'It grows on top of your head!', position: { x: 90, y: 30 }, labelPosition: 'right' },
  { id: 'head', name: 'Head', label: 'This is where your brain lives!', position: { x: 13, y: 45 }, labelPosition: 'right' },
  { id: 'eye', name: 'Eyes', label: 'They help you see the world!', position: { x: 58, y: 10 }, labelPosition: 'right' },
  { id: 'mouth', name: 'Mouth', label: 'For eating and smiling!', position: { x: 38, y: 10 }, labelPosition: 'left' },
  { id: 'lips', name: 'Lips', label: 'For speaking and smiling!', position: { x: 21, y: 25 }, labelPosition: 'left' },
  { id: 'tongue', name: 'Tongue', label: 'For tasting yummy food!', position: { x: 77, y: 20 }, labelPosition: 'right' },
  { id: 'ear', name: 'Ears', label: 'They help you hear sounds!', position: { x: 88, y: 50 }, labelPosition: 'right' },
  { id: 'nose', name: 'Nose', label: 'For smelling lovely things!', position: { x: 90, y: 65 }, labelPosition: 'right' },
  { id: 'stomach', name: 'Stomach', label: 'Where your food goes after eating!', position: { x: 50, y: 50 }, labelPosition: 'right' },
  { id: 'arm', name: 'Arms', label: 'For hugging and reaching!', position: { x: 50, y: 92 }, labelPosition: 'left' },
  { id: 'hand', name: 'Hands', label: 'For clapping and holding!', position: { x: 20, y: 88 }, labelPosition: 'left' },
  { id: 'leg', name: 'Legs', label: 'They help you jump and run!', position: { x: 80, y: 85 }, labelPosition: 'right' },
  { id: 'foot', name: 'Feet', label: 'For walking and dancing!', position: { x: 10, y: 69 }, labelPosition: 'left' },
];

interface TrackerMethods {
  markCorrect: () => void;
  markAttempted: () => void;
  score: number;
  maxScore: number;
  questionsAttempted: number;
  correctAnswers: number;
  incorrectAnswers: number;
  reset: () => void;
}

const BodyPartsWorksheet: React.FC = () => {
  const [parts, setParts] = useState(BODY_PARTS.map(part => ({ ...part, isCorrect: false })));
  
  // Track worksheet completion
  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet completed:', summary);
  };

  const speak = (partName: string, description: string) => {
    if ('speechSynthesis' in window) {
      // Create and configure new utterance for name
      const nameUtterance = new SpeechSynthesisUtterance(partName);
      nameUtterance.rate = 0.7;  // Slower rate for clarity
      nameUtterance.pitch = 1.1;  // Slightly higher pitch
      nameUtterance.volume = 1;   // Maximum volume

      // Create and configure new utterance for description
      const descriptionUtterance = new SpeechSynthesisUtterance(description);
      descriptionUtterance.rate = 0.8;  // Slightly faster for description
      descriptionUtterance.pitch = 1.0;  // Normal pitch
      descriptionUtterance.volume = 1;

      // Play success sound first
      try {
        const audio = new Audio('/assets/sounds/success.mp3');
        audio.play().catch(error => {
          console.log('Success sound could not be played:', error);
        });
      } catch (error) {
        console.log('Error creating audio:', error);
      }

      // Queue the speech after a small delay to let the success sound play
      setTimeout(() => {
        window.speechSynthesis.speak(nameUtterance);
        window.speechSynthesis.speak(descriptionUtterance);
      }, 300);

      // Clean up after all speaking is done
      descriptionUtterance.onend = () => {
        // Only cancel if this was the last utterance
        if (!window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
        }
      };
    }
  };

  const handlePartClick = (partId: string, trackerProps: Pick<TrackerMethods, 'markCorrect' | 'markAttempted'>) => {
    const part = parts.find(p => p.id === partId);
    if (part) {
      speak(part.name, part.label);
      
      // Only handle match logic if part isn't already correct
      if (!part.isCorrect) {
        handlePartMatch(partId, trackerProps);
      }
    }
  };

  const handlePartMatch = (partId: string, { markCorrect, markAttempted }: Pick<TrackerMethods, 'markCorrect' | 'markAttempted'>) => {
    const newParts = parts.map(part => {
      if (part.id === partId) {
        return { ...part, isCorrect: true };
      }
      return part;
    });

    setParts(newParts);
    markCorrect();
    markAttempted();

    // Check if all parts are correct
    if (newParts.every(part => part.isCorrect)) {
      try {
        const celebrationAudio = new Audio('/assets/sounds/celebration.mp3');
        celebrationAudio.play().catch(error => {
          console.log('Celebration sound could not be played:', error);
        });
      } catch (error) {
        console.log('Error creating celebration audio:', error);
      }
    }
  };

  const handleReset = (reset: () => void) => {
    setParts(BODY_PARTS.map(part => ({ ...part, isCorrect: false })));
    reset();
  };

  return (
    <WorksheetTracker
      totalQuestions={BODY_PARTS.length}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ 
        markCorrect, 
        markAttempted,
        score,
        maxScore,
        questionsAttempted,
        correctAnswers,
        incorrectAnswers,
        reset
      }) => (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
          <WorksheetHeader />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg">
              <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-6 pt-6">
                Learn Your Body Parts! 🎯
              </h1>

              <div className="mb-6">
                <ScoreDisplay score={score} totalQuestions={maxScore} />
              </div>

              <div className="relative aspect-[1/1] bg-gradient-to-b from-blue-50 to-purple-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full">
                    {/* Body outline image */}
                    <img 
                      src={bodyOutlineSvg}
                      alt="Body parts learning diagram"
                      className="w-full h-auto"
                    />

                    {/* Clickable areas */}
                    {parts.map((part) => (
                      <div
                        key={part.id}
                        className="absolute"
                        style={{
                          left: `${part.position.x}%`,
                          top: `${part.position.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <motion.div>
                          <motion.button
                            className="block"
                            onClick={() => handlePartClick(part.id, { markCorrect, markAttempted })}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ transformOrigin: 'center center' }}
                          >
                            <div 
                              className={`w-20 h-14 rounded-lg cursor-pointer transition-colors
                                ${part.isCorrect 
                                  ? 'bg-transparent' 
                                  : 'bg-transparent hover:bg-purple-300/30'}`}
                              aria-label={part.name}
                            />
                          </motion.button>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Word bank */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2">
                {BODY_PARTS.map((part) => {
                  const isActive = !parts.find(p => p.id === part.id)?.isCorrect;
                  return (
                    <motion.button
                      key={part.id}
                      className={`p-3 rounded-lg font-bold text-center
                                ${isActive 
                                  ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' 
                                  : 'bg-green-100 text-green-700'
                                }`}
                      onClick={() => isActive && handlePartClick(part.id, { markCorrect, markAttempted })}
                      whileHover={isActive ? { scale: 1.05 } : {}}
                      whileTap={isActive ? { scale: 0.95 } : {}}
                    >
                      {part.name}
                    </motion.button>
                  );
                })}
              </div>

              {/* Progress Stats */}
              <div className="p-4 text-center text-sm text-gray-600">
                <p>Questions Attempted: {questionsAttempted}</p>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Incorrect Answers: {incorrectAnswers}</p>
              </div>

              {/* Completion Message */}
              {correctAnswers === BODY_PARTS.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 flex items-center justify-center bg-black/50"
                >
                  <motion.div
                    className="bg-white rounded-xl p-8 text-center max-w-md mx-4"
                    initial={{ scale: 0, y: 100 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                  >
                    <motion.div
                      className="text-8xl mb-6"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      🌟
                    </motion.div>

                    <motion.h2
                      className="text-3xl font-bold text-purple-800 mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Amazing Job! 🎉
                    </motion.h2>

                    <p className="text-gray-600 mb-6 text-lg">
                      You've learned all your body parts!
                    </p>

                    <motion.div 
                      className="text-xl font-bold text-purple-600 mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Score: {score}/{maxScore}
                    </motion.div>

                    <motion.button
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700"
                      onClick={() => handleReset(reset)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Try Again
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default BodyPartsWorksheet; 