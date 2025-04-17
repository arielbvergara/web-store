import type { Locale } from "@/lib/types"
import { getDictionary } from "@/lib/dictionaries"
import Header from "@/components/header"
import ProductList from "@/components/product-list"
import ContactSection from "@/components/contact-section"
import HowItWorks from "@/components/how-it-works"
import NextDelivery from "@/components/next-delivery"
import WhoAmI from "@/components/who-am-i"
import Calculator from "@/components/calculator"

interface HomePageProps {
  params: {
    lang: Locale
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang)

  return (
    <div className="tech-pattern min-h-screen bg-background">
      <Header dictionary={dictionary?.header} lang={resolvedParams.lang} />
      <main className="container mx-auto px-6 py-10 md:px-8">
        <section className="py-8">
          <NextDelivery dictionary={dictionary?.nextDelivery} />
        </section>

        <section className="py-8">
          <WhoAmI dictionary={dictionary?.whoAmI} />
        </section>

        <section id="products" className="py-16">
          <ProductList dictionary={dictionary?.products} lang={resolvedParams.lang} />
        </section>

        <section id="calculator" className="py-16">
          <h2 className="gamer-gradient mb-12 text-center text-3xl font-bold">{dictionary?.sections.calculator}</h2>
          <Calculator dictionary={dictionary?.calculator} lang={resolvedParams.lang} />
        </section>

        <section
          id="how-it-works"
          className="my-16 rounded-lg border border-muted bg-card/50 p-8 py-16 shadow-md backdrop-blur-sm"
        >
          <h2 className="gamer-gradient mb-12 text-center text-3xl font-bold">{dictionary?.sections.howItWorks}</h2>
          <HowItWorks dictionary={dictionary?.howItWorks} />
        </section>

        <section id="contact" className="py-16">
          <h2 className="gamer-gradient mb-12 text-center text-3xl font-bold">{dictionary?.sections.contact}</h2>
          <ContactSection dictionary={dictionary?.contact} lang={resolvedParams.lang} messages={dictionary?.messages} />
        </section>
      </main>
      <footer className="border-t border-muted bg-card/80 py-8 text-foreground backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center md:px-8">
          <p>
            © {new Date().getFullYear()} {dictionary?.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  )
}
