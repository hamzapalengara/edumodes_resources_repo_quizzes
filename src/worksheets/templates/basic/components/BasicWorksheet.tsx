import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BasicWorksheet = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WorksheetHeader />
      <main className="container mx-auto px-4 py-8">
        {/* Add your worksheet content here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {window.WORKSHEET_METADATA.title}
          </h1>
          <p className="text-gray-600 mb-8">
            {window.WORKSHEET_METADATA.description}
          </p>
          {/* Add your interactive elements here */}
        </div>
      </main>
    </div>
  );
};

export default BasicWorksheet; 