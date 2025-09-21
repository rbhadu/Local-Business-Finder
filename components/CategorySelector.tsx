
import React from 'react';

interface CategorySelectorProps {
  availableCategories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  disabled: boolean;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  availableCategories,
  selectedCategories,
  onCategoryToggle,
  disabled,
}) => {
  return (
    <div className="my-6">
      <p className="text-center text-lg text-gray-300 mb-4 font-medium">Select categories to explore</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {availableCategories.map((category) => {
          const isSelected = selectedCategories.includes(category);
          return (
            <button
              key={category}
              onClick={() => onCategoryToggle(category)}
              disabled={disabled}
              className={`px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-200
                ${isSelected
                  ? 'bg-indigo-500 border-indigo-500 text-white'
                  : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                }
                ${disabled ? 'cursor-not-allowed opacity-50' : ''}
              `}
              aria-pressed={isSelected}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
