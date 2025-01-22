const SortingThumbnail = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 p-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Main content container */}
      <div className="w-[420px] bg-white/90 backdrop-blur-xl rounded-2xl border border-violet-100 p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-violet-800 mb-4 text-center">
          Fun Toy Sorting and Matching Game
        </h1>
        {/* Preview items */}
        <div className="flex gap-6 justify-center mb-6">
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl p-3 bg-violet-50 rounded-lg">🔴</div>
            <div className="text-sm text-violet-600">Red</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl p-3 bg-violet-50 rounded-lg">⭕</div>
            <div className="text-sm text-violet-600">Circle</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl p-3 bg-violet-50 rounded-lg">🐘</div>
            <div className="text-sm text-violet-600">Big</div>
          </div>
        </div>
        {/* Description */}
        <div className="text-lg text-violet-600 text-center">
          Sort by colors, shapes, and sizes!
        </div>
      </div>
    </div>
  );
};

export default SortingThumbnail; 