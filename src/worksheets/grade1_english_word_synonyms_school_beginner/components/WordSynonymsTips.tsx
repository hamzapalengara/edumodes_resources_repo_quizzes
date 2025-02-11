import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSynonymsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-blue-300 text-center mb-2">
            School Learning Tips
          </h1>
          <p className="text-blue-200 text-center">
            Fun ways to learn and remember synonyms in your school activities
          </p>
        </div>

        {/* Learning Strategies */}
        <div className="grid gap-0.5 md:gap-4">
          {/* Visual Learning */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">👀</span>
              Visual Learning Tips
            </h2>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">📚</span>
                <span>Create a vocabulary journal with colorful word pairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🎨</span>
                <span>Draw pictures that show the meaning of each word pair</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">📝</span>
                <span>Make flashcards with synonyms on opposite sides</span>
              </li>
            </ul>
          </div>

          {/* Memory Techniques */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">🧠</span>
              Memory Techniques
            </h2>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">👥</span>
                <span>Practice with a study partner during break time</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">✍️</span>
                <span>Write sentences using both words about your school day</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🎵</span>
                <span>Create short rhymes with synonym pairs</span>
              </li>
            </ul>
          </div>

          {/* Classroom Activities */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">🏫</span>
              Fun Classroom Activities
            </h2>
            <div className="grid gap-2">
              <div className="bg-blue-900/50 rounded-lg p-3">
                <h3 className="font-bold text-blue-300 mb-2">Word Detective 🔍</h3>
                <p className="text-blue-100">Look for synonym pairs in your textbooks and classroom posters.</p>
              </div>
              <div className="bg-blue-900/50 rounded-lg p-3">
                <h3 className="font-bold text-blue-300 mb-2">Synonym Chain ⛓️</h3>
                <p className="text-blue-100">Take turns adding synonyms to create a word chain with classmates.</p>
              </div>
              <div className="bg-blue-900/50 rounded-lg p-3">
                <h3 className="font-bold text-blue-300 mb-2">Story Time 📖</h3>
                <p className="text-blue-100">Write short stories about school using as many synonym pairs as you can.</p>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Quick Tips for Success
            </h2>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">📅</span>
                <span>Learn one new pair of synonyms each day</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🎯</span>
                <span>Focus on understanding how each word is used</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🌟</span>
                <span>Reward yourself when you master new pairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">📚</span>
                <span>Keep a list of new synonyms you find in your reading</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Encouragement Message */}
        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center">
          <p className="text-blue-300 font-bold mb-2">
            You're on your way to becoming a word expert! 🎓
          </p>
          <p className="text-blue-100">
            Keep practicing and learning new words every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordSynonymsTips; 