import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_PAIRS = [
  {
    word1: 'Sweet',
    word2: 'Sour',
    emoji1: '🍯',
    emoji2: '🍋',
    explanation: 'Sweet foods like honey taste sugary, while sour foods like lemons have a tangy, sharp taste.',
  },
  {
    word1: 'Hot',
    word2: 'Cold',
    emoji1: '🔥',
    emoji2: '❄️',
    explanation: 'Hot foods are warm or heated, like soup, while cold foods are cool or chilled, like ice cream.',
  },
  {
    word1: 'Fresh',
    word2: 'Stale',
    emoji1: '🥬',
    emoji2: '🥖',
    explanation: 'Fresh foods are newly made or picked, while stale foods have lost their freshness over time.',
  },
  {
    word1: 'Hard',
    word2: 'Soft',
    emoji1: '🥜',
    emoji2: '🍞',
    explanation: 'Hard foods are firm and crunchy like nuts, while soft foods are easy to bite like bread.',
  },
  {
    word1: 'Thick',
    word2: 'Thin',
    emoji1: '🥤',
    emoji2: '💧',
    explanation: 'Thick liquids flow slowly like milkshakes, while thin liquids flow easily like water.',
  },
  {
    word1: 'Bland',
    word2: 'Spicy',
    emoji1: '🍚',
    emoji2: '🌶️',
    explanation: 'Bland foods have little flavor like plain rice, while spicy foods have a hot, strong taste.',
  },
  {
    word1: 'Strong',
    word2: 'Weak',
    emoji1: '☕',
    emoji2: '🫖',
    explanation: 'Strong flavors are very noticeable like coffee, while weak flavors are light like watered-down tea.',
  },
  {
    word1: 'Juicy',
    word2: 'Dry',
    emoji1: '🍊',
    emoji2: '🍘',
    explanation: 'Juicy foods contain lots of liquid like oranges, while dry foods contain very little moisture.',
  },
  {
    word1: 'Healthy',
    word2: 'Unhealthy',
    emoji1: '🥗',
    emoji2: '🍔',
    explanation: 'Healthy foods are good for your body like salads, while unhealthy foods may not be nutritious.',
  },
  {
    word1: 'Tasty',
    word2: 'Tasteless',
    emoji1: '😋',
    emoji2: '😐',
    explanation: 'Tasty foods have a delicious flavor you enjoy, while tasteless foods have very little flavor.',
  },
];

const WordOppositesAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-orange-300 text-center mb-2">
            Food & Senses Opposites - Answer Key
          </h1>
          <p className="text-orange-200 text-center">
            Learn about words with opposite meanings in food and taste
          </p>
        </div>

        <div className="grid gap-0.5 md:gap-4">
          {WORD_PAIRS.map((pair, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-black/40"
            >
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <div className="flex items-center bg-orange-900/50 rounded-lg px-3 py-1">
                  <span className="text-xl mr-2">{pair.emoji1}</span>
                  <span className="font-bold text-orange-300">{pair.word1}</span>
                </div>
                <div className="text-orange-300 font-bold">≠</div>
                <div className="flex items-center bg-orange-900/50 rounded-lg px-3 py-1">
                  <span className="text-xl mr-2">{pair.emoji2}</span>
                  <span className="font-bold text-orange-300">{pair.word2}</span>
                </div>
              </div>
              <p className="text-orange-100 text-sm md:text-base">
                {pair.explanation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-orange-300 mb-4">
            Tips for Learning Opposites
          </h2>
          <ul className="list-disc list-inside text-orange-100 space-y-2">
            <li>Think about how each pair of words describes different food qualities</li>
            <li>Use your senses to understand the differences (taste, touch, sight)</li>
            <li>Look for these opposites when describing foods you eat</li>
            <li>Create your own examples using foods you know</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesAnswerKey; 