import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingPetTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Use a Gentle Voice',
      emoji: '🗣️',
      description: 'Speak softly and kindly to your pet',
      examples: [
        'Use a calm tone',
        'Speak with warmth',
        'Show love in your voice'
      ]
    },
    {
      title: 'Show Enthusiasm',
      emoji: '✨',
      description: 'Be excited when praising your pet',
      examples: [
        'Good job!',
        'You\'re so smart!',
        'Well done buddy!'
      ]
    },
    {
      title: 'Give Clear Commands',
      emoji: '👆',
      description: 'Use simple and clear words',
      examples: [
        'Let\'s go for a walk',
        'Time for dinner',
        'Come here buddy'
      ]
    },
    {
      title: 'Show Affection',
      emoji: '❤️',
      description: 'Express your love for your pet',
      examples: [
        'I love you',
        'You\'re my best friend',
        'Good boy/girl'
      ]
    },
    {
      title: 'Be Patient',
      emoji: '🌟',
      description: 'Take your time when speaking',
      examples: [
        'Speak slowly',
        'Repeat if needed',
        'Stay calm'
      ]
    }
  ];

  const practiceActivities = [
    {
      title: 'Morning Greetings',
      emoji: '🌅',
      steps: [
        'Say good morning',
        'Ask how they slept',
        'Show your happiness',
        'Give gentle pets'
      ]
    },
    {
      title: 'Playtime Talk',
      emoji: '⚾',
      steps: [
        'Invite them to play',
        'Praise their tricks',
        'Show excitement',
        'Give encouragement'
      ]
    },
    {
      title: 'Quiet Time',
      emoji: '😴',
      steps: [
        'Use soft voice',
        'Give calm praise',
        'Speak soothingly',
        'Show gentleness'
      ]
    }
  ];

  const reminders = [
    {
      text: 'Always be kind and gentle',
      emoji: '💝'
    },
    {
      text: 'Pets understand your tone',
      emoji: '🎵'
    },
    {
      text: 'Practice makes perfect',
      emoji: '⭐'
    },
    {
      text: 'Show lots of love',
      emoji: '❤️'
    },
    {
      text: 'Have fun together',
      emoji: '🌟'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
              Tips for Talking with Your Dog
            </h1>

            {/* Main Speaking Tips */}
            <div className="space-y-4 mb-8">
              {speakingTips.map((tip, index) => (
                <div 
                  key={index}
                  className={`rounded-lg p-4 ${
                    index % 2 === 0 ? 'bg-indigo-50' : 'bg-purple-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h2 className={`text-lg font-bold ${
                      index % 2 === 0 ? 'text-indigo-800' : 'text-purple-800'
                    }`}>
                      {tip.title}
                    </h2>
                  </div>
                  
                  <p className={`mb-3 ${
                    index % 2 === 0 ? 'text-indigo-700' : 'text-purple-700'
                  }`}>
                    {tip.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tip.examples.map((example, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          index % 2 === 0 
                            ? 'bg-white text-indigo-600 border border-indigo-200' 
                            : 'bg-white text-purple-600 border border-purple-200'
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
              <h2 className="text-xl font-bold text-center text-indigo-600 mb-4">
                Fun Practice Activities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practiceActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{activity.emoji}</span>
                      <h3 className="font-bold text-indigo-800">
                        {activity.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      {activity.steps.map((step, i) => (
                        <div 
                          key={i}
                          className="bg-white rounded-lg px-3 py-2 text-purple-700"
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
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
              <h2 className="text-lg font-bold text-indigo-800 mb-4">
                Important Reminders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reminders.map((reminder, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 flex items-center gap-2"
                  >
                    <span className="text-2xl">{reminder.emoji}</span>
                    <p className="text-purple-700">{reminder.text}</p>
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

export default SpeakingPetTips; 