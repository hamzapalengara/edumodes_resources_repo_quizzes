import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

export interface Number {
  value: string;
  space: string;
  spaceEmoji: string;
  spaceCount: number;
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
    space: 'eleven',
    spaceEmoji: '•',
    spaceCount: 11,
    viewBox: '0 0 240 200',
    paths: [
      { id: 'left_one', d: 'M40 40L40 160', order: 1 },
      { id: 'right_one', d: 'M160 40L160 160', order: 2 }
    ]
  },
  {
    value: '12',
    space: 'twelve',
    spaceEmoji: '•',
    spaceCount: 12,
    viewBox: '0 0 240 200',
    paths: [
      { id: 'left_one', d: 'M40 40L40 160', order: 1 },
      { id: 'top_curve', d: 'M120 60C120 40 140 30 160 30C180 30 200 40 200 60C200 90 120 140 120 160', order: 2 },
      { id: 'base', d: 'M120 160L200 160', order: 3 }
    ]
  },
  {
    value: '13',
    space: 'thirteen',
    spaceEmoji: '•',
    spaceCount: 13,
    viewBox: '0 0 240 200',
    paths: [
      { id: 'left_one', d: 'M40 40L40 160', order: 1 },
      { id: 'top_half', d: 'M120 40C150 40 200 40 200 70C200 100 150 100 120 100', order: 2 },
      { id: 'bottom_half', d: 'M120 100C150 100 200 100 200 130C200 160 150 160 120 160', order: 3 }
    ]
  },
  {
    value: '14',
    space: 'fourteen',
    spaceEmoji: '•',
    spaceCount: 14,
    viewBox: '0 0 240 200',
    paths: [
      { id: 'left_one', d: 'M40 40L40 160', order: 1 },
      { id: 'diagonal', d: 'M140 40L80 100', order: 2 },
      { id: 'horizontal', d: 'M80 100L160 100', order: 3 },
      { id: 'vertical', d: 'M140 40L140 160', order: 4 }
    ]
  },
  {
    value: '15',
    space: 'fifteen',
    spaceEmoji: '•',
    spaceCount: 15,
    viewBox: '0 0 240 200',
    paths: [
      { id: 'left_one', d: 'M40 40L40 160', order: 1 },
      { id: 'top_line', d: 'M160 40L80 40', order: 2 },
      { id: 'vertical', d: 'M80 40L80 100', order: 3 },
      { id: 'curve', d: 'M80 100C100 100 160 100 160 130C160 160 120 160 80 160', order: 4 }
    ]
  },
  {
    value: '16',
    space: 'sixteen',
    spaceEmoji: '•',
    spaceCount: 16,
    viewBox: '0 0 240 200',
    paths: [
      { id: 'left_one', d: 'M40 40L40 160', order: 1 },
      { id: 'curve_down', d: 'M160 60C120 60 80 100 80 140', order: 2 },
      { id: 'circle', d: 'M80 140C80 160 100 180 120 180C140 180 160 160 160 140C160 120 140 100 120 100C100 100 80 120 80 140', order: 3 }
    ]
  },
  {
    value: '17',
    space: 'seventeen',
    spaceEmoji: '•',
    spaceCount: 17,
    viewBox: '0 0 240 200',
    paths: [
      { id: 'left_one', d: 'M40 40L40 160', order: 1 },
      { id: 'top_line', d: 'M80 40L160 40', order: 2 },
      { id: 'diagonal', d: 'M160 40L100 160', order: 3 }
    ]
  },
  {
    value: '18',
    space: 'eighteen',
    spaceEmoji: '•',
    spaceCount: 18,
    viewBox: '0 0 240 200',
    paths: [
      { id: 'left_one', d: 'M40 40L40 160', order: 1 },
      { id: 'first_down', d: 'M120 20C100 20 80 40 80 60C80 80 100 100 120 100', order: 2 },
      { id: 'second_down', d: 'M120 100C140 100 160 120 160 140C160 160 140 180 120 180', order: 3 },
      { id: 'second_up', d: 'M120 180C100 180 80 160 80 140C80 120 100 100 120 100', order: 4 },
      { id: 'first_up', d: 'M120 100C140 100 160 80 160 60C160 40 140 20 120 20', order: 5 }
    ]
  },
  {
    value: '19',
    space: 'nineteen',
    spaceEmoji: '•',
    spaceCount: 19,
    viewBox: '0 0 240 200',
    paths: [
      { id: 'left_one', d: 'M40 40L40 160', order: 1 },
      { id: 'circle', d: 'M160 80C160 60 140 40 120 40C100 40 80 60 80 80C80 100 100 120 120 120C140 120 160 100 160 80', order: 2 },
      { id: 'line', d: 'M160 80L160 180', order: 3 }
    ]
  },
  {
    value: '20',
    space: 'twenty',
    spaceEmoji: '•',
    spaceCount: 20,
    viewBox: '0 0 300 200',
    paths: [
      { id: 'two', d: 'M40 60C40 40 60 30 80 30C100 30 120 40 120 60C120 90 40 140 40 160', order: 1 },
      { id: 'base', d: 'M40 160L120 160', order: 2 },
      { id: 'zero_top', d: 'M160 100C160 60 180 40 200 40C220 40 240 60 240 100', order: 3 },
      { id: 'zero_bottom', d: 'M240 100C240 140 220 160 200 160C180 160 160 140 160 100', order: 4 }
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
  }, [currentNumberIndex, speak]);

  // Handle number completion
  const handleNumberComplete = useCallback((markCorrect: () => void) => {
    setShowSuccess(true);
    
    if (!completedNumbers.has(currentNumberIndex)) {
      markCorrect();
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
  const handlePathComplete = useCallback((markCorrect: () => void, markAttempted: () => void) => {
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
    
    // Check if all paths are completed
    const allPathsCompleted = currentNumber.paths.every(path => 
      filledPaths.includes(path.id) || path.id === currentPath.id
    );
    
    if (allPathsCompleted) {
      handleNumberComplete(markCorrect);
    } else {
      speak("Good! Keep going!");
    }
  }, [currentPath, currentNumber, filledPaths, handleNumberComplete, speak]);

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
    if (!svgRef.current || !currentNumber) return;

    const point = getRelativePoint(e, svgRef.current);
    
    // Check all unfinished paths
    let closestPath: typeof currentPath | null = null;
    let minDistance = Infinity;

    currentNumber.paths.forEach(path => {
      if (filledPaths.includes(path.id)) return;

      const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathElement.setAttribute("d", path.d);
      pathElement.getTotalLength(); // Get length to ensure path is valid
      
      // Check start point of path
      const pathPoint = pathElement.getPointAtLength(0);
      const distance = getDistance(point, pathPoint);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestPath = path;
      }
    });
    
    if (minDistance < 15 && closestPath) {
      // Switch to the closest path
      setCurrentPathIndex(currentNumber.paths.findIndex(p => p.id === closestPath?.id));
      setIsDrawing(true);
      setProgress(0);
      setLastPoint(0);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  }, [currentNumber, filledPaths, getRelativePoint, getDistance]);

  const handlePointerMove = useCallback((e: React.PointerEvent, markCorrect: () => void, markAttempted: () => void) => {
    if (!isDrawing || !svgRef.current || !pathRef.current || !currentPath) return;

    const point = getRelativePoint(e, svgRef.current);
    const pathElement = pathRef.current;
    const length = pathElement.getTotalLength();
    let minDistance = Infinity;
    let closestPoint = lastPoint;

    // Increase the step size for smoother tracing
    const stepSize = 1;
    // Increase the look-ahead distance for smoother path following
    const lookAhead = 30;
    // Increase touch detection radius
    const touchRadius = 30;

    for (let i = lastPoint; i <= Math.min(lastPoint + lookAhead, length); i += stepSize) {
      const pathPoint = pathElement.getPointAtLength(i);
      const distance = getDistance(point, pathPoint);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestPoint = i;
      }
    }

    if (minDistance < touchRadius) {
      setLastPoint(closestPoint);
      setProgress(closestPoint / length);

      if (closestPoint >= length * 0.9) {  // Reduced completion threshold
        handlePathComplete(markCorrect, markAttempted);
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

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <WorksheetTracker
      totalQuestions={NUMBERS.length}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markAttempted, score }) => (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <WorksheetHeader>
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
              Number Tracing: 11-20
            </h1>
          </WorksheetHeader>

          {/* Score and Title Section */}
          <div className="bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
            <div className="max-w-4xl mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col items-stretch gap-2">
              <div className="w-full">
                <ScoreDisplay score={score} totalQuestions={NUMBERS.length * 10} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="px-0">
            <div className="bg-white/10 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-white/20">
              <div className="max-w-4xl mx-auto">
                {/* Current Number Display - Updated for mobile */}
                <div className="flex flex-row items-center justify-center gap-2 flex-wrap mb-2 md:mb-4">
                  <div className="text-4xl sm:text-5xl font-bold text-white order-1">{currentNumber?.value}</div>
                  <div className="text-lg sm:text-xl font-medium text-white capitalize order-2 mx-2">
                    ({currentNumber?.space})
                  </div>
                  <div className="flex flex-row flex-wrap justify-start gap-1 items-center order-3 ml-2">
                    {[...Array(currentNumber?.spaceCount || 0)].map((_, index) => (
                      <div 
                        key={index} 
                        className="text-base sm:text-lg text-white opacity-80"
                        style={{ lineHeight: 1 }}
                      >
                        {currentNumber?.spaceEmoji}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tracing Area - Updated touch handling */}
                <div 
                  className="aspect-square w-full max-w-[400px] sm:max-w-[450px] mx-auto relative touch-none bg-white/10 backdrop-blur-sm rounded-2xl p-2 sm:p-4 shadow-lg border border-white/20"
                  style={{ 
                    touchAction: 'none',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  <svg
                    ref={svgRef}
                    viewBox={currentNumber?.viewBox}
                    className="w-full h-full touch-none"
                    style={{ 
                      touchAction: 'none',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={(e) => handlePointerMove(e, markCorrect, markAttempted)}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                  >
                    {/* Guide Paths Layer */}
                    <g>
                      {currentNumber?.paths.map((path) => (
                        <path
                          key={`guide-${path.id}`}
                          d={path.d}
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.05)"
                          strokeWidth="28"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="4 4"
                        />
                      ))}
                    </g>

                    {/* Completed Paths Layer */}
                    <g>
                      {currentNumber?.paths.map((path) => 
                        filledPaths.includes(path.id) && (
                          <path
                            key={`completed-${path.id}`}
                            d={path.d}
                            fill="none"
                            stroke="white"
                            strokeWidth="28"
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
                          stroke="rgba(255, 255, 255, 0.7)"
                          strokeWidth="28"
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

                    {/* Start Points - Increased size for better touch targets */}
                    {currentNumber?.paths.map((path) => 
                      !filledPaths.includes(path.id) && (
                        <circle
                          key={`start-${path.id}`}
                          ref={el => {
                            if (el) {
                              const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                              pathElement.setAttribute("d", path.d);
                              const point = pathElement.getPointAtLength(0);
                              el.setAttribute('cx', point.x.toString());
                              el.setAttribute('cy', point.y.toString());
                            }
                          }}
                          r="12"
                          className="animate-pulse"
                          fill="white"
                          opacity={path.id === currentPath?.id ? "1" : "0.5"}
                        />
                      )
                    )}
                  </svg>
                </div>

                {/* Navigation and Retry Buttons */}
                <div className="flex justify-center gap-2 sm:gap-4 mt-2 sm:mt-4">
                  <button
                    onClick={() => setCurrentNumberIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentNumberIndex === 0}
                    className="px-4 sm:px-6 py-2 rounded-full bg-white/20 text-white text-sm sm:text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-colors shadow-md"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleRetry}
                    className="px-4 sm:px-6 py-2 rounded-full bg-white/20 text-white text-sm sm:text-base font-semibold hover:bg-white/30 transition-colors flex items-center gap-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    Retry
                  </button>
                  <button
                    onClick={() => setCurrentNumberIndex(prev => Math.min(NUMBERS.length - 1, prev + 1))}
                    disabled={currentNumberIndex === NUMBERS.length - 1}
                    className="px-4 sm:px-6 py-2 rounded-full bg-white/20 text-white text-sm sm:text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-colors shadow-md"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Confetti Animation */}
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
                      currentNumber?.spaceEmoji : 
                      Math.random() > 0.7 ? '✨' : currentNumber?.value}
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default NumberTracingWorksheet; 