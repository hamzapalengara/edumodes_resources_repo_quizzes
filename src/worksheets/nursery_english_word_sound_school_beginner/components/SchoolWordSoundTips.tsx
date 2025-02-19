import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  'School',
  'Bag',
  'Pen',
  'Pencil',
  'Book',
  'Eraser',
  'Teacher',
  'Student',
  'Desk',
  'Chair'
];

const SchoolWordSoundTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F9FF]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-[#60A5FA] overflow-hidden">
              <div className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Tips for Learning School Words
                </h1>
              </div>

              <div className="p-4 md:p-6 space-y-6">
                {/* Listening Tips Section */}
                <section className="bg-[#F0F9FF] rounded-lg p-4 border border-[#60A5FA]">
                  <h2 className="text-xl font-bold text-[#1E40AF] mb-3">
                    Listening Tips 👂
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">1.</span>
                      <span>Listen carefully to how each school word sounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">2.</span>
                      <span>Try to say the word yourself after hearing it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">3.</span>
                      <span>Notice if the word is short (Pen) or long (Teacher)</span>
                    </li>
                  </ul>
                </section>

                {/* Word Recognition Section */}
                <section className="bg-[#F0F9FF] rounded-lg p-4 border border-[#60A5FA]">
                  <h2 className="text-xl font-bold text-[#1E40AF] mb-3">
                    Word Recognition 📖
                  </h2>
                  <div className="space-y-3">
                    <p className="text-[#1E40AF]">Practice these school words:</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {WORD_LIST.map((word, index) => (
                        <div 
                          key={index}
                          className="bg-white p-3 rounded border border-[#60A5FA] flex items-center justify-center"
                        >
                          <span className="text-[#1E40AF] font-medium">{word}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Game Strategy Section */}
                <section className="bg-[#F0F9FF] rounded-lg p-4 border border-[#60A5FA]">
                  <h2 className="text-xl font-bold text-[#1E40AF] mb-3">
                    Game Strategy 🎯
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">1.</span>
                      <span>Start with words you use every day, like "Book" or "Pen"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">2.</span>
                      <span>Look at the first letter of each word to help remember it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">3.</span>
                      <span>Think about the things you see in your classroom</span>
                    </li>
                  </ul>
                </section>

                {/* Fun Learning Activities */}
                <section className="bg-[#F0F9FF] rounded-lg p-4 border border-[#60A5FA]">
                  <h2 className="text-xl font-bold text-[#1E40AF] mb-3">
                    Fun Learning Activities ✨
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span>Point to and name school items in your classroom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span>Draw pictures of school items and label them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span>Play "I Spy" with classroom objects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span>Make up sentences using school words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span>Sort classroom items by their first letter sound</span>
                    </li>
                  </ul>
                </section>

                {/* Parent/Teacher Tips */}
                <section className="bg-[#F0F9FF] rounded-lg p-4 border border-[#60A5FA]">
                  <h2 className="text-xl font-bold text-[#1E40AF] mb-3">
                    Tips for Parents and Teachers 👥
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span>Encourage children to say the words clearly and slowly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span>Use real classroom objects to demonstrate the words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span>Practice the words during school activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#60A5FA] font-bold">•</span>
                      <span>Create simple sentences using the school words</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default SchoolWordSoundTips; 