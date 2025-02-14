import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DialogueTips: React.FC = () => {
  const tips = [
    {
      title: 'Use Your Magic Words',
      emoji: '✨',
      description: 'Remember to say "please" and "thank you" when talking to Mom',
      examples: ['Can I have pizza please?', 'Thank you, Mom!', 'Please help me']
    },
    {
      title: 'Show Your Love',
      emoji: '❤️',
      description: 'Tell Mom you love her and give her lots of hugs',
      examples: ['I love you Mom', 'You\'re the best Mom', 'Thank you for helping me']
    },
    {
      title: 'Listen Carefully',
      emoji: '👂',
      description: 'Pay attention when Mom is talking and follow her advice',
      examples: ['Okay, I will', 'I understand', 'I\'ll do that now']
    },
    {
      title: 'Ask Nicely',
      emoji: '🙏',
      description: 'When you want something, ask in a polite way',
      examples: ['May I have...?', 'Could we...?', 'Would it be okay if...?']
    },
    {
      title: 'Share Your Feelings',
      emoji: '🌈',
      description: 'Tell Mom how you feel or if you need help',
      examples: ['I\'m hungry', 'I feel sad', 'I need help with this']
    }
  ];

  const funActivities = [
    {
      title: 'Role Play with Toys',
      emoji: '🧸',
      steps: [
        'Get your favorite stuffed animal',
        'Pretend it\'s talking to Mom',
        'Practice being polite',
        'Give your toy lots of hugs'
      ],
      color: 'pink'
    },
    {
      title: 'Make a Love Card',
      emoji: '💝',
      steps: [
        'Draw a big heart',
        'Write "I love you Mom"',
        'Add lots of stickers',
        'Give it to Mom with a hug'
      ],
      color: 'orange'
    },
    {
      title: 'Practice in the Mirror',
      emoji: '🪞',
      steps: [
        'Stand in front of a mirror',
        'Practice your happy face',
        'Say nice things to Mom',
        'Watch your expressions'
      ],
      color: 'pink'
    }
  ];

  const reminders = [
    {
      text: 'Mom loves you very much',
      emoji: '💖'
    },
    {
      text: 'Being polite makes Mom happy',
      emoji: '😊'
    },
    {
      text: 'Hugs make everything better',
      emoji: '🤗'
    },
    {
      text: 'Listen to Mom\'s advice',
      emoji: '👂'
    },
    {
      text: 'Share your feelings with Mom',
      emoji: '💭'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Tips for Talking with Mom
            </h1>

            {/* Main Tips */}
            <div className="space-y-4 mb-8">
              {tips.map((tip, index) => (
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

            {/* Fun Activities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-pink-600 mb-4">
                Fun Practice Activities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {funActivities.map((activity, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-4 ${
                      activity.color === 'pink' ? 'bg-pink-50' : 'bg-orange-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{activity.emoji}</span>
                      <h3 className={`font-bold ${
                        activity.color === 'pink' ? 'text-pink-800' : 'text-orange-800'
                      }`}>
                        {activity.title}
                      </h3>
                    </div>
                    
                    <ol className="space-y-2 pl-4">
                      {activity.steps.map((step, i) => (
                        <li 
                          key={i} 
                          className={`list-decimal ${
                            activity.color === 'pink' ? 'text-pink-700' : 'text-orange-700'
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

            {/* Special Reminders */}
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-4">
              <h2 className="text-lg font-bold text-pink-800 mb-3 flex items-center gap-2">
                <span>💝</span> Special Reminders
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

export default DialogueTips; 