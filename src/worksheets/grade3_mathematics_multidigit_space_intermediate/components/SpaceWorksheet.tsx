import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import spaceImage from '../assets/space-scene.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface MathTile {
  id: number;
  value: string;
  type: 'question' | 'answer';
  position: number;
  operation: 'addition' | 'subtraction' | 'multiplication';
  num1: number;
  num2: number;
}

const SpaceWorksheet: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<MathTile | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  const calculateAnswer = (operation: 'addition' | 'subtraction' | 'multiplication', num1: number, num2: number): number => {
    switch (operation) {
      case 'addition': return num1 + num2;
      case 'subtraction': return num1 - num2;
      case 'multiplication': return num1 * num2;
      default: return 0;
    }
  };

  const getQuestionText = (operation: 'addition' | 'subtraction' | 'multiplication', num1: number, num2: number): string => {
    const symbol = operation === 'addition' ? '+' : operation === 'subtraction' ? '-' : '×';
    return `${num1} ${symbol} ${num2}`;
  };

  // Create initial math problems and shuffle them
  const createShuffledTiles = () => {
    const problems: { id: number; operation: 'addition' | 'subtraction' | 'multiplication'; num1: number; num2: number; }[] = [
      { id: 1, operation: 'multiplication', num1: 24, num2: 3 },
      { id: 2, operation: 'addition', num1: 458, num2: 367 },
      { id: 3, operation: 'subtraction', num1: 902, num2: 545 },
      { id: 4, operation: 'multiplication', num1: 16, num2: 4 },
      { id: 5, operation: 'addition', num1: 734, num2: 289 },
      { id: 6, operation: 'subtraction', num1: 856, num2: 378 }
    ];
    
    const tiles: MathTile[] = [];
    
    // Create question and answer pairs
    problems.forEach((problem, index) => {
      const answer = calculateAnswer(problem.operation, problem.num1, problem.num2);
      const questionText = getQuestionText(problem.operation, problem.num1, problem.num2);
      
      tiles.push({
        id: index * 2,
        value: questionText,
        type: 'question',
        position: 0,
        operation: problem.operation,
        num1: problem.num1,
        num2: problem.num2
      });
      tiles.push({
        id: index * 2 + 1,
        value: answer.toString(),
        type: 'answer',
        position: 0,
        operation: problem.operation,
        num1: problem.num1,
        num2: problem.num2
      });
    });

    // Shuffle the tiles
    const shuffled = [...tiles].sort(() => Math.random() - 0.5);
    
    // Assign positions
    return shuffled.map((tile, index) => ({
      ...tile,
      position: index
    }));
  };

  const [tiles] = useState<MathTile[]>(createShuffledTiles());

  // Function to stop current speech
  const stopCurrentSpeech = () => {
    if (window.speechSynthesis && currentSpeech.current) {
      window.speechSynthesis.cancel();
      currentSpeech.current = null;
    }
  };

  // Function to speak text
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      stopCurrentSpeech();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      currentSpeech.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Initial instruction
    setTimeout(() => {
      speak("Welcome to Space Math Adventure! Match the math problems with their answers to reveal the cosmic scene!");
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      stopCurrentSpeech();
    };
  }, []);

  return (
    <WorksheetTracker 
      totalQuestions={6}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Space Math Adventure Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        const handleTileClick = (tile: MathTile) => {
          const answer = calculateAnswer(tile.operation, tile.num1, tile.num2);
          if (matchedPairs.includes(answer.toString())) return;

          if (!selectedTile) {
            setSelectedTile(tile);
            // Speak the selected tile
            speak(tile.type === 'question' ? 
              `${tile.value} equals what?` : 
              `The answer is ${tile.value}`
            );
          } else {
            const isMatch = (
              selectedTile.operation === tile.operation &&
              selectedTile.num1 === tile.num1 &&
              selectedTile.num2 === tile.num2 &&
              selectedTile.type !== tile.type
            );

            if (selectedTile.id !== tile.id && isMatch) {
              // Match found
              const matchedAnswer = calculateAnswer(tile.operation, tile.num1, tile.num2).toString();
              setMatchedPairs([...matchedPairs, matchedAnswer]);
              markCorrect();
              
              // Play success sound and speak feedback
              const successAudio = new Audio('/success.mp3');
              successAudio.play().catch(console.error);
              speak(`Correct! ${tile.num1} ${tile.operation === 'addition' ? 'plus' : tile.operation === 'subtraction' ? 'minus' : 'times'} ${tile.num2} equals ${matchedAnswer}`);
              
              if (matchedPairs.length + 1 === 6) {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 8000);
                setTimeout(() => {
                  speak("Amazing! You've solved all the space math problems and revealed the cosmic scene!");
                }, 1000);
              }
            } else {
              // No match - provide feedback
              const errorAudio = new Audio('/error.mp3');
              errorAudio.play().catch(console.error);
              speak("Try again! Match the problem with its correct answer.");
            }
            setSelectedTile(null);
          }
        };

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

                <div className="bg-gray-800 rounded-lg p-2 md:p-4 mb-4 text-white">
                  <h1 className="text-xl md:text-2xl font-bold text-center mb-3">
                    Space Math Adventure 🚀
                  </h1>

                  <div className="bg-gray-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Match math problems with their answers to reveal the cosmic scene!</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image Container - Vertical orientation */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-gray-800 shadow-lg">
                      <img 
                        src={spaceImage}
                        alt="Space Scene"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Grid container with equal divisions */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full grid grid-rows-6 grid-cols-2">
                          {tiles.map((tile) => (
                            <div 
                              key={tile.id}
                              style={{ 
                                gridRow: Math.floor(tile.position / 2) + 1, 
                                gridColumn: (tile.position % 2) + 1 
                              }}
                              className="p-0.5"
                            >
                              {!matchedPairs.includes(calculateAnswer(tile.operation, tile.num1, tile.num2).toString()) ? (
                                <button
                                  onClick={() => handleTileClick(tile)}
                                  className={`
                                    relative w-full h-full
                                    flex items-center justify-center
                                    text-lg sm:text-xl md:text-2xl font-bold
                                    bg-black/90 backdrop-blur-sm
                                    border-2 ${selectedTile?.id === tile.id ? 'border-blue-400' : 'border-white/30'}
                                    rounded-lg shadow-lg
                                    ${selectedTile?.id === tile.id 
                                      ? 'text-blue-400 ring-2 ring-blue-400' 
                                      : 'text-white hover:text-blue-300 hover:border-blue-300'
                                    }
                                    transition-all duration-200
                                    hover:scale-105 active:scale-95
                                  `}
                                >
                                  <span className="relative z-10 px-2 text-center">
                                    {tile.value}
                                  </span>
                                </button>
                              ) : (
                                <div className="w-full h-full rounded-lg transition-opacity duration-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Instructions and Progress - Desktop */}
                  <div className="hidden md:flex w-1/2 flex-col gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">How to Play:</h2>
                      <ul className="text-gray-100 space-y-2">
                        <li>1. Click on any tile (problem or answer)</li>
                        <li>2. Find its matching pair</li>
                        <li>3. Match all pairs to reveal the cosmic scene!</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">Progress:</h2>
                      <div className="grid grid-cols-3 gap-2">
                        {tiles.filter(t => t.type === 'question').map((problem) => {
                          const answer = calculateAnswer(problem.operation, problem.num1, problem.num2);
                          return (
                            <div
                              key={problem.id}
                              className={`
                                p-2 rounded-lg text-center font-bold
                                ${matchedPairs.includes(answer.toString())
                                  ? 'bg-green-500 text-white'
                                  : 'bg-gray-700 text-gray-200'
                                }
                              `}
                            >
                              {problem.value}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TouchContainer>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default SpaceWorksheet; 