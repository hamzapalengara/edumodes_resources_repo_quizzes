import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingDadTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Speak Clearly',
      emoji: '🗣️',
      description: 'Take your time and pronounce each word clearly',
      examples: [
        'Speak at a normal pace',
        'Open your mouth when speaking',
        'Practice in front of a mirror'
      ]
    },
    {
      title: 'Show Enthusiasm',
      emoji: '✨',
      description: 'Be excited and positive when talking with Dad',
      examples: [
        'Yes, I\'d love to play!',
        'That sounds fun!',
        'I\'m ready to learn'
      ]
    },
    {
      title: 'Listen Carefully',
      emoji: '👂',
      description: 'Pay attention to Dad\'s instructions',
      examples: [
        'Look at Dad when he speaks',
        'Wait for him to finish',
        'Follow his guidance'
      ]
    },
    {
      title: 'Be Responsible',
      emoji: '📚',
      description: 'Show that you can handle responsibilities',
      examples: [
        'Finish homework first',
        'Follow safety rules',
        'Listen to instructions'
      ]
    },
    {
      title: 'Show Gratitude',
      emoji: '💝',
      description: 'Thank Dad for spending time with you',
      examples: [
        'Thank you for playing',
        'Thanks for teaching me',
        'I had fun with you'
      ]
    }
  ];

  const practiceActivities = [
    {
      title: 'Mirror Practice',
      emoji: '🪞',
      steps: [
        'Stand in front of a mirror',
        'Practice the responses',
        'Watch how you speak',
        'Try different expressions'
      ]
    },
    {
      title: 'Record Your Voice',
      emoji: '🎤',
      steps: [
        'Use a phone to record yourself',
        'Listen to how you sound',
        'Practice speaking clearly',
        'Try to improve each time'
      ]
    },
    {
      title: 'Practice with Family',
      emoji: '👨‍👦',
      steps: [
        'Ask family to practice with you',
        'Take turns being Dad',
        'Try different scenarios',
        'Get feedback on your speaking'
      ]
    }
  ];

  const reminders = [
    {
      text: 'Always be respectful and polite',
      emoji: '🙏'
    },
    {
      text: 'It\'s okay to ask Dad to repeat something',
      emoji: '🔄'
    },
    {
      text: 'Practice makes your speaking better',
      emoji: '⭐'
    },
    {
      text: 'Smile while you speak',
      emoji: '😊'
    },
    {
      text: 'Have fun learning together',
      emoji: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Tips for Speaking Practice with Dad
            </h1>

            {/* Main Speaking Tips */}
            <div className="space-y-4 mb-8">
              {speakingTips.map((tip, index) => (
                <div 
                  key={index}
                  className={`rounded-lg p-4 ${
                    index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h2 className={`text-lg font-bold ${
                      index % 2 === 0 ? 'text-blue-800' : 'text-green-800'
                    }`}>
                      {tip.title}
                    </h2>
                  </div>
                  
                  <p className={`mb-3 ${
                    index % 2 === 0 ? 'text-blue-700' : 'text-green-700'
                  }`}>
                    {tip.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tip.examples.map((example, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          index % 2 === 0 
                            ? 'bg-white text-blue-600 border border-blue-200' 
                            : 'bg-white text-green-600 border border-green-200'
                        }`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Practice Activities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-blue-600 mb-4">
                Fun Ways to Practice
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practiceActivities.map((activity, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-4 ${
                      index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{activity.emoji}</span>
                      <h3 className={`font-bold ${
                        index % 2 === 0 ? 'text-blue-800' : 'text-green-800'
                      }`}>
                        {activity.title}
                      </h3>
                    </div>
                    
                    <ol className="space-y-2 pl-4">
                      {activity.steps.map((step, i) => (
                        <li 
                          key={i}
                          className={`list-decimal ${
                            index % 2 === 0 ? 'text-blue-700' : 'text-green-700'
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
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
              <h2 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span>💝</span> Remember:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reminders.map((reminder, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white rounded-lg p-3"
                  >
                    <span className="text-2xl">{reminder.emoji}</span>
                    <p className={index % 2 === 0 ? 'text-blue-700' : 'text-green-700'}>
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

export default SpeakingDadTips; 