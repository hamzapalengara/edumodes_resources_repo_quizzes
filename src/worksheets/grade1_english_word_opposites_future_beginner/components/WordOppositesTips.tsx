import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordOppositesTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-300 mb-6">
            Future Tech Game Guide
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Game Strategy */}
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎮</span> Game Strategy
              </h2>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">1.</span>
                  Study both the tech term and its emoji icon
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">2.</span>
                  Think about how technology works in opposite ways
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">3.</span>
                  Group similar tech concepts together
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">4.</span>
                  Use the futuristic background image as a memory aid
                </li>
              </ul>
            </div>

            {/* Tech Learning Games */}
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span> Tech Learning Games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-blue-200">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="font-bold text-blue-300">Tech Detective</p>
                    <p className="text-sm">Find tech opposites in your daily devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-bold text-blue-300">Connection Explorer</p>
                    <p className="text-sm">Notice when devices connect and disconnect</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <p className="font-bold text-blue-300">Data Flow</p>
                    <p className="text-sm">Track when data uploads and downloads</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔋</span>
                  <div>
                    <p className="font-bold text-blue-300">Power States</p>
                    <p className="text-sm">Observe active and standby modes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Challenges */}
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Tech Tips
              </h2>
              <div className="space-y-3 text-blue-200">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">→</span>
                  <p>Watch for similar-looking tech terms like upload/download</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">→</span>
                  <p>Remember that digital and analog are common opposites</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">→</span>
                  <p>Notice how virtual differs from physical experiences</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">→</span>
                  <p>Think about how devices switch between states</p>
                </div>
              </div>
            </div>

            {/* Extra Practice */}
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Extra Missions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Tech Diary</h3>
                  <p className="text-blue-200">
                    Record tech opposites you find in your daily life
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Device States</h3>
                  <p className="text-blue-200">
                    List different states your devices can be in
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Tech Timeline</h3>
                  <p className="text-blue-200">
                    Compare past and future versions of technology
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Virtual Explorer</h3>
                  <p className="text-blue-200">
                    Note differences between virtual and physical worlds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesTips; 