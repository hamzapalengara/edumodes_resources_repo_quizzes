import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import orangeImage from '../assets/orange-tree.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface NumberTile {
  id: number;
  value: string;
  type: 'number' | 'word';
  position: number;
}

const OrangeNumberMatchingWorksheet: React.FC = () => {
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
      { number: '6', word: 'six' },
      { number: '7', word: 'seven' },
      { number: '8', word: 'eight' },
      { number: '9', word: 'nine' },
      { number: '10', word: 'ten' }
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
      speak("Welcome to the Orange Number Match! Match numbers with their word forms to reveal the orange tree!");
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
        console.log('Orange Number Matching Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        const handleTileClick = (tile: NumberTile) => {
          if (matchedPairs.includes(tile.value === 'six' ? '6' : tile.value === 'seven' ? '7' : tile.value === 'eight' ? '8' : tile.value === 'nine' ? '9' : tile.value === 'ten' ? '10' : tile.value)) return;

          if (!selectedTile) {
            setSelectedTile(tile);
            // Speak the selected number
            speak(tile.value);
          } else {
            const isMatch = (
              (selectedTile.value === '6' && tile.value === 'six') ||
              (selectedTile.value === 'six' && tile.value === '6') ||
              (selectedTile.value === '7' && tile.value === 'seven') ||
              (selectedTile.value === 'seven' && tile.value === '7') ||
              (selectedTile.value === '8' && tile.value === 'eight') ||
              (selectedTile.value === 'eight' && tile.value === '8') ||
              (selectedTile.value === '9' && tile.value === 'nine') ||
              (selectedTile.value === 'nine' && tile.value === '9') ||
              (selectedTile.value === '10' && tile.value === 'ten') ||
              (selectedTile.value === 'ten' && tile.value === '10')
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
                  speak("Amazing! You've matched all the numbers and revealed the orange tree!");
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
                    Orange Number Match 🍊
                  </h1>

                  <div className="bg-orange-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Match numbers with their word forms to reveal the orange tree!</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image Container - Vertical orientation */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-orange-800 shadow-lg">
                      <img 
                        src={orangeImage}
                        alt="Orange Tree"
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
                              {!matchedPairs.includes(tile.value === 'six' ? '6' : tile.value === 'seven' ? '7' : tile.value === 'eight' ? '8' : tile.value === 'nine' ? '9' : tile.value === 'ten' ? '10' : tile.value) ? (
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
                    <div className="bg-orange-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">How to Play:</h2>
                      <ul className="text-orange-100 space-y-2">
                        <li>1. Click on any tile (number or word)</li>
                        <li>2. Find its matching pair</li>
                        <li>3. Match all pairs to reveal the orange tree!</li>
                      </ul>
                    </div>

                    <div className="bg-orange-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">Progress:</h2>
                      <div className="grid grid-cols-5 gap-2">
                        {['6', '7', '8', '9', '10'].map((number) => (
                          <div
                            key={number}
                            className={`
                              p-2 rounded-lg text-center font-bold
                              ${matchedPairs.includes(number)
                                ? 'bg-green-500 text-white'
                                : 'bg-orange-700 text-orange-200'
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

export default OrangeNumberMatchingWorksheet; 