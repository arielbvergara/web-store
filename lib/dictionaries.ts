import type { Locale } from "./types"

const dictionaries = {
  en: {
    header: {
      title: "Web Store",
      menu: {
        products: "Products",
        howItWorks: "How It Works",
        contact: "Contact",
        calculator: "Calculator",
      },
    },
    sections: {
      products: "Our Products",
      howItWorks: "How It Works",
      contact: "Contact Us",
      calculator: "Price Calculator",
    },
    products: {
      price: "Price",
      viewSite: "View Site",
      addToFavourite: "Add to Favorites",
      removeFromFavourites: "Remove from Favorites",
      search: "Search products...",
      priceRange: "Price Range",
      min: "Min",
      max: "Max",
      favorites: "Show Favorites",
      showFavoritesOnly: "Show favorites only",
      allProducts: "All Products",
      favoriteProducts: "Favorite Products",
      noProducts: "No products match your filters",
      currency: "€",
    },
    calculator: {
      title: "Price Calculator",
      euroBlueRate: "Euro Blue Rate",
      enterRate: "Enter current rate",
      products: "Selected Products",
      product: "Product",
      priceInEuros: "Price (EUR)",
      priceInPesos: "Price (ARS)",
      total: "Total",
      addProduct: "Add Product",
      noProducts: "No products added yet. Add products to calculate prices.",
      addFromFavorites: "Add Favorites",
      quantity: "Qty",
    },
    nextDelivery: {
      title: "Next Delivery to Argentina!",
      nextDelivery: "Next delivery:",
      location: "Buenos Aires, Argentina",
      contactToReserve: "Contact us to reserve your products for the next delivery.",
    },
    whoAmI: {
      title: "Who am I?",
      content:
        "Hi! I'm Ariel, I'm an argentinian living in the Netherlands and I started doing this to be able to visit my family. The main goal is to recover a bit of flight ticket money. I will be as transparent as possible showing you the website and the price listed in it and for you to know, I will add a 25% to the price if you buy one product, 20% if you buy 2 products and 15% if you buy 3 products or more.",
    },
    howItWorks: {
      description:
        "Twice a year, we visit Argentina. Choose your favorite products and we'll bring them on our next trip. Payment can be made in US Dollars, Euros, or Argentine Pesos (Mercado Pago or cash).",
      steps: {
        browse: {
          title: "Browse Products",
          description: "Explore our catalog and find the products you're interested in purchasing.",
        },
        select: {
          title: "Select Items",
          description: "Add products to your favorites list to keep track of what you want to order.",
        },
        reserve: {
          title: "Reserve Products",
          description: "Contact us to confirm your order and arrange a 30% deposit payment to secure your items.",
        },
        delivery: {
          title: "Delivery & Final Payment",
          description:
            "Meet us in Buenos Aires during our next visit to receive your products and complete the payment.",
        },
      },
    },
    contact: {
      email: "Email",
      phone: "Phone",
      address: "Address",
      contactInfo: "Contact Information",
      getInTouch: "How Our Process Works",
      detailedProcess:
        "We travel to Argentina twice a year with a selection of high-quality products. To reserve items, contact us via email or phone, and we'll arrange a 30% deposit to secure your order.",
      paymentMethods:
        "We accept payments in US Dollars, Euros, or Argentine Pesos through Mercado Pago or cash. The remaining 70% is due upon delivery in Buenos Aires.",
    },
    footer: {
      copyright: "Web Store. All rights reserved.",
    },
  },
  es: {
    header: {
      title: "Tienda Web",
      menu: {
        products: "Productos",
        howItWorks: "Cómo Funciona",
        contact: "Contacto",
        calculator: "Calculadora",
      },
    },
    sections: {
      products: "Nuestros Productos",
      howItWorks: "Cómo Funciona",
      contact: "Contáctanos",
      calculator: "Calculadora de Precios",
    },
    products: {
      price: "Precio",
      viewSite: "Ver Sitio",
      addToFavourite: "Añadir a favoritos",
      removeFromFavourites: "Remover de favoritos",
      search: "Buscar productos...",
      priceRange: "Rango de Precio",
      min: "Mín",
      max: "Máx",
      favorites: "Mostrar Favoritos",
      showFavoritesOnly: "Mostrar solo favoritos",
      allProducts: "Todos los Productos",
      favoriteProducts: "Productos Favoritos",
      noProducts: "Ningún producto coincide con tus filtros",
      currency: "€",
    },
    calculator: {
      title: "Calculadora de Precios",
      euroBlueRate: "Cotización Euro Blue",
      enterRate: "Ingrese cotización actual",
      products: "Productos Seleccionados",
      product: "Producto",
      priceInEuros: "Precio (EUR)",
      priceInPesos: "Precio (ARS)",
      total: "Total",
      addProduct: "Agregar Producto",
      noProducts: "Aún no hay productos agregados. Agregue productos para calcular precios.",
      addFromFavorites: "Agregar Favoritos",
      quantity: "Cant",
    },
    nextDelivery: {
      title: "¡Próxima Entrega en Argentina!",
      nextDelivery: "Próxima entrega:",
      location: "Buenos Aires, Argentina",
      contactToReserve: "Contáctanos para reservar tus productos para la próxima entrega.",
    },
    whoAmI: {
      title: "¿Quién soy?",
      content:
        "¡Hola! Soy Ariel, un argentino viviendo en los Países Bajos y comencé a hacer esto para poder visitar a mi familia. El objetivo principal es recuperar un poco del dinero del boleto de avión. Seré lo más transparente posible mostrándote el sitio web y el precio que figura en él y para que sepas, agregaré un 25% al precio si compras un producto, 20% si compras 2 productos y 15% si compras 3 productos o más.",
    },
    howItWorks: {
      description:
        "Dos veces al año, visitamos Argentina. Elige tus productos favoritos y los llevaremos en nuestro próximo viaje. El pago puede realizarse en Dólares Estadounidenses, Euros o Pesos Argentinos (Mercado Pago o efectivo).",
      steps: {
        browse: {
          title: "Explora Productos",
          description: "Navega por nuestro catálogo y encuentra los productos que te interesan.",
        },
        select: {
          title: "Selecciona Artículos",
          description: "Añade productos a tu lista de favoritos para seguir lo que quieres pedir.",
        },
        reserve: {
          title: "Reserva Productos",
          description: "Contáctanos para confirmar tu pedido y coordinar un pago del 30% para asegurar tus artículos.",
        },
        delivery: {
          title: "Entrega y Pago Final",
          description:
            "Encuéntranos en Buenos Aires durante nuestra próxima visita para recibir tus productos y completar el pago.",
        },
      },
    },
    contact: {
      email: "Correo Electrónico",
      phone: "Teléfono",
      address: "Dirección",
      contactInfo: "Información de Contacto",
      getInTouch: "Cómo Funciona Nuestro Proceso",
      detailedProcess:
        "Viajamos a Argentina dos veces al año con una selección de productos de alta calidad. Para reservar artículos, contáctanos por correo electrónico o teléfono, y coordinaremos un depósito del 30% para asegurar tu pedido.",
      paymentMethods:
        "Aceptamos pagos en Dólares Estadounidenses, Euros o Pesos Argentinos a través de Mercado Pago o efectivo. El 70% restante se paga al momento de la entrega en Buenos Aires.",
    },
    footer: {
      copyright: "Tienda Web. Todos los derechos reservados.",
    },
  },
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
