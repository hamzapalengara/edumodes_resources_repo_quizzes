import React from 'react';
import { NUMBER_SIX } from './NumberSixWorksheet';

const NumberSixTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8BC34A] via-[#4CAF50] to-[#2E7D32] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FFA000]/40 to-[#FFD54F]/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-[#81C784]/40 to-[#A5D6A7]/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#4FC3F7]/40 to-[#81D4FA]/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="px-0 md:px-4 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#A5D6A7]/50 shadow-lg">
            <h1 className="text-2xl font-bold text-center text-[#2E7D32] mb-4">Tips for Writing Number 6</h1>

            {/* Visual Example */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#2E7D32] mb-3">Visual Guide</h2>
              <div className="aspect-square relative max-w-sm mx-auto">
                <svg viewBox={NUMBER_SIX.viewBox} className="w-full h-full">
                  {NUMBER_SIX.paths.map((path, index) => (
                    <g key={path.id}>
                      <path
                        d={path.d}
                        fill="none"
                        stroke="#C8E6C9"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d={path.d}
                        fill="none"
                        stroke="#4CAF50"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="5,5"
                      />
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Key Tips */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#2E7D32] mb-3">Key Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#4CAF50] font-bold">1.</span>
                  <div>
                    <p className="font-medium text-[#2E7D32]">Start with the Curved Line</p>
                    <p className="text-[#1B5E20]">Begin from the top and curve down to the left in a smooth motion.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4CAF50] font-bold">2.</span>
                  <div>
                    <p className="font-medium text-[#2E7D32]">Complete the Circle</p>
                    <p className="text-[#1B5E20]">Draw a circle at the bottom, connecting it smoothly with the curved line.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Common Mistakes */}
            <div className="mb-6 bg-[#E8F5E9] rounded-xl p-4">
              <h2 className="text-xl font-semibold text-[#2E7D32] mb-3">Common Mistakes to Avoid</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#1B5E20]">
                <li>Making the initial curve too steep or too shallow</li>
                <li>Not connecting the circle smoothly with the curve</li>
                <li>Making the circle too round or too flat</li>
                <li>Starting from the wrong direction</li>
                <li>Making the circle too big or too small compared to the curve</li>
              </ul>
            </div>

            {/* Practice Tips */}
            <div className="mb-6 bg-[#E8F5E9] rounded-xl p-4">
              <h2 className="text-xl font-semibold text-[#2E7D32] mb-3">Practice Tips</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#1B5E20]">
                <li>Practice the curved line motion separately first</li>
                <li>Use grid paper to keep the size consistent</li>
                <li>Think of the number 6 as a hook with a loop</li>
                <li>Practice drawing smooth circles</li>
                <li>Focus on making the connection point smooth</li>
              </ul>
            </div>

            {/* Real-World Examples */}
            <div className="bg-[#E8F5E9] rounded-xl p-4">
              <h2 className="text-xl font-semibold text-[#2E7D32] mb-3">Fun Facts about Number 6</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#1B5E20]">
                <li>A mango tree can grow up to 6 meters in 6 years</li>
                <li>A snowflake has 6 sides</li>
                <li>There are 6 strings on a guitar</li>
                <li>A cube has 6 faces</li>
                <li>Half a dozen mangoes is 6 mangoes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSixTips; 