import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingShopAnswerKey: React.FC = () => {
  const dialogue = [
    {
      speaker: 'shopkeeper',
      text: "Good morning! Welcome to the candy shop!",
      response: "Good morning thank you",
      emoji: '🍬',
      explanation: 'Start with a polite greeting and show appreciation for the welcome'
    },
    {
      speaker: 'shopkeeper',
      text: "How are you today?",
      response: "I am fine thank you how are you",
      emoji: '😊',
      explanation: 'Respond to the greeting and politely ask about their day too'
    },
    {
      speaker: 'shopkeeper',
      text: "I'm great! Would you like to see our candies?",
      response: "Yes please show me the candies",
      emoji: '🍭',
      explanation: 'Show interest and use "please" when making a request'
    },
    {
      speaker: 'shopkeeper',
      text: "We have lollipops, chocolates, and gummy bears!",
      response: "I would like some chocolate please",
      emoji: '🍫',
      explanation: 'Make a clear choice and remember to say "please"'
    },
    {
      speaker: 'shopkeeper',
      text: "Great choice! How many chocolates would you like?",
      response: "Two chocolates please",
      emoji: '🎁',
      explanation: 'Specify the quantity and remember to be polite'
    },
    {
      speaker: 'shopkeeper',
      text: "Here are your chocolates! Would you like a bag?",
      response: "Yes please I need a bag",
      emoji: '🛍️',
      explanation: 'Express your needs politely using "please"'
    },
    {
      speaker: 'shopkeeper',
      text: "Here's your bag! That will be two dollars please.",
      response: "Here is two dollars",
      emoji: '💰',
      explanation: 'Respond appropriately when making a payment'
    },
    {
      speaker: 'shopkeeper',
      text: "Thank you! Would you like your receipt?",
      response: "Yes please I want the receipt",
      emoji: '🧾',
      explanation: 'Use "please" when requesting the receipt'
    },
    {
      speaker: 'shopkeeper',
      text: "Here's your receipt! Have a wonderful day!",
      response: "Thank you have a nice day",
      emoji: '🌟',
      explanation: 'Show gratitude and return the good wishes'
    },
    {
      speaker: 'shopkeeper',
      text: "Goodbye! Please come again soon!",
      response: "Goodbye see you next time",
      emoji: '👋',
      explanation: 'End the conversation politely with a friendly goodbye'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Fun at the Candy Shop - Answer Key
            </h1>
            
            <div className="space-y-6">
              {dialogue.map((line, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-4"
                >
                  {/* Shopkeeper's Line */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      🍬
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
                <span>🗣️</span> Key Speaking Tips for Shopping:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-pink-700">
                  <span>👋</span>
                  Always start with a greeting
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span>🙏</span>
                  Use "please" and "thank you"
                </li>
                <li className="flex items-center gap-2 text-pink-700">
                  <span>🎯</span>
                  Make clear requests
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <span>💝</span>
                  Show appreciation
                </li>
                <li className="flex items-center gap-2 text-pink-700">
                  <span>✨</span>
                  End conversations politely
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingShopAnswerKey; 