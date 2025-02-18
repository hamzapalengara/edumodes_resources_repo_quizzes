import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import carImage from '../assets/car-scene.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface LetterTile {
  id: number;
  letter: string;
  isUpperCase: boolean;
  position: number;
}

const CarLetterMatchingWorksheet: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<LetterTile | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  // Create initial letter pairs and shuffle them
  const createShuffledTiles = () => {
    const letters = ['G', 'H', 'I', 'J', 'K', 'L'];
    const tiles: LetterTile[] = [];
    
    // Create uppercase and lowercase pairs
    letters.forEach((letter, index) => {
      tiles.push({
        id: index * 2,
        letter: letter,
        isUpperCase: true,
        position: 0
      });
      tiles.push({
        id: index * 2 + 1,
        letter: letter,
        isUpperCase: false,
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

  const [tiles] = useState<LetterTile[]>(createShuffledTiles());

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
        console.log('Car Letter Matching Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        const handleTileClick = (tile: LetterTile) => {
          if (matchedPairs.includes(tile.letter.toUpperCase())) return;

          if (!selectedTile) {
            setSelectedTile(tile);
            // Speak the selected letter
            speak(`${tile.isUpperCase ? 'Capital' : 'Small'} letter ${tile.letter}`);
          } else {
            if (selectedTile.id !== tile.id && 
                selectedTile.letter.toUpperCase() === tile.letter.toUpperCase() && 
                selectedTile.isUpperCase !== tile.isUpperCase) {
              // Match found
              setMatchedPairs([...matchedPairs, tile.letter.toUpperCase()]);
              markCorrect();
              
              // Play success sound and speak feedback
              const successAudio = new Audio('/success.mp3');
              successAudio.play().catch(console.error);
              speak(`Great job! You matched the letter ${tile.letter.toUpperCase()}`);
              
              if (matchedPairs.length + 1 === 6) {
                setShowConfetti(true);
                setShowCelebration(true);
                setTimeout(() => setShowConfetti(false), 8000);
                setTimeout(() => {
                  speak("Amazing! You've matched all the letters!");
                }, 1000);
              }
            } else {
              // No match - provide feedback
              const errorAudio = new Audio('/error.mp3');
              errorAudio.play().catch(console.error);
              speak("Try again! Find the matching pair.");
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
                colors={['#FF0000', '#FFD700', '#FF4500', '#FF6B6B', '#FF8C00']}
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
                    Speed Letter Match 🏎️
                  </h1>

                  <div className="bg-gray-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Match capital and small letters to reveal the super car!</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image Container - Vertical orientation */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-gray-800 shadow-lg">
                      <img 
                        src={carImage}
                        alt="Super Car Scene"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Grid container with equal divisions */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full grid grid-rows-[repeat(6,1fr)] grid-cols-2">
                          {tiles.map((tile) => (
                            <div 
                              key={tile.id}
                              style={{ 
                                gridRow: Math.floor(tile.position / 2) + 1, 
                                gridColumn: (tile.position % 2) + 1 
                              }}
                              className="p-0.5"
                            >
                              {!matchedPairs.includes(tile.letter.toUpperCase()) ? (
                                <button
                                  onClick={() => handleTileClick(tile)}
                                  className={`
                                    relative w-full h-full
                                    flex items-center justify-center
                                    text-2xl sm:text-3xl md:text-4xl font-bold
                                    bg-black/90 backdrop-blur-sm
                                    border-2 ${selectedTile?.id === tile.id ? 'border-red-400' : 'border-white/30'}
                                    rounded-lg shadow-lg
                                    ${selectedTile?.id === tile.id 
                                      ? 'text-red-400 ring-2 ring-red-400' 
                                      : 'text-white hover:text-red-300 hover:border-red-300'
                                    }
                                    transition-all duration-200
                                    hover:scale-105 active:scale-95
                                  `}
                                >
                                  <span className="relative z-10">
                                    {tile.isUpperCase ? tile.letter : tile.letter.toLowerCase()}
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
                      <ul className="text-gray-300 space-y-2">
                        <li>1. Click on any letter tile</li>
                        <li>2. Find its matching pair (capital or small)</li>
                        <li>3. Match all pairs to reveal the car!</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">Progress:</h2>
                      <div className="grid grid-cols-3 gap-2">
                        {['G', 'H', 'I', 'J', 'K', 'L'].map((letter) => (
                          <div
                            key={letter}
                            className={`
                              p-2 text-center rounded-md
                              ${matchedPairs.includes(letter) 
                                ? 'bg-red-900 text-white' 
                                : 'bg-gray-700 text-gray-400'}
                            `}
                          >
                            {letter}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instructions - Mobile Only */}
                <div className="md:hidden mt-4 bg-gray-800 p-4 rounded-lg">
                  <h2 className="text-lg font-bold text-white mb-2">Progress:</h2>
                  <div className="grid grid-cols-6 gap-2">
                    {['G', 'H', 'I', 'J', 'K', 'L'].map((letter) => (
                      <div
                        key={letter}
                        className={`
                          p-2 text-center rounded-md text-sm
                          ${matchedPairs.includes(letter) 
                            ? 'bg-red-900 text-white' 
                            : 'bg-gray-700 text-gray-400'}
                        `}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                </div>

                {showCelebration && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 text-white rounded-lg p-4 md:p-6 text-center max-w-sm">
                      <h2 className="text-xl md:text-2xl font-bold mb-4">
                        🎉 Amazing Speed! 🏎️
                      </h2>
                      <p className="text-red-400">
                        You've matched all the letters and revealed the super car!
                      </p>
                      <button
                        onClick={() => setShowCelebration(false)}
                        className="mt-4 py-2 px-4 bg-red-600 rounded-lg hover:bg-red-700"
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

export default CarLetterMatchingWorksheet; 