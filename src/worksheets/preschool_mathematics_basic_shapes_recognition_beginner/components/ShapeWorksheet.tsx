import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ShapeCelebration from './ShapeCelebration';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface Shape {
  id: string;
  type: 'circle' | 'square' | 'triangle' | 'rectangle';
  color: string;
  isFound: boolean;
  size: string;
  object: string;
}

const ShapeWorksheet: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [currentShape, setCurrentShape] = useState<string>('circle');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVoiceReady, setIsVoiceReady] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Initialize shapes data
  useEffect(() => {
    const initialShapes: Shape[] = [
      // Scene 1: Home
      { id: '1', type: 'circle', color: 'bg-yellow-400', isFound: false, size: 'aspect-square w-full', object: '○' },
      { id: '2', type: 'triangle', color: 'bg-green-500', isFound: false, size: 'aspect-square w-full', object: '△' },
      { id: '3', type: 'square', color: 'bg-red-500', isFound: false, size: 'aspect-square w-full', object: '□' },
      { id: '4', type: 'rectangle', color: 'bg-brown-500', isFound: false, size: 'aspect-[3/2] w-full', object: '▭' },

      // Scene 2: School
      { id: '5', type: 'circle', color: 'bg-blue-400', isFound: false, size: 'aspect-square w-full', object: '⭕' },
      { id: '6', type: 'triangle', color: 'bg-yellow-500', isFound: false, size: 'aspect-square w-full', object: '▲' },
      { id: '7', type: 'rectangle', color: 'bg-purple-400', isFound: false, size: 'aspect-[3/2] w-full', object: '▭' },
      { id: '8', type: 'square', color: 'bg-pink-400', isFound: false, size: 'aspect-square w-full', object: '■' },

      // Scene 3: Toys
      { id: '9', type: 'circle', color: 'bg-orange-400', isFound: false, size: 'aspect-square w-full', object: '◯' },
      { id: '10', type: 'rectangle', color: 'bg-gray-400', isFound: false, size: 'aspect-[3/2] w-full', object: '▭' },
      { id: '11', type: 'triangle', color: 'bg-yellow-600', isFound: false, size: 'aspect-square w-full', object: '△' },
      { id: '12', type: 'square', color: 'bg-blue-500', isFound: false, size: 'aspect-square w-full', object: '□' }
    ];
    setShapes(initialShapes);
  }, []);

  // Initialize speech synthesis
  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    const loadVoices = () => {
      const voices = synthRef.current?.getVoices() || [];
      if (voices.length > 0) {
        setIsVoiceReady(true);
        speak("Welcome to Shape Safari! Let's find shapes in these fun scenes. Start by finding all the circles!");
      }
    };
    
    synthRef.current?.addEventListener('voiceschanged', loadVoices);
    loadVoices();

    return () => {
      synthRef.current?.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  const speak = (text: string) => {
    if (!synthRef.current || !isVoiceReady || isSpeaking) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    synthRef.current.speak(utterance);
  };

  const getNextShape = () => {
    const shapeTypes = ['circle', 'square', 'triangle', 'rectangle'];
    const currentIndex = shapeTypes.indexOf(currentShape);
    return shapeTypes[currentIndex + 1];
  };

  return (
    <WorksheetTracker
      totalQuestions={12} // Total number of shapes to find
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Shape Recognition Worksheet Summary:', summary);
      }}
    >
      {({ score, markCorrect, markIncorrect, markAttempted }) => {
        const handleShapeClick = (shape: Shape) => {
          if (shape.isFound || isSpeaking) return;

          markAttempted();
          
          if (shape.type === currentShape) {
            // Correct shape found
            markCorrect();
            setShapes(prevShapes => 
              prevShapes.map(s => 
                s.id === shape.id ? { ...s, isFound: true } : s
              )
            );
            
            speak(`Yes! That's a ${shape.type}! Great job!`);

            // Check if all shapes of current type are found
            const remainingShapes = shapes.filter(s => s.type === currentShape && !s.isFound);
            if (remainingShapes.length === 1) { // This was the last one
              setTimeout(() => {
                const nextShape = getNextShape();
                if (nextShape) {
                  setCurrentShape(nextShape);
                  speak(`Excellent! Now let's find all the ${nextShape}s!`);
                } else {
                  speak("Amazing! You've found all the shapes! You're a shape expert!");
                  setShowCelebration(true);
                }
              }, 1500);
            }
          } else {
            // Wrong shape
            markIncorrect();
            speak(`That's a ${shape.type}. We're looking for ${currentShape}s. Try again!`);
          }
        };

        const renderScene = (title: string, startIndex: number, bgColor: string) => (
          <div className={`${bgColor} rounded-lg p-2 sm:p-4`}>
            <h2 className="text-base font-bold text-white mb-2 sm:mb-3 sm:text-lg">{title}</h2>
            <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:gap-4 md:grid-cols-4">
              {shapes.slice(startIndex, startIndex + 4).map(shape => (
                <TouchContainer key={shape.id}>
                  <div className="w-full">
                    <div
                      className={`
                        ${shape.size}
                        ${shape.isFound ? 'scale-95 bg-green-200' : 'active:scale-95 bg-white'}
                        transition-all duration-300 cursor-pointer rounded-lg
                        flex items-center justify-center touch-manipulation
                        min-h-[160px] shadow-sm hover:shadow-md p-2 relative
                        sm:min-h-[180px] md:min-h-[160px]
                      `}
                      onClick={() => handleShapeClick(shape)}
                    >
                      <span className="text-5xl sm:text-6xl md:text-5xl select-none leading-none">
                        {shape.object}
                      </span>
                      {shape.isFound && (
                        <div className="absolute inset-0 flex items-center justify-center bg-green-200 bg-opacity-60">
                          <span className="text-green-500 text-5xl sm:text-6xl md:text-5xl">✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                </TouchContainer>
              ))}
            </div>
          </div>
        );

        return (
          <div className="w-full min-h-screen bg-white overflow-x-hidden">
            <WorksheetHeader>
              <h1 className="text-sm font-bold text-white px-2 sm:text-base md:text-lg">
                Shape Safari Adventure!
              </h1>
            </WorksheetHeader>

            <div className="px-2 py-2 w-full max-w-4xl mx-auto space-y-3 sm:space-y-4 sm:px-4 sm:py-4 md:px-6 md:py-6">
              {/* Score Display */}
              <div className="mb-4">
                <ScoreDisplay score={score/10} totalQuestions={12} />
              </div>

              {/* Instructions */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-3">
                  <div className="text-xl sm:text-2xl md:text-3xl">◎</div>
                  <h2 className="text-sm font-bold text-indigo-800 sm:text-base md:text-lg">
                    Current Mission:
                  </h2>
                </div>
                <p className="text-xs text-indigo-700 sm:text-sm md:text-base">
                  Find all the <span className="font-bold text-purple-600">{currentShape}s</span> in the scenes below!
                </p>
                <div className="mt-2 flex items-center gap-2 sm:mt-3 sm:gap-3">
                  <span className="text-lg sm:text-xl md:text-2xl">★</span>
                  <p className="text-xs text-indigo-600 sm:text-sm md:text-base">
                    Found: {score/10} of 12 shapes
                  </p>
                </div>
              </div>

              {/* Scenes */}
              <div className="space-y-3 sm:space-y-4">
                {renderScene("At Home", 0, "bg-green-600")}
                {renderScene("At School", 4, "bg-blue-500")}
                {renderScene("Toy Box", 8, "bg-orange-500")}
              </div>

              {/* Progress */}
              {score === 120 && (
                <div className="text-center animate-bounce p-3 sm:p-4">
                  <div className="flex justify-center gap-2 text-xl mb-2 sm:gap-3 sm:text-2xl sm:mb-3 md:text-3xl">
                    <span>★</span>
                    <span>♦</span>
                    <span>★</span>
                  </div>
                  <p className="text-sm font-bold text-purple-600 sm:text-base md:text-lg">
                    Congratulations! You're a shape-finding champion! ★
                  </p>
                </div>
              )}

              {/* Celebration Modal */}
              {showCelebration && (
                <ShapeCelebration onComplete={() => setShowCelebration(false)} />
              )}
            </div>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default ShapeWorksheet; 