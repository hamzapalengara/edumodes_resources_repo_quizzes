import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { word: 'BALL', emoji: '⚽', hint: 'Round object we use in many sports' },
  { word: 'SWIM', emoji: '🏊', hint: 'Moving through water using your arms and legs' },
  { word: 'JUMP', emoji: '🦘', hint: 'Push off the ground and go up in the air' },
  { word: 'RACE', emoji: '🏃', hint: 'Move fast to see who gets there first' },
  { word: 'KICK', emoji: '👟', hint: 'Use your foot to hit something' },
  { word: 'TEAM', emoji: '👥', hint: 'Group of people playing together' },
  { word: 'GOAL', emoji: '🥅', hint: 'Score points by getting the ball here' },
  { word: 'GAME', emoji: '🎮', hint: 'Fun activity with rules to follow' },
  { word: 'PLAY', emoji: '🎯', hint: 'Have fun doing an activity' },
  { word: 'RUN', emoji: '🏃‍♂️', hint: 'Move fast using your legs' },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">
            Sports Word Search - Answer Key
          </h1>
          
          <div className="bg-white rounded-xl p-4">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Words and Their Meanings:</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {WORD_LIST.map(({ word, emoji, hint }) => (
                <div
                  key={word}
                  className="flex items-start bg-blue-50 p-3 rounded-lg"
                >
                  <span className="text-2xl mr-3">{emoji}</span>
                  <div>
                    <span className="font-bold text-blue-800">{word}</span>
                    <p className="text-blue-600 text-sm mt-1">{hint}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-blue-800 mb-4">Tips for Finding Words:</h2>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Words can be found horizontally (left to right) ➡️</li>
              <li>Words can be found vertically (top to bottom) ⬇️</li>
              <li>Look for the first letter of each word to start your search</li>
              <li>Use your finger to follow the letters in a straight line</li>
              <li>Cross off words as you find them</li>
            </ul>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Teaching Tips:</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-700">
                <li>Help students identify the first letter sound of each word</li>
                <li>Practice saying the words out loud before searching</li>
                <li>Discuss different sports and physical activities</li>
                <li>Use the emojis as visual aids to reinforce word meanings</li>
                <li>Encourage movement breaks between searches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 