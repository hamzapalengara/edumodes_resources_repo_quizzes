import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// Add this new interface for confetti items
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
    char: 'A',
    object: 'Apple',
    objectEmoji: '🍎',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'left', d: 'M40 160L100 40', order: 1 },
      { id: 'right', d: 'M100 40L160 160', order: 2 },
      { id: 'middle', d: 'M70 100L130 100', order: 3 }
    ]
  },
  {
    char: 'B',
    object: 'Ball',
    objectEmoji: '⚽',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'vertical', d: 'M40 40L40 160', order: 1 },
      { id: 'top', d: 'M40 40C80 40 140 40 140 70S80 100 40 100', order: 2 },
      { id: 'bottom', d: 'M40 100C80 100 140 100 140 130S80 160 40 160', order: 3 }
    ]
  },
  {
    char: 'C',
    object: 'Cat',
    objectEmoji: '🐱',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'curve', d: 'M160 60C120 20 40 40 40 100S120 180 160 140', order: 1 }
    ]
  },
  {
    char: 'D',
    object: 'Dog',
    objectEmoji: '🐶',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'vertical', d: 'M40 40L40 160', order: 1 },
      { id: 'curve', d: 'M40 40C120 40 160 70 160 100S120 160 40 160', order: 2 }
    ]
  },
  {
    char: 'E',
    object: 'Elephant',
    objectEmoji: '🐘',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'vertical', d: 'M40 40L40 160', order: 1 },
      { id: 'top', d: 'M40 40L140 40', order: 2 },
      { id: 'middle', d: 'M40 100L120 100', order: 3 },
      { id: 'bottom', d: 'M40 160L140 160', order: 4 }
    ]
  },
  {
    char: 'F',
    object: 'Fish',
    objectEmoji: '🐠',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'vertical', d: 'M40 40L40 160', order: 1 },
      { id: 'top', d: 'M40 40L140 40', order: 2 },
      { id: 'middle', d: 'M40 100L120 100', order: 3 }
    ]
  },
  {
    char: 'G',
    object: 'Giraffe',
    objectEmoji: '🦒',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'curve', d: 'M160 60C120 20 40 40 40 100S120 180 160 140', order: 1 },
      { id: 'hook', d: 'M160 140L160 100L120 100', order: 2 }
    ]
  },
  {
    char: 'H',
    object: 'Horse',
    objectEmoji: '🐎',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'left', d: 'M40 40L40 160', order: 1 },
      { id: 'right', d: 'M160 40L160 160', order: 2 },
      { id: 'middle', d: 'M40 100L160 100', order: 3 }
    ]
  },
  {
    char: 'I',
    object: 'Ice Cream',
    objectEmoji: '🍦',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'top', d: 'M70 40L130 40', order: 1 },
      { id: 'vertical', d: 'M100 40L100 160', order: 2 },
      { id: 'bottom', d: 'M70 160L130 160', order: 3 }
    ]
  },
  {
    char: 'J',
    object: 'Jellyfish',
    objectEmoji: '🎐',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'top', d: 'M70 40L130 40', order: 1 },
      { id: 'hook', d: 'M100 40L100 120C100 160 60 160 40 140', order: 2 }
    ]
  }
];

const LetterTracingWorksheet: React.FC = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [filledPaths, setFilledPaths] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [score, setScore] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lastPoint, setLastPoint] = useState<number>(0);
  const [pathLengths, setPathLengths] = useState<{ [key: string]: number }>({});
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);

  const currentLetter = LETTERS[currentLetterIndex];
  const currentPath = currentLetter.paths[currentPathIndex];

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

  const handlePointerMove = (e: React.PointerEvent) => {
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
      if (newProgress > 0.85) {
        handlePathComplete();
      }
    }
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
  };

  const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };

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

  // Add navigation functions
  const handlePrevLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(prev => prev - 1);
      setCurrentPathIndex(0);
      setFilledPaths([]);
      setProgress(0);
      setLastPoint(0);
    }
  };

  const handleNextLetter = () => {
    if (currentLetterIndex < LETTERS.length - 1) {
      setCurrentLetterIndex(prev => prev + 1);
      setCurrentPathIndex(0);
      setFilledPaths([]);
      setProgress(0);
      setLastPoint(0);
    }
  };

  const handleTryAgain = () => {
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
  };

  // Modify handleLetterComplete to include speech
  const handleLetterComplete = () => {
    setShowSuccess(true);
    setScore(prev => prev + 10);
    
    // Speak the letter and word
    speak(`${currentLetter.char} is for ${currentLetter.object}. Great job!`);
    
    // Generate more confetti items with varied speeds and sizes
    const items: ConfettiItem[] = [];
    for (let i = 0; i < 40; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: -20 - Math.random() * 40, // Start higher above screen
        rotation: Math.random() * 360,
        scale: 0.3 + Math.random() * 0.7, // More size variation
        type: Math.random() > 0.5 ? 'emoji' : 'letter' // More emojis
      });
    }
    setConfetti(items);

    setTimeout(() => {
      setShowSuccess(false);
      setConfetti([]);
      if (currentLetterIndex < LETTERS.length - 1) {
        setCurrentLetterIndex(prev => prev + 1);
        setCurrentPathIndex(0);
        setFilledPaths([]);
      }
    }, 3000); // Longer animation duration
  };

  // Add speech when starting a new letter
  React.useEffect(() => {
    speak(`Let's trace the letter ${currentLetter.char}`);
  }, [currentLetterIndex]);

  // Add speech for path completion
  const handlePathComplete = () => {
    const currentLength = pathRef.current?.getTotalLength() || 0;
    setPathLengths(prev => ({
      ...prev,
      [currentPath.id]: currentLength
    }));
    setFilledPaths(prev => [...prev, currentPath.id]);
    setIsDrawing(false);
    setProgress(1); // Set to 1 to ensure complete fill
    setLastPoint(0);
    
    if (currentPathIndex === currentLetter.paths.length - 1) {
      handleLetterComplete();
    } else {
      setCurrentPathIndex(prev => prev + 1);
      setProgress(0);
      speak("Good! Keep going!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-emerald-200 bg-[url('/forest-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-emerald-800/90 to-emerald-700/90 shadow-lg backdrop-blur-sm">
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
                <span className="text-yellow-300 text-lg">🌟</span>
                <span className="text-white ml-1">Score: {score}</span>
              </div>
              <div className="flex items-center">
                <span className="text-white">Letter {currentLetterIndex + 1} of {LETTERS.length}</span>
                <span className="text-lg ml-1">🍃</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-white/80 backdrop-blur-sm shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center py-3">
          Letter Tracing Adventure
        </h1>
      </div>

      {/* Main Content */}
      <main className="p-4">
        {/* Letter Display */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-4 border-2 border-emerald-100/50">
          <div className="text-center mb-4">
            <span className="text-6xl font-bold text-emerald-800">{currentLetter.char}</span>
          </div>
          <div className="text-center mb-2">
            <span className="text-3xl filter drop-shadow-md">{currentLetter.objectEmoji}</span>
            <span className="ml-3 text-emerald-800 font-medium">{currentLetter.char} is for {currentLetter.object}</span>
          </div>
        </div>

        {/* Tracing Area */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-emerald-100/50">
          <div className="relative aspect-square max-w-[400px] mx-auto">
            {/* Try Again button */}
            <button
              onClick={handleTryAgain}
              className="absolute -top-2 -right-2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-emerald-100 text-2xl text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100"
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
              <circle cx="100" cy="100" r="80" fill="rgba(167, 243, 208, 0.2)" />
              
              {currentLetter.paths.map((path, index) => (
                <g key={path.id}>
                  {/* Background path */}
                  <path
                    d={path.d}
                    fill="none"
                    stroke="#d1d5db"
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
                      stroke="#059669"
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
                  fill="#059669"
                  className="animate-pulse"
                />
              )}
            </svg>

            {/* Instructions */}
            <div className="mt-4 text-center text-sm text-emerald-700 font-medium">
              Follow the gray lines with your finger or mouse to trace each part of the letter
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button 
                onClick={handlePrevLetter}
                disabled={currentLetterIndex === 0}
                className={`p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-md border-2 ${
                  currentLetterIndex === 0 
                    ? 'bg-gray-100 text-gray-400 border-gray-200' 
                    : 'bg-white text-emerald-600 border-emerald-100 hover:bg-emerald-50 active:bg-emerald-100'
                }`}
              >
                ⬅️
              </button>
              <button 
                onClick={handleNextLetter}
                disabled={currentLetterIndex === LETTERS.length - 1}
                className={`p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-md border-2 ${
                  currentLetterIndex === LETTERS.length - 1 
                    ? 'bg-gray-100 text-gray-400 border-gray-200' 
                    : 'bg-white text-emerald-600 border-emerald-100 hover:bg-emerald-50 active:bg-emerald-100'
                }`}
              >
                ➡️
              </button>
            </div>
          </div>
        </div>

        {/* Success Animation */}
        <AnimatePresence>
          {showSuccess && (
            <>
              {/* Forest particles */}
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
                           `hsl(${140 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${45 + Math.random() * 15}%)`,
                    textShadow: '0 0 5px rgba(0,0,0,0.2)',
                    fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                    fontWeight: 'bold',
                  }}
                >
                  {item.type === 'emoji' ? 
                    currentLetter.objectEmoji : 
                    Math.random() > 0.7 ? '🍃' : currentLetter.char}
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default LetterTracingWorksheet; 