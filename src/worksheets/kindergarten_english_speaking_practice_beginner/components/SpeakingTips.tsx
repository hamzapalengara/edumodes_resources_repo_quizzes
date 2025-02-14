import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Speak Clearly',
      emoji: '🗣️',
      description: 'Take your time and say each word clearly',
      examples: [
        'Don\'t rush your words',
        'Open your mouth when speaking',
        'Practice in front of a mirror'
      ]
    },
    {
      title: 'Use Polite Words',
      emoji: '✨',
      description: 'Remember to use kind and polite words when talking',
      examples: [
        'Please',
        'Thank you',
        'You\'re welcome',
        'May I'
      ]
    },
    {
      title: 'Listen Carefully',
      emoji: '👂',
      description: 'Pay attention to what Mom is saying',
      examples: [
        'Look at Mom when she speaks',
        'Wait for her to finish',
        'Think about her words'
      ]
    },
    {
      title: 'Show Your Feelings',
      emoji: '❤️',
      description: 'Let Mom know how you feel with your words',
      examples: [
        'I love you',
        'I\'m happy to help',
        'That sounds fun'
      ]
    },
    {
      title: 'Answer Questions',
      emoji: '💭',
      description: 'Give complete answers to questions',
      examples: [
        'Yes, I did my homework',
        'No, I haven\'t had breakfast',
        'I would like pancakes please'
      ]
    }
  ];

  const practiceActivities = [
    {
      title: 'Mirror Practice',
      emoji: '🪞',
      steps: [
        'Stand in front of a mirror',
        'Practice saying the responses',
        'Watch how your mouth moves',
        'Speak slowly and clearly'
      ]
    },
    {
      title: 'Record Yourself',
      emoji: '🎤',
      steps: [
        'Use a phone to record your voice',
        'Listen to how you sound',
        'Try to speak more clearly',
        'Practice until you\'re happy'
      ]
    },
    {
      title: 'Practice with Family',
      emoji: '👨‍👩‍👧',
      steps: [
        'Ask family members to practice',
        'Take turns being Mom',
        'Try different conversations',
        'Ask for feedback'
      ]
    }
  ];

  const reminders = [
    {
      text: 'Take deep breaths if you feel nervous',
      emoji: '😌'
    },
    {
      text: 'It\'s okay to ask Mom to repeat something',
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
      text: 'Be confident in your voice',
      emoji: '💪'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Tips for Speaking Practice
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

export default SpeakingTips; 