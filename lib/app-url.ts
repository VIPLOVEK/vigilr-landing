export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
export const LOGIN_URL = `${APP_URL}/auth/login`
export const SIGNUP_URL = `${APP_URL}/auth/login?screen_hint=signup`
