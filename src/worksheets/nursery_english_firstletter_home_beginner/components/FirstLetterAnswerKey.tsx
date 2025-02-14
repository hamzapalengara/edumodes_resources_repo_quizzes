import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const words = [
  { word: "bed", letter: "b", emoji: "🛏️" },
  { word: "table", letter: "t", emoji: "🪑" },
  { word: "door", letter: "d", emoji: "🚪" },
  { word: "lamp", letter: "l", emoji: "💡" },
  { word: "sofa", letter: "s", emoji: "🛋️" },
  { word: "window", letter: "w", emoji: "🪟" },
  { word: "chair", letter: "c", emoji: "🪑" },
  { word: "mirror", letter: "m", emoji: "🪞" },
  { word: "fan", letter: "f", emoji: "🌀" },
  { word: "rug", letter: "r", emoji: "🏠" }
];

const FirstLetterAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            First Letter Identification - Answer Key
          </h2>
          <p className="text-gray-600 mb-6">
            This worksheet helps children identify the first letter of common household items.
            Each word is accompanied by an emoji for visual recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {words.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{item.emoji}</div>
                <div>
                  <div className="text-xl font-bold text-purple-800">
                    {item.word}
                  </div>
                  <div className="text-gray-600">
                    First letter: <span className="text-2xl font-bold text-purple-600">
                      {item.letter.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-100 rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">
            Teaching Tips
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Help the child sound out each word slowly, emphasizing the first sound</li>
            <li>Use the emojis to make visual connections with the words</li>
            <li>Practice saying the letter sound, not just the letter name</li>
            <li>Encourage the child to find other objects that start with the same letter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterAnswerKey; 