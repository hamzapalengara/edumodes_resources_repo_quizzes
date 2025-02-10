import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface DialogueLine {
  speaker: 'rabbit' | 'tortoise';
  text: string;
  emoji: string;
  explanation: string;
}

const dialogue: DialogueLine[] = [
  {
    speaker: 'rabbit',
    text: "Let's have a race",
    emoji: '🏃',
    explanation: 'The rabbit confidently suggests a race, showing his competitive nature.'
  },
  {
    speaker: 'tortoise',
    text: "Okay I'm ready",
    emoji: '🐢',
    explanation: 'The tortoise accepts the challenge calmly, demonstrating his willingness to participate.'
  },
  {
    speaker: 'rabbit',
    text: "I am very fast",
    emoji: '🐰',
    explanation: 'The rabbit boasts about his speed, revealing his overconfidence.'
  },
  {
    speaker: 'tortoise',
    text: "Slow and steady",
    emoji: '🐌',
    explanation: 'The tortoise shares his strategy, emphasizing patience and consistency.'
  },
  {
    speaker: 'rabbit',
    text: "I will take a nap",
    emoji: '😴',
    explanation: 'The rabbit becomes overconfident and decides to rest, showing poor judgment.'
  },
  {
    speaker: 'tortoise',
    text: "I'll keep going",
    emoji: '👊',
    explanation: 'The tortoise remains focused and determined, showing perseverance.'
  },
  {
    speaker: 'rabbit',
    text: "Oh no I'm late",
    emoji: '😱',
    explanation: 'The rabbit realizes his mistake too late, facing the consequences of his overconfidence.'
  },
  {
    speaker: 'tortoise',
    text: "I won the race",
    emoji: '🏆',
    explanation: 'The tortoise wins through consistent effort and determination.'
  },
  {
    speaker: 'rabbit',
    text: "You were right",
    emoji: '🙇',
    explanation: 'The rabbit acknowledges his mistake and learns from the experience.'
  },
  {
    speaker: 'tortoise',
    text: "Always be patient",
    emoji: '🌟',
    explanation: 'The tortoise shares the moral of the story: patience and persistence win the race.'
  }
];

const DialogueAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-emerald-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-emerald-600 mb-2">
                The Rabbit and The Tortoise - Answer Key
              </h1>
              <p className="text-gray-600">
                Complete dialogue with explanations
              </p>
            </div>

            <div className="space-y-4">
              {dialogue.map((line, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <div className={`flex items-start gap-4 ${
                    line.speaker === 'tortoise' ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      line.speaker === 'tortoise' ? 'bg-emerald-100' : 'bg-lime-100'
                    }`}>
                      {line.speaker === 'tortoise' ? '🐢' : '🐰'}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Dialogue Bubble */}
                      <div className={`rounded-lg p-4 mb-2 ${
                        line.speaker === 'tortoise' ? 'bg-emerald-50' : 'bg-lime-50'
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
            <div className="mt-8 bg-emerald-50 rounded-lg p-4">
              <h2 className="text-xl font-bold text-emerald-700 mb-4">Key Points to Remember</h2>
              <ul className="space-y-2 text-emerald-800">
                <li className="flex items-center gap-2">
                  <span className="text-lg">🎯</span>
                  <span>Overconfidence can lead to failure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">🌟</span>
                  <span>Patience and persistence are valuable traits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">💪</span>
                  <span>Steady effort leads to success</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">🎓</span>
                  <span>Learning from mistakes is important</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">🤝</span>
                  <span>Humility and respect for others matter</span>
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