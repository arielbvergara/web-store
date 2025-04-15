import { type NextRequest, NextResponse } from "next/server"
import { i18n } from "./lib/types"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // If it's missing a locale, redirect to the default locale
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`, request.url),
    )
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
