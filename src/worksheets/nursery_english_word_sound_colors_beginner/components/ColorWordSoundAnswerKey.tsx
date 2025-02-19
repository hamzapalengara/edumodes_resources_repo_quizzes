import React, { useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  {
    word: 'Red',
    hint: 'The color of apples and fire trucks',
    example: 'The rose is red.'
  },
  {
    word: 'Blue',
    hint: 'The color of the sky and ocean',
    example: 'The sky is blue today.'
  },
  {
    word: 'Green',
    hint: 'The color of grass and leaves',
    example: 'The trees have green leaves.'
  },
  {
    word: 'Yellow',
    hint: 'The color of the sun and bananas',
    example: 'The sun is bright yellow.'
  },
  {
    word: 'Orange',
    hint: 'The color of carrots and oranges',
    example: 'The orange fruit is orange.'
  },
  {
    word: 'Pink',
    hint: 'The color of cotton candy and flamingos',
    example: 'The flower is pink.'
  },
  {
    word: 'Purple',
    hint: 'The color of grapes and eggplants',
    example: 'The grapes are purple.'
  },
  {
    word: 'Black',
    hint: 'The color of night and shadows',
    example: 'The night sky is black.'
  },
  {
    word: 'White',
    hint: 'The color of snow and clouds',
    example: 'The clouds are white.'
  },
  {
    word: 'Brown',
    hint: 'The color of chocolate and tree trunks',
    example: 'The tree trunk is brown.'
  }
];

const ColorWordSoundAnswerKey: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Colors and Their Meanings
                </h1>
              </div>

              <div className="p-4 md:p-6">
                {/* Color Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {WORD_LIST.map((item, index) => (
                    <div 
                      key={index}
                      className={`rounded-lg p-4 shadow-md
                        ${item.word === 'Red' ? 'bg-red-100 border border-red-200' :
                          item.word === 'Blue' ? 'bg-blue-100 border border-blue-200' :
                          item.word === 'Green' ? 'bg-green-100 border border-green-200' :
                          item.word === 'Yellow' ? 'bg-yellow-100 border border-yellow-200' :
                          item.word === 'Orange' ? 'bg-orange-100 border border-orange-200' :
                          item.word === 'Pink' ? 'bg-pink-100 border border-pink-200' :
                          item.word === 'Purple' ? 'bg-purple-100 border border-purple-200' :
                          item.word === 'Black' ? 'bg-gray-100 border border-gray-200' :
                          item.word === 'White' ? 'bg-gray-50 border border-gray-200' :
                          'bg-amber-100 border border-amber-200' // Brown
                        }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h2 className={`text-xl font-bold
                          ${item.word === 'Red' ? 'text-red-700' :
                            item.word === 'Blue' ? 'text-blue-700' :
                            item.word === 'Green' ? 'text-green-700' :
                            item.word === 'Yellow' ? 'text-yellow-700' :
                            item.word === 'Orange' ? 'text-orange-700' :
                            item.word === 'Pink' ? 'text-pink-700' :
                            item.word === 'Purple' ? 'text-purple-700' :
                            item.word === 'Black' ? 'text-gray-700' :
                            item.word === 'White' ? 'text-gray-700' :
                            'text-amber-700' // Brown
                          }`}
                        >
                          {item.word}
                        </h2>
                        <button
                          onClick={() => speak(item.word)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white
                            ${item.word === 'Red' ? 'bg-red-500 hover:bg-red-600' :
                              item.word === 'Blue' ? 'bg-blue-500 hover:bg-blue-600' :
                              item.word === 'Green' ? 'bg-green-500 hover:bg-green-600' :
                              item.word === 'Yellow' ? 'bg-yellow-500 hover:bg-yellow-600' :
                              item.word === 'Orange' ? 'bg-orange-500 hover:bg-orange-600' :
                              item.word === 'Pink' ? 'bg-pink-500 hover:bg-pink-600' :
                              item.word === 'Purple' ? 'bg-purple-500 hover:bg-purple-600' :
                              item.word === 'Black' ? 'bg-gray-800 hover:bg-gray-900' :
                              item.word === 'White' ? 'bg-gray-400 hover:bg-gray-500' :
                              'bg-amber-700 hover:bg-amber-800' // Brown
                            } transition-colors`}
                        >
                          🔊
                        </button>
                      </div>
                      <p className="text-gray-600 mb-2">{item.hint}</p>
                      <p className="text-gray-700 font-medium">{item.example}</p>
                    </div>
                  ))}
                </div>

                {/* Color Categories */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-6">
                  <h2 className="text-xl font-bold text-blue-700 mb-3">
                    Color Categories
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold text-blue-600 mb-2">Warm Colors:</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Red</li>
                        <li>Yellow</li>
                        <li>Orange</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-600 mb-2">Cool Colors:</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Blue</li>
                        <li>Green</li>
                        <li>Purple</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-600 mb-2">Light Colors:</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>White</li>
                        <li>Yellow</li>
                        <li>Pink</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-600 mb-2">Dark Colors:</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Black</li>
                        <li>Brown</li>
                        <li>Purple</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Color Facts */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h2 className="text-xl font-bold text-blue-700 mb-3">
                    Fun Color Facts
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Red, Blue, and Yellow are primary colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Green, Orange, and Purple are secondary colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>White and Black are special colors called neutrals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Brown is made by mixing different colors together</span>
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

export default ColorWordSoundAnswerKey; 