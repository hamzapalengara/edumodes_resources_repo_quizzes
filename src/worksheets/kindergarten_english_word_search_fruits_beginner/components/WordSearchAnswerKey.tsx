import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { word: 'APPLE', emoji: '🍎', hint: 'Red or green fruit that keeps the doctor away' },
  { word: 'PEAR', emoji: '🍐', hint: 'Green fruit shaped like a teardrop' },
  { word: 'GRAPE', emoji: '🍇', hint: 'Small round fruits that grow in bunches' },
  { word: 'PEACH', emoji: '🍑', hint: 'Fuzzy fruit with sweet orange flesh' },
  { word: 'PLUM', emoji: '🫐', hint: 'Round purple fruit with juicy flesh' },
  { word: 'MANGO', emoji: '🥭', hint: 'Sweet tropical fruit with orange flesh' },
  { word: 'LEMON', emoji: '🍋', hint: 'Sour yellow citrus fruit' },
  { word: 'KIWI', emoji: '🥝', hint: 'Green fruit with fuzzy brown skin' },
  { word: 'MELON', emoji: '🍈', hint: 'Large round fruit with sweet flesh' },
  { word: 'LIME', emoji: '🍋', hint: 'Small green citrus fruit' },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-yellow-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Fruit Word Search - Answer Key 🍎
          </h1>
        </div>

        {/* Words and Their Meanings */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Words and Their Meanings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORD_LIST.map(({ word, emoji, hint }) => (
              <div 
                key={word}
                className="bg-white/30 rounded-lg p-3 flex items-start"
              >
                <span className="text-2xl mr-3">{emoji}</span>
                <div>
                  <h3 className="font-bold text-white">{word}</h3>
                  <p className="text-white/80 text-sm">{hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Finding Words */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Tips for Finding Words</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">1. Look for Patterns</h3>
              <p className="text-white/80">
                Words can be found going across (➡️) or down (⬇️). Look for the first letter
                of each word and check these directions.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">2. Use the Hints</h3>
              <p className="text-white/80">
                If you're stuck, read the hint for the word you're looking for. This can help
                you remember what the word looks like.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">3. Take Your Time</h3>
              <p className="text-white/80">
                Go through the grid systematically. Start from the top and work your way down,
                looking for each word one at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Teaching Tips</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Vocabulary Development</h3>
              <p className="text-white/80">
                Before starting the word search, discuss each fruit with the child. Talk about
                their colors, tastes, and when they might eat them.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Letter Recognition</h3>
              <p className="text-white/80">
                Help children identify the first letter of each fruit name. This makes it
                easier to spot words in the grid.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Make it Fun</h3>
              <p className="text-white/80">
                Turn it into a game! See who can find the most fruits in a minute, or take
                turns finding different fruits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 