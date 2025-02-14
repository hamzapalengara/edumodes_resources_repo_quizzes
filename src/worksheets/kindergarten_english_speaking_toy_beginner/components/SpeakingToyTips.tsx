import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingToyTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Be Polite',
      emoji: '🙏',
      description: 'Always use polite words when asking for something',
      examples: [
        'Please can I have...',
        'Thank you so much',
        'I would really like...'
      ]
    },
    {
      title: 'Show Responsibility',
      emoji: '✨',
      description: 'Demonstrate that you can be trusted with the toy',
      examples: [
        'I will take good care of it',
        'I promise to keep it safe',
        'I will share with others'
      ]
    },
    {
      title: 'Explain Why',
      emoji: '💡',
      description: 'Tell why you want the toy and how it will be useful',
      examples: [
        'It will help me learn...',
        'I can use it to...',
        'It teaches me about...'
      ]
    },
    {
      title: 'Offer Help',
      emoji: '🤝',
      description: 'Show willingness to earn the toy through good behavior',
      examples: [
        'I can help with chores',
        'I will keep my room clean',
        'I can help with dishes'
      ]
    },
    {
      title: 'Accept the Answer',
      emoji: '🌟',
      description: 'Be understanding of the final decision',
      examples: [
        'I understand if not now',
        'Thank you for considering',
        'Maybe next time then'
      ]
    }
  ];

  const usefulPhrases = [
    {
      category: 'Making Requests',
      emoji: '🎯',
      phrases: [
        'May I please have...',
        'Would it be possible to...',
        'I was wondering if...',
        'Could we please...'
      ]
    },
    {
      category: 'Showing Gratitude',
      emoji: '💝',
      phrases: [
        'Thank you so much',
        'I really appreciate it',
        'You are the best',
        'This means a lot to me'
      ]
    },
    {
      category: 'Making Promises',
      emoji: '🤞',
      phrases: [
        'I promise to...',
        'You can trust me to...',
        'I will make sure to...',
        'I will be responsible'
      ]
    },
    {
      category: 'Offering Help',
      emoji: '💪',
      phrases: [
        'I can help with...',
        'Let me do...',
        'I will take care of...',
        'I can manage...'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 mx-2 md:mx-4 border-2 border-pink-200">
          <h1 className="text-2xl font-bold text-pink-700 mb-6">
            🎁 Tips for Asking for a Toy
          </h1>

          {/* Speaking Tips */}
          <div className="space-y-6">
            {speakingTips.map((tip, index) => (
              <div key={index} className="bg-pink-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-pink-700 mb-2 flex items-center">
                  <span className="text-2xl mr-2">{tip.emoji}</span>
                  {tip.title}
                </h2>
                <p className="text-pink-600 mb-3">{tip.description}</p>
                <ul className="space-y-2 text-pink-700">
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
            <h2 className="text-xl font-bold text-pink-700 mb-4">
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
                Practice your request in front of a mirror first
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                Use a calm and clear voice when speaking
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                Think about what responsibilities you can handle
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                Listen carefully to the response
              </li>
              <li className="flex items-start">
                <span className="mr-2">5.</span>
                Show appreciation whether the answer is yes or no
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingToyTips; 