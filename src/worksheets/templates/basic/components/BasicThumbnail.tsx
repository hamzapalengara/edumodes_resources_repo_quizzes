const BasicThumbnail = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-r from-pink-500 to-yellow-500 font-sans relative">
      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-2">
            {window.WORKSHEET_METADATA.title}
          </h1>
          <p className="text-sm text-gray-600 line-clamp-2">
            {window.WORKSHEET_METADATA.description}
          </p>
        </div>
        {/* Add your thumbnail preview content here */}
      </div>
    </div>
  );
};

export default BasicThumbnail; 