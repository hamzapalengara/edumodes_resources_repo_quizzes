import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const RhymingWordsAnswerKey: React.FC = () => {
  const answers = [
    {
      targetWord: { word: 'cat', emoji: '🐱' },
      rhymingWords: [
        { word: 'hat', emoji: '🎩', example: "The cat 🐱 wore a hat 🎩" },
        { word: 'rat', emoji: '🐀', example: "A rat 🐀 saw the cat 🐱" },
        { word: 'bat', emoji: '🦇', example: "The bat 🦇 chased the cat 🐱" },
        { word: 'mat', emoji: '🏠', example: "The cat 🐱 sat on the mat" }
      ],
      explanation: "These words end with the 'at' sound. When words end with the same sound, they rhyme!",
      tips: [
        "Listen to the ending sound 'at'",
        "Try saying the words out loud",
        "Notice how your mouth moves the same way"
      ]
    },
    {
      targetWord: { word: 'sun', emoji: '☀️' },
      rhymingWords: [
        { word: 'fun', emoji: '🎮', example: "Having fun ⚽ in the sun ☀️" },
        { word: 'run', emoji: '🏃', example: "We run 🏃 under the sun ☀️" },
        { word: 'bun', emoji: '🥖', example: "Eating a bun 🥖 in the sun ☀️" },
        { word: 'gun', emoji: '🔫', example: "A water gun 🔫 in the sun ☀️" }
      ],
      explanation: "These words end with the 'un' sound. They all rhyme with 'sun'!",
      tips: [
        "Focus on the 'un' sound at the end",
        "Practice making rhyming sentences",
        "Think of other words that end the same way"
      ]
    },
    {
      targetWord: { word: 'dog', emoji: '🐕' },
      rhymingWords: [
        { word: 'log', emoji: '🪵', example: "The dog 🐕 sat on a log 🪵" },
        { word: 'fog', emoji: '🌫️', example: "The dog 🐕 walked in the fog 🌫️" },
        { word: 'hog', emoji: '🐷', example: "The hog 🐷 met the dog 🐕" },
        { word: 'bog', emoji: '💧', example: "The dog 🐕 jumped over the bog" }
      ],
      explanation: "These words end with the 'og' sound. When you say them, they sound similar at the end!",
      tips: [
        "Listen for the 'og' ending",
        "Make funny sentences with rhyming words",
        "Draw pictures of rhyming pairs"
      ]
    },
    {
      targetWord: { word: 'star', emoji: '⭐' },
      rhymingWords: [
        { word: 'car', emoji: '🚗', example: "I saw a star ⭐ from the car 🚗" },
        { word: 'far', emoji: '📍', example: "The star ⭐ is very far 📍" },
        { word: 'jar', emoji: '🫙', example: "Put the star ⭐ in the jar 🫙" },
        { word: 'bar', emoji: '📏', example: "Draw a star ⭐ next to the bar 📏" }
      ],
      explanation: "These words end with the 'ar' sound. They make a perfect rhyme with 'star'!",
      tips: [
        "Notice the 'ar' sound at the end",
        "Create your own rhyming story",
        "Say the words slowly and clearly"
      ]
    },
    {
      targetWord: { word: 'bee', emoji: '🐝' },
      rhymingWords: [
        { word: 'tea', emoji: '🫖', example: "The bee 🐝 likes tea 🫖" },
        { word: 'sea', emoji: '🌊', example: "A bee 🐝 flew over the sea 🌊" },
        { word: 'key', emoji: '🔑', example: "The bee 🐝 found the key 🔑" },
        { word: 'tree', emoji: '🌳', example: "The bee 🐝 lives in a tree 🌳" }
      ],
      explanation: "These words end with the 'ee' sound. They all rhyme with 'bee'!",
      tips: [
        "Listen for the long 'e' sound",
        "Make up silly rhyming pairs",
        "Practice with other 'ee' words"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Rhyming Words - Answer Key
          </h1>

          <div className="space-y-8">
            {answers.map((set, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.01]"
              >
                {/* Target Word */}
                <div className="flex items-center justify-center mb-6">
                  <div className="text-4xl mr-4">{set.targetWord.emoji}</div>
                  <h2 className="text-2xl font-bold text-purple-700">
                    Words that rhyme with "{set.targetWord.word}":
                  </h2>
                </div>

                {/* Rhyming Words */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {set.rhymingWords.map((word, wordIndex) => (
                    <div
                      key={wordIndex}
                      className="bg-purple-50 rounded-lg p-4"
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">{word.emoji}</span>
                        <span className="text-xl font-semibold text-purple-800">{word.word}</span>
                      </div>
                      <p className="text-gray-700 italic">
                        {word.example}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Explanation */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">
                    How it works:
                  </h3>
                  <p className="text-gray-700">
                    {set.explanation}
                  </p>
                </div>

                {/* Tips */}
                <div>
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">
                    Learning Tips:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {set.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-gray-700">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Teaching Notes */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Teaching Notes
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  Learning Objectives:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Recognize and identify rhyming words</li>
                  <li>Understand that rhyming words have the same ending sound</li>
                  <li>Build phonological awareness</li>
                  <li>Develop vocabulary through word families</li>
                  <li>Practice reading and pronunciation skills</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  Extension Activities:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Create rhyming word picture cards</li>
                  <li>Play rhyming word matching games</li>
                  <li>Write simple rhyming sentences</li>
                  <li>Draw pictures of rhyming word pairs</li>
                  <li>Make up silly rhyming songs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default RhymingWordsAnswerKey; 
