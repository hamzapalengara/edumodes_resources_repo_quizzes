import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import confetti from 'canvas-confetti';

interface WordItem {
  id: string;
  word: string;
  emoji: string;
}

const WORD_ITEMS: WordItem[] = [
  { id: '1', word: 'cat', emoji: '🐱' },
  { id: '2', word: 'dog', emoji: '🐶' },
  { id: '3', word: 'sun', emoji: '☀️' },
  { id: '4', word: 'box', emoji: '📦' },
  { id: '5', word: 'hat', emoji: '🎩' },
  { id: '6', word: 'pen', emoji: '🖊️' },
  { id: '7', word: 'pig', emoji: '🐷' },
  { id: '8', word: 'car', emoji: '🚗' },
  { id: '9', word: 'bus', emoji: '🚌' },
  { id: '10', word: 'cup', emoji: '☕' },
];

// Speech synthesis utility
const speak = (text: string) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;  // Slightly slower rate for clarity
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }
};

const DraggableWord: React.FC<{ word: string; onDragStart: () => void }> = ({ word, onDragStart }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'word',
    item: { word },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 bg-white border-2 border-blue-400 rounded-lg cursor-move shadow-md 
        ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      onDragStart={onDragStart}
      onClick={() => speak(word)}  // Add click to speak
    >
      {word}
    </div>
  );
};

const ImageDropZone: React.FC<{ 
  item: WordItem;
  onDrop: (word: string) => void;
  currentWord: string | null;
  isCorrect: boolean | null;
}> = ({
  item,
  onDrop,
  currentWord,
  isCorrect,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'word',
    drop: (droppedItem: { word: string }) => onDrop(droppedItem.word),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 rounded-lg flex flex-col items-center justify-center gap-2 transition-colors
        ${isOver ? 'bg-blue-100' : 'bg-gray-50'}
        ${isCorrect === true ? 'bg-green-100 border-2 border-green-500' : ''}
        ${isCorrect === false ? 'bg-red-100 border-2 border-red-500' : ''}`}
      onClick={() => speak(item.word)}  // Add click to speak
    >
      <div className="text-6xl mb-2">{item.emoji}</div>
      <div className="h-8 w-full bg-white border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
        {currentWord ? (
          <span className={isCorrect === true ? "text-green-600 font-bold" : "text-red-600"}>
            {currentWord}
          </span>
        ) : (
          <span className="text-gray-400">Drop word here</span>
        )}
      </div>
    </div>
  );
};

const VocabularyWorksheet: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [correctAnswers, setCorrectAnswers] = useState<Record<string, boolean>>({});
  const isMobile = window.innerWidth < 768;

  // Clear speech queue when component unmounts
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <WorksheetTracker
      totalQuestions={WORD_ITEMS.length}
      pointsPerQuestion={10}
    >
      {({ addPoints, markAttempted, markCorrect, markIncorrect, questionsAttempted, reset }) => {
        const handleDrop = (targetId: string, droppedWord: string) => {
          markAttempted();
          const targetItem = WORD_ITEMS.find(item => item.id === targetId);
          if (!targetItem) return;

          // If this spot already has a correct answer, don't allow new drops
          if (correctAnswers[targetId]) {
            speak("This one is already correct!");
            return;
          }

          const isCorrect = targetItem.word === droppedWord;
          
          // If this was previously correct, don't count it again
          const wasCorrectBefore = correctAnswers[targetId];
          
          // Update answers and correctness
          setAnswers(prev => ({ ...prev, [targetId]: droppedWord }));
          setCorrectAnswers(prev => ({ ...prev, [targetId]: isCorrect }));

          if (isCorrect && !wasCorrectBefore) {
            addPoints();
            markCorrect();
            speak("Correct! " + droppedWord);
            
            // Check if this was the last correct answer needed
            const currentCorrectCount = Object.values(correctAnswers).filter(Boolean).length;
            if (currentCorrectCount === WORD_ITEMS.length - 1) {
              setTimeout(() => {
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 },
                });
                speak("Congratulations! You've matched all words correctly!");
              }, 500);
            }
          } else if (!isCorrect) {
            markIncorrect();
            speak("Try again");
          }
        };

        const handleReset = () => {
          setAnswers({});
          setCorrectAnswers({});
          reset();
          speak("Let's try again!");
        };

        const availableWords = WORD_ITEMS.filter(item => {
          const currentAnswer = answers[item.id];
          return !currentAnswer || !correctAnswers[item.id];
        }).map(item => item.word);

        // Calculate actual score based on correct answers
        const actualScore = Object.values(correctAnswers).filter(Boolean).length;

        return (
          <div className="min-h-screen bg-gray-50">
            <WorksheetHeader />
            
            <div className="bg-blue-50 p-4 shadow-md">
              <div className="max-w-4xl mx-auto">
                <ScoreDisplay 
                  score={actualScore}
                  totalQuestions={WORD_ITEMS.length}
                />
              </div>
            </div>

            <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
              <TouchContainer>
                <div className="p-4 max-w-4xl mx-auto">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
                      Match the Words with Pictures
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Words Section */}
                      <div className="flex flex-wrap gap-4 justify-center items-start bg-gray-50 p-4 rounded-lg">
                        <h2 className="w-full text-center text-lg font-semibold text-gray-700 mb-4">
                          Available Words
                        </h2>
                        {availableWords.map((word) => (
                          <DraggableWord
                            key={word}
                            word={word}
                            onDragStart={() => {}}
                          />
                        ))}
                      </div>

                      {/* Pictures Section */}
                      <div className="grid grid-cols-2 gap-4">
                        {WORD_ITEMS.map((item) => (
                          <ImageDropZone
                            key={item.id}
                            item={item}
                            onDrop={(word) => handleDrop(item.id, word)}
                            currentWord={answers[item.id]}
                            isCorrect={correctAnswers[item.id] ?? null}
                          />
                        ))}
                      </div>
                    </div>

                    {actualScore === WORD_ITEMS.length && (
                      <div className="mt-8 text-center">
                        <h2 className="text-2xl font-bold text-green-600">
                          🎉 Congratulations! You've matched all words correctly! 🎉
                        </h2>
                      </div>
                    )}

                    {questionsAttempted > 0 && actualScore < WORD_ITEMS.length && (
                      <button
                        onClick={handleReset}
                        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mx-auto block"
                      >
                        Try Again
                      </button>
                    )}
                  </div>
                </div>
              </TouchContainer>
            </DndProvider>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default VocabularyWorksheet; 