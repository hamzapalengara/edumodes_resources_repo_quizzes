import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DialogueAnswerKey: React.FC = () => {
  const dialogue = [
    {
      id: 1,
      speaker: 'friend1',
      text: 'Hi want to play',
      emoji: '👋',
      explanation: 'A friendly way to start and invite someone to play'
    },
    {
      id: 2,
      speaker: 'friend2',
      text: 'Sure sounds fun',
      emoji: '😊',
      explanation: 'A positive response showing enthusiasm'
    },
    {
      id: 3,
      speaker: 'friend1',
      text: 'What game should we play',
      emoji: '🎮',
      explanation: 'Asking for suggestions in a friendly way'
    },
    {
      id: 4,
      speaker: 'friend2',
      text: "Let's play hide and seek",
      emoji: '🙈',
      explanation: 'Making a specific game suggestion'
    },
    {
      id: 5,
      speaker: 'friend1',
      text: 'That is my favorite',
      emoji: '⭐',
      explanation: 'Showing excitement about the suggestion'
    },
    {
      id: 6,
      speaker: 'friend2',
      text: 'You count first',
      emoji: '🔢',
      explanation: 'Deciding who starts the game'
    },
    {
      id: 7,
      speaker: 'friend1',
      text: 'Okay I will start',
      emoji: '👍',
      explanation: 'Agreeing to take the first turn'
    },
    {
      id: 8,
      speaker: 'friend2',
      text: 'Go hide now',
      emoji: '🏃',
      explanation: 'Giving instructions to start playing'
    },
    {
      id: 9,
      speaker: 'friend1',
      text: 'I found you',
      emoji: '🔍',
      explanation: 'Announcing success in finding someone'
    },
    {
      id: 10,
      speaker: 'friend2',
      text: 'That was so much fun',
      emoji: '🎉',
      explanation: 'Expressing enjoyment after playing'
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Friends Talking - Answer Key
            </h1>

            <div className="space-y-4">
              {dialogue.map((line) => (
                <div key={line.id} className="bg-gray-50 rounded-lg p-2 md:p-4">
                  <div className="flex items-start gap-2">
                    {/* Speaker Avatar */}
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        line.speaker === 'friend2' 
                          ? 'bg-purple-100 order-first' 
                          : 'bg-blue-100 order-last'
                      }`}
                    >
                      {line.speaker === 'friend2' ? '👧' : '👦'}
                    </div>

                    {/* Dialogue Content */}
                    <div className="flex-1">
                      <div 
                        className={`rounded-lg p-3 inline-block ${
                          line.speaker === 'friend2' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        <p className="font-medium">
                          {line.text} {line.emoji}
                        </p>
                      </div>

                      {/* Explanation */}
                      <div className="mt-2 text-gray-600 text-sm pl-2">
                        <p>
                          <span className="font-medium">Why this works:</span>{' '}
                          {line.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips Box */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h2 className="font-bold text-yellow-800 mb-2">
                Remember These Key Points:
              </h2>
              <ul className="space-y-2 text-yellow-800">
                <li className="flex items-center gap-2">
                  <span className="text-xl">👋</span>
                  Start conversations with a friendly greeting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">🗣️</span>
                  Use clear and simple sentences
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">🤝</span>
                  Take turns speaking and listening
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">😊</span>
                  Show enthusiasm and be positive
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueAnswerKey; 