import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SentenceBuildingAnswerKey: React.FC = () => {
  const sentences = [
    {
      sentence: 'How are you feeling today',
      image: '👋',
      context: 'A longer way to ask about someone\'s well-being',
      explanation: 'Question word (How) + verb (are) + subject (you) + verb (feeling) + time (today)'
    },
    {
      sentence: 'Thank you very much for helping me',
      image: '🙏',
      context: 'A polite way to express gratitude',
      explanation: 'Expression (Thank you) + intensifier (very much) + preposition (for) + action (helping) + object (me)'
    },
    {
      sentence: 'Good morning to everyone',
      image: '🌅',
      context: 'A friendly morning greeting to a group',
      explanation: 'Time greeting (Good morning) + preposition (to) + group (everyone)'
    },
    {
      sentence: 'Would you please help me with this',
      image: '🆘',
      context: 'A very polite way to ask for help',
      explanation: 'Modal verb (Would) + subject (you) + polite word (please) + verb (help) + object (me) + preposition phrase (with this)'
    },
    {
      sentence: 'I am so happy to meet you',
      image: '🤝',
      context: 'Expressing joy when meeting someone',
      explanation: 'Subject (I) + verb (am) + intensifier (so) + adjective (happy) + infinitive phrase (to meet you)'
    },
    {
      sentence: 'I am looking forward to it',
      image: '🎯',
      context: 'Expressing excitement about a future event',
      explanation: 'Subject (I) + verb phrase (am looking forward) + preposition (to) + object (it)'
    },
    {
      sentence: 'Please have a nice day',
      image: '🌞',
      context: 'A polite way to wish someone well',
      explanation: 'Polite word (Please) + verb (have) + article (a) + adjective (nice) + noun (day)'
    },
    {
      sentence: 'Hope to see you again soon',
      image: '👋',
      context: 'A friendly way to say goodbye',
      explanation: 'Verb (Hope) + infinitive phrase (to see) + object (you) + adverbs (again soon)'
    },
    {
      sentence: 'Could you please repeat that',
      image: '🔄',
      context: 'A polite way to ask for repetition',
      explanation: 'Modal verb (Could) + subject (you) + polite word (please) + verb (repeat) + object (that)'
    },
    {
      sentence: 'I had a wonderful time with you',
      image: '🌟',
      context: 'Expressing enjoyment after spending time together',
      explanation: 'Subject (I) + verb (had) + article (a) + adjective (wonderful) + noun (time) + preposition phrase (with you)'
    }
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
                  className="bg-blue-50 rounded-lg p-2 md:p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{item.image}</span>
                    <div className="flex-1">
                      <div className="mb-2">
                        <p className="text-lg font-semibold text-blue-700">{item.sentence}</p>
                        <p className="text-gray-600 italic">{item.context}</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="text-gray-700 text-sm">
                          <span className="font-semibold">Structure:</span> {item.explanation}
                        </p>
                      </div>
                    </div>
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