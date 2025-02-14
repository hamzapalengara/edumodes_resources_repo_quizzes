import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const words = [
  { word: "car", letter: "c" },
  { word: "bus", letter: "b" },
  { word: "train", letter: "t" },
  { word: "plane", letter: "p" },
  { word: "ship", letter: "s" },
  { word: "truck", letter: "t" },
  { word: "bike", letter: "b" },
  { word: "van", letter: "v" },
  { word: "taxi", letter: "t" },
  { word: "rocket", letter: "r" }
];

const FirstLetterAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-100">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Vehicle First Letters - Answer Key
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {words.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 
                              shadow-lg ring-4 ring-yellow-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {item.letter.toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800 capitalize">
                    {item.word}
                  </p>
                  <p className="text-sm text-gray-600">
                    Starts with the letter '{item.letter.toUpperCase()}'
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">How to Help Your Child:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Say each word slowly and emphasize the first sound</li>
              <li>Help them connect the sound to the letter</li>
              <li>Practice making the letter sound before saying the whole word</li>
              <li>Use visual cues like pointing to the vehicle while saying its name</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterAnswerKey; 