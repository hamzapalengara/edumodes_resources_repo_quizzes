import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

export interface Letter {
  char: string;
  object: string;
  objectEmoji: string;
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
  type: 'letter' | 'emoji';
}

export const LETTERS: Letter[] = [
  {
    char: 'u',
    object: 'Unicorn Lollipop',
    objectEmoji: '🍭',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'stem1', d: 'M40 40L40 120C40 140 60 160 80 160C100 160 120 140 120 120L120 40', order: 1 }
    ]
  },
  {
    char: 'v',
    object: 'Vanilla Ice Cream',
    objectEmoji: '🍦',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'diagonal', d: 'M40 40L80 160L120 40', order: 1 }
    ]
  },
  {
    char: 'w',
    object: 'Wafer Cookie',
    objectEmoji: '🍪',
    viewBox: '0 0 240 200',
    paths: [
      { id: 'diagonal', d: 'M40 40L60 140L100 60L140 140L160 40', order: 1 }
    ]
  },
  {
    char: 'x',
    object: 'Xtra Sweet Candy',
    objectEmoji: '🍬',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'diagonal1', d: 'M40 40L120 160', order: 1 },
      { id: 'diagonal2', d: 'M120 40L40 160', order: 2 }
    ]
  },
  {
    char: 'y',
    object: 'Yogurt Parfait',
    objectEmoji: '🍨',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'diagonal1', d: 'M40 40L80 100', order: 1 },
      { id: 'diagonal2', d: 'M120 40L80 100L80 160', order: 2 }
    ]
  },
  {
    char: 'z',
    object: 'Zebra Cake',
    objectEmoji: '🍰',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'horizontal1', d: 'M40 40L120 40', order: 1 },
      { id: 'diagonal', d: 'M120 40L40 160', order: 2 },
      { id: 'horizontal2', d: 'M40 160L120 160', order: 3 }
    ]
  }
];

const LetterTracingWorksheet: React.FC = () => {
  // State management
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [filledPaths, setFilledPaths] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lastPoint, setLastPoint] = useState<number>(0);
  const [pathLengths, setPathLengths] = useState<{ [key: string]: number }>({});
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);
  const [completedLetters, setCompletedLetters] = useState<Set<number>>(new Set());
  
  // Refs
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const markCorrectRef = useRef<(() => void) | null>(null);

  // Get current letter and path
  const currentLetter = LETTERS[currentLetterIndex];
  const currentPath = currentLetter?.paths[currentPathIndex];

  // Reset path state when changing letters
  useEffect(() => {
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    setPathLengths({});
  }, [currentLetterIndex]);

  // Calculate path length when path changes
  useEffect(() => {
    if (pathRef.current && currentPath?.id) {
      const length = pathRef.current.getTotalLength();
      setPathLengths(prev => ({
        ...prev,
        [currentPath.id]: length
      }));
    }
  }, [currentPathIndex, currentPath?.id]);

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

  // Announce current letter
  useEffect(() => {
    if (currentLetter) {
      speak(`Let's trace the letter ${currentLetter.char}`);
    }
  }, [currentLetterIndex, speak]);

  // Handle letter completion
  const handleLetterComplete = useCallback((markCorrect: () => void) => {
    setShowSuccess(true);
    
    if (!completedLetters.has(currentLetterIndex)) {
      markCorrect();
      setCompletedLetters(prev => new Set([...prev, currentLetterIndex]));
      
      const items: ConfettiItem[] = [];
      for (let i = 0; i < 40; i++) {
        items.push({
          id: i,
          x: Math.random() * 100,
          y: -20 - Math.random() * 40,
          rotation: Math.random() * 360,
          scale: 0.3 + Math.random() * 0.7,
          type: Math.random() > 0.5 ? 'emoji' : 'letter'
        });
      }
      setConfetti(items);
    }

    setTimeout(() => {
      setShowSuccess(false);
      setConfetti([]);
    }, 3000);
  }, [currentLetterIndex, completedLetters]);

  // Handle path completion
  const handlePathComplete = useCallback((markCorrect: () => void) => {
    if (!currentPath || !currentLetter) return;

    const currentLength = pathRef.current?.getTotalLength() || 0;
    setPathLengths(prev => ({
      ...prev,
      [currentPath.id]: currentLength
    }));
    setFilledPaths(prev => [...prev, currentPath.id]);
    setIsDrawing(false);
    setProgress(1);
    setLastPoint(0);
    
    if (currentPathIndex === currentLetter.paths.length - 1) {
      handleLetterComplete(markCorrect);
    } else {
      setCurrentPathIndex(prev => prev + 1);
      setProgress(0);
      speak("Good! Keep going!");
    }
  }, [currentPath, currentLetter, currentPathIndex, handleLetterComplete, speak]);

  // Coordinate helpers
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

  // Pointer event handlers
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!svgRef.current || !pathRef.current || !currentPath) return;

    const point = getRelativePoint(e, svgRef.current);
    const pathElement = pathRef.current;
    
    const length = pathElement.getTotalLength();
    let minDistance = Infinity;
    let closestPointOnPath = 0;
    
    const searchStart = progress > 0 ? lastPoint - 30 : 0;
    const searchEnd = progress > 0 ? lastPoint + 30 : Math.min(50, length);
    
    for (let i = searchStart; i <= searchEnd; i += 1) {
      if (i < 0) continue;
      const pathPoint = pathElement.getPointAtLength(i);
      const distance = getDistance(point, pathPoint);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestPointOnPath = i;
      }
    }
    
    if (minDistance < 25) {
      setIsDrawing(true);
      if (progress === 0) {
        setProgress(0);
        setLastPoint(0);
      } else {
        setLastPoint(closestPointOnPath);
      }
    }
  }, [currentPath, getRelativePoint, getDistance, progress, lastPoint]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDrawing || !svgRef.current || !pathRef.current || !currentPath) return;

    const point = getRelativePoint(e, svgRef.current);
    const pathElement = pathRef.current;
    const length = pathElement.getTotalLength();
    let minDistance = Infinity;
    let closestPoint = lastPoint;

    for (let i = lastPoint; i <= Math.min(lastPoint + 30, length); i += 1) {
      const pathPoint = pathElement.getPointAtLength(i);
      const distance = getDistance(point, pathPoint);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestPoint = i;
      }
    }

    if (minDistance < 25) {
      setLastPoint(closestPoint);
      setProgress(closestPoint / length);

      if (closestPoint >= length * 0.95) {
        handlePathComplete(markCorrectRef.current!);
      }
    }
  }, [isDrawing, currentPath, lastPoint, getRelativePoint, getDistance, handlePathComplete]);

  const handlePointerUp = useCallback(() => {
    setIsDrawing(false);
  }, []);

  // Navigation handlers
  const handleTryAgain = useCallback(() => {
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    speak(`Let's try the letter ${currentLetter?.char} again`);
  }, [currentLetter?.char, speak]);

  const handleNextLetter = useCallback(() => {
    if (currentLetterIndex < LETTERS.length - 1) {
      setCurrentLetterIndex(prev => prev + 1);
      setCurrentPathIndex(0);
      setFilledPaths([]);
      setProgress(0);
      setLastPoint(0);
    }
  }, [currentLetterIndex]);

  const handlePrevLetter = useCallback(() => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(prev => prev - 1);
      setCurrentPathIndex(0);
      setFilledPaths([]);
      setProgress(0);
      setLastPoint(0);
    }
  }, [currentLetterIndex]);

  const handleSummaryGenerated = useCallback((summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  }, []);

  if (!currentLetter || !currentPath) {
    return <div>Loading...</div>;
  }

  return (
    <WorksheetTracker
      totalQuestions={LETTERS.length}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ score, markCorrect }) => {
        markCorrectRef.current = markCorrect;
        
        return (
          <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-100 to-pink-100 bg-[url('/candy-bg.png')] bg-cover bg-center bg-blend-soft-light">
            {/* Header */}
            <header className="bg-gradient-to-b from-pink-300/90 to-purple-200/90 shadow-lg backdrop-blur-sm">
              <div className="py-4 px-4">
                <div className="flex items-center justify-between">
                  {/* Edumodes Logo */}
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-baseline leading-none">
                      <span className="text-lg sm:text-xl font-black text-[#EC4899]">E</span>
                      <span className="text-base sm:text-lg font-black text-sky-500 -ml-0.5">d</span>
                      <span className="text-base sm:text-lg font-black text-indigo-500">u</span>
                      <span className="text-lg sm:text-xl font-black text-[#EAB308] ml-0.5">M</span>
                      <span className="text-base sm:text-lg font-black text-emerald-500 -ml-0.5">o</span>
                      <span className="text-base sm:text-lg font-black text-teal-500">d</span>
                      <span className="text-base sm:text-lg font-black text-green-500">e</span>
                      <span className="text-base sm:text-lg font-black text-teal-500">s</span>
                    </div>
                    <a href="https://www.edumodes.com" target="_blank" className="text-[9px] sm:text-[10px] text-gray-300 hover:text-white leading-tight truncate">www.edumodes.com</a>
                  </div>
                </div>
              </div>
            </header>

            <div className="bg-pink-400/30 backdrop-blur-sm shadow-md">
              <h1 className="text-2xl md:text-3xl font-bold text-pink-900 text-center py-3">
                Sweet Letter Adventure: u to z
              </h1>
            </div>

            {/* Score Display */}
            <div className="bg-pink-400/30 p-4 shadow-md mb-4">
              <div className="max-w-4xl mx-auto">
                <ScoreDisplay 
                  score={score}
                  totalQuestions={LETTERS.length * 10}
                />
              </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
              <div className="max-w-2xl mx-auto">
                {/* Letter Display */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl">{currentLetter.objectEmoji}</span>
                      <span className="text-xl font-medium text-pink-900">{currentLetter.object}</span>
                    </div>
                  </div>

                  {/* Tracing Area */}
                  <div className="relative aspect-square max-w-md mx-auto bg-white/50 rounded-xl p-4">
                    {/* Try Again Button */}
                    <button
                      onClick={handleTryAgain}
                      className="absolute -top-2 -right-2 z-10 bg-pink-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-yellow-500/50 text-2xl text-white hover:bg-pink-700 active:bg-pink-600"
                    >
                      🔄
                    </button>

                    <svg
                      ref={svgRef}
                      viewBox={currentLetter.viewBox}
                      className="w-full h-full touch-none select-none"
                      onPointerDown={handlePointerDown}
                      onPointerMove={handlePointerMove}
                      onPointerUp={handlePointerUp}
                      onPointerLeave={handlePointerUp}
                      onPointerCancel={handlePointerUp}
                      style={{ 
                        touchAction: 'none',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        msUserSelect: 'none'
                      }}
                    >
                      {/* Guide Paths */}
                      {currentLetter.paths.map((path, index) => (
                        <g key={path.id}>
                          {/* Background path */}
                          <path
                            d={path.d}
                            fill="none"
                            stroke="rgba(236, 72, 153, 0.2)"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          {/* Active or completed path */}
                          {(index === currentPathIndex || filledPaths.includes(path.id)) && (
                            <path
                              ref={index === currentPathIndex ? pathRef : null}
                              d={path.d}
                              fill="none"
                              stroke="#EC4899"
                              strokeWidth="24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeDasharray={pathLengths[path.id] || 1000}
                              strokeDashoffset={
                                index === currentPathIndex
                                  ? (pathLengths[path.id] || 1000) * (1 - progress)
                                  : 0
                              }
                            />
                          )}
                        </g>
                      ))}

                      {/* Start point */}
                      {!filledPaths.includes(currentPath.id) && (
                        <circle
                          ref={el => {
                            if (el && pathRef.current) {
                              const point = pathRef.current.getPointAtLength(0);
                              el.setAttribute('cx', point.x.toString());
                              el.setAttribute('cy', point.y.toString());
                            }
                          }}
                          r="10"
                          fill="#EC4899"
                          className="animate-pulse"
                        />
                      )}
                    </svg>

                    {/* Instructions */}
                    <div className="absolute top-2 left-2 right-2 text-center">
                      <p className="text-sm text-pink-700 bg-white/80 rounded-full px-3 py-1 inline-block">
                        Trace the letter starting from the blinking dot
                      </p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      onClick={handlePrevLetter}
                      disabled={currentLetterIndex === 0}
                      className={`px-6 py-3 rounded-lg shadow-md font-semibold text-white transition-colors
                        ${currentLetterIndex === 0 
                          ? 'bg-pink-300 cursor-not-allowed' 
                          : 'bg-pink-600 hover:bg-pink-500 active:bg-pink-400'}`}
                    >
                      ← Previous Letter
                    </button>
                    <button
                      onClick={handleNextLetter}
                      disabled={currentLetterIndex === LETTERS.length - 1}
                      className={`px-6 py-3 rounded-lg shadow-md font-semibold text-white transition-colors
                        ${currentLetterIndex === LETTERS.length - 1 
                          ? 'bg-pink-300 cursor-not-allowed' 
                          : 'bg-pink-600 hover:bg-pink-500 active:bg-pink-400'}`}
                    >
                      Next Letter →
                    </button>
                  </div>
                </div>
              </div>
            </main>

            {/* Success Animation */}
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
                               `hsl(${330 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${45 + Math.random() * 15}%)`,
                        textShadow: '0 0 5px rgba(0,0,0,0.2)',
                        fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.type === 'emoji' ? 
                        currentLetter.objectEmoji : 
                        Math.random() > 0.7 ? '🍬' : currentLetter.char}
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default LetterTracingWorksheet; 