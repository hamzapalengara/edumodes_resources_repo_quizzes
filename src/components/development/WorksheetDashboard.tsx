import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { WorksheetSet } from '../../utils/worksheet-discovery';

interface WorksheetDashboardProps {
  worksheets: WorksheetSet[];
}

const WorksheetDashboard: React.FC<WorksheetDashboardProps> = ({ worksheets }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'grade' | 'subject' | 'topic' | 'difficulty'>('latest');
  const [selectedGrade, setSelectedGrade] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  // Extract unique values for filters
  const grades = useMemo(() => [...new Set(worksheets.map(w => w.grade))], [worksheets]);
  const subjects = useMemo(() => [...new Set(worksheets.map(w => w.subject))], [worksheets]);

  // Filter and sort worksheets
  const filteredWorksheets = useMemo(() => {
    let filtered = [...worksheets];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(w => 
        w.title.toLowerCase().includes(query) ||
        w.description.toLowerCase().includes(query) ||
        w.grade.toLowerCase().includes(query) ||
        w.subject.toLowerCase().includes(query) ||
        w.topic.toLowerCase().includes(query)
      );
    }

    // Apply grade filter
    if (selectedGrade) {
      filtered = filtered.filter(w => w.grade === selectedGrade);
    }

    // Apply subject filter
    if (selectedSubject) {
      filtered = filtered.filter(w => w.subject === selectedSubject);
    }

    // Apply sorting
    switch (sortBy) {
      case 'grade':
        filtered.sort((a, b) => a.grade.localeCompare(b.grade));
        break;
      case 'subject':
        filtered.sort((a, b) => a.subject.localeCompare(b.subject));
        break;
      case 'topic':
        filtered.sort((a, b) => a.topic.localeCompare(b.topic));
        break;
      case 'difficulty':
        filtered.sort((a, b) => a.difficulty.localeCompare(b.difficulty));
        break;
      case 'latest':
      default:
        // Sort by timestamp, most recent first
        console.log('Before sorting:', filtered.map(w => ({ 
          id: w.id, 
          timestamp: w.timestamp,
          date: new Date(w.timestamp).toLocaleString() 
        })));
        
        filtered.sort((a, b) => {
          // Add null checks and default to 0 if timestamp is missing
          const timeA = a.timestamp || 0;
          const timeB = b.timestamp || 0;
          return timeB - timeA;
        });
        
        console.log('After sorting:', filtered.map(w => ({ 
          id: w.id, 
          timestamp: w.timestamp,
          date: new Date(w.timestamp).toLocaleString() 
        })));
        break;
    }

    return filtered;
  }, [worksheets, searchQuery, sortBy, selectedGrade, selectedSubject]);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-4 sm:px-4 sm:py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold">EduModes Worksheet Development</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-3 py-4 sm:px-4 sm:py-6">
        {/* Search and Filter Controls */}
        <div className="mb-6 space-y-4">
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search worksheets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="latest">Latest First</option>
              <option value="grade">Sort by Grade</option>
              <option value="subject">Sort by Subject</option>
              <option value="topic">Sort by Topic</option>
              <option value="difficulty">Sort by Difficulty</option>
            </select>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Grades</option>
              {grades.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>

            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <div className="text-sm text-gray-600">
            Showing {filteredWorksheets.length} of {worksheets.length} worksheets
          </div>
        </div>

        {/* Worksheets Grid */}
        <div className="grid gap-4">
          {filteredWorksheets.map((set) => (
            <div key={set.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-shadow">
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