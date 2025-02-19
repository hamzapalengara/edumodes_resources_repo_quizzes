import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import tennisImage from '../assets/tennis-court.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface MultiplicationTile {
  id: number;
  value: string;
  type: 'question' | 'answer';
  position: number;
  num1: number;
  num2: number;
}

const TennisMultiplicationWorksheet: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<MultiplicationTile | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  // Calculate answer for a multiplication fact
  const calculateAnswer = (num1: number, num2: number): number => {
    return num1 * num2;
  };

  // Get question text
  const getQuestionText = (num1: number, num2: number): string => {
    return `${num1} × ${num2}`;
  };

  // Create initial tiles and shuffle them
  const createShuffledTiles = () => {
    const tiles: MultiplicationTile[] = [];
    
    // Create question and answer pairs for 4 times table (4×1 to 4×10)
    for (let i = 1; i <= 10; i++) {
      // Question tile
      tiles.push({
        id: i * 2 - 1,
        value: getQuestionText(4, i),
        type: 'question',
        position: 0,
        num1: 4,
        num2: i
      });
      
      // Answer tile
      tiles.push({
        id: i * 2,
        value: calculateAnswer(4, i).toString(),
        type: 'answer',
        position: 0,
        num1: 4,
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
      speak("Welcome to Tennis Multiplication! Match the facts with their answers to score points!");
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
        console.log('Tennis Multiplication Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        const handleTileClick = (tile: MultiplicationTile) => {
          if (matchedPairs.includes(calculateAnswer(tile.num1, tile.num2).toString())) return;

          if (!selectedTile) {
            setSelectedTile(tile);
            // Speak the selected fact or number
            speak(tile.value);
          } else {
            if (selectedTile.id !== tile.id && 
                calculateAnswer(selectedTile.num1, selectedTile.num2) === calculateAnswer(tile.num1, tile.num2)) {
              // Match found
              setMatchedPairs([...matchedPairs, calculateAnswer(tile.num1, tile.num2).toString()]);
              markCorrect();
              
              // Play success sound and speak feedback
              const successAudio = new Audio('/success.mp3');
              successAudio.play().catch(console.error);
              speak(`Great serve! ${selectedTile.num1} times ${selectedTile.num2} equals ${calculateAnswer(tile.num1, tile.num2)}`);
              
              if (matchedPairs.length + 1 === 10) {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 8000);
                setTimeout(() => {
                  speak("Game, Set, Match! You've mastered the 4 times table!");
                }, 1000);
              }
            } else {
              // No match - provide feedback
              const errorAudio = new Audio('/error.mp3');
              errorAudio.play().catch(console.error);
              speak("Out! Try another match.");
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
                colors={['#FFD700', '#98FB98', '#87CEEB', '#DDA0DD', '#F0E68C']}
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
                    Tennis Multiplication: 4 Times Table 🎾
                  </h1>

                  <div className="bg-green-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Match multiplication facts with their answers to win the match!</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image Container - Vertical orientation */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-green-800 shadow-lg">
                      <img 
                        src={tennisImage}
                        alt="Tennis Court"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Grid container with equal divisions */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full grid grid-rows-[repeat(10,1fr)] grid-cols-2 gap-0.5">
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
                                      ? 'bg-blue-800 text-white hover:bg-blue-700'
                                      : 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
                                    }
                                    border-2 ${selectedTile?.id === tile.id 
                                      ? 'border-white ring-2 ring-white' 
                                      : tile.type === 'question'
                                        ? 'border-blue-600'
                                        : 'border-yellow-500'
                                    }
                                    rounded-lg shadow-lg
                                    transition-all duration-200
                                    hover:scale-105 active:scale-95
                                    ${selectedTile?.id === tile.id ? 'ring-2 ring-white' : ''}
                                  `}
                                >
                                  <span className="relative z-10">
                                    {tile.value}
                                  </span>
                                  {tile.type === 'question' && (
                                    <div className="absolute top-1 right-1 text-xs text-yellow-400">
                                      ×
                                    </div>
                                  )}
                                  {tile.type === 'answer' && (
                                    <div className="absolute top-1 right-1 text-xs text-blue-800">
                                      =
                                    </div>
                                  )}
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
                    <div className="bg-green-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">How to Play:</h2>
                      <ul className="text-green-100 space-y-2">
                        <li>1. Click on any tile (question or answer)</li>
                        <li>2. Find its matching pair</li>
                        <li>3. Match all pairs to win the game!</li>
                      </ul>
                    </div>

                    <div className="bg-green-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">Progress:</h2>
                      <div className="grid grid-cols-5 gap-2">
                        {[4, 8, 12, 16, 20, 24, 28, 32, 36, 40].map((number) => (
                          <div
                            key={number}
                            className={`
                              p-2 rounded-lg text-center font-bold
                              ${matchedPairs.includes(number.toString())
                                ? 'bg-yellow-500 text-green-900'
                                : 'bg-green-700 text-green-200'
                              }
                            `}
                          >
                            {number}
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

export default TennisMultiplicationWorksheet; 