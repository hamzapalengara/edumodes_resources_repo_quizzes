import React, { useState, useEffect, useCallback, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import confetti from 'canvas-confetti';

interface CountingItem {
  id: number;
  type: string;
  emoji: string;
  count: number;
  isCompleted: boolean;
  currentCount: number;
  isActive: boolean;
}

const CountingWorksheet: React.FC = () => {
  const [items, setItems] = useState<CountingItem[]>([
    { id: 1, type: 'apples', emoji: '🍎', count: 1, isCompleted: false, currentCount: 0, isActive: true },
    { id: 2, type: 'stars', emoji: '⭐', count: 2, isCompleted: false, currentCount: 0, isActive: false },
    { id: 3, type: 'hearts', emoji: '❤️', count: 3, isCompleted: false, currentCount: 0, isActive: false },
    { id: 4, type: 'flowers', emoji: '🌸', count: 4, isCompleted: false, currentCount: 0, isActive: false },
    { id: 5, type: 'balloons', emoji: '🎈', count: 5, isCompleted: false, currentCount: 0, isActive: false },
    { id: 6, type: 'butterflies', emoji: '🦋', count: 6, isCompleted: false, currentCount: 0, isActive: false },
    { id: 7, type: 'rainbows', emoji: '🌈', count: 7, isCompleted: false, currentCount: 0, isActive: false },
    { id: 8, type: 'stars', emoji: '🌟', count: 8, isCompleted: false, currentCount: 0, isActive: false },
    { id: 9, type: 'moons', emoji: '🌙', count: 9, isCompleted: false, currentCount: 0, isActive: false },
    { id: 10, type: 'suns', emoji: '☀️', count: 10, isCompleted: false, currentCount: 0, isActive: false }
  ]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVoiceReady, setIsVoiceReady] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const numberWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

  const speak = useCallback((text: string) => {
    if (!synthRef.current || isSpeaking) return;

    try {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Get available voices
      const voices = synthRef.current.getVoices();
      const childVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('child') || 
        voice.name.toLowerCase().includes('female')
      );
      
      if (childVoice) {
        utterance.voice = childVoice;
      }
      
      utterance.rate = 0.9;
      utterance.pitch = 1.2;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      utterance.onerror = (event) => {
        console.log('Speech synthesis error:', event);
        setIsSpeaking(false);
      };

      synthRef.current.speak(utterance);
    } catch (error) {
      console.log('Speech synthesis error:', error);
      setIsSpeaking(false);
    }
  }, [isSpeaking]);

  const activateNextItem = (currentIndex: number) => {
    const newItems = [...items];
    if (currentIndex < items.length - 1) {
      newItems[currentIndex + 1].isActive = true;
    }
    setItems(newItems);
  };

  const handleItemClick = (itemIndex: number) => {
    const newItems = [...items];
    const item = newItems[itemIndex];

    if (!item.isCompleted && !isSpeaking && item.isActive) {
      item.currentCount = Math.min(item.currentCount + 1, item.count);
      
      // Speak the current number immediately
      if (item.currentCount > 0 && item.currentCount <= 10) {
        speak(numberWords[item.currentCount - 1]);
      }

      if (item.currentCount === item.count) {
        item.isCompleted = true;
        const completedCount = newItems.filter(i => i.isCompleted).length;
        setProgress((completedCount / items.length) * 100);

        // Celebrate completion of this group after a short delay
        setTimeout(() => {
          if (!isSpeaking) {
            speak(`Great job! We counted ${item.count} ${item.type}!`);
          }
        }, 800);

        // Activate next item
        activateNextItem(itemIndex);

        if (completedCount === items.length) {
          setShowCelebration(true);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
          setTimeout(() => {
            if (!isSpeaking) {
              speak("Amazing! You counted all the way to ten! You're a counting superstar!");
            }
          }, 1500);
        }
      }

      setItems(newItems);
    }
  };

  // Initialize speech synthesis
  useEffect(() => {
    if (!window.speechSynthesis) {
      console.log('Speech synthesis not supported');
      return;
    }

    synthRef.current = window.speechSynthesis;

    const loadVoices = () => {
      const voices = synthRef.current?.getVoices() || [];
      if (voices.length > 0) {
        setIsVoiceReady(true);
        // Initial welcome message
        setTimeout(() => {
          speak("Let's count together from one to ten!");
        }, 1000);
      }
    };

    // Load voices and set up voice changed event
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    // Cleanup
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const renderCountingObjects = (item: CountingItem) => {
    return Array.from({ length: item.count }, (_, index) => (
      <div
        key={index}
        className={`text-4xl transform transition-all duration-500 relative ${
          index < item.currentCount 
            ? 'scale-110 opacity-100' 
            : index === item.currentCount && !item.isCompleted && item.isActive
              ? 'scale-125 opacity-100 animate-pulse hover:scale-150'
              : 'scale-100 opacity-50'
        }`}
      >
        {item.emoji}
      </div>
    ));
  };

  return (
    <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8 bg-white min-h-screen">
      <WorksheetHeader>
        <h1 className="text-2xl font-bold text-white">Let's Count Together! 🎯</h1>
      </WorksheetHeader>

      <div className="md:p-6 space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-lg md:p-6 p-4">
          <h2 className="text-xl font-bold text-pink-800 mb-4">Counting is Fun!</h2>
          <p className="text-pink-700">Let's count from 1 to 10! Touch each glowing object and count along with me!</p>
          <p className="text-pink-600 mt-2">Complete each group before moving to the next number.</p>
          {!isVoiceReady && (
            <p className="text-yellow-600 mt-2">
              ⚠️ Voice is getting ready... You might need to interact with the page first.
            </p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-medium">Your Progress:</span>
            <span className="text-pink-600 font-bold">
              {items.filter(i => i.isCompleted).length} / {items.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-pink-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Counting Items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <TouchContainer key={item.id}>
              <div 
                className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 md:p-6 p-4 ${
                  item.isCompleted 
                    ? 'border-green-400 bg-green-50' 
                    : item.isActive
                      ? 'border-pink-400 bg-pink-50 hover:shadow-lg'
                      : 'border-gray-200 opacity-60'
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div className="space-y-4">
                  {/* Instructions */}
                  <div className="text-lg font-medium text-gray-700">
                    {item.isActive ? (
                      <span className="text-pink-600">Count the {item.type}:</span>
                    ) : item.isCompleted ? (
                      <span className="text-green-600">Counted {item.count} {item.type}!</span>
                    ) : (
                      <span>Count the {item.type}:</span>
                    )}
                  </div>

                  {/* Objects Display */}
                  <div className="flex flex-wrap gap-4 justify-center items-center min-h-[100px]">
                    {renderCountingObjects(item)}
                  </div>

                  {/* Counter Display */}
                  <div className="text-center">
                    <span className={`text-3xl font-bold ${
                      item.isActive ? 'text-pink-600 animate-bounce' : 'text-gray-600'
                    }`}>
                      {item.currentCount}
                    </span>
                  </div>

                  {/* Completion Message */}
                  {item.isCompleted && (
                    <div className="bg-green-100 rounded-lg p-3 text-center animate-fadeIn">
                      <p className="text-green-700 font-medium">
                        Great job! You counted {item.count} {item.type}! ✨
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </TouchContainer>
          ))}
        </div>

        {/* Celebration Message */}
        {showCelebration && (
          <div className="bg-gradient-to-r from-yellow-50 to-pink-50 border-2 border-yellow-400 rounded-lg p-6 text-center animate-bounceIn">
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">
              🎉 Amazing Job! 🎉
            </h3>
            <p className="text-yellow-700 text-lg">
              You counted all the way to ten!
            </p>
            <div className="mt-4 flex justify-center gap-2 text-3xl animate-bounce">
              ⭐ 🏆 ⭐
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountingWorksheet; 