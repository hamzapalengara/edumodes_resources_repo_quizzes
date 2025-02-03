import React from 'react';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const WORD_ITEMS = [
  { id: '1', word: 'cat', emoji: '🐱', explanation: 'A cat is a small furry animal that people often keep as a pet.' },
  { id: '2', word: 'dog', emoji: '🐶', explanation: 'A dog is a friendly animal that makes a great pet and can be trained.' },
  { id: '3', word: 'sun', emoji: '☀️', explanation: 'The sun is the bright star that gives us light and heat during the day.' },
  { id: '4', word: 'box', emoji: '📦', explanation: 'A box is a container with a flat bottom and sides, used to hold things.' },
  { id: '5', word: 'hat', emoji: '🎩', explanation: 'A hat is something you wear on your head to stay warm or look nice.' },
  { id: '6', word: 'pen', emoji: '🖊️', explanation: 'A pen is a tool used for writing with ink.' },
];

const VocabularyAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnswerKeyHeader />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-green-600">
            Vocabulary Words and Their Meanings
          </h1>

          <div className="space-y-6">
            {WORD_ITEMS.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
                <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center text-7xl">
                  {item.emoji}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    {item.word}
                  </h3>
                  <p className="text-gray-700">
                    {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              Learning Tips:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Look at the picture and try to remember what it shows</li>
              <li>Sound out each letter in the word</li>
              <li>Practice writing these words in your notebook</li>
              <li>Try using these words in sentences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyAnswerKey; 