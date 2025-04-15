export type Locale = "en" | "es"

export const i18n = {
  defaultLocale: "en" as const,
  locales: ["en", "es"] as const,
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string,
  link: string
}
