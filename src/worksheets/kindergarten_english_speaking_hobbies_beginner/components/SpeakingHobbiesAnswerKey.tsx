import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingHobbiesAnswerKey: React.FC = () => {
  const dialogue = [
    {
      speaker: 'friend',
      text: "Hi! What's your favorite hobby?",
      response: "I like playing soccer",
      emoji: '🌟',
      explanation: 'Share your favorite hobby with enthusiasm'
    },
    {
      speaker: 'friend',
      text: "That's cool! How often do you play?",
      response: "I play soccer every weekend",
      emoji: '⚽',
      explanation: 'Tell how frequently you practice your hobby'
    },
    {
      speaker: 'friend',
      text: "Do you like drawing too?",
      response: "Yes I love drawing pictures",
      emoji: '🎨',
      explanation: 'Express enthusiasm for another hobby'
    },
    {
      speaker: 'friend',
      text: "What do you like to draw?",
      response: "I like drawing animals",
      emoji: '✏️',
      explanation: 'Share specific details about your hobby'
    },
    {
      speaker: 'friend',
      text: "I love reading books! Do you?",
      response: "Yes I like reading books too",
      emoji: '📚',
      explanation: 'Show shared interest in a hobby'
    },
    {
      speaker: 'friend',
      text: "What's your favorite book?",
      response: "My favorite book is",
      emoji: '📖',
      explanation: 'Share your preferences in reading'
    },
    {
      speaker: 'friend',
      text: "Do you play any musical instruments?",
      response: "Yes I play the piano",
      emoji: '🎵',
      explanation: 'Tell about musical hobbies'
    },
    {
      speaker: 'friend',
      text: "Would you like to play together sometime?",
      response: "Yes I would love to play together",
      emoji: '🤝',
      explanation: 'Show enthusiasm for doing activities together'
    },
    {
      speaker: 'friend',
      text: "What other hobbies do you want to try?",
      response: "I want to try dancing",
      emoji: '🎯',
      explanation: 'Share interest in new hobbies'
    },
    {
      speaker: 'friend',
      text: "This was fun! Let's talk again soon!",
      response: "Yes lets talk again bye",
      emoji: '👋',
      explanation: 'End the conversation politely'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-sky-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-violet-600 mb-6">
              Let's Talk About Hobbies - Answer Key
            </h1>
            
            <div className="space-y-6">
              {dialogue.map((line, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-violet-50 to-sky-50 rounded-lg p-4"
                >
                  {/* Friend's Line */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                      👧
                    </div>
                    <div className="flex-1">
                      <div className="bg-violet-50 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{line.emoji}</span>
                          <p className="text-lg font-semibold text-violet-800">
                            {line.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expected Response */}
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                      👦
                    </div>
                    <div className="flex-1">
                      <div className="bg-sky-50 rounded-lg p-3">
                        <p className="text-lg font-semibold text-sky-800">
                          {line.response}
                        </p>
                      </div>
                      <div className="mt-2 bg-white rounded-lg p-3 border border-sky-200">
                        <p className="text-sm text-sky-600">
                          💡 {line.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Speaking Tips */}
            <div className="mt-8 bg-gradient-to-r from-violet-50 to-sky-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-violet-800 mb-4 flex items-center gap-2">
                <span>🗣️</span> Key Speaking Tips:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-violet-700">
                  <span>✨</span>
                  Show enthusiasm when talking about hobbies
                </li>
                <li className="flex items-center gap-2 text-sky-700">
                  <span>🎯</span>
                  Share specific details about your interests
                </li>
                <li className="flex items-center gap-2 text-violet-700">
                  <span>👂</span>
                  Listen and respond to questions
                </li>
                <li className="flex items-center gap-2 text-sky-700">
                  <span>💝</span>
                  Be open to trying new activities
                </li>
                <li className="flex items-center gap-2 text-violet-700">
                  <span>✅</span>
                  Use complete sentences in responses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingHobbiesAnswerKey; 