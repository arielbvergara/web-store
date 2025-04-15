"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/types"

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "es" : "en"
    router.push(`/${newLang}`)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="bg-background/50 border-primary/30 hover:bg-background/80 hover:border-primary/50"
    >
      {currentLang === "en" ? "ES" : "EN"}
    </Button>
  )
}
