import Cookies from "js-cookie"
import { getProducts } from "./data"
import type { Locale, Product } from "./types"

const FAVORITES_COOKIE_KEY = "web-store-favorites"

export function getFavorites(): string[] {
  const favorites = Cookies.get(FAVORITES_COOKIE_KEY)
  return favorites ? JSON.parse(favorites) : []
}

export function addToFavorites(productId: string): void {
  const favorites = getFavorites()
  if (!favorites.includes(productId)) {
    favorites.push(productId)
    Cookies.set(FAVORITES_COOKIE_KEY, JSON.stringify(favorites), { expires: 30 })
  }
}

export function removeFromFavorites(productId: string): void {
  const favorites = getFavorites()
  const updatedFavorites = favorites.filter((id) => id !== productId)
  Cookies.set(FAVORITES_COOKIE_KEY, JSON.stringify(updatedFavorites), { expires: 30 })
}

export function isFavorite(productId: string): boolean {
  const favorites = getFavorites()
  return favorites.includes(productId)
}

export function getFavoriteProducts(locale: Locale): Product[] {
  const favorites = getFavorites()
  const allProducts = getProducts(locale)
  return allProducts.filter((product) => favorites.includes(product.id))
}
