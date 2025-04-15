import type { Locale } from "@/lib/types"
import HomePage from "../page"

interface LocalePageProps {
  params: {
    lang: Locale
  }
}

export default function LocalePage({ params }: LocalePageProps) {
  return <HomePage params={params} />
}
