import React, { useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  { word: 'Home', imageUrl: '/assets/home.jpg', hint: 'Where we live' },
  { word: 'Door', imageUrl: '/assets/door.jpg', hint: 'We open and close it' },
  { word: 'Bed', imageUrl: '/assets/bed.jpg', hint: 'Where we sleep' },
  { word: 'Fan', imageUrl: '/assets/fan.jpg', hint: 'Keeps us cool' },
  { word: 'Cup', imageUrl: '/assets/cup.jpg', hint: 'We drink from it' },
  { word: 'Chair', imageUrl: '/assets/chair.jpg', hint: 'We sit on it' },
  { word: 'Table', imageUrl: '/assets/table.jpg', hint: 'We put things on it' },
  { word: 'Lamp', imageUrl: '/assets/lamp.jpg', hint: 'Gives us light' },
  { word: 'Clock', imageUrl: '/assets/clock.jpg', hint: 'Tells us the time' }
];

const HomeWordSoundAnswerKey: React.FC = () => {
  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

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

  return (
    <div className="min-h-screen bg-[#E6EEF1]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-[#7EC4CF] overflow-hidden">
              <div className="bg-gradient-to-r from-[#7EC4CF] to-[#89B7B6] p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Home Words Answer Key
                </h1>
              </div>

              <div className="p-4 md:p-6">
                {/* Word List Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {WORD_LIST.map(({ word, imageUrl, hint }) => (
                    <div 
                      key={word}
                      className="bg-[#E6EEF1] rounded-lg p-4 border border-[#7EC4CF]"
                    >
                      <div 
                        className="w-full aspect-video rounded-lg mb-3 overflow-hidden"
                        style={{
                          backgroundImage: `url(${imageUrl})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xl font-bold text-[#2A7B7B]">{word}</p>
                        <button
                          onClick={() => speak(word)}
                          className="w-8 h-8 flex items-center justify-center bg-[#7EC4CF] hover:bg-[#89B7B6] text-white rounded-full transition-colors"
                        >
                          🔊
                        </button>
                      </div>
                      <p className="text-sm text-[#2A7B7B]">{hint}</p>
                    </div>
                  ))}
                </div>

                {/* Word Categories */}
                <div className="mt-6 bg-[#E6EEF1] rounded-lg p-4 border border-[#7EC4CF]">
                  <h2 className="text-xl font-bold text-[#2A7B7B] mb-3">
                    Word Categories 📝
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#2A7B7B]">Furniture:</h3>
                      <ul className="list-disc list-inside text-[#2A7B7B]">
                        <li>Chair</li>
                        <li>Table</li>
                        <li>Bed</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#2A7B7B]">Home Items:</h3>
                      <ul className="list-disc list-inside text-[#2A7B7B]">
                        <li>Lamp</li>
                        <li>Clock</li>
                        <li>Cup</li>
                        <li>Fan</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Usage Examples */}
                <div className="mt-6 bg-[#E6EEF1] rounded-lg p-4 border border-[#7EC4CF]">
                  <h2 className="text-xl font-bold text-[#2A7B7B] mb-3">
                    Example Sentences 📚
                  </h2>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <span className="text-[#7EC4CF] font-bold">•</span>
                      <span className="text-[#2A7B7B]">The <b>lamp</b> is on the <b>table</b>.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#7EC4CF] font-bold">•</span>
                      <span className="text-[#2A7B7B]">I sit on the <b>chair</b> to drink from my <b>cup</b>.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#7EC4CF] font-bold">•</span>
                      <span className="text-[#2A7B7B]">The <b>clock</b> and <b>fan</b> are in my room.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default HomeWordSoundAnswerKey; 