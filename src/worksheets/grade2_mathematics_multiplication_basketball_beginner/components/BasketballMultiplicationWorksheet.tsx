import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import basketballImage from '../assets/basketball-court.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface MultiplicationTile {
  id: number;
  value: string;
  type: 'question' | 'answer';
  position: number;
  num1: number;
  num2: number;
}

const BasketballMultiplicationWorksheet: React.FC = () => {
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
    const num1 = 7; // We're practicing 7 times table
    
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
      speak("Welcome to Basketball Multiplication! Match the facts with their answers to score baskets. Ready to play?");
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
                speak("Great shot! That's correct! 🏀");
                
                // Check if game is complete
                if (newMatchedPairs.length === 10) {
                  setShowConfetti(true);
                  setTimeout(() => {
                    speak("Amazing! You've completed all the multiplication facts! You're a basketball champion!");
                  }, 500);
                }
              } else {
                speak("Not quite! Try another shot! 🏀");
              }
            }
            setSelectedTile(null);
          }
        };

        return (
          <div className="min-h-screen bg-orange-900">
            {showConfetti && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={500}
                recycle={true}
                tweenDuration={8000}
                colors={['#FFD700', '#FFA500', '#FF8C00', '#FF6347', '#FF4500']}
              />
            )}
            
            <WorksheetHeader />
            
            <TouchContainer>
              <div className="px-0 md:px-4">
                <div className="w-full mb-4">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                <div className="bg-orange-800 rounded-lg p-2 md:p-4 mb-4 text-white">
                  <h1 className="text-xl md:text-2xl font-bold text-center mb-3">
                    Basketball Multiplication Challenge 🏀
                  </h1>

                  <div className="bg-orange-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Match multiplication facts with answers to score baskets!</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image Container - Vertical orientation */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-orange-800 shadow-lg">
                      <img 
                        src={basketballImage}
                        alt="Basketball Court"
                        className="absolute inset-0 w-full h-full object-cover"
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
                                      ? 'bg-orange-800 text-white' 
                                      : 'bg-amber-400 text-orange-900'
                                    }
                                    border-2 ${selectedTile?.id === tile.id 
                                      ? 'border-white ring-2 ring-white' 
                                      : tile.type === 'question'
                                        ? 'border-orange-600 hover:border-white'
                                        : 'border-amber-500 hover:border-white'
                                    }
                                    rounded-lg shadow-lg
                                    transition-all duration-200
                                    hover:scale-105 active:scale-95
                                  `}
                                >
                                  <span className="relative z-10">
                                    {tile.value}
                                  </span>
                                  
                                  <span className="absolute top-1 right-1 text-xs opacity-50">
                                    {tile.type === 'question' ? '×' : '='}
                                  </span>
                                </button>
                              ) : (
                                <div className="w-full h-full rounded-lg opacity-0 transition-opacity duration-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Instructions and Progress - Desktop */}
                  <div className="hidden md:flex w-1/2 flex-col gap-4">
                    <div className="bg-orange-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">How to Play:</h2>
                      <ul className="text-orange-100 space-y-2">
                        <li>1. Click on any tile to select it</li>
                        <li>2. Find its matching pair (fact or answer)</li>
                        <li>3. Match all pairs to win the game!</li>
                      </ul>
                    </div>

                    <div className="bg-orange-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">Progress:</h2>
                      <div className="grid grid-cols-5 gap-2">
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                          <div
                            key={num}
                            className={`
                              p-2 rounded-lg text-center font-bold
                              ${matchedPairs.includes((7 * num).toString())
                                ? 'bg-amber-400 text-orange-900'
                                : 'bg-orange-700 text-orange-200'
                              }
                            `}
                          >
                            {num}
                          </div>
                        ))}
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

export default BasketballMultiplicationWorksheet; 