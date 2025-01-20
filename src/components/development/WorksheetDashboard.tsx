import React from 'react';
import { Link } from 'react-router-dom';
import { WorksheetSet } from '../../utils/worksheet-discovery';

interface WorksheetDashboardProps {
  worksheets: WorksheetSet[];
}

const WorksheetDashboard: React.FC<WorksheetDashboardProps> = ({ worksheets }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-4 sm:px-4 sm:py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold">EduModes Worksheet Development</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="grid gap-4">
          {worksheets.map((set) => (
            <div key={set.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
              <div className="flex flex-col gap-4">
                <div className="space-y-2 sm:space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 break-words">{set.title}</h2>
                  <p className="text-sm sm:text-base text-gray-600">{set.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">{set.grade}</span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">{set.subject}</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">{set.topic}</span>
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">{set.difficulty}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <Link 
                    to={`/${set.id}/worksheet.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-center text-xs sm:text-sm"
                  >
                    Worksheet
                  </Link>
                  <Link 
                    to={`/${set.id}/answer_key.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1.5 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-center text-xs sm:text-sm"
                  >
                    Answer Key
                  </Link>
                  <Link 
                    to={`/${set.id}/tips.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1.5 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors text-center text-xs sm:text-sm"
                  >
                    Tips
                  </Link>
                  <Link 
                    to={`/${set.id}/thumbnail.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1.5 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors text-center text-xs sm:text-sm"
                  >
                    Thumbnail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WorksheetDashboard; 