import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const VEHICLES = [
  { name: 'AIRPLANE', emoji: '✈️', letter: 'A', sound: 'zoom through the sky' },
  { name: 'BUS', emoji: '🚌', letter: 'B', sound: 'beep beep' },
  { name: 'CAR', emoji: '🚗', letter: 'C', sound: 'vroom vroom' },
  { name: 'DRONE', emoji: '🛸', letter: 'D', sound: 'buzz buzz' },
  { name: 'HELICOPTER', emoji: '🚁', letter: 'H', sound: 'whir whir whir' },
  { name: 'MOTORCYCLE', emoji: '🏍️', letter: 'M', sound: 'brrm brrm' },
  { name: 'ROCKET', emoji: '🚀', letter: 'R', sound: 'whoosh' },
  { name: 'SUBMARINE', emoji: '🚊', letter: 'S', sound: 'glub glub' },
  { name: 'TRAIN', emoji: '🚂', letter: 'T', sound: 'choo choo' },
  { name: 'YACHT', emoji: '⛵', letter: 'Y', sound: 'splash splash' },
];

const VehicleLettersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Vehicle Letters - Answer Key 🎯
          </h1>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {VEHICLES.map((vehicle, index) => (
            <motion.div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                {/* Vehicle Emoji */}
                <div className="text-5xl drop-shadow-lg">{vehicle.emoji}</div>
                
                {/* Vehicle Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-white/90">
                    Starts with letter <span className="font-bold text-2xl">{vehicle.letter}</span>
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Sound: {vehicle.sound}
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
                Say each vehicle name slowly and listen for the first sound.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Make the Sounds</h3>
              <p className="text-white/90">
                Practice making vehicle sounds while learning their first letters!
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Draw and Write</h3>
              <p className="text-white/90">
                Try drawing the vehicles and writing their first letters.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mt-4">
          <h2 className="text-xl font-bold text-white mb-4">Fun Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Vehicle Spotting</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Look for vehicles outside</li>
                <li>Name them out loud</li>
                <li>Say their first letter</li>
                <li>Make their sounds</li>
              </ul>
            </div>
            
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Letter Hunt</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Find more vehicles</li>
                <li>Group by first letter</li>
                <li>Create letter cards</li>
                <li>Play matching games</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleLettersAnswerKey; 