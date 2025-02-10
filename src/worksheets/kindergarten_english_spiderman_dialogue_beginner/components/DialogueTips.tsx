import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface Tip {
  title: string;
  description: string;
  examples: string[];
  emoji: string;
}

const tips: Tip[] = [
  {
    title: 'Start with Capital Letters',
    description: 'Look for words that should start the sentence, like "I", "With", "That", etc.',
    examples: ['Wow', 'Hey', 'Can', 'I', 'With'],
    emoji: '🔠'
  },
  {
    title: 'Listen for Character Voices',
    description: 'Spider-Man and the kid have different ways of speaking.',
    examples: ['Spider-Man uses friendly words', 'The kid asks questions', 'Spider-Man gives advice'],
    emoji: '🗣️'
  },
  {
    title: 'Look for Question Words',
    description: 'Words like "Can" usually come at the start of questions.',
    examples: ['Can you fly?', 'How do you...?', 'What is...?'],
    emoji: '❓'
  },
  {
    title: 'Use the Emojis',
    description: 'The emojis give hints about what the sentence means.',
    examples: ['🕷️ means Spider-Man', '🦸‍♂️ means superhero actions', '❤️ means caring'],
    emoji: '💭'
  },
  {
    title: 'Think About the Story',
    description: 'Each line follows from the previous one in a natural conversation.',
    examples: ['Greeting → Response', 'Question → Answer', 'Advice → Understanding'],
    emoji: '📚'
  }
];

interface Practice {
  title: string;
  steps: string[];
  emoji: string;
}

const practices: Practice[] = [
  {
    title: 'Voice Practice',
    steps: [
      'Listen to how Spider-Man speaks',
      'Notice his friendly, encouraging tone',
      'Pay attention to the kid\'s excited voice',
      'Try saying the lines yourself'
    ],
    emoji: '🎭'
  },
  {
    title: 'Hero Words Practice',
    steps: [
      'Look for words about helping others',
      'Find words about being responsible',
      'Practice Spider-Man\'s famous sayings',
      'Learn words that heroes use'
    ],
    emoji: '🦸‍♂️'
  },
  {
    title: 'Sentence Building',
    steps: [
      'Start with the first word (usually capitalized)',
      'Add action words next',
      'Complete with remaining words',
      'Check if it sounds right'
    ],
    emoji: '🔨'
  }
];

const reminders = [
  'Everyone can be a hero in their own way',
  'Being responsible is part of growing up',
  'Helping others makes you special',
  'Practice makes progress',
  'Have fun while learning!'
];

const DialogueTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-blue-600 mb-2">
                Tips for Talking with Spider-Man
              </h1>
              <p className="text-gray-600">
                Helpful strategies to complete the dialogue
              </p>
            </div>

            {/* Main Tips */}
            <div className="space-y-6 mb-8">
              {tips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h3 className="text-lg font-semibold text-blue-800">{tip.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-3">{tip.description}</p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-600 mb-2">Examples:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {tip.examples.map((example, i) => (
                        <li key={i} className="text-blue-600">{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Practice Exercises */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-red-600 mb-4">
                Practice Activities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practices.map((practice, index) => (
                  <div key={index} className="bg-gradient-to-b from-red-50 to-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{practice.emoji}</span>
                      <h3 className="font-bold text-blue-800">{practice.title}</h3>
                    </div>
                    <ol className="space-y-2">
                      {practice.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500">{i + 1}.</span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>

            {/* Spider-Man's Reminders */}
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-4">
              <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <span>🕷️</span> Spider-Man's Reminders
              </h2>
              <ul className="space-y-3">
                {reminders.map((reminder, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className={index % 2 === 0 ? "text-red-600" : "text-blue-600"}>
                      {index % 2 === 0 ? "🕸️" : "⭐"}
                    </span>
                    <span className="text-gray-700">{reminder}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueTips; 