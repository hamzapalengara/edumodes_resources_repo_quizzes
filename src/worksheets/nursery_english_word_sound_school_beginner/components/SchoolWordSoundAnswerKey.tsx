import React, { useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  { word: 'School', hint: 'Where we learn together' },
  { word: 'Bag', hint: 'Carries our books and supplies' },
  { word: 'Pen', hint: 'Writes with ink' },
  { word: 'Pencil', hint: 'Writes and can be erased' },
  { word: 'Book', hint: 'Has pages to read' },
  { word: 'Eraser', hint: 'Helps fix mistakes' },
  { word: 'Teacher', hint: 'Helps us learn' },
  { word: 'Student', hint: 'Someone who learns' },
  { word: 'Desk', hint: 'Where we write and work' },
  { word: 'Chair', hint: 'Where we sit' }
];

const SchoolWordSoundAnswerKey: React.FC = () => {
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
    <div className="min-h-screen bg-[#F0F9FF]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-[#60A5FA] overflow-hidden">
              <div className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  School Words Answer Key
                </h1>
              </div>

              <div className="p-4 md:p-6">
                {/* Word List Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {WORD_LIST.map(({ word, hint }) => (
                    <div 
                      key={word}
                      className="bg-[#F0F9FF] rounded-lg p-4 border border-[#60A5FA]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xl font-bold text-[#1E40AF]">{word}</p>
                        <button
                          onClick={() => speak(word)}
                          className="w-8 h-8 flex items-center justify-center bg-[#60A5FA] hover:bg-[#3B82F6] text-white rounded-full transition-colors"
                        >
                          🔊
                        </button>
                      </div>
                      <p className="text-sm text-[#1E40AF]">{hint}</p>
                    </div>
                  ))}
                </div>

                {/* Word Categories */}
                <div className="mt-6 bg-[#F0F9FF] rounded-lg p-4 border border-[#60A5FA]">
                  <h2 className="text-xl font-bold text-[#1E40AF] mb-3">
                    School Categories 🎯
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#1E40AF]">Writing Tools:</h3>
                      <ul className="list-disc list-inside text-[#1E40AF]">
                        <li>Pen</li>
                        <li>Pencil</li>
                        <li>Eraser</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#1E40AF]">Furniture:</h3>
                      <ul className="list-disc list-inside text-[#1E40AF]">
                        <li>Desk</li>
                        <li>Chair</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#1E40AF]">People:</h3>
                      <ul className="list-disc list-inside text-[#1E40AF]">
                        <li>Teacher</li>
                        <li>Student</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#1E40AF]">Learning Materials:</h3>
                      <ul className="list-disc list-inside text-[#1E40AF]">
                        <li>Book</li>
                        <li>Bag</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Example Sentences */}
                <div className="mt-6 bg-[#F0F9FF] rounded-lg p-4 border border-[#60A5FA]">
                  <h2 className="text-xl font-bold text-[#1E40AF] mb-3">
                    Fun Sentences 📚
                  </h2>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span className="text-[#1E40AF]">The <b>student</b> puts their <b>book</b> in their <b>bag</b>.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span className="text-[#1E40AF]">I use my <b>pencil</b> and <b>eraser</b> to write.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span className="text-[#1E40AF]">The <b>teacher</b> writes with a <b>pen</b>.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span className="text-[#1E40AF]">At <b>school</b>, we sit on a <b>chair</b> at our <b>desk</b>.</span>
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

export default SchoolWordSoundAnswerKey; 