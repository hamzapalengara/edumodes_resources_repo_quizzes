import React from 'react';

const PatternTips: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 text-center">
        🎨 Tips for Pattern Magic 🎨
      </h1>

      <div className="space-y-6">
        {/* For Parents/Teachers */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <span>👨‍🏫</span> For Parents & Teachers
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <p>Encourage your child to observe and describe the patterns they see in everyday life, like stripes on clothing or alternating colors in a garden.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <p>Help them verbalize the pattern sequence before selecting an answer. For example, "circle, star, circle, so the next shape should be..."</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <p>If they make a mistake, guide them to look at the pattern again and identify the repeating sequence.</p>
            </li>
          </ul>
        </div>

        {/* Learning Goals */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
            <span>🎯</span> Learning Goals
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">•</span>
              <p>Recognize and identify repeating patterns</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">•</span>
              <p>Develop logical thinking and prediction skills</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">•</span>
              <p>Build foundation for mathematical thinking</p>
            </li>
          </ul>
        </div>

        {/* Helpful Hints */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
            <span>💡</span> Helpful Hints
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <p>Look at how the shapes repeat in the pattern</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <p>Count how many shapes are in each repeating group</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <p>Point to each shape as you say it out loud</p>
            </li>
          </ul>
        </div>

        {/* Extension Activities */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
            <span>🌟</span> Extension Activities
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">•</span>
              <p>Create patterns with objects at home (toys, blocks, or food items)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">•</span>
              <p>Draw patterns using different colors and shapes</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">•</span>
              <p>Look for patterns in nature (like flower petals or leaf arrangements)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatternTips; 