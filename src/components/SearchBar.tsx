import { Search } from "lucide-react"

type SearchBarProps = {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = "Search DNA attributes..." }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2 text-sm transition-all duration-300 ease-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20 hover:border-gray-300 dark:hover:border-gray-600"
      />
    </div>
  )
}