type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md transition-all duration-300 ease-out hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600"
      >
        Previous
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNumber: number
          if (totalPages <= 5) {
            pageNumber = i + 1
          } else if (currentPage <= 3) {
            pageNumber = i + 1
          } else if (currentPage >= totalPages - 2) {
            pageNumber = totalPages - 4 + i
          } else {
            pageNumber = currentPage - 2 + i
          }

          return (
            <button
              key={i}
              onClick={() => onPageChange(pageNumber)}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                currentPage === pageNumber
                  ? "bg-indigo-600 text-white transform scale-105 transition-all duration-300 ease-out"
                  : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-out dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600"
              }`}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md transition-all duration-300 ease-out hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600"
      >
        Next
      </button>
    </div>
  )
}