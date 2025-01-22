import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

// Tip section component
const TipSection = ({ title, tips }: { title: string; tips: string[] }) => {
  return (
    <div className="w-full p-4 rounded-lg border-2 border-gray-200 bg-white">
      <div className="text-lg font-semibold text-gray-800 mb-4">{title}</div>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-blue-500 mt-1">•</span>
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example component to demonstrate concepts
const Example = ({ title, items }: { title: string; items: { emoji: string; label: string }[] }) => {
  return (
    <div className="w-full p-4 rounded-lg border-2 border-gray-200 bg-white">
      <div className="text-lg font-semibold text-gray-800 mb-4">{title}</div>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="text-3xl">{item.emoji}</div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main tips component
const SortingTips = () => {
  const generalTips = [
    "Start with simple categories that children can easily understand",
    "Use clear and consistent language when describing attributes",
    "Provide positive reinforcement for each successful sort",
    "Allow children to make mistakes and learn from them",
    "Make connections to everyday objects and experiences"
  ];

  const teachingStrategies = [
    "Begin with sorting by one attribute (like color) before introducing multiple attributes",
    "Use physical demonstrations to show how items belong in different groups",
    "Ask questions that help children identify key attributes",
    "Encourage children to explain their sorting decisions",
    "Practice sorting with different types of objects to reinforce concepts"
  ];

  const troubleshooting = [
    "If a child is struggling, try reducing the number of items or categories",
    "Use more familiar objects if abstract concepts are challenging",
    "Break down the sorting process into smaller steps",
    "Provide visual cues or hints when needed",
    "Take breaks if the child becomes frustrated"
  ];

  const extensions = [
    "Challenge children to create their own sorting categories",
    "Combine attributes for more advanced sorting (e.g., big red things)",
    "Turn sorting into a game or race",
    "Ask children to find items in their environment that fit each category",
    "Have children explain their sorting strategy to others"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8">
          <div className="bg-white md:rounded-lg md:border md:border-gray-200 p-4 md:p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Teaching Tips</h1>
            <h2 className="text-lg text-gray-600 mb-6">Guidance for Toy Sorting Game</h2>

            {/* Introduction */}
            <div className="text-gray-700 mb-6">
              <p className="mb-2">
                This guide provides strategies and tips for teaching sorting and classification skills to young children.
              </p>
              <p>
                Use these suggestions to help children develop their understanding of attributes and categories.
              </p>
            </div>

            {/* Examples */}
            <Example
              title="Color Sorting Examples"
              items={[
                { emoji: '🔴', label: 'Red' },
                { emoji: '🔵', label: 'Blue' },
                { emoji: '❤️', label: 'Red' },
                { emoji: '💙', label: 'Blue' }
              ]}
            />

            <Example
              title="Shape Sorting Examples"
              items={[
                { emoji: '⭕', label: 'Circle' },
                { emoji: '⬜', label: 'Square' },
                { emoji: '🔴', label: 'Circle' },
                { emoji: '📦', label: 'Square' }
              ]}
            />

            <Example
              title="Size Sorting Examples"
              items={[
                { emoji: '🐘', label: 'Big' },
                { emoji: '🐁', label: 'Small' },
                { emoji: '🦒', label: 'Big' },
                { emoji: '🐞', label: 'Small' }
              ]}
            />

            {/* Tips sections */}
            <div className="grid grid-cols-1 gap-6 mt-6">
              <TipSection title="General Tips" tips={generalTips} />
              <TipSection title="Teaching Strategies" tips={teachingStrategies} />
              <TipSection title="Troubleshooting" tips={troubleshooting} />
              <TipSection title="Extension Activities" tips={extensions} />
            </div>

            {/* Additional resources */}
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200 mt-6">
              <div className="text-lg font-semibold text-blue-800 mb-2">Learning Objectives</div>
              <ul className="text-blue-700 space-y-2">
                <li>• Recognize and identify basic attributes (color, shape, size)</li>
                <li>• Group objects based on common characteristics</li>
                <li>• Develop logical thinking and classification skills</li>
                <li>• Build vocabulary related to attributes and categories</li>
                <li>• Practice decision-making and problem-solving</li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default SortingTips; 