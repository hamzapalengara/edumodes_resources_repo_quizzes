import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { 
    word: 'SUNNY', 
    emoji: '☀️', 
    hint: 'Bright and warm with lots of sunlight',
    examples: '🌅 🏖️ 🌻'
  },
  { 
    word: 'RAINY', 
    emoji: '🌧️', 
    hint: 'Water falling from clouds',
    examples: '☔ 🌂 💧'
  },
  { 
    word: 'WINDY', 
    emoji: '💨', 
    hint: 'Strong moving air that makes things blow',
    examples: '🎐 🪁 🍃'
  },
  { 
    word: 'SNOW', 
    emoji: '❄️', 
    hint: 'White and cold flakes falling from the sky',
    examples: '⛄ 🏂 🎿'
  },
  { 
    word: 'STORM', 
    emoji: '⛈️', 
    hint: 'Strong wind, rain, and thunder',
    examples: '⚡ 🌩️ 🌪️'
  },
  { 
    word: 'SUMMER', 
    emoji: '🌞', 
    hint: 'The warmest season of the year',
    examples: '🏊‍♂️ 🍦 🏖️'
  },
  { 
    word: 'WINTER', 
    emoji: '🥶', 
    hint: 'The coldest season of the year',
    examples: '🧊 🧣 🧤'
  },
  { 
    word: 'SPRING', 
    emoji: '🌸', 
    hint: 'Season when flowers bloom',
    examples: '🌺 🦋 🌱'
  },
  { 
    word: 'AUTUMN', 
    emoji: '🍂', 
    hint: 'Season when leaves change color and fall',
    examples: '🍁 🎃 🦃'
  },
  { 
    word: 'CLOUD', 
    emoji: '☁️', 
    hint: 'White or gray shapes in the sky',
    examples: '🌥️ ⛅ 🌤️'
  },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-orange-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Weather & Seasons Word Search - Answer Key 🌈
          </h1>
        </div>

        {/* Weather Words and Their Meanings */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Weather Words</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORD_LIST.slice(0, 5).map(({ word, emoji, hint, examples }) => (
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

        {/* Season Words and Their Meanings */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Season Words</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORD_LIST.slice(5, 9).map(({ word, emoji, hint, examples }) => (
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

        {/* Weather Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Fun Weather Facts</h2>
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">The Water Cycle</h3>
              <p className="text-white/90">
                Water from clouds (rain) ☔ falls to Earth, the sun ☀️ heats it up, it rises as vapor, and forms new clouds ☁️!
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Changing Seasons</h3>
              <p className="text-white/90">
                The Earth's tilt gives us four seasons: Spring 🌸, Summer ☀️, Autumn 🍂, and Winter ❄️
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Weather Safety</h3>
              <p className="text-white/90">
                Different weather needs different safety: umbrellas for rain ☔, sunscreen for sun ☀️, warm clothes for snow ❄️!
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4">Teaching Tips</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Weather Watching</h3>
              <p className="text-white/90">
                Keep a daily weather journal with pictures and words.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Season Changes</h3>
              <p className="text-white/90">
                Observe and discuss how trees and plants change with seasons.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Weather Activities</h3>
              <p className="text-white/90">
                Match activities to weather: indoor games for rain, outdoor play for sun!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 