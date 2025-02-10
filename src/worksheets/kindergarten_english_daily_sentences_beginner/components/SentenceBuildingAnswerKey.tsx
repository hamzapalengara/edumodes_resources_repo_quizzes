import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SentenceBuildingAnswerKey: React.FC = () => {
  const sentences = [
    { sentence: 'How are you', image: '👋', context: 'Used when greeting someone' },
    { sentence: 'Thank you', image: '🙏', context: 'Used to show gratitude' },
    { sentence: 'Good morning', image: '🌅', context: 'Morning greeting' },
    { sentence: 'Please help me', image: '🆘', context: 'Asking for assistance' },
    { sentence: 'I am hungry', image: '🍽️', context: 'Expressing hunger' },
    { sentence: 'I am happy', image: '😊', context: 'Expressing happiness' },
    { sentence: 'Good bye', image: '👋', context: 'Saying farewell' },
    { sentence: 'See you later', image: '👋', context: 'Another way to say goodbye' },
    { sentence: 'You are welcome', image: '🤝', context: 'Responding to thank you' },
    { sentence: 'Nice to meet you', image: '🤝', context: 'Greeting someone new' }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Daily Conversation Sentences - Answer Key</h1>
            
            <div className="grid gap-2 md:gap-4">
              {sentences.map((item, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 rounded-lg p-2 md:p-4 flex flex-col md:flex-row items-center gap-2 md:gap-4"
                >
                  <span className="text-4xl">{item.image}</span>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-semibold text-blue-700">{item.sentence}</p>
                    <p className="text-gray-600">{item.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentenceBuildingAnswerKey; 