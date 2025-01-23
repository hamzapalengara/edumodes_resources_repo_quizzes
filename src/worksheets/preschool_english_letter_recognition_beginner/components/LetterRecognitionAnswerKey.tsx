import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const LetterRecognitionAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-6">
            Answer Key: Complete Alphabet Sequence
          </h1>

          <div className="grid grid-cols-5 sm:grid-cols-7 gap-4 mb-8">
            {ALPHABET.map((letter, index) => (
              <motion.div
                key={index}
                className="aspect-square rounded-lg border-2 border-purple-200 
                         flex items-center justify-center text-2xl font-bold
                         bg-purple-50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-purple-700">{letter}</span>
              </motion.div>
            ))}
          </div>

          {/* Teaching Notes */}
          <div className="mt-8 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Teaching Notes</h2>
            <ul className="space-y-3 text-purple-700">
              <li>• Each letter should be clearly written in uppercase</li>
              <li>• The sequence follows the standard English alphabet order</li>
              <li>• Students should recognize and fill in missing letters based on the sequence</li>
              <li>• Encourage students to say each letter out loud as they identify it</li>
              <li>• Help students understand the alphabetical order and pattern</li>
            </ul>
          </div>

          {/* Common Mistakes */}
          <div className="mt-6 p-6 bg-pink-50 rounded-lg">
            <h2 className="text-xl font-bold text-pink-800 mb-4">Common Mistakes to Watch For</h2>
            <ul className="space-y-3 text-pink-700">
              <li>• Confusing similar-looking letters (e.g., B/D, M/W)</li>
              <li>• Writing letters backwards</li>
              <li>• Mixing uppercase and lowercase letters</li>
              <li>• Skipping letters in the sequence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterRecognitionAnswerKey; 