import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const cardImages = [
  { emoji: '🐶', name: 'Puppy' },
  { emoji: '🐱', name: 'Kitty' },
  { emoji: '🐰', name: 'Bunny' },
  { emoji: '🐼', name: 'Panda' },
  { emoji: '🦊', name: 'Fox' },
  { emoji: '🦁', name: 'Lion' }
];

const MemoryAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="flex flex-col items-center max-w-2xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
            Memory Game Guide 📝
          </h1>

          {/* Game Overview */}
          <div className="w-full bg-blue-50 p-6 rounded-xl mb-6 border-2 border-blue-100">
            <h2 className="text-xl font-bold text-blue-800 mb-3">
              Game Overview
            </h2>
            <p className="text-blue-700 mb-4">
              This memory game helps develop:
            </p>
            <ul className="list-disc list-inside text-blue-600 space-y-2">
              <li>Memory skills</li>
              <li>Concentration</li>
              <li>Pattern recognition</li>
              <li>Quick thinking</li>
              <li>Visual matching abilities</li>
            </ul>
          </div>

          {/* Card Pairs */}
          <div className="w-full bg-green-50 p-6 rounded-xl mb-6 border-2 border-green-100">
            <h2 className="text-xl font-bold text-green-800 mb-3">
              Animal Friends to Match
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cardImages.map((card, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg border-2 border-green-200 text-center"
                >
                  <div className="text-4xl mb-2">{card.emoji}</div>
                  <div className="text-green-700 font-medium">{card.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scoring System */}
          <div className="w-full bg-purple-50 p-6 rounded-xl mb-6 border-2 border-purple-100">
            <h2 className="text-xl font-bold text-purple-800 mb-3">
              Scoring System
            </h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="text-2xl mr-3">🎯</div>
                <div>
                  <div className="font-bold text-purple-800">Basic Match</div>
                  <div className="text-purple-600">10 points per match</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl mr-3">⚡</div>
                <div>
                  <div className="font-bold text-purple-800">Speed Bonus</div>
                  <div className="text-purple-600">+5 points for matches under 3 seconds</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl mr-3">🏆</div>
                <div>
                  <div className="font-bold text-purple-800">Perfect Score</div>
                  <div className="text-purple-600">90 points (60 base + 30 bonus)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Tips */}
          <div className="w-full bg-yellow-50 p-6 rounded-xl mb-6 border-2 border-yellow-100">
            <h2 className="text-xl font-bold text-yellow-800 mb-3">
              Teaching Tips
            </h2>
            <ul className="space-y-3 text-yellow-700">
              <li className="flex items-start">
                <span className="text-xl mr-2">1️⃣</span>
                <span>Start by having the child identify and name each animal before playing</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">2️⃣</span>
                <span>Encourage the child to develop a strategy (like starting from one corner)</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">3️⃣</span>
                <span>Practice remembering card positions by talking about their locations</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">4️⃣</span>
                <span>Celebrate each match to build confidence and motivation</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2">5️⃣</span>
                <span>Use the voice feedback to reinforce learning and engagement</span>
              </li>
            </ul>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default MemoryAnswerKey; 