import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 to-amber-600">
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
                <p>Look at the list of family members you need to find.</p>
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
                <p>When you find a family member word, it will light up in a special color! 🌈</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Fun Family Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun Family Facts 👨‍👩‍👧‍👦
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Family Fun Facts</h3>
              <div className="space-y-2 text-white">
                <p>🏠 Every family is special and unique!</p>
                <p>💝 Families come in all shapes and sizes!</p>
                <p>🌍 Families live all around the world!</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Family Roles</h3>
              <div className="space-y-2 text-white">
                <p>👨‍👩‍👧‍👦 Each family member has special roles</p>
                <p>🤝 Family members help each other</p>
                <p>❤️ Family means love and support</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Family Time</h3>
              <div className="space-y-2 text-white">
                <p>🎮 Playing games together is fun</p>
                <p>🍽️ Sharing meals brings us closer</p>
                <p>📸 Making memories is important</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Activities */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun Family Activities 🎯
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Family Songs</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>The Family Song</li>
                <li>We Are Family</li>
                <li>Family Dance Party</li>
                <li>Love Grows</li>
              </ul>
            </div>
            
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Family Art</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Draw your family portrait</li>
                <li>Make a family tree</li>
                <li>Create a family scrapbook</li>
                <li>Paint family handprints</li>
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
                <span>❤️</span>
                <p>Every family is special and important!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🤗</span>
                <p>Show love to your family members!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌟</span>
                <p>Spend quality time with your family!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 