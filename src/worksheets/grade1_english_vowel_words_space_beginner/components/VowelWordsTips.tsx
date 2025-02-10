import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const VowelWordsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-300 mb-6">
            Space Explorer's Guide to Vowels
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Vowel Recognition */}
            <div className="bg-indigo-900/30 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span> Mission Control: Know Your Vowels
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {[
                  { letter: 'A', words: ['air', 'atom', 'alien'] },
                  { letter: 'E', words: ['earth', 'echo', 'energy'] },
                  { letter: 'I', words: ['ice', 'ion', 'iris'] },
                  { letter: 'O', words: ['orbit', 'orb', 'oxygen'] },
                  { letter: 'U', words: ['up', 'ufo', 'uranus'] },
                ].map(vowel => (
                  <div key={vowel.letter} className="bg-black/20 rounded-lg p-3 text-center">
                    <div className="text-3xl font-bold text-purple-300 mb-2">{vowel.letter}</div>
                    <div className="text-sm text-indigo-200 space-y-1">
                      {vowel.words.map(word => (
                        <div key={word}>{word}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Strategies */}
            <div className="bg-purple-900/30 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🛸</span> Space Training Strategies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎵</span> Cosmic Chant
                  </h3>
                  <p className="text-indigo-200">
                    "A-E-I-O-U, these vowels will help us zoom!"
                  </p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                    <span className="text-xl">👆</span> Star Scanner
                  </h3>
                  <p className="text-indigo-200">
                    Point to the first letter like a space scanner
                  </p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                    <span className="text-xl">🌈</span> Galaxy Colors
                  </h3>
                  <p className="text-indigo-200">
                    Imagine vowels glowing in different colors
                  </p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎮</span> Space Game
                  </h3>
                  <p className="text-indigo-200">
                    Pretend you're collecting vowel stars in space
                  </p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-900/30 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-red-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Space Mission Alerts
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <p className="font-bold text-red-300">Wrong Navigation</p>
                    <p className="text-red-200">Don't scan the whole word, just the first letter</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <p className="font-bold text-red-300">Meteor Shower Rush</p>
                    <p className="text-red-200">Take your time, don't rush through the stars</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <p className="font-bold text-red-300">Lost in Space</p>
                    <p className="text-red-200">Remember all five vowels: a, e, i, o, u</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Tips */}
            <div className="bg-blue-900/30 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">💫</span> Training Missions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-blue-300 mb-2">Star Maps</h3>
                  <p className="text-blue-200">
                    Create maps of vowel words in your space journal
                  </p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-blue-300 mb-2">Space Race</h3>
                  <p className="text-blue-200">
                    Race to spot vowel words with your crew
                  </p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-blue-300 mb-2">Constellation Connect</h3>
                  <p className="text-blue-200">
                    Connect vowel words to form constellations
                  </p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-blue-300 mb-2">Galaxy Groups</h3>
                  <p className="text-blue-200">
                    Group words by their vowel sounds
                  </p>
                </div>
              </div>
            </div>

            {/* Parent/Teacher Section */}
            <div className="bg-purple-900/30 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">📡</span> Mission Control Guide
              </h2>
              <div className="space-y-4 text-purple-200">
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2">Daily Space Training</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Start with simple space-themed words</li>
                    <li>Use visual aids like star charts</li>
                    <li>Make learning fun with space games</li>
                    <li>Celebrate each successful mission</li>
                  </ul>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2">Advanced Missions</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Create space word sorting games</li>
                    <li>Draw constellation word maps</li>
                    <li>Write space adventure stories</li>
                    <li>Build a vowel word galaxy wall</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VowelWordsTips; 