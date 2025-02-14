import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const FirstLetterTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Teaching Tips: Listening and Sound Recognition
          </h2>
          <p className="text-gray-600 mb-6">
            This guide provides strategies to help children develop phonemic awareness 
            through listening and identifying initial letter sounds.
          </p>
        </div>

        {/* Before Starting */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🎯</span> Before Starting
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Ensure the audio is clear and at a comfortable volume</li>
            <li>Practice listening to and identifying sounds in everyday words</li>
            <li>Review letter sounds (not just letter names)</li>
            <li>Create a quiet environment for better focus</li>
          </ul>
        </div>

        {/* During the Activity */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🎧</span> During the Activity
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Encourage active listening with eyes closed to focus on the sound</li>
            <li>Let the child repeat the word to hear their own pronunciation</li>
            <li>Ask them to emphasize the first sound they hear</li>
            <li>Use the listen button as many times as needed</li>
            <li>Celebrate each successful sound identification</li>
          </ul>
        </div>

        {/* Sound Recognition Tips */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🔍</span> Sound Recognition Tips
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Help isolate the first sound by stretching it out</li>
            <li>Practice making the sound in isolation</li>
            <li>Compare similar sounds to notice differences</li>
            <li>Use hand gestures to represent different sounds</li>
          </ul>
        </div>

        {/* Common Challenges */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span> Common Challenges
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <strong>Similar Sounds:</strong>
              <p className="ml-6 mt-1 text-gray-600">
                Help distinguish between similar sounds (like 'b' and 'p') by feeling 
                the vibration in the throat or watching lip movements
              </p>
            </li>
            <li>
              <strong>Attention Span:</strong>
              <p className="ml-6 mt-1 text-gray-600">
                Take short breaks between words and make it fun with movement or gestures
              </p>
            </li>
            <li>
              <strong>Sound Blending:</strong>
              <p className="ml-6 mt-1 text-gray-600">
                Practice isolating just the first sound, ignoring the rest of the word
              </p>
            </li>
          </ul>
        </div>

        {/* Extension Activities */}
        <div className="bg-purple-100 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🌟</span> Extension Activities
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Play "I Spy" focusing on initial sounds instead of letters</li>
            <li>Create sound sorting games with everyday objects</li>
            <li>Practice making sound-to-letter connections with alphabet cards</li>
            <li>Record and play back sounds for self-correction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterTips; 