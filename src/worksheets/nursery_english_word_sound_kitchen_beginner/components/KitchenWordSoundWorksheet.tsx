import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import kitchenImage from '../assets/kitchen-scene.png';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface WordTile {
  id: number;
  value: string;
  type: 'word' | 'sound';
  position: number;
}

const WORD_LIST = [
  'Kitchen',
  'Spoon',
  'Fork',
  'Plate',
  'Glass',
  'Cup',
  'Knife',
  'Pan',
  'Pot',
  'Stove'
];

const KitchenWordSoundWorksheet: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<WordTile | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  // Create initial word pairs and shuffle them
  const createShuffledTiles = () => {
    const tiles: WordTile[] = [];
    
    // Create word and sound pairs
    WORD_LIST.forEach((word, index) => {
      // Word tile
      tiles.push({
        id: index * 2 + 1,
        value: word,
        type: 'word',
        position: 0
      });
      
      // Sound tile
      tiles.push({
        id: index * 2 + 2,
        value: word,
        type: 'sound',
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

  const [tiles] = useState<WordTile[]>(createShuffledTiles());

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
      utterance.rate = 0.8; // Slightly slower for clarity
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
      speak("Welcome to our cozy kitchen! Match the words with their sounds to reveal the kitchen scene. Click on any tile to begin!");
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      stopCurrentSpeech();
    };
  }, []);

  return (
    <WorksheetTracker
      totalQuestions={WORD_LIST.length}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Worksheet Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        const handleTileClick = (tile: WordTile) => {
          if (matchedPairs.includes(tile.value)) {
            return; // Already matched
          }

          // Always speak the word when clicking a sound tile
          if (tile.type === 'sound') {
            speak(tile.value);
          }

          if (selectedTile === null) {
            setSelectedTile(tile);
            if (tile.type === 'word') {
              // Don't speak when selecting a word tile first
              // This encourages listening to the sound tile
            }
          } else {
            // Check if clicking the same tile
            if (selectedTile.id === tile.id) {
              setSelectedTile(null);
              return;
            }

            // Check if one is word and other is sound
            if (selectedTile.type !== tile.type) {
              // Check if values match
              if (selectedTile.value === tile.value) {
                const newMatchedPairs = [...matchedPairs, tile.value];
                setMatchedPairs(newMatchedPairs);
                markCorrect();
                speak("Wonderful! You found a match!");
                
                // Check if game is complete
                if (newMatchedPairs.length === WORD_LIST.length) {
                  setShowConfetti(true);
                  setTimeout(() => {
                    speak("Amazing! You've revealed the whole kitchen! Time to celebrate!");
                  }, 500);
                }
              } else {
                speak("Try again! Keep cooking up those matches!");
              }
            }
            setSelectedTile(null);
          }
        };

        return (
          <div className="min-h-screen bg-[#FFF7ED]"> {/* Warm cream background */}
            {showConfetti && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={500}
                recycle={true}
                tweenDuration={8000}
                colors={['#FB923C', '#22C55E', '#F59E0B', '#EC4899', '#8B5CF6']}
              />
            )}
            
            <WorksheetHeader />
            
            <TouchContainer>
              <div className="px-0 md:px-4">
                <div className="w-full mb-4">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                <div className="bg-white rounded-lg p-2 md:p-4 mb-4 shadow-md">
                  <h1 className="text-xl md:text-2xl font-bold text-center mb-3 text-[#C2410C]">
                    Match Kitchen Words with Sounds
                  </h1>

                  <div className="bg-[#FFF7ED] rounded p-2 md:p-3">
                    <p className="font-medium text-[#C2410C]">✨ How to Play:</p>
                    <p className="text-[#C2410C]">Match words with their sounds to reveal our cozy kitchen!</p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Game Grid Container with Background Image */}
                  <div className="w-full lg:w-3/5">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-[#FFF7ED] shadow-lg">
                      <img 
                        src={kitchenImage}
                        alt="Kitchen Scene"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Grid container with equal divisions */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full grid grid-cols-2 grid-rows-10">
                          {tiles.map((tile) => (
                            <div 
                              key={tile.id}
                              style={{ 
                                gridRow: Math.floor(tile.position / 2) + 1,
                                gridColumn: (tile.position % 2) + 1
                              }}
                              className="p-0.5"
                            >
                              {!matchedPairs.includes(tile.value) ? (
                                <button
                                  onClick={() => handleTileClick(tile)}
                                  className={`
                                    relative w-full h-full
                                    flex items-center justify-center
                                    text-base sm:text-lg md:text-xl font-bold
                                    ${tile.type === 'word' 
                                      ? 'bg-[#FB923C] text-white' 
                                      : 'bg-[#22C55E] text-white'
                                    }
                                    border-2 ${selectedTile?.id === tile.id 
                                      ? 'border-white ring-2 ring-white' 
                                      : tile.type === 'word'
                                        ? 'border-[#F97316] hover:border-white'
                                        : 'border-[#16A34A] hover:border-white'
                                    }
                                    rounded-lg shadow-lg
                                    transition-all duration-200
                                    hover:scale-105 active:scale-95
                                  `}
                                >
                                  <span className="relative z-10 px-2 text-center">
                                    {tile.type === 'word' ? tile.value : '🔊'}
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

                    {/* Mobile Progress Display */}
                    <div className="mt-4 bg-white rounded-lg p-4 shadow-md lg:hidden">
                      <h3 className="font-bold mb-2 text-[#C2410C]">Your Progress ✨</h3>
                      <p className="text-[#C2410C]">Words Matched: {matchedPairs.length} / {WORD_LIST.length}</p>
                      <div className="w-full bg-[#FFF7ED] rounded-full h-4 mt-2">
                        <div 
                          className="bg-[#FB923C] h-4 rounded-full transition-all duration-500"
                          style={{ width: `${(matchedPairs.length / WORD_LIST.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Instructions and Progress - Shows on desktop */}
                  <div className="hidden lg:block w-full lg:w-2/5">
                    <div className="bg-white rounded-lg p-4 shadow-md h-full">
                      <h2 className="text-xl font-bold mb-4 text-[#C2410C]">How to Play 🎯</h2>
                      <ul className="space-y-3 text-[#C2410C]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#FB923C]">1.</span>
                          <span>Click on a word tile (orange) or sound tile (green)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#FB923C]">2.</span>
                          <span>Find its matching pair to reveal part of the kitchen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#FB923C]">3.</span>
                          <span>Match all pairs to see the complete kitchen!</span>
                        </li>
                      </ul>

                      <div className="mt-6 p-4 bg-[#FFF7ED] rounded-lg">
                        <h3 className="font-bold mb-2 text-[#C2410C]">Your Progress ✨</h3>
                        <p className="text-[#C2410C]">Words Matched: {matchedPairs.length} / {WORD_LIST.length}</p>
                        <div className="w-full bg-white rounded-full h-4 mt-2">
                          <div 
                            className="bg-[#FB923C] h-4 rounded-full transition-all duration-500"
                            style={{ width: `${(matchedPairs.length / WORD_LIST.length) * 100}%` }}
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

export default KitchenWordSoundWorksheet; 