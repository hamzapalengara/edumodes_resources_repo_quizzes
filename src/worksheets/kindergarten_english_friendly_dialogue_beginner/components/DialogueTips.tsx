import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DialogueTips: React.FC = () => {
  const tips = [
    {
      id: 1,
      title: 'Start with a Smile',
      emoji: '😊',
      description: 'Begin your conversation with a friendly smile and greeting',
      examples: ['Hi!', 'Hello!', 'Good morning!']
    },
    {
      id: 2,
      title: 'Use Kind Words',
      emoji: '💝',
      description: 'Choose words that make others feel happy and welcome',
      examples: ['Please', 'Thank you', 'That sounds fun!']
    },
    {
      id: 3,
      title: 'Take Turns',
      emoji: '🔄',
      description: 'Listen when others speak and wait for your turn',
      examples: ['What do you think?', 'Your turn!', 'Tell me more!']
    },
    {
      id: 4,
      title: 'Show Interest',
      emoji: '👂',
      description: 'Pay attention and respond to what your friend says',
      examples: ['Really?', "That's cool!", 'I like that too!']
    },
    {
      id: 5,
      title: 'Be Positive',
      emoji: '⭐',
      description: 'Keep the conversation happy and fun',
      examples: ['Great idea!', "Let's play!", 'This is fun!']
    }
  ];

  const practiceExercises = [
    {
      id: 1,
      title: 'Mirror Practice',
      emoji: '🪞',
      steps: [
        'Stand in front of a mirror',
        'Practice your friendly smile',
        'Say greetings with a happy voice',
        'Watch your facial expressions'
      ]
    },
    {
      id: 2,
      title: 'Role Play with Toys',
      emoji: '🧸',
      steps: [
        'Get two favorite toys',
        'Make them have a friendly talk',
        'Practice different greetings',
        'Take turns for each toy'
      ]
    },
    {
      id: 3,
      title: 'Word Collection Game',
      emoji: '📝',
      steps: [
        'Draw a big smile on paper',
        'Write kind words around it',
        'Practice using these words',
        'Add new words you learn'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
              How to Have Friendly Conversations
            </h1>

            {/* Tips Section */}
            <div className="space-y-4">
              {tips.map((tip) => (
                <div key={tip.id} className="bg-blue-50 rounded-lg p-2 md:p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h2 className="text-lg font-bold text-blue-800">
                      {tip.title}
                    </h2>
                  </div>
                  
                  <p className="text-blue-700 mb-2 pl-10">
                    {tip.description}
                  </p>
                  
                  <div className="pl-10">
                    <p className="text-sm font-medium text-blue-600 mb-1">
                      Try saying:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tip.examples.map((example, index) => (
                        <span
                          key={index}
                          className="bg-white px-3 py-1 rounded-full text-sm text-blue-600 border border-blue-200"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Practice Exercises */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-center text-purple-600 mb-4">
                Fun Practice Activities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practiceExercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="bg-purple-50 rounded-lg p-2 md:p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{exercise.emoji}</span>
                      <h3 className="font-bold text-purple-800">
                        {exercise.title}
                      </h3>
                    </div>
                    
                    <ol className="space-y-2 pl-4 text-sm text-purple-700">
                      {exercise.steps.map((step, index) => (
                        <li key={index} className="list-decimal">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>

            {/* Remember Box */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h2 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <span>💡</span> Remember:
              </h2>
              <ul className="space-y-2 text-yellow-800">
                <li className="flex items-start gap-2">
                  <span className="text-xl">🌟</span>
                  <span>Practice makes perfect - try these tips with family first</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">🤗</span>
                  <span>Being friendly helps make new friends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">🎭</span>
                  <span>It's okay to feel shy - start small and build confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">🌈</span>
                  <span>Every friend is different - respect and celebrate that</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueTips; 