import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const RainbowColoringAnswerKey: React.FC = () => {
  const rainbowColors = [
    { name: 'Red', color: '#FF0000' },
    { name: 'Orange', color: '#FF7F00' },
    { name: 'Yellow', color: '#FFFF00' },
    { name: 'Green', color: '#00FF00' },
    { name: 'Blue', color: '#0000FF' },
    { name: 'Indigo', color: '#4B0082' },
    { name: 'Violet', color: '#8F00FF' },
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <WorksheetHeader />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Rainbow Colors - Answer Key 🌈
        </h1>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            The Rainbow Color Order
          </h2>

          <div className="space-y-6">
            {rainbowColors.map((color, index) => (
              <div key={color.name} className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full shadow-md"
                  style={{ backgroundColor: color.color }}
                />
                <div>
                  <p className="text-xl font-semibold">{index + 1}. {color.name}</p>
                  <p className="text-gray-600">Color code: {color.color}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Teaching Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Help children remember the order using the mnemonic: "ROY G. BIV"</li>
              <li>Encourage recognition of these colors in nature and everyday objects</li>
              <li>Discuss how rainbows form in nature when sunlight meets water droplets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainbowColoringAnswerKey; 