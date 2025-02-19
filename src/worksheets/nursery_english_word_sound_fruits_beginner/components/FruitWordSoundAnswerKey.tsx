import React, { useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  {
    word: 'Apple',
    hint: 'A round, red or green fruit',
    example: 'The red apple is sweet and crunchy.'
  },
  {
    word: 'Banana',
    hint: 'A long, yellow fruit with a peel',
    example: 'The monkey likes to eat bananas.'
  },
  {
    word: 'Mango',
    hint: 'A sweet, yellow-orange tropical fruit',
    example: 'The ripe mango is very juicy.'
  },
  {
    word: 'Orange',
    hint: 'A round, orange citrus fruit',
    example: 'The orange is full of vitamin C.'
  },
  {
    word: 'Grapes',
    hint: 'Small, round fruits that grow in bunches',
    example: 'The purple grapes are sweet.'
  },
  {
    word: 'Pineapple',
    hint: 'A spiky tropical fruit with yellow flesh',
    example: 'The pineapple has a sweet and tangy taste.'
  },
  {
    word: 'Watermelon',
    hint: 'A large fruit with red flesh and black seeds',
    example: 'The watermelon is cool and refreshing.'
  },
  {
    word: 'Strawberry',
    hint: 'A small, red heart-shaped fruit',
    example: 'The strawberry is bright red and sweet.'
  },
  {
    word: 'Papaya',
    hint: 'An orange tropical fruit with black seeds',
    example: 'The papaya is soft and sweet.'
  },
  {
    word: 'Cherry',
    hint: 'A small, round red fruit with a stem',
    example: 'The cherry is small but sweet.'
  }
];

const FruitWordSoundAnswerKey: React.FC = () => {
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      if (currentSpeech.current) {
        window.speechSynthesis.cancel();
      }

      // Create and configure new utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8; // Slightly slower for clarity
      currentSpeech.current = utterance;

      // Speak the text
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Fruit Words Answer Key
                </h1>
              </div>

              <div className="p-4 md:p-6">
                {/* Word List Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {WORD_LIST.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-orange-50 rounded-lg p-4 border border-orange-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-orange-700">{item.word}</h2>
                        <button
                          onClick={() => speak(item.word)}
                          className="w-8 h-8 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors"
                          aria-label={`Pronounce ${item.word}`}
                        >
                          🔊
                        </button>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-orange-700">
                          <span className="font-medium">Description: </span>
                          {item.hint}
                        </p>
                        <p className="text-orange-700">
                          <span className="font-medium">Example: </span>
                          {item.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fruit Categories */}
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h2 className="text-xl font-bold text-orange-700 mb-4">Fruit Categories</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-orange-700 mb-2">Sweet Fruits:</h3>
                      <ul className="list-disc list-inside text-orange-600">
                        <li>Apple</li>
                        <li>Mango</li>
                        <li>Grapes</li>
                        <li>Strawberry</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-orange-700 mb-2">Tropical Fruits:</h3>
                      <ul className="list-disc list-inside text-orange-600">
                        <li>Mango</li>
                        <li>Pineapple</li>
                        <li>Papaya</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-orange-700 mb-2">Citrus Fruits:</h3>
                      <ul className="list-disc list-inside text-orange-600">
                        <li>Orange</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-orange-700 mb-2">Small Fruits:</h3>
                      <ul className="list-disc list-inside text-orange-600">
                        <li>Grapes</li>
                        <li>Strawberry</li>
                        <li>Cherry</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Fun Facts */}
                <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h2 className="text-xl font-bold text-orange-700 mb-3">Fun Fruit Facts</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span className="text-orange-700">Apples float in water because they are 25% air!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span className="text-orange-700">Bananas are berries, but strawberries aren't!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span className="text-orange-700">Watermelons are 92% water!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span className="text-orange-700">Oranges were originally green, not orange!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default FruitWordSoundAnswerKey; 