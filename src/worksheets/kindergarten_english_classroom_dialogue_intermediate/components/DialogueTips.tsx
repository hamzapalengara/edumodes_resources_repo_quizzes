import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DialogueTips: React.FC = () => {
  const tips = [
    {
      title: 'Start with Greetings',
      emoji: '👋',
      description: 'Always begin your day by greeting your teacher and classmates politely. This shows respect and creates a friendly atmosphere.',
      examples: ['Good morning teacher', 'Good morning everyone', 'Hello class']
    },
    {
      title: 'Ask Permission',
      emoji: '🤚',
      description: 'Before asking a question or speaking in class, ask for permission politely.',
      examples: ['May I ask a question', 'Can I speak', 'Excuse me, teacher']
    },
    {
      title: 'Express Understanding',
      emoji: '💡',
      description: "Let your teacher know when you understand or don't understand something.",
      examples: ['Now I get it', "I don't understand this", 'Could you explain again']
    },
    {
      title: 'Show Gratitude',
      emoji: '🙏',
      description: 'Always say thank you when someone helps you learn.',
      examples: ['Thank you for helping', 'Thank you, teacher', 'Thanks for explaining']
    },
    {
      title: 'Be Respectful',
      emoji: '🌟',
      description: 'Use polite words and show respect when speaking to teachers and classmates.',
      examples: ['Please', 'Thank you', 'You are welcome']
    }
  ];

  const practiceExercises = [
    {
      title: 'Role Play Practice',
      emoji: '🎭',
      steps: [
        'Practice with a family member',
        'Take turns being teacher and student',
        'Use polite words and expressions',
        'Practice different classroom situations'
      ]
    },
    {
      title: 'Mirror Practice',
      emoji: '🪞',
      steps: [
        'Stand in front of a mirror',
        'Practice saying the sentences clearly',
        'Watch your facial expressions',
        'Use appropriate gestures'
      ]
    },
    {
      title: 'Listen and Repeat',
      emoji: '🎧',
      steps: [
        'Listen to the correct pronunciation',
        'Repeat each sentence slowly',
        'Practice the tone of voice',
        'Try to memorize common phrases'
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
              Tips for Classroom Dialogue
            </h1>

            {/* Main Tips */}
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h2 className="text-lg font-semibold text-blue-800">{tip.title}</h2>
                  </div>
                  <p className="text-gray-700 mb-3">{tip.description}</p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-500 mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {tip.examples.map((example, i) => (
                        <li key={i} className="text-blue-600">• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Practice Exercises */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-center text-green-600 mb-4">
                Practice Exercises
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practiceExercises.map((exercise, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{exercise.emoji}</span>
                      <h3 className="text-lg font-semibold text-green-800">{exercise.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {exercise.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Remember Box */}
            <div className="mt-8 bg-yellow-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                <span>💡</span> Remember
              </h2>
              <ul className="space-y-2 text-yellow-700">
                <li>• Always be polite and respectful</li>
                <li>• Listen carefully when others speak</li>
                <li>• Don't be afraid to ask for help</li>
                <li>• Practice makes perfect</li>
                <li>• Good communication helps you learn better</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueTips; 