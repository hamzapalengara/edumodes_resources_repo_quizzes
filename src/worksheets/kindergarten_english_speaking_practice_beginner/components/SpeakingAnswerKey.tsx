import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingAnswerKey: React.FC = () => {
  const dialogue = [
    {
      speaker: 'mom',
      text: "Good morning sweetie! Did you sleep well?",
      response: "Good morning mom yes I did",
      emoji: '🌅',
      explanation: 'Politely respond to Mom\'s morning greeting and answer her question about sleep'
    },
    {
      speaker: 'mom',
      text: "What would you like for breakfast?",
      response: "Can I have pancakes please",
      emoji: '🍳',
      explanation: 'Ask for what you want politely using "Can I have" and "please"'
    },
    {
      speaker: 'mom',
      text: "Sure! Would you like to help me make them?",
      response: "Yes I would love to help",
      emoji: '👩‍🍳',
      explanation: 'Show enthusiasm when offered to help with cooking'
    },
    {
      speaker: 'mom',
      text: "Great! First, wash your hands please.",
      response: "Okay I will wash my hands",
      emoji: '🧼',
      explanation: 'Show willingness to follow hygiene instructions'
    },
    {
      speaker: 'mom',
      text: "Would you like chocolate chips in your pancakes?",
      response: "Yes please I love chocolate chips",
      emoji: '🍫',
      explanation: 'Express preferences politely using "please" and showing appreciation'
    },
    {
      speaker: 'mom',
      text: "The pancakes are ready! Be careful, they're hot.",
      response: "Thank you mom they look delicious",
      emoji: '🥞',
      explanation: 'Show gratitude and appreciation for the food'
    },
    {
      speaker: 'mom',
      text: "Don't forget to drink your milk too.",
      response: "I will drink my milk",
      emoji: '🥛',
      explanation: 'Agree to follow Mom\'s reminder about drinking milk'
    },
    {
      speaker: 'mom',
      text: "After breakfast, we need to get ready for school.",
      response: "Okay I will get ready",
      emoji: '🎒',
      explanation: 'Show understanding and agreement to get ready for school'
    },
    {
      speaker: 'mom',
      text: "Do you have your homework in your backpack?",
      response: "Yes I packed my homework",
      emoji: '📚',
      explanation: 'Confirm that you\'ve prepared your homework'
    },
    {
      speaker: 'mom',
      text: "Have a great day at school! I love you!",
      response: "I love you too mom bye",
      emoji: '❤️',
      explanation: 'Return Mom\'s expression of love and say goodbye'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Speaking Practice with Mom - Answer Key
            </h1>
            
            <div className="space-y-6">
              {dialogue.map((line, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-4"
                >
                  {/* Mom's Line */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      👩
                    </div>
                    <div className="flex-1">
                      <div className="bg-pink-50 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{line.emoji}</span>
                          <p className="text-lg font-semibold text-pink-800">
                            {line.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expected Response */}
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      👧
                    </div>
                    <div className="flex-1">
                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="text-lg font-semibold text-orange-800">
                          {line.response}
                        </p>
                      </div>
                      <div className="mt-2 bg-white rounded-lg p-3 border border-orange-200">
                        <p className="text-sm text-orange-600">
                          💡 {line.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Speaking Tips */}
            <div className="mt-8 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-pink-800 mb-4 flex items-center gap-2">
                <span>🗣️</span> Key Speaking Tips:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-pink-700">
                  <span>✨</span>
                  Always use polite words like "please" and "thank you"
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span>🎯</span>
                  Speak clearly and at a normal pace
                </li>
                <li className="flex items-center gap-2 text-pink-700">
                  <span>👂</span>
                  Listen carefully to understand what Mom is saying
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span>💝</span>
                  Show love and appreciation in your responses
                </li>
                <li className="flex items-center gap-2 text-pink-700">
                  <span>✅</span>
                  Respond appropriately to questions and instructions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingAnswerKey; 