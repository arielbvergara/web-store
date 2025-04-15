import type React from "react"
import { type Locale, i18n } from "@/lib/types"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  // Await params before accessing properties
  const resolvedParams = await params;
  
  return (
    <html lang={resolvedParams.lang}>
      <body>{children}</body>
    </html>
  )
}
