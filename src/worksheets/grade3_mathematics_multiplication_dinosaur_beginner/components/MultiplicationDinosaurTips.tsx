import React from 'react';
import { motion } from 'framer-motion';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const MultiplicationDinosaurTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-800 to-green-900">
      <TipsHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-amber-100 mb-6">
            Dinosaur Explorer's Guide 🦖
          </h2>

          <div className="space-y-6">
            <div className="bg-amber-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-100 mb-2">
                🌋 How to Play
              </h3>
              <ul className="list-disc list-inside space-y-2 text-amber-200">
                <li>Follow the dinosaur trail by multiplying numbers by 11</li>
                <li>Start with number 11 (first discovery is a T-Rex 🦖)</li>
                <li>Find the next number by multiplying by 11</li>
                <li>Discover all dinosaurs to reach the volcano 🌋</li>
              </ul>
            </div>

            <div className="bg-green-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-100 mb-2">
                🦕 Multiplication Patterns
              </h3>
              <ul className="list-disc list-inside space-y-2 text-green-200">
                <li>1 × 11 = 11 (T-Rex 🦖)</li>
                <li>2 × 11 = 22 (Brontosaurus 🦕)</li>
                <li>3 × 11 = 33 (Raptor 🦖)</li>
                <li>4 × 11 = 44 (Diplodocus 🦕)</li>
                <li>5 × 11 = 55 (Spinosaurus 🦖)</li>
              </ul>
            </div>

            <div className="bg-amber-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-100 mb-2">
                🔍 Special Pattern Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-amber-200">
                <li>Notice how the digits are the same (11, 22, 33...)</li>
                <li>Each number increases by 11</li>
                <li>Count by 11s to find the next dinosaur</li>
                <li>Look for repeating digit patterns</li>
              </ul>
            </div>

            <div className="bg-green-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-100 mb-2">
                🌿 Advanced Strategies
              </h3>
              <ul className="list-disc list-inside space-y-2 text-green-200">
                <li>For numbers 1-9: just repeat the digit (2×11=22)</li>
                <li>For 10: add a zero to 110</li>
                <li>Think of each dinosaur as guarding its number</li>
                <li>Use the footprints to track your progress</li>
              </ul>
            </div>

            <div className="bg-amber-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-100 mb-2">
                💡 Remember
              </h3>
              <div className="text-amber-200 p-4 bg-amber-950/30 rounded-lg">
                <p className="text-center font-bold">
                  Multiplying by 11 is special because the digits repeat up to 9!
                  <br />
                  1×11=11, 2×11=22, 3×11=33, and so on...
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationDinosaurTips; 