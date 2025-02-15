import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Import images
import sleepingImage from '../assets/sleepinbed.jpg';
import dancingImage from '../assets/dance.jpg';
import readingImage from '../assets/readbook.jpg';
import ridingImage from '../assets/ridecycle.jpg';
import playingImage from '../assets/playwithtoys.jpg';

interface Activity {
  audio: string;
  image: string;
  name: string;
  explanation: string;
}

const activities: Activity[] = [
  {
    audio: "sleeping in bed",
    image: sleepingImage,
    name: "sleeping",
    explanation: "When you hear 'sleeping in bed', find the picture of someone sleeping. This shows it's time for a peaceful rest!"
  },
  {
    audio: "dancing to music",
    image: dancingImage,
    name: "dancing",
    explanation: "For 'dancing to music', look for the picture of someone dancing. This shows someone having fun with music!"
  },
  {
    audio: "reading a book",
    image: readingImage,
    name: "reading",
    explanation: "For 'reading a book', find the picture of a child reading. This shows someone enjoying their reading time!"
  },
  {
    audio: "riding a bicycle",
    image: ridingImage,
    name: "riding",
    explanation: "When you hear 'riding a bicycle', look for the picture of a child riding their bike. This shows someone having fun cycling!"
  },
  {
    audio: "playing with toys",
    image: playingImage,
    name: "playing",
    explanation: "When you hear 'playing with toys', match it with the picture of children playing. This shows fun playtime with toys!"
  }
];

const ListeningActivitiesAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-pink-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-6 border-4 border-purple-200">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">
              Daily Activities - Answer Key
            </h2>
            <div className="text-lg text-purple-600 font-medium">
              Let's learn about each activity! 🌟
            </div>
          </div>
          
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-24 h-24 bg-white rounded-xl shadow-sm overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                      {activity.audio}
                    </div>
                    <div className="text-purple-600 font-medium mt-1">
                      Activity {index + 1}
                    </div>
                  </div>
                </div>
                <p className="text-purple-700 text-base bg-white/80 p-3 rounded-lg">
                  {activity.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border-4 border-purple-200">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4 text-center">
            Helpful Tips for Listening! 🎯
          </h3>
          <div className="grid gap-4">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-xl border-2 border-yellow-200">
              <div className="flex items-center gap-3 text-amber-700 font-medium">
                <span className="text-2xl">👂</span>
                <p>Listen carefully to each activity description</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border-2 border-blue-200">
              <div className="flex items-center gap-3 text-indigo-700 font-medium">
                <span className="text-2xl">🔄</span>
                <p>You can listen to the sound as many times as you need</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-200">
              <div className="flex items-center gap-3 text-emerald-700 font-medium">
                <span className="text-2xl">🎯</span>
                <p>Look at all the pictures before making your choice</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-200">
              <div className="flex items-center gap-3 text-purple-700 font-medium">
                <span className="text-2xl">✨</span>
                <p>Take your time and have fun learning!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningActivitiesAnswerKey; 