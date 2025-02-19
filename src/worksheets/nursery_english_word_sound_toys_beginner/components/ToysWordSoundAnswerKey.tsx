import React, { useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  { word: 'Toy', hint: 'Something to play with' },
  { word: 'Ball', hint: 'Round and bouncy' },
  { word: 'Doll', hint: 'A toy that looks like a person' },
  { word: 'Car', hint: 'A toy with wheels' },
  { word: 'Train', hint: 'Moves on tracks' },
  { word: 'Blocks', hint: 'Stack them up high' },
  { word: 'Teddy', hint: 'A soft bear to hug' },
  { word: 'Puzzle', hint: 'Pieces fit together' },
  { word: 'Robot', hint: 'A mechanical friend' },
  { word: 'Kite', hint: 'Flies in the sky' }
];

const ToysWordSoundAnswerKey: React.FC = () => {
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
    <div className="min-h-screen bg-[#FFF5F7]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-[#F687B3] overflow-hidden">
              <div className="bg-gradient-to-r from-[#F687B3] to-[#D53F8C] p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Toy Words Answer Key
                </h1>
              </div>

              <div className="p-4 md:p-6">
                {/* Word List Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {WORD_LIST.map(({ word, hint }) => (
                    <div 
                      key={word}
                      className="bg-[#FFF5F7] rounded-lg p-4 border border-[#F687B3]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xl font-bold text-[#D53F8C]">{word}</p>
                        <button
                          onClick={() => speak(word)}
                          className="w-8 h-8 flex items-center justify-center bg-[#F687B3] hover:bg-[#ED64A6] text-white rounded-full transition-colors"
                        >
                          🔊
                        </button>
                      </div>
                      <p className="text-sm text-[#D53F8C]">{hint}</p>
                    </div>
                  ))}
                </div>

                {/* Word Categories */}
                <div className="mt-6 bg-[#FFF5F7] rounded-lg p-4 border border-[#F687B3]">
                  <h2 className="text-xl font-bold text-[#D53F8C] mb-3">
                    Toy Categories 🎯
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#D53F8C]">Active Play:</h3>
                      <ul className="list-disc list-inside text-[#D53F8C]">
                        <li>Ball</li>
                        <li>Kite</li>
                        <li>Car</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#D53F8C]">Building & Learning:</h3>
                      <ul className="list-disc list-inside text-[#D53F8C]">
                        <li>Blocks</li>
                        <li>Puzzle</li>
                        <li>Robot</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#D53F8C]">Cuddly Friends:</h3>
                      <ul className="list-disc list-inside text-[#D53F8C]">
                        <li>Teddy</li>
                        <li>Doll</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#D53F8C]">Vehicles:</h3>
                      <ul className="list-disc list-inside text-[#D53F8C]">
                        <li>Car</li>
                        <li>Train</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Example Sentences */}
                <div className="mt-6 bg-[#FFF5F7] rounded-lg p-4 border border-[#F687B3]">
                  <h2 className="text-xl font-bold text-[#D53F8C] mb-3">
                    Fun Sentences 📚
                  </h2>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span className="text-[#D53F8C]">I play with my <b>ball</b> and <b>teddy</b>.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span className="text-[#D53F8C]">The <b>robot</b> helps build with <b>blocks</b>.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span className="text-[#D53F8C]">My <b>car</b> and <b>train</b> go fast!</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span className="text-[#D53F8C]">The <b>doll</b> helps solve the <b>puzzle</b>.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span className="text-[#D53F8C]">My <b>kite</b> flies high in the sky!</span>
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

export default ToysWordSoundAnswerKey; 