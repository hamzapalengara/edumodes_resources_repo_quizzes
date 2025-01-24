import React, { useState, useCallback } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import confetti from 'canvas-confetti/dist/confetti.module.mjs';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface ColorButton {
  name: string;
  color: string;
  bgClass: string;
  borderClass: string;
  hoverClass: string;
  order: number;
}

const colors: ColorButton[] = [
  { 
    name: 'Red', 
    color: '#FF0000', 
    bgClass: 'bg-red-500', 
    borderClass: 'border-red-600',
    hoverClass: 'hover:bg-red-600',
    order: 1
  },
  { 
    name: 'Orange', 
    color: '#FFA500', 
    bgClass: 'bg-orange-500', 
    borderClass: 'border-orange-600',
    hoverClass: 'hover:bg-orange-600',
    order: 2
  },
  { 
    name: 'Yellow', 
    color: '#FFD700', 
    bgClass: 'bg-yellow-400', 
    borderClass: 'border-yellow-500',
    hoverClass: 'hover:bg-yellow-500',
    order: 3
  },
  { 
    name: 'Green', 
    color: '#4CAF50', 
    bgClass: 'bg-green-500', 
    borderClass: 'border-green-600',
    hoverClass: 'hover:bg-green-600',
    order: 4
  },
  { 
    name: 'Blue', 
    color: '#2196F3', 
    bgClass: 'bg-blue-500', 
    borderClass: 'border-blue-600',
    hoverClass: 'hover:bg-blue-600',
    order: 5
  },
  { 
    name: 'Indigo', 
    color: '#3F51B5', 
    bgClass: 'bg-indigo-500', 
    borderClass: 'border-indigo-600',
    hoverClass: 'hover:bg-indigo-600',
    order: 6
  },
  { 
    name: 'Violet', 
    color: '#9C27B0', 
    bgClass: 'bg-purple-500', 
    borderClass: 'border-purple-600',
    hoverClass: 'hover:bg-purple-600',
    order: 7
  },
];

interface RainbowArc {
  id: number;
  color: string;
  isColored: boolean;
  name: string;
}

interface ColorPattern {
  sequence: string[];
  missing: number;
  hint: string;
}

const RainbowColoringWorksheet: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [rainbowArcs, setRainbowArcs] = useState<RainbowArc[]>([
    { id: 0, color: '', isColored: false, name: 'Red' },
    { id: 1, color: '', isColored: false, name: 'Orange' },
    { id: 2, color: '', isColored: false, name: 'Yellow' },
    { id: 3, color: '', isColored: false, name: 'Green' },
    { id: 4, color: '', isColored: false, name: 'Blue' },
    { id: 5, color: '', isColored: false, name: 'Indigo' },
    { id: 6, color: '', isColored: false, name: 'Violet' },
  ]);
  const [coloredParts, setColoredParts] = useState<Record<string, string>>({});
  const [currentPattern, setCurrentPattern] = useState<ColorPattern>({
    sequence: ['Red', 'Yellow', 'Red', '', 'Red', 'Yellow'],
    missing: 3,
    hint: 'Red and Yellow take turns!'
  });
  const [patterns] = useState<ColorPattern[]>([
    // Pattern 1: Simple alternating (Red-Yellow)
    { 
      sequence: ['Red', 'Yellow', 'Red', '', 'Red', 'Yellow'], 
      missing: 3,
      hint: 'Red and Yellow take turns! Red, Yellow, Red...'
    },
    // Pattern 2: Simple repeating trio (Blue-Blue-Blue)
    { 
      sequence: ['Blue', 'Blue', '', 'Blue', 'Blue', ''], 
      missing: 2,
      hint: 'Every box should be Blue!'
    },
    // Pattern 3: Simple alternating (Green-Yellow)
    { 
      sequence: ['Green', 'Yellow', 'Green', '', 'Green', ''], 
      missing: 2,
      hint: 'Green and Yellow take turns!'
    },
    // Pattern 4: All the same color (Red)
    { 
      sequence: ['Red', 'Red', '', 'Red', '', 'Red'], 
      missing: 2,
      hint: 'Make them all Red!'
    }
  ]);
  const [patternIndex, setPatternIndex] = useState(0);
  const [patternComplete, setPatternComplete] = useState(false);

  const speakColor = useCallback((colorName: string) => {
    const utterance = new SpeechSynthesisUtterance(colorName);
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  }, []);

  const triggerConfetti = useCallback((color: string) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
      colors: [color],
    });
  }, []);

  const handleColorSelect = useCallback((color: ColorButton) => {
    if (color.order !== currentStep) {
      const utterance = new SpeechSynthesisUtterance(`Let's add ${colors[currentStep - 1].name} first!`);
      window.speechSynthesis.speak(utterance);
      return;
    }
    setSelectedColor(color.name);
    speakColor(color.name);
  }, [speakColor, currentStep]);

  const handleDrawingClick = useCallback((partId: string) => {
    if (!selectedColor) {
      const utterance = new SpeechSynthesisUtterance("Pick a color first!");
      window.speechSynthesis.speak(utterance);
      return;
    }

    const color = colors.find(c => c.name === selectedColor);
    if (!color) return;

    setColoredParts(prev => ({
      ...prev,
      [partId]: color.color
    }));

    triggerConfetti(color.color);
    const utterance = new SpeechSynthesisUtterance(`Beautiful ${color.name} color!`);
    window.speechSynthesis.speak(utterance);
  }, [selectedColor, triggerConfetti]);

  // Calculate total questions based on rainbow colors and pattern blanks
  const totalPatternBlanks = patterns.reduce((total, pattern) => 
    total + pattern.sequence.filter(color => color === '').length, 0);
  
  return (
    <WorksheetTracker
      totalQuestions={colors.length + totalPatternBlanks} // Rainbow arcs + individual pattern blanks
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Rainbow Coloring Worksheet Summary:', summary);
      }}
    >
      {({ score, markCorrect, markIncorrect, markAttempted }) => {
        const handleArcClick = useCallback((arcIndex: number) => {
          if (!selectedColor) return;
          if (arcIndex !== currentStep - 1) {
            const utterance = new SpeechSynthesisUtterance(`Let's color the arcs in order, starting from the top!`);
            window.speechSynthesis.speak(utterance);
            return;
          }

          markAttempted();
          const color = colors.find(c => c.name === selectedColor);
          if (!color) return;

          if (color.order === currentStep) {
            markCorrect();
            setRainbowArcs(prev => {
              const newArcs = [...prev];
              newArcs[arcIndex] = {
                ...newArcs[arcIndex],
                color: color.color,
                isColored: true
              };
              return newArcs;
            });

            triggerConfetti(color.color);
            setCurrentStep(prev => prev + 1);
            setSelectedColor(null);
            
            // Check if rainbow is complete
            if (currentStep === colors.length) {
              setTimeout(() => {
                const completionUtterance = new SpeechSynthesisUtterance("Wonderful! You've completed the rainbow! Now let's discover more colors by mixing!");
                window.speechSynthesis.speak(completionUtterance);
                
                // Celebrate with all colors
                colors.forEach((color, index) => {
                  setTimeout(() => {
                    triggerConfetti(color.color);
                  }, index * 300);
                });
              }, 500);
            } else {
              setTimeout(() => {
                const nextColor = colors[currentStep];
                const nextUtterance = new SpeechSynthesisUtterance(`Now let's add ${nextColor.name}!`);
                window.speechSynthesis.speak(nextUtterance);
              }, 1000);
            }
          } else {
            markIncorrect();
            const utterance = new SpeechSynthesisUtterance(`Let's add ${colors[currentStep - 1].name} first!`);
            window.speechSynthesis.speak(utterance);
          }
        }, [selectedColor, currentStep, triggerConfetti, markAttempted, markCorrect, markIncorrect]);

        const handlePatternClick = useCallback((index: number) => {
          if (!selectedColor || currentPattern.sequence[index] !== '') return;

          markAttempted();
          const color = colors.find(c => c.name === selectedColor);
          if (!color) return;

          // Determine the expected color based on the pattern type
          let expectedColor = '';
          
          switch (patternIndex) {
            case 0: // Red-Yellow alternating
              expectedColor = index % 2 === 0 ? 'Red' : 'Yellow';
              break;
            case 1: // All Blue
              expectedColor = 'Blue';
              break;
            case 2: // Green-Yellow alternating
              expectedColor = index % 2 === 0 ? 'Green' : 'Yellow';
              break;
            case 3: // All Red
              expectedColor = 'Red';
              break;
            default:
              return;
          }

          if (color.name === expectedColor) {
            markCorrect();
            setCurrentPattern(prev => {
              const newSequence = [...prev.sequence];
              newSequence[index] = color.name;
              return {
                ...prev,
                sequence: newSequence,
                missing: prev.missing - 1
              };
            });

            triggerConfetti(color.color);
            const utterance = new SpeechSynthesisUtterance("Perfect match!");
            window.speechSynthesis.speak(utterance);

            // Check if pattern is complete
            const remainingBlanks = currentPattern.sequence.filter(c => c === '').length - 1;
            if (remainingBlanks === 0) {
              setTimeout(() => {
                if (patternIndex < patterns.length - 1) {
                  setPatternIndex(prev => prev + 1);
                  setCurrentPattern(patterns[patternIndex + 1]);
                  const nextUtterance = new SpeechSynthesisUtterance("Great job! Let's try another pattern!");
                  window.speechSynthesis.speak(nextUtterance);
                } else {
                  setPatternComplete(true);
                  const completionUtterance = new SpeechSynthesisUtterance("Amazing! You've completed all the patterns!");
                  window.speechSynthesis.speak(completionUtterance);
                }
              }, 1000);
            }
          } else {
            markIncorrect();
            const utterance = new SpeechSynthesisUtterance("Try again! Look at the pattern carefully.");
            window.speechSynthesis.speak(utterance);
          }
        }, [selectedColor, currentPattern, patternIndex, patterns, triggerConfetti, markAttempted, markCorrect, markIncorrect]);

        return (
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
            <WorksheetHeader />
            <div className="container mx-auto px-4 py-8">
              {/* Score Display - Update display to show proper max score */}
              <div className="mb-8">
                <ScoreDisplay 
                  score={score/10} 
                  totalQuestions={colors.length + totalPatternBlanks}
                />
              </div>

              {/* Progress information for patterns */}
              <div className="bg-white rounded-xl p-4 mb-6 shadow-md text-center">
                <h3 className="text-xl font-bold text-blue-800">
                  {patternComplete ? (
                    <span className="text-green-600">All Patterns Complete! 🎉</span>
                  ) : (
                    <>
                      Pattern {patternIndex + 1} of {patterns.length}
                      <div className="text-sm text-gray-600 mt-1">
                        Fill in {currentPattern.missing} blank{currentPattern.missing > 1 ? 's' : ''}
                      </div>
                    </>
                  )}
                </h3>
              </div>

              {/* Activity 1: Rainbow */}
              <div className="mb-12">
                <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">
                    1. Build Your Rainbow! 🌈
                </h2>
                <ul className="text-lg text-blue-700 space-y-2">
                    <li>• Start from the top of the rainbow 🎯</li>
                    <li>• Pick the correct color when prompted 🎨</li>
                    <li>• Click the arc to color it 🖌️</li>
                </ul>
              </div>

                {/* Current Step Indicator */}
                <div className="bg-white rounded-xl p-4 mb-6 shadow-md text-center">
                  <h3 className="text-xl font-bold text-blue-800">
                    {currentStep <= colors.length ? (
                      <>Now adding: <span className="text-2xl" style={{ color: colors[currentStep - 1].color }}>
                        {colors[currentStep - 1].name}
                      </span></>
                    ) : (
                      <span className="text-green-600">Rainbow Complete! 🎉</span>
                    )}
                  </h3>
                </div>

              {/* Color Palette */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorSelect(color)}
                    className={`
                        w-14 h-14 rounded-full
                        ${color.bgClass}
                        ${selectedColor === color.name ? `ring-4 ${color.borderClass} scale-110` : ''}
                        ${color.order === currentStep ? 'animate-bounce' : 'opacity-60'}
                        ${color.hoverClass}
                        transform transition-all duration-300
                        shadow-lg
                      `}
                      aria-label={`Select ${color.name} color`}
                      disabled={color.order !== currentStep}
                    />
                  ))}
                </div>

                {/* Rainbow Drawing Area */}
                <div className="relative w-full h-[400px] bg-white rounded-xl shadow-lg p-6">
                  <div className="absolute inset-0">
                    {/* Guide Text for First Time */}
                    {currentStep === 1 && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-blue-600 font-bold text-xl animate-bounce z-10">
                        Start here! ↓
                      </div>
                    )}

                    {/* Rainbow Arcs Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {rainbowArcs.map((arc, index) => {
                        const isCurrentArc = index === currentStep - 1;
                        
                        return (
                          <div 
                            key={arc.id}
                            onClick={() => handleArcClick(index)}
                            className={`
                              absolute
                              cursor-pointer
                              transition-all duration-300
                              ${isCurrentArc ? 'z-10' : ''}
                            `}
                            style={{
                              width: `${85 - index * 10}%`,
                              height: `${400 - index * 40}px`,
                              bottom: '0',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              borderRadius: '300px 300px 0 0',
                              border: '8px solid #e5e7eb',
                              borderBottom: 'none',
                              backgroundColor: 'white',
                              overflow: 'hidden'
                            }}
                          >
                            {/* Colored Arc Layer */}
                            {arc.isColored && (
                              <div
                                className="absolute inset-0"
                                style={{
                                  backgroundColor: arc.color,
                                  boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)'
                                }}
                              />
                            )}

                            {/* Current Arc Indicator */}
                            {isCurrentArc && !arc.isColored && (
                              <>
                                {/* Pulsing Arrow */}
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                  <div className="animate-bounce bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl">
                                    ↓
                                  </div>
                                </div>
                                
                                {/* Color Name */}
                                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                                  <span className="bg-white px-4 py-2 rounded-full shadow-md text-lg font-bold" style={{ color: colors[index].color }}>
                                    Add {arc.name}
                                  </span>
                                </div>

                                {/* Highlight Effect */}
                                <div 
                                  className="absolute inset-0"
                                  style={{
                                    background: `linear-gradient(90deg, 
                                      transparent 0%,
                                      ${colors[index].color}22 50%,
                                      transparent 100%
                                    )`,
                                    animation: 'shimmer 2s infinite'
                                  }}
                                />
                              </>
                            )}
                          </div>
                        );
                      })}

                      {/* Ground */}
                      <div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                        style={{
                          width: '95%',
                          height: '20px',
                          background: 'linear-gradient(to bottom, #e5e7eb 0%, transparent 100%)',
                          borderRadius: '50%'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity 2: Fun Drawing */}
              <div className="mb-12">
                <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-blue-800 mb-3">
                    2. Color the Happy Sun! ☀️
                  </h2>
                  <ul className="text-lg text-blue-700 space-y-2">
                    <li>• Pick any color you like 🎨</li>
                    <li>• Click on different parts to color them 🖌️</li>
                    <li>• Make it bright and cheerful! ✨</li>
                  </ul>
                </div>

                {/* Color Palette for Drawing */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`
                        w-14 h-14 rounded-full
                      ${color.bgClass}
                      ${selectedColor === color.name ? `ring-4 ${color.borderClass} scale-110` : ''}
                      ${color.hoverClass}
                      transform transition-all duration-300
                      shadow-lg
                    `}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>

                {/* Drawing Area */}
                <div className="relative w-full h-[400px] bg-white rounded-xl shadow-lg p-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg 
                      viewBox="0 0 200 200" 
                      className="w-full h-full max-w-[300px]"
                    >
                      {/* Sun Circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="40"
                        stroke="#e5e7eb"
                        strokeWidth="4"
                        fill={coloredParts['sun-center'] || 'white'}
                        className="cursor-pointer transition-colors duration-300 hover:opacity-90"
                        onClick={() => handleDrawingClick('sun-center')}
                      />

                      {/* Sun Rays */}
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30) * Math.PI / 180;
                        const x1 = 100 + Math.cos(angle) * 50;
                        const y1 = 100 + Math.sin(angle) * 50;
                        const x2 = 100 + Math.cos(angle) * 70;
                        const y2 = 100 + Math.sin(angle) * 70;
                        
                        return (
                          <line
                            key={i}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke={coloredParts[`ray-${i}`] || '#e5e7eb'}
                            strokeWidth="4"
                            strokeLinecap="round"
                            className="cursor-pointer transition-colors duration-300 hover:opacity-90"
                            onClick={() => handleDrawingClick(`ray-${i}`)}
                          />
                        );
                      })}

                      {/* Happy Face */}
                      <path
                        d="M85,95 Q100,110 115,95"
                        fill="none"
                        stroke={coloredParts['smile'] || '#e5e7eb'}
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="cursor-pointer transition-colors duration-300 hover:opacity-90"
                        onClick={() => handleDrawingClick('smile')}
                      />
                      <circle
                        cx="85"
                        cy="85"
                        r="5"
                        fill={coloredParts['eye-left'] || '#e5e7eb'}
                        className="cursor-pointer transition-colors duration-300 hover:opacity-90"
                        onClick={() => handleDrawingClick('eye-left')}
                      />
                      <circle
                        cx="115"
                        cy="85"
                        r="5"
                        fill={coloredParts['eye-right'] || '#e5e7eb'}
                        className="cursor-pointer transition-colors duration-300 hover:opacity-90"
                        onClick={() => handleDrawingClick('eye-right')}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Activity 3: Color Patterns */}
              <div className="mb-12">
                <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-blue-800 mb-3">
                    3. Complete the Color Patterns! 🎯
                  </h2>
                  <ul className="text-lg text-blue-700 space-y-2">
                    <li>• Look at the pattern carefully</li>
                    <li>• Pick the right color to fill the empty spots 🎨</li>
                    <li>• Complete the sequence! ✨</li>
                  </ul>
                </div>

                {/* Pattern Progress */}
                <div className="bg-white rounded-xl p-4 mb-6 shadow-md text-center">
                  <h3 className="text-xl font-bold text-blue-800">
                    {patternComplete ? (
                      <span className="text-green-600">All Patterns Complete! 🎉</span>
                    ) : (
                      <>Pattern {patternIndex + 1} of {patterns.length}</>
                    )}
                  </h3>
                </div>

                {/* Color Palette */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`
                        w-14 h-14 rounded-full
                        ${color.bgClass}
                        ${selectedColor === color.name ? `ring-4 ${color.borderClass} scale-110` : ''}
                        ${color.hoverClass}
                        transform transition-all duration-300
                        shadow-lg
                      `}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>

                {/* Pattern Area */}
                <div className="relative w-full bg-white rounded-xl shadow-lg p-6">
                  {/* Pattern Hint */}
                  <div className="text-center mb-4 text-blue-600 font-bold">
                    Hint: {currentPattern.hint}
                  </div>

                  <div className="flex justify-center items-center gap-4 flex-wrap">
                    {currentPattern.sequence.map((color, index) => (
                      <div
                        key={index}
                        onClick={() => handlePatternClick(index)}
                        className={`
                          w-20 h-20 rounded-lg
                          ${color ? colors.find(c => c.name === color)?.bgClass : 'bg-gray-100'}
                          ${!color ? 'cursor-pointer animate-pulse' : ''}
                          transition-all duration-300
                          shadow-md
                          flex items-center justify-center
                          border-4 border-gray-200
                          relative
                        `}
                      >
                        {!color ? (
                          <span className="text-3xl text-gray-400">?</span>
                        ) : (
                          <span className="absolute -bottom-8 text-sm font-medium text-gray-600">
                            {color}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Pattern Description */}
                  <div className="text-center mt-8 text-gray-600">
                    {patternIndex === 0 && "Simple pattern: Colors alternate back and forth"}
                    {patternIndex === 1 && "Three-color pattern: Blue, Green, Blue repeats"}
                    {patternIndex === 2 && "Rainbow order: Fill in the missing rainbow color"}
                    {patternIndex === 3 && "Double pattern: Each color appears twice in a row"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default RainbowColoringWorksheet; 