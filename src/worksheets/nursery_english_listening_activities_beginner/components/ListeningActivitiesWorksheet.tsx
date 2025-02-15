import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Import images
import sleepingImage from '../assets/sleepinbed.jpg';
import dancingImage from '../assets/dance.jpg';
import readingImage from '../assets/readbook.jpg';
import ridingImage from '../assets/ridecycle.jpg';
import playingImage from '../assets/playwithtoys.jpg';

interface Activity {
  id: number;
  audio: string;
  image: string;
  name: string;
}

const activities: Activity[] = [
  {
    id: 1,
    audio: "sleeping in bed",
    image: sleepingImage,
    name: "sleeping"
  },
  {
    id: 2,
    audio: "dancing to music",
    image: dancingImage,
    name: "dancing"
  },
  {
    id: 3,
    audio: "reading a book",
    image: readingImage,
    name: "reading"
  },
  {
    id: 4,
    audio: "riding a bicycle",
    image: ridingImage,
    name: "riding"
  },
  {
    id: 5,
    audio: "playing with toys",
    image: playingImage,
    name: "playing"
  }
];

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const ListeningActivitiesWorksheet: React.FC = () => {
  const [selectedSound, setSelectedSound] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [completedPairs, setCompletedPairs] = useState<{[key: number]: string}>({});
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [activeLine, setActiveLine] = useState<{ x1: number, y1: number, x2: number, y2: number } | null>(null);

  // Initialize shuffled images
  useEffect(() => {
    setShuffledImages(shuffleArray(activities.map(a => a.image)));
  }, []);

  const speakActivity = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8; // Slower speed for clarity
    speechSynthesis.speak(utterance);
  };

  const calculateLineCoordinates = (soundElement: HTMLElement, imageElement: HTMLElement) => {
    const container = document.getElementById('matching-container');
    if (!container) return null;

    const containerRect = container.getBoundingClientRect();
    const soundRect = soundElement.getBoundingClientRect();
    const imageRect = imageElement.getBoundingClientRect();

    // Calculate positions relative to the container
    return {
      x1: soundRect.right - containerRect.left,
      y1: soundRect.top + (soundRect.height / 2) - containerRect.top,
      x2: imageRect.left - containerRect.left,
      y2: imageRect.top + (imageRect.height / 2) - containerRect.top
    };
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (selectedSound !== null) {
      const container = document.getElementById('matching-container');
      const soundButton = document.getElementById(`sound-${selectedSound}`);
      
      if (container && soundButton) {
        const containerRect = container.getBoundingClientRect();
        const soundRect = soundButton.getBoundingClientRect();
        
        setActiveLine({
          x1: soundRect.right - containerRect.left,
          y1: soundRect.top + (soundRect.height / 2) - containerRect.top,
          x2: e.clientX - containerRect.left,
          y2: e.clientY - containerRect.top
        });
      }
    }
  }, [selectedSound]);

  const handleSoundClick = (id: number) => {
    if (completedPairs[id]) return;
    setSelectedSound(id);
    speakActivity(activities.find(a => a.id === id)?.audio || '');

    // Reset any existing active line
    setActiveLine(null);
  };

  const handleImageClick = (image: string, imageElement: HTMLElement) => {
    if (!selectedSound || completedPairs[selectedSound]) return;
    
    setSelectedImage(image);
    const currentActivity = activities.find(a => a.id === selectedSound);
    const isAnswerCorrect = currentActivity?.image === image;
    
    setIsCorrect(isAnswerCorrect);
    
    const soundElement = document.getElementById(`sound-${selectedSound}`);
    if (soundElement && imageElement) {
      const lineCoords = calculateLineCoordinates(soundElement, imageElement);
      if (lineCoords) {
        setActiveLine(lineCoords);
      }
    }
    
    if (isAnswerCorrect) {
      setCompletedPairs(prev => ({
        ...prev,
        [selectedSound]: image
      }));
      
      // Immediately clear the active line since we'll show the completed line instead
      setActiveLine(null);
      setSelectedSound(null);
      
      // Clear other states after a delay
      setTimeout(() => {
        setSelectedImage(null);
        setIsCorrect(null);
      }, 1000);
    } else {
      // Remove the incorrect line after a delay
      setTimeout(() => {
        setSelectedImage(null);
        setIsCorrect(null);
        setActiveLine(null);
        setSelectedSound(null);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-pink-50 to-yellow-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={activities.length}
        pointsPerQuestion={10}
        onSummaryGenerated={(summary: WorksheetSummary) => {
          console.log('Worksheet Summary:', summary);
        }}
      >
        {({ score, markCorrect, markAttempted }) => (
          <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
            {/* Score Display */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4 shadow-lg mb-6">
              <div className="max-w-4xl mx-auto">
                <ScoreDisplay 
                  score={score}
                  totalQuestions={activities.length * 10}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-6 border-4 border-purple-200">
              <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">
                    Let's Match Sounds and Pictures!
                  </h2>
                  <div className="text-lg text-purple-600 font-medium">
                    Listen carefully and find the matching picture 🎯
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 w-full">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-3 text-amber-700 font-medium">
                      <span className="text-2xl">1️⃣</span>
                      <p className="text-base">Click on a sound button to listen 🔊</p>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-amber-700 font-medium">
                      <span className="text-2xl">2️⃣</span>
                      <p className="text-base">Find and click the matching picture ➡️</p>
                    </div>
                  </div>
                </div>

                {/* Matching Area */}
                <div 
                  id="matching-container" 
                  className="w-full flex flex-row justify-between items-start gap-8 relative p-4 min-h-[400px]"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setActiveLine(null)}
                >
                  {/* SVG for connecting lines */}
                  <svg 
                    className="absolute inset-0 pointer-events-none z-10" 
                    style={{ minHeight: '400px' }}
                    width="100%" 
                    height="100%"
                    preserveAspectRatio="none"
                  >
                    {/* Completed lines */}
                    {Object.entries(completedPairs).map(([id, image]) => {
                      const soundElement = document.getElementById(`sound-${id}`);
                      const imageElement = document.getElementById(`image-${image}`);
                      if (soundElement && imageElement) {
                        const coords = calculateLineCoordinates(soundElement, imageElement);
                        if (coords) {
                          return (
                            <g key={id}>
                              <line
                                x1={coords.x1}
                                y1={coords.y1}
                                x2={coords.x2}
                                y2={coords.y2}
                                stroke="#22c55e"
                                strokeWidth="3"
                                style={{ pointerEvents: 'none' }}
                              />
                              <circle
                                cx={coords.x1}
                                cy={coords.y1}
                                r="6"
                                fill="#22c55e"
                                style={{ pointerEvents: 'none' }}
                              />
                              <circle
                                cx={coords.x2}
                                cy={coords.y2}
                                r="6"
                                fill="#22c55e"
                                style={{ pointerEvents: 'none' }}
                              />
                            </g>
                          );
                        }
                      }
                      return null;
                    })}
                    {/* Active line while selecting */}
                    {activeLine && (
                      <g>
                        <line
                          x1={activeLine.x1}
                          y1={activeLine.y1}
                          x2={activeLine.x2}
                          y2={activeLine.y2}
                          stroke={isCorrect === null ? '#818cf8' : isCorrect ? '#22c55e' : '#ef4444'}
                          strokeWidth="3"
                          strokeDasharray={isCorrect === null ? '8,8' : 'none'}
                          style={{ pointerEvents: 'none' }}
                        />
                        <circle
                          cx={activeLine.x1}
                          cy={activeLine.y1}
                          r="6"
                          fill={isCorrect === null ? '#818cf8' : isCorrect ? '#22c55e' : '#ef4444'}
                          style={{ pointerEvents: 'none' }}
                        />
                        <circle
                          cx={activeLine.x2}
                          cy={activeLine.y2}
                          r="6"
                          fill={isCorrect === null ? '#818cf8' : isCorrect ? '#22c55e' : '#ef4444'}
                          style={{ pointerEvents: 'none' }}
                        />
                      </g>
                    )}
                  </svg>

                  {/* Sound Buttons Column */}
                  <div className="w-5/12 space-y-4 relative z-0">
                    {activities.map((activity) => (
                      <motion.button
                        id={`sound-${activity.id}`}
                        key={activity.id}
                        onClick={() => {
                          handleSoundClick(activity.id);
                          markAttempted();
                        }}
                        className={`w-full aspect-square md:w-32 md:h-32 relative rounded-xl flex flex-col items-center justify-center gap-3 transition-all shadow-md hover:shadow-lg ${selectedSound === activity.id ? 'bg-gradient-to-r from-purple-100 to-purple-200 border-2 border-purple-400' : completedPairs[activity.id] ? 'bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-400' : 'bg-gradient-to-r from-blue-50 to-indigo-100 border-2 border-blue-200 hover:border-purple-300'}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={!!completedPairs[activity.id]}
                      >
                        <span className="text-3xl">🔊</span>
                        {completedPairs[activity.id] && (
                          <span className="absolute top-1 right-1 text-green-600 text-lg">✨</span>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Center Line */}
                  <div className="w-2/12 flex justify-center relative z-0">
                    <div className="h-full w-1 bg-gradient-to-b from-purple-200 via-pink-200 to-yellow-200 rounded-full"></div>
                  </div>

                  {/* Image Options Column */}
                  <div className="w-5/12 flex flex-col items-center space-y-4 relative z-0">
                    {shuffledImages.map((image, index) => (
                      <motion.button
                        id={`image-${image}`}
                        key={index}
                        onClick={(e) => {
                          if (selectedSound) {
                            handleImageClick(image, e.currentTarget);
                            if (activities.find(a => a.id === selectedSound)?.image === image) {
                              markCorrect();
                            }
                          }
                        }}
                        className={`w-full aspect-square md:w-32 md:h-32 mx-auto rounded-xl overflow-hidden transition-all shadow-md hover:shadow-lg ${
                          selectedImage === image
                            ? isCorrect
                              ? 'border-4 border-green-400'
                              : 'border-4 border-red-400'
                            : Object.values(completedPairs).includes(image)
                            ? 'border-4 border-green-400'
                            : 'border-2 border-yellow-200 hover:border-purple-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={Object.values(completedPairs).includes(image)}
                      >
                        <img 
                          src={image} 
                          alt="Activity" 
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Completion Message */}
            {Object.keys(completedPairs).length === activities.length && (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mt-6 max-w-md mx-auto shadow-xl border-4 border-purple-200 overflow-hidden"
              >
                {/* Confetti Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {Array.from({ length: 30 }).map((_, index) => (
                    <motion.div
                      key={index}
                      className="w-2 h-2 rounded-full bg-yellow-400"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: [ -20, 50 ], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, delay: Math.random() * 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                      style={{
                        position: 'absolute',
                        left: `${Math.random() * 100}%`
                      }}
                    />
                  ))}
                </motion.div>

                <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">
                  🎉 Amazing Job! You're a Matching Star! 🌟
                </h3>
                <ul className="space-y-4">
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-xl"
                  >
                    <span className="text-2xl">👂</span>
                    <span className="font-medium text-purple-700">Super Listening Skills!</span>
                  </motion.li>
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-xl"
                  >
                    <span className="text-2xl">🎯</span>
                    <span className="font-medium text-purple-700">Perfect Matching!</span>
                  </motion.li>
                  <motion.li 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-xl"
                  >
                    <span className="text-2xl">🌟</span>
                    <span className="font-medium text-purple-700">Activity Master!</span>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default ListeningActivitiesWorksheet; 