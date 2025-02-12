import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { 
    word: 'MOTHER', 
    emoji: '👩', 
    hint: 'Takes care of you and loves you very much',
    examples: '👩‍👧 👩‍👦 💝'
  },
  { 
    word: 'FATHER', 
    emoji: '👨', 
    hint: 'Protects and guides you through life',
    examples: '👨‍👧 👨‍👦 💪'
  },
  { 
    word: 'SISTER', 
    emoji: '👧', 
    hint: 'A girl who shares your parents',
    examples: '👯‍♀️ 🎀 💕'
  },
  { 
    word: 'BROTHER', 
    emoji: '👦', 
    hint: 'A boy who shares your parents',
    examples: '👬 🤝 ⚽'
  },
  { 
    word: 'BABY', 
    emoji: '👶', 
    hint: 'The youngest member of the family',
    examples: '🍼 🎈 🧸'
  },
  { 
    word: 'GRANDMA', 
    emoji: '👵', 
    hint: "Your mother or father's mother",
    examples: '👵 🧁 💝'
  },
  { 
    word: 'GRANDPA', 
    emoji: '👴', 
    hint: "Your mother or father's father",
    examples: '👴 📖 🎣'
  },
  { 
    word: 'AUNT', 
    emoji: '🧑', 
    hint: "Your parent's sister",
    examples: '🎁 🧁 💝'
  },
  { 
    word: 'UNCLE', 
    emoji: '👨‍🦰', 
    hint: "Your parent's brother",
    examples: '🎮 🎪 🎯'
  },
  { 
    word: 'COUSIN', 
    emoji: '🧒', 
    hint: "Your aunt or uncle's child",
    examples: '👥 🎮 🎪'
  },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 to-amber-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Family Members Word Search - Answer Key 👨‍👩‍👧‍👦
          </h1>
        </div>

        {/* Family Members and Their Roles */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Our Family Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORD_LIST.map(({ word, emoji, hint, examples }) => (
              <div 
                key={word}
                className="bg-white/30 rounded-lg p-3"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{emoji}</span>
                  <h3 className="font-bold text-white">{word}</h3>
                </div>
                <p className="text-white/90 mb-2">{hint}</p>
                <div className="text-2xl">{examples}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning About Family */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Learning About Family</h2>
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Family Love</h3>
              <p className="text-white/90">
                ❤️ Families love and care for each other<br />
                🤗 Families give hugs and support<br />
                🏠 Families share a home together<br />
                🎈 Families celebrate special moments
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Family Activities</h3>
              <p className="text-white/90">
                🍽️ Having meals together<br />
                🎮 Playing games as a family<br />
                🏞️ Going on family trips<br />
                📚 Reading stories together
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Family Traditions</h3>
              <p className="text-white/90">
                🎂 Celebrating birthdays<br />
                🎄 Holiday gatherings<br />
                📸 Taking family photos<br />
                🌟 Creating special memories
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4">Teaching Tips</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Family Tree Activity</h3>
              <p className="text-white/90">
                Draw a simple family tree to show relationships between family members.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Family Photo Album</h3>
              <p className="text-white/90">
                Look at family photos and identify different family members.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Role Play</h3>
              <p className="text-white/90">
                Act out different family roles and activities to understand relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 