import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  { word: 'Home', imageUrl: '/assets/home.jpg' },
  { word: 'Door', imageUrl: '/assets/door.jpg' },
  { word: 'Bed', imageUrl: '/assets/bed.jpg' },
  { word: 'Fan', imageUrl: '/assets/fan.jpg' },
  { word: 'Cup', imageUrl: '/assets/cup.jpg' },
  { word: 'Chair', imageUrl: '/assets/chair.jpg' },
  { word: 'Table', imageUrl: '/assets/table.jpg' },
  { word: 'Lamp', imageUrl: '/assets/lamp.jpg' },
  { word: 'Clock', imageUrl: '/assets/clock.jpg' }
];

const HomeWordSoundTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#E6EEF1]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-[#7EC4CF] overflow-hidden">
              <div className="bg-gradient-to-r from-[#7EC4CF] to-[#89B7B6] p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Tips for Word and Sound Matching
                </h1>
              </div>

              <div className="p-4 md:p-6 space-y-6">
                {/* Listening Tips Section */}
                <section className="bg-[#E6EEF1] rounded-lg p-4 border border-[#7EC4CF]">
                  <h2 className="text-xl font-bold text-[#2A7B7B] mb-3">
                    Listening Tips 👂
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7EC4CF] font-bold">1.</span>
                      <span>Listen carefully to the sound when you click the speaker icon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7EC4CF] font-bold">2.</span>
                      <span>You can click the speaker icon multiple times to hear the word again</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7EC4CF] font-bold">3.</span>
                      <span>Try to say the word yourself after hearing it</span>
                    </li>
                  </ul>
                </section>

                {/* Word Recognition Section */}
                <section className="bg-[#E6EEF1] rounded-lg p-4 border border-[#7EC4CF]">
                  <h2 className="text-xl font-bold text-[#2A7B7B] mb-3">
                    Word Recognition 📖
                  </h2>
                  <div className="space-y-3">
                    <p>Practice these words:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {WORD_LIST.map((item, index) => (
                        <div 
                          key={index}
                          className="bg-white p-3 rounded border border-[#7EC4CF] flex items-center gap-3"
                        >
                          <div 
                            className="w-12 h-12 rounded overflow-hidden"
                            style={{
                              backgroundImage: `url(${item.imageUrl})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          />
                          <span className="text-[#2A7B7B] font-medium">{item.word}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Game Strategy Section */}
                <section className="bg-[#E6EEF1] rounded-lg p-4 border border-[#7EC4CF]">
                  <h2 className="text-xl font-bold text-[#2A7B7B] mb-3">
                    Game Strategy 🎯
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7EC4CF] font-bold">1.</span>
                      <span>Start by clicking a word you know well</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7EC4CF] font-bold">2.</span>
                      <span>Listen to different sound tiles until you find the match</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7EC4CF] font-bold">3.</span>
                      <span>Remember which sounds you've already heard</span>
                    </li>
                  </ul>
                </section>

                {/* Practice Tips Section */}
                <section className="bg-[#E6EEF1] rounded-lg p-4 border border-[#7EC4CF]">
                  <h2 className="text-xl font-bold text-[#2A7B7B] mb-3">
                    Practice Tips ✨
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7EC4CF] font-bold">•</span>
                      <span>Look around your home and name the objects you see</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7EC4CF] font-bold">•</span>
                      <span>Practice spelling these words when you see them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7EC4CF] font-bold">•</span>
                      <span>Try to use these words in sentences</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default HomeWordSoundTips; 