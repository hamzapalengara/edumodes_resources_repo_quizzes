import { useState, useEffect, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { DragSourceMonitor, DropTargetMonitor } from 'react-dnd';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

// Types for our items and categories
interface Item {
  id: string;
  type: string;
  emoji: string;
  categoryId?: string;
}

interface Category {
  id: string;
  type: string;
  label: string;
  accepts: string[];
  emoji: string;
}

// Add this interface before the CategoryBox component
interface DragItem {
  id: string;
  type: string;
}

// Draggable item component
const DraggableItem = ({ 
  item, 
  isMatched,
  onClick 
}: { 
  item: Item; 
  isMatched: boolean;
  onClick: () => void;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id: item.id, type: item.type },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !isMatched,
  }), [item, isMatched]);

  console.log('DraggableItem render:', { id: item.id, type: item.type, isMatched });

  return (
    <div
      ref={drag}
      onClick={onClick}
      className={`
        w-20 h-20 flex items-center justify-center text-4xl
        rounded-xl transition-all duration-300 ease-in-out transform
        ${isDragging ? 'ring-4 ring-violet-400 scale-110 rotate-3 shadow-xl opacity-75' : 'ring-2 ring-violet-200'}
        ${isMatched ? 'opacity-50 cursor-default' : 'hover:scale-105 cursor-grab active:cursor-grabbing hover:shadow-lg'}
        bg-white backdrop-blur-xl
        touch-none select-none
      `}
    >
      {item.emoji}
    </div>
  );
};

// Category box component
const CategoryBox = ({ 
  category,
  onDrop,
  matchedItems
}: { 
  category: Category;
  onDrop: (itemId: string) => void;
  matchedItems: Item[];
}) => {
  console.log('CategoryBox Render -', category.label, {
    accepts: category.accepts,
    matchedItems: matchedItems.map(i => ({ id: i.id, type: i.type }))
  });

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item: DragItem) => {
      console.log('CategoryBox Drop Attempt -', {
        category: category.label,
        categoryAccepts: category.accepts,
        itemType: item.type,
        canAccept: category.accepts.includes(item.type)
      });
      
      if (category.accepts.includes(item.type)) {
        onDrop(item.id);
        return { dropped: true };
      }
      return undefined;
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop() && monitor.getItem() && 
               category.accepts.includes((monitor.getItem() as DragItem).type),
    }),
  }), [category, onDrop]);

  return (
    <div
      ref={drop}
      className={`
        relative w-full p-6 rounded-xl transition-all duration-300 ease-in-out
        ${isOver && canDrop ? 'ring-4 ring-green-400 scale-102 shadow-lg bg-green-50/80' : 
          isOver && !canDrop ? 'ring-4 ring-red-400 scale-102 shadow-lg bg-red-50/80' :
          'ring-2 ring-violet-200'}
        bg-white/80 backdrop-blur-sm
        min-h-[180px] flex flex-col items-center justify-between
      `}
    >
      {/* Category Label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{category.emoji}</span>
        <span className="text-xl font-bold text-violet-900">
          {category.label}
        </span>
      </div>

      {/* Matched Items */}
      <div className="flex flex-wrap gap-3 justify-center items-center min-h-[80px] w-full">
        {matchedItems.map(item => (
          <div
            key={item.id}
            className="w-14 h-14 flex items-center justify-center text-2xl
                     bg-violet-50/80 backdrop-blur-sm
                     rounded-lg shadow-sm animate-pop-in"
          >
            {item.emoji}
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to speak text
const speak = (text: string) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1.1; // Slightly higher pitch for child-friendly voice
    window.speechSynthesis.speak(utterance);
  }
};

// Main worksheet component
const SortingWorksheet = () => {
  const [level, setLevel] = useState(1);
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [matchedItemsMap, setMatchedItemsMap] = useState<Record<string, Item[]>>({});
  const markCorrectRef = useRef<(() => void) | null>(null);

  // Initialize level data
  useEffect(() => {
    const levelData = getLevelData(level);
    console.log('Level Data Changed:', {
      level,
      items: levelData.items.map(i => ({ id: i.id, type: i.type })),
      categories: levelData.categories.map(c => ({ id: c.id, accepts: c.accepts }))
    });
    
    setItems(levelData.items);
    setCategories(levelData.categories);
    setMatchedItemsMap({});

    // Announce level
    const levelMessages = {
      1: "Level 1! Let's sort by colors! Red and blue things go in different boxes.",
      2: "Level 2! Time to sort shapes! Find the circles and squares.",
      3: "Level 3! Now we'll sort by size! Big and small animals."
    };
    speak(levelMessages[level as keyof typeof levelMessages]);
  }, [level]);

  // Handle successful drop
  const handleDrop = (itemId: string, categoryId: string) => {
    console.log('Handle Drop:', { itemId, categoryId });
    
    const item = items.find(i => i.id === itemId);
    const category = categories.find(c => c.id === categoryId);

    if (item && category && category.accepts.includes(item.type)) {
      // Update items with the new category
      const updatedItems = items.map(i => 
        i.id === itemId ? { ...i, categoryId } : i
      );
      setItems(updatedItems);

      // Update matched items map
      setMatchedItemsMap(prev => {
        const newMap = { ...prev };
        // Remove item from previous category if it exists
        Object.keys(newMap).forEach(catId => {
          newMap[catId] = newMap[catId]?.filter(i => i.id !== itemId) || [];
        });
        // Add item to new category
        newMap[categoryId] = [...(newMap[categoryId] || []), { ...item, categoryId }];
        return newMap;
      });

      // Play success feedback and update score
      playSuccessSound();
      speak("Great job! That's correct!");
      
      // Use WorksheetTracker's markCorrect
      if (markCorrectRef.current) {
        markCorrectRef.current();
      }

      // Check if level is complete
      const isLevelComplete = updatedItems.every(item => {
        const itemCategory = categories.find(c => c.id === item.categoryId);
        return itemCategory && itemCategory.accepts.includes(item.type);
      });

      if (isLevelComplete) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          if (level < 3) {
            speak("Amazing! You completed the level! Let's try something new!");
            setLevel(prev => prev + 1);
          } else {
            speak("Congratulations! You're a sorting superstar!");
          }
        }, 2000);
      }
    } else {
      // Provide feedback for incorrect matches
      speak("Try again! Think about where this item belongs.");
    }
  };

  // Detect touch device
  const isTouchDevice = 'ontouchstart' in window;

  return (
    <WorksheetTracker 
      totalQuestions={12} // 4 items per level * 3 levels
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Sorting Game Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        // Store markCorrect function in ref for use in callbacks
        markCorrectRef.current = markCorrect;
        
        return (
          <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
            <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50">
              <WorksheetHeader />
              
              <TouchContainer>
                <div className="w-full md:max-w-5xl md:mx-auto p-4 md:p-6">
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-violet-100 p-6 shadow-lg">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-violet-800 mb-2">
                        Fun Toy Sorting and Matching Game
                      </h1>
                      <p className="text-violet-600 text-lg">
                        Let's sort and match toys by their {level === 1 ? 'colors' : level === 2 ? 'shapes' : 'sizes'}!
                      </p>
                    </div>

                    {/* Level and Score */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-xl font-bold text-violet-900 px-5 py-2 rounded-lg bg-violet-50 border border-violet-200">
                        Level {level}
                      </div>
                      <div className="text-xl font-bold text-emerald-900 px-5 py-2 rounded-lg bg-emerald-50 border border-emerald-200">
                        Score: {score} / {maxScore}
                      </div>
                    </div>

                    {/* Instructions */}
                    <div className="text-center text-lg font-semibold mb-6 p-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md">
                      {level === 1 && "Drag and sort by colors! 🎨"}
                      {level === 2 && "Match the shapes! ⭕"}
                      {level === 3 && "Group by size! 🐘"}
                    </div>

                    {/* Items to sort - At the top */}
                    <div className="bg-gradient-to-b from-violet-50 to-fuchsia-50 p-6 rounded-xl border border-violet-100 mb-8">
                      <div className="flex flex-wrap gap-4 justify-center">
                        {items.map(item => (
                          <DraggableItem
                            key={item.id}
                            item={item}
                            isMatched={item.categoryId !== undefined}
                            onClick={() => {}}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Categories - At the bottom */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {categories.map(category => (
                        <CategoryBox
                          key={category.id}
                          category={category}
                          onDrop={(itemId) => handleDrop(itemId, category.id)}
                          matchedItems={matchedItemsMap[category.id] || []}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </TouchContainer>

              {/* Success overlay */}
              {showSuccess && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl text-center transform scale-110 animate-bounce-in 
                                border border-violet-200 shadow-xl">
                    <div className="text-5xl mb-4">🎉</div>
                    <div className="text-2xl font-bold text-violet-900">
                      {level < 3 ? "Ready for the next challenge?" : "You're a sorting superstar! 🏆"}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DndProvider>
        );
      }}
    </WorksheetTracker>
  );
};

// Helper function to get level data
const getLevelData = (level: number) => {
  switch (level) {
    case 1:
      return {
        items: [
          { id: '1', type: 'red', emoji: '🔴' },
          { id: '2', type: 'blue', emoji: '🔵' },
          { id: '3', type: 'red', emoji: '❤️' },
          { id: '4', type: 'blue', emoji: '💙' },
        ],
        categories: [
          { id: 'c1', type: 'color', label: 'Red Things', accepts: ['red'], emoji: '❤️' },
          { id: 'c2', type: 'color', label: 'Blue Things', accepts: ['blue'], emoji: '💙' },
        ],
      };
    case 2:
      return {
        items: [
          { id: '1', type: 'circle', emoji: '⭕' },
          { id: '2', type: 'square', emoji: '⬜' },
          { id: '3', type: 'circle', emoji: '🔴' },
          { id: '4', type: 'square', emoji: '📦' },
        ],
        categories: [
          { id: 'c1', type: 'shape', label: 'Round Things', accepts: ['circle'], emoji: '⭕' },
          { id: 'c2', type: 'shape', label: 'Square Things', accepts: ['square'], emoji: '⬜' },
        ],
      };
    case 3:
      return {
        items: [
          { id: '1', type: 'big', emoji: '🐘' },
          { id: '2', type: 'small', emoji: '🐁' },
          { id: '3', type: 'big', emoji: '🦒' },
          { id: '4', type: 'small', emoji: '🐞' },
        ],
        categories: [
          { id: 'c1', type: 'size', label: 'Big Animals', accepts: ['big'], emoji: '🦒' },
          { id: 'c2', type: 'size', label: 'Small Animals', accepts: ['small'], emoji: '🐁' },
        ],
      };
    default:
      return { items: [], categories: [] };
  }
};

// Helper function to play success sound
const playSuccessSound = () => {
  const audio = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAABQAFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/+MYxAAAAANIAAAAAExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDsAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
  audio.play().catch(() => {});
};

// Add animations
const style = document.createElement('style');
style.textContent = `
  @keyframes pop-in {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes bounce-in {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
  .animate-pop-in {
    animation: pop-in 0.3s ease-out forwards;
  }
  .animate-bounce-in {
    animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
`;
document.head.appendChild(style);

export default SortingWorksheet; 