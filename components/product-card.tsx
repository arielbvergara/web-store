"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { addToFavorites, isFavorite, removeFromFavorites } from "@/lib/favorites"
import type { Product } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  dictionary: {
    price: string
    viewDetails: string
    addToCart: string
  }
}

export default function ProductCard({ product, dictionary }: ProductCardProps) {
  const [isFav, setIsFav] = useState(false)
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Check favorite status on mount and set up interval
  useEffect(() => {
    // Initial check
    setIsFav(isFavorite(product.id))

    // Set up interval to check for changes
    checkIntervalRef.current = setInterval(() => {
      const currentStatus = isFavorite(product.id)
      if (currentStatus !== isFav) {
        setIsFav(currentStatus)
      }
    }, 1000)

    // Clean up interval on unmount
    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current)
      }
    }
  }, [product.id])

  const toggleFavorite = () => {
    if (isFav) {
      removeFromFavorites(product.id)
      setIsFav(false)
    } else {
      addToFavorites(product.id)
      setIsFav(true)
    }
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden border-muted bg-card/80 backdrop-blur-sm relative gamer-border">
      <CardHeader className="p-6 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 bg-background/50 backdrop-blur-sm hover:bg-background/70 rounded-md"
          onClick={toggleFavorite}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("h-5 w-5", isFav ? "fill-red-500 text-red-500" : "text-gray-400")} />
        </Button>
        <div className="aspect-square relative overflow-hidden rounded-md">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10"></div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105 z-0"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-6 pb-4 relative z-10">
        <CardTitle className="text-xl mb-3 text-blue-500">{product.name}</CardTitle>
        <p className="text-muted-foreground line-clamp-3">{product.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 px-6 pb-6 pt-0">
        <p className="font-bold text-lg text-cyan-500">
          {dictionary.price}: ${product.price.toFixed(2)}
        </p>
        <div className="flex gap-3 w-full">
          <Button variant="outline" size="sm" className="flex-1 border-blue-500/50 hover:border-blue-500">
            {dictionary.viewDetails}
          </Button>
          <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-500/80">
            {dictionary.addToCart}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
