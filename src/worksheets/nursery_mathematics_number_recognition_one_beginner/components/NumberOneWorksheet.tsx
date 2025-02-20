import React, { useState, useRef, useCallback, useEffect } from 'react';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import { motion } from 'framer-motion';
import './NumberOneWorksheet.css';
import { createRoot } from 'react-dom/client';

const TOTAL_ATTEMPTS = 5;
const POINTS_PER_ATTEMPT = 10; // Changed to 10 points per tracing attempt (50 total)
const POINTS_PER_IDENTIFICATION = 10; // 10 points per correct identification (50 total)
const TOLERANCE = 15;

// Define the number one path
const NUMBER_ONE = {
  value: '1',
  viewBox: '0 0 200 200',
  paths: [
    { id: 'vertical', d: 'M100 40L100 160', order: 1 }
  ]
};

// Define the grid items for the identification game
const GRID_ITEMS = [
  { id: 1, value: '1', isTarget: true },
  { id: 2, value: '1', isTarget: true },
  { id: 3, value: '1', isTarget: true },
  { id: 4, value: '1', isTarget: true },
  { id: 5, value: '1', isTarget: true },
  { id: 6, value: '2', isTarget: false },
  { id: 7, value: '7', isTarget: false },
  { id: 8, value: '👻', isTarget: false },
  { id: 9, value: '4', isTarget: false },
  { id: 10, value: '🌟', isTarget: false },
  { id: 11, value: '3', isTarget: false },
  { id: 12, value: '🎈', isTarget: false },
  { id: 13, value: '6', isTarget: false },
  { id: 14, value: '9', isTarget: false },
  { id: 15, value: '🎨', isTarget: false },
  { id: 16, value: '5', isTarget: false }
];

// Add color options constant at the top with the other constants
const COLOR_OPTIONS = [
  { name: 'Blue', value: '#2563eb', background: 'bg-blue-500' },
  { name: 'Purple', value: '#7c3aed', background: 'bg-purple-500' },
  { name: 'Pink', value: '#ec4899', background: 'bg-pink-500' },
  { name: 'Green', value: '#10b981', background: 'bg-green-500' },
  { name: 'Orange', value: '#f97316', background: 'bg-orange-500' },
  { name: 'Red', value: '#ef4444', background: 'bg-red-500' }
];

interface TrackerFunctions {
  addPoints: (points: number) => void;
  markCorrect: () => void;
  markIncorrect: () => void;
  markAttempted: () => void;
}

const NumberOneWorksheet: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [currentPath, setCurrentPath] = useState<{ id: string; d: string } | null>(NUMBER_ONE.paths[0]);
  const [filledPaths, setFilledPaths] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [pathLengths, setPathLengths] = useState<Record<string, number>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastPoint, setLastPoint] = useState<number>(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [gamePhase, setGamePhase] = useState<'tracing' | 'identification'>('tracing');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [shuffledItems, setShuffledItems] = useState<typeof GRID_ITEMS>([]);
  const [identificationComplete, setIdentificationComplete] = useState(false);
  const trackerFunctionsRef = useRef<TrackerFunctions | null>(null);
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0].value);

  // Optional: Add voice feedback
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  useEffect(() => {
    // Calculate path lengths on mount
    const lengths: Record<string, number> = {};
    NUMBER_ONE.paths.forEach(path => {
      const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      tempPath.setAttribute('d', path.d);
      lengths[path.id] = tempPath.getTotalLength();
    });
    setPathLengths(lengths);
  }, []);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  const getRelativePoint = useCallback((e: React.PointerEvent, svg: SVGSVGElement) => {
    const point = svg.createSVGPoint();
    const rect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    point.x = ((e.clientX - rect.left) / rect.width) * viewBox.width;
    point.y = ((e.clientY - rect.top) / rect.height) * viewBox.height;
    return point;
  }, []);

  const getDistance = useCallback((p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!svgRef.current || !pathRef.current || !currentPath) return;

    const point = getRelativePoint(e, svgRef.current);
    const pathElement = pathRef.current;
    const length = pathElement.getTotalLength();
    
    // Find closest point on the path
    let minDistance = Infinity;
    let closestPointOnPath = 0;
    
    // Search more points if we've already started tracing
    const searchStart = progress > 0 ? lastPoint - 20 : 0;
    const searchEnd = progress > 0 ? lastPoint + 20 : Math.min(20, length);
    
    for (let i = searchStart; i <= searchEnd; i += 2) {
      if (i < 0) continue;
      const pathPoint = pathElement.getPointAtLength(i);
      const distance = getDistance(point, pathPoint);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestPointOnPath = i;
      }
    }
    
    // Allow continuing from current progress or starting from beginning
    if (minDistance < TOLERANCE) {
      setIsDrawing(true);
      if (progress === 0) {
        setProgress(0);
        setLastPoint(0);
      } else {
        // Continue from where we left off
        setLastPoint(closestPointOnPath);
      }
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  }, [currentPath, getRelativePoint, getDistance, progress, lastPoint]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDrawing || !svgRef.current || !pathRef.current || !currentPath) return;

    const point = getRelativePoint(e, svgRef.current);
    const pathElement = pathRef.current;
    const length = pathElement.getTotalLength();
    let minDistance = Infinity;
    let closestPoint = lastPoint;

    // Search for closest point ahead of last point
    for (let i = lastPoint; i <= Math.min(lastPoint + 20, length); i += 2) {
      const pathPoint = pathElement.getPointAtLength(i);
      const distance = getDistance(point, pathPoint);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestPoint = i;
      }
    }

    if (minDistance < TOLERANCE) {
      setLastPoint(closestPoint);
      setProgress(closestPoint / length);

      if (closestPoint >= length * 0.95) {
        handlePathComplete();
      }
    }
  }, [isDrawing, currentPath, lastPoint, getRelativePoint, getDistance]);

  const handlePathComplete = useCallback(() => {
    if (!currentPath || !trackerFunctionsRef.current) return;

    setFilledPaths(prev => [...prev, currentPath.id]);
    setShowSuccess(true);
    speak("Great job!");
    trackerFunctionsRef.current.addPoints(POINTS_PER_ATTEMPT);
    trackerFunctionsRef.current.markAttempted();

    setTimeout(() => {
      setShowSuccess(false);

      if (filledPaths.length + 1 === NUMBER_ONE.paths.length) {
        setAttempts(prev => prev + 1);
        
        // Create falling ones celebration
        const colors = ['#2563eb', '#7c3aed', '#ec4899', '#10b981', '#f97316', '#ef4444'];
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '50';
        document.body.appendChild(container);

        const root = createRoot(container);
        root.render(
          <div className="w-full h-full">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: -50,
                  rotate: Math.random() * 360,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{ 
                  y: window.innerHeight + 50,
                  rotate: Math.random() * 720 - 360
                }}
                transition={{ 
                  duration: Math.random() * 2 + 2,
                  ease: "linear",
                  delay: Math.random() * 0.5
                }}
                style={{
                  position: 'absolute',
                  color: colors[Math.floor(Math.random() * colors.length)],
                  fontSize: '2rem',
                  fontWeight: 'bold'
                }}
              >
                1
              </motion.div>
            ))}
          </div>
        );

        // Cleanup after animation
        setTimeout(() => {
          document.body.removeChild(container);
        }, 4000);

        if (attempts < TOTAL_ATTEMPTS - 1) {
          setTimeout(() => {
            setFilledPaths([]);
            setCurrentPath(NUMBER_ONE.paths[0]);
            setProgress(0);
            setLastPoint(0);
            speak("Let's do it again! Try to make it even better!");
          }, 1500);
        } else {
          speak("Great job with the tracing! Now, let's find all the number ones!");
          setGamePhase('identification');
        }
      }
    }, 1500);

    setIsDrawing(false);
    setCurrentPath(null);
    setProgress(0);
    setLastPoint(0);
  }, [currentPath, filledPaths.length, attempts, speak]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (isDrawing && svgRef.current) {
      svgRef.current.releasePointerCapture(e.pointerId);
    }
    setIsDrawing(false);
  }, [isDrawing]);

  // Shuffle array function
  const shuffleArray = useCallback((array: typeof GRID_ITEMS) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Initialize shuffled items
  useEffect(() => {
    setShuffledItems(shuffleArray(GRID_ITEMS));
  }, [shuffleArray]);

  // Handle item selection in identification game
  const handleItemClick = useCallback((id: number, isTarget: boolean) => {
    if (!trackerFunctionsRef.current) return;

    if (selectedItems.includes(id)) {
      setSelectedItems(prev => prev.filter(itemId => itemId !== id));
    } else if (selectedItems.length < 5) {
      setSelectedItems(prev => [...prev, id]);
      trackerFunctionsRef.current.markAttempted();
      
      if (isTarget) {
        speak("Good choice!");
        trackerFunctionsRef.current.addPoints(POINTS_PER_IDENTIFICATION);
      } else {
        speak("Try again!");
      }

      const updatedSelections = [...selectedItems, id];
      const correctSelections = updatedSelections.filter(
        itemId => shuffledItems.find(item => item.id === itemId)?.isTarget
      );
      
      if (correctSelections.length === 5) {
        setIdentificationComplete(true);
        speak("Amazing! You found all the ones!");
        
        // Create falling ones celebration with more ones and longer duration
        const colors = ['#2563eb', '#7c3aed', '#ec4899', '#10b981', '#f97316', '#ef4444'];
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '50';
        document.body.appendChild(container);

        const root = createRoot(container);
        root.render(
          <div className="w-full h-full">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: -50,
                  rotate: Math.random() * 360,
                  scale: Math.random() * 0.7 + 0.5
                }}
                animate={{ 
                  y: window.innerHeight + 50,
                  rotate: Math.random() * 720 - 360
                }}
                transition={{ 
                  duration: Math.random() * 3 + 3,
                  ease: "linear",
                  delay: Math.random() * 1
                }}
                style={{
                  position: 'absolute',
                  color: colors[Math.floor(Math.random() * colors.length)],
                  fontSize: '2.5rem',
                  fontWeight: 'bold'
                }}
              >
                1
              </motion.div>
            ))}
          </div>
        );

        // Cleanup after animation
        setTimeout(() => {
          document.body.removeChild(container);
        }, 6000);
      }
    }
  }, [selectedItems, shuffledItems, speak]);

  const handleRetry = () => {
    setFilledPaths([]);
    setCurrentPath(NUMBER_ONE.paths[0]);
    setProgress(0);
    setLastPoint(0);
    setShowSuccess(false);
    setAnimationKey(prev => prev + 1);
    setAttempts(0);
    setGamePhase('tracing');
    setSelectedItems([]);
    setIdentificationComplete(false);
    setShuffledItems(shuffleArray(GRID_ITEMS));
    speak("Let's start again from the beginning!");
  };

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ addPoints, markCorrect, markAttempted, markIncorrect, score }) => {
        // Update tracker functions ref
        trackerFunctionsRef.current = { addPoints, markCorrect, markIncorrect, markAttempted };

        return (
          <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="px-0 md:px-4 py-4 max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score}
                totalQuestions={100}
              />
              
              <div className="bg-white rounded-2xl shadow-lg p-4 mt-4 border-4 border-indigo-200">
                <motion.h1 
                  className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-4"
                  initial={{ scale: 1 }}
                  animate={{ scale: showSuccess ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {gamePhase === 'tracing' ? "Let's Write Number One!" : "Find All The Ones!"}
                </motion.h1>

                {gamePhase === 'tracing' ? (
                  <>
                    {/* Animation Section */}
                    <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                      <h2 className="text-lg font-semibold text-indigo-600 mb-2">Watch How to Write</h2>
                      <div className="relative w-full aspect-[2/1] max-w-md mx-auto bg-white rounded-lg overflow-hidden border-2 border-indigo-100">
                        <svg
                          viewBox={NUMBER_ONE.viewBox}
                          className="w-full h-full"
                        >
                          <pattern id="demo-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e7ff" strokeWidth="1"/>
                          </pattern>
                          <rect width="200" height="200" fill="url(#demo-grid)" />

                          {NUMBER_ONE.paths.map((path) => (
                            <path
                              key={`animation-${path.id}-${animationKey}`}
                              d={path.d}
                              fill="none"
                              stroke="#2563eb"
                              strokeWidth="24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="number-path-animation"
                            />
                          ))}
                        </svg>
                      </div>
                    </div>

                    {/* Color Picker Section */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-indigo-600 mb-2 text-center">
                        Choose Your Color!
                      </h3>
                      <div className="flex justify-center gap-2 flex-wrap">
                        {COLOR_OPTIONS.map((color) => (
                          <motion.button
                            key={color.value}
                            onClick={() => setSelectedColor(color.value)}
                            className={`w-12 h-12 rounded-full ${color.background} shadow-md 
                              ${selectedColor === color.value ? 'ring-4 ring-offset-2 ring-indigo-300' : ''}
                            `}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Practice Section */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-indigo-600">Practice Area</h2>
                        <p className="text-sm text-indigo-600 font-medium">
                          {attempts === TOTAL_ATTEMPTS ? 
                            "All practice completed!" : 
                            `Practice ${attempts + 1} of ${TOTAL_ATTEMPTS}`
                          }
                        </p>
                      </div>

                      <div className="relative w-full aspect-square max-w-md mx-auto bg-white rounded-lg overflow-hidden border-2 border-indigo-100 shadow-lg">
                        <svg
                          ref={svgRef}
                          viewBox={NUMBER_ONE.viewBox}
                          className="w-full h-full touch-none"
                          style={{ touchAction: 'none' }}
                          onPointerDown={handlePointerDown}
                          onPointerMove={handlePointerMove}
                          onPointerUp={handlePointerUp}
                          onPointerLeave={handlePointerUp}
                          onPointerCancel={handlePointerUp}
                        >
                          <pattern id="practice-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e7ff" strokeWidth="1"/>
                          </pattern>
                          <rect width="200" height="200" fill="url(#practice-grid)" />

                          {/* Guide Paths Layer */}
                          <g>
                            {NUMBER_ONE.paths.map((path) => (
                              <path
                                key={`guide-${path.id}`}
                                d={path.d}
                                fill="none"
                                stroke={selectedColor}
                                strokeWidth="24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeOpacity="0.15"
                              />
                            ))}
                          </g>

                          {/* Completed Paths Layer */}
                          <g>
                            {NUMBER_ONE.paths.map((path) => 
                              filledPaths.includes(path.id) && (
                                <path
                                  key={`completed-${path.id}`}
                                  d={path.d}
                                  fill="none"
                                  stroke={selectedColor}
                                  strokeWidth="24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              )
                            )}
                          </g>
                          
                          {/* Current Tracing Path Layer */}
                          {currentPath && (
                            <g>
                              <path
                                ref={pathRef}
                                d={currentPath.d}
                                fill="none"
                                stroke={selectedColor}
                                strokeWidth="24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray={pathLengths[currentPath.id] || 0}
                                strokeDashoffset={
                                  pathLengths[currentPath.id]
                                    ? pathLengths[currentPath.id] * (1 - progress)
                                    : 0
                                }
                              />
                            </g>
                          )}

                          {/* Start point */}
                          {!filledPaths.includes('vertical') && (
                            <circle
                              cx="100"
                              cy="40"
                              r="8"
                              className="animate-pulse"
                              fill={selectedColor}
                              fillOpacity="0.5"
                            />
                          )}
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                    <h2 className="text-lg font-semibold text-indigo-600 mb-4">
                      Find and click all five number ones!
                    </h2>
                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                      {shuffledItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => !identificationComplete && handleItemClick(item.id, item.isTarget)}
                          className={`aspect-square text-3xl font-bold rounded-lg shadow-md transition-colors
                            ${selectedItems.includes(item.id)
                              ? item.isTarget
                                ? 'bg-green-100 border-2 border-green-500 text-green-700'
                                : 'bg-red-100 border-2 border-red-500 text-red-700'
                              : 'bg-white hover:bg-indigo-50 text-indigo-600'
                            }
                          `}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={identificationComplete}
                        >
                          {item.value}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 text-center space-x-4">
                  {(attempts === TOTAL_ATTEMPTS || identificationComplete) && (
                    <motion.button
                      onClick={handleRetry}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-colors font-medium shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Try Again
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default NumberOneWorksheet; 