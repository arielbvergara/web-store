import type { Locale, Product } from "./types"

// Simulated database connection
// This function simulates fetching products from a database
export function getProducts(locale: Locale): Product[] {
  const products: Record<Locale, Product[]> = {
    en: [
      {
        id: "1",
        name: "Premium Wireless Headphones",
        description:
          "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers and professionals alike.",
        price: 129.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "2",
        name: "Smart Fitness Tracker",
        description:
          "Track your fitness goals with our advanced smart fitness tracker. Features heart rate monitoring, step counting, and sleep analysis.",
        price: 89.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "3",
        name: "Ultra-Thin Laptop",
        description:
          "Powerful and portable, our ultra-thin laptop is perfect for professionals on the go. Features a long-lasting battery and stunning display.",
        price: 999.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "4",
        name: "Professional Camera Kit",
        description:
          "Capture life's moments with our professional camera kit. Includes high-quality lenses and accessories for the perfect shot every time.",
        price: 799.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "5",
        name: "Smart Home Hub",
        description:
          "Control your entire home with our smart home hub. Compatible with all major smart home devices for seamless integration.",
        price: 149.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "6",
        name: "Portable Bluetooth Speaker",
        description:
          "Take your music anywhere with our portable Bluetooth speaker. Waterproof and durable with exceptional sound quality.",
        price: 59.99,
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    es: [
      {
        id: "1",
        name: "Auriculares Inalámbricos Premium",
        description:
          "Experimenta un sonido cristalino con nuestros auriculares inalámbricos premium. Perfectos para amantes de la música y profesionales.",
        price: 129.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "2",
        name: "Rastreador de Fitness Inteligente",
        description:
          "Haz seguimiento de tus objetivos de fitness con nuestro avanzado rastreador inteligente. Incluye monitoreo de ritmo cardíaco, contador de pasos y análisis del sueño.",
        price: 89.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "3",
        name: "Portátil Ultra Delgado",
        description:
          "Potente y portátil, nuestro portátil ultra delgado es perfecto para profesionales en movimiento. Cuenta con una batería de larga duración y una pantalla impresionante.",
        price: 999.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "4",
        name: "Kit de Cámara Profesional",
        description:
          "Captura los momentos de la vida con nuestro kit de cámara profesional. Incluye lentes de alta calidad y accesorios para la toma perfecta en todo momento.",
        price: 799.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "5",
        name: "Centro de Hogar Inteligente",
        description:
          "Controla toda tu casa con nuestro centro de hogar inteligente. Compatible con todos los principales dispositivos de hogar inteligente para una integración perfecta.",
        price: 149.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "6",
        name: "Altavoz Bluetooth Portátil",
        description:
          "Lleva tu música a cualquier lugar con nuestro altavoz Bluetooth portátil. Resistente al agua y duradero con una calidad de sonido excepcional.",
        price: 59.99,
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  }

  return products[locale]
}
