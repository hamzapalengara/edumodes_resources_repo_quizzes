import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingFarmerTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Speak Clearly',
      emoji: '🗣️',
      description: 'Take your time and pronounce each word clearly',
      examples: [
        'Speak at a normal pace',
        'Open your mouth when speaking',
        'Practice farm words carefully'
      ]
    },
    {
      title: 'Show Interest',
      emoji: '✨',
      description: 'Be enthusiastic about learning about the farm',
      examples: [
        'Yes, I would love to learn!',
        'That sounds interesting!',
        'I want to help with that!'
      ]
    },
    {
      title: 'Listen Carefully',
      emoji: '👂',
      description: "Pay attention to the farmer's instructions",
      examples: [
        'Look at the farmer when speaking',
        'Wait for instructions to finish',
        'Ask if you need help'
      ]
    },
    {
      title: 'Be Safe',
      emoji: '⚡',
      description: 'Follow safety rules on the farm',
      examples: [
        'Handle animals gently',
        'Use tools carefully',
        'Stay close to the farmer'
      ]
    },
    {
      title: 'Show Gratitude',
      emoji: '💝',
      description: 'Thank the farmer for teaching you',
      examples: [
        'Thank you for showing me',
        'Thanks for letting me help',
        'I learned so much today'
      ]
    }
  ];

  const farmVocabulary = [
    {
      category: 'Farm Animals',
      emoji: '🐄',
      words: ['cow', 'chicken', 'sheep', 'pig', 'horse']
    },
    {
      category: 'Farm Plants',
      emoji: '🌱',
      words: ['carrots', 'corn', 'wheat', 'apples', 'tomatoes']
    },
    {
      category: 'Farm Places',
      emoji: '🏡',
      words: ['barn', 'coop', 'field', 'garden', 'orchard']
    },
    {
      category: 'Farm Activities',
      emoji: '👨‍🌾',
      words: ['planting', 'watering', 'feeding', 'harvesting', 'collecting']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 mx-2 md:mx-4 border-2 border-green-200">
          <h1 className="text-2xl font-bold text-green-700 mb-6">
            🌾 Tips for Speaking with the Farmer
          </h1>

          {/* Speaking Tips */}
          <div className="space-y-6">
            {speakingTips.map((tip, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-green-700 mb-2 flex items-center">
                  <span className="text-2xl mr-2">{tip.emoji}</span>
                  {tip.title}
                </h2>
                <p className="text-green-600 mb-3">{tip.description}</p>
                <ul className="space-y-2 text-green-700">
                  {tip.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Farm Vocabulary */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              🎯 Important Farm Words
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {farmVocabulary.map((category, index) => (
                <div key={index} className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">{category.emoji}</span>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.words.map((word, idx) => (
                      <span 
                        key={idx}
                        className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Tips */}
          <div className="mt-8 bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Practice Tips
            </h2>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                Practice saying farm words before starting
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                Listen to the farmer's voice and try to match their pace
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                Use complete sentences when answering
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                Don't be afraid to ask the farmer to repeat
              </li>
              <li className="flex items-start">
                <span className="mr-2">5.</span>
                Show interest by asking simple questions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingFarmerTips; 