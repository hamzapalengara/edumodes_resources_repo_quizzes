import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-500">
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
                <p>Look at the list of colors you need to find.</p>
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
                <p>When you find a color word, it will light up in that color! 🌈</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Color Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun Color Facts 🎨
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Primary Colors</h3>
              <div className="space-y-2 text-white">
                <p>🔴 Red + 💛 Yellow = 🟧 Orange</p>
                <p>💛 Yellow + 🔵 Blue = 🟢 Green</p>
                <p>🔵 Blue + 🔴 Red = 💜 Purple</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Colors in Nature</h3>
              <div className="space-y-2 text-white">
                <p>🌈 Rainbows appear when sunlight hits water droplets</p>
                <p>🍁 Leaves change colors in autumn</p>
                <p>🦋 Butterflies use bright colors to stay safe</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Colors and Feelings</h3>
              <div className="space-y-2 text-white">
                <p>💛 Yellow can make you feel happy</p>
                <p>💙 Blue can help you feel calm</p>
                <p>❤️ Red can make you feel excited</p>
              </div>
            </div>
          </div>
        </div>

        {/* Color Hunt Ideas */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Color Hunt Ideas 🔍
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">In Your Room</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Find something red like a toy</li>
                <li>Look for blue clothes</li>
                <li>Spot green plants</li>
                <li>Find yellow books</li>
              </ul>
            </div>
            
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Outside</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Look for white clouds</li>
                <li>Find brown tree trunks</li>
                <li>Spot orange flowers</li>
                <li>Find pink blossoms</li>
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
                <span>🎨</span>
                <p>Colors make our world beautiful and interesting!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>👀</span>
                <p>Look for colors everywhere you go!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌈</span>
                <p>Have fun learning about different colors!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 