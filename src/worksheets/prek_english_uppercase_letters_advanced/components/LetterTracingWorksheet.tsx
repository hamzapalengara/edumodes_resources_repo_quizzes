import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

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
    char: 'U',
    object: 'UFO',
    objectEmoji: '🛸',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'left', d: 'M40 40L40 120C40 160 160 160 160 120L160 40', order: 1 }
    ]
  },
  {
    char: 'V',
    object: 'Venus',
    objectEmoji: '⭐',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'left', d: 'M40 40L100 160', order: 1 },
      { id: 'right', d: 'M100 160L160 40', order: 2 }
    ]
  },
  {
    char: 'W',
    object: 'Wormhole',
    objectEmoji: '🌌',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'first', d: 'M40 40L60 160', order: 1 },
      { id: 'second', d: 'M60 160L100 80', order: 2 },
      { id: 'third', d: 'M100 80L140 160', order: 3 },
      { id: 'fourth', d: 'M140 160L160 40', order: 4 }
    ]
  },
  {
    char: 'X',
    object: 'X-ray Star',
    objectEmoji: '✨',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'diagonal1', d: 'M40 40L160 160', order: 1 },
      { id: 'diagonal2', d: 'M160 40L40 160', order: 2 }
    ]
  },
  {
    char: 'Y',
    object: 'Yellow Dwarf',
    objectEmoji: '🌟',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'left', d: 'M40 40L100 100', order: 1 },
      { id: 'right', d: 'M160 40L100 100', order: 2 },
      { id: 'stem', d: 'M100 100L100 160', order: 3 }
    ]
  },
  {
    char: 'Z',
    object: 'Zodiac',
    objectEmoji: '🌠',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'top', d: 'M40 40L160 40', order: 1 },
      { id: 'diagonal', d: 'M160 40L40 160', order: 2 },
      { id: 'bottom', d: 'M40 160L160 160', order: 3 }
    ]
  }
];

const LetterTracingWorksheet: React.FC = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [filledPaths, setFilledPaths] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lastPoint, setLastPoint] = useState<number>(0);
  const [pathLengths, setPathLengths] = useState<{ [key: string]: number }>({});
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);
  const markCorrectRef = useRef<(() => void) | null>(null);

  const currentLetter = LETTERS[currentLetterIndex];
  const currentPath = currentLetter.paths[currentPathIndex];

  // Add speech synthesis
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Reset progress when changing letters
  React.useEffect(() => {
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    setPathLengths({});
  }, [currentLetterIndex]);

  // Store path length when path ref changes
  React.useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLengths(prev => ({
        ...prev,
        [currentPath.id]: length
      }));
    }
  }, [currentPathIndex, currentPath.id]);

  const getRelativePoint = (e: React.PointerEvent, svg: SVGSVGElement) => {
    const rect = svg.getBoundingClientRect();
    const point = svg.createSVGPoint();
    
    point.x = e.clientX - rect.left;
    point.y = e.clientY - rect.top;
    
    const scale = {
      x: parseFloat(currentLetter.viewBox.split(' ')[2]) / rect.width,
      y: parseFloat(currentLetter.viewBox.split(' ')[3]) / rect.height
    };
    
    return {
      x: point.x * scale.x,
      y: point.y * scale.y,
      threshold: Math.max(30, Math.min(50, rect.width / 8)) // Adaptive threshold based on screen size
    };
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    const point = getRelativePoint(e, svg);
    const pathLength = path.getTotalLength();
    let minDistance = Infinity;
    let closestLength = 0;

    // Find the closest point on the entire path
    for (let i = 0; i <= pathLength; i += 5) {
      const pathPoint = path.getPointAtLength(i);
      const distance = getDistance(point, pathPoint);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestLength = i;
      }
    }

    // Allow starting from any point if close enough to the path
    if (minDistance < point.threshold) {
      setIsDrawing(true);
      setProgress(closestLength / pathLength);
      setLastPoint(closestLength);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  // Modified handleLetterComplete to use WorksheetTracker
  const handleLetterComplete = useCallback((markCorrect: () => void) => {
    setShowSuccess(true);
    markCorrect(); // Use WorksheetTracker's markCorrect
    
    // Generate confetti items with varied speeds and sizes
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

    // Remove auto-progression
    setTimeout(() => {
      setShowSuccess(false);
      setConfetti([]);
    }, 3000);
  }, []);

  // Modified handlePathComplete to use WorksheetTracker's markCorrect
  const handlePathComplete = useCallback((markCorrect: () => void) => {
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
  }, [currentPath.id, currentPathIndex, currentLetter.paths.length, handleLetterComplete]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDrawing) return;

    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    const point = getRelativePoint(e, svg);
    const pathLength = path.getTotalLength();
    let minDistance = Infinity;
    let closestLength = 0;

    // Search forward from last point, but allow some backtracking
    const searchStart = Math.max(0, lastPoint - 20);
    for (let i = searchStart; i <= pathLength; i += 5) {
      const pathPoint = path.getPointAtLength(i);
      const distance = getDistance(point, pathPoint);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestLength = i;
      }
    }

    // Update progress if close enough to path
    if (minDistance < point.threshold) {
      const newProgress = closestLength / pathLength;
      // Allow some backtracking but prefer forward progress
      if (closestLength >= lastPoint - 20) {
        setProgress(Math.max(progress, newProgress));
        setLastPoint(closestLength);
      }
      
      // Complete path if we're near the end
      if (newProgress > 0.85 && markCorrectRef.current) {
        handlePathComplete(markCorrectRef.current);
      }
    }
  }, [isDrawing, lastPoint, progress, handlePathComplete]);

  const handlePointerUp = () => {
    setIsDrawing(false);
  };

  const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };

  // Add speech when starting a new letter
  React.useEffect(() => {
    speak(`Let's trace the letter ${currentLetter.char}`);
  }, [currentLetterIndex]);

  // Add navigation functions
  const handlePrevLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(prev => prev - 1);
      setCurrentPathIndex(0);
      setFilledPaths([]);
      setProgress(0);
      setLastPoint(0);
      setShowSuccess(false);
      setConfetti([]);
    }
  };

  const handleNextLetter = () => {
    if (currentLetterIndex < LETTERS.length - 1) {
      setCurrentLetterIndex(prev => prev + 1);
      setCurrentPathIndex(0);
      setFilledPaths([]);
      setProgress(0);
      setLastPoint(0);
      setShowSuccess(false);
      setConfetti([]);
    }
  };

  const handleTryAgain = () => {
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    setShowSuccess(false);
    setConfetti([]);
  };

  return (
    <WorksheetTracker
      totalQuestions={LETTERS.length}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Space Letter Adventure Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        markCorrectRef.current = markCorrect;
        
        return (
          <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black bg-[url('/space-bg.png')] bg-cover bg-center bg-blend-soft-light">
            {/* Header */}
            <header className="bg-gradient-to-b from-indigo-900/90 to-purple-900/90 shadow-lg backdrop-blur-sm">
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
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center mr-4">
                      <span className="text-yellow-300 text-lg">⭐</span>
                      <span className="text-white ml-1">Score: {score} / {maxScore}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white">Letter {currentLetterIndex + 1} of {LETTERS.length}</span>
                      <span className="text-lg ml-1">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Title Section */}
            <div className="bg-black/30 backdrop-blur-sm shadow-md">
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center py-3">
                Space Letter Adventure: U to Z
              </h1>
            </div>

            {/* Main Content */}
            <main className="p-4">
              {/* Letter Display */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-4 border-2 border-purple-500/20">
                <div className="text-center mb-4">
                  <span className="text-6xl font-bold text-white">{currentLetter.char}</span>
                </div>
                <div className="text-center mb-2">
                  <span className="text-3xl filter drop-shadow-md">{currentLetter.objectEmoji}</span>
                  <span className="ml-3 text-white font-medium">{currentLetter.char} is for {currentLetter.object}</span>
                </div>
              </div>

              {/* Tracing Area */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-purple-500/20">
                <div className="relative aspect-square max-w-[400px] mx-auto">
                  {/* Try Again button */}
                  <button
                    onClick={handleTryAgain}
                    className="absolute -top-2 -right-2 z-10 bg-indigo-900 rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-purple-500/50 text-2xl text-white hover:bg-indigo-800 active:bg-indigo-700"
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
                    {/* Background decoration */}
                    <circle cx="100" cy="100" r="80" fill="rgba(167, 139, 250, 0.1)" />
                    
                    {currentLetter.paths.map((path, index) => (
                      <g key={path.id}>
                        {/* Background path */}
                        <path
                          d={path.d}
                          fill="none"
                          stroke="rgba(139, 92, 246, 0.3)"
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
                            stroke="#8B5CF6"
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
                        fill="#8B5CF6"
                        className="animate-pulse"
                      />
                    )}
                  </svg>

                  {/* Instructions */}
                  <div className="mt-4 text-center text-sm text-purple-300 font-medium">
                    Follow the glowing paths with your finger or mouse to trace each part of the letter
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      onClick={handlePrevLetter}
                      disabled={currentLetterIndex === 0}
                      className={`px-6 py-3 rounded-lg shadow-md font-semibold text-white transition-colors
                        ${currentLetterIndex === 0 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'}`}
                    >
                      ← Previous Letter
                    </button>
                    <button
                      onClick={handleNextLetter}
                      disabled={currentLetterIndex === LETTERS.length - 1}
                      className={`px-6 py-3 rounded-lg shadow-md font-semibold text-white transition-colors
                        ${currentLetterIndex === LETTERS.length - 1 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'}`}
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
                    {/* Space particles */}
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
                                 `hsl(${250 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${45 + Math.random() * 15}%)`,
                          textShadow: '0 0 5px rgba(0,0,0,0.2)',
                          fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {item.type === 'emoji' ? 
                          currentLetter.objectEmoji : 
                          Math.random() > 0.7 ? '✨' : currentLetter.char}
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