import React from 'react';

// Import images
import sleepingImage from '../assets/sleepinbed.jpg';
import dancingImage from '../assets/dance.jpg';

const ListeningActivitiesThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center border-4 border-purple-200">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">
          Listen and Match Activities
        </h1>

        {/* Preview Content */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">🔊</div>
            <div className="text-sm font-medium text-purple-600">Listen</div>
          </div>
          <div className="text-3xl text-purple-400">➡️</div>
          <div className="flex gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200 overflow-hidden">
              <img 
                src={sleepingImage} 
                alt="Sleeping"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200 overflow-hidden">
              <img 
                src={dancingImage} 
                alt="Dancing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-3">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full text-sm font-medium text-indigo-700 border border-indigo-200 shadow-sm flex items-center gap-1">
            <span>🔊</span>
            Listen
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-sm font-medium text-pink-700 border border-pink-200 shadow-sm flex items-center gap-1">
            <span>🎯</span>
            Match
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-full text-sm font-medium text-amber-700 border border-amber-200 shadow-sm flex items-center gap-1">
            <span>✨</span>
            Learn
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningActivitiesThumbnail; 