import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingDadAnswerKey: React.FC = () => {
  const dialogue = [
    {
      speaker: 'dad',
      text: "Hey buddy! Ready to play catch in the backyard?",
      response: "Yes dad I am ready to play",
      emoji: '⚾',
      explanation: 'Show enthusiasm and respond politely to Dad\'s invitation to play'
    },
    {
      speaker: 'dad',
      text: "Great! Did you finish your homework first?",
      response: "Yes I finished all my homework",
      emoji: '📚',
      explanation: 'Confirm that you\'ve completed your responsibilities before play'
    },
    {
      speaker: 'dad',
      text: "That's my responsible kid! Let's warm up first.",
      response: "Okay I will warm up with you",
      emoji: '🏃',
      explanation: 'Show willingness to follow safety instructions and warm up'
    },
    {
      speaker: 'dad',
      text: "Nice catch! Want to try throwing farther?",
      response: "Yes I want to throw farther",
      emoji: '🎯',
      explanation: 'Express interest in trying more challenging throws'
    },
    {
      speaker: 'dad',
      text: "Wow! You're getting really good at this!",
      response: "Thank you dad I am practicing",
      emoji: '🌟',
      explanation: 'Show gratitude for the compliment and mention your effort'
    },
    {
      speaker: 'dad',
      text: "Time for a water break. Are you thirsty?",
      response: "Yes I am thirsty thank you",
      emoji: '💧',
      explanation: 'Respond politely and show appreciation for the break'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Speaking Practice with Dad - Answer Key
            </h1>
            
            <div className="space-y-6">
              {dialogue.map((line, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4"
                >
                  {/* Dad's Line */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      👨
                    </div>
                    <div className="flex-1">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{line.emoji}</span>
                          <p className="text-lg font-semibold text-blue-800">
                            {line.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expected Response */}
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      👦
                    </div>
                    <div className="flex-1">
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-lg font-semibold text-green-800">
                          {line.response}
                        </p>
                      </div>
                      <div className="mt-2 bg-white rounded-lg p-3 border border-green-200">
                        <p className="text-sm text-green-600">
                          💡 {line.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Speaking Tips */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <span>🗣️</span> Key Speaking Tips:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-blue-700">
                  <span>✨</span>
                  Always respond politely and with enthusiasm
                </li>
                <li className="flex items-center gap-2 text-green-700">
                  <span>🎯</span>
                  Speak clearly and at a normal pace
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <span>👂</span>
                  Listen carefully to Dad's instructions
                </li>
                <li className="flex items-center gap-2 text-green-700">
                  <span>💝</span>
                  Show appreciation and gratitude
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <span>✅</span>
                  Follow safety guidelines and instructions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingDadAnswerKey; 