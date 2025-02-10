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
    title: 'Look for Clues',
    description: 'Pay attention to the emojis and who is speaking to help you understand the context.',
    examples: ['🐰 means Rabbit is speaking', '🐢 means Tortoise is speaking', 'Emojis show the mood of the sentence'],
    emoji: '🔍'
  },
  {
    title: 'Start with Easy Words',
    description: 'Begin with words you know should start the sentence, like names or greetings.',
    examples: ["'I' often starts sentences", "'Let's' is used for suggestions", "'Okay' is used for agreeing"],
    emoji: '📝'
  },
  {
    title: 'Think About the Story',
    description: 'Remember this is a story about a race between a fast rabbit and a slow but steady tortoise.',
    examples: ['Rabbit is fast but overconfident', 'Tortoise is slow but determined', 'The story teaches patience'],
    emoji: '📚'
  },
  {
    title: 'Listen to the Voices',
    description: 'Each character has a different voice that matches their personality.',
    examples: ['Rabbit speaks quickly and with high pitch', 'Tortoise speaks slowly and with low pitch', 'Voices help understand the characters'],
    emoji: '🔊'
  },
  {
    title: 'Check Your Answer',
    description: 'Make sure your sentence makes sense and matches the story.',
    examples: ['Read the sentence out loud', 'Think about what happens next', 'Look at the previous dialogue'],
    emoji: '✅'
  }
];

interface Practice {
  title: string;
  steps: string[];
  emoji: string;
}

const practices: Practice[] = [
  {
    title: 'Character Voice Practice',
    steps: [
      'Click on completed sentences to hear them again',
      'Notice how the rabbit speaks quickly and excitedly',
      'Notice how the tortoise speaks slowly and calmly',
      'Try to guess who is speaking before looking at the avatar'
    ],
    emoji: '🎭'
  },
  {
    title: 'Story Sequence Practice',
    steps: [
      'Think about what happens in a race',
      'Remember the rabbit is overconfident',
      'The tortoise never gives up',
      'Consider what each character might say next'
    ],
    emoji: '📖'
  },
  {
    title: 'Word Order Practice',
    steps: [
      'Look for words that usually start sentences',
      'Find pairs of words that go together',
      'Read your sentence out loud to check if it sounds right',
      'Use the hint if you get stuck'
    ],
    emoji: '🔤'
  }
];

const reminders = [
  'Take your time - just like the tortoise!',
  'Every mistake is a chance to learn',
  'The story teaches us about patience and hard work',
  'Listen carefully to both characters',
  'Have fun while learning!'
];

const DialogueTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-emerald-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-emerald-600 mb-2">
                Tips for The Rabbit and The Tortoise
              </h1>
              <p className="text-gray-600">
                Helpful strategies to complete the dialogue worksheet
              </p>
            </div>

            {/* Tips Section */}
            <div className="space-y-6 mb-8">
              <h2 className="text-xl font-bold text-emerald-700">Helpful Tips</h2>
              {tips.map((tip, index) => (
                <div key={index} className="bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tip.emoji}</span>
                    <h3 className="text-lg font-semibold text-emerald-800">{tip.title}</h3>
                  </div>
                  <p className="text-emerald-700 mb-3">{tip.description}</p>
                  <ul className="list-disc list-inside text-emerald-600 space-y-1">
                    {tip.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Practice Exercises */}
            <div className="space-y-6 mb-8">
              <h2 className="text-xl font-bold text-emerald-700">Practice Exercises</h2>
              {practices.map((practice, index) => (
                <div key={index} className="bg-lime-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{practice.emoji}</span>
                    <h3 className="text-lg font-semibold text-lime-800">{practice.title}</h3>
                  </div>
                  <ol className="list-decimal list-inside text-lime-700 space-y-2">
                    {practice.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            {/* Remember Section */}
            <div className="bg-emerald-100 rounded-lg p-4">
              <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                <span>✨</span>
                <span>Remember</span>
              </h2>
              <ul className="space-y-3">
                {reminders.map((reminder, index) => (
                  <li key={index} className="flex items-center gap-3 text-emerald-700">
                    <span className="text-emerald-500">•</span>
                    {reminder}
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