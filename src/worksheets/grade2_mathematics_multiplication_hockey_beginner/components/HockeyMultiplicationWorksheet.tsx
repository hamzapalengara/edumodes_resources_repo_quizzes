import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import hockeyImage from '../assets/hockey-rink.jpg';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface MultiplicationTile {
  id: number;
  value: string;
  type: 'question' | 'answer';
  position: number;
  num1: number;
  num2: number;
}

const HockeyMultiplicationWorksheet: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<MultiplicationTile | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  const calculateAnswer = (num1: number, num2: number): number => {
    return num1 * num2;
  };

  const getQuestionText = (num1: number, num2: number): string => {
    return `${num1} × ${num2}`;
  };

  // Create initial multiplication problems and shuffle them
  const createShuffledTiles = () => {
    const problems = [
      { num1: 5, num2: 1 },
      { num1: 5, num2: 2 },
      { num1: 5, num2: 3 },
      { num1: 5, num2: 4 },
      { num1: 5, num2: 5 },
      { num1: 5, num2: 6 },
      { num1: 5, num2: 7 },
      { num1: 5, num2: 8 },
      { num1: 5, num2: 9 },
      { num1: 5, num2: 10 }
    ];
    
    const tiles: MultiplicationTile[] = [];
    
    // Create question and answer pairs
    problems.forEach((problem, index) => {
      const answer = calculateAnswer(problem.num1, problem.num2);
      const questionText = getQuestionText(problem.num1, problem.num2);
      
      tiles.push({
        id: index * 2,
        value: questionText,
        type: 'question',
        position: 0,
        num1: problem.num1,
        num2: problem.num2
      });
      tiles.push({
        id: index * 2 + 1,
        value: answer.toString(),
        type: 'answer',
        position: 0,
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
      speak("Welcome to Hockey Multiplication! Match the problems with their answers to score goals!");
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
        console.log('Hockey Multiplication Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        const handleTileClick = (tile: MultiplicationTile) => {
          const answer = calculateAnswer(tile.num1, tile.num2);
          if (matchedPairs.includes(answer.toString())) return;

          if (!selectedTile) {
            setSelectedTile(tile);
            // Speak the selected tile
            speak(tile.type === 'question' ? 
              `${tile.num1} times ${tile.num2} equals what?` : 
              `The answer is ${tile.value}`
            );
          } else {
            const isMatch = (
              selectedTile.num1 === tile.num1 &&
              selectedTile.num2 === tile.num2 &&
              selectedTile.type !== tile.type
            );

            if (selectedTile.id !== tile.id && isMatch) {
              // Match found
              const matchedAnswer = calculateAnswer(tile.num1, tile.num2).toString();
              setMatchedPairs([...matchedPairs, matchedAnswer]);
              markCorrect();
              
              // Play success sound and speak feedback
              const successAudio = new Audio('/success.mp3');
              successAudio.play().catch(console.error);
              speak(`Goal! ${tile.num1} times ${tile.num2} equals ${matchedAnswer}`);
              
              if (matchedPairs.length + 1 === 10) {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 8000);
                setTimeout(() => {
                  speak("Hat trick! You've mastered the 5 times table!");
                }, 1000);
              }
            } else {
              // No match - provide feedback
              const errorAudio = new Audio('/error.mp3');
              errorAudio.play().catch(console.error);
              speak("Saved by the goalie! Try another shot!");
            }
            setSelectedTile(null);
          }
        };

        return (
          <div className="min-h-screen bg-slate-900">
            {showConfetti && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={500}
                recycle={true}
                tweenDuration={8000}
                colors={['#FFD700', '#FF0000', '#FFFFFF', '#000000', '#C0C0C0']}
              />
            )}
            
            <WorksheetHeader />
            
            <TouchContainer>
              <div className="px-0 md:px-4">
                <div className="w-full mb-4">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                <div className="bg-slate-800 rounded-lg p-2 md:p-4 mb-4 text-white">
                  <h1 className="text-xl md:text-2xl font-bold text-center mb-3">
                    Hockey Multiplication: 5 Times Table 🏒
                  </h1>

                  <div className="bg-slate-700 rounded p-2 md:p-3">
                    <p className="font-medium">✨ Mission:</p>
                    <p>Match multiplication facts with their answers to score goals!</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image Container - Vertical orientation */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-800 shadow-lg">
                      <img 
                        src={hockeyImage}
                        alt="Hockey Rink"
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
                                      ? 'bg-red-800 text-white hover:bg-red-700'
                                      : 'bg-slate-200 text-slate-900 hover:bg-slate-100'
                                    }
                                    border-2 ${selectedTile?.id === tile.id 
                                      ? 'border-white ring-2 ring-white' 
                                      : tile.type === 'question'
                                        ? 'border-red-600'
                                        : 'border-slate-300'
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
                                    <div className="absolute top-1 right-1 text-xs text-slate-200">
                                      ×
                                    </div>
                                  )}
                                  {tile.type === 'answer' && (
                                    <div className="absolute top-1 right-1 text-xs text-red-800">
                                      =
                                    </div>
                                  )}
                                </button>
                              ) : (
                                <div className="w-full h-full rounded-lg transition-opacity duration-500 opacity-0" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Instructions and Progress - Desktop */}
                  <div className="hidden md:flex w-1/2 flex-col gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">How to Play:</h2>
                      <ul className="text-slate-100 space-y-2">
                        <li>1. Click on any tile (problem or answer)</li>
                        <li>2. Find its matching pair</li>
                        <li>3. Match all pairs to score a hat trick!</li>
                      </ul>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-white mb-3">Scoreboard:</h2>
                      <div className="grid grid-cols-5 gap-2">
                        {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((number) => (
                          <div
                            key={number}
                            className={`
                              p-2 rounded-lg text-center font-bold
                              ${matchedPairs.includes(number.toString())
                                ? 'bg-red-500 text-white'
                                : 'bg-slate-700 text-slate-200'
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

export default HockeyMultiplicationWorksheet; 