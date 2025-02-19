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
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      speechSynthesisRef.current = window.speechSynthesis;
    }
  }, []);

  const calculateAnswer = (num1: number, num2: number): number => {
    return num1 * num2;
  };

  const getQuestionText = (num1: number, num2: number): string => {
    return `${num1} × ${num2}`;
  };

  const createShuffledTiles = () => {
    const tiles: MultiplicationTile[] = [];
    let id = 1;

    // Create question tiles for 7 times table (7×1 to 7×10)
    for (let i = 1; i <= 10; i++) {
      tiles.push({
        id: id++,
        value: getQuestionText(7, i),
        type: 'question',
        position: 0,
        num1: 7,
        num2: i
      });
    }

    // Create answer tiles
    for (let i = 1; i <= 10; i++) {
      tiles.push({
        id: id++,
        value: calculateAnswer(7, i).toString(),
        type: 'answer',
        position: 0,
        num1: 7,
        num2: i
      });
    }

    // Shuffle tiles
    return tiles.sort(() => Math.random() - 0.5);
  };

  const [tiles] = useState<MultiplicationTile[]>(createShuffledTiles());

  const stopCurrentSpeech = () => {
    if (speechSynthesisRef.current && speechUtteranceRef.current) {
      speechSynthesisRef.current.cancel();
    }
  };

  const speak = (text: string) => {
    if (speechSynthesisRef.current) {
      stopCurrentSpeech();
      const utterance = new SpeechSynthesisUtterance(text);
      speechUtteranceRef.current = utterance;
      speechSynthesisRef.current.speak(utterance);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ addPoints, markCorrect, markAttempted, markIncorrect, score }) => (
        <div className="min-h-screen bg-orange-900">
          <WorksheetHeader />
          
          <div className="container mx-auto px-0 md:px-4 py-8">
            <div className="bg-orange-800 rounded-lg p-4 md:p-6 shadow-lg">
              <div className="mb-6">
                <ScoreDisplay score={score} totalQuestions={100} />
              </div>

              <div className="bg-orange-700 rounded-lg p-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
                  Basketball Multiplication Match 🏀
                </h1>
                <p className="text-center text-orange-100">
                  Match each multiplication fact with its answer to score points!
                </p>
              </div>

              <TouchContainer>
                <div 
                  className="grid grid-cols-4 md:grid-cols-5 gap-0.5 md:gap-1"
                  style={{
                    backgroundImage: `url(${basketballImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {tiles.map((tile) => {
                    const isMatched = matchedPairs.includes(tile.value);
                    const isSelected = selectedTile?.id === tile.id;

                    const handleTileClick = (tile: MultiplicationTile) => {
                      if (isMatched) return;

                      if (!selectedTile) {
                        setSelectedTile(tile);
                        speak(tile.value);
                        return;
                      }

                      if (selectedTile.id === tile.id) {
                        setSelectedTile(null);
                        return;
                      }

                      markAttempted();

                      const selectedAnswer = selectedTile.type === 'answer' 
                        ? selectedTile.value 
                        : calculateAnswer(selectedTile.num1, selectedTile.num2).toString();
                      
                      const currentAnswer = tile.type === 'answer'
                        ? tile.value
                        : calculateAnswer(tile.num1, tile.num2).toString();

                      if (selectedAnswer === currentAnswer) {
                        const newPairs = [...matchedPairs, selectedTile.value, tile.value];
                        setMatchedPairs(newPairs);
                        setSelectedTile(null);
                        addPoints(10);
                        markCorrect();
                        speak('Correct! Great shot!');

                        if (newPairs.length === tiles.length) {
                          setShowConfetti(true);
                          speak("Amazing! You have completed the game!");
                          setTimeout(() => setShowConfetti(false), 5000);
                        }
                      } else {
                        setSelectedTile(null);
                        markIncorrect();
                        speak('Try again!');
                      }
                    };

                    return (
                      <div
                        key={tile.id}
                        className={`
                          w-full aspect-square flex items-center justify-center
                          rounded-lg text-lg md:text-xl font-bold cursor-pointer
                          transition-all transform hover:scale-105
                          ${isMatched ? 'opacity-0' : 'opacity-100'}
                          ${isSelected ? 'ring-4 ring-yellow-400 scale-105' : ''}
                          ${tile.type === 'question' 
                            ? 'bg-indigo-600 text-white hover:bg-indigo-500' 
                            : 'bg-orange-400 text-indigo-900 hover:bg-orange-300'}
                        `}
                        onClick={() => handleTileClick(tile)}
                      >
                        <span className="p-2 text-center">
                          {tile.type === 'question' && '×'} {tile.value} {tile.type === 'answer' && '='}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </TouchContainer>
            </div>
          </div>

          {showConfetti && (
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              recycle={false}
              numberOfPieces={500}
            />
          )}
        </div>
      )}
    </WorksheetTracker>
  );
};

export default BasketballMultiplicationWorksheet; 