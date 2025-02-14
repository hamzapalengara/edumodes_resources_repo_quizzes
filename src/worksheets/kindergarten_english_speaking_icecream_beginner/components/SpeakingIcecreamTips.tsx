import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingIcecreamTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Polite Greetings',
      emoji: '👋',
      description: 'Start with a friendly greeting',
      examples: [
        'Hi there!',
        'Good morning/afternoon!',
        'Hello!'
      ]
    },
    {
      title: 'Making Requests',
      emoji: '🎯',
      description: 'Use polite phrases to make your order',
      examples: [
        'I would like..., please',
        'Can I have..., please',
        'May I get..., please'
      ]
    },
    {
      title: 'Asking Questions',
      emoji: '❓',
      description: 'Ask about flavors and options',
      examples: [
        'What flavors do you have?',
        'How much does it cost?',
        'Can I try a sample?'
      ]
    },
    {
      title: 'Showing Gratitude',
      emoji: '🙏',
      description: 'Always remember to say thank you',
      examples: [
        'Thank you very much!',
        'Thanks for your help!',
        'That\'s perfect, thank you!'
      ]
    },
    {
      title: 'Making Choices',
      emoji: '✨',
      description: 'Express your preferences clearly',
      examples: [
        'I prefer it in a cone',
        'I\'d like chocolate flavor',
        'Yes, with sprinkles please'
      ]
    }
  ];

  const usefulPhrases = [
    {
      category: 'Ordering Ice Cream',
      emoji: '🍦',
      phrases: [
        'I would like one scoop please',
        'Can I have it in a cone?',
        'I\'d like chocolate flavor',
        'What toppings do you have?'
      ]
    },
    {
      category: 'Asking About Options',
      emoji: '🤔',
      phrases: [
        'What flavors are available?',
        'Do you have any special toppings?',
        'How much is one scoop?',
        'Is this flavor popular?'
      ]
    },
    {
      category: 'Being Polite',
      emoji: '😊',
      phrases: [
        'Thank you for your help',
        'That sounds delicious',
        'Yes, please',
        'Have a nice day'
      ]
    },
    {
      category: 'Making Payment',
      emoji: '💵',
      phrases: [
        'Here you go',
        'Here is the money',
        'Do you have change?',
        'Can I pay by card?'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 mx-2 md:mx-4 border-2 border-blue-200">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">
            🍦 Tips for Buying Ice Cream
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
                Listen carefully to the available options
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                Speak clearly and use complete sentences
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                Always say "please" and "thank you"
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                Ask questions if you need clarification
              </li>
              <li className="flex items-start">
                <span className="mr-2">5.</span>
                Practice different ways to make polite requests
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingIcecreamTips; 