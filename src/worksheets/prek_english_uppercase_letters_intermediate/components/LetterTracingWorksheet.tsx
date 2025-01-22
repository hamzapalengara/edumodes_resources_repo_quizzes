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
    char: 'K',
    object: 'Killer Whale',
    objectEmoji: '🐋',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'vertical', d: 'M40 40L40 160', order: 1 },
      { id: 'diagonal-top', d: 'M40 100L140 40', order: 2 },
      { id: 'diagonal-bottom', d: 'M40 100L140 160', order: 3 }
    ]
  },
  {
    char: 'L',
    object: 'Lobster',
    objectEmoji: '🦞',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'vertical', d: 'M40 40L40 160', order: 1 },
      { id: 'horizontal', d: 'M40 160L140 160', order: 2 }
    ]
  },
  {
    char: 'M',
    object: 'Manta Ray',
    objectEmoji: '🦈',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'left', d: 'M40 160L40 40', order: 1 },
      { id: 'middle-left', d: 'M40 40L100 120', order: 2 },
      { id: 'middle-right', d: 'M100 120L160 40', order: 3 },
      { id: 'right', d: 'M160 40L160 160', order: 4 }
    ]
  },
  {
    char: 'N',
    object: 'Narwhal',
    objectEmoji: '🐋',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'left', d: 'M40 160L40 40', order: 1 },
      { id: 'diagonal', d: 'M40 40L160 160', order: 2 },
      { id: 'right', d: 'M160 160L160 40', order: 3 }
    ]
  },
  {
    char: 'O',
    object: 'Octopus',
    objectEmoji: '🐙',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'circle', d: 'M100 40C60 40 40 60 40 100S60 160 100 160S160 140 160 100S140 40 100 40', order: 1 }
    ]
  },
  {
    char: 'P',
    object: 'Pufferfish',
    objectEmoji: '🐡',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'vertical', d: 'M40 40L40 160', order: 1 },
      { id: 'loop', d: 'M40 40C80 40 140 40 140 70S80 100 40 100', order: 2 }
    ]
  },
  {
    char: 'Q',
    object: 'Queen Angelfish',
    objectEmoji: '🐠',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'circle', d: 'M100 40C60 40 40 60 40 100S60 160 100 160S160 140 160 100S140 40 100 40', order: 1 },
      { id: 'tail', d: 'M100 100L160 160', order: 2 }
    ]
  },
  {
    char: 'R',
    object: 'Ray',
    objectEmoji: '🦈',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'vertical', d: 'M40 40L40 160', order: 1 },
      { id: 'loop', d: 'M40 40C80 40 140 40 140 70S80 100 40 100', order: 2 },
      { id: 'leg', d: 'M40 100L140 160', order: 3 }
    ]
  },
  {
    char: 'S',
    object: 'Seahorse',
    objectEmoji: '🐠',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'curve', d: 'M160 60C120 20 60 20 40 60S60 120 100 120S160 120 140 160S80 180 40 140', order: 1 }
    ]
  },
  {
    char: 'T',
    object: 'Turtle',
    objectEmoji: '🐢',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'horizontal', d: 'M40 40L160 40', order: 1 },
      { id: 'vertical', d: 'M100 40L100 160', order: 2 }
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
      y: point.y * scale.y
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
    if (minDistance < 50) {
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
    if (minDistance < 50) {
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

  const handlePrevLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(prev => prev - 1);
      setCurrentPathIndex(0);
      setFilledPaths([]);
      setProgress(0);
      setLastPoint(0);
      setPathLengths({});
    }
  };

  const handleNextLetter = () => {
    if (currentLetterIndex < LETTERS.length - 1) {
      setCurrentLetterIndex(prev => prev + 1);
      setCurrentPathIndex(0);
      setFilledPaths([]);
      setProgress(0);
      setLastPoint(0);
      setPathLengths({});
    }
  };

  const handleTryAgain = () => {
    setCurrentPathIndex(0);
    setFilledPaths([]);
    setProgress(0);
    setLastPoint(0);
    setPathLengths({});
    speak(`Let's try the letter ${currentLetter.char} again`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-cyan-100 to-blue-200 bg-[url('/ocean-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-blue-800/90 to-blue-700/90 shadow-lg backdrop-blur-sm">
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
                <span className="text-lg ml-1">🌊</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-white/80 backdrop-blur-sm shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 text-center py-3">
          Letter Tracing Adventure
        </h1>
      </div>

      {/* Main Content */}
      <main className="p-4">
        {/* Letter Display */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-4 border-2 border-blue-100/50">
          <div className="text-center mb-4">
            <span className="text-6xl font-bold text-blue-800">{currentLetter.char}</span>
          </div>
          <div className="text-center mb-2">
            <span className="text-3xl filter drop-shadow-md">{currentLetter.objectEmoji}</span>
            <span className="ml-3 text-blue-800 font-medium">{currentLetter.char} is for {currentLetter.object}</span>
          </div>
        </div>

        {/* Tracing Area */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-blue-100/50">
          <div className="relative aspect-square max-w-[400px] mx-auto">
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
              <circle cx="100" cy="100" r="80" fill="rgba(186, 230, 253, 0.2)" />
              
              {currentLetter.paths.map((path, index) => (
                <g key={path.id}>
                  {/* Background path */}
                  <path
                    d={path.d}
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Active or completed path */}
                  {(index === currentPathIndex || filledPaths.includes(path.id)) && (
                    <path
                      ref={index === currentPathIndex ? pathRef : null}
                      d={path.d}
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="20"
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
                  r="8"
                  fill="#0284c7"
                  className="animate-pulse"
                />
              )}
            </svg>

            {/* Next stroke hint */}
            <div className="absolute top-2 left-0 right-0 text-center">
              <span className="bg-sky-100 text-blue-800 text-sm px-3 py-1.5 rounded-full font-medium shadow-sm">
                Start at the blue dot and trace the letter
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 text-center text-sm text-blue-700 font-medium">
            Follow the gray lines with your finger or mouse to trace each part of the letter
          </div>

          {/* Navigation and Try Again Buttons */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={handlePrevLetter}
              disabled={currentLetterIndex === 0}
              className="w-12 h-12 rounded-full bg-blue-100 text-blue-800 text-xl font-medium hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              aria-label="Previous Letter"
            >
              ⬅️
            </button>
            <button
              onClick={handleTryAgain}
              className="w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-medium hover:bg-blue-700 flex items-center justify-center"
              aria-label="Try Again"
            >
              🔄
            </button>
            <button
              onClick={handleNextLetter}
              disabled={currentLetterIndex === LETTERS.length - 1}
              className="w-12 h-12 rounded-full bg-blue-100 text-blue-800 text-xl font-medium hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              aria-label="Next Letter"
            >
              ➡️
            </button>
          </div>
        </div>

        {/* Success Animation */}
        <AnimatePresence>
          {showSuccess && (
            <>
              {/* Ocean particles */}
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
                           `hsl(${200 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${45 + Math.random() * 15}%)`,
                    textShadow: '0 0 5px rgba(0,0,0,0.2)',
                    fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                    fontWeight: 'bold',
                  }}
                >
                  {item.type === 'emoji' ? 
                    currentLetter.objectEmoji : 
                    Math.random() > 0.7 ? '🌊' : currentLetter.char}
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