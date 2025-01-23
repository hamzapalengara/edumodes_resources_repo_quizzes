import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DndContext, 
  DragEndEvent, 
  useSensor, 
  useSensors, 
  TouchSensor, 
  MouseSensor,
  useDraggable,
  useDroppable
} from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';

interface ColorObject {
  id: string;
  color: string;
  emoji: string;
  name: string;
}

const COLORS: ColorObject[] = [
  { id: 'red', color: '#FF5252', emoji: '🍎', name: 'Red' },
  { id: 'blue', color: '#448AFF', emoji: '🌊', name: 'Blue' },
  { id: 'green', color: '#4CAF50', emoji: '🌿', name: 'Green' },
  { id: 'yellow', color: '#FFD740', emoji: '🌟', name: 'Yellow' },
  { id: 'purple', color: '#9C27B0', emoji: '🍇', name: 'Purple' },
  { id: 'orange', color: '#FF9800', emoji: '🍊', name: 'Orange' },
  { id: 'pink', color: '#FF4081', emoji: '🌸', name: 'Pink' },
  { id: 'brown', color: '#795548', emoji: '🐻', name: 'Brown' },
  { id: 'gray', color: '#9E9E9E', emoji: '🐘', name: 'Gray' },
  { id: 'teal', color: '#009688', emoji: '🐢', name: 'Teal' },
];

const DraggableObject = ({ id, emoji }: { id: string; emoji: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-4xl sm:text-5xl cursor-grab active:cursor-grabbing touch-none select-none"
      whileDrag={{ 
        scale: 1.1,
        zIndex: 1,
      }}
    >
      {emoji}
    </motion.div>
  );
};

const DroppableColorBucket = ({ 
  id, 
  color, 
  isCompleted, 
  showError, 
  emoji 
}: { 
  id: string; 
  color: string; 
  isCompleted: boolean; 
  showError: boolean;
  emoji?: string;
}) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <motion.div
      ref={setNodeRef}
      className={`
        w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center
        ${isCompleted ? 'ring-2 ring-green-400' : ''}
        ${showError ? 'ring-2 ring-red-400' : ''}
      `}
      style={{ backgroundColor: color }}
    >
      {isCompleted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl sm:text-3xl"
        >
          {emoji}
        </motion.div>
      )}
    </motion.div>
  );
};

const AUDIO_MESSAGES = {
  red: "Red apple",
  blue: "Blue ocean",
  green: "Green leaf",
  yellow: "Yellow star",
  purple: "Purple grapes",
  orange: "Orange fruit",
  pink: "Pink flower",
  brown: "Brown bear",
  gray: "Gray elephant",
  teal: "Teal turtle"
};

const ColorMatchingWorksheet: React.FC = () => {
  const [score, setScore] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [completedColors, setCompletedColors] = useState<string[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [errorColor, setErrorColor] = useState<string>('');

  // Configure sensors for touch and mouse
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 0,
        tolerance: 8,
      },
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 2,
      },
    })
  );

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    console.log('Drag end event:', event);
    const { active, over } = event;
    
    console.log('Active:', active);
    console.log('Over:', over);
    
    if (over) {
      console.log('Checking match...');
      console.log('Active ID:', active.id);
      console.log('Over ID:', over.id);
      
      if (active.id === over.id) {
        console.log('Correct match!');
        // Correct match
        setScore((prev) => prev + 10);
        setCompletedColors((prev) => {
          console.log('Previous completed colors:', prev);
          console.log('Adding color:', active.id);
          return [...prev, active.id as string];
        });
        setShowSuccess(true);
        setShowError(false);
        setErrorColor('');
        
        // Play success sound
        const audio = new Audio('/success.mp3');
        audio.play().catch((error) => {
          console.log('Audio play error:', error);
        });
        
        // Get color object and set feedback
        const colorObj = COLORS.find(c => c.id === active.id);
        console.log('Found color object:', colorObj);
        
        if (colorObj) {
          const colorId = active.id as keyof typeof AUDIO_MESSAGES;
          const celebrationMessage = AUDIO_MESSAGES[colorId];
          console.log('Setting feedback message:', celebrationMessage);
          setFeedbackMessage(celebrationMessage);
          
          // Speak the color name
          if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(celebrationMessage.replace(/[^a-zA-Z\s]/g, ''));
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
          }
        }
        
        setTimeout(() => {
          console.log('Clearing success state');
          setShowSuccess(false);
          setFeedbackMessage('');
        }, 2000);
      } else {
        console.log('Wrong match!');
        // Wrong match
        setShowError(true);
        setShowSuccess(false);
        const targetColor = COLORS.find(c => c.id === over.id);
        setErrorColor(over.id as string);
        const message = `Try again! This doesn't match the ${targetColor?.name} color.`;
        console.log('Setting error message:', message);
        setFeedbackMessage(message);
        
        setTimeout(() => {
          console.log('Clearing error state');
          setShowError(false);
          setErrorColor('');
          setFeedbackMessage('');
        }, 2000);
      }
    }
  }, []);

  const remainingObjects = COLORS.filter(color => !completedColors.includes(color.id));
  const isComplete = completedColors.length === COLORS.length;

  console.log('Render state:', {
    score,
    showSuccess,
    showError,
    completedColors,
    feedbackMessage,
    remainingObjects,
    isComplete
  });

  return (
    <div className="min-h-screen bg-white">
      <WorksheetHeader />

      <div className="flex-1 flex flex-col max-w-xs sm:max-w-md md:max-w-2xl mx-auto w-full px-0 sm:px-4 py-4">
        {/* Title Section */}
        <div className="mx-2 sm:mx-0 mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-violet-800">
            Rainbow Adventure
          </h1>
        </div>

        {/* Score Display with enhanced styling */}
        <div className="mx-2 sm:mx-0 mb-4 bg-gradient-to-r from-pink-50 to-yellow-50 rounded-xl p-3 shadow-sm border border-pink-100">
          <ScoreDisplay score={score} totalQuestions={100} />
        </div>

        {!isComplete ? (
          <DndContext
            sensors={sensors}
            modifiers={[restrictToWindowEdges]}
            onDragEnd={handleDragEnd}
          >
            {/* Instructions and Feedback */}
            <div className="text-center mx-2 sm:mx-0 mb-4">
              <div className="bg-blue-50 rounded-lg p-3 shadow-sm border border-blue-100">
                <AnimatePresence mode="wait">
                  {feedbackMessage ? (
                    <motion.p
                      key="feedback"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`text-base sm:text-lg font-medium ${
                        showError ? 'text-red-500' : showSuccess ? 'text-green-500' : ''
                      }`}
                    >
                      {feedbackMessage}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="instruction"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-base sm:text-lg font-medium text-blue-700"
                    >
                      Match the objects to their colors!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-col gap-6 mx-2 sm:mx-0">
              {/* Objects to Match - Top Section */}
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-dashed border-blue-200">
                <h3 className="text-center text-blue-700 font-medium mb-4">Drag these objects! ✨</h3>
                <div className="grid grid-cols-4 gap-4 justify-items-center">
                  {remainingObjects.map((obj) => (
                    <DraggableObject
                      key={obj.id}
                      id={obj.id}
                      emoji={obj.emoji}
                    />
                  ))}
                </div>
              </div>

              {/* Color Buckets - Bottom Section */}
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-dashed border-purple-200">
                <h3 className="text-center text-purple-700 font-medium mb-4">Drop on matching colors! 🎯</h3>
                <div className="grid grid-cols-4 md:grid-cols-5 gap-3 justify-items-center">
                  {COLORS.map((color) => (
                    <DroppableColorBucket
                      key={color.id}
                      id={color.id}
                      color={color.color}
                      isCompleted={completedColors.includes(color.id)}
                      showError={showError && errorColor === color.id}
                      emoji={color.emoji}
                    />
                  ))}
                </div>
              </div>
            </div>
          </DndContext>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-xl p-8 shadow-lg border border-pink-100"
            >
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-pink-600">
                  🎉 Amazing Job! 🌈
                </h2>
                <p className="text-lg sm:text-xl text-purple-700">You've matched all the colors!</p>
                <div className="bg-white rounded-lg p-4 shadow-inner">
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">Final Score: {score}/100</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setScore(0);
                    setCompletedColors([]);
                    setFeedbackMessage('');
                    setErrorColor('');
                  }}
                  className="mt-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-3 rounded-lg text-lg sm:text-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  Play Again! 🎮
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Success Animation with Confetti */}
        <AnimatePresence>
          {showSuccess && (
            <>
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={200}
                gravity={0.3}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="fixed inset-0 pointer-events-none flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="text-4xl sm:text-5xl"
                >
                  ✨
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ColorMatchingWorksheet; 