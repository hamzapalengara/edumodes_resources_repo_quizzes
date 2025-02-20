import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

export interface Number {
  value: string;
  vehicle: string;
  vehicleEmoji: string;
  vehicleCount: number;
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
    value: '11',
    vehicle: 'eleven',
    vehicleEmoji: '🚗',
    vehicleCount: 11,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'first_one', d: 'M80 40L80 160', order: 1 },
      { id: 'second_one', d: 'M280 40L280 160', order: 2 }
    ]
  },
  {
    value: '12',
    vehicle: 'twelve',
    vehicleEmoji: '🚌',
    vehicleCount: 12,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'one', d: 'M80 40L80 160', order: 1 },
      { id: 'two_curve', d: 'M260 60C260 40 280 30 300 30C320 30 340 40 340 60C340 90 260 140 260 160', order: 2 },
      { id: 'two_base', d: 'M260 160L340 160', order: 3 }
    ]
  },
  {
    value: '13',
    vehicle: 'thirteen',
    vehicleEmoji: '✈️',
    vehicleCount: 13,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'one', d: 'M80 40L80 160', order: 1 },
      { id: 'three_top', d: 'M260 40C290 40 340 40 340 70C340 100 290 100 260 100', order: 2 },
      { id: 'three_bottom', d: 'M260 100C290 100 340 100 340 130C340 160 290 160 260 160', order: 3 }
    ]
  },
  {
    value: '14',
    vehicle: 'fourteen',
    vehicleEmoji: '🚂',
    vehicleCount: 14,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'one', d: 'M80 40L80 160', order: 1 },
      { id: 'four_diagonal', d: 'M300 40L240 100', order: 2 },
      { id: 'four_horizontal', d: 'M240 100L320 100', order: 3 },
      { id: 'four_vertical', d: 'M300 40L300 160', order: 4 }
    ]
  },
  {
    value: '15',
    vehicle: 'fifteen',
    vehicleEmoji: '🚁',
    vehicleCount: 15,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'one', d: 'M80 40L80 160', order: 1 },
      { id: 'five_top', d: 'M320 40L240 40', order: 2 },
      { id: 'five_vertical', d: 'M240 40L240 100', order: 3 },
      { id: 'five_curve', d: 'M240 100C260 100 320 100 320 130C320 160 280 160 240 160', order: 4 }
    ]
  },
  {
    value: '16',
    vehicle: 'sixteen',
    vehicleEmoji: '🚓',
    vehicleCount: 16,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'one', d: 'M80 40L80 160', order: 1 },
      { id: 'six_curve', d: 'M320 60C280 60 240 100 240 140', order: 2 },
      { id: 'six_circle', d: 'M240 140C240 160 260 180 280 180C300 180 320 160 320 140C320 120 300 100 280 100C260 100 240 120 240 140', order: 3 }
    ]
  },
  {
    value: '17',
    vehicle: 'seventeen',
    vehicleEmoji: '🚕',
    vehicleCount: 17,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'one', d: 'M80 40L80 160', order: 1 },
      { id: 'seven_top', d: 'M240 40L320 40', order: 2 },
      { id: 'seven_diagonal', d: 'M320 40L260 160', order: 3 }
    ]
  },
  {
    value: '18',
    vehicle: 'eighteen',
    vehicleEmoji: '🚎',
    vehicleCount: 18,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'one', d: 'M80 40L80 160', order: 1 },
      { id: 'eight_top', d: 'M280 20C260 20 240 40 240 60C240 80 260 100 280 100C300 100 320 80 320 60C320 40 300 20 280 20', order: 2 },
      { id: 'eight_bottom', d: 'M280 100C260 100 240 120 240 140C240 160 260 180 280 180C300 180 320 160 320 140C320 120 300 100 280 100', order: 3 }
    ]
  },
  {
    value: '19',
    vehicle: 'nineteen',
    vehicleEmoji: '🚤',
    vehicleCount: 19,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'one', d: 'M80 40L80 160', order: 1 },
      { id: 'nine_circle', d: 'M320 80C320 60 300 40 280 40C260 40 240 60 240 80C240 100 260 120 280 120C300 120 320 100 320 80', order: 2 },
      { id: 'nine_line', d: 'M320 80L320 180', order: 3 }
    ]
  },
  {
    value: '20',
    vehicle: 'twenty',
    vehicleEmoji: '🚀',
    vehicleCount: 20,
    viewBox: '0 0 400 200',
    paths: [
      { id: 'two_curve', d: 'M160 60C160 40 180 30 200 30C220 30 240 40 240 60C240 90 160 140 160 160', order: 1 },
      { id: 'two_base', d: 'M160 160L240 160', order: 2 },
      { id: 'zero', d: 'M350 100C350 70 330 40 310 40C290 40 270 70 270 100C270 130 290 160 310 160C330 160 350 130 350 100', order: 3 }
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
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);

  // Refs
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

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
  }, [currentNumberIndex, speak, currentNumber]);

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
  }, [currentNumberIndex, completedNumbers]);

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
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    setPathLengths({});
    setIsDrawing(false);
    setShowSuccess(false);
    
    if (svgRef.current) {
      try {
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
  }, [currentNumber, speak]);

  // Handle worksheet summary generation
  const handleSummaryGenerated = useCallback((summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  }, []);

  return (
    <WorksheetTracker
      totalQuestions={NUMBERS.length}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ addPoints, markCorrect, markAttempted, score }) => (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100 bg-[url('/vehicles-bg.png')] bg-cover bg-center bg-blend-soft-light relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-sky-200/40 to-cyan-200/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-teal-200/40 to-cyan-200/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <WorksheetHeader />

          {/* Score and Title Section */}
          <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
            <div className="max-w-4xl mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col items-stretch gap-2">
              <div className="w-full">
                <ScoreDisplay score={score} totalQuestions={NUMBERS.length * 10} />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-900 text-center">
                Number Tracing: 11-20
              </h2>
            </div>
          </div>

          {/* Main Content */}
          <main className="px-0">
            <div className="bg-white/40 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-white/50">
              <div className="max-w-4xl mx-auto">
                {/* Current Number Display */}
                <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-900 min-w-[2ch] text-center">{NUMBERS[currentNumberIndex]?.value}</div>
                  <div className="flex items-center">
                    <div className="grid grid-cols-10 gap-0.5 bg-white/50 rounded-lg p-1 shadow-inner">
                      {[...Array(NUMBERS[currentNumberIndex]?.vehicleCount || 0)].map((_, index) => (
                        <div 
                          key={index} 
                          className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-500"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-base md:text-lg font-medium text-cyan-800 capitalize min-w-[5ch]">{NUMBERS[currentNumberIndex]?.vehicle}</div>
                </div>

                {/* Tracing Area */}
                <div className="aspect-square w-full max-w-[400px] sm:max-w-[450px] mx-auto relative touch-none bg-white/60 backdrop-blur-sm rounded-2xl p-2 sm:p-4 shadow-lg border border-white/50">
                  <svg
                    ref={svgRef}
                    viewBox={NUMBERS[currentNumberIndex]?.viewBox}
                    className="w-full h-full touch-none"
                    style={{ touchAction: 'none' }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={(e) => handlePointerMove(e, markCorrect, addPoints, markAttempted)}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                  >
                    {/* Guide Paths Layer */}
                    <g>
                      {NUMBERS[currentNumberIndex]?.paths.map((path) => (
                        <path
                          key={`guide-${path.id}`}
                          d={path.d}
                          fill="none"
                          stroke="#0891b2"
                          strokeWidth="32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeOpacity="0.15"
                        />
                      ))}
                    </g>

                    {/* Completed Paths Layer */}
                    <g>
                      {NUMBERS[currentNumberIndex]?.paths.map((path) => 
                        filledPaths.includes(path.id) && (
                          <path
                            key={`completed-${path.id}`}
                            d={path.d}
                            fill="none"
                            stroke="#0891b2"
                            strokeWidth="32"
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
                          stroke="#0891b2"
                          strokeWidth="32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray={pathLengths[currentPath.id] || 0}
                          strokeDashoffset={
                            pathLengths[currentPath.id]
                              ? pathLengths[currentPath.id] * (1 - (progress))
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
                            r="15"
                            className="animate-pulse"
                            fill="#0891b2"
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
                              NUMBERS[currentNumberIndex]?.vehicleEmoji : 
                              Math.random() > 0.7 ? '✨' : NUMBERS[currentNumberIndex]?.value}
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
                    className="px-4 sm:px-6 py-2 rounded-full bg-cyan-500 text-white text-sm sm:text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-600 transition-colors shadow-md"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleRetry}
                    className="px-4 sm:px-6 py-2 rounded-full bg-teal-500 text-white text-sm sm:text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    Retry
                  </button>
                  <button
                    onClick={() => setCurrentNumberIndex(prev => Math.min(NUMBERS.length - 1, prev + 1))}
                    disabled={currentNumberIndex === NUMBERS.length - 1}
                    className="px-4 sm:px-6 py-2 rounded-full bg-cyan-500 text-white text-sm sm:text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-600 transition-colors shadow-md"
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