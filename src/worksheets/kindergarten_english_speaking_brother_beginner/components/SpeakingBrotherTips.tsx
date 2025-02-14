import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingBrotherTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Be Kind and Patient',
      emoji: '💝',
      description: 'Always speak with kindness to your brother',
      examples: [
        'Use gentle words',
        'Wait for your turn',
        'Listen carefully'
      ]
    },
    {
      title: 'Show Enthusiasm',
      emoji: '✨',
      description: 'Be excited when playing together',
      examples: [
        'Yes, let\'s play!',
        'That sounds fun!',
        'Great idea!'
      ]
    },
    {
      title: 'Share and Care',
      emoji: '🤝',
      description: 'Use sharing and caring words',
      examples: [
        'We can share',
        'Let\'s do it together',
        'Thank you for sharing'
      ]
    },
    {
      title: 'Give Compliments',
      emoji: '🌟',
      description: 'Say nice things to your brother',
      examples: [
        'Good job!',
        'That\'s amazing!',
        'You\'re so creative!'
      ]
    },
    {
      title: 'Show Love',
      emoji: '❤️',
      description: 'Express your love and care',
      examples: [
        'I love you',
        'You\'re the best',
        'I\'m glad you\'re my brother'
      ]
    }
  ];

  const practiceActivities = [
    {
      title: 'Building Together',
      emoji: '🏰',
      steps: [
        'Plan what to build',
        'Share materials',
        'Help each other',
        'Celebrate together'
      ]
    },
    {
      title: 'Playing Games',
      emoji: '🎮',
      steps: [
        'Take turns choosing',
        'Follow rules',
        'Cheer each other',
        'Have fun together'
      ]
    },
    {
      title: 'Helping Time',
      emoji: '📚',
      steps: [
        'Ask how to help',
        'Listen carefully',
        'Be patient',
        'Celebrate success'
      ]
    }
  ];

  const reminders = [
    {
      text: 'Always be kind',
      emoji: '💖'
    },
    {
      text: 'Share and take turns',
      emoji: '🤝'
    },
    {
      text: 'Help each other',
      emoji: '🌟'
    },
    {
      text: 'Show your love',
      emoji: '❤️'
    },
    {
      text: 'Have fun together',
      emoji: '✨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-amber-600 mb-6">
              Tips for Talking with Your Brother
            </h1>

            {/* Main Speaking Tips */}
            <div className="space-y-4 mb-8">
              {speakingTips.map((tip, index) => (
                <div 
                  key={index}
                  className={`rounded-lg p-4 ${
                    index % 2 === 0 ? 'bg-amber-50' : 'bg-orange-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h2 className={`text-lg font-bold ${
                      index % 2 === 0 ? 'text-amber-800' : 'text-orange-800'
                    }`}>
                      {tip.title}
                    </h2>
                  </div>
                  
                  <p className={`mb-3 ${
                    index % 2 === 0 ? 'text-amber-700' : 'text-orange-700'
                  }`}>
                    {tip.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tip.examples.map((example, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          index % 2 === 0 
                            ? 'bg-white text-amber-600 border border-amber-200' 
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

            {/* Practice Activities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-amber-600 mb-4">
                Fun Activities with Your Brother
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practiceActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{activity.emoji}</span>
                      <h3 className="font-bold text-amber-800">
                        {activity.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      {activity.steps.map((step, i) => (
                        <div 
                          key={i}
                          className="bg-white rounded-lg px-3 py-2 text-orange-700"
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reminders */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4">
              <h2 className="text-lg font-bold text-amber-800 mb-4">
                Important Reminders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reminders.map((reminder, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 flex items-center gap-2"
                  >
                    <span className="text-2xl">{reminder.emoji}</span>
                    <p className="text-orange-700">{reminder.text}</p>
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

export default SpeakingBrotherTips; 