import { Button } from "../components/ui/button"

type CategoryFilterProps = {
  categories?: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <aside className="w-48 bg-white shadow-md flex flex-col h-screen dark:bg-gray-800">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Categories</h2>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="space-y-1 p-4 pt-0">
          {categories?.map((category) => (
            <button
              key={category}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === category 
                  ? 'bg-gray-100 text-gray-900 font-medium dark:bg-gray-700 dark:text-white transform scale-105 transition-all duration-300 ease-out'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-out'
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}