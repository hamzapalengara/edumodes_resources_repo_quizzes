import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingHomeworkTips: React.FC = () => {
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
      description: 'Be positive about your homework and learning',
      examples: [
        'Yes, I enjoyed doing it!',
        'I learned new things',
        'I want to learn more'
      ]
    },
    {
      title: 'Listen Carefully',
      emoji: '👂',
      description: 'Pay attention to your teacher\'s questions',
      examples: [
        'Look at teacher when speaking',
        'Wait for questions to finish',
        'Think before answering'
      ]
    },
    {
      title: 'Be Responsible',
      emoji: '📚',
      description: 'Show that you take homework seriously',
      examples: [
        'Complete all exercises',
        'Check your work',
        'Ask for help if needed'
      ]
    },
    {
      title: 'Show Progress',
      emoji: '📈',
      description: 'Talk about what you\'ve learned',
      examples: [
        'Share your improvements',
        'Explain your methods',
        'Show your work'
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
      emoji: '👨‍👩‍👧',
      steps: [
        'Ask family to practice with you',
        'Take turns being teacher',
        'Try different questions',
        'Get feedback on speaking'
      ]
    }
  ];

  const reminders = [
    {
      text: 'Always be polite and respectful',
      emoji: '🙏'
    },
    {
      text: 'It\'s okay to ask for help',
      emoji: '❓'
    },
    {
      text: 'Practice makes your speaking better',
      emoji: '⭐'
    },
    {
      text: 'Show pride in your work',
      emoji: '🌟'
    },
    {
      text: 'Enjoy learning new things',
      emoji: '📚'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-teal-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">
              Tips for Speaking with Teacher
            </h1>

            {/* Main Speaking Tips */}
            <div className="space-y-4 mb-8">
              {speakingTips.map((tip, index) => (
                <div 
                  key={index}
                  className={`rounded-lg p-4 ${
                    index % 2 === 0 ? 'bg-purple-50' : 'bg-teal-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h2 className={`text-lg font-bold ${
                      index % 2 === 0 ? 'text-purple-800' : 'text-teal-800'
                    }`}>
                      {tip.title}
                    </h2>
                  </div>
                  
                  <p className={`mb-3 ${
                    index % 2 === 0 ? 'text-purple-700' : 'text-teal-700'
                  }`}>
                    {tip.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tip.examples.map((example, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          index % 2 === 0 
                            ? 'bg-white text-purple-600 border border-purple-200' 
                            : 'bg-white text-teal-600 border border-teal-200'
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
              <h2 className="text-xl font-bold text-center text-purple-600 mb-4">
                Fun Ways to Practice
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practiceActivities.map((activity, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-4 ${
                      index % 2 === 0 ? 'bg-purple-50' : 'bg-teal-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{activity.emoji}</span>
                      <h3 className={`font-bold ${
                        index % 2 === 0 ? 'text-purple-800' : 'text-teal-800'
                      }`}>
                        {activity.title}
                      </h3>
                    </div>
                    
                    <ol className="space-y-2 pl-4">
                      {activity.steps.map((step, i) => (
                        <li 
                          key={i}
                          className={`list-decimal ${
                            index % 2 === 0 ? 'text-purple-700' : 'text-teal-700'
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
            <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg p-4">
              <h2 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
                <span>💝</span> Remember:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reminders.map((reminder, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white rounded-lg p-3"
                  >
                    <span className="text-2xl">{reminder.emoji}</span>
                    <p className={index % 2 === 0 ? 'text-purple-700' : 'text-teal-700'}>
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

export default SpeakingHomeworkTips; 