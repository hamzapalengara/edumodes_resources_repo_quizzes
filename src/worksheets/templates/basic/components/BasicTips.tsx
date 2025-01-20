import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BasicTips = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WorksheetHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {window.WORKSHEET_METADATA.title} - Teaching Tips
          </h1>
          {/* Add your teaching tips content here */}
          <div className="space-y-4">
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Learning Objectives</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Add your learning objectives here</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Instructions</h2>
              <ul className="list-decimal list-inside text-gray-600">
                <li>Add step-by-step instructions here</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BasicTips; 