import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingToypriceTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Asking About Prices',
      emoji: '💰',
      description: 'Different ways to ask about prices',
      examples: [
        'How much is this...?',
        'Can you tell me the price of...?',
        'What does this... cost?',
        'Could you tell me how much... is?'
      ]
    },
    {
      title: 'Polite Greetings',
      emoji: '👋',
      description: 'Start with a friendly greeting',
      examples: [
        'Hi there!',
        'Good morning/afternoon!',
        'Hello, excuse me...',
        'Hi, I was wondering...'
      ]
    },
    {
      title: 'Making Requests',
      emoji: '🎯',
      description: 'Use polite phrases when asking',
      examples: [
        'I would like to know..., please',
        'Could you help me with..., please',
        'I am interested in...',
        'May I ask about...'
      ]
    },
    {
      title: 'Showing Understanding',
      emoji: '💡',
      description: 'Respond to price information',
      examples: [
        'I see, thank you',
        'Oh, that is good to know',
        'Thank you for telling me',
        'I understand, thanks'
      ]
    },
    {
      title: 'Making Decisions',
      emoji: '✨',
      description: 'Express your choice clearly',
      examples: [
        'I will take this one, please',
        'I would like to buy this',
        'Yes, I will get this one',
        'That is perfect, I will buy it'
      ]
    }
  ];

  const usefulPhrases = [
    {
      category: 'Asking About Multiple Items',
      emoji: '🏷️',
      phrases: [
        'And how much is this one?',
        'What about this other toy?',
        'Could you tell me the price of that too?',
        'How much for both of them?'
      ]
    },
    {
      category: 'Discussing Prices',
      emoji: '💵',
      phrases: [
        'Is that the final price?',
        'Does it include everything?',
        'Are there any discounts?',
        'That sounds reasonable'
      ]
    },
    {
      category: 'Making Payment',
      emoji: '💳',
      phrases: [
        'Here is the money',
        'I will pay by cash/card',
        'Do you have change?',
        'Can I get a receipt?'
      ]
    },
    {
      category: 'Extra Services',
      emoji: '🎁',
      phrases: [
        'Do you offer gift wrapping?',
        'Is there a warranty?',
        'Can I return it if needed?',
        'Do you have a gift receipt?'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 mx-2 md:mx-4 border-2 border-blue-200">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">
            💰 Tips for Asking About Prices
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
                Always start with a polite greeting
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                Be specific about which item you are asking about
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                Use "please" and "thank you" frequently
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                Listen carefully to prices and repeat them if needed
              </li>
              <li className="flex items-start">
                <span className="mr-2">5.</span>
                Practice different ways to ask about prices
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingToypriceTips; 