import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import golfImage from '../assets/golf-course.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface MultiplicationTile {
  id: number;
  value: string;
  type: 'question' | 'answer';
  position: number;
  num1: number;
  num2: number;
}

const GolfMultiplicationWorksheet: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<MultiplicationTile | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  // Function to calculate answer
  const calculateAnswer = (num1: number, num2: number): number => {
    return num1 * num2;
  };

  // Function to get question text
  const getQuestionText = (num1: number, num2: number): string => {
    return `${num1} × ${num2}`;
  };

  // Create initial multiplication pairs and shuffle them
  const createShuffledTiles = () => {
    const tiles: MultiplicationTile[] = [];
    const num1 = 10; // We're practicing 10 times table
    
    // Create question and answer pairs
    for (let i = 1; i <= 10; i++) {
      // Question tile
      tiles.push({
        id: i * 2 - 1,
        value: getQuestionText(num1, i),
        type: 'question',
        position: 0,
        num1: num1,
        num2: i
      });
      
      // Answer tile
      tiles.push({
        id: i * 2,
        value: calculateAnswer(num1, i).toString(),
        type: 'answer',
        position: 0,
        num1: num1,
        num2: i
      });
    }

    // Shuffle the tiles
    const shuffled = [...tiles].sort(() => Math.random() - 0.5);
    
    // Assign positions
    return shuffled.map((tile, index) => ({
      ...tile,
      position: index
    }));
  };

  const [tiles] = useState<MultiplicationTile[]>(createShuffledTiles());

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
      speak("Welcome to Golf Multiplication! Match the numbers to sink your putts. Ready to tee off?");
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      stopCurrentSpeech();
    };
  }, []);

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Worksheet Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        const handleTileClick = (tile: MultiplicationTile) => {
          if (matchedPairs.includes(calculateAnswer(tile.num1, tile.num2).toString())) {
            return; // Already matched
          }

          if (selectedTile === null) {
            setSelectedTile(tile);
            speak(tile.type === 'question' 
              ? `${tile.value} equals?` 
              : `Find the question for ${tile.value}`);
          } else {
            // Check if clicking the same tile
            if (selectedTile.id === tile.id) {
              setSelectedTile(null);
              return;
            }

            // Check if one is question and other is answer
            if (selectedTile.type !== tile.type) {
              const question = selectedTile.type === 'question' ? selectedTile : tile;
              const answer = selectedTile.type === 'answer' ? selectedTile : tile;
              
              // Check if answer matches
              if (calculateAnswer(question.num1, question.num2) === parseInt(answer.value)) {
                const newMatchedPairs = [...matchedPairs, answer.value];
                setMatchedPairs(newMatchedPairs);
                markCorrect();
                speak("Great putt! That's a hole in one! 🏌️");
                
                // Check if game is complete
                if (newMatchedPairs.length === 10) {
                  setShowConfetti(true);
                  setTimeout(() => {
                    speak("Outstanding! You've completed the course! You're a multiplication champion!");
                  }, 500);
                }
              } else {
                speak("Just missed! Line up your next putt carefully! 🏌️");
              }
            }
            setSelectedTile(null);
          }
        };

        return (
          <div className="min-h-screen bg-green-900">
            {showConfetti && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={500}
                recycle={true}
                tweenDuration={8000}
                colors={['#FFD700', '#90EE90', '#98FB98', '#3CB371', '#2E8B57']}
              />
            )}
            
            <WorksheetHeader />
            
            <TouchContainer>
              <div className="px-0 md:px-4">
                <div className="w-full mb-4">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                <div className="bg-green-800 rounded-lg p-2 md:p-4 mb-4 text-white">
                  <h1 className="text-xl md:text-2xl font-bold text-center mb-3">
                    Golf Multiplication Challenge 🏌️
                  </h1>

                  <div className="bg-green-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Sink your putts by matching multiplication facts with their answers!</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Golf Course Container - Vertical orientation */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-green-800 shadow-lg">
                      <img 
                        src={golfImage}
                        alt="Golf Course"
                        className="absolute inset-0 w-full h-full object-cover opacity-75"
                      />
                      
                      {/* Grid container with equal divisions */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full grid grid-rows-[repeat(10,1fr)] grid-cols-2">
                          {tiles.map((tile) => (
                            <div 
                              key={tile.id}
                              style={{ 
                                gridRow: Math.floor(tile.position / 2) + 1, 
                                gridColumn: (tile.position % 2) + 1 
                              }}
                              className="p-0.5"
                            >
                              {!matchedPairs.includes(calculateAnswer(tile.num1, tile.num2).toString()) ? (
                                <button
                                  onClick={() => handleTileClick(tile)}
                                  className={`
                                    relative w-full h-full
                                    flex items-center justify-center
                                    text-2xl sm:text-3xl md:text-4xl font-bold
                                    ${tile.type === 'question' 
                                      ? 'bg-green-800 text-white' 
                                      : 'bg-yellow-500 text-white'
                                    }
                                    border-2 ${selectedTile?.id === tile.id 
                                      ? 'border-white ring-2 ring-white' 
                                      : tile.type === 'question'
                                        ? 'border-green-600 hover:border-white'
                                        : 'border-yellow-400 hover:border-white'
                                    }
                                    rounded-lg shadow-lg
                                    transition-all duration-200
                                    hover:scale-105 active:scale-95
                                  `}
                                >
                                  <span className="relative z-10">
                                    {tile.value}
                                  </span>
                                </button>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <span className="text-4xl">⛳</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Instructions and Progress - Shows on desktop */}
                  <div className="hidden md:block w-full md:w-1/2">
                    <div className="bg-green-800 rounded-lg p-4 text-white h-full">
                      <h2 className="text-xl font-bold mb-4">How to Play 🎯</h2>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">1.</span>
                          <span>Find matching pairs of multiplication facts and their answers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">2.</span>
                          <span>Click a green question tile, then find its matching yellow answer tile</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">3.</span>
                          <span>Each correct match is like sinking a putt - aim for a perfect score!</span>
                        </li>
                      </ul>

                      <div className="mt-6 p-4 bg-green-700 rounded-lg">
                        <h3 className="font-bold mb-2">Your Progress 🏆</h3>
                        <p>Holes Complete: {matchedPairs.length} / 10</p>
                        <div className="w-full bg-green-900 rounded-full h-4 mt-2">
                          <div 
                            className="bg-yellow-400 h-4 rounded-full transition-all duration-500"
                            style={{ width: `${(matchedPairs.length / 10) * 100}%` }}
                          ></div>
                        </div>
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

export default GolfMultiplicationWorksheet; 