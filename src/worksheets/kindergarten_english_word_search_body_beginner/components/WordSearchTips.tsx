import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
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
                <p>Look at the list of body parts you need to find.</p>
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
                <p>When you find a body part word, it will light up in a special color! 🌈</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Fun Body Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun Body Facts 🧬
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Amazing Body Facts</h3>
              <div className="space-y-2 text-white">
                <p>👂 Your ears never stop growing!</p>
                <p>👁️ Your eyes blink about 28,000 times a day!</p>
                <p>💪 You have more than 600 muscles in your body!</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Our Five Senses</h3>
              <div className="space-y-2 text-white">
                <p>👀 Eyes help us see colors and shapes</p>
                <p>👃 Nose can smell thousands of different scents</p>
                <p>👂 Ears help us keep our balance too!</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Body Movement</h3>
              <div className="space-y-2 text-white">
                <p>🏃‍♂️ Legs help us run, jump, and dance</p>
                <p>🤸‍♂️ Arms help us climb and catch</p>
                <p>🦶 Feet have 26 bones each!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Activities */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun Body Activities 🎯
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Action Songs</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Head, Shoulders, Knees and Toes</li>
                <li>If You're Happy and You Know It</li>
                <li>The Hokey Pokey</li>
                <li>Simon Says</li>
              </ul>
            </div>
            
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Body Art</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Draw a self-portrait</li>
                <li>Make hand prints</li>
                <li>Create a body puzzle</li>
                <li>Label body parts on drawings</li>
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
                <span>💪</span>
                <p>Every part of your body is important!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🧼</span>
                <p>Keep your body clean and healthy!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🤸‍♂️</span>
                <p>Exercise helps your body grow strong!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 