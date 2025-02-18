import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import appleImage from '../assets/apple-tree.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface NumberTile {
  id: number;
  value: string;
  type: 'number' | 'word';
  position: number;
}

const AppleNumberMatchingWorksheet: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<NumberTile | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  // Create initial number pairs and shuffle them
  const createShuffledTiles = () => {
    const numbers = [
      { number: '1', word: 'one' },
      { number: '2', word: 'two' },
      { number: '3', word: 'three' },
      { number: '4', word: 'four' },
      { number: '5', word: 'five' }
    ];
    
    const tiles: NumberTile[] = [];
    
    // Create number and word pairs
    numbers.forEach((pair, index) => {
      tiles.push({
        id: index * 2,
        value: pair.number,
        type: 'number',
        position: 0
      });
      tiles.push({
        id: index * 2 + 1,
        value: pair.word,
        type: 'word',
        position: 0
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

  const [tiles] = useState<NumberTile[]>(createShuffledTiles());

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
      speak("Welcome to the Apple Number Match! Match numbers with their word forms to reveal the apple tree!");
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      stopCurrentSpeech();
    };
  }, []);

  return (
    <WorksheetTracker 
      totalQuestions={5}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Apple Number Matching Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        const handleTileClick = (tile: NumberTile) => {
          if (matchedPairs.includes(tile.value === 'one' ? '1' : tile.value === 'two' ? '2' : tile.value === 'three' ? '3' : tile.value === 'four' ? '4' : tile.value === 'five' ? '5' : tile.value)) return;

          if (!selectedTile) {
            setSelectedTile(tile);
            // Speak the selected number
            speak(tile.value);
          } else {
            const isMatch = (
              (selectedTile.value === '1' && tile.value === 'one') ||
              (selectedTile.value === 'one' && tile.value === '1') ||
              (selectedTile.value === '2' && tile.value === 'two') ||
              (selectedTile.value === 'two' && tile.value === '2') ||
              (selectedTile.value === '3' && tile.value === 'three') ||
              (selectedTile.value === 'three' && tile.value === '3') ||
              (selectedTile.value === '4' && tile.value === 'four') ||
              (selectedTile.value === 'four' && tile.value === '4') ||
              (selectedTile.value === '5' && tile.value === 'five') ||
              (selectedTile.value === 'five' && tile.value === '5')
            );

            if (selectedTile.id !== tile.id && isMatch) {
              // Match found
              const matchedNumber = tile.type === 'number' ? tile.value : selectedTile.value;
              setMatchedPairs([...matchedPairs, matchedNumber]);
              markCorrect();
              
              // Play success sound and speak feedback
              const successAudio = new Audio('/success.mp3');
              successAudio.play().catch(console.error);
              speak(`Great job! You matched the number ${matchedNumber}`);
              
              if (matchedPairs.length + 1 === 5) {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 8000);
                setTimeout(() => {
                  speak("Amazing! You've matched all the numbers and revealed the apple tree!");
                }, 1000);
              }
            } else {
              // No match - provide feedback
              const errorAudio = new Audio('/error.mp3');
              errorAudio.play().catch(console.error);
              speak("Try again! Match the number with its word.");
            }
            setSelectedTile(null);
          }
        };

        return (
          <div className="min-h-screen bg-red-900">
            {showConfetti && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={500}
                recycle={true}
                tweenDuration={8000}
                colors={['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']}
              />
            )}
            
            <WorksheetHeader />
            
            <TouchContainer>
              <div className="px-0 md:px-4">
                <div className="w-full mb-4">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                <div className="bg-red-800 rounded-lg p-2 md:p-4 mb-4 text-white">
                  <h1 className="text-xl md:text-2xl font-bold text-center mb-3">
                    Apple Number Match 🍎
                  </h1>

                  <div className="bg-red-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Match numbers with their word forms to reveal the apple tree!</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image Container - Vertical orientation */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-red-800 shadow-lg">
                      <img 
                        src={appleImage}
                        alt="Apple Tree"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Grid container with equal divisions */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full grid grid-rows-5 grid-cols-2">
                          {tiles.map((tile) => (
                            <div 
                              key={tile.id}
                              style={{ 
                                gridRow: Math.floor(tile.position / 2) + 1, 
                                gridColumn: (tile.position % 2) + 1 
                              }}
                              className="p-0.5"
                            >
                              {!matchedPairs.includes(tile.value === 'one' ? '1' : tile.value === 'two' ? '2' : tile.value === 'three' ? '3' : tile.value === 'four' ? '4' : tile.value === 'five' ? '5' : tile.value) ? (
                                <button
                                  onClick={() => handleTileClick(tile)}
                                  className={`
                                    relative w-full h-full
                                    flex items-center justify-center
                                    text-2xl sm:text-3xl md:text-4xl font-bold
                                    bg-black/90 backdrop-blur-sm
                                    border-2 ${selectedTile?.id === tile.id ? 'border-yellow-400' : 'border-white/30'}
                                    rounded-lg shadow-lg
                                    ${selectedTile?.id === tile.id 
                                      ? 'text-yellow-400 ring-2 ring-yellow-400' 
                                      : 'text-white hover:text-yellow-300 hover:border-yellow-300'
                                    }
                                    transition-all duration-200
                                    hover:scale-105 active:scale-95
                                  `}
                                >
                                  <span className="relative z-10">
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
                    <div className="bg-red-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">How to Play:</h2>
                      <ul className="text-red-100 space-y-2">
                        <li>1. Click on any tile (number or word)</li>
                        <li>2. Find its matching pair</li>
                        <li>3. Match all pairs to reveal the apple tree!</li>
                      </ul>
                    </div>

                    <div className="bg-red-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">Progress:</h2>
                      <div className="grid grid-cols-5 gap-2">
                        {['1', '2', '3', '4', '5'].map((number) => (
                          <div
                            key={number}
                            className={`
                              p-2 rounded-lg text-center font-bold
                              ${matchedPairs.includes(number)
                                ? 'bg-green-500 text-white'
                                : 'bg-red-700 text-red-200'
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

export default AppleNumberMatchingWorksheet; 