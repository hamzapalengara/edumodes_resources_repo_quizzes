import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { word: 'TREE', emoji: '🌳' },
  { word: 'LEAF', emoji: '🍃' },
  { word: 'BIRD', emoji: '🐦' },
  { word: 'DEER', emoji: '🦌' },
  { word: 'BEAR', emoji: '🐻' },
  { word: 'OWL', emoji: '🦉' },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 to-lime-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">
            Forest Word Search - Answer Key
          </h1>
          
          <div className="bg-white rounded-xl p-4">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">Words to Find:</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {WORD_LIST.map(({ word, emoji }) => (
                <div
                  key={word}
                  className="flex items-center bg-emerald-50 p-3 rounded-lg"
                >
                  <span className="text-2xl mr-2">{emoji}</span>
                  <span className="font-bold text-emerald-800">{word}</span>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-emerald-800 mb-4">Tips for Finding Words:</h2>
            <ul className="list-disc list-inside space-y-2 text-emerald-700">
              <li>Words can be found horizontally (left to right) ➡️</li>
              <li>Words can be found vertically (top to bottom) ⬇️</li>
              <li>Look for the first letter of each word to start your search</li>
              <li>Use your finger to follow the letters in a straight line</li>
              <li>Cross off words as you find them</li>
            </ul>

            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Teaching Tips:</h3>
              <ul className="list-disc list-inside space-y-2 text-emerald-700">
                <li>Help students identify the first letter sound of each word</li>
                <li>Practice saying the words out loud before searching</li>
                <li>Discuss the forest theme and what students know about each word</li>
                <li>Use the emojis as visual aids to reinforce word meanings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 