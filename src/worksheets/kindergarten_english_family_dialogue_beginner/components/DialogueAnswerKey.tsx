import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DialogueAnswerKey: React.FC = () => {
  const dialogue = [
    {
      speaker: 'kid',
      sentence: "Mom I'm hungry",
      emoji: '🍽️',
      explanation: 'A simple way to tell Mom you need food'
    },
    {
      speaker: 'mom',
      sentence: 'What would you like',
      emoji: '🤔',
      explanation: 'Mom asks about your food preference'
    },
    {
      speaker: 'kid',
      sentence: 'Can I have pizza please',
      emoji: '🍕',
      explanation: 'Asking politely for what you want'
    },
    {
      speaker: 'mom',
      sentence: 'First eat your vegetables',
      emoji: '🥕',
      explanation: 'Mom reminds you about healthy eating'
    },
    {
      speaker: 'kid',
      sentence: 'Okay I will',
      emoji: '👍',
      explanation: 'Showing you agree to eat vegetables'
    },
    {
      speaker: 'mom',
      sentence: 'Good job sweetie',
      emoji: '⭐',
      explanation: 'Mom praises you for agreeing'
    },
    {
      speaker: 'kid',
      sentence: 'Can we play now',
      emoji: '🎮',
      explanation: 'Asking Mom to spend time with you'
    },
    {
      speaker: 'mom',
      sentence: 'After you finish homework',
      emoji: '📚',
      explanation: 'Mom reminds you about priorities'
    },
    {
      speaker: 'kid',
      sentence: 'I love you mom',
      emoji: '❤️',
      explanation: 'Expressing love for your mom'
    },
    {
      speaker: 'mom',
      sentence: 'I love you too',
      emoji: '💖',
      explanation: 'Mom returns the expression of love'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Talking with Mom - Answer Key
            </h1>
            
            <div className="space-y-4">
              {dialogue.map((line, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 ${
                    line.speaker === 'mom' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    line.speaker === 'mom' ? 'bg-pink-100' : 'bg-orange-100'
                  }`}>
                    {line.speaker === 'mom' ? '👩' : '👧'}
                  </div>
                  <div className="flex-1">
                    <div className={`rounded-lg p-4 ${
                      line.speaker === 'mom' ? 'bg-pink-50' : 'bg-orange-50'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{line.emoji}</span>
                        <p className={`text-lg font-semibold ${
                          line.speaker === 'mom' ? 'text-pink-800' : 'text-orange-800'
                        }`}>
                          {line.sentence}
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm">{line.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-pink-800 mb-2 flex items-center gap-2">
                <span>💝</span> Key Points to Remember:
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-pink-700">
                  <span>🗣️</span>
                  Always speak politely to Mom
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span>🙏</span>
                  Use "please" when asking for something
                </li>
                <li className="flex items-center gap-2 text-pink-700">
                  <span>👂</span>
                  Listen to Mom's advice
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span>❤️</span>
                  Show your love and appreciation
                </li>
                <li className="flex items-center gap-2 text-pink-700">
                  <span>🌟</span>
                  Follow Mom's instructions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueAnswerKey; 