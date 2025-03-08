"use client"

import { useState, useMemo } from "react"
import { categories, dnaData } from "../data/dna"
import CategoryFilter from "../components/CategoryFilter"
import SearchBar from "../components/SearchBar"
import IntegrationGrid from "../components/IntegrationGrid"
import { ThemeToggle } from "../components/ThemeToggle"
import WorldTabs from "../components/WorldTabs"

export default function IntegrationsPage() {
  const [selectedWorld, setSelectedWorld] = useState("physical")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredIntegrations = useMemo(() => {
    return dnaData.filter((integration) => {
      const worldMatch = integration.world === selectedWorld
      const categoryMatch = selectedCategory === "All" || integration.category === selectedCategory
      const searchMatch =
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase())
      return worldMatch && categoryMatch && searchMatch
    })
  }, [selectedWorld, selectedCategory, searchQuery])

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 overflow-hidden">
      <CategoryFilter
        categories={categories[selectedWorld as keyof typeof categories] || []}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category)
        }}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Twin Matrix DNAs</h1>
            <ThemeToggle />
          </div>
          <WorldTabs
            selectedWorld={selectedWorld}
            onSelectWorld={(world) => {
              setSelectedWorld(world)
              setSelectedCategory("All")
            }}
          />
          <SearchBar
            onSearch={(query) => {
              setSearchQuery(query)
            }}
          />
        </div>
        <div className="flex-1 overflow-auto px-4 md:px-6">
          <IntegrationGrid integrations={filteredIntegrations} />
        </div>
      </main>
    </div>
  )
}