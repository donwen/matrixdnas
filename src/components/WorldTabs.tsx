import { cn } from '../lib/utils'
import { worlds } from '../data/dna'

type WorldTabsProps = {
  selectedWorld: string
  onSelectWorld: (world: string) => void
}

export default function WorldTabs({ selectedWorld, onSelectWorld }: WorldTabsProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <div className="flex space-x-8">
        {worlds.map((world) => {
          const Icon = world.icon
          return (
            <button
              key={world.id}
              onClick={() => onSelectWorld(world.id)}
              className={cn(
                'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-[2px]',
                selectedWorld === world.id
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
              )}
            >
              <Icon className="mr-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:scale-110" />
              <span>{world.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}