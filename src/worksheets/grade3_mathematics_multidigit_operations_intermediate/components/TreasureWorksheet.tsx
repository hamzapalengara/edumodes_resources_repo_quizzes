import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import cherryBlossomImage from '../assets/cherry-blossom.jpg';

interface Problem {
  id: number;
  operation: 'addition' | 'subtraction';
  num1: number;
  num2: number;
  imagePosition: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

const TreasureWorksheet: React.FC = () => {
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: 'correct' | 'incorrect' | null }>({});
  const [showCelebration, setShowCelebration] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [revealedPieces, setRevealedPieces] = useState<number[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [currentProblem, setCurrentProblem] = useState(1);

  const problems: Problem[] = [
    {
      id: 1,
      operation: 'addition',
      num1: 347,
      num2: 285,
      imagePosition: 'top-left'
    },
    {
      id: 2,
      operation: 'subtraction',
      num1: 562,
      num2: 378,
      imagePosition: 'top-center'
    },
    {
      id: 3,
      operation: 'addition',
      num1: 456,
      num2: 367,
      imagePosition: 'top-right'
    },
    {
      id: 4,
      operation: 'subtraction',
      num1: 805,
      num2: 467,
      imagePosition: 'bottom-left'
    },
    {
      id: 5,
      operation: 'addition',
      num1: 628,
      num2: 497,
      imagePosition: 'bottom-center'
    },
    {
      id: 6,
      operation: 'subtraction',
      num1: 943,
      num2: 675,
      imagePosition: 'bottom-right'
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

  const handleAnswerChange = (problemId: number, value: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [problemId]: value
    }));
    setFeedback(prev => ({
      ...prev,
      [problemId]: null
    }));
  };

  const calculateCorrectAnswer = (problem: Problem): number => {
    return problem.operation === 'addition' 
      ? problem.num1 + problem.num2 
      : problem.num1 - problem.num2;
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
      setScore(prev => prev + 1);

      if (problemId < problems.length) {
        setCurrentProblem(problemId + 1);
      }

      if (revealedPieces.length + 1 === problems.length) {
        setShowConfetti(true);
        setShowCelebration(true);
        setTimeout(() => setShowConfetti(false), 8000);
      }
    }
  };

  const getOverlayStyle = (position: string) => {
    const baseStyle = "absolute transition-all duration-700";
    
    const positionStyles = {
      'top-left': 'top-0 left-0 w-1/3 h-1/2',
      'top-center': 'top-0 left-1/3 w-1/3 h-1/2',
      'top-right': 'top-0 right-0 w-1/3 h-1/2',
      'bottom-left': 'bottom-0 left-0 w-1/3 h-1/2',
      'bottom-center': 'bottom-0 left-1/3 w-1/3 h-1/2',
      'bottom-right': 'bottom-0 right-0 w-1/3 h-1/2'
    };

    return `${baseStyle} ${positionStyles[position as keyof typeof positionStyles]}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={500}
          recycle={true}
          tweenDuration={8000}
          gravity={0.2}
          colors={[
            '#FFB7C5', // Light pink
            '#FF69B4', // Hot pink
            '#87CEEB', // Sky blue
            '#98FB98', // Pale green
            '#FFC0CB', // Pink
            '#FF1493', // Deep pink
          ]}
        />
      )}
      
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="p-4">
          <ScoreDisplay score={score} totalQuestions={problems.length} />

          <div className="bg-pink-50 rounded-lg p-4 mb-6">
            <h1 className="text-2xl font-bold text-center text-pink-800 mb-4">
              Cherry Blossom Math Adventure 🌸
            </h1>
            
            <div className="text-sm text-pink-700 mb-4">
              Name: _____________________
            </div>

            <div className="bg-pink-100 rounded p-3 text-pink-800">
              <p className="font-medium">✨ Mission:</p>
              <p>Solve each problem to reveal parts of the beautiful spring scene!</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image Container */}
            <div className="w-full md:w-1/2 md:sticky md:top-4">
              <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden bg-pink-50 shadow-lg">
                {/* Full image */}
                <img 
                  src={cherryBlossomImage}
                  alt="Cherry Blossom Scene"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay pieces */}
                <div className="absolute inset-0">
                  {problems.map((problem) => (
                    <div 
                      key={problem.id}
                      className={`${getOverlayStyle(problem.imagePosition)} bg-pink-200/90 backdrop-blur-sm transition-all duration-700 ${
                        revealedPieces.includes(problem.id) ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 flex justify-center gap-2">
                {problems.map((problem) => (
                  <div 
                    key={problem.id}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      revealedPieces.includes(problem.id) ? 'bg-green-500' :
                      problem.id === currentProblem ? 'bg-pink-500' :
                      'bg-pink-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Current Problem */}
            <div className="w-full md:w-1/2">
              {problems
                .filter(problem => problem.id === currentProblem)
                .map((problem) => (
                  <div 
                    key={problem.id}
                    className="bg-white rounded-lg p-6 shadow-lg border-2 border-pink-200"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium text-pink-800">
                          Problem {problem.id} of {problems.length}
                        </span>
                        {feedback[problem.id] === 'correct' && (
                          <span className="text-green-600 font-medium">✓ Piece Revealed!</span>
                        )}
                      </div>

                      <div className="flex flex-col items-end space-y-2 font-mono text-2xl">
                        <div className="w-full flex justify-end">
                          <span className="mr-4">{problem.operation === 'subtraction' ? '-' : '+'}</span>
                          <span>{problem.num1}</span>
                        </div>
                        <div className="w-full flex justify-end">
                          <span className="mr-4"></span>
                          <span>{problem.num2}</span>
                        </div>
                        <div className="w-full flex justify-end">
                          <span className="mr-4"></span>
                          <div className="border-t-2 border-pink-800 pt-1 min-w-[120px]">
                            <input
                              type="number"
                              value={userAnswers[problem.id] || ''}
                              onChange={(e) => handleAnswerChange(problem.id, e.target.value)}
                              className={`w-full text-right bg-transparent focus:outline-none ${
                                feedback[problem.id] === 'correct' ? 'text-green-600' :
                                feedback[problem.id] === 'incorrect' ? 'text-red-600' :
                                'text-pink-800'
                              }`}
                              placeholder="?"
                            />
                          </div>
                        </div>
                      </div>

                      {feedback[problem.id] === 'incorrect' && (
                        <p className="text-red-600 text-center mt-2">Try again!</p>
                      )}

                      <button
                        onClick={() => checkAnswer(problem.id)}
                        className="w-full mt-4 py-3 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 active:bg-pink-700 transition-colors text-lg font-medium"
                      >
                        Check Answer
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {showCelebration && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 text-center max-w-sm">
                <h2 className="text-2xl font-bold text-pink-800 mb-4">
                  🎉 Congratulations! 🌸
                </h2>
                <p className="text-pink-700">
                  You've revealed the entire spring scene! Beautiful work!
                </p>
                <button
                  onClick={() => setShowCelebration(false)}
                  className="mt-4 py-2 px-4 bg-pink-500 text-white rounded-lg"
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
};

export default TreasureWorksheet; 