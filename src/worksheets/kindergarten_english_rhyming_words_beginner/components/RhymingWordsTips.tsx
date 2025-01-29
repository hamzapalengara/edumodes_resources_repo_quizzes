import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const RhymingWordsTips: React.FC = () => {
  const tips = [
    {
      title: "Word Family Fun",
      emoji: "🎯",
      description: "Learn words that belong to the same rhyming family!",
      activities: [
        "Make a list of words that end with 'at' (cat, hat, rat)",
        "Create a rhyming word wall with pictures",
        "Play 'I Spy' with rhyming words",
        "Draw pictures of rhyming pairs"
      ]
    },
    {
      title: "Rhyme Time Games",
      emoji: "🎮",
      description: "Play fun games to practice rhyming!",
      activities: [
        "Rhyming word memory match",
        "Musical chairs with rhyming words",
        "Simon says with rhyming actions",
        "Rhyming word scavenger hunt"
      ]
    },
    {
      title: "Sing and Move",
      emoji: "🎵",
      description: "Learn through songs and movement!",
      activities: [
        "Sing nursery rhymes with actions",
        "Make up silly rhyming songs",
        "Dance and freeze on rhyming words",
        "Clap or jump when words rhyme"
      ]
    },
    {
      title: "Story Time",
      emoji: "📚",
      description: "Explore rhyming through stories!",
      activities: [
        "Read Dr. Seuss books together",
        "Create your own rhyming story",
        "Act out rhyming stories",
        "Find rhyming words in favorite books"
      ]
    },
    {
      title: "Creative Play",
      emoji: "🎨",
      description: "Get creative with rhyming words!",
      activities: [
        "Make rhyming word puppets",
        "Create rhyming word collages",
        "Draw rhyming word comic strips",
        "Build a rhyming word train"
      ]
    }
  ];

  const generalTips = [
    "Practice rhyming words every day",
    "Start with simple, familiar words",
    "Use pictures to help remember words",
    "Make learning fun and playful",
    "Celebrate small successes"
  ];

  const commonWordFamilies = [
    {
      family: "-at",
      examples: ["cat", "hat", "rat", "bat", "mat"],
      icon: "🐱"
    },
    {
      family: "-og",
      examples: ["dog", "fog", "log", "hog", "bog"],
      icon: "🐕"
    },
    {
      family: "-un",
      examples: ["sun", "fun", "run", "bun", "gun"],
      icon: "☀️"
    },
    {
      family: "-ing",
      examples: ["ring", "sing", "wing", "king", "swing"],
      icon: "💍"
    },
    {
      family: "-ake",
      examples: ["cake", "lake", "rake", "snake", "wake"],
      icon: "🎂"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Fun Ways to Learn Rhyming Words
          </h1>

          {/* Learning Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02]"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{tip.emoji}</span>
                  <h2 className="text-xl font-bold text-purple-700">
                    {tip.title}
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  {tip.description}
                </p>

                <ul className="list-disc list-inside space-y-2">
                  {tip.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="text-gray-600">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Word Families Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="text-3xl mr-3">🎯</span>
              Common Word Families
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {commonWordFamilies.map((family, index) => (
                <div
                  key={index}
                  className="bg-purple-50 rounded-lg p-4"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{family.icon}</span>
                    <span className="text-lg font-semibold text-purple-800">
                      {family.family}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {family.examples.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="bg-white px-3 py-1 rounded-full text-sm text-purple-600"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Tips Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span>
              Helpful Reminders
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generalTips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start p-3 bg-purple-50 rounded-lg"
                >
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="text-3xl mr-3">📚</span>
              Recommended Activities
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2">
                  Rhyming Word Hunt
                </h3>
                <p className="text-gray-700">
                  Go on a treasure hunt around your home or classroom to find objects that rhyme.
                  For example: "Can you find something that rhymes with 'chair'?"
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold text-green-700 mb-2">
                  Rhyming Memory Game
                </h3>
                <p className="text-gray-700">
                  Create cards with rhyming pairs of pictures. Place them face down and take turns
                  finding matching rhyming pairs.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-bold text-yellow-700 mb-2">
                  Silly Rhyming Stories
                </h3>
                <p className="text-gray-700">
                  Make up funny stories using rhyming words. Start with a simple sentence and
                  take turns adding rhyming words to create a story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default RhymingWordsTips; 