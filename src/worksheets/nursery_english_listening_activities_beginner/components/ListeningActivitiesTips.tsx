import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ListeningActivitiesTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-pink-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Main Tips */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-6 border-4 border-purple-200">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">
              Fun Tips for Listening and Matching! 🎯
            </h2>
            <div className="text-lg text-purple-600 font-medium">
              Let's make learning fun together! ✨
            </div>
          </div>

          <div className="space-y-6">
            {/* Listening Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 shadow-md">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mb-4 flex items-center gap-3">
                <span className="text-3xl">👂</span> Super Listening Tips
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="text-indigo-400 text-xl">🌟</span>
                  <p className="text-indigo-700 font-medium">Close your eyes to focus better on the sounds</p>
                </li>
                <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="text-indigo-400 text-xl">🎵</span>
                  <p className="text-indigo-700 font-medium">Listen to the whole activity description</p>
                </li>
                <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="text-indigo-400 text-xl">🔄</span>
                  <p className="text-indigo-700 font-medium">You can click the listen button many times</p>
                </li>
              </ul>
            </div>

            {/* Matching Tips */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 shadow-md">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span> Matching Magic Tips
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="text-purple-400 text-xl">👀</span>
                  <p className="text-purple-700 font-medium">Look at all the pictures before choosing</p>
                </li>
                <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="text-purple-400 text-xl">🤔</span>
                  <p className="text-purple-700 font-medium">Think about what the activity looks like</p>
                </li>
                <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="text-purple-400 text-xl">⭐</span>
                  <p className="text-purple-700 font-medium">Take your time to pick the right picture</p>
                </li>
              </ul>
            </div>

            {/* Remember */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border-2 border-yellow-200 shadow-md">
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 text-transparent bg-clip-text mb-4 flex items-center gap-3">
                <span className="text-3xl">✨</span> Remember
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="text-amber-400 text-xl">🎧</span>
                  <p className="text-amber-700 font-medium">It's okay to listen many times</p>
                </li>
                <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="text-amber-400 text-xl">🔍</span>
                  <p className="text-amber-700 font-medium">Each activity has only one matching picture</p>
                </li>
                <li className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="text-amber-400 text-xl">🎉</span>
                  <p className="text-amber-700 font-medium">Celebrate when you get it right!</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Example */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border-4 border-purple-200">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4 text-center">
            Let's Try an Example! 🎮
          </h3>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="text-4xl">🧸 🎮</div>
              <div>
                <div className="font-bold text-xl text-emerald-700 mb-2">
                  When you hear "playing with toys"
                </div>
                <div className="text-emerald-600 font-medium bg-white/50 p-3 rounded-lg">
                  Look for the teddy bear and game emojis that show playing! 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningActivitiesTips; 