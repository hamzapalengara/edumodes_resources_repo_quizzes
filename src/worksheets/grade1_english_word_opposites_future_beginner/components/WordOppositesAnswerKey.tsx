import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word pairs data
const WORD_PAIRS = [
  { word1: 'digital', word2: 'analog', emoji1: '💻', emoji2: '⚙️' },
  { word1: 'future', word2: 'past', emoji1: '🚀', emoji2: '⏳' },
  { word1: 'online', word2: 'offline', emoji1: '🌐', emoji2: '🔌' },
  { word1: 'virtual', word2: 'physical', emoji1: '👓', emoji2: '🤖' },
  { word1: 'upgrade', word2: 'downgrade', emoji1: '⬆️', emoji2: '⬇️' },
  { word1: 'connect', word2: 'disconnect', emoji1: '🔗', emoji2: '✂️' },
  { word1: 'encrypt', word2: 'decrypt', emoji1: '🔒', emoji2: '🔓' },
  { word1: 'maximum', word2: 'minimum', emoji1: '📈', emoji2: '📉' },
  { word1: 'active', word2: 'standby', emoji1: '⚡', emoji2: '💤' },
  { word1: 'download', word2: 'upload', emoji1: '⬇️', emoji2: '⬆️' },
];

const WordOppositesAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-300 mb-6">
            Future Tech Opposites Guide
          </h1>

          {/* Word Pairs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {WORD_PAIRS.map((pair, index) => (
              <div
                key={index}
                className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between
                         border border-blue-500/30 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{pair.emoji1}</span>
                  <span className="font-bold text-blue-300">{pair.word1}</span>
                </div>
                <div className="text-blue-500">⟷</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-300">{pair.word2}</span>
                  <span className="text-2xl">{pair.emoji2}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Section */}
          <div className="space-y-6">
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌐</span> Tech Opposites Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Digital States</h3>
                  <ul className="space-y-1 text-blue-200">
                    <li>online - offline</li>
                    <li>active - standby</li>
                    <li>connect - disconnect</li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Data Operations</h3>
                  <ul className="space-y-1 text-blue-200">
                    <li>encrypt - decrypt</li>
                    <li>download - upload</li>
                    <li>maximum - minimum</li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Tech Evolution</h3>
                  <ul className="space-y-1 text-blue-200">
                    <li>digital - analog</li>
                    <li>future - past</li>
                    <li>upgrade - downgrade</li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Reality Types</h3>
                  <ul className="space-y-1 text-blue-200">
                    <li>virtual - physical</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Example Usage */}
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Future Tech Examples
              </h2>
              <div className="space-y-3 text-blue-200">
                <p>• The <span className="text-blue-300 font-bold">digital</span> smartwatch replaced the <span className="text-blue-300 font-bold">analog</span> clock.</p>
                <p>• When the internet is down, we go from <span className="text-blue-300 font-bold">online</span> to <span className="text-blue-300 font-bold">offline</span> mode.</p>
                <p>• The computer goes into <span className="text-blue-300 font-bold">standby</span> mode when not <span className="text-blue-300 font-bold">active</span>.</p>
              </div>
            </div>

            {/* Tech Tips */}
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span> Future Tech Tips
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Data Security</h3>
                  <p className="text-blue-200">
                    Learn how data is encrypted for security and decrypted for use
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Digital vs Analog</h3>
                  <p className="text-blue-200">
                    Compare modern digital devices with their analog predecessors
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Virtual Reality</h3>
                  <p className="text-blue-200">
                    Explore how virtual experiences differ from physical ones
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Connectivity</h3>
                  <p className="text-blue-200">
                    Understand online and offline modes in modern devices
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

export default WordOppositesAnswerKey; 