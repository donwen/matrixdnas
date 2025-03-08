import { Integration } from "../data/integrations"

type IntegrationGridProps = {
  integrations: Integration[]
}

export default function IntegrationGrid({ integrations }: IntegrationGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {integrations.map((integration) => {
        const Icon = integration.icon
        return (
          <div
            key={integration.id}
            className="group relative rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out dark:border-gray-700 dark:bg-gray-800"
          >
            <div
              className="mb-4 inline-flex rounded-lg p-3 transform transition-transform duration-300 ease-out group-hover:scale-110"
              style={{ backgroundColor: `${integration.color}15` }}
            >
              <Icon
                className="h-6 w-6 transition-colors duration-300 ease-out"
                style={{ color: integration.color }}
              />
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-1 dark:text-gray-100 transition-colors duration-300 ease-out group-hover:text-[#6366F1] dark:group-hover:text-[#818CF8]">
              {integration.name}
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                {integration.id.toUpperCase()}
              </span>
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
              {integration.description}
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100/80 text-gray-800 dark:bg-gray-700/80 dark:text-gray-300">
                {integration.category}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}