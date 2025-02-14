import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingBusTips: React.FC = () => {
  const speakingTips = [
    {
      title: 'Asking About Routes',
      emoji: '🗺️',
      description: 'Different ways to ask about bus destinations',
      examples: [
        'Where does this bus go?',
        'Does this bus stop at...?',
        'Is this the bus to...?',
        'Which stops does this bus make?'
      ]
    },
    {
      title: 'Checking Times',
      emoji: '⏰',
      description: 'How to ask about journey times',
      examples: [
        'How long does it take to...?',
        'When will we arrive at...?',
        'What time do we get to...?',
        'Is it far to...?'
      ]
    },
    {
      title: 'Asking About Fares',
      emoji: '💵',
      description: 'How to ask about ticket prices',
      examples: [
        'How much is the fare?',
        'Do you have change for...?',
        'Can I pay by card?',
        'Is there a student discount?'
      ]
    },
    {
      title: 'Making Requests',
      emoji: '🙋',
      description: 'Polite ways to ask for help',
      examples: [
        'Could you tell me when we reach...?',
        'Please let me know when to get off',
        'Can you help me with...?',
        'Would you mind if I...?'
      ]
    },
    {
      title: 'Being Courteous',
      emoji: '🤝',
      description: 'Polite expressions to use',
      examples: [
        'Excuse me...',
        'Thank you very much',
        'Good morning/afternoon',
        'Have a nice day'
      ]
    }
  ];

  const usefulPhrases = [
    {
      category: 'Finding Your Bus',
      emoji: '🚌',
      phrases: [
        'Is this the bus to...?',
        'When is the next bus to...?',
        'Which platform for...?',
        'How often do buses run?'
      ]
    },
    {
      category: 'During the Journey',
      emoji: '🎫',
      phrases: [
        'Is this seat taken?',
        'Next stop please',
        'Could you tell me when to get off?',
        'How many more stops?'
      ]
    },
    {
      category: 'Getting Information',
      emoji: '💭',
      phrases: [
        'Can you help me find...?',
        'Is there a bus map?',
        'Do you have a timetable?',
        'Which bus should I take?'
      ]
    },
    {
      category: 'Problem Solving',
      emoji: '❓',
      phrases: [
        'I think I am on the wrong bus',
        'I missed my stop',
        'Do you go near...?',
        'Can I transfer to another bus?'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 mx-2 md:mx-4 border-2 border-orange-200">
          <h1 className="text-2xl font-bold text-orange-700 mb-6">
            🚌 Tips for Speaking with Bus Driver
          </h1>

          {/* Speaking Tips */}
          <div className="space-y-6">
            {speakingTips.map((tip, index) => (
              <div key={index} className="bg-orange-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-orange-700 mb-2 flex items-center">
                  <span className="text-2xl mr-2">{tip.emoji}</span>
                  {tip.title}
                </h2>
                <p className="text-orange-600 mb-3">{tip.description}</p>
                <ul className="space-y-2 text-orange-700">
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

          {/* Useful Phrases */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-orange-700 mb-4">
              🗣️ Useful Phrases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {usefulPhrases.map((category, index) => (
                <div key={index} className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">{category.emoji}</span>
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.phrases.map((phrase, idx) => (
                      <div 
                        key={idx}
                        className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg text-sm"
                      >
                        {phrase}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Tips */}
          <div className="mt-8 bg-orange-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-orange-700 mb-3 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Practice Tips
            </h2>
            <ul className="space-y-2 text-orange-700">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                Always start with a polite greeting
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                Speak clearly and at a normal pace
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                Listen carefully to the driver's instructions
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                Have your questions ready before speaking
              </li>
              <li className="flex items-start">
                <span className="mr-2">5.</span>
                Thank the driver for their help
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingBusTips; 