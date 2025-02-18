import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import jungleImage from '../assets/jungle-scene.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface LetterTile {
  id: number;
  letter: string;
  isUpperCase: boolean;
  position: number;
}

const LetterMatchingWorksheet: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<LetterTile | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Create initial letter pairs and shuffle them
  const createShuffledTiles = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
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

  return (
    <WorksheetTracker 
      totalQuestions={6}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Letter Matching Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        const handleTileClick = (tile: LetterTile) => {
          if (matchedPairs.includes(tile.letter.toUpperCase())) return;

          if (!selectedTile) {
            setSelectedTile(tile);
          } else {
            if (selectedTile.id !== tile.id && 
                selectedTile.letter.toUpperCase() === tile.letter.toUpperCase() && 
                selectedTile.isUpperCase !== tile.isUpperCase) {
              // Match found
              setMatchedPairs([...matchedPairs, tile.letter.toUpperCase()]);
              markCorrect(); // Call markCorrect when a match is found
              
              if (matchedPairs.length + 1 === 6) {
                setShowConfetti(true);
                setShowCelebration(true);
                setTimeout(() => setShowConfetti(false), 8000);
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
                colors={['#FFD700', '#90EE90', '#98FB98', '#32CD32', '#228B22']}
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
                    Jungle Letter Match 🦁
                  </h1>

                  <div className="bg-green-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Match capital and small letters to reveal the jungle scene!</p>
                  </div>
                </div>

                <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden bg-green-800 shadow-lg">
                  <img 
                    src={jungleImage}
                    alt="Jungle Scene"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-0.5 p-0.5">
                    {tiles.map((tile) => (
                      <div 
                        key={tile.id}
                        style={{ gridRow: Math.floor(tile.position / 4) + 1, gridColumn: (tile.position % 4) + 1 }}
                        className={`
                          relative aspect-square flex items-center justify-center
                          ${matchedPairs.includes(tile.letter.toUpperCase()) 
                            ? 'opacity-0 pointer-events-none' 
                            : 'opacity-100'
                          }
                        `}
                      >
                        {!matchedPairs.includes(tile.letter.toUpperCase()) && (
                          <button
                            onClick={() => handleTileClick(tile)}
                            className={`
                              w-full h-full flex items-center justify-center
                              text-3xl md:text-4xl lg:text-5xl font-bold
                              bg-green-900/95 backdrop-blur-md
                              ${selectedTile?.id === tile.id ? 'text-yellow-300 ring-2 ring-yellow-300' : 'text-white'}
                              hover:text-yellow-200 transition-colors
                            `}
                          >
                            {tile.isUpperCase ? tile.letter : tile.letter.toLowerCase()}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {showCelebration && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-green-800 text-white rounded-lg p-4 md:p-6 text-center max-w-sm">
                      <h2 className="text-xl md:text-2xl font-bold mb-4">
                        🎉 Amazing Job! 🦁
                      </h2>
                      <p className="text-green-300">
                        You've matched all the letters and revealed the jungle scene!
                      </p>
                      <button
                        onClick={() => setShowCelebration(false)}
                        className="mt-4 py-2 px-4 bg-green-600 rounded-lg hover:bg-green-700"
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

export default LetterMatchingWorksheet; 