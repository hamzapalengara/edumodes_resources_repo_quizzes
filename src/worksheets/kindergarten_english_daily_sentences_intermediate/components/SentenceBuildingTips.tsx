import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SentenceBuildingTips: React.FC = () => {
  const tips = [
    {
      title: 'Start with the Main Parts',
      description: 'Look for the subject (who/what) and verb (action) first. These are the core of your sentence.',
      icon: '🎯',
      example: 'In "I am looking forward to it", start with "I am"'
    },
    {
      title: 'Find Question Words',
      description: 'Words like "How", "Would", "Could" usually come at the start of questions.',
      icon: '❓',
      example: 'In "How are you feeling today", "How" comes first'
    },
    {
      title: 'Look for Polite Words',
      description: 'Words like "please" and "thank you" are important in polite sentences.',
      icon: '🙏',
      example: 'In "Would you please help me", "please" makes it more polite'
    },
    {
      title: 'Time Words Go Last',
      description: 'Words about time (today, soon, again) usually go at the end of the sentence.',
      icon: '⏰',
      example: 'In "Hope to see you again soon", "soon" is at the end'
    },
    {
      title: 'Use Helper Words',
      description: 'Small words like "a", "the", "to", "with" help connect the main parts of the sentence.',
      icon: '🔄',
      example: 'In "I had a wonderful time with you", "a" and "with" are helper words'
    }
  ];

  const commonPatterns = [
    {
      pattern: 'Polite Requests',
      examples: [
        { wrong: 'help me please', correct: 'Please help me' },
        { wrong: 'repeat that please', correct: 'Could you please repeat that' }
      ]
    },
    {
      pattern: 'Expressing Feelings',
      examples: [
        { wrong: 'happy very to meet you', correct: 'I am so happy to meet you' },
        { wrong: 'looking forward I am', correct: 'I am looking forward to it' }
      ]
    },
    {
      pattern: 'Time Expressions',
      examples: [
        { wrong: 'today how you feeling', correct: 'How are you feeling today' },
        { wrong: 'again hope see you', correct: 'Hope to see you again soon' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Tips Section */}
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 mb-4">
            <h1 className="text-2xl font-bold text-center mb-6">Tips for Building Longer Sentences</h1>
            
            <div className="grid gap-2 md:gap-4">
              {tips.map((tip, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 rounded-lg p-2 md:p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{tip.icon}</span>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-blue-700 mb-2">{tip.title}</h2>
                      <p className="text-gray-600 mb-2">{tip.description}</p>
                      <div className="bg-white rounded p-3">
                        <p className="text-gray-700 text-sm">
                          <span className="font-semibold">Example:</span> {tip.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Patterns Section */}
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h2 className="text-xl font-bold text-center mb-6">Common Sentence Patterns</h2>
            
            <div className="grid gap-4">
              {commonPatterns.map((pattern, index) => (
                <div 
                  key={index}
                  className="bg-yellow-50 rounded-lg p-2 md:p-4"
                >
                  <h3 className="font-semibold text-yellow-800 mb-3">{pattern.pattern}</h3>
                  <div className="space-y-3">
                    {pattern.examples.map((example, i) => (
                      <div key={i} className="bg-white rounded p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-red-500">❌</span>
                          <p className="text-red-600">{example.wrong}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✅</span>
                          <p className="text-green-600 font-semibold">{example.correct}</p>
                        </div>
                      </div>
                    ))}
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