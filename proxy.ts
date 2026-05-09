import { NextRequest, NextResponse } from "next/server"

const COOKIE_NAME = "site-auth"
const PASSWORD_PAGE = "/password"
const AUTH_API = "/api/auth"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Always allow the password page and auth API through
  if (pathname === PASSWORD_PAGE || pathname === AUTH_API) {
    return NextResponse.next()
  }

  const isAuthenticated = request.cookies.get(COOKIE_NAME)?.value === "true"

  if (!isAuthenticated) {
    const url = request.nextUrl.clone()
    url.pathname = PASSWORD_PAGE
    url.searchParams.set("from", pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.ico).*)",
  ],
}
