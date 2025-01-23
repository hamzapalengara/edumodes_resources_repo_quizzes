import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';
import bodyOutlineSvg from '../assets/body_outline.svg';

const BODY_PARTS = [
  { id: 'head', name: 'Head', label: 'This is where your brain lives!' },
  { id: 'eye', name: 'Eyes', label: 'They help you see the world!' },
  { id: 'mouth', name: 'Mouth', label: 'For eating and smiling!' },
  { id: 'lips', name: 'Lips', label: 'For speaking and smiling!' },
  { id: 'tongue', name: 'Tongue', label: 'For tasting yummy food!' },
  { id: 'ear', name: 'Ears', label: 'They help you hear sounds!' },
  { id: 'nose', name: 'Nose', label: 'For smelling lovely things!' },
  { id: 'arm', name: 'Arms', label: 'For hugging and reaching!' },
  { id: 'hand', name: 'Hands', label: 'For clapping and holding!' },
  { id: 'leg', name: 'Legs', label: 'They help you jump and run!' },
  { id: 'foot', name: 'Feet', label: 'For walking and dancing!' },
];

const BodyPartsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-6">
            Body Parts - Answer Key
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Body outline image */}
            <div className="relative aspect-[1/1] bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl p-4">
              <div className="flex items-center justify-center h-full">
                <img 
                  src={bodyOutlineSvg}
                  alt="Body parts diagram"
                  className="w-full h-auto max-w-sm"
                />
              </div>
            </div>

            {/* Answer list */}
            <div className="space-y-4">
              {BODY_PARTS.map((part) => (
                <div 
                  key={part.id}
                  className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-purple-500"
                >
                  <h3 className="font-bold text-purple-800">{part.name}</h3>
                  <p className="text-gray-600 mt-1">{part.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyPartsAnswerKey; 