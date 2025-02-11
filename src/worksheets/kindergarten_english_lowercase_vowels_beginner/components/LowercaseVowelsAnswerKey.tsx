import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const LowercaseVowelsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-violet-200">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-6">
            Lowercase Vowels - Answer Key
          </h1>

          {/* Vowels Display */}
          <div className="grid grid-cols-5 gap-2 mb-8">
            {VOWELS.map((vowel) => (
              <div
                key={vowel}
                className="w-full aspect-square rounded-lg bg-purple-100 
                         flex flex-col items-center justify-center p-2"
              >
                <span className="text-4xl font-bold text-purple-800 mb-2">
                  {vowel}
                </span>
                <span className="text-sm text-purple-600">
                  vowel
                </span>
              </div>
            ))}
          </div>

          {/* Tips and Explanations */}
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h2 className="font-bold text-purple-800 mb-2">How to Remember Vowels</h2>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>There are 5 main vowels: a, e, i, o, u</li>
                <li>Every word must have at least one vowel</li>
                <li>Vowels make different sounds in different words</li>
                <li>Sometimes 'y' can be a vowel too, but we focus on a, e, i, o, u first</li>
              </ul>
            </div>

            <div className="p-4 bg-pink-50 rounded-lg">
              <h2 className="font-bold text-purple-800 mb-2">Fun Facts About Vowels</h2>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>The word "vowel" comes from the Latin word "vocalis" meaning "speaking"</li>
                <li>Vowels are the musical notes of language</li>
                <li>You can whisper consonants but you need to use your voice for vowels</li>
                <li>Some languages have more or fewer vowels than English</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h2 className="font-bold text-purple-800 mb-2">Practice Tips</h2>
              <div className="space-y-2 text-purple-700">
                <p>Try saying each vowel sound:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>'a' as in "apple"</li>
                  <li>'e' as in "elephant"</li>
                  <li>'i' as in "igloo"</li>
                  <li>'o' as in "octopus"</li>
                  <li>'u' as in "umbrella"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowercaseVowelsAnswerKey; 