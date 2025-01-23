const ColorMatchingThumbnail = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 p-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Main content container */}
      <div className="w-[420px] bg-white/90 backdrop-blur-xl rounded-2xl border border-violet-100 p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-violet-800 mb-4 text-center">
          Rainbow Adventure
        </h1>

        {/* Preview of draggable objects */}
        <div className="flex justify-center gap-4 mb-6">
          {['🍎', '🌊', '🌿'].map((emoji, index) => (
            <div
              key={index}
              className="w-16 h-16 flex items-center justify-center text-3xl bg-white rounded-lg shadow-md border-2 border-dashed border-violet-200"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Preview of color buckets */}
        <div className="flex justify-center gap-4 mb-6">
          {['#FF5252', '#448AFF', '#4CAF50'].map((color, index) => (
            <div
              key={index}
              className="w-12 h-12 rounded-lg shadow-md"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-violet-600 font-medium">
            Match objects to their colors! 🎯
          </p>
          <p className="text-violet-500 text-sm mt-2">
            Fun with colors and shapes! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorMatchingThumbnail; 