import { NextRequest, NextResponse } from "next/server"

const COOKIE_NAME = "site-auth"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (!process.env.SITE_PASSWORD) {
    return NextResponse.json({ error: "SITE_PASSWORD env var not set" }, { status: 500 })
  }

  if (password !== process.env.SITE_PASSWORD) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 })
  }

  const from = request.nextUrl.searchParams.get("from") ?? "/"

  const response = NextResponse.json({ ok: true, redirect: from })
  response.cookies.set(COOKIE_NAME, "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  })

  return response
}
