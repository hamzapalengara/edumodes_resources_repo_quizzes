import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import spaceImage from '../assets/space-scene.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface Problem {
  id: number;
  operation: 'addition' | 'subtraction' | 'multiplication';
  num1: number;
  num2: number;
  imagePosition: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  hint: string;
}

const SpaceWorksheet: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: 'correct' | 'incorrect' | null }>({});
  const [showCelebration, setShowCelebration] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [revealedPieces, setRevealedPieces] = useState<number[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const markCorrectRef = useRef<(() => void) | null>(null);

  const problems: Problem[] = [
    {
      id: 1,
      operation: 'multiplication',
      num1: 24,
      num2: 3,
      imagePosition: 'top-left',
      hint: "Count the stars in each galaxy cluster"
    },
    {
      id: 2,
      operation: 'addition',
      num1: 458,
      num2: 367,
      imagePosition: 'top-center',
      hint: "Add the meteorites"
    },
    {
      id: 3,
      operation: 'subtraction',
      num1: 902,
      num2: 545,
      imagePosition: 'top-right',
      hint: "Calculate remaining space debris"
    },
    {
      id: 4,
      operation: 'multiplication',
      num1: 16,
      num2: 4,
      imagePosition: 'bottom-left',
      hint: "Count total satellites"
    },
    {
      id: 5,
      operation: 'addition',
      num1: 734,
      num2: 289,
      imagePosition: 'bottom-center',
      hint: "Sum up the light years"
    },
    {
      id: 6,
      operation: 'subtraction',
      num1: 856,
      num2: 378,
      imagePosition: 'bottom-right',
      hint: "Find the distance between planets"
    }
  ];

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

  const calculateCorrectAnswer = (problem: Problem): number => {
    switch (problem.operation) {
      case 'addition':
        return problem.num1 + problem.num2;
      case 'subtraction':
        return problem.num1 - problem.num2;
      case 'multiplication':
        return problem.num1 * problem.num2;
      default:
        return 0;
    }
  };

  const checkAnswer = (problemId: number) => {
    const problem = problems.find(p => p.id === problemId);
    if (!problem || !userAnswers[problemId]) return;

    const isCorrect = parseInt(userAnswers[problemId]) === calculateCorrectAnswer(problem);
    
    setFeedback(prev => ({
      ...prev,
      [problemId]: isCorrect ? 'correct' : 'incorrect'
    }));

    if (isCorrect && !revealedPieces.includes(problemId)) {
      setRevealedPieces(prev => [...prev, problemId]);
      
      if (markCorrectRef.current) {
        markCorrectRef.current();
      }

      if (revealedPieces.length + 1 === problems.length) {
        setShowConfetti(true);
        setShowCelebration(true);
        setTimeout(() => setShowConfetti(false), 8000);
      }
    }
  };

  const getOperationSymbol = (operation: string): string => {
    switch (operation) {
      case 'addition': return '+';
      case 'subtraction': return '-';
      case 'multiplication': return '×';
      default: return '';
    }
  };

  const getOverlayStyle = (position: string) => {
    const baseStyle = "absolute transition-all duration-700 flex flex-col items-center justify-center";
    
    const positionStyles = {
      'top-left': 'top-0 left-0 w-1/3 h-1/2 p-1',
      'top-center': 'top-0 left-1/3 w-1/3 h-1/2 p-1',
      'top-right': 'top-0 right-0 w-1/3 h-1/2 p-1',
      'bottom-left': 'bottom-0 left-0 w-1/3 h-1/2 p-1',
      'bottom-center': 'bottom-0 left-1/3 w-1/3 h-1/2 p-1',
      'bottom-right': 'bottom-0 right-0 w-1/3 h-1/2 p-1'
    };

    return `${baseStyle} ${positionStyles[position as keyof typeof positionStyles]}`;
  };

  return (
    <WorksheetTracker 
      totalQuestions={problems.length}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Space Math Adventure Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        markCorrectRef.current = markCorrect;
        
        return (
          <div className="min-h-screen bg-gray-900">
            {showConfetti && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={500}
                recycle={true}
                tweenDuration={8000}
                colors={['#FFD700', '#FFF', '#87CEEB', '#4169E1', '#9370DB']}
              />
            )}
            
            <WorksheetHeader />
            
            <TouchContainer>
              <div className="px-0 md:px-4">
                <div className="w-full mb-4">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                <div className="bg-gray-800 rounded-lg p-2 md:p-4 mb-4 md:mb-6 text-white">
                  <h1 className="text-xl md:text-2xl font-bold text-center mb-3">
                    Space Math Adventure 🚀
                  </h1>

                  <div className="bg-gray-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Solve the space math problems to reveal the cosmic scene!</p>
                  </div>
                </div>

                <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden bg-gray-800 shadow-lg">
                  {/* Full image */}
                  <img 
                    src={spaceImage}
                    alt="Space Scene"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Overlay pieces with problems */}
                  <div className="absolute inset-0">
                    {problems.map((problem) => (
                      <div 
                        key={problem.id}
                        className={`${getOverlayStyle(problem.imagePosition)} bg-gray-900/90 backdrop-blur-sm ${
                          revealedPieces.includes(problem.id) ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        }`}
                      >
                        {!revealedPieces.includes(problem.id) && (
                          <div className="w-full h-full flex flex-col items-center justify-center text-white">
                            <div className="flex flex-col items-end font-mono text-lg md:text-2xl lg:text-3xl w-full">
                              <div className="flex justify-end w-full">
                                <span>{problem.num1}</span>
                              </div>
                              <div className="flex justify-end w-full">
                                <span className="mr-1 text-blue-400">{getOperationSymbol(problem.operation)}</span>
                                <span>{problem.num2}</span>
                              </div>
                              <div className="w-full flex justify-end">
                                <div className="border-t-2 border-blue-400 pt-0.5">
                                  <input
                                    type="number"
                                    value={userAnswers[problem.id] || ''}
                                    onChange={(e) => setUserAnswers(prev => ({
                                      ...prev,
                                      [problem.id]: e.target.value
                                    }))}
                                    className="w-[4.5em] text-right bg-transparent border-none focus:outline-none text-white text-lg md:text-2xl lg:text-3xl"
                                    placeholder="?"
                                  />
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => checkAnswer(problem.id)}
                              className="mt-3 px-3 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-600 transition-colors"
                            >
                              Check
                            </button>
                            
                            {feedback[problem.id] === 'incorrect' && (
                              <p className="text-red-400 mt-1 text-[10px] md:text-xs">
                                Try again!
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {showCelebration && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 text-white rounded-lg p-4 md:p-6 text-center max-w-sm">
                      <h2 className="text-xl md:text-2xl font-bold mb-4">
                        🎉 Mission Accomplished! 🚀
                      </h2>
                      <p className="text-blue-300">
                        You've uncovered the entire cosmic scene! Stellar work!
                      </p>
                      <button
                        onClick={() => setShowCelebration(false)}
                        className="mt-4 py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-600"
                      >
                        Close
                      </button>
                    </div>
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

export default SpaceWorksheet; 