import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BasicAnswerKey = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WorksheetHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {window.WORKSHEET_METADATA.title} - Answer Key
          </h1>
          {/* Add your answer key content here */}
        </div>
      </main>
    </div>
  );
};

export default BasicAnswerKey; 