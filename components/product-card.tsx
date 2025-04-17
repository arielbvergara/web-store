"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { addToFavorites, isFavorite, removeFromFavorites } from "@/lib/favorites"
import type { Product } from "@/lib/types"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ProductCardProps {
  product: Product
  dictionary: {
    price: string
    viewSite: string
    addToFavourite: string,
    removeFromFavourites: string
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
    <Card className="gamer-border relative flex h-full flex-col overflow-hidden border-muted bg-card/80 backdrop-blur-sm">
      <CardHeader className="relative p-6">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-20 rounded-md bg-background/50 backdrop-blur-sm hover:bg-background/70"
          onClick={toggleFavorite}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("h-5 w-5", isFav ? "fill-red-500 text-red-500" : "text-gray-400")} />
        </Button>
        <div className="relative aspect-square overflow-hidden rounded-md bg-white">
          <div className="absolute inset-0 z-10 from-primary/20 to-secondary/20"></div>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="z-0 object-contain transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="relative z-10 flex-grow px-6 pb-4">
        <CardTitle className="mb-3 text-xl text-blue-500">{product.name}</CardTitle>
        <p className="line-clamp-3 text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 px-6 pb-6 pt-0">
        <p className="text-lg font-bold text-cyan-500">
          {dictionary?.price}: ${product.price.toFixed(2)}
        </p>
        <div className="flex w-full gap-3">
          <Link href={product.link} target="_blank" className="flex-1 border-blue-500/50 hover:border-blue-500">
            <Button variant="outline" size="sm" className="flex-1 border-blue-500/50 hover:border-blue-500">
              {dictionary?.viewSite} 
            </Button>
          </Link>
          <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-500/80" onClick={toggleFavorite}>
            {!isFav ? dictionary?.addToFavourite : dictionary?.removeFromFavourites}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
