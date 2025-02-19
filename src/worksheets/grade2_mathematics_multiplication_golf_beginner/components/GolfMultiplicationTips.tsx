import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const GolfMultiplicationTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-amber-200 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-700 p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Tips for Mastering 10 Times Table 🏌️
                </h1>
              </div>

              <div className="p-4 md:p-6 space-y-6">
                {/* Quick Rules Section */}
                <section className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-3">
                    Quick Rules for 10 Times Table ⚡
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">1.</span>
                      <span>Just add a zero! When multiplying by 10, add a zero to the end of the number.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">2.</span>
                      <span>Example: 5 × 10 = 50 (just add 0 to 5)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">3.</span>
                      <span>It's like making the number 10 times bigger!</span>
                    </li>
                  </ul>
                </section>

                {/* Visual Patterns Section */}
                <section className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-3">
                    Visual Patterns 👀
                  </h2>
                  <div className="space-y-3">
                    <p>Look at the pattern:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded border border-amber-200">
                        <p>1 × 10 = 10</p>
                        <p>2 × 10 = 20</p>
                        <p>3 × 10 = 30</p>
                        <p>4 × 10 = 40</p>
                        <p>5 × 10 = 50</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-amber-200">
                        <p>6 × 10 = 60</p>
                        <p>7 × 10 = 70</p>
                        <p>8 × 10 = 80</p>
                        <p>9 × 10 = 90</p>
                        <p>10 × 10 = 100</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Game Strategy Section */}
                <section className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-3">
                    Game Strategy 🎯
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">1.</span>
                      <span>Look for the number being multiplied by 10</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">2.</span>
                      <span>Add a zero to that number - that's your answer!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">3.</span>
                      <span>Match questions with answers quickly to score more points</span>
                    </li>
                  </ul>
                </section>

                {/* Practice Tips Section */}
                <section className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-3">
                    Practice Tips 🌟
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Practice counting by 10s: 10, 20, 30, 40...</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Try to beat your previous time in the game</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Challenge yourself to match pairs without counting</span>
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

export default GolfMultiplicationTips; 