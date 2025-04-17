"use client"

import { useState, useEffect } from "react"
import { getProducts } from "@/lib/data"
import { getFavorites } from "@/lib/favorites"
import type { Locale, Product } from "@/lib/types"
import ProductCard from "./product-card"
import ProductFilters from "./product-filters"

interface ProductListProps {
  dictionary: {
    price: string
    viewSite: string
    addToFavourite: string
    search: string
    priceRange: string
    min: string
    max: string
    favorites: string
    showFavoritesOnly: string
    allProducts: string
    favoriteProducts: string
    noProducts: string
    currency: string,
    removeFromFavourites: string,
  }
  lang: Locale
}

export default function ProductList({ dictionary, lang }: ProductListProps) {
  const [allProducts] = useState<Product[]>(() => getProducts(lang))
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)
  const [showingFavorites, setShowingFavorites] = useState(false)
  const [, setFavoritesVersion] = useState(0) // Used to trigger re-renders but not as a key

  // Calculate min and max prices from all products
  const minPrice = allProducts && allProducts.length > 0
    ? Math.floor(Math.min(...allProducts.map((product) => product.price)))
    : 0
  const maxPrice = allProducts && allProducts.length > 0
    ? Math.ceil(Math.max(...allProducts.map((product) => product.price)))
    : 1000 // Or any default maximum value

  // Set up an interval to check for changes in favorites
  useEffect(() => {
    const checkFavorites = () => {
      // This will trigger a re-render but we won't use it as a key
      setFavoritesVersion((prev) => prev + 1)

      // If showing favorites, update the filtered products
      if (showingFavorites) {
        const favorites = getFavorites()
        setFilteredProducts(allProducts.filter((product) => favorites.includes(product.id)))
      }
    }

    const intervalId = setInterval(checkFavorites, 1000)
    return () => clearInterval(intervalId)
  }, [showingFavorites, allProducts])

  const handleFilterChange = ({
    search,
    minPrice,
    maxPrice,
    favoritesOnly,
  }: {
    search: string
    minPrice: number
    maxPrice: number
    favoritesOnly: boolean
  }) => {
    setShowingFavorites(favoritesOnly)

    let filtered = allProducts

    // Filter by favorites if needed
    if (favoritesOnly) {
      const favorites = getFavorites()
      filtered = filtered.filter((product) => favorites.includes(product.id))
    }

    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower),
      )
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= minPrice && product.price <= maxPrice)

    setFilteredProducts(filtered)
  }

  return (
    <div>
      {showingFavorites && (
        <h2 className="gamer-gradient mb-8 text-center text-3xl font-bold">{dictionary?.favoriteProducts}</h2>
      )}

      <ProductFilters
        dictionary={dictionary}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onFilterChange={handleFilterChange}
        showingFavorites={showingFavorites}
      />

      {filteredProducts?.length === 0 ? (
        <div className="rounded-lg border border-muted bg-card/50 py-16 text-center backdrop-blur-sm">
          <p className="text-lg text-muted-foreground">{dictionary?.noProducts}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts?.map((product) => (
            <ProductCard
              key={product.id} // Use only product.id as the key, not favoritesVersion
              product={product}
              dictionary={dictionary}
            />
          ))}
        </div>
      )}
    </div>
  )
}
