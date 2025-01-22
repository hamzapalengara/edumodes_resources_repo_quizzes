import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpeechSynthesis } from '../../../hooks/useSpeechSynthesis';

// Core viewport requirements
const VIEWPORT_REQUIREMENTS = {
  minWidth: 280,  // Galaxy Fold support
  minHeight: 500, // Minimum height
  breakpoints: {
    sm: 320,      // Small mobile
    md: 480,      // Regular mobile
    lg: 768,      // Tablet
    xl: 1024      // Desktop
  }
};

// Core touch specifications
const TOUCH_REQUIREMENTS = {
  minTargetSize: 44,    // Minimum touch target size (pixels)
  minSpacing: 8,        // Minimum space between touch targets
};

// Required typography scale
const TYPOGRAPHY = {
  base: {
    small: 'clamp(14px, 3.5vw, 16px)',
    regular: 'clamp(16px, 4vw, 18px)',
    large: 'clamp(18px, 4.5vw, 20px)'
  },
  heading: {
    small: 'clamp(16px, 4vw, 20px)',
    regular: 'clamp(18px, 4.5vw, 24px)',
    large: 'clamp(20px, 5vw, 28px)'
  }
};

export interface Letter {
  char: string;
  object: string;
  objectEmoji: string;
  viewBox: string;
  paths: { id: string; d: string; order: number }[];
}

interface ConfettiItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'emoji' | 'letter';
}

export const LETTERS: Letter[] = [
  {
    char: 'U',
    object: 'UFO',
    objectEmoji: '🛸',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'u1', d: 'M60 40 L60 140 Q60 160 80 160 L120 160 Q140 160 140 140 L140 40', order: 1 }
    ]
  },
  {
    char: 'V',
    object: 'Venus',
    objectEmoji: '🌟',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'v1', d: 'M40 40 L100 160 L160 40', order: 1 }
    ]
  },
  {
    char: 'W',
    object: 'Wormhole',
    objectEmoji: '🌀',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'w1', d: 'M20 40 L60 160 L100 80 L140 160 L180 40', order: 1 }
    ]
  },
  {
    char: 'X',
    object: 'X-ray Star',
    objectEmoji: '✨',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'x1', d: 'M40 40 L160 160', order: 1 },
      { id: 'x2', d: 'M160 40 L40 160', order: 2 }
    ]
  },
  {
    char: 'Y',
    object: 'Yellow Dwarf',
    objectEmoji: '☀️',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'y1', d: 'M60 40 L100 100', order: 1 },
      { id: 'y2', d: 'M140 40 L100 100 L100 160', order: 2 }
    ]
  },
  {
    char: 'Z',
    object: 'Zodiac',
    objectEmoji: '🌌',
    viewBox: '0 0 200 200',
    paths: [
      { id: 'z1', d: 'M40 40 L160 40 L40 160 L160 160', order: 1 }
    ]
  }
];

const WorksheetView: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C48] via-[#1B3B8C] to-[#0B1C48] bg-[url('/space-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-black/80 to-gray-900/80 shadow-lg backdrop-blur-sm border-b border-gray-700">
        <div className="py-4 px-4">
          <div className="flex items-center justify-between">
            {/* Edumodes Logo */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline leading-none">
                <span className={`text-lg sm:text-xl font-black text-[#EC4899]`}>E</span>
                <span className={`text-base sm:text-lg font-black text-sky-500 -ml-0.5`}>d</span>
                <span className={`text-base sm:text-lg font-black text-indigo-500`}>u</span>
                <span className={`text-lg sm:text-xl font-black text-[#EAB308] ml-0.5`}>M</span>
                <span className={`text-base sm:text-lg font-black text-emerald-500 -ml-0.5`}>o</span>
                <span className={`text-base sm:text-lg font-black text-teal-500`}>d</span>
                <span className={`text-base sm:text-lg font-black text-green-500`}>e</span>
                <span className={`text-base sm:text-lg font-black text-teal-500`}>s</span>
              </div>
              <a href="https://www.edumodes.com" target="_blank" className={`text-[${TYPOGRAPHY.base.small}] text-gray-400 hover:text-white leading-tight truncate`}>www.edumodes.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full border border-gray-700">
                <span className="text-yellow-300 text-lg">⭐</span>
                <span className={`text-white font-medium text-[${TYPOGRAPHY.base.regular}]`}>Score: {score}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full border border-gray-700">
                <span className={`text-white font-medium text-[${TYPOGRAPHY.base.regular}]`}>Letter {currentLetterIndex + 1} of {LETTERS.length}</span>
                <span className="text-lg">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-black/50 backdrop-blur-sm shadow-lg border-b border-gray-700">
        <h1 className={`text-[${TYPOGRAPHY.heading.regular}] font-bold text-white text-center py-3 flex items-center justify-center gap-3`}>
          <span>🛸</span>
          <span>Space Letter Adventure</span>
          <span>👨‍🚀</span>
        </h1>
      </div>

      {/* Main Content */}
      <main className="p-4">
        {/* Letter Display */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-4 border-2 border-gray-700">
          <div className="text-center mb-4">
            <span className={`text-[${TYPOGRAPHY.heading.large}] font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}>{currentLetter.char}</span>
          </div>
          <div className="text-center mb-2">
            <span className={`text-[${TYPOGRAPHY.heading.small}] filter drop-shadow-md`}>{currentLetter.objectEmoji}</span>
            <span className={`ml-3 text-gray-200 font-medium text-[${TYPOGRAPHY.base.regular}]`}>{currentLetter.char} is for {currentLetter.object}</span>
          </div>
        </div>

        {/* Tracing Area */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-gray-700">
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
              <circle cx="100" cy="100" r="80" fill="rgba(255, 255, 255, 0.03)" />
              
              {currentLetter.paths.map((path, index) => (
                <g key={path.id}>
                  {/* Background path */}
                  <path
                    d={path.d}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="28"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Active or completed path */}
                  {(index === currentPathIndex || filledPaths.includes(path.id)) && (
                    <path
                      ref={index === currentPathIndex ? pathRef : null}
                      d={path.d}
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="28"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray={pathLengths[path.id] || 1000}
                      strokeDashoffset={
                        index === currentPathIndex
                          ? (pathLengths[path.id] || 1000) * (1 - progress)
                          : 0
                      }
                      className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
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
                  r="12"
                  fill="#3B82F6"
                  className="animate-pulse drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                />
              )}
            </svg>

            {/* Instructions */}
            <div className={`mt-4 text-center text-[${TYPOGRAPHY.base.regular}] text-gray-200 font-medium`}>
              Follow the starlit path with your finger or mouse to trace each part of the letter
            </div>

            {/* Navigation and Try Again Buttons */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={handlePrevLetter}
                disabled={currentLetterIndex === 0}
                className={`w-[${TOUCH_REQUIREMENTS.minTargetSize}px] h-[${TOUCH_REQUIREMENTS.minTargetSize}px] rounded-full bg-black/50 text-gray-200 text-xl font-medium hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border border-gray-700`}
                aria-label="Previous Letter"
              >
                ⬅️
              </button>
              <button
                onClick={handleTryAgain}
                className={`w-[${TOUCH_REQUIREMENTS.minTargetSize}px] h-[${TOUCH_REQUIREMENTS.minTargetSize}px] rounded-full bg-blue-600/50 text-white text-xl font-medium hover:bg-blue-600/70 flex items-center justify-center border border-blue-500/50`}
                aria-label="Try Again"
              >
                🔄
              </button>
              <button
                onClick={handleNextLetter}
                disabled={currentLetterIndex === LETTERS.length - 1}
                className={`w-[${TOUCH_REQUIREMENTS.minTargetSize}px] h-[${TOUCH_REQUIREMENTS.minTargetSize}px] rounded-full bg-black/50 text-gray-200 text-xl font-medium hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border border-gray-700`}
                aria-label="Next Letter"
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
                           `hsl(${210 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${65 + Math.random() * 15}%)`,
                    textShadow: '0 0 8px rgba(59, 130, 246, 0.5)',
                    fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                    fontWeight: 'bold',
                  }}
                >
                  {item.type === 'emoji' ? 
                    [currentLetter.objectEmoji, '🚀', '⭐', '🛸', '👨‍🚀'][Math.floor(Math.random() * 5)] : 
                    currentLetter.char}
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default WorksheetView; 