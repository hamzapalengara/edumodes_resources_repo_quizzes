import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">
            Sports Word Search - Tips
          </h1>
          
          <div className="bg-white rounded-xl p-4">
            <section className="mb-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">How to Play:</h2>
              <ul className="list-disc list-inside space-y-2 text-blue-700">
                <li>Look at the list of sports words you need to find</li>
                <li>Search for these words in the letter grid</li>
                <li>Words can go across ➡️ or down ⬇️</li>
                <li>Tap and drag to select letters when you find a word</li>
                <li>The word will highlight when you find it correctly</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Helpful Strategies:</h2>
              <ul className="list-disc list-inside space-y-2 text-blue-700">
                <li>Start by looking for short words like "RUN"</li>
                <li>Look for the first letter of each word</li>
                <li>Use your finger to guide your eyes along the lines</li>
                <li>Take your time and be patient</li>
                <li>Cross off words as you find them</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Fun Sports Facts:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">⚽ Ball Games</h3>
                  <p className="text-blue-700">Many sports use different types of balls. Soccer uses a round ball, football is oval, and tennis uses a small yellow ball!</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">🏊 Swimming</h3>
                  <p className="text-blue-700">Swimming is a great exercise that uses your whole body. You can do different strokes like freestyle and backstroke.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">🦘 Jumping</h3>
                  <p className="text-blue-700">Athletes jump in many sports! High jump, long jump, and basketball players all need to jump high.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">🏃 Running</h3>
                  <p className="text-blue-700">Running is one of the oldest sports. People run races of different distances, from short sprints to long marathons.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">👥 Teams</h3>
                  <p className="text-blue-700">Many sports are played in teams. Working together helps everyone do better and makes the game more fun!</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">🥅 Scoring Goals</h3>
                  <p className="text-blue-700">In many sports, you score by getting the ball into a goal. Soccer, hockey, and basketball all have different types of goals.</p>
                </div>
              </div>
            </section>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h2 className="text-xl font-bold text-blue-800 mb-2">Remember:</h2>
              <ul className="list-disc list-inside space-y-2 text-blue-700">
                <li>Take breaks and stretch between searches</li>
                <li>Celebrate when you find each word!</li>
                <li>Learn about different sports and activities</li>
                <li>Stay active and have fun while learning!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 