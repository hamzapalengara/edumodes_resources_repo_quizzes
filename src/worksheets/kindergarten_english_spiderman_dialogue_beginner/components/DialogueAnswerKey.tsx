import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface DialogueLine {
  speaker: 'spiderman' | 'kid';
  text: string;
  emoji: string;
  explanation: string;
}

const dialogue: DialogueLine[] = [
  {
    speaker: 'kid',
    text: "Wow it's Spider-Man",
    emoji: '🕷️',
    explanation: 'The kid expresses excitement upon seeing Spider-Man, showing natural enthusiasm.'
  },
  {
    speaker: 'spiderman',
    text: "Hey there buddy",
    emoji: '👋',
    explanation: 'Spider-Man responds with a friendly greeting, making the kid feel comfortable.'
  },
  {
    speaker: 'kid',
    text: "Can you fly",
    emoji: '🦸‍♂️',
    explanation: 'The kid asks about Spider-Man\'s abilities, showing natural curiosity.'
  },
  {
    speaker: 'spiderman',
    text: "I swing between buildings",
    emoji: '🕸️',
    explanation: 'Spider-Man explains his unique way of moving, teaching about his actual abilities.'
  },
  {
    speaker: 'kid',
    text: "That is so cool",
    emoji: '🤩',
    explanation: 'The kid shows admiration for Spider-Man\'s abilities, expressing genuine amazement.'
  },
  {
    speaker: 'spiderman',
    text: "With great power comes responsibility",
    emoji: '💫',
    explanation: 'Spider-Man shares his famous motto, teaching an important life lesson about responsibility.'
  },
  {
    speaker: 'kid',
    text: "I want to help people",
    emoji: '❤️',
    explanation: 'The kid is inspired by Spider-Man\'s example and expresses desire to help others.'
  },
  {
    speaker: 'spiderman',
    text: "You can be a hero",
    emoji: '🦸‍♂️',
    explanation: 'Spider-Man encourages the kid, teaching that anyone can make a positive difference.'
  }
];

const DialogueAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-blue-600 mb-2">
                Talk with Spider-Man - Answer Key
              </h1>
              <p className="text-gray-600">
                Complete dialogue with explanations
              </p>
            </div>

            <div className="space-y-4">
              {dialogue.map((line, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <div className={`flex items-start gap-4 ${
                    line.speaker === 'spiderman' ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      line.speaker === 'spiderman' ? 'bg-red-100' : 'bg-blue-100'
                    }`}>
                      {line.speaker === 'spiderman' ? '🕷️' : '👦'}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Dialogue Bubble */}
                      <div className={`rounded-lg p-4 mb-2 ${
                        line.speaker === 'spiderman' ? 'bg-red-50' : 'bg-blue-50'
                      }`}>
                        <p className="text-lg font-medium">
                          {line.text} {line.emoji}
                        </p>
                      </div>

                      {/* Explanation */}
                      <div className="ml-4 text-gray-600">
                        <p>
                          <span className="font-medium">Explanation:</span> {line.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div className="mt-8 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-4">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Key Learning Points</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-red-700">
                  <span className="text-lg">🦸‍♂️</span>
                  <span>Heroes come in many forms</span>
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <span className="text-lg">💪</span>
                  <span>Power brings responsibility</span>
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <span className="text-lg">❤️</span>
                  <span>Helping others makes you a hero</span>
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <span className="text-lg">🌟</span>
                  <span>Anyone can make a positive difference</span>
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <span className="text-lg">🤝</span>
                  <span>Be friendly and encourage others</span>
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