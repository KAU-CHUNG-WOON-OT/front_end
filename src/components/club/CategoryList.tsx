interface CategoryListProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CategoryList = ({ categories, selectedCategory, onSelect }: CategoryListProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`
            px-7 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors
            ${
              selectedCategory === cat
                ? "bg-slate-800 text-white"
                : "bg-white text-gray-400 hover:bg-gray-100"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;