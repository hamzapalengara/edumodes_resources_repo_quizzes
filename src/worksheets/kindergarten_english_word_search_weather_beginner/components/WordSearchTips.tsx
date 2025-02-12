import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-orange-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* How to Play */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            How to Play 🎮
          </h2>
          
          <div className="bg-white/30 rounded-lg p-4">
            <ol className="space-y-3 text-white">
              <li className="flex items-start space-x-2">
                <span className="font-bold">1.</span>
                <p>Look at the list of weather and season words you need to find.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold">2.</span>
                <p>Words can be found going across (➡️) or down (⬇️) in the grid.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold">3.</span>
                <p>Touch and drag your finger over the letters to select a word.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold">4.</span>
                <p>When you find a word, it will light up in a special color! 🌈</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Weather and Season Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun Weather & Season Facts 🌍
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Weather Types</h3>
              <div className="space-y-2 text-white">
                <p>☀️ Sunny days are warm and bright</p>
                <p>🌧️ Rain helps plants grow</p>
                <p>❄️ Snow is frozen water</p>
                <p>💨 Wind moves leaves and clouds</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">The Four Seasons</h3>
              <div className="space-y-2 text-white">
                <p>🌸 Spring brings new flowers</p>
                <p>☀️ Summer is hot and sunny</p>
                <p>🍂 Autumn has colorful leaves</p>
                <p>❄️ Winter is cold with snow</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Weather Safety</h3>
              <div className="space-y-2 text-white">
                <p>☔ Use an umbrella in the rain</p>
                <p>🧴 Wear sunscreen on sunny days</p>
                <p>🧥 Dress warmly in cold weather</p>
                <p>⛈️ Stay inside during storms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Activities */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Weather Activities 🎨
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Indoor Weather Fun</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Draw pictures of the weather</li>
                <li>Make paper snowflakes</li>
                <li>Create a weather chart</li>
                <li>Read weather stories</li>
              </ul>
            </div>
            
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Outdoor Weather Fun</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Watch clouds move</li>
                <li>Feel the wind direction</li>
                <li>Catch raindrops</li>
                <li>Make snow angels</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reminders */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Remember 🌟
          </h2>
          
          <div className="bg-white/30 rounded-lg p-4">
            <ul className="space-y-3 text-white">
              <li className="flex items-start space-x-2">
                <span>🌈</span>
                <p>Weather changes make our world interesting!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌍</span>
                <p>Different places have different weather!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🎯</span>
                <p>Take your time and look carefully for words!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 