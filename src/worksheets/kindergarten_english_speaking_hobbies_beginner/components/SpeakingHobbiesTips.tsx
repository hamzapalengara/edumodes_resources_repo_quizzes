import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingHobbiesTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Share Your Hobbies',
      emoji: '🌟',
      description: 'Tell others about activities you enjoy',
      examples: [
        'I like playing soccer',
        'Drawing is my favorite',
        'I enjoy reading books',
        'I love making music'
      ]
    },
    {
      title: 'Show Interest',
      emoji: '👂',
      description: 'Listen and ask about others\' hobbies',
      examples: [
        'That sounds fun!',
        'How often do you practice?',
        'What do you like about it?',
        'Can you teach me?'
      ]
    },
    {
      title: 'Use Details',
      emoji: '🎯',
      description: 'Give specific information about your hobbies',
      examples: [
        'I play every weekend',
        'I draw animals and flowers',
        'I read adventure books',
        'I practice piano daily'
      ]
    },
    {
      title: 'Be Enthusiastic',
      emoji: '✨',
      description: 'Show excitement when talking about hobbies',
      examples: [
        'I love playing sports!',
        'Drawing is so much fun!',
        'Books are amazing!',
        'Music makes me happy!'
      ]
    },
    {
      title: 'Try New Things',
      emoji: '🎨',
      description: 'Be open to learning about new hobbies',
      examples: [
        'That looks interesting',
        'I want to try that',
        'Can you show me how?',
        'Let\'s do it together'
      ]
    }
  ];

  const hobbyVocabulary = [
    {
      title: 'Sports',
      emoji: '⚽',
      words: [
        'Soccer',
        'Basketball',
        'Swimming',
        'Running',
        'Tennis',
        'Dancing'
      ]
    },
    {
      title: 'Art',
      emoji: '🎨',
      words: [
        'Drawing',
        'Painting',
        'Coloring',
        'Crafts',
        'Origami',
        'Sculpting'
      ]
    },
    {
      title: 'Music',
      emoji: '🎵',
      words: [
        'Piano',
        'Guitar',
        'Singing',
        'Drums',
        'Violin',
        'Dancing'
      ]
    }
  ];

  const practiceActivities = [
    {
      title: 'Hobby Show & Tell',
      emoji: '🎭',
      steps: [
        'Bring your hobby items',
        'Show them to friends',
        'Explain what you do',
        'Answer questions'
      ]
    },
    {
      title: 'Hobby Interview',
      emoji: '🎤',
      steps: [
        'Find a partner',
        'Ask about their hobbies',
        'Take turns sharing',
        'Learn something new'
      ]
    },
    {
      title: 'Try Together',
      emoji: '🤝',
      steps: [
        'Choose a new hobby',
        'Learn with friends',
        'Help each other',
        'Have fun learning'
      ]
    }
  ];

  const reminders = [
    {
      text: 'Everyone has different hobbies',
      emoji: '🌈'
    },
    {
      text: 'Be kind and supportive',
      emoji: '💝'
    },
    {
      text: 'Practice makes you better',
      emoji: '⭐'
    },
    {
      text: 'Try new things',
      emoji: '🎯'
    },
    {
      text: 'Have fun learning',
      emoji: '😊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-sky-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-violet-600 mb-6">
              Tips for Talking About Hobbies
            </h1>

            {/* Main Speaking Tips */}
            <div className="space-y-4 mb-8">
              {speakingTips.map((tip, index) => (
                <div 
                  key={index}
                  className={`rounded-lg p-4 ${
                    index % 2 === 0 ? 'bg-violet-50' : 'bg-sky-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h2 className={`text-lg font-bold ${
                      index % 2 === 0 ? 'text-violet-800' : 'text-sky-800'
                    }`}>
                      {tip.title}
                    </h2>
                  </div>
                  
                  <p className={`mb-3 ${
                    index % 2 === 0 ? 'text-violet-700' : 'text-sky-700'
                  }`}>
                    {tip.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tip.examples.map((example, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          index % 2 === 0 
                            ? 'bg-white text-violet-600 border border-violet-200' 
                            : 'bg-white text-sky-600 border border-sky-200'
                        }`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Hobby Vocabulary */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-violet-600 mb-4">
                Hobby Words to Know
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hobbyVocabulary.map((category, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-violet-50 to-sky-50 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{category.emoji}</span>
                      <h3 className="font-bold text-violet-800">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.words.map((word, i) => (
                        <div 
                          key={i}
                          className="bg-white rounded-lg px-3 py-2 text-sky-700"
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
              <h2 className="text-xl font-bold text-center text-violet-600 mb-4">
                Fun Ways to Practice
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practiceActivities.map((activity, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-4 ${
                      index % 2 === 0 ? 'bg-violet-50' : 'bg-sky-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{activity.emoji}</span>
                      <h3 className={`font-bold ${
                        index % 2 === 0 ? 'text-violet-800' : 'text-sky-800'
                      }`}>
                        {activity.title}
                      </h3>
                    </div>
                    
                    <ol className="space-y-2 pl-4">
                      {activity.steps.map((step, i) => (
                        <li 
                          key={i}
                          className={`list-decimal ${
                            index % 2 === 0 ? 'text-violet-700' : 'text-sky-700'
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
            <div className="bg-gradient-to-r from-violet-50 to-sky-50 rounded-lg p-4">
              <h2 className="text-lg font-bold text-violet-800 mb-3 flex items-center gap-2">
                <span>💝</span> Remember:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reminders.map((reminder, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white rounded-lg p-3"
                  >
                    <span className="text-2xl">{reminder.emoji}</span>
                    <p className={index % 2 === 0 ? 'text-violet-700' : 'text-sky-700'}>
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

export default SpeakingHobbiesTips; 