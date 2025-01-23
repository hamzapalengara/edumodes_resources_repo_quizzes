import React, { useState, useEffect, useCallback, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import Confetti from 'react-confetti';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

// Pattern types and their visual representations
const shapes = {
  circle: {
    icon: '⭕',
    name: 'Circle',
    color: 'text-red-500'
  },
  square: {
    icon: '⬜',
    name: 'Square',
    color: 'text-blue-500'
  },
  triangle: {
    icon: '🔺',
    name: 'Triangle',
    color: 'text-yellow-500'
  },
  star: {
    icon: '⭐',
    name: 'Star',
    color: 'text-purple-500'
  },
  heart: {
    icon: '❤️',
    name: 'Heart',
    color: 'text-pink-500'
  }
} as const;

type ShapeKey = keyof typeof shapes;

// Pattern interface
interface Pattern {
  sequence: ShapeKey[];
  missingIndex: number;
  options: ShapeKey[];
}

// Voice feedback messages
const voiceFeedback = {
  correct: [
    "Great job! That's the right pattern!",
    "Perfect! You found the right shape!",
    "Amazing! You're getting good at patterns!",
    "Wonderful! Keep going!",
    "You're a pattern master!"
  ],
  incorrect: [
    "Not quite, try again!",
    "Look carefully at the pattern",
    "You can do it! Try another shape"
  ],
  levelComplete: [
    "Fantastic! You've completed all the patterns!",
    "Amazing work! You're a pattern expert!"
  ]
};

// Generate patterns with increasing difficulty
const generatePatterns = (): Pattern[] => {
  const patterns: Pattern[] = [
    // Simple alternating patterns (2 shapes)
    {
      sequence: ['circle', 'star', 'circle', 'star'],
      missingIndex: 3,
      options: ['star', 'circle', 'heart']
    },
    {
      sequence: ['heart', 'square', 'heart', 'square'],
      missingIndex: 2,
      options: ['triangle', 'heart', 'circle']
    },
    // Simple repeating patterns (same shape)
    {
      sequence: ['star', 'star', 'star', 'star'],
      missingIndex: 3,
      options: ['star', 'circle', 'heart']
    },
    // Three-shape patterns
    {
      sequence: ['circle', 'triangle', 'heart', 'circle', 'triangle', 'heart'],
      missingIndex: 4,
      options: ['triangle', 'heart', 'circle']
    },
    // Simple growing patterns
    {
      sequence: ['circle', 'circle', 'circle', 'circle', 'circle'],
      missingIndex: 4,
      options: ['square', 'circle', 'heart']
    },
    // Alternating pairs
    {
      sequence: ['star', 'star', 'heart', 'heart', 'star', 'star'],
      missingIndex: 5,
      options: ['heart', 'star', 'circle']
    },
    // Complex three-shape patterns
    {
      sequence: ['square', 'heart', 'triangle', 'square', 'heart', 'triangle'],
      missingIndex: 4,
      options: ['heart', 'circle', 'square']
    },
    // Four-shape patterns
    {
      sequence: ['circle', 'star', 'heart', 'triangle', 'circle', 'star', 'heart', 'triangle'],
      missingIndex: 6,
      options: ['heart', 'square', 'circle']
    },
    // Alternating with repetition
    {
      sequence: ['heart', 'heart', 'star', 'heart', 'heart', 'star'],
      missingIndex: 5,
      options: ['star', 'heart', 'circle']
    },
    // Final challenge
    {
      sequence: ['star', 'circle', 'circle', 'star', 'circle', 'circle'],
      missingIndex: 5,
      options: ['star', 'circle', 'heart']
    }
  ];
  return patterns;
};

const PatternWorksheet: React.FC = () => {
  const [patterns] = useState(generatePatterns());
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [selectedShape, setSelectedShape] = useState<ShapeKey | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const markCorrectRef = useRef<(() => void) | null>(null);

  // Speech synthesis setup
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.2;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize with welcome message
  useEffect(() => {
    speak("Welcome! Let's learn about patterns! Look at the shapes and find what comes next!");
  }, [speak]);

  // Show feedback message
  const showFeedback = useCallback((message: string, duration = 2000) => {
    setFeedbackMessage(message);
    setTimeout(() => setFeedbackMessage(''), duration);
  }, []);

  // Handle shape selection
  const handleShapeSelect = (selectedShape: ShapeKey) => {
    if (isAnimating) return; // Prevent multiple selections during animation

    setSelectedShape(selectedShape);
    setIsAnimating(true);

    const currentPattern = patterns[currentPatternIndex];
    const correct = selectedShape === currentPattern.sequence[currentPattern.missingIndex];
    setIsCorrect(correct);

    // Wait for the animation to complete before showing feedback
    setTimeout(() => {
      if (correct) {
        const message = voiceFeedback.correct[Math.floor(Math.random() * voiceFeedback.correct.length)];
        speak(message);
        showFeedback("✨ Correct! ✨");
        
        // Use WorksheetTracker's markCorrect
        if (markCorrectRef.current) {
          markCorrectRef.current();
        }

        // Move to next pattern or complete
        if (currentPatternIndex < patterns.length - 1) {
          setTimeout(() => {
            setCurrentPatternIndex(currentPatternIndex + 1);
            setSelectedShape(null);
            setIsAnimating(false);
            setIsCorrect(false);
            speak("Great! Here's the next pattern!");
          }, 1500);
        } else {
          setIsComplete(true);
          const completionMessage = voiceFeedback.levelComplete[
            Math.floor(Math.random() * voiceFeedback.levelComplete.length)
          ];
          speak(completionMessage);
        }
      } else {
        const message = voiceFeedback.incorrect[Math.floor(Math.random() * voiceFeedback.incorrect.length)];
        speak(message);
        showFeedback("Try again! 💫");
        setTimeout(() => {
          setSelectedShape(null);
          setIsAnimating(false);
          setIsCorrect(false);
        }, 800);
      }
    }, 600);
  };

  const currentPattern = patterns[currentPatternIndex];

  return (
    <WorksheetTracker 
      totalQuestions={patterns.length}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Pattern Adventure Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        // Store markCorrect function in ref for use in callbacks
        markCorrectRef.current = markCorrect;
        
        return (
          <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-x-hidden">
            {isComplete && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={300}
                recycle={false}
                colors={['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C']}
              />
            )}

            <WorksheetHeader />
            
            <TouchContainer>
              <div className="flex flex-col items-center px-2 sm:px-4 w-full max-w-3xl mx-auto">
                {/* Progress Section */}
                <div className="w-full bg-white p-3 sm:p-6 rounded-2xl shadow-lg mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl">🎯</span>
                      <div className="text-blue-800 text-lg sm:text-xl font-bold">
                        Pattern {currentPatternIndex + 1} of {patterns.length}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⭐</span>
                      <div className="text-blue-800 text-lg font-bold">
                        Score: {score} / {maxScore}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full bg-blue-100 rounded-full h-4 sm:h-5 overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-full"
                      style={{ width: `${(currentPatternIndex / patterns.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Title Section */}
                <div className="w-full bg-white p-3 sm:p-6 rounded-2xl shadow-lg mb-6 sm:mb-8">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
                    🎨 Pattern Magic 🎨
                  </h1>
                  <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 sm:gap-3 bg-blue-50 p-2 sm:p-3 rounded-xl">
                    <span className="text-xl sm:text-2xl">👀</span>
                    <p className="text-blue-800 text-base sm:text-lg font-medium">
                      What shape comes next?
                    </p>
                  </div>
                </div>

                {/* Pattern Display Section */}
                <div className="w-full bg-white p-3 sm:p-6 rounded-2xl shadow-lg mb-6 sm:mb-8">
                  <div className="text-blue-600 font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="text-lg sm:text-xl">🔍</span>
                    <span>Current Pattern:</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap bg-blue-50 p-2 sm:p-4 rounded-xl">
                    {currentPattern.sequence.map((shape, index) => (
                      <div
                        key={index}
                        className={`
                          w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
                          flex items-center justify-center
                          text-2xl sm:text-3xl md:text-4xl
                          rounded-xl
                          transition-all duration-500
                          ${index === currentPattern.missingIndex
                            ? 'relative bg-yellow-50 border-2 sm:border-3 border-dashed border-yellow-400 overflow-hidden'
                            : 'bg-white shadow-lg hover:shadow-xl'
                          }
                        `}
                      >
                        {index === currentPattern.missingIndex ? (
                          <>
                            <div className="absolute inset-0 flex items-center justify-center">
                              {selectedShape ? shapes[selectedShape].icon : '❓'}
                            </div>
                            <div 
                              className={`
                                absolute inset-0 flex items-center justify-center
                                transition-transform duration-500 ease-out
                                ${selectedShape ? 'translate-y-0' : 'translate-y-full'}
                                ${isCorrect ? 'bg-green-50' : isAnimating ? 'bg-red-50' : 'bg-yellow-50'}
                              `}
                            >
                              {selectedShape && shapes[selectedShape].icon}
                            </div>
                          </>
                        ) : (
                          shapes[shape].icon
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feedback Message */}
                {feedbackMessage && (
                  <div className="w-full bg-white p-3 sm:p-4 rounded-2xl shadow-lg mb-6 sm:mb-8 text-center">
                    <div className="text-lg sm:text-xl font-bold text-green-600 animate-bounce">
                      {feedbackMessage}
                    </div>
                  </div>
                )}

                {/* Shape Selection Section */}
                <div className="w-full bg-white p-3 sm:p-6 rounded-2xl shadow-lg mb-6 sm:mb-8">
                  <div className="text-blue-600 font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="text-lg sm:text-xl">🎯</span>
                    <span>Choose the Next Shape:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-sm mx-auto">
                    {currentPattern.options.map((shape, index) => (
                      <button
                        key={index}
                        onClick={() => handleShapeSelect(shape)}
                        className={`
                          aspect-square
                          flex items-center justify-center
                          text-3xl sm:text-4xl md:text-5xl
                          bg-gradient-to-b from-white to-blue-50
                          rounded-xl sm:rounded-2xl
                          shadow-lg
                          transform
                          transition-all duration-300
                          hover:shadow-xl hover:scale-105
                          active:scale-95
                          disabled:opacity-50
                          disabled:cursor-not-allowed
                          border-2 sm:border-4
                          ${selectedShape === shape 
                            ? isCorrect 
                              ? 'border-green-400 bg-green-50' 
                              : 'border-red-400 bg-red-50'
                            : 'border-transparent hover:border-blue-200'
                          }
                          p-2 sm:p-4
                        `}
                        disabled={isComplete || isAnimating}
                      >
                        {shapes[shape].icon}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Completion Message */}
                {isComplete && (
                  <div className="w-full bg-gradient-to-r from-green-50 to-blue-50 p-4 sm:p-8 rounded-2xl shadow-lg mb-6 sm:mb-8 animate-fadeIn">
                    <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 animate-bounce text-center">
                      🏆
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-3 sm:mb-4 text-center">
                      🎉 Amazing Job! 🎉
                    </h2>
                    <p className="text-lg sm:text-xl text-green-700 mb-4 sm:mb-6 text-center">
                      You're a Pattern Master!
                      <br />
                      Final Score: {score} points
                    </p>
                    <button
                      onClick={() => window.location.reload()}
                      className="mx-auto block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full
                               text-base sm:text-lg font-bold
                               hover:from-green-600 hover:to-blue-600
                               active:scale-95 transition-all
                               shadow-lg hover:shadow-xl
                               flex items-center justify-center gap-2 sm:gap-3"
                    >
                      <span>Play Again!</span>
                      <span className="text-xl sm:text-2xl">🎮</span>
                    </button>
                  </div>
                )}
              </div>
            </TouchContainer>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default PatternWorksheet; 