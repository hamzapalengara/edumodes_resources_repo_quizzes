import React, { useState, useRef, useCallback, useEffect } from 'react';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import { motion } from 'framer-motion';
import './NumberTwoWorksheet.css';
import { createRoot } from 'react-dom/client';

const TOTAL_ATTEMPTS = 5;
const TOLERANCE = 25;

// Define the number two path - curved top, diagonal line, horizontal base
const NUMBER_TWO = {
  value: '2',
  viewBox: '0 0 200 200',
  paths: [
    { 
      id: 'top_curve', 
      d: 'M60 60C60 40 80 30 100 30C120 30 140 40 140 60C140 90 60 140 60 160', 
      order: 1,
      startPoint: { x: 60, y: 60 }
    },
    { 
      id: 'base', 
      d: 'M60 160L140 160', 
      order: 2,
      startPoint: { x: 60, y: 160 }
    }
  ]
};

// Define the grid items for the identification game
const GRID_ITEMS = [
  { id: 1, value: '2', isTarget: true },
  { id: 2, value: '2', isTarget: true },
  { id: 3, value: '2', isTarget: true },
  { id: 4, value: '2', isTarget: true },
  { id: 5, value: '2', isTarget: true },
  { id: 6, value: '1', isTarget: false },
  { id: 7, value: '7', isTarget: false },
  { id: 8, value: '👻', isTarget: false },
  { id: 9, value: '5', isTarget: false },
  { id: 10, value: '🌟', isTarget: false },
  { id: 11, value: '3', isTarget: false },
  { id: 12, value: '🎈', isTarget: false },
  { id: 13, value: '6', isTarget: false },
  { id: 14, value: '9', isTarget: false },
  { id: 15, value: '🎨', isTarget: false },
  { id: 16, value: '4', isTarget: false }
];

// Add color options constant
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

const NumberTwoWorksheet: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [currentPath, setCurrentPath] = useState<{ id: string; d: string } | null>(NUMBER_TWO.paths[0]);
  const [filledPaths, setFilledPaths] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [pathLengths, setPathLengths] = useState<Record<string, number>>({});
  const [lastPoint, setLastPoint] = useState<number>(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [gamePhase, setGamePhase] = useState<'tracing' | 'identification'>('tracing');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [shuffledItems, setShuffledItems] = useState<typeof GRID_ITEMS>([]);
  const [identificationComplete, setIdentificationComplete] = useState(false);
  const trackerFunctionsRef = useRef<TrackerFunctions | null>(null);
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0].value);
  const [isAnimating, setIsAnimating] = useState(true);

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
    NUMBER_TWO.paths.forEach(path => {
      const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      tempPath.setAttribute('d', path.d);
      lengths[path.id] = tempPath.getTotalLength();
    });
    setPathLengths(lengths);
  }, []);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
    // Send summary data to parent or analytics
    window.parent?.postMessage({
      type: 'WORKSHEET_COMPLETE',
      data: {
        totalQuestions: summary.summary.total_questions,
        questionsAttempted: summary.summary.questions_attempted,
        correctAnswers: summary.summary.correct_answers,
        incorrectAnswers: summary.summary.incorrect_answers,
        totalScore: summary.summary.total_score,
        pointsPerQuestion: summary.summary.points_per_correct_question,
        timeSpentSeconds: summary.summary.time_spent_seconds
      }
    }, '*');
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
    
    // For the base stroke, make it easier to start from the beginning
    if (currentPath.id === 'base') {
      const startPoint = { x: 60, y: 160 };
      const distanceToStart = getDistance(point, startPoint);
      
      if (distanceToStart < TOLERANCE * 1.5) { // Increased tolerance for base stroke start
        setIsDrawing(true);
        setProgress(0);
        setLastPoint(0);
        e.currentTarget.setPointerCapture(e.pointerId);
        return;
      }
    }
    
    // Search more points if we've already started tracing
    const searchStart = progress > 0 ? lastPoint - 25 : 0;
    const searchEnd = progress > 0 ? lastPoint + 25 : Math.min(25, length);
    
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
    
    // Different feedback based on path completion
    if (currentPath.id === 'base') {
      speak("Excellent! You wrote number two!");
    } else {
      speak("Good start! Now complete the bottom line.");
    }

    setTimeout(() => {
      // Move to next path or complete attempt
      const currentPathIndex = NUMBER_TWO.paths.findIndex(p => p.id === currentPath.id);
      const nextPath = NUMBER_TWO.paths[currentPathIndex + 1];

      if (nextPath) {
        setCurrentPath(nextPath);
        setProgress(0);
        setLastPoint(0);
      } else {
        if (trackerFunctionsRef.current) {
          trackerFunctionsRef.current.markAttempted();
          trackerFunctionsRef.current.markCorrect();
        }
        setAttempts(prev => prev + 1);
        
        // Create falling twos celebration
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
                2
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
            setCurrentPath(NUMBER_TWO.paths[0]);
            setProgress(0);
            setLastPoint(0);
            speak("Let's write number two again!");
          }, 1500);
        } else {
          speak("Amazing! You've learned to write number two! Now let's find all the twos!");
          setGamePhase('identification');
        }
      }
    }, 1500);

    setIsDrawing(false);
  }, [currentPath, attempts, speak]);

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
        const updatedSelections = [...selectedItems, id];
        const correctCount = updatedSelections.filter(
          itemId => shuffledItems.find(item => item.id === itemId)?.isTarget
        ).length;
        
        // Dynamic feedback based on progress
        if (correctCount === 1) {
          speak("Yes! That's a two! Find more!");
        } else if (correctCount === 3) {
          speak("Great job! Just a couple more twos to find!");
        } else if (correctCount === 4) {
          speak("Almost there! Find one more two!");
        } else {
          speak("Yes! That's a two!");
        }
        trackerFunctionsRef.current.markCorrect();
      } else {
        speak("Oops! That's not a two. Keep looking!");
        trackerFunctionsRef.current.markIncorrect();
      }

      const updatedSelections = [...selectedItems, id];
      const correctSelections = updatedSelections.filter(
        itemId => shuffledItems.find(item => item.id === itemId)?.isTarget
      );
      
      if (correctSelections.length === 5) {
        setIdentificationComplete(true);
        speak("Amazing! You found all the twos!");
        
        // Create falling twos celebration with more twos and longer duration
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
                2
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

  // Handle animation replay
  const handleReplayAnimation = useCallback(() => {
    setIsAnimating(false);
    setAnimationKey(prev => prev + 1);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  }, []);

  // Initial animation setup
  useEffect(() => {
    const timer = setTimeout(() => {
      setGamePhase('tracing');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ addPoints, markCorrect, markAttempted, markIncorrect, score }) => {
        trackerFunctionsRef.current = { addPoints, markCorrect, markAttempted, markIncorrect };
        
        return (
          <div className="min-h-screen bg-blue-50">
            <div className="px-0 md:px-4 py-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
                  Learning to Write Number Two
                </h1>

                {/* Score Display */}
                <div className="mb-6">
                  <ScoreDisplay score={score} totalQuestions={100} />
                </div>

                {gamePhase === 'tracing' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Animation Section */}
                    <div className="w-full">
                      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-4 shadow-lg border-2 border-indigo-200">
                        <h2 className="text-xl font-bold text-center text-indigo-600 mb-4 flex items-center justify-center gap-2">
                          <span className="text-2xl">✨</span>
                          Watch How to Write Number 2
                          <span className="text-2xl">✨</span>
                        </h2>
                        <div className="relative w-4/5 mx-auto aspect-square bg-white rounded-xl overflow-hidden border-4 border-dashed border-indigo-200 shadow-inner">
                          <svg
                            key={animationKey}
                            viewBox={NUMBER_TWO.viewBox}
                            className="w-full h-full"
                          >
                            <pattern id="demo-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e7ff" strokeWidth="1"/>
                            </pattern>
                            <rect width="200" height="200" fill="url(#demo-grid)" className="opacity-50"/>
                            <circle cx="100" cy="100" r="90" fill="rgba(99, 102, 241, 0.1)"/>

                            {NUMBER_TWO.paths.map((path) => (
                              <path
                                key={`animation-${path.id}-${animationKey}`}
                                d={path.d}
                                fill="none"
                                stroke="#2563eb"
                                strokeWidth="16"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={isAnimating ? "number-path-animation" : ""}
                                style={{
                                  animationDelay: `${(path.order - 1) * 2}s`,
                                  strokeDasharray: "1000",
                                  strokeDashoffset: isAnimating ? undefined : "0",
                                  strokeOpacity: isAnimating ? undefined : "1"
                                }}
                              />
                            ))}
                          </svg>
                        </div>
                        <div className="relative mt-4 flex justify-center">
                          <button 
                            onClick={handleReplayAnimation} 
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 transform hover:scale-105"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                            </svg>
                            Watch Again!
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Practice Section */}
                    <div className="w-full">
                      <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-2xl p-4 shadow-lg border-2 border-indigo-200">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-center text-indigo-600 mb-2 flex items-center justify-center gap-2">
                            <span className="text-2xl">🎨</span>
                            Pick Your Favorite Color!
                          </h3>
                          <div className="flex justify-center gap-3 flex-wrap p-2 bg-white/50 rounded-xl">
                            {COLOR_OPTIONS.map((color) => (
                              <motion.button
                                key={color.value}
                                onClick={() => setSelectedColor(color.value)}
                                className={`w-12 h-12 rounded-full ${color.background} shadow-md transform hover:scale-110 transition-transform duration-200
                                  ${selectedColor === color.value ? 'ring-4 ring-offset-2 ring-indigo-300 scale-110' : ''}
                                `}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-inner">
                          <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
                              <span className="text-2xl">✏️</span>
                              Your Turn!
                            </h2>
                            <p className="text-sm font-bold text-indigo-600 bg-white px-3 py-1 rounded-full shadow">
                              {attempts === TOTAL_ATTEMPTS ? 
                                "All done! 🎉" : 
                                `Try ${attempts + 1} of ${TOTAL_ATTEMPTS} ✨`
                              }
                            </p>
                          </div>

                          <div className="relative w-full aspect-square max-w-md mx-auto bg-white rounded-xl overflow-hidden border-4 border-dashed border-indigo-200 shadow-lg">
                            <svg
                              ref={svgRef}
                              viewBox={NUMBER_TWO.viewBox}
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
                              <rect width="200" height="200" fill="url(#practice-grid)" className="opacity-50"/>
                              <circle cx="100" cy="100" r="90" fill="rgba(99, 102, 241, 0.1)"/>

                              {/* Guide Paths Layer */}
                              <g>
                                {NUMBER_TWO.paths.map((path) => (
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
                                {NUMBER_TWO.paths.map((path) => 
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

                              {/* Start point with animation */}
                              {!filledPaths.includes('top_curve') && (
                                <>
                                  <circle
                                    cx="60"
                                    cy="60"
                                    r="14"
                                    className="animate-ping"
                                    fill={selectedColor}
                                    fillOpacity="0.2"
                                  />
                                  <circle
                                    cx="60"
                                    cy="60"
                                    r="10"
                                    className="animate-pulse"
                                    fill={selectedColor}
                                    fillOpacity="0.5"
                                  />
                                </>
                              )}

                              {/* Bottom stroke start indicator */}
                              {filledPaths.includes('top_curve') && !filledPaths.includes('base') && (
                                <g className="bottom-start-indicator">
                                  <circle
                                    cx="60"
                                    cy="160"
                                    r="14"
                                    fill={selectedColor}
                                    fillOpacity="0.2"
                                  />
                                  <circle
                                    cx="60"
                                    cy="160"
                                    r="10"
                                    fill={selectedColor}
                                    fillOpacity="0.5"
                                  />
                                </g>
                              )}
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {gamePhase === 'identification' && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                    <h2 className="text-lg font-semibold text-indigo-600 mb-4">
                      Find and click all five number twos!
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

                <div className="mt-8 text-center">
                  {(attempts === TOTAL_ATTEMPTS || identificationComplete) && (
                    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-6 max-w-2xl mx-auto">
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-3xl">🎉 🌟 🎨</div>
                        <h2 className="text-2xl font-bold text-indigo-600">Amazing Job!</h2>
                        <p className="text-lg text-indigo-500">
                          You've learned to write and find number two!
                        </p>
                        <div className="flex gap-2 text-2xl mt-2">
                          <span className="animate-bounce delay-100">2</span>
                          <span className="animate-bounce delay-200">✨</span>
                          <span className="animate-bounce delay-300">2</span>
                          <span className="animate-bounce delay-400">✨</span>
                          <span className="animate-bounce delay-500">2</span>
                        </div>
                      </div>
                    </div>
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

export default NumberTwoWorksheet; 