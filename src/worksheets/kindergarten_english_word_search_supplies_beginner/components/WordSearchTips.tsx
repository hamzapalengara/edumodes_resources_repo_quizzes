import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
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
                <p>Look at the list of school supplies you need to find.</p>
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
                <p>When you find a word, it will light up and say its name! 🌈</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Fun School Supply Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun School Supply Facts 📚
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Writing Tools</h3>
              <div className="space-y-2 text-white">
                <p>✏️ Pencils can write for about 35 miles!</p>
                <p>🖊️ The first pens were made from feathers!</p>
                <p>🧼 Erasers were first made from bread crumbs!</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Paper and Books</h3>
              <div className="space-y-2 text-white">
                <p>📄 Paper was first made from tree bark</p>
                <p>📚 Books used to be written by hand</p>
                <p>📏 Rulers help us draw straight lines</p>
              </div>
            </div>

            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Classroom Tools</h3>
              <div className="space-y-2 text-white">
                <p>🪑 Desks keep all your supplies organized</p>
                <p>🧊 Glue sticks were invented for schools</p>
                <p>🎒 Backpacks help carry heavy books</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supply Care Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Taking Care of Your Supplies 🎯
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Writing Tools</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Keep pencils sharpened</li>
                <li>Close pen caps tightly</li>
                <li>Don't press too hard with erasers</li>
                <li>Store in a pencil case</li>
              </ul>
            </div>
            
            <div className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Books and Paper</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Keep papers neat and flat</li>
                <li>Use folders to organize</li>
                <li>Don't bend book covers</li>
                <li>Keep away from water</li>
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
                <span>📚</span>
                <p>Good supplies help you learn better!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🎨</span>
                <p>Share with friends who need help!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>✨</span>
                <p>Keep your supplies clean and organized!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 