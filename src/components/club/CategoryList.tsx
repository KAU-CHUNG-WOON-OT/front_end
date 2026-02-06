interface CategoryListProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CategoryList = ({ categories, selectedCategory, onSelect }: CategoryListProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 px-1 mb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 py-2 rounded-[25px] text-[14px] font-bold transition-all whitespace-nowrap shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${
            selectedCategory === category
              ? "bg-[#252b4f] text-white" 
              : "bg-white text-[#252b4f]"  
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;