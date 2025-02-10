import React from 'react';

const tips = [
  {
    id: 1,
    title: 'Start with the Subject',
    description: 'Look for who or what the sentence is about. This usually comes first!',
    example: 'Example: In "Mice like cheese", "Mice" is who we\'re talking about.',
    icon: '👀'
  },
  {
    id: 2,
    title: 'Find the Action Word',
    description: 'After the subject, look for what they are doing (the verb).',
    example: 'Example: In "Jets are fast", "are" tells us about the jets.',
    icon: '🏃‍♂️'
  },
  {
    id: 3,
    title: 'Complete the Thought',
    description: 'Add the rest of the words to finish telling what\'s happening.',
    example: 'Example: In "Penguins can swim", "swim" tells what penguins can do.',
    icon: '✨'
  },
  {
    id: 4,
    title: 'Look at the Picture',
    description: 'The picture gives you a clue about what the sentence is about!',
    example: 'Example: If you see a bus 🚌, the sentence might be about going to school.',
    icon: '🖼️'
  },
  {
    id: 5,
    title: 'Read it Out Loud',
    description: 'When you think you\'re done, read the sentence out loud to see if it makes sense.',
    example: 'If it sounds right when you say it, you\'re probably correct!',
    icon: '🗣️'
  }
];

const SentenceBuildingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="bg-amber-50 p-4 shadow-md mb-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-amber-600 text-center">Helpful Tips</h1>
          <p className="text-center text-amber-600 mt-2">
            Use these tips to help you build sentences!
          </p>
        </div>
      </div>

      <div className="w-full px-0 md:max-w-4xl md:mx-auto md:px-4">
        <div className="space-y-6">
          {tips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{tip.icon}</div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-amber-600 mb-2">
                    Tip {tip.id}: {tip.title}
                  </h2>
                  <p className="text-gray-600 mb-3">
                    {tip.description}
                  </p>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <p className="text-gray-700 text-sm">
                      {tip.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-amber-100 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-bold text-amber-700 mb-2 flex items-center gap-2">
              <span>Remember! 🌟</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-amber-700">
              <li>Take your time - there's no rush!</li>
              <li>Look at the picture for hints</li>
              <li>Read each word carefully</li>
              <li>If you make a mistake, just try again!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentenceBuildingTips; 