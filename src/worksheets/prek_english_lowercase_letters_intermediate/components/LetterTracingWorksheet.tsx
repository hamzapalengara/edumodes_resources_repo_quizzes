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
    char: 'k',
    object: 'Kangaroo',
    objectEmoji: '🦘',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'stem', d: 'M40 40L40 160', order: 1 },
      { id: 'diagonal1', d: 'M40 100L120 40', order: 2 },
      { id: 'diagonal2', d: 'M40 100L120 160', order: 3 }
    ]
  },
  {
    char: 'l',
    object: 'Lion',
    objectEmoji: '🦁',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'stem', d: 'M80 40L80 160', order: 1 }
    ]
  },
  {
    char: 'm',
    object: 'Monkey',
    objectEmoji: '🐒',
    viewBox: '0 0 240 200',
    paths: [
      { id: 'stem1', d: 'M40 80L40 160', order: 1 },
      { id: 'arch1', d: 'M40 80C40 60 60 40 80 40C100 40 120 60 120 80L120 160', order: 2 },
      { id: 'arch2', d: 'M120 80C120 60 140 40 160 40C180 40 200 60 200 80L200 160', order: 3 }
    ]
  },
  {
    char: 'n',
    object: 'Numbat',
    objectEmoji: '🦊',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'stem', d: 'M40 80L40 160', order: 1 },
      { id: 'arch', d: 'M40 80C40 60 60 40 80 40C100 40 120 60 120 80L120 160', order: 2 }
    ]
  },
  {
    char: 'o',
    object: 'Ostrich',
    objectEmoji: '🦅',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'circle', d: 'M120 100C120 80 100 60 80 60C60 60 40 80 40 100C40 120 60 140 80 140C100 140 120 120 120 100Z', order: 1 }
    ]
  },
  {
    char: 'p',
    object: 'Penguin',
    objectEmoji: '🐧',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'stem', d: 'M40 80L40 180', order: 1 },
      { id: 'circle', d: 'M40 100C40 80 60 60 80 60C100 60 120 80 120 100C120 120 100 140 80 140C60 140 40 120 40 100', order: 2 }
    ]
  },
  {
    char: 'q',
    object: 'Quokka',
    objectEmoji: '🦘',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'circle', d: 'M120 100C120 80 100 60 80 60C60 60 40 80 40 100C40 120 60 140 80 140C100 140 120 120 120 100', order: 1 },
      { id: 'tail', d: 'M120 100L120 180', order: 2 }
    ]
  },
  {
    char: 'r',
    object: 'Rabbit',
    objectEmoji: '🐰',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'stem', d: 'M40 80L40 160', order: 1 },
      { id: 'curve', d: 'M40 80C40 60 60 40 80 40C100 40 120 60 120 80', order: 2 }
    ]
  },
  {
    char: 's',
    object: 'Snake',
    objectEmoji: '🐍',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'curve', d: 'M120 80C100 60 60 60 40 80C20 100 40 120 80 120C120 120 140 140 120 160C100 180 60 180 40 160', order: 1 }
    ]
  },
  {
    char: 't',
    object: 'Tiger',
    objectEmoji: '🐯',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'stem', d: 'M80 40L80 140C80 150 85 160 95 160', order: 1 },
      { id: 'cross', d: 'M40 80L120 80', order: 2 }
    ]
  }
];

const LetterTracingWorksheet: React.FC = () => {
  // All state hooks at the top
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
  const markCorrectRef = useRef<(() => void) | null>(null);

  // All refs at the top
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Get current letter and path
  const currentLetter = LETTERS[currentLetterIndex];
  const currentPath = currentLetter?.paths[currentPathIndex];

  // Speech synthesis function
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Reset path state when changing letters, but preserve completedLetters
  useEffect(() => {
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    setPathLengths({});
  }, [currentLetterIndex]);

  useEffect(() => {
    if (pathRef.current && currentPath?.id) {
      const length = pathRef.current.getTotalLength();
      setPathLengths(prev => ({
        ...prev,
        [currentPath.id]: length
      }));
    }
  }, [currentPathIndex, currentPath?.id]);

  useEffect(() => {
    if (currentLetter) {
      speak(`Let's trace the letter ${currentLetter.char}`);
    }
  }, [currentLetterIndex, speak]);

  // Handle letter completion
  const handleLetterComplete = useCallback((markCorrect: () => void) => {
    setShowSuccess(true);
    
    // Only mark correct and show confetti if this letter hasn't been completed before
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

  // Pointer event handlers
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

    if (minDistance < 20) {
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

  // Handle try again - only reset path state, preserve completedLetters
  const handleTryAgain = useCallback(() => {
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    speak(`Let's try the letter ${currentLetter?.char} again`);
  }, [currentLetter?.char, speak]);

  // Handle next letter - preserve completedLetters
  const handleNextLetter = useCallback(() => {
    if (currentLetterIndex < LETTERS.length - 1) {
      setCurrentLetterIndex(prev => prev + 1);
      setCurrentPathIndex(0);
      setFilledPaths([]);
      setProgress(0);
      setLastPoint(0);
    }
  }, [currentLetterIndex]);

  // Handle prev letter - preserve completedLetters
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

  // Return early if no current letter or path
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
          <div className="min-h-screen bg-gradient-to-b from-violet-200 via-purple-100 to-violet-100 bg-[url('/jungle-bg.png')] bg-cover bg-center bg-blend-soft-light">
            {/* Header */}
            <header className="bg-gradient-to-b from-violet-300/90 to-purple-200/90 shadow-lg backdrop-blur-sm">
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

            <div className="bg-violet-400/30 backdrop-blur-sm shadow-md">
              <h1 className="text-2xl md:text-3xl font-bold text-violet-900 text-center py-3">
                Jungle Letter Adventure: k to t
              </h1>
            </div>

            {/* Score Display */}
            <div className="bg-violet-400/30 p-4 shadow-md mb-4">
              <div className="max-w-4xl mx-auto">
                <ScoreDisplay 
                  score={score}
                  totalQuestions={LETTERS.length * 10}
                />
              </div>
            </div>

            {/* Main Content */}
            <main className="px-0 container mx-auto max-w-3xl">
              {/* Letter Display */}
              <div className="bg-violet-400/40 backdrop-blur-sm p-4 mb-4 border-2 border-violet-500/20">
                <div className="text-center mb-4">
                  <span className="text-6xl md:text-7xl font-bold text-violet-900">{currentLetter.char}</span>
                </div>
                <div className="text-center mb-2">
                  <span className="text-3xl md:text-4xl filter drop-shadow-md">{currentLetter.objectEmoji}</span>
                  <span className="ml-3 text-violet-900 font-medium">{currentLetter.char} is for {currentLetter.object}</span>
                </div>
              </div>

              {/* Tracing Area */}
              <div className="bg-violet-400/40 backdrop-blur-sm p-4 border-2 border-violet-500/20">
                <div className="relative aspect-square max-w-[400px] mx-auto">
                  {/* Try Again button */}
                  <button
                    onClick={handleTryAgain}
                    className="absolute -top-2 -right-2 z-10 bg-violet-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-purple-500/50 text-2xl text-white hover:bg-violet-700 active:bg-violet-600"
                  >
                    🔄
                  </button>

                  <svg
                    ref={svgRef}
                    viewBox={currentLetter.viewBox}
                    className="w-full h-full touch-none select-none"
                    style={{ touchAction: 'none' }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                  >
                    {currentLetter.paths.map((path, index) => (
                      <g key={path.id}>
                        {/* Background path */}
                        <path
                          d={path.d}
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.5)"
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
                            stroke="#10B981"
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

                    {/* Start point indicator */}
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
                        fill="#10B981"
                        className="animate-pulse"
                      />
                    )}
                  </svg>

                  {/* Instructions */}
                  <div className="mt-4 text-center text-sm text-emerald-300 font-medium">
                    Follow the jungle paths with your finger or mouse to trace each part of the letter
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      onClick={handlePrevLetter}
                      disabled={currentLetterIndex === 0}
                      className={`px-6 py-3 rounded-lg shadow-md font-semibold text-white transition-colors
                        ${currentLetterIndex === 0 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-violet-700 hover:bg-violet-600 active:bg-violet-500'}`}
                    >
                      ← Previous Letter
                    </button>
                    <button
                      onClick={handleNextLetter}
                      disabled={currentLetterIndex === LETTERS.length - 1}
                      className={`px-6 py-3 rounded-lg shadow-md font-semibold text-white transition-colors
                        ${currentLetterIndex === LETTERS.length - 1 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-violet-700 hover:bg-violet-600 active:bg-violet-500'}`}
                    >
                      Next Letter →
                    </button>
                  </div>
                </div>
              </div>

              {/* Success Animation */}
              <AnimatePresence>
                {showSuccess && (
                  <>
                    {/* Jungle particles */}
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
                                 `hsl(${80 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${45 + Math.random() * 15}%)`,
                          textShadow: '0 0 5px rgba(0,0,0,0.2)',
                          fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {item.type === 'emoji' ? 
                          currentLetter.objectEmoji : 
                          Math.random() > 0.7 ? '🌿' : currentLetter.char}
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>
            </main>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default LetterTracingWorksheet; 