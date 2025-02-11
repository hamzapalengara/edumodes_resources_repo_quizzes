import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSynonymsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-amber-300 text-center mb-2">
            Home & Family Learning Tips
          </h1>
          <p className="text-amber-200 text-center">
            Fun ways to learn and remember synonyms in your daily home life
          </p>
        </div>

        {/* Learning Strategies */}
        <div className="grid gap-0.5 md:gap-4">
          {/* Visual Learning */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-amber-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">👀</span>
              Visual Learning Tips
            </h2>
            <ul className="space-y-2 text-amber-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">🏠</span>
                <span>Look for examples of synonym pairs around your house</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🎨</span>
                <span>Draw pictures showing the meaning of each word pair</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">📱</span>
                <span>Use the emojis to help remember word connections</span>
              </li>
            </ul>
          </div>

          {/* Memory Techniques */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-amber-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">🧠</span>
              Memory Techniques
            </h2>
            <ul className="space-y-2 text-amber-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">👨‍👩‍👧‍👦</span>
                <span>Practice using both words when talking with family members</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">📸</span>
                <span>Take mental pictures of where you see these words at home</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🎵</span>
                <span>Create simple rhymes or songs with synonym pairs</span>
              </li>
            </ul>
          </div>

          {/* Home Activities */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-amber-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">🏡</span>
              Fun Home Activities
            </h2>
            <div className="grid gap-2">
              <div className="bg-amber-900/50 rounded-lg p-3">
                <h3 className="font-bold text-amber-300 mb-2">Synonym Scavenger Hunt 🔍</h3>
                <p className="text-amber-100">Find objects around your house that match each synonym pair and make a list.</p>
              </div>
              <div className="bg-amber-900/50 rounded-lg p-3">
                <h3 className="font-bold text-amber-300 mb-2">Family Word Game 🎲</h3>
                <p className="text-amber-100">Take turns using different synonyms to describe things in your home.</p>
              </div>
              <div className="bg-amber-900/50 rounded-lg p-3">
                <h3 className="font-bold text-amber-300 mb-2">Story Time Fun 📖</h3>
                <p className="text-amber-100">Create short stories about your family using synonym pairs.</p>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-amber-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Quick Tips for Success
            </h2>
            <ul className="space-y-2 text-amber-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">🎯</span>
                <span>Start with the easiest pairs and work your way up</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🔊</span>
                <span>Say both words out loud to help remember them</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🏆</span>
                <span>Celebrate when you learn each new pair</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">📅</span>
                <span>Practice a little bit every day</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Family Message */}
        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center">
          <p className="text-amber-300 font-bold mb-2">
            Learning is more fun with family! 👨‍👩‍👧‍👦
          </p>
          <p className="text-amber-100">
            Share what you learn with everyone at home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordSynonymsTips; 