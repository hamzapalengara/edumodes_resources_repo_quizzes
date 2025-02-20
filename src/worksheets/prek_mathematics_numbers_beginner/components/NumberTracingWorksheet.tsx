import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

export interface Number {
  value: string;
  fruit: string;
  fruitEmoji: string;
  fruitCount: number;
  viewBox: string;
  paths: {
    id: string;
    d: string;
    order: number;
  }[];
}

interface ConfettiItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'number' | 'emoji';
}

export const NUMBERS: Number[] = [
  {
    value: '1',
    fruit: 'one',
    fruitEmoji: '🍎',
    fruitCount: 1,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'vertical', d: 'M80 40L80 160', order: 1 }
    ]
  },
  {
    value: '2',
    fruit: 'two',
    fruitEmoji: '🍊',
    fruitCount: 2,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'top_curve', d: 'M60 60C60 40 80 30 100 30C120 30 140 40 140 60C140 90 60 140 60 160', order: 1 },
      { id: 'base', d: 'M60 160L140 160', order: 2 }
    ]
  },
  {
    value: '3',
    fruit: 'three',
    fruitEmoji: '🍌',
    fruitCount: 3,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'top_half', d: 'M60 40C90 40 140 40 140 70C140 100 90 100 60 100', order: 1 },
      { id: 'bottom_half', d: 'M60 100C90 100 140 100 140 130C140 160 90 160 60 160', order: 2 }
    ]
  },
  {
    value: '4',
    fruit: 'four',
    fruitEmoji: '🍓',
    fruitCount: 4,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'diagonal', d: 'M100 40L40 100', order: 1 },
      { id: 'horizontal', d: 'M40 100L120 100', order: 2 },
      { id: 'vertical', d: 'M100 40L100 160', order: 3 }
    ]
  },
  {
    value: '5',
    fruit: 'five',
    fruitEmoji: '🍇',
    fruitCount: 5,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'top_line', d: 'M120 40L40 40', order: 1 },
      { id: 'vertical', d: 'M40 40L40 100', order: 2 },
      { id: 'curve', d: 'M40 100C60 100 120 100 120 130C120 160 80 160 40 160', order: 3 }
    ]
  },
  {
    value: '6',
    fruit: 'six',
    fruitEmoji: '🍐',
    fruitCount: 6,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'curve_down', d: 'M120 60C80 60 40 100 40 140', order: 1 },
      { id: 'circle', d: 'M40 140C40 160 60 180 80 180C100 180 120 160 120 140C120 120 100 100 80 100C60 100 40 120 40 140', order: 2 }
    ]
  },
  {
    value: '7',
    fruit: 'seven',
    fruitEmoji: '🥭',
    fruitCount: 7,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'top_line', d: 'M40 40L120 40', order: 1 },
      { id: 'diagonal', d: 'M120 40L60 160', order: 2 }
    ]
  },
  {
    value: '8',
    fruit: 'eight',
    fruitEmoji: '🍍',
    fruitCount: 8,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'first_down', d: 'M80 20C60 20 40 40 40 60C40 80 60 100 80 100', order: 1 },
      { id: 'second_down', d: 'M80 100C100 100 120 120 120 140C120 160 100 180 80 180', order: 2 },
      { id: 'second_up', d: 'M80 180C60 180 40 160 40 140C40 120 60 100 80 100', order: 3 },
      { id: 'first_up', d: 'M80 100C100 100 120 80 120 60C120 40 100 20 80 20', order: 4 }
    ]
  },
  {
    value: '9',
    fruit: 'nine',
    fruitEmoji: '🍉',
    fruitCount: 9,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'circle', d: 'M120 80C120 60 100 40 80 40C60 40 40 60 40 80C40 100 60 120 80 120C100 120 120 100 120 80', order: 1 },
      { id: 'line', d: 'M120 80L120 180', order: 2 }
    ]
  },
  {
    value: '10',
    fruit: 'ten',
    fruitEmoji: '🥥',
    fruitCount: 10,
    viewBox: '0 0 200 200',
    paths: [
      { id: 'one', d: 'M40 40L40 160', order: 1 },
      { id: 'zero', d: 'M150 100C150 70 130 40 110 40C90 40 70 70 70 100C70 130 90 160 110 160C130 160 150 130 150 100', order: 2 }
    ]
  }
];

const NumberTracingWorksheet: React.FC = () => {
  // State hooks
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [filledPaths, setFilledPaths] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lastPoint, setLastPoint] = useState<number>(0);
  const [pathLengths, setPathLengths] = useState<{ [key: string]: number }>({});
  const [completedNumbers, setCompletedNumbers] = useState<Set<number>>(new Set());

  // Refs
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Add confetti state
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);

  // Get current number and path
  const currentNumber = NUMBERS[currentNumberIndex];
  const currentPath = currentNumber?.paths[currentPathIndex];

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

  // Reset state when changing numbers
  useEffect(() => {
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    setPathLengths({});
  }, [currentNumberIndex]);

  // Calculate path length
  useEffect(() => {
    if (pathRef.current && currentPath?.id) {
      const length = pathRef.current.getTotalLength();
      setPathLengths(prev => ({
        ...prev,
        [currentPath.id]: length
      }));
    }
  }, [currentPathIndex, currentPath?.id]);

  // Speak current number
  useEffect(() => {
    if (currentNumber) {
      speak(`Let's trace the number ${currentNumber.value}`);
    }
  }, [currentNumberIndex, speak]);

  // Handle number completion
  const handleNumberComplete = useCallback((markCorrect: () => void, addPoints: () => void) => {
    setShowSuccess(true);
    
    if (!completedNumbers.has(currentNumberIndex)) {
      markCorrect();
      addPoints();
      setCompletedNumbers(prev => new Set([...prev, currentNumberIndex]));
      
      // Add confetti celebration
      const items: ConfettiItem[] = [];
      for (let i = 0; i < 40; i++) {
        items.push({
          id: i,
          x: Math.random() * 100,
          y: -20 - Math.random() * 40,
          rotation: Math.random() * 360,
          scale: 0.3 + Math.random() * 0.7,
          type: Math.random() > 0.5 ? 'emoji' : 'number'
        });
      }
      setConfetti(items);
    }

    setTimeout(() => {
      setShowSuccess(false);
      setConfetti([]);
    }, 3000);
  }, [currentNumberIndex, completedNumbers, currentNumber]);

  // Handle path completion
  const handlePathComplete = useCallback((markCorrect: () => void, addPoints: () => void, markAttempted: () => void) => {
    if (!currentPath || !currentNumber) return;

    markAttempted();
    const currentLength = pathRef.current?.getTotalLength() || 0;
    setPathLengths(prev => ({
      ...prev,
      [currentPath.id]: currentLength
    }));
    setFilledPaths(prev => [...prev, currentPath.id]);
    setIsDrawing(false);
    setProgress(1);
    setLastPoint(0);
    
    if (currentPathIndex === currentNumber.paths.length - 1) {
      handleNumberComplete(markCorrect, addPoints);
    } else {
      setCurrentPathIndex(prev => prev + 1);
      setProgress(0);
      speak("Good! Keep going!");
    }
  }, [currentPath, currentNumber, currentPathIndex, handleNumberComplete, speak]);

  // Handle pointer events
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
    if (minDistance < 15) {
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

  const handlePointerMove = useCallback((e: React.PointerEvent, markCorrect: () => void, addPoints: () => void, markAttempted: () => void) => {
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

    if (minDistance < 20) {
      setLastPoint(closestPoint);
      setProgress(closestPoint / length);

      if (closestPoint >= length * 0.95) {
        handlePathComplete(markCorrect, addPoints, markAttempted);
      }
    }
  }, [isDrawing, currentPath, lastPoint, getRelativePoint, getDistance, handlePathComplete]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (isDrawing && svgRef.current) {
      svgRef.current.releasePointerCapture(e.pointerId);
    }
    setIsDrawing(false);
  }, [isDrawing]);

  const handleRetry = useCallback(() => {
    // Reset all drawing states
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    setPathLengths({});
    setIsDrawing(false); // Reset drawing state
    setShowSuccess(false); // Hide any success animation
    
    // Release pointer capture if it's active
    if (svgRef.current) {
      try {
        // Find any active pointer captures and release them
        const pointerIds = svgRef.current.getAttributeNames()
          .filter(name => name.startsWith('pointer-events-'))
          .map(name => parseInt(name.split('-')[2]));
        
        pointerIds.forEach(id => {
          svgRef.current?.releasePointerCapture(id);
        });
      } catch (e) {
        // Ignore any errors from pointer capture release
      }
    }

    if (currentNumber) {
      speak(`Let's try the number ${currentNumber.value} again`);
    }
  }, [currentNumber, speak, svgRef]);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <WorksheetTracker
      totalQuestions={NUMBERS.length}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ addPoints, markCorrect, markAttempted, score }) => (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 bg-[url('/fruits-bg.png')] bg-cover bg-center bg-blend-soft-light relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-pink-200/40 to-purple-200/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <WorksheetHeader />

          {/* Score and Title Section */}
          <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
            <div className="max-w-4xl mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col items-stretch gap-2">
              <div className="w-full">
                <ScoreDisplay score={score} totalQuestions={NUMBERS.length * 10} />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 text-center">
                Number Tracing: 1-10
              </h2>
            </div>
          </div>

          {/* Main Content */}
          <main className="px-0">
            <div className="bg-white/40 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-white/50">
              <div className="max-w-4xl mx-auto">
                {/* Current Number Display */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-2 md:mb-4">
                  <div className="text-4xl sm:text-5xl font-bold text-indigo-900">{currentNumber?.value}</div>
                  <div className="flex flex-wrap justify-center gap-1 items-center max-w-[200px] sm:max-w-none">
                    {[...Array(currentNumber?.fruitCount || 0)].map((_, index) => (
                      <div key={index} className="text-2xl sm:text-3xl filter drop-shadow-md">{currentNumber?.fruitEmoji}</div>
                    ))}
                  </div>
                  <div className="text-lg sm:text-xl font-medium text-indigo-800 capitalize">{currentNumber?.fruit}</div>
                </div>

                {/* Tracing Area */}
                <div className="aspect-square w-full max-w-[400px] sm:max-w-[450px] mx-auto relative touch-none bg-white/60 backdrop-blur-sm rounded-2xl p-2 sm:p-4 shadow-lg border border-white/50">
                  <svg
                    ref={svgRef}
                    viewBox={currentNumber?.viewBox}
                    className="w-full h-full touch-none"
                    style={{ touchAction: 'none' }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={(e) => handlePointerMove(e, markCorrect, addPoints, markAttempted)}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                  >
                    {/* Guide Paths Layer - Always at bottom */}
                    <g>
                      {currentNumber?.paths.map((path) => (
                        <path
                          key={`guide-${path.id}`}
                          d={path.d}
                          fill="none"
                          stroke="#6366F1"
                          strokeWidth="24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeOpacity="0.15"
                        />
                      ))}
                    </g>

                    {/* Completed Paths Layer - Middle layer */}
                    <g>
                      {currentNumber?.paths.map((path) => 
                        filledPaths.includes(path.id) && (
                          <path
                            key={`completed-${path.id}`}
                            d={path.d}
                            fill="none"
                            stroke="#6366F1"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )
                      )}
                    </g>
                    
                    {/* Current Tracing Path Layer - Always on top */}
                    {currentPath && (
                      <g>
                        <path
                          ref={pathRef}
                          d={currentPath.d}
                          fill="none"
                          stroke="#6366F1"
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
                        
                        {/* Start point */}
                        {!filledPaths.includes(currentPath.id) && (
                          <circle
                            ref={el => {
                              if (el) {
                                const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                pathElement.setAttribute("d", currentPath.d);
                                const point = pathElement.getPointAtLength(0);
                                el.setAttribute('cx', point.x.toString());
                                el.setAttribute('cy', point.y.toString());
                              }
                            }}
                            r="10"
                            className="animate-pulse"
                            fill="#6366F1"
                          />
                        )}
                      </g>
                    )}
                  </svg>

                  {/* Success Animation with Confetti */}
                  <AnimatePresence>
                    {showSuccess && (
                      <>
                        {confetti.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{
                              x: `${item.x}vw`,
                              y: `${item.y}vh`,
                              rotate: item.rotation,
                              scale: item.scale,
                            }}
                            animate={{
                              y: '120vh',
                              rotate: item.rotation + (Math.random() > 0.5 ? 360 : -360),
                              x: `${item.x + (Math.random() * 10 - 5)}vw`,
                            }}
                            transition={{
                              duration: 2.5 + Math.random() * 1.5,
                              ease: [0.1, 0.4, 0.8, 0.9],
                              delay: item.id * 0.04,
                            }}
                            className="fixed pointer-events-none z-50"
                            style={{
                              color: item.type === 'emoji' ? 'inherit' : 
                                     `hsl(${230 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${45 + Math.random() * 15}%)`,
                              textShadow: '0 0 5px rgba(0,0,0,0.2)',
                              fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                              fontWeight: 'bold',
                            }}
                          >
                            {item.type === 'emoji' ? 
                              currentNumber?.fruitEmoji : 
                              Math.random() > 0.7 ? '✨' : currentNumber?.value}
                          </motion.div>
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* Navigation and Retry Buttons */}
                <div className="flex justify-center gap-2 sm:gap-4 mt-2 sm:mt-4">
                  <button
                    onClick={() => setCurrentNumberIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentNumberIndex === 0}
                    className="px-4 sm:px-6 py-2 rounded-full bg-indigo-500 text-white text-sm sm:text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-600 transition-colors shadow-md"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleRetry}
                    className="px-4 sm:px-6 py-2 rounded-full bg-purple-500 text-white text-sm sm:text-base font-semibold hover:bg-purple-600 transition-colors flex items-center gap-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    Retry
                  </button>
                  <button
                    onClick={() => setCurrentNumberIndex(prev => Math.min(NUMBERS.length - 1, prev + 1))}
                    disabled={currentNumberIndex === NUMBERS.length - 1}
                    className="px-4 sm:px-6 py-2 rounded-full bg-indigo-500 text-white text-sm sm:text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-600 transition-colors shadow-md"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default NumberTracingWorksheet; 