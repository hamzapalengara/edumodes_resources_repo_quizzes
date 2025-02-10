import React from 'react';

const sentences = [
  {
    id: 1,
    sentence: 'Mice like cheese',
    explanation: 'This is a simple sentence about what mice eat. It has a subject (Mice), verb (like), and object (cheese).',
    image: '🐭🧀'
  },
  {
    id: 2,
    sentence: 'I go to school by bus',
    explanation: 'This sentence tells us how someone goes to school. It has a subject (I), verb (go), and shows how (by bus).',
    image: '🚌'
  },
  {
    id: 3,
    sentence: 'Jets are fast',
    explanation: 'This sentence describes jets. It has a subject (Jets), linking verb (are), and an adjective (fast).',
    image: '✈️'
  },
  {
    id: 4,
    sentence: 'Lemon has a sour taste',
    explanation: 'This sentence describes how a lemon tastes. It has a subject (Lemon), verb (has), and describes the taste (sour).',
    image: '🍋'
  },
  {
    id: 5,
    sentence: 'Penguins can swim',
    explanation: 'This sentence tells what penguins can do. It has a subject (Penguins), helping verb (can), and action verb (swim).',
    image: '🐧'
  },
  {
    id: 6,
    sentence: 'The cat drinks milk',
    explanation: 'This sentence tells what a cat does. It has an article (The), subject (cat), verb (drinks), and object (milk).',
    image: '🐱🥛'
  },
  {
    id: 7,
    sentence: 'The sun is bright',
    explanation: 'This sentence describes the sun. It has an article (The), subject (sun), linking verb (is), and adjective (bright).',
    image: '☀️'
  },
  {
    id: 8,
    sentence: 'Birds fly in the sky',
    explanation: 'This sentence tells where birds fly. It has a subject (Birds), verb (fly), and a prepositional phrase (in the sky).',
    image: '🐦'
  },
  {
    id: 9,
    sentence: 'Fish swim in the water',
    explanation: 'This sentence tells where fish swim. It has a subject (Fish), verb (swim), and a prepositional phrase (in the water).',
    image: '🐠'
  },
  {
    id: 10,
    sentence: 'Rain falls from the clouds',
    explanation: 'This sentence tells where rain comes from. It has a subject (Rain), verb (falls), and a prepositional phrase (from the clouds).',
    image: '🌧️'
  }
];

const SentenceBuildingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="bg-emerald-50 p-4 shadow-md mb-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-emerald-600 text-center">Answer Key</h1>
          <p className="text-center text-emerald-600 mt-2">
            Each sentence is worth 10 points. Total possible score: 100 points.
          </p>
        </div>
      </div>

      <div className="w-full px-0 md:max-w-4xl md:mx-auto md:px-4">
        <div className="space-y-6">
          {sentences.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{item.image}</span>
                <div>
                  <h2 className="text-xl font-bold text-emerald-600 mb-1">
                    Sentence {item.id}
                  </h2>
                  <p className="text-lg font-medium text-gray-800">
                    {item.sentence}
                  </p>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-gray-600">
                  {item.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SentenceBuildingAnswerKey; 