import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/gentle-pet.jpg';

const TIPS_SECTIONS = [
  {
    title: 'Understanding Rhyming Patterns',
    icon: '🎵',
    tips: [
      'Words that rhyme have the same ending sound',
      'Focus on the last few letters of each word',
      'Say the words out loud to hear the patterns',
      'Group words with similar endings together'
    ]
  },
  {
    title: 'Dictation Success Strategies',
    icon: '✍️',
    tips: [
      'Listen carefully to each word before writing',
      'Break down the word into beginning and ending sounds',
      'Think about the rhyming pattern group it belongs to',
      'Double-check your spelling after writing'
    ]
  },
  {
    title: 'Pet-Themed Word Families',
    icon: '🐾',
    tips: [
      '-et words: PET, NET, JET',
      '-in words: BIN, PIN, TIN',
      '-ug words: BUG, MUG, JUG',
      'Each group shares the same ending pattern'
    ]
  },
  {
    title: 'Practice Activities',
    icon: '🎯',
    tips: [
      'Create your own rhyming words with these patterns',
      'Draw pictures to help remember word meanings',
      'Make up sentences using rhyming words',
      'Play word family matching games'
    ]
  }
];

const PetRhymingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1F2937] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="relative z-10">
        <WorksheetHeader />
        
        <TouchContainer>
          <div className="px-0 md:px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#374151]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4B5563]">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-200 text-center mb-8">
                  Tips for Rhyming Word Success
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {TIPS_SECTIONS.map((section, index) => (
                    <div 
                      key={index}
                      className="bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563]"
                    >
                      <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                        <span className="text-2xl">{section.icon}</span>
                        {section.title}
                      </h2>
                      
                      <ul className="space-y-3">
                        {section.tips.map((tip, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <span className="text-yellow-400">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563]">
                  <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">💝</span>
                    Remember
                  </h2>
                  <p className="text-gray-300">
                    Learning rhyming words is like making new friends in our pet-themed adventure! 
                    Take your time, practice regularly, and most importantly - have fun while learning. 
                    Every word you learn helps you become a better reader and writer!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TouchContainer>
      </div>
    </div>
  );
};

export default PetRhymingTips; 