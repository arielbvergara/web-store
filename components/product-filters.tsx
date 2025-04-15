"use client"

import type React from "react"

import { useState } from "react"
import { Search, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface ProductFiltersProps {
  dictionary: {
    search: string
    priceRange: string
    min: string
    max: string
    favorites: string
    showFavoritesOnly: string
    allProducts: string
    favoriteProducts: string
    currency: string
  }
  minPrice: number
  maxPrice: number
  onFilterChange: (filters: {
    search: string
    minPrice: number
    maxPrice: number
    favoritesOnly: boolean
  }) => void
  showingFavorites: boolean
}

export default function ProductFilters({
  dictionary,
  minPrice,
  maxPrice,
  onFilterChange,
  showingFavorites,
}: ProductFiltersProps) {
  const [search, setSearch] = useState("")
  const [minPriceValue, setMinPriceValue] = useState(minPrice)
  const [maxPriceValue, setMaxPriceValue] = useState(maxPrice)
  const [favoritesOnly, setFavoritesOnly] = useState(showingFavorites)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    onFilterChange({
      search: newSearch,
      minPrice: minPriceValue,
      maxPrice: maxPriceValue,
      favoritesOnly,
    })
  }

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value) || minPrice
    const newMinPrice = Math.max(minPrice, Math.min(value, maxPriceValue))
    setMinPriceValue(newMinPrice)
    onFilterChange({
      search,
      minPrice: newMinPrice,
      maxPrice: maxPriceValue,
      favoritesOnly,
    })
  }

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value) || maxPrice
    const newMaxPrice = Math.min(maxPrice, Math.max(value, minPriceValue))
    setMaxPriceValue(newMaxPrice)
    onFilterChange({
      search,
      minPrice: minPriceValue,
      maxPrice: newMaxPrice,
      favoritesOnly,
    })
  }

  const toggleFavorites = () => {
    const newFavoritesOnly = !favoritesOnly
    setFavoritesOnly(newFavoritesOnly)
    onFilterChange({
      search,
      minPrice: minPriceValue,
      maxPrice: maxPriceValue,
      favoritesOnly: newFavoritesOnly,
    })
  }

  return (
    <div className="mb-8 rounded-lg border border-muted bg-card/80 p-4 backdrop-blur-sm md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        {/* Search Input */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            placeholder={dictionary?.search}
            value={search}
            onChange={handleSearchChange}
            className="border-primary/30 bg-background/50 pl-10 focus:border-primary"
          />
        </div>

        {/* Price Range Inputs */}
        <div className="flex min-w-[220px] items-center gap-2">
          <span className="whitespace-nowrap text-sm font-bold text-blue-500">{dictionary?.currency}</span>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={minPriceValue}
              onChange={handleMinPriceChange}
              min={minPrice}
              max={maxPriceValue}
              step="0.01"
              className="w-20 border-primary/30 bg-background/50 focus:border-primary"
              aria-label={dictionary?.min}
            />
            <span className="text-muted-foreground">-</span>
            <Input
              type="number"
              value={maxPriceValue}
              onChange={handleMaxPriceChange}
              min={minPriceValue}
              max={maxPrice}
              step="0.01"
              className="w-20 border-primary/30 bg-background/50 focus:border-primary"
              aria-label={dictionary?.max}
            />
          </div>
        </div>

        {/* Favorites Toggle */}
        <Button
          onClick={toggleFavorites}
          variant={favoritesOnly ? "default" : "outline"}
          className={cn(
            "gap-2 whitespace-nowrap",
            favoritesOnly ? "bg-blue-500 hover:bg-blue-500/80" : "border-blue-500/30 hover:border-blue-500/50",
          )}
        >
          <Heart className={cn("h-4 w-4", favoritesOnly ? "fill-white" : "")} />
          {dictionary?.showFavoritesOnly}
        </Button>
      </div>
    </div>
  )
}
