import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingBirthdayTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Show Interest',
      emoji: '😊',
      description: 'Be enthusiastic when responding to the invitation',
      examples: [
        'That sounds amazing!',
        'How exciting!',
        'I would love to come!'
      ]
    },
    {
      title: 'Ask Questions',
      emoji: '❓',
      description: 'Get important information about the party',
      examples: [
        'What time is the party?',
        'Where is it being held?',
        'What activities will there be?'
      ]
    },
    {
      title: 'Be Considerate',
      emoji: '🤝',
      description: 'Think about practical details and arrangements',
      examples: [
        'Should I bring anything?',
        'What time does it finish?',
        'Can my sibling come too?'
      ]
    },
    {
      title: 'Show Gratitude',
      emoji: '💝',
      description: 'Express thanks for being invited',
      examples: [
        'Thank you for inviting me!',
        'That\'s so kind of you!',
        'I\'m really looking forward to it!'
      ]
    },
    {
      title: 'Confirm Details',
      emoji: '📝',
      description: 'Make sure you have all necessary information',
      examples: [
        'Could you write down the address?',
        'Is it this Saturday?',
        'Should I bring party clothes?'
      ]
    }
  ];

  const usefulPhrases = [
    {
      category: 'Expressing Excitement',
      emoji: '✨',
      phrases: [
        'That sounds wonderful!',
        'I can\'t wait!',
        'How exciting!',
        'It will be so much fun!'
      ]
    },
    {
      category: 'Asking About Details',
      emoji: '🎯',
      phrases: [
        'What time should I arrive?',
        'Where exactly is it?',
        'How long will it last?',
        'What should I wear?'
      ]
    },
    {
      category: 'Showing Gratitude',
      emoji: '🙏',
      phrases: [
        'Thank you for inviting me',
        'That\'s so nice of you',
        'I really appreciate it',
        'How thoughtful of you'
      ]
    },
    {
      category: 'Making Plans',
      emoji: '📅',
      phrases: [
        'I\'ll make sure to be there',
        'Should I bring anything?',
        'I\'ll ask my parents',
        'See you on Saturday!'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 mx-2 md:mx-4 border-2 border-blue-200">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">
            🎂 Tips for Birthday Party Conversation
          </h1>

          {/* Speaking Tips */}
          <div className="space-y-6">
            {speakingTips.map((tip, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                  <span className="text-2xl mr-2">{tip.emoji}</span>
                  {tip.title}
                </h2>
                <p className="text-blue-600 mb-3">{tip.description}</p>
                <ul className="space-y-2 text-blue-700">
                  {tip.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Useful Phrases */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              🗣️ Useful Phrases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {usefulPhrases.map((category, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">{category.emoji}</span>
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.phrases.map((phrase, idx) => (
                      <div 
                        key={idx}
                        className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-sm"
                      >
                        {phrase}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Tips */}
          <div className="mt-8 bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Practice Tips
            </h2>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                Listen carefully to all party details
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                Ask questions if something isn\'t clear
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                Show excitement and gratitude
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                Write down important information
              </li>
              <li className="flex items-start">
                <span className="mr-2">5.</span>
                Confirm your attendance clearly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingBirthdayTips; 