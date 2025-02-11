import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordOppositesTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-green-300 text-center mb-2">
            Eco-Friendly Learning Tips
          </h1>
          <p className="text-green-200 text-center">
            Strategies to master environmental opposites while learning about sustainability
          </p>
        </div>

        {/* Learning Strategies */}
        <div className="grid gap-0.5 md:gap-4">
          {/* Visual Learning */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-green-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">👀</span>
              Visual Learning Tips
            </h2>
            <ul className="space-y-2 text-green-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">🌿</span>
                <span>Look for nature-related emojis that give clues about the word's meaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🎨</span>
                <span>Notice how matched pairs change to similar colors when connected</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🔄</span>
                <span>Observe the contrasting symbols between opposite words</span>
              </li>
            </ul>
          </div>

          {/* Memory Techniques */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-green-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">🧠</span>
              Memory Techniques
            </h2>
            <ul className="space-y-2 text-green-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">🌍</span>
                <span>Connect words to real environmental actions you can take</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">📸</span>
                <span>Create mental pictures of how each word affects nature</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🔄</span>
                <span>Practice using opposite pairs in sentences about the environment</span>
              </li>
            </ul>
          </div>

          {/* Eco-Activities */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-green-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">🌱</span>
              Eco-Learning Activities
            </h2>
            <div className="grid gap-2">
              <div className="bg-green-900/50 rounded-lg p-3">
                <h3 className="font-bold text-green-300 mb-2">Nature Detective 🔍</h3>
                <p className="text-green-100">Find examples of opposite words in your local environment and take notes about their differences.</p>
              </div>
              <div className="bg-green-900/50 rounded-lg p-3">
                <h3 className="font-bold text-green-300 mb-2">Eco Story Time 📖</h3>
                <p className="text-green-100">Create short stories using opposite pairs to describe environmental changes and solutions.</p>
              </div>
              <div className="bg-green-900/50 rounded-lg p-3">
                <h3 className="font-bold text-green-300 mb-2">Green Actions Log 📝</h3>
                <p className="text-green-100">Keep a diary of sustainable vs. unsustainable actions you observe throughout the day.</p>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-green-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Quick Tips for Success
            </h2>
            <ul className="space-y-2 text-green-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">🎯</span>
                <span>Focus on one pair at a time before moving to the next</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🔊</span>
                <span>Use the voice feature to hear the words pronounced clearly</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🌈</span>
                <span>Pay attention to the color changes that indicate correct matches</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🔄</span>
                <span>Practice regularly to reinforce your learning</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Environmental Message */}
        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center">
          <p className="text-green-300 font-bold mb-2">
            Remember: Learning about opposites helps us understand environmental impact! 🌍
          </p>
          <p className="text-green-100">
            Every small action counts towards making our planet a better place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesTips; 