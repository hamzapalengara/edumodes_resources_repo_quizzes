import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const REQUIRED_PRACTICES = 5;
const TOTAL_QUESTIONS = REQUIRED_PRACTICES + 7; // 5 practices + 7 numbers to find

// Add presetColors constant
const presetColors = [
  { color: '#0EA5E9', name: 'Blue' },    // Cyan-500
  { color: '#22C55E', name: 'Green' },   // Green-500
  { color: '#EF4444', name: 'Red' },     // Red-500
  { color: '#F59E0B', name: 'Orange' },  // Amber-500
  { color: '#6366F1', name: 'Indigo' },  // Indigo-500
  { color: '#EC4899', name: 'Pink' },    // Pink-500
] as const;

interface ConfettiItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'emoji' | 'number';
}

export const NUMBER_SEVEN = {
  value: '7',
  vehicle: 'seven',
  vehicleEmoji: '🏍️',
  vehicleCount: 7,
  viewBox: '0 0 200 200',
  paths: [
    { id: 'horizontal', d: 'M60 40L140 40', order: 1 },
    { id: 'diagonal', d: 'M140 40L80 180', order: 2 }
  ]
};

// Modified NUMBER_GRID to include number 7 with vehicles
export const NUMBER_GRID = [
  '1 🚗', '7 🏍️', '3 🚙', '2 🚓', '7 🏍️',
  '3 🚕', '8 🚗', '7 🏍️', '4 🚙', '9 🚓',
  '7 🏍️', '2 🚕', '5 🚗', '7 🏍️', '1 🚙',
  '8 🚓', '7 🏍️', '3 🚕', '7 🏍️', '4 🚗'
];

const NumberSevenWorksheet: React.FC = () => {
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
        const [foundSixes, setFoundSixes] = useState<number[]>([]);
        const [currentColor, setCurrentColor] = useState('#22d3ee');

        // Add completedPractices state
        const [completedPractices, setCompletedPractices] = useState<boolean[]>(Array(REQUIRED_PRACTICES).fill(false));

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
          speak("Let's trace the number 7 again");
        }, [speak, practiceCount]);

        // Modify handlePathComplete to use completedPractices
        const handlePathComplete = useCallback(() => {
          const currentPath = NUMBER_SEVEN.paths[currentPathIndex];
          if (currentPath && !filledPaths.includes(currentPath.id)) {
            setFilledPaths(prev => [...prev, currentPath.id]);
            
            if (currentPathIndex < NUMBER_SEVEN.paths.length - 1) {
              setCurrentPathIndex(prev => prev + 1);
              setLastPoint(0);
              setProgress(0);
              setLastValidPoint(null);
              speak("Number 7. Let's trace the next part.");
            } else {
              setShowSuccess(true);
              const newPracticeCount = practiceCount + 1;
              setPracticeCount(newPracticeCount);

              // Only award points if this practice hasn't been completed before
              if (newPracticeCount <= REQUIRED_PRACTICES && !completedPractices[newPracticeCount - 1]) {
                markCorrect();
                // Mark this practice as completed
                const newCompletedPractices = [...completedPractices];
                newCompletedPractices[newPracticeCount - 1] = true;
                setCompletedPractices(newCompletedPractices);
              }

              if (newPracticeCount < REQUIRED_PRACTICES) {
                speak(`Number 7! You've completed it ${newPracticeCount} time${newPracticeCount > 1 ? 's' : ''}. ${REQUIRED_PRACTICES - newPracticeCount} more to go!`);
              } else {
                speak("Number 7! You've completed all five practices! Now let's find all the number sevens in the grid below!");
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
        }, [currentPathIndex, filledPaths, speak, practiceCount, markCorrect, completedPractices]);

        // Handle number selection in grid
        const handleNumberClick = useCallback((index: number) => {
          if (foundSixes.includes(index)) return;
          
          if (NUMBER_GRID[index] === '7 🏍️') {
            setFoundSixes(prev => [...prev, index]);
            markCorrect();
            speak("Correct! You found a number 7!");
            
            if (foundSixes.length + 1 === 7) {
              speak("Amazing! You've found all the number sevens!");
            }
          } else {
            speak("That's not a 7, try again!");
          }
        }, [foundSixes, markCorrect, speak]);

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
          if (pathRef.current && NUMBER_SEVEN.paths[currentPathIndex]?.id) {
            const length = pathRef.current.getTotalLength();
            setPathLengths(prev => ({
              ...prev,
              [NUMBER_SEVEN.paths[currentPathIndex].id]: length
            }));
          }
        }, [currentPathIndex]);

        // Initial instruction
        useEffect(() => {
          speak("Let's trace the number 7");
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

          const svgRect = svgRef.current.getBoundingClientRect();
          const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
          const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

          // Convert screen coordinates to SVG coordinates
          const svgX = ((clientX - svgRect.left) / svgRect.width) * 200;
          const svgY = ((clientY - svgRect.top) / svgRect.height) * 200;

          const { point, distance, length } = findClosestPointOnPath(pathRef.current, svgX, svgY);

          if (point && distance < 25) { // Increased tolerance from 15 to 25
            // Only allow forward progress within a more forgiving range
            if (lastValidPoint) {
              const progressDelta = Math.abs(length - lastPoint);
              if (progressDelta > 30) { // Increased from 20 to 30 for more forgiving jumps
                return;
              }
            }

            // Allow some backward movement for smoother tracing
            if (length < lastPoint && length > lastPoint - 15) { // Allow up to 15 units of backward movement
              return;
            }

            setLastValidPoint(point);
            setLastPoint(length);
            const pathLength = pathRef.current.getTotalLength();
            const newProgress = (length / pathLength) * 100;
            setProgress(newProgress);

            if (newProgress >= 95) { // Changed from 98 to 95 for easier completion
              handlePathComplete();
            }
          }
        }, [isDrawing, lastPoint, lastValidPoint, handlePathComplete, findClosestPointOnPath]);

        // Add new state for animation control
        const [isAnimating, setIsAnimating] = useState(true);
        const controls = useAnimation();

        // Function to play the animation sequence
        const playAnimation = useCallback(async () => {
          setIsAnimating(true);
          
          // Play each stroke in sequence
          for (let i = 0; i < NUMBER_SEVEN.paths.length; i++) {
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
          <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-100/40 to-teal-100/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-teal-100/40 to-cyan-100/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <WorksheetHeader />

            {/* Score and Title Section */}
            <div className="bg-white/80 backdrop-blur-md shadow-lg border border-gray-200">
              <div className="max-w-4xl mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col items-stretch gap-2">
                <div className="w-full flex justify-center items-center">
                  <ScoreDisplay score={score} totalQuestions={TOTAL_QUESTIONS * 10} />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
                  Number Seven with Vehicles
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
                    <div className="text-4xl sm:text-5xl font-bold text-gray-800">{NUMBER_SEVEN.value}</div>
                    <div className="flex flex-wrap justify-center gap-1 items-center max-w-[200px] sm:max-w-none">
                      {[...Array(NUMBER_SEVEN.vehicleCount)].map((_, index) => (
                        <div key={index} className="text-2xl sm:text-3xl filter drop-shadow-md">{NUMBER_SEVEN.vehicleEmoji}</div>
                      ))}
                    </div>
                    <div className="text-lg sm:text-xl font-medium text-gray-800 capitalize">{NUMBER_SEVEN.vehicle}</div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Demonstration Section */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200 shadow-lg">
                      <div className="text-center mb-4">
                        <h3 className="text-lg md:text-xl font-bold text-cyan-400">Watch and Learn</h3>
                        <p className="text-sm text-cyan-300">See how to write number 7</p>
                      </div>

                      {/* Demonstration SVG */}
                      <div className="relative aspect-square max-w-[250px] mx-auto">
                        <svg
                          viewBox={NUMBER_SEVEN.viewBox}
                          className="w-full h-full"
                        >
                          {/* Guide paths */}
                          {NUMBER_SEVEN.paths.map((path) => (
                            <path
                              key={`guide-${path.id}`}
                              d={path.d}
                              fill="none"
                              stroke="rgba(234, 88, 12, 0.2)"
                              strokeWidth="24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ))}
                          
                          {/* Animated paths */}
                          {NUMBER_SEVEN.paths.map((path, index) => (
                            <motion.path
                              key={`demo-${path.id}`}
                              d={path.d}
                              fill="none"
                              stroke="#f97316"
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
                          {NUMBER_SEVEN.paths.map((path, index) => (
                            <motion.circle
                              key={`dot-${path.id}`}
                              r="8"
                              fill="#f97316"
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
                          className={`bg-orange-500 text-white px-6 py-2 rounded-full text-base font-medium shadow-md flex items-center gap-2 transition-all ${
                            isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600 hover:shadow-lg transform hover:-translate-y-0.5'
                          }`}
                        >
                          <span className="text-xl">▶️</span>
                          {isAnimating ? 'Playing...' : 'Play Again'}
                        </button>
                      </div>
                    </div>

                    {/* Tracing Practice Section */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200 shadow-lg">
                      <div className="text-center mb-4">
                        <h3 className="text-lg md:text-xl font-bold text-cyan-400">Your Turn!</h3>
                        <div className="inline-flex items-center gap-2 bg-cyan-500/20 px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-cyan-300">Practice:</span>
                          <span className="text-sm font-bold text-cyan-300">{practiceCount} / {REQUIRED_PRACTICES}</span>
                        </div>
                      </div>

                      {/* Tracing Area with Touch Control - Maximized size */}
                      <div className="relative flex items-start gap-2">
                        {/* Retry Button - Moved outside SVG */}
                        <button
                          onClick={handleRetry}
                          className="absolute top-0 right-14 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-10"
                          aria-label="Retry"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>

                        {/* SVG Container - Expanded */}
                        <div className="relative flex-grow min-h-[calc(100vw-6rem)] md:min-h-0">
                          <svg
                            ref={svgRef}
                            viewBox={NUMBER_SEVEN.viewBox}
                            className="w-full h-full aspect-square touch-none"
                            style={{ maxHeight: 'calc(100vh - 400px)' }}
                            onMouseDown={(e) => { 
                              e.preventDefault();
                              setIsDrawing(true); 
                              markAttempted(); 
                            }}
                            onMouseUp={() => setIsDrawing(false)}
                            onMouseLeave={() => setIsDrawing(false)}
                            onTouchStart={(e) => { 
                              e.preventDefault();
                              setIsDrawing(true); 
                              markAttempted(); 
                            }}
                            onTouchEnd={(e) => {
                              e.preventDefault();
                              setIsDrawing(false);
                            }}
                            onMouseMove={handleDrawing}
                            onTouchMove={handleDrawing}
                          >
                            {NUMBER_SEVEN.paths.map((path, index) => {
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
                        </div>

                        {/* Color Picker - Right Side */}
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
                          {currentPathIndex === 0 && "Start with the horizontal line ➡️"}
                          {currentPathIndex === 1 && "Now draw the diagonal line ↘️"}
                          {currentPathIndex >= NUMBER_SEVEN.paths.length && "Great job! Try again! 🎉"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Number Picking Game Section - Always visible but conditionally active */}
                  <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200 shadow-lg relative">
                    {/* Locked Overlay - Show when not completed tracing */}
                    {!isCompleted && (
                      <div className="absolute inset-0 bg-gray-800/80 backdrop-blur-[2px] rounded-2xl flex flex-col items-center justify-center z-10">
                        <div className="text-4xl mb-2">🔒</div>
                        <p className="text-white font-semibold text-center px-4">
                          Complete {REQUIRED_PRACTICES} tracing practices to unlock!
                          <br />
                          <span className="text-sm font-medium">
                            {practiceCount} / {REQUIRED_PRACTICES} completed
                          </span>
                        </p>
                      </div>
                    )}

                    <div className="text-center mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-cyan-400">Find the Number 7s!</h3>
                      <p className="text-sm text-cyan-300 mb-2">Click on all the number 7s you can find</p>
                      <div className="inline-flex items-center gap-2 bg-cyan-500/20 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-cyan-400">Found:</span>
                        <span className="text-sm font-bold text-cyan-400">{foundSixes.length} / 7</span>
                      </div>
                    </div>

                    {/* Number Grid */}
                    <div className="grid grid-cols-4 gap-0.5 md:gap-2 w-full max-w-sm mx-auto">
                      {NUMBER_GRID.map((number, index) => (
                        <button
                          key={index}
                          onClick={() => isCompleted && handleNumberClick(index)}
                          disabled={!isCompleted || foundSixes.includes(index)}
                          className={`
                            aspect-square w-full text-xl font-bold rounded-lg
                            flex items-center justify-center transition-all
                            ${foundSixes.includes(index)
                              ? 'bg-cyan-500 text-white cursor-not-allowed'
                              : isCompleted
                                ? 'bg-gray-800 hover:bg-cyan-500/20 active:bg-cyan-500/30 text-cyan-400'
                                : 'bg-gray-800/50 text-cyan-400/50 cursor-not-allowed'
                            }
                          `}
                        >
                          {number}
                        </button>
                      ))}
                    </div>

                    {foundSixes.length === 7 && (
                      <div className="mt-4 text-center">
                        <p className="text-cyan-400 font-semibold">
                          🎉 Fantastic! You've found all the number 7s! 🎉
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
                            {item.type === 'emoji' ? NUMBER_SEVEN.vehicleEmoji : NUMBER_SEVEN.value}
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

export default NumberSevenWorksheet; 