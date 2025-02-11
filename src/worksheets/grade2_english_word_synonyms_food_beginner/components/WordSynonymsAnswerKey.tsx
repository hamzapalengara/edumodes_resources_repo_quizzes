import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_PAIRS = [
  {
    word1: 'Delicious',
    word2: 'Tasty',
    emoji1: '😋',
    emoji2: '🍽️',
    explanation: 'Both words describe food that has a very good, enjoyable flavor that makes you want more!',
    example: 'The chocolate cake is delicious/tasty - everyone wants seconds!',
  },
  {
    word1: 'Sour',
    word2: 'Tangy',
    emoji1: '🍋',
    emoji2: '🥝',
    explanation: 'These words describe a sharp, acidic taste that makes your mouth pucker a little.',
    example: 'Lemons and limes have a sour/tangy flavor that makes lemonade refreshing.',
  },
  {
    word1: 'Crisp',
    word2: 'Crunchy',
    emoji1: '🍎',
    emoji2: '🥜',
    explanation: 'Both describe food that makes a pleasant sound when you bite into it and breaks easily.',
    example: 'Fresh apples and nuts are crisp/crunchy when you bite them.',
  },
  {
    word1: 'Icy',
    word2: 'Chilled',
    emoji1: '🧊',
    emoji2: '❄️',
    explanation: 'These words mean very cold, perfect for describing refreshing drinks and desserts.',
    example: 'An icy/chilled glass of lemonade is perfect on a hot day.',
  },
  {
    word1: 'Mild',
    word2: 'Light',
    emoji1: '🥛',
    emoji2: '🫖',
    explanation: 'Both describe gentle flavors that aren\'t too strong or overwhelming.',
    example: 'Milk and light tea have mild/light flavors that are gentle on your tongue.',
  },
  {
    word1: 'Flavorful',
    word2: 'Savory',
    emoji1: '🌶️',
    emoji2: '🍖',
    explanation: 'These words describe food with rich, satisfying tastes that aren\'t sweet.',
    example: 'A flavorful/savory soup has many delicious spices and ingredients.',
  },
  {
    word1: 'Nutritious',
    word2: 'Healthy',
    emoji1: '🥗',
    emoji2: '🥬',
    explanation: 'Both words describe food that is good for your body and helps you grow strong.',
    example: 'Fresh vegetables are nutritious/healthy choices for snacks and meals.',
  },
  {
    word1: 'Tender',
    word2: 'Soft',
    emoji1: '🥩',
    emoji2: '🍞',
    explanation: 'These words describe food that is easy to bite and chew, not tough or hard.',
    example: 'Fresh bread and well-cooked meat are tender/soft and easy to eat.',
  },
  {
    word1: 'Yummy',
    word2: 'Appetizing',
    emoji1: '😊',
    emoji2: '🍽️',
    explanation: 'Both words describe food that looks and tastes good, making you want to eat it.',
    example: 'The yummy/appetizing smell of cookies makes everyone hungry!',
  },
  {
    word1: 'Smelly',
    word2: 'Fragrant',
    emoji1: '👃',
    emoji2: '🌺',
    explanation: 'These words describe food with strong aromas that you can smell easily.',
    example: 'Fresh herbs and spices are smelly/fragrant and make food more exciting.',
  },
];

const WordSynonymsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="bg-white/80 backdrop-blur-sm p-4 shadow-lg rounded-xl mb-4">
          <h1 className="text-2xl font-bold text-orange-600 text-center mb-2">
            Food & Senses Synonyms - Answer Key
          </h1>
          <p className="text-gray-600 text-center">
            Learn about words with similar meanings in food and taste
          </p>
        </div>

        {/* Word Pairs Grid */}
        <div className="grid gap-0.5 md:gap-4">
          {WORD_PAIRS.map((pair, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Word Pair Header */}
              <div className="flex flex-wrap gap-2 items-center mb-3">
                <div className="flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg px-3 py-1">
                  <span className="text-2xl mr-2">{pair.emoji1}</span>
                  <span className="font-bold text-orange-600">{pair.word1}</span>
                </div>
                <div className="text-orange-400 font-bold">=</div>
                <div className="flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg px-3 py-1">
                  <span className="text-2xl mr-2">{pair.emoji2}</span>
                  <span className="font-bold text-orange-600">{pair.word2}</span>
                </div>
              </div>

              {/* Explanation */}
              <p className="text-gray-700 mb-2">
                {pair.explanation}
              </p>

              {/* Example */}
              <div className="bg-orange-50 rounded-lg p-2 text-sm text-gray-600">
                <span className="font-medium">Example:</span> {pair.example}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Tips */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-orange-600 mb-4">
            Tips for Learning Synonyms
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-xl mr-2">🎯</span>
              <span>Practice using both words in sentences to understand how they're similar</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">🔍</span>
              <span>Notice how some synonyms have slightly different feelings or uses</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">📝</span>
              <span>Create your own examples using food words you know</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-2">🗣️</span>
              <span>Say the words out loud and use them when talking about food</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordSynonymsAnswerKey; 