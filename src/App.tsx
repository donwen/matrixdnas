import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { categories, integrations } from './data/integrations';
import { ThemeToggle } from './components/ThemeToggle';

const ITEMS_PER_PAGE = 24;

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const categoryMatch = selectedCategory === 'All' || integration.category === selectedCategory;
      const searchMatch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredIntegrations.length / ITEMS_PER_PAGE);
  const paginatedIntegrations = filteredIntegrations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Categories</h2>
          <div className="mt-6 space-y-1">
            {Object.values(categories).flat().map((category: string) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  selectedCategory === category 
                    ? 'bg-gray-100 text-gray-900 font-medium dark:bg-gray-800 dark:text-gray-100'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'
                }`}
              >{category}</button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Integrations</h1>
            <ThemeToggle />
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2 text-sm focus:border-gray-300 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedIntegrations.map((integration) => {
              const Icon = integration.icon;
              return (
                <div
                  key={integration.id}
                  className="group relative rounded-lg border border-gray-200 bg-white p-4 hover:shadow-sm transition-shadow duration-200 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="inline-flex rounded-lg p-2"
                      style={{ backgroundColor: `${integration.color}15` }}
                    >
                      <Icon />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                        {integration.name}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{integration.id}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                    {integration.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;