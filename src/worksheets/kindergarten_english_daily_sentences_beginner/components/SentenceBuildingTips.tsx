import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SentenceBuildingTips: React.FC = () => {
  const tips = [
    {
      title: 'Start with Capital Letters',
      description: 'Sentences always begin with a capital letter. Look for words like "I", "Good", "How", etc.',
      icon: '🔠'
    },
    {
      title: 'Look for Question Words',
      description: 'If you see "How" or "What", it usually comes at the start of the sentence.',
      icon: '❓'
    },
    {
      title: 'Subject comes before Action',
      description: 'In English, we usually put who is doing something (I, You) before what they are doing.',
      icon: '👤'
    },
    {
      title: 'Use Context Clues',
      description: 'Look at the emoji for a hint about what the sentence might be about.',
      icon: '🔍'
    },
    {
      title: 'Common Patterns',
      description: 'Many greetings start with "Good" (Good morning, Good bye). "I am" goes together.',
      icon: '🔄'
    }
  ];

  const examples = [
    {
      wrong: 'you how are',
      correct: 'How are you',
      explanation: 'Question words like "How" come first'
    },
    {
      wrong: 'am I hungry',
      correct: 'I am hungry',
      explanation: '"I" comes before "am"'
    },
    {
      wrong: 'morning good',
      correct: 'Good morning',
      explanation: '"Good" comes before the time of day'
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Tips Section */}
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 mb-4">
            <h1 className="text-2xl font-bold text-center mb-6">Helpful Tips for Building Sentences</h1>
            
            <div className="grid gap-2 md:gap-4">
              {tips.map((tip, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 rounded-lg p-2 md:p-4 flex flex-col md:flex-row items-center gap-2 md:gap-4"
                >
                  <span className="text-4xl">{tip.icon}</span>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-lg font-semibold text-blue-700">{tip.title}</h2>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Examples Section */}
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h2 className="text-xl font-bold text-center mb-6">Examples</h2>
            
            <div className="grid gap-2 md:gap-4">
              {examples.map((example, index) => (
                <div 
                  key={index}
                  className="bg-pink-50 rounded-lg p-2 md:p-4"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">❌</span>
                      <p className="text-red-600">{example.wrong}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <p className="text-green-600 font-semibold">{example.correct}</p>
                    </div>
                    <p className="text-gray-600 mt-1">{example.explanation}</p>
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

export default SentenceBuildingTips; 