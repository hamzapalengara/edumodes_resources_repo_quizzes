import React, { useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  {
    word: 'Dog',
    hint: 'A friendly pet that barks',
    example: 'The dog plays fetch with the ball.'
  },
  {
    word: 'Cat',
    hint: 'A furry pet that meows',
    example: 'The cat likes to sleep in the sun.'
  },
  {
    word: 'Cow',
    hint: 'A farm animal that gives us milk',
    example: 'The cow eats grass in the field.'
  },
  {
    word: 'Lion',
    hint: 'A big wild cat that roars',
    example: 'The lion is the king of the jungle.'
  },
  {
    word: 'Tiger',
    hint: 'A striped wild cat',
    example: 'The tiger has orange and black stripes.'
  },
  {
    word: 'Elephant',
    hint: 'A large animal with a long trunk',
    example: 'The elephant sprays water with its trunk.'
  },
  {
    word: 'Monkey',
    hint: 'A playful animal that climbs trees',
    example: 'The monkey swings from branch to branch.'
  },
  {
    word: 'Horse',
    hint: 'A strong animal we can ride',
    example: 'The horse runs fast in the field.'
  },
  {
    word: 'Fish',
    hint: 'An animal that swims in water',
    example: 'The fish swims in the pond.'
  },
  {
    word: 'Bird',
    hint: 'An animal that flies and sings',
    example: 'The bird builds a nest in the tree.'
  }
];

const AnimalWordSoundAnswerKey: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Animal Words Answer Key
                </h1>
              </div>

              <div className="p-4 md:p-6">
                {/* Word List Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {WORD_LIST.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-purple-700">{item.word}</h2>
                        <button
                          onClick={() => speak(item.word)}
                          className="w-8 h-8 flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors"
                          aria-label={`Pronounce ${item.word}`}
                        >
                          🔊
                        </button>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-purple-700">
                          <span className="font-medium">Meaning: </span>
                          {item.hint}
                        </p>
                        <p className="text-purple-700">
                          <span className="font-medium">Example: </span>
                          {item.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Animal Categories */}
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h2 className="text-xl font-bold text-purple-700 mb-4">Animal Categories</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-purple-700 mb-2">Pets:</h3>
                      <ul className="list-disc list-inside text-purple-600">
                        <li>Dog</li>
                        <li>Cat</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-purple-700 mb-2">Farm Animals:</h3>
                      <ul className="list-disc list-inside text-purple-600">
                        <li>Cow</li>
                        <li>Horse</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-purple-700 mb-2">Wild Animals:</h3>
                      <ul className="list-disc list-inside text-purple-600">
                        <li>Lion</li>
                        <li>Tiger</li>
                        <li>Elephant</li>
                        <li>Monkey</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-purple-700 mb-2">Other Animals:</h3>
                      <ul className="list-disc list-inside text-purple-600">
                        <li>Fish</li>
                        <li>Bird</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Fun Facts */}
                <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h2 className="text-xl font-bold text-purple-700 mb-3">Fun Animal Facts</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span className="text-purple-700">Dogs can understand over 150 words!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span className="text-purple-700">Cats spend 70% of their lives sleeping.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span className="text-purple-700">Elephants are the only animals that can't jump.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span className="text-purple-700">Tigers have striped skin, not just striped fur!</span>
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

export default AnimalWordSoundAnswerKey; 