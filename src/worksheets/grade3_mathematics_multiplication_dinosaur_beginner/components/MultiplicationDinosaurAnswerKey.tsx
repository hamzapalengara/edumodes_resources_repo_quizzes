import React from 'react';
import { motion } from 'framer-motion';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const DINOS = ['🦖', '🦕', '🦖', '🦕', '🦖', '🦕', '🦖', '🦕', '🦖', '🦕'];
const DINO_NAMES = ['T-Rex', 'Brontosaurus', 'Raptor', 'Diplodocus', 'Spinosaurus', 'Brachiosaurus', 'Allosaurus', 'Apatosaurus', 'Carnotaurus', 'Stegosaurus'];

const MultiplicationDinosaurAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-800 to-green-900">
      <AnswerKeyHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-amber-100 mb-6">
            Dinosaur Park Discovery Guide 🦕
          </h2>

          <div className="space-y-6">
            <div className="bg-amber-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-100 mb-2">
                Complete Dinosaur Trail
              </h3>
              <p className="text-amber-200 mb-4">
                Follow the numbers multiplied by 11, starting from 11 and ending at 110.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {[11, 22, 33, 44, 55, 66, 77, 88, 99, 110].map((number, index) => (
                  <React.Fragment key={number}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                        {number}
                      </div>
                      <div className="absolute -top-6 text-2xl">
                        {DINOS[index]}
                      </div>
                    </div>
                    {index < 9 && (
                      <div className="text-amber-200">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-green-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-100 mb-2">
                Multiplication Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                    <div className="text-green-100 font-semibold">
                      {index + 1} × 11 =
                    </div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                      {(index + 1) * 11}
                      <span className="text-xl">{DINOS[index]}</span>
                    </div>
                    <div className="text-sm text-green-200">
                      {DINO_NAMES[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-100 mb-2">
                Pattern Recognition
              </h3>
              <ul className="list-disc list-inside space-y-2 text-amber-100">
                <li>Each number in the path is a multiple of 11</li>
                <li>Each number is 11 more than the previous number</li>
                <li>The path follows the pattern: 11, 22, 33, 44, 55, 66, 77, 88, 99, 110</li>
                <li>Notice how the digits repeat: 11, 22, 33, etc.</li>
              </ul>
            </div>

            <div className="bg-green-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-100 mb-2">
                Explorer's Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-green-100">
                <li>Look for the pattern: digits are the same up to 99</li>
                <li>Use skip counting: count by 11s to find the next number</li>
                <li>Think of each number as a group of dinosaur footprints</li>
                <li>Visualize the prehistoric timeline as numbers grow</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationDinosaurAnswerKey; 