import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BODY_PARTS = [
  { name: 'ARM', emoji: '💪', letter: 'A', sound: 'strong and flexible' },
  { name: 'BRAIN', emoji: '🧠', letter: 'B', sound: 'thinks and learns' },
  { name: 'CHEST', emoji: '👕', letter: 'C', sound: 'breathes up and down' },
  { name: 'EAR', emoji: '👂', letter: 'E', sound: 'listens carefully' },
  { name: 'FOOT', emoji: '🦶', letter: 'F', sound: 'walks and jumps' },
  { name: 'HAND', emoji: '🤚', letter: 'H', sound: 'waves hello' },
  { name: 'LEG', emoji: '🦵', letter: 'L', sound: 'runs and kicks' },
  { name: 'MOUTH', emoji: '👄', letter: 'M', sound: 'talks and eats' },
  { name: 'NOSE', emoji: '👃', letter: 'N', sound: 'smells nice things' },
  { name: 'TEETH', emoji: '🦷', letter: 'T', sound: 'chews and smiles' },
];

const BodyLettersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Body Parts Letters - Answer Key 🎯
          </h1>
        </div>

        {/* Body Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {BODY_PARTS.map((bodyPart, index) => (
            <motion.div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                {/* Body Part Emoji */}
                <div className="text-5xl drop-shadow-lg">{bodyPart.emoji}</div>
                
                {/* Body Part Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {bodyPart.name}
                  </h3>
                  <p className="text-white/90">
                    Starts with letter <span className="font-bold text-2xl">{bodyPart.letter}</span>
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    It {bodyPart.sound}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mt-4">
          <h2 className="text-xl font-bold text-white mb-4">Tips for Learning</h2>
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Listen and Say</h3>
              <p className="text-white/90">
                Say each body part name slowly and listen for the first sound.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Point and Name</h3>
              <p className="text-white/90">
                Point to each body part on yourself while saying its name!
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Move and Learn</h3>
              <p className="text-white/90">
                Move each body part while learning its letter.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Activities */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mt-4">
          <h2 className="text-xl font-bold text-white mb-4">Fun Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Body Part Actions</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Wave your hands</li>
                <li>Tap your nose</li>
                <li>Touch your ears</li>
                <li>Move your legs</li>
              </ul>
            </div>
            
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Letter Games</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Find body parts starting with same letter</li>
                <li>Draw body parts</li>
                <li>Make letter shapes with your body</li>
                <li>Play "Simon Says" with body parts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyLettersAnswerKey; 