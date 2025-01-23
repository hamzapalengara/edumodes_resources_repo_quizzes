import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BodyPartsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-8">
            Teaching Tips for Body Parts 🌟
          </h1>

          {/* Interactive Tips */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-purple-800 mb-4">How to Use This Worksheet</h2>
            <div className="bg-purple-50 rounded-xl p-6 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-4"
              >
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-bold text-purple-800">Click and Listen</h3>
                  <p className="text-purple-600">Click on each body part to hear its name and function.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="text-2xl">🔄</span>
                <div>
                  <h3 className="font-bold text-purple-800">Match and Learn</h3>
                  <p className="text-purple-600">Click the same body part twice to confirm learning.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-bold text-purple-800">Visual Feedback</h3>
                  <p className="text-purple-600">Watch for color changes and animations that show progress.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Teaching Tips */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Additional Teaching Tips</h2>
            <div className="bg-blue-50 rounded-xl p-6">
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-2xl">🎵</span>
                  <div>
                    <h3 className="font-bold text-blue-800">Use Songs and Rhymes</h3>
                    <p className="text-blue-600">Incorporate songs like "Head, Shoulders, Knees, and Toes" to make learning fun.</p>
                  </div>
                </motion.li>

                <motion.li 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-2xl">🎮</span>
                  <div>
                    <h3 className="font-bold text-blue-800">Make it Interactive</h3>
                    <p className="text-blue-600">Ask children to point to their own body parts as they learn.</p>
                  </div>
                </motion.li>

                <motion.li 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="font-bold text-blue-800">Extend Learning</h3>
                    <p className="text-blue-600">Draw and color activities can reinforce learning after completing the worksheet.</p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>

          {/* Common Challenges */}
          <div>
            <h2 className="text-xl font-bold text-pink-800 mb-4">Common Challenges</h2>
            <div className="bg-pink-50 rounded-xl p-6">
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-2xl">💡</span>
                  <div>
                    <h3 className="font-bold text-pink-800">Audio Issues</h3>
                    <p className="text-pink-600">Ensure device volume is turned on and at an appropriate level.</p>
                  </div>
                </motion.li>

                <motion.li 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="text-2xl">💡</span>
                  <div>
                    <h3 className="font-bold text-pink-800">Attention Span</h3>
                    <p className="text-pink-600">Take breaks if needed and make it a game to maintain interest.</p>
                  </div>
                </motion.li>

                <motion.li 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-2xl">💡</span>
                  <div>
                    <h3 className="font-bold text-pink-800">Learning Pace</h3>
                    <p className="text-pink-600">Allow children to progress at their own speed and repeat as needed.</p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyPartsTips; 