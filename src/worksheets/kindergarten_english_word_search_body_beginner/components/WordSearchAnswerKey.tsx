import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { 
    word: 'HEAD', 
    emoji: '👤', 
    hint: 'Where your brain lives and where you think',
    examples: '🧠 👩 👨'
  },
  { 
    word: 'HAND', 
    emoji: '🤚', 
    hint: 'You use these to grab things and wave hello',
    examples: '👋 ✋ 🖐️'
  },
  { 
    word: 'FOOT', 
    emoji: '🦶', 
    hint: 'You walk and run with these',
    examples: '👟 🧦 🩰'
  },
  { 
    word: 'ARM', 
    emoji: '💪', 
    hint: 'Connects your hand to your shoulder',
    examples: '🦾 💪 🤳'
  },
  { 
    word: 'LEG', 
    emoji: '🦵', 
    hint: 'Helps you jump and dance',
    examples: '🦿 🩳 👖'
  },
  { 
    word: 'NOSE', 
    emoji: '👃', 
    hint: 'You smell things with this',
    examples: '🌸 🌺 👃'
  },
  { 
    word: 'EAR', 
    emoji: '👂', 
    hint: 'You hear sounds with these',
    examples: '🎵 🎧 🎼'
  },
  { 
    word: 'EYE', 
    emoji: '👁️', 
    hint: 'You see the world with these',
    examples: '👀 🕶️ 👓'
  },
  { 
    word: 'HAIR', 
    emoji: '💇', 
    hint: 'Grows on top of your head',
    examples: '👱 🧑‍🦰 🎀'
  },
  { 
    word: 'NECK', 
    emoji: '🧣', 
    hint: 'Connects your head to your body',
    examples: '👔 🧣 📿'
  },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Body Parts Word Search - Answer Key 👤
          </h1>
        </div>

        {/* Body Parts and Their Functions */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Parts of Our Body</h2>
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

        {/* Learning About Our Body */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Learning About Our Body</h2>
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Our Five Senses</h3>
              <p className="text-white/90">
                👀 Eyes to see<br />
                👂 Ears to hear<br />
                👃 Nose to smell<br />
                👅 Tongue to taste<br />
                🤚 Hands to touch
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Moving Our Body</h3>
              <p className="text-white/90">
                🏃‍♂️ We use our legs to walk and run<br />
                🙋‍♂️ We use our arms to reach and wave<br />
                💃 We use many parts to dance and play
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Taking Care of Our Body</h3>
              <p className="text-white/90">
                🧼 Keep our body clean<br />
                🥗 Eat healthy food<br />
                🛏️ Get enough sleep<br />
                🤸‍♂️ Exercise and play
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4">Teaching Tips</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Body Part Recognition</h3>
              <p className="text-white/90">
                Play "Simon Says" to practice identifying body parts.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Movement Activities</h3>
              <p className="text-white/90">
                Sing songs like "Head, Shoulders, Knees, and Toes" while pointing to each part.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Learning Through Art</h3>
              <p className="text-white/90">
                Draw and label different body parts to reinforce learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 