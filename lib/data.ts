import type { Locale, Product } from "./types"

// Simulated database connection
// This function simulates fetching products from a database
export function getProducts(locale: Locale): Product[] {
  const products: Record<Locale, Product[]> = {
    en: [
      {
        id: "1",
        name: "Nintendo Switch Lite",
        description:
          "Enjoy handheld gaming on the go with the Nintendo Switch Lite. This compact console is perfect for solo play and comes in a variety of vibrant colors—check the site for all available options.",
        price: 209,
        image: "/SwitchLite.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_nintendo-switch-lite-coral-1657574.html"
      },
      {
        id: "2",
        name: "Nintendo Switch Standard",
        description:
          "Get the full console experience with the Nintendo Switch Standard edition. Featuring detachable Joy-Cons and dock mode, it's perfect for solo or multiplayer gaming. Available in red and blue.",
        price: 278,
        image: "/SwitchStandard.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_nintendo-switch-rood-en-blauw-1742674.html"
      },
      {
        id: "3",
        name: "Nintendo Switch OLED",
        description:
          "Take your gaming to the next level with the Nintendo Switch OLED. Featuring a stunning 7-inch OLED display, enhanced audio, and improved kickstand. Available in red and blue.",
        price: 328,
        image: "/SwitchOled.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_nintendo-switch-oled-rood-blauw-1701251.html"
      },
      {
        id: "4",
        name: "Samsung Galaxy S23 Black - 128 GB",
        description:
          "Meet the Samsung Galaxy S23 in sleek black with 128 GB storage. Enjoy cutting-edge performance, an advanced camera system, and a premium build.",
        price: 548,
        image: "/s23-black.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_samsung-galaxy-s23-5g-128-gb-zwart-128-gb-zwart-101827311.html"
      },
      {
        id: "5",
        name: "Samsung Galaxy S23 Green - 256 GB",
        description:
          "Power and elegance meet in the Samsung Galaxy S23, now in stylish green with 256 GB storage. Enjoy smooth performance, a pro-grade camera, and exceptional battery life.",
        price: 636,
        image: "/s23-green.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_samsung-galaxy-s23-5g-256-gb-groen-256-gb-groen-101827308.html"
      },
      {
        id: "6",
        name: "Samsung Galaxy S23 Cream - 256 GB",
        description:
          "Stand out with the Samsung Galaxy S23 in elegant cream. Featuring 256 GB of storage, high-end processing power, and stunning visuals in a unique tone.",
        price: 493,
        image: "/s23-cream.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_samsung-galaxy-s23-5g-128-gb-wit-128-gb-wit-101827332.html"
      }
    ],
    es: [
      {
        id: "1",
        name: "Nintendo Switch Lite",
        description:
          "Disfruta de juegos portátiles con la Nintendo Switch Lite. Esta consola compacta es ideal para jugar solo y está disponible en varios colores vibrantes. Consulta el sitio para ver todas las opciones.",
        price: 209,
        image: "/SwitchLite.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_nintendo-switch-lite-coral-1657574.html"
      },
      {
        id: "2",
        name: "Nintendo Switch Estándar",
        description:
          "Vive la experiencia completa de consola con la Nintendo Switch Estándar. Con Joy-Cons desmontables y modo dock, es ideal para jugar solo o con amigos. Disponible en rojo y azul.",
        price: 278,
        image: "/SwitchStandard.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_nintendo-switch-rood-en-blauw-1742674.html"
      },
      {
        id: "3",
        name: "Nintendo Switch OLED",
        description:
          "Lleva tu juego al siguiente nivel con la Nintendo Switch OLED. Pantalla OLED de 7 pulgadas, sonido mejorado y soporte ajustable. Disponible en rojo y azul.",
        price: 328,
        image: "/SwitchOled.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_nintendo-switch-oled-rood-blauw-1701251.html"
      },
      {
        id: "4",
        name: "Samsung Galaxy S23 Negro - 128 GB",
        description:
          "Descubre el Samsung Galaxy S23 en elegante color negro con 128 GB de almacenamiento. Rendimiento de última generación y cámara avanzada.",
        price: 548,
        image: "/s23-black.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_samsung-galaxy-s23-5g-128-gb-zwart-128-gb-zwart-101827311.html"
      },
      {
        id: "5",
        name: "Samsung Galaxy S23 Verde - 256 GB",
        description:
          "El Samsung Galaxy S23 combina potencia y estilo en su versión verde con 256 GB. Fluidez, cámara profesional y excelente autonomía.",
        price: 636,
        image: "/s23-green.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_samsung-galaxy-s23-5g-256-gb-groen-256-gb-groen-101827308.html"
      },
      {
        id: "6",
        name: "Samsung Galaxy S23 Crema - 256 GB",
        description:
          "Destácate con el Samsung Galaxy S23 en color crema. Con 256 GB de almacenamiento, un rendimiento potente y un diseño sofisticado.",
        price: 493,
        image: "/s23-cream.jpeg",
        link: "https://www.mediamarkt.nl/nl/product/_samsung-galaxy-s23-5g-128-gb-wit-128-gb-wit-101827332.html"
      }
    ]
  }
  

  return products[locale]
}
