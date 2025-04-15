"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LanguageSwitcher from "./language-switcher"
import type { Locale } from "@/lib/types"

interface HeaderProps {
  dictionary: {
    title: string
    menu: {
      products: string
      howItWorks: string
      contact: string
      calculator: string
    }
  }
  lang: Locale
}

export default function Header({ dictionary, lang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#products", label: dictionary?.menu?.products },
    { href: "#calculator", label: dictionary?.menu?.calculator },
    { href: "#how-it-works", label: dictionary?.menu?.howItWorks },
    { href: "#contact", label: dictionary?.menu?.contact },
  ]

  // Handle smooth scrolling for anchor links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      // Close mobile menu if open
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link href={`/${lang}`} className="flex items-center gap-2 text-xl font-bold md:text-2xl">
            <Gamepad2 className="h-6 w-6 text-blue-500" />
            <span className="gamer-gradient">{dictionary?.title}</span>
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="group relative text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <LanguageSwitcher currentLang={lang} />
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-muted bg-background/95 backdrop-blur-lg">
            <div className="mt-8 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary"
                >
                  <span className="h-6 w-1 rounded-full bg-primary/50"></span>
                  {item.label}
                </a>
              ))}
              <div className="mt-4">
                <LanguageSwitcher currentLang={lang} />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
