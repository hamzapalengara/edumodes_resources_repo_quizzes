import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingShopTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Greetings',
      emoji: '👋',
      description: 'Start every shopping conversation with a friendly greeting',
      examples: [
        'Good morning!',
        'Good afternoon!',
        'Hello!',
        'Hi there!'
      ]
    },
    {
      title: 'Being Polite',
      emoji: '🙏',
      description: 'Always use polite words when shopping',
      examples: [
        'Please',
        'Thank you',
        'You\'re welcome',
        'Excuse me'
      ]
    },
    {
      title: 'Making Requests',
      emoji: '🎯',
      description: 'Learn how to ask for what you want',
      examples: [
        'I would like...',
        'Can I have...',
        'May I see...',
        'How much is...'
      ]
    },
    {
      title: 'Numbers and Quantities',
      emoji: '🔢',
      description: 'Practice saying numbers and amounts',
      examples: [
        'One piece',
        'Two chocolates',
        'Three dollars',
        'A few candies'
      ]
    },
    {
      title: 'Saying Goodbye',
      emoji: '✨',
      description: 'End your shopping trip politely',
      examples: [
        'Thank you, goodbye!',
        'Have a nice day!',
        'See you next time!',
        'Goodbye!'
      ]
    }
  ];

  const candyVocabulary = [
    {
      title: 'Types of Candy',
      emoji: '🍬',
      words: [
        'Lollipop',
        'Chocolate',
        'Gummy bears',
        'Hard candy',
        'Candy cane',
        'Jelly beans'
      ]
    },
    {
      title: 'Colors',
      emoji: '🌈',
      words: [
        'Red candy',
        'Blue lollipop',
        'Green gummy',
        'Yellow candy',
        'Pink sweet',
        'Rainbow candy'
      ]
    },
    {
      title: 'Flavors',
      emoji: '🍓',
      words: [
        'Strawberry',
        'Chocolate',
        'Vanilla',
        'Apple',
        'Orange',
        'Grape'
      ]
    }
  ];

  const practiceActivities = [
    {
      title: 'Role Play',
      emoji: '🎭',
      steps: [
        'Practice with family',
        'Take turns being shopkeeper',
        'Use toy money',
        'Practice counting change'
      ]
    },
    {
      title: 'Memory Game',
      emoji: '🧠',
      steps: [
        'Name different candies',
        'Remember prices',
        'Practice greetings',
        'Learn new words'
      ]
    },
    {
      title: 'Shopping List',
      emoji: '📝',
      steps: [
        'Write down candies',
        'Practice saying each item',
        'Add quantities',
        'Calculate total cost'
      ]
    }
  ];

  const reminders = [
    {
      text: 'Speak clearly and slowly',
      emoji: '🗣️'
    },
    {
      text: 'Listen carefully to prices',
      emoji: '👂'
    },
    {
      text: 'Count your money carefully',
      emoji: '💰'
    },
    {
      text: 'Keep your receipt',
      emoji: '🧾'
    },
    {
      text: 'Say thank you',
      emoji: '💝'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Tips for Shopping at the Candy Shop
            </h1>

            {/* Main Speaking Tips */}
            <div className="space-y-4 mb-8">
              {speakingTips.map((tip, index) => (
                <div 
                  key={index}
                  className={`rounded-lg p-4 ${
                    index % 2 === 0 ? 'bg-pink-50' : 'bg-orange-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h2 className={`text-lg font-bold ${
                      index % 2 === 0 ? 'text-pink-800' : 'text-orange-800'
                    }`}>
                      {tip.title}
                    </h2>
                  </div>
                  
                  <p className={`mb-3 ${
                    index % 2 === 0 ? 'text-pink-700' : 'text-orange-700'
                  }`}>
                    {tip.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tip.examples.map((example, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          index % 2 === 0 
                            ? 'bg-white text-pink-600 border border-pink-200' 
                            : 'bg-white text-orange-600 border border-orange-200'
                        }`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Candy Vocabulary */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-pink-600 mb-4">
                Candy Shop Words
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {candyVocabulary.map((category, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{category.emoji}</span>
                      <h3 className="font-bold text-pink-800">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.words.map((word, i) => (
                        <div 
                          key={i}
                          className="bg-white rounded-lg px-3 py-2 text-orange-700"
                        >
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Activities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-pink-600 mb-4">
                Fun Ways to Practice
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practiceActivities.map((activity, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-4 ${
                      index % 2 === 0 ? 'bg-pink-50' : 'bg-orange-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{activity.emoji}</span>
                      <h3 className={`font-bold ${
                        index % 2 === 0 ? 'text-pink-800' : 'text-orange-800'
                      }`}>
                        {activity.title}
                      </h3>
                    </div>
                    
                    <ol className="space-y-2 pl-4">
                      {activity.steps.map((step, i) => (
                        <li 
                          key={i}
                          className={`list-decimal ${
                            index % 2 === 0 ? 'text-pink-700' : 'text-orange-700'
                          }`}
                        >
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>

            {/* Helpful Reminders */}
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-4">
              <h2 className="text-lg font-bold text-pink-800 mb-3 flex items-center gap-2">
                <span>💝</span> Remember:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reminders.map((reminder, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white rounded-lg p-3"
                  >
                    <span className="text-2xl">{reminder.emoji}</span>
                    <p className={index % 2 === 0 ? 'text-pink-700' : 'text-orange-700'}>
                      {reminder.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingShopTips; 