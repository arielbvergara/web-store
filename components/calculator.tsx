"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Trash2, CalculatorIcon as CalcIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getProducts } from "@/lib/data"
import { getFavorites, removeFromFavorites } from "@/lib/favorites"
import type { Locale, Product } from "@/lib/types"

interface CalculatorProps {
  dictionary: {
    title: string
    euroBlueRate: string
    checkRate: string
    enterRate: string
    products: string
    product: string
    priceInEuros: string
    priceInPesos: string
    total: string
    noProducts: string
  }
  lang: Locale
}

// Format number with thousands separator
function formatNumber(num: number): string {
  return Math.ceil(num).toLocaleString("es-AR")
}

function formatNumberWith2Decimals(num: number): string {
  return (Math.ceil(num*100)/100).toLocaleString("es-AR")
}

// Calculate percentage of increase based on number of products
const calculatePercentage = (productsCount: number): number => {
  if (productsCount <= 1) return 1.25
  if (productsCount === 2) return 1.20
  return 1.15
}

export default function Calculator({ dictionary, lang }: CalculatorProps) {
  const [euroBlueRate, setEuroBlueRate] = useState<number>(1000)
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])
  const [allProducts, setAllProducts] = useState<Product[]>([])

  // Load all products once
  useEffect(() => {
    const products = getProducts(lang)
    setAllProducts(products)
  }, [lang])

  // Update favorite products whenever they might change
  useEffect(() => {
    const loadFavorites = () => {
      const favorites = getFavorites()
      const favProducts = allProducts.filter((product) => favorites.includes(product.id))
      setFavoriteProducts(favProducts)
    }

    // Load favorites initially
    loadFavorites()

    // Set up an interval to check for changes in favorites
    const intervalId = setInterval(loadFavorites, 1000)

    // Clean up interval on unmount
    return () => clearInterval(intervalId)
  }, [allProducts])

  // Calculate percentage of increase based on number of products
  const percentageIncreace = calculatePercentage(favoriteProducts.length)
  
  // Calculate totals
  const totalEuros = favoriteProducts.reduce((sum, product) => sum + product.price, 0)
  const totalPesos = totalEuros * euroBlueRate

  // Handle removing a product from favorites
  const handleRemoveFromFavorites = (productId: string) => {
    removeFromFavorites(productId)
    // Immediately update the UI
    setFavoriteProducts(favoriteProducts.filter((product) => product.id !== productId))
  }

  // Handle Euro Blue rate change
  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value) && value > 0) {
      setEuroBlueRate(value)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="gamer-border relative overflow-hidden border-muted bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <CalcIcon className="h-6 w-6 text-blue-500" />
            <span className="gamer-gradient">{dictionary?.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
          <label htmlFor="euro-blue-rate" className="min-w-[180px] text-lg font-medium">
            {dictionary?.euroBlueRate}
          </label>
          <Input
            id="euro-blue-rate"
            type="number"
            value={euroBlueRate}
            onChange={handleRateChange}
            placeholder={dictionary?.enterRate}
            className="max-w-[200px] border-primary/30 bg-background/50 focus:border-primary"
          />
          <a
            href="https://www.ambito.com/euro-informal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline md:ml-4"
          >
            {dictionary?.checkRate}
          </a>
        </div>

          {/* Product List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{dictionary?.products} ({favoriteProducts.length} 👉 {formatNumber((percentageIncreace-1)*100)}%)</h3>
            </div>

            {/* Favorite Products */}
            {favoriteProducts.length > 0 ? (
              <div className="space-y-4">
                {/* Desktop Headers */}
                <div className="hidden grid-cols-10 gap-4 border-b border-muted py-2 text-sm font-medium md:grid">
                  <div className="col-span-6">{dictionary?.product}</div>
                  <div className="col-span-2 text-right">{dictionary?.priceInEuros}</div>
                  <div className="col-span-1 text-right">{dictionary?.priceInPesos}</div>
                </div>

                {/* Mobile Headers */}
                <div className="grid grid-cols-2 gap-4 border-b border-muted py-2 text-sm font-medium md:hidden">
                  <div className="text-center">{dictionary?.priceInEuros}</div>
                  <div className="text-center">{dictionary?.priceInPesos}</div>
                </div>

                {favoriteProducts.map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-10 items-center gap-4 border-b border-muted/50 py-2 md:grid-cols-10"
                  >
                    {/* Desktop View - With product name and delete button */}
                    <div className="col-span-6 hidden items-center gap-3 md:flex">
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="truncate text-sm">{product.name}</span>
                    </div>
                    <div className="col-span-2 hidden text-right md:block">€{formatNumberWith2Decimals(product.price * percentageIncreace)} (€{formatNumberWith2Decimals(product.price)})</div>
                    <div className="col-span-1 hidden text-right md:block">
                      ${formatNumberWith2Decimals(product.price * euroBlueRate * percentageIncreace)}
                    </div>
                    <div className="col-span-1 hidden text-right md:block">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative z-10 h-8 w-8 text-red-500 hover:bg-red-500/10 hover:text-red-600"
                        onClick={() => handleRemoveFromFavorites(product.id)}
                        aria-label="Remove from favorites"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Mobile View - Only image and prices */}
                    <div className="col-span-2 flex items-center justify-center md:hidden">
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="col-span-4 text-center md:hidden">€{formatNumber(product.price * percentageIncreace)}</div>
                    <div className="col-span-4 text-center md:hidden">
                      ${formatNumber(product.price * euroBlueRate * percentageIncreace)}
                    </div>
                  </div>
                ))}

                {/* Totals - Desktop */}
                <div className="argentina-banner relative hidden grid-cols-10 items-center gap-4 overflow-hidden rounded-lg py-4 font-bold md:grid">
                  <div className="col-span-1 text-right">{dictionary?.total}:</div>
                  <div className="col-span-7 text-right">€{formatNumberWith2Decimals(totalEuros * percentageIncreace)}</div>
                  <div className="col-span-1 text-right">${formatNumberWith2Decimals(totalPesos * percentageIncreace)}</div>
                </div>

                {/* Totals - Mobile */}
                <div className="argentina-banner relative grid grid-cols-2 items-center gap-4 overflow-hidden rounded-lg py-4 font-bold md:hidden">
                  <div className="text-center">€{formatNumberWith2Decimals(totalEuros * percentageIncreace)}</div>
                  <div className="text-center">${formatNumberWith2Decimals(totalPesos * percentageIncreace)}</div>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center text-muted-foreground">{dictionary?.noProducts}</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
