import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  'Dog',
  'Cat',
  'Cow',
  'Lion',
  'Tiger',
  'Elephant',
  'Monkey',
  'Horse',
  'Fish',
  'Bird'
];

const AnimalWordSoundTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Tips for Animal Word Sound Game
                </h1>
              </div>

              <div className="p-4 md:p-6 space-y-6">
                {/* Listening Tips Section */}
                <section className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h2 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <span>🎧</span> Listening Tips
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">1.</span>
                      <span>Listen carefully to each word sound before choosing an answer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">2.</span>
                      <span>Click the speaker button multiple times if you need to hear it again</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">3.</span>
                      <span>Try to say the word yourself after hearing it</span>
                    </li>
                  </ul>
                </section>

                {/* Word Recognition Section */}
                <section className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h2 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <span>📝</span> Animal Words to Practice
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {WORD_LIST.map((word, index) => (
                      <div 
                        key={index}
                        className="bg-white p-3 rounded border border-purple-200 flex items-center justify-center"
                      >
                        <span className="text-purple-600 font-medium">{word}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Game Strategy Section */}
                <section className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h2 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <span>🎯</span> Game Strategy
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">1.</span>
                      <span>Start with familiar animals like "Cat" and "Dog"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">2.</span>
                      <span>Look at all three options before making your choice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">3.</span>
                      <span>Take your time - there's no rush to answer!</span>
                    </li>
                  </ul>
                </section>

                {/* Fun Learning Activities */}
                <section className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h2 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <span>🌟</span> Fun Learning Activities
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>Make animal sounds and ask others to guess the animal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>Draw pictures of the animals and label them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>Create stories using the animal words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>Play "Animal Charades" by acting out the animals</span>
                    </li>
                  </ul>
                </section>

                {/* Tips for Parents and Teachers */}
                <section className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h2 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <span>👥</span> Tips for Parents and Teachers
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>Encourage children to make connections with animals they know</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>Celebrate progress and maintain a positive learning environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>Use real-world examples when possible (pets, zoo visits, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>Practice the words in everyday conversations</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default AnimalWordSoundTips; 