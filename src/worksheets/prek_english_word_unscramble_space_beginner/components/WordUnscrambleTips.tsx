import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import { SPACE_EMOJIS } from './EmojiHelper';

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-blue-50 py-4 shadow-md mb-6 border-y-2 border-blue-100">
          <h1 className="text-3xl font-bold text-center text-blue-600">
            Space Word Explorer - Tips {SPACE_EMOJIS.sparkles}
          </h1>
        </div>

        <div className="space-y-8">
          {/* General Tips */}
          <motion.div 
            className="bg-white shadow-md py-6 border-y-2 border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              General Tips {SPACE_EMOJIS.glowingStar}
            </h2>
            
            <div className="px-4 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  1. Look at the Hint {SPACE_EMOJIS.sparkle}
                </h3>
                <p className="text-gray-600">
                  The hint tells you what the word means. This can help you guess what the word might be!
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  2. Look at the Picture {SPACE_EMOJIS.star}
                </h3>
                <p className="text-gray-600">
                  The space emoji shows what the word is about. Match the picture to the word you're trying to make!
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  3. Start with What You Know {SPACE_EMOJIS.moon}
                </h3>
                <p className="text-gray-600">
                  Some letters often go together, like 'ST' in STAR or 'ET' in ROCKET. Try to spot these patterns!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Level-specific Tips */}
          <motion.div 
            className="bg-white shadow-md py-6 border-y-2 border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Level Tips {SPACE_EMOJIS.rocket}
            </h2>
            
            <div className="px-4 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  Level 1: Basic Space Words {SPACE_EMOJIS.sun}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>These are short, common words about space</li>
                  <li>Most words are 3-4 letters long</li>
                  <li>Think about what you see in the sky!</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  Level 2: Space Objects {SPACE_EMOJIS.ringedPlanet}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Words are a bit longer (4-5 letters)</li>
                  <li>These are things you can find in space</li>
                  <li>Look for common word endings like '-ET'</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  Level 3: Advanced Space Words {SPACE_EMOJIS.meteor}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>These are the longest words</li>
                  <li>Break the word into smaller parts</li>
                  <li>Use the hint and emoji to help you guess</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div 
            className="bg-white shadow-md py-6 border-y-2 border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Fun Space Facts! {SPACE_EMOJIS.sparklingHeart}
            </h2>
            
            <div className="px-4 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <span className="font-bold">Did you know? {SPACE_EMOJIS.star}</span>
                  <br />
                  The Sun is so big that more than 1 million Earths could fit inside it!
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <span className="font-bold">Amazing fact! {SPACE_EMOJIS.moon}</span>
                  <br />
                  The Moon is moving away from Earth by about 3.8 centimeters every year!
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <span className="font-bold">Wow! {SPACE_EMOJIS.comet}</span>
                  <br />
                  Comets are sometimes called "cosmic snowballs" because they're made of ice, dust, and rocks!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleTips; 