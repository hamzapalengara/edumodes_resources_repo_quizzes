import React, { useState, useCallback } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import confetti from 'canvas-confetti/dist/confetti.module.mjs';

interface ColorButton {
  name: string;
  color: string;
  bgClass: string;
  borderClass: string;
  hoverClass: string;
  emoji: string;
  examples: string[];
}

const colors: ColorButton[] = [
  { 
    name: 'Red', 
    color: '#FF0000', 
    bgClass: 'bg-red-500', 
    borderClass: 'border-red-600',
    hoverClass: 'hover:bg-red-600', 
    emoji: '🍎', 
    examples: ['apple', 'strawberry', 'fire truck']
  },
  { 
    name: 'Orange', 
    color: '#FF7F00', 
    bgClass: 'bg-orange-500', 
    borderClass: 'border-orange-600',
    hoverClass: 'hover:bg-orange-600', 
    emoji: '🍊', 
    examples: ['orange', 'carrot', 'sunset']
  },
  { 
    name: 'Yellow', 
    color: '#FFFF00', 
    bgClass: 'bg-yellow-400', 
    borderClass: 'border-yellow-500',
    hoverClass: 'hover:bg-yellow-500', 
    emoji: '⭐', 
    examples: ['star', 'sun', 'banana']
  },
  { 
    name: 'Green', 
    color: '#00FF00', 
    bgClass: 'bg-green-500', 
    borderClass: 'border-green-600',
    hoverClass: 'hover:bg-green-600', 
    emoji: '🌿', 
    examples: ['leaf', 'grass', 'tree']
  },
  { 
    name: 'Blue', 
    color: '#0000FF', 
    bgClass: 'bg-blue-500', 
    borderClass: 'border-blue-600',
    hoverClass: 'hover:bg-blue-600', 
    emoji: '🌊', 
    examples: ['ocean', 'sky', 'blueberry']
  },
  { 
    name: 'Indigo', 
    color: '#4B0082', 
    bgClass: 'bg-indigo-500', 
    borderClass: 'border-indigo-600',
    hoverClass: 'hover:bg-indigo-600', 
    emoji: '🌌', 
    examples: ['night sky', 'blueberries', 'butterfly']
  },
  { 
    name: 'Violet', 
    color: '#8F00FF', 
    bgClass: 'bg-purple-500', 
    borderClass: 'border-purple-600',
    hoverClass: 'hover:bg-purple-600', 
    emoji: '🌸', 
    examples: ['flower', 'grapes', 'butterfly']
  },
];

const ColorWorksheet: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isProcessingAnswer, setIsProcessingAnswer] = useState(false);

  // Generate random questions for activity 2
  const [questions] = useState(() => {
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    return shuffled.map(color => ({
      correctColor: color,
      options: [
        color,
        ...colors
          .filter(c => c.name !== color.name)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
      ].sort(() => Math.random() - 0.5)
    }));
  });

  const speakColor = useCallback((colorName: string) => {
    const utterance = new SpeechSynthesisUtterance(colorName);
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  }, []);

  const triggerConfetti = useCallback((color: string, origin: { x: number, y: number }) => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ['circle'],
      colors: [color],
      origin
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ['circle']
      });

      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 2.5,
        shapes: ['circle']
      });
    }

    shoot();
  }, []);

  const handleColorClick = useCallback((colorName: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const colorData = colors.find(c => c.name === colorName);
    if (colorData) {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      
      setSelectedColor(colorName);
      speakColor(colorName);
      triggerConfetti(colorData.color, { x, y });
    }
  }, [speakColor, triggerConfetti]);

  const handleAnswerClick = useCallback((selectedAnswer: ColorButton, event: React.MouseEvent<HTMLButtonElement>) => {
    if (isProcessingAnswer) return;
    setIsProcessingAnswer(true);
    
    const isCorrect = selectedAnswer.name === questions[currentQuestion].correctColor.name;
    setShowAnswer(true);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      
      triggerConfetti(selectedAnswer.color, { x, y });
      
      // First say "Correct!"
      const correctUtterance = new SpeechSynthesisUtterance("Correct!");
      correctUtterance.rate = 0.8;
      correctUtterance.pitch = 1.2;
      
      // Then say the color name after a short delay
      const colorUtterance = new SpeechSynthesisUtterance(`This is ${selectedAnswer.name}`);
      colorUtterance.rate = 0.8;
      colorUtterance.pitch = 1.2;
      
      window.speechSynthesis.speak(correctUtterance);
      setTimeout(() => {
        window.speechSynthesis.speak(colorUtterance);
      }, 1000);
    } else {
      speakColor('Try again!');
    }

    setTimeout(() => {
      setShowAnswer(false);
      setIsProcessingAnswer(false);
      if (isCorrect) {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
        } else {
          // Game completed!
          const completionUtterance = new SpeechSynthesisUtterance("Congratulations! You've completed the color game!");
          completionUtterance.rate = 0.8;
          completionUtterance.pitch = 1.2;
          window.speechSynthesis.speak(completionUtterance);
          
          // Trigger multi-color confetti celebration
          const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8F00FF'];
          colors.forEach((color, index) => {
            setTimeout(() => {
              triggerConfetti(color, { x: 0.5, y: 0.5 });
            }, index * 300);
          });
        }
      }
    }, 2000);
  }, [currentQuestion, questions, triggerConfetti, speakColor, isProcessingAnswer]);

  const renderActivity1 = () => (
    <>
      <h1 className="text-4xl font-bold text-center mb-4">
        Let's Learn Colors! 🎨
      </h1>

      <div className="bg-blue-50 rounded-xl p-6 mb-8 shadow-inner">
        <h2 className="text-2xl font-bold text-blue-800 mb-3">
          How to Play 🎯
        </h2>
        <ul className="text-lg text-blue-700 space-y-2">
          <li>1. Touch any color card below 👆</li>
          <li>2. Listen to the color name 👂</li>
          <li>3. Look at the fun examples! 👀</li>
          <li>4. Try to find these colors around you! 🔍</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {colors.map((color) => (
          <div 
            key={color.name} 
            className={`
              relative bg-white rounded-3xl p-6 shadow-lg
              transform transition-all duration-300
              ${selectedColor === color.name ? 'scale-105' : 'hover:scale-102'}
              border-4 ${selectedColor === color.name ? color.borderClass : 'border-transparent'}
            `}
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Large Emoji */}
              <div className="text-8xl mb-2 transform hover:scale-110 transition-transform duration-300">
                {color.emoji}
              </div>

              {/* Color Button */}
              <button
                className={`
                  w-full py-4 px-6 rounded-2xl shadow-lg 
                  transition-all duration-300
                  ${color.bgClass} ${color.hoverClass}
                  transform hover:scale-105
                  flex items-center justify-center
                  border-4 border-white
                `}
                onClick={(e) => handleColorClick(color.name, e)}
              >
                <span className="text-3xl font-bold tracking-wide text-white drop-shadow-lg">
                  {color.name}
                </span>
              </button>

              {/* Examples */}
              {selectedColor === color.name && (
                <div className="mt-4 text-center animate-fade-in">
                  <p className="text-xl text-gray-700">
                    Look for: {color.examples.join(', ')} ✨
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const renderActivity2 = () => {
    const currentQ = questions[currentQuestion];
    return (
      <>
        <h1 className="text-4xl font-bold text-center mb-4">
          Color Detective Game 🔍
        </h1>

        <div className="bg-blue-50 rounded-xl p-6 mb-8 shadow-inner">
          <h2 className="text-2xl font-bold text-blue-800 mb-3">
            How to Play 🎯
          </h2>
          <ul className="text-lg text-blue-700 space-y-2">
            <li>1. Look at the color emoji shown below 👀</li>
            <li>2. Find its matching color from the choices 🎨</li>
            <li>3. Click the correct color to score points! 🎯</li>
            <li>4. Listen for the color name when you're right! 🔊</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <div className="text-9xl mb-4 animate-bounce">
              {currentQ.correctColor.emoji}
            </div>
            <p className="text-2xl text-gray-600">
              What color matches this? 🤔
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                className={`
                  p-6 rounded-2xl shadow-lg
                  transition-all duration-300
                  ${option.bgClass} ${option.hoverClass}
                  transform hover:scale-105
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center
                `}
                onClick={(e) => handleAnswerClick(option, e)}
                disabled={showAnswer || isProcessingAnswer}
              >
                <span className="text-2xl font-bold text-white drop-shadow-lg">
                  {option.name}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-blue-800">
              Score: {score} / {questions.length} ⭐
            </p>
            {currentQuestion === questions.length - 1 && score === questions.length && (
              <div className="mt-4 p-4 bg-green-100 rounded-xl">
                <p className="text-2xl font-bold text-green-800">
                  🎉 Congratulations! You've completed the color game! 🎉
                </p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <WorksheetHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Activity 1 */}
          <section>
            {renderActivity1()}
          </section>

          {/* Activity 2 */}
          <section>
            {renderActivity2()}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ColorWorksheet; 