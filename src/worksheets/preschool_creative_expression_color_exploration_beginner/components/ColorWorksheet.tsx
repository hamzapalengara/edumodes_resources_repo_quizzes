import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface ColorItem {
  color: string;
  name: string;
  bgClass: string;
  borderClass: string;
}

const ColorWorksheet: React.FC = () => {
  const [score, setScore] = useState(0);
  const [currentColor, setCurrentColor] = useState<ColorItem | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState('');

  const colors: ColorItem[] = [
    { color: 'Red', name: 'red', bgClass: 'bg-red-500', borderClass: 'border-red-600' },
    { color: 'Blue', name: 'blue', bgClass: 'bg-blue-500', borderClass: 'border-blue-600' },
    { color: 'Yellow', name: 'yellow', bgClass: 'bg-yellow-400', borderClass: 'border-yellow-500' },
    { color: 'Green', name: 'green', bgClass: 'bg-green-500', borderClass: 'border-green-600' },
  ];

  // Initialize speech synthesis
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Welcome message
      speak("Welcome to Fun with Colors! Touch any color to begin!");
    }
  }, []);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for children
      utterance.pitch = 1.2; // Slightly higher pitch for engagement
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleColorClick = (color: ColorItem) => {
    setCurrentColor(color);
    speak(`Can you say ${color.color}?`);
    setIsListening(true);
    startListening();
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event: any) => {
        const spokenWord = event.results[0][0].transcript.toLowerCase();
        if (currentColor && spokenWord.includes(currentColor.name.toLowerCase())) {
          setScore(prev => prev + 1);
          setFeedback('✨ Great job! ✨');
          speak('Wonderful! You got it right!');
        } else {
          setFeedback('Try again!');
          speak(`Let's try again! Say ${currentColor?.color}`);
        }
        setIsListening(false);
      };

      recognition.start();
    }
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <WorksheetHeader />
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <ScoreDisplay score={score} totalQuestions={colors.length} />

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Parent/Teacher Note */}
            <div className="text-sm text-gray-600 mb-6">
              Note: This activity requires audio. Please ensure your device's sound is on.
            </div>

            {/* Color Grid */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorClick(color)}
                  className={`h-32 rounded-lg ${color.bgClass} border-4 ${color.borderClass} 
                    transform transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-${color.name}-300`}
                  aria-label={`${color.color} color`}
                />
              ))}
            </div>

            {/* Feedback Area */}
            {feedback && (
              <div className="text-center text-xl font-bold text-gray-700 mt-4">
                {feedback}
              </div>
            )}

            {/* Listening Indicator */}
            {isListening && (
              <div className="text-center text-gray-600 mt-4">
                Listening... 🎤
              </div>
            )}
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ColorWorksheet; 