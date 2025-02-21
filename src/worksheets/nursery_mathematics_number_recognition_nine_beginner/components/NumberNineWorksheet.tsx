import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const REQUIRED_PRACTICES = 5;
const TOTAL_QUESTIONS = REQUIRED_PRACTICES + 9; // 5 practices + 9 numbers to find

interface ConfettiItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'emoji' | 'number';
}

export const NUMBER_NINE = {
  value: '9',
  fruit: 'nine',
  fruitEmoji: '🍇',
  fruitCount: 9,
  viewBox: '0 0 200 200',
  paths: [
    { id: 'circle', d: 'M140 60C140 40 120 20 100 20C80 20 60 40 60 60C60 80 80 100 100 100C120 100 140 80 140 60', order: 1 },
    { id: 'line', d: 'M140 60L140 160', order: 2 }
  ]
};

// Modify NUMBER_GRID to include 9 number 9s with grapes
const NUMBER_GRID = [
  '1 🍎', '9 🍇', '7 🍌', '2 🍊', '9 🍇',
  '3 🍐', '9 🍇', '9 🍇', '6 🍎', '9 🍇',
  '5 🍌', '9 🍇', '7 🍇', '9 🍇', '1 🍎',
  '8 🍊', '9 🍇', '6 🍌', '9 🍇', '4 🍓'
];

// Add presetColors constant at the top of the file, after other imports
const presetColors = [
  { color: '#0EA5E9', name: 'Blue' },    // Cyan-500
  { color: '#22C55E', name: 'Green' },   // Green-500
  { color: '#EF4444', name: 'Red' },     // Red-500
  { color: '#F59E0B', name: 'Orange' },  // Amber-500
  { color: '#6366F1', name: 'Indigo' },  // Indigo-500
  { color: '#EC4899', name: 'Pink' },    // Pink-500
] as const;

const NumberNineWorksheet: React.FC = () => {
  // Handle summary generation
  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <WorksheetTracker
      totalQuestions={TOTAL_QUESTIONS}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markAttempted, score }) => {
        const [currentPathIndex, setCurrentPathIndex] = useState(0);
        const [filledPaths, setFilledPaths] = useState<string[]>([]);
        const [showSuccess, setShowSuccess] = useState(false);
        const [isDrawing, setIsDrawing] = useState(false);
        const [progress, setProgress] = useState(0);
        const [lastPoint, setLastPoint] = useState<number>(0);
        const [pathLengths, setPathLengths] = useState<{ [key: string]: number }>({});
        const [confetti, setConfetti] = useState<ConfettiItem[]>([]);
        const [lastValidPoint, setLastValidPoint] = useState<{ x: number; y: number } | null>(null);
        const [practiceCount, setPracticeCount] = useState(0);
        const [isCompleted, setIsCompleted] = useState(false);
        const [foundNines, setFoundNines] = useState<number[]>([]);
        const [currentColor, setCurrentColor] = useState('#22d3ee');

        // Refs
        const svgRef = useRef<SVGSVGElement>(null);
        const pathRef = useRef<SVGPathElement>(null);

        // Speech synthesis
        const speak = useCallback((text: string) => {
          if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
          }
        }, []);

        // Handle retry
        const handleRetry = useCallback(() => {
          if (practiceCount >= REQUIRED_PRACTICES) {
            speak("Great job! You've completed all required practices!");
            return;
          }
          
          setCurrentPathIndex(0);
          setFilledPaths([]);
          setProgress(0);
          setLastPoint(0);
          setLastValidPoint(null);
          setShowSuccess(false);
          setConfetti([]);
          speak("Let's trace the number 9 again");
        }, [speak, practiceCount]);

        // Modify handlePathComplete to show picking game after tracing
        const handlePathComplete = useCallback(() => {
          const currentPath = NUMBER_NINE.paths[currentPathIndex];
          if (currentPath && !filledPaths.includes(currentPath.id)) {
            setFilledPaths(prev => [...prev, currentPath.id]);
            
            if (currentPathIndex < NUMBER_NINE.paths.length - 1) {
              setCurrentPathIndex(prev => prev + 1);
              setLastPoint(0);
              setProgress(0);
              setLastValidPoint(null);
              speak("Number 9. Let's trace the next part.");
            } else {
              setShowSuccess(true);
              const newPracticeCount = practiceCount + 1;
              setPracticeCount(newPracticeCount);

              // Add points immediately
              if (newPracticeCount <= REQUIRED_PRACTICES) {
                markCorrect();
              }

              if (newPracticeCount < REQUIRED_PRACTICES) {
                speak(`Number 9! You've completed it ${newPracticeCount} time${newPracticeCount > 1 ? 's' : ''}. ${REQUIRED_PRACTICES - newPracticeCount} more to go!`);
              } else {
                speak("Number 9! You've completed all five practices! Now let's find all the number nines in the grid below!");
                setIsCompleted(true);
              }
              
              // Create confetti
              const newConfetti: ConfettiItem[] = Array.from({ length: 40 }).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: -20,
                rotation: Math.random() * 360,
                scale: 0.5 + Math.random() * 1,
                type: Math.random() > 0.5 ? 'emoji' : 'number'
              }));
              setConfetti(newConfetti);
            }
          }
        }, [currentPathIndex, filledPaths, speak, practiceCount, markCorrect]);

        // Handle number selection in grid
        const handleNumberClick = useCallback((index: number) => {
          if (foundNines.includes(index)) return;
          
          if (NUMBER_GRID[index] === '9 🍇') {
            setFoundNines(prev => [...prev, index]);
            markCorrect();
            speak("Correct! You found a number 9!");
            
            if (foundNines.length + 1 === 9) {
              speak("Amazing! You've found all the number nines!");
            }
          } else {
            speak("That's not a 9, try again!");
          }
        }, [foundNines, markCorrect, speak]);

        // Modify reset timer to wait for voice feedback
        useEffect(() => {
          let resetTimer: NodeJS.Timeout;
          if (showSuccess) {
            resetTimer = setTimeout(() => {
              if (practiceCount < REQUIRED_PRACTICES) {
                // Wait for voice feedback (approximately 3 seconds)
                setTimeout(() => {
                  handleRetry();
                }, 3000);
              }
            }, 2000);
          }
          return () => clearTimeout(resetTimer);
        }, [showSuccess, practiceCount, handleRetry]);

        // Calculate path length
        useEffect(() => {
          if (pathRef.current && NUMBER_NINE.paths[currentPathIndex]?.id) {
            const length = pathRef.current.getTotalLength();
            setPathLengths(prev => ({
              ...prev,
              [NUMBER_NINE.paths[currentPathIndex].id]: length
            }));
          }
        }, [currentPathIndex]);

        // Initial instruction
        useEffect(() => {
          speak("Let's trace the number 9");
        }, [speak]);

        // Find closest point on path
        const findClosestPointOnPath = useCallback((pathElement: SVGPathElement, x: number, y: number) => {
          const totalLength = pathElement.getTotalLength();
          let closestPoint = null;
          let closestDistance = Infinity;
          let closestLength = 0;

          // Sample points along the path to find the closest one
          const numSamples = 50;
          for (let i = 0; i <= numSamples; i++) {
            const length = (i / numSamples) * totalLength;
            const point = pathElement.getPointAtLength(length);
            const distance = Math.hypot(point.x - x, point.y - y);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestPoint = point;
              closestLength = length;
            }
          }

          return { point: closestPoint, distance: closestDistance, length: closestLength };
        }, []);

        // Handle drawing
        const handleDrawing = useCallback((e: React.TouchEvent | React.MouseEvent) => {
          if (!isDrawing || !pathRef.current || !svgRef.current) return;

          // Prevent default behavior to avoid scrolling
          e.preventDefault();

          const svgRect = svgRef.current.getBoundingClientRect();
          const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
          const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

          // Improved coordinate conversion with viewport scaling
          const viewBox = { width: 200, height: 200 }; // Matches NUMBER_NINE.viewBox
          const svgX = ((clientX - svgRect.left) / svgRect.width) * viewBox.width;
          const svgY = ((clientY - svgRect.top) / svgRect.height) * viewBox.height;

          const { point, distance, length } = findClosestPointOnPath(pathRef.current, svgX, svgY);

          if (point && distance < 35) { // Increased tolerance for better touch handling
            const pathLength = pathRef.current.getTotalLength();
            const currentProgress = (length / pathLength) * 100;

            // More forgiving forward progress check
            if (lastValidPoint) {
              const progressDelta = Math.abs(currentProgress - (lastPoint / pathLength * 100));
              
              // Allow larger jumps if we're making forward progress
              if (progressDelta > 50 && currentProgress < (lastPoint / pathLength * 100)) {
                return;
              }
            }

            // Allow moving backward up to 50% of current progress
            if (length < lastPoint) {
              const previousProgress = (lastPoint / pathLength) * 100;
              if (previousProgress - currentProgress > 50) {
                return;
              }
            }

            setLastValidPoint(point);
            setLastPoint(length);
            setProgress(Math.max(progress, currentProgress));

            // More forgiving completion threshold
            if (currentProgress >= 85) { // Reduced from 90 to 85
              handlePathComplete();
            }
          } else if (distance > 50 && progress > 0 && progress < 20) {
            // Reset progress if far from path and barely started
            setProgress(0);
            setLastPoint(0);
            setLastValidPoint(null);
          }
        }, [isDrawing, lastPoint, lastValidPoint, handlePathComplete, findClosestPointOnPath, progress]);

        // Add touch start handler with position detection
        const handleTouchStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
          e.preventDefault();
          const svgRect = svgRef.current?.getBoundingClientRect();
          if (!svgRect || !pathRef.current) return;

          const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
          const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

          const viewBox = { width: 200, height: 200 };
          const svgX = ((clientX - svgRect.left) / svgRect.width) * viewBox.width;
          const svgY = ((clientY - svgRect.top) / svgRect.height) * viewBox.height;

          const { point, distance, length } = findClosestPointOnPath(pathRef.current, svgX, svgY);
          const pathLength = pathRef.current.getTotalLength();
          const progressAtPoint = (length / pathLength) * 100;

          if (point && distance < 35) {
            setIsDrawing(true);
            markAttempted();
            
            // Reset progress if:
            // 1. Starting near the beginning (first 15% of path)
            // 2. Current progress is stuck (between 20% and 80%)
            // 3. Starting far from current progress point
            if (progressAtPoint <= 15 || 
                (progress > 20 && progress < 80 && Math.abs(progressAtPoint - progress) > 30)) {
              setProgress(0);
              setLastPoint(0);
              setLastValidPoint(null);
            } else {
              // Continue from current point if it's a valid continuation
              if (progressAtPoint >= progress || Math.abs(progressAtPoint - progress) <= 30) {
                setLastPoint(length);
                setLastValidPoint(point);
                setProgress(Math.max(progress, progressAtPoint));
              }
            }
          }
        }, [findClosestPointOnPath, markAttempted, progress, pathRef]);

        // Add a stuck detection and reset mechanism
        useEffect(() => {
          let stuckTimer: NodeJS.Timeout;
          if (isDrawing && progress > 20 && progress < 85) {
            stuckTimer = setTimeout(() => {
              // If progress hasn't changed in 2 seconds, reset the current stroke
              setProgress(0);
              setLastPoint(0);
              setLastValidPoint(null);
            }, 2000);
          }
          return () => clearTimeout(stuckTimer);
        }, [isDrawing, progress]);

        // Add new state for animation control
        const [isAnimating, setIsAnimating] = useState(true);
        const controls = useAnimation();

        // Function to play the animation sequence
        const playAnimation = useCallback(async () => {
          setIsAnimating(true);
          
          // Play each stroke in sequence
          for (let i = 0; i < NUMBER_NINE.paths.length; i++) {
            await controls.start(`stroke${i}`);
            await new Promise(resolve => setTimeout(resolve, 500)); // Pause between strokes
          }
          
          setIsAnimating(false);
        }, [controls]);

        // Start animation on mount
        useEffect(() => {
          playAnimation();
        }, [playAnimation]);

        return (
          <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 bg-[url('/fruits-bg.png')] bg-cover bg-center bg-blend-soft-light relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-100/40 to-teal-100/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-teal-100/40 to-cyan-100/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <WorksheetHeader />

            {/* Score and Title Section */}
            <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
              <div className="max-w-4xl mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col items-stretch gap-2">
                <div className="w-full flex justify-center items-center">
                  <ScoreDisplay score={score} totalQuestions={TOTAL_QUESTIONS * 10} />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 text-center">
                  Number Nine with Grapes
                </h2>
              </div>
            </div>

            {/* Main Content */}
            <main className="px-0">
              <div className="bg-white/60 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-gray-200">
                <div className="max-w-4xl mx-auto">
                  {/* Practice Complete Message */}
                  {isCompleted && (
                    <div className="bg-cyan-500/20 border-2 border-cyan-400 rounded-xl p-4 mb-4 text-center">
                      <p className="text-white font-semibold">
                        🎉 Congratulations! You've completed all 5 practices! 🎉
                      </p>
                    </div>
                  )}

                  {/* Number Display */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-2 md:mb-4">
                    <div className="text-4xl sm:text-5xl font-bold text-gray-800">{NUMBER_NINE.value}</div>
                    <div className="flex flex-wrap justify-center gap-1 items-center max-w-[200px] sm:max-w-none">
                      {[...Array(NUMBER_NINE.fruitCount)].map((_, index) => (
                        <div key={index} className="text-2xl sm:text-3xl filter drop-shadow-md">{NUMBER_NINE.fruitEmoji}</div>
                      ))}
                    </div>
                    <div className="text-lg sm:text-xl font-medium text-gray-800 capitalize">{NUMBER_NINE.fruit}</div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Demonstration Section */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200 shadow-lg">
                      <div className="text-center mb-4">
                        <h3 className="text-lg md:text-xl font-bold text-cyan-400">Watch and Learn</h3>
                        <p className="text-sm text-cyan-300">See how to write number 9</p>
                      </div>

                      {/* Demonstration SVG */}
                      <div className="relative aspect-square max-w-[250px] mx-auto">
                        <svg
                          viewBox={NUMBER_NINE.viewBox}
                          className="w-full h-full"
                        >
                          {/* Guide paths */}
                          {NUMBER_NINE.paths.map((path) => (
                            <path
                              key={`guide-${path.id}`}
                              d={path.d}
                              fill="none"
                              stroke="rgba(34, 211, 238, 0.2)"
                              strokeWidth="24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ))}
                          
                          {/* Animated paths */}
                          {NUMBER_NINE.paths.map((path, index) => (
                            <motion.path
                              key={`demo-${path.id}`}
                              d={path.d}
                              fill="none"
                              stroke="#22d3ee"
                              strokeWidth="24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0 }}
                              animate={controls}
                              variants={{
                                initial: { pathLength: 0 },
                                [`stroke${index}`]: { 
                                  pathLength: 1,
                                  transition: { duration: 1.5, ease: "easeInOut" }
                                }
                              }}
                            />
                          ))}
                          
                          {/* Moving dot */}
                          {NUMBER_NINE.paths.map((path, index) => (
                            <motion.circle
                              key={`dot-${path.id}`}
                              r="8"
                              fill="#22d3ee"
                              initial={{ offsetDistance: "0%" }}
                              animate={controls}
                              variants={{
                                initial: { offsetDistance: "0%" },
                                [`stroke${index}`]: {
                                  offsetDistance: "100%",
                                  transition: { duration: 1.5, ease: "easeInOut" }
                                }
                              }}
                              style={{
                                offsetPath: `path("${path.d}")`,
                                opacity: isAnimating ? 1 : 0
                              }}
                            />
                          ))}
                        </svg>
                      </div>

                      {/* Play Again Button */}
                      <div className="flex justify-center mt-4">
                        <button
                          onClick={() => {
                            controls.set("initial");
                            playAnimation();
                          }}
                          disabled={isAnimating}
                          className={`bg-cyan-500 text-white px-6 py-2 rounded-full text-base font-medium shadow-md flex items-center gap-2 transition-all ${
                            isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cyan-600 hover:shadow-lg transform hover:-translate-y-0.5'
                          }`}
                        >
                          <span className="text-xl">▶️</span>
                          {isAnimating ? 'Playing...' : 'Play Again'}
                        </button>
                      </div>
                    </div>

                    {/* Tracing Practice Section */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 md:p-4 border border-white/50 shadow-lg">
                      <div className="text-center mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-indigo-900">Your Turn!</h3>
                        <div className="inline-flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-indigo-900">Practice:</span>
                          <span className="text-sm font-bold text-indigo-900">{practiceCount} / {REQUIRED_PRACTICES}</span>
                        </div>
                      </div>

                      {/* Tracing Area with Touch Control - Maximized size */}
                      <div className="relative flex items-start gap-2">
                        {/* SVG Container - Expanded */}
                        <div className="relative flex-grow min-h-[calc(100vw-6rem)] md:min-h-0">
                          <svg
                            ref={svgRef}
                            viewBox={NUMBER_NINE.viewBox}
                            className="w-full h-full aspect-square touch-none"
                            style={{ maxHeight: 'calc(100vh - 400px)' }}
                            onMouseDown={(e) => { 
                              e.preventDefault();
                              setIsDrawing(true); 
                              markAttempted(); 
                            }}
                            onMouseUp={() => setIsDrawing(false)}
                            onMouseLeave={() => setIsDrawing(false)}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={(e) => {
                              e.preventDefault();
                              setIsDrawing(false);
                            }}
                            onMouseMove={handleDrawing}
                            onTouchMove={handleDrawing}
                          >
                            {/* Background decoration */}
                            {/* Removing the background circle */}
                            
                            {NUMBER_NINE.paths.map((path, index) => {
                              const isCurrentPath = index === currentPathIndex;
                              const isCompletedPath = filledPaths.includes(path.id);
                              
                              return (
                                <g key={path.id}>
                                  {/* Guide Path */}
                                  <path
                                    d={path.d}
                                    fill="none"
                                    stroke={isCompletedPath ? currentColor : "rgba(99, 102, 241, 0.2)"}
                                    strokeWidth="24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />

                                  {/* Active Path */}
                                  {isCurrentPath && (
                                    <path
                                      ref={pathRef}
                                      d={path.d}
                                      fill="none"
                                      stroke={currentColor}
                                      strokeWidth="24"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeDasharray={pathLengths[path.id] || 0}
                                      strokeDashoffset={pathLengths[path.id] ? pathLengths[path.id] - (pathLengths[path.id] * progress / 100) : 0}
                                    />
                                  )}
                                  
                                  {/* Start point */}
                                  {isCurrentPath && (
                                    <circle
                                      ref={el => {
                                        if (el) {
                                          const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                          pathElement.setAttribute("d", path.d);
                                          const point = pathElement.getPointAtLength(lastPoint);
                                          el.setAttribute('cx', point.x.toString());
                                          el.setAttribute('cy', point.y.toString());
                                        }
                                      }}
                                      r="10"
                                      className="animate-pulse"
                                      fill={currentColor}
                                    />
                                  )}
                                </g>
                              );
                            })}
                          </svg>

                          {/* Retry Button */}
                          <button
                            onClick={handleRetry}
                            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            aria-label="Retry"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </button>
                        </div>

                        {/* Color Picker - Right Side - Kept in original position */}
                        <div className="w-12 flex flex-col gap-2">
                          {presetColors.map(({ color, name }) => (
                            <button
                              key={color}
                              className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                currentColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                              }`}
                              style={{ backgroundColor: color }}
                              onClick={() => setCurrentColor(color)}
                              aria-label={`Select ${name}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Instructions */}
                      <div className="mt-2 text-center">
                        <p className="text-sm font-medium text-indigo-700">
                          {currentPathIndex === 0 && "Draw the circle first ⭕"}
                          {currentPathIndex === 1 && "Now add the vertical line ⬇️"}
                          {currentPathIndex >= NUMBER_NINE.paths.length && "Great job! Try again! 🎉"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Number Picking Game Section - Always visible but conditionally active */}
                  <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200 shadow-lg relative">
                    {/* Locked Overlay - Show when not completed tracing */}
                    {!isCompleted && (
                      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] rounded-2xl flex flex-col items-center justify-center z-10">
                        <div className="text-4xl mb-2">🔒</div>
                        <p className="text-gray-800 font-semibold text-center px-4">
                          Complete {REQUIRED_PRACTICES} tracing practices to unlock!
                          <br />
                          <span className="text-sm font-medium">
                            {practiceCount} / {REQUIRED_PRACTICES} completed
                          </span>
                        </p>
                      </div>
                    )}

                    <div className="text-center mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-cyan-400">Find the Number 9s!</h3>
                      <p className="text-sm text-cyan-300 mb-2">Click on all the number 9s you can find</p>
                      <div className="inline-flex items-center gap-2 bg-cyan-500/20 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-cyan-300">Found:</span>
                        <span className="text-sm font-bold text-cyan-300">{foundNines.length} / 9</span>
                      </div>
                    </div>

                    {/* Number Grid */}
                    <div className="grid grid-cols-5 gap-2 max-w-[350px] mx-auto">
                      {NUMBER_GRID.map((number, index) => (
                        <button
                          key={index}
                          onClick={() => isCompleted && handleNumberClick(index)}
                          disabled={!isCompleted || foundNines.includes(index)}
                          className={`
                            aspect-square w-full text-xl font-bold rounded-lg
                            flex items-center justify-center transition-all
                            ${foundNines.includes(index)
                              ? 'bg-green-500 text-white cursor-not-allowed'
                              : isCompleted
                                ? 'bg-white hover:bg-indigo-100 active:bg-indigo-200 text-indigo-900'
                                : 'bg-white/50 text-indigo-900/50 cursor-not-allowed'
                            }
                          `}
                        >
                          {number}
                        </button>
                      ))}
                    </div>

                    {foundNines.length === 9 && (
                      <div className="mt-4 text-center">
                        <p className="text-green-600 font-semibold">
                          🎉 Fantastic! You've found all the number 9s! 🎉
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Confetti Animation */}
                  <AnimatePresence>
                    {showSuccess && (
                      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                        {confetti.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{
                              x: `${item.x}vw`,
                              y: '-10vh',
                              rotate: item.rotation,
                              scale: item.scale,
                            }}
                            animate={{
                              y: '110vh',
                              rotate: item.rotation + (Math.random() > 0.5 ? 360 : -360),
                              x: `${item.x + (Math.random() * 20 - 10)}vw`,
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              ease: [0.1, 0.4, 0.8, 0.9],
                              delay: item.id * 0.1,
                            }}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              color: item.type === 'emoji' ? 'inherit' : 
                                     `hsl(${230 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${45 + Math.random() * 15}%)`,
                              textShadow: '0 0 5px rgba(0,0,0,0.2)',
                              fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                              fontWeight: 'bold',
                            }}
                          >
                            {item.type === 'emoji' ? NUMBER_NINE.fruitEmoji : NUMBER_NINE.value}
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </AnimatePresence>

                  {/* Completion status button */}
                  {practiceCount >= REQUIRED_PRACTICES && (
                    <div className="flex justify-center mt-4">
                      <button
                        disabled
                        className="px-6 py-2 rounded-full bg-cyan-500 text-white text-base font-semibold flex items-center gap-2 shadow-md opacity-50 cursor-not-allowed"
                      >
                        <span className="text-xl">🌟</span>
                        All Practices Complete!
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default NumberNineWorksheet;