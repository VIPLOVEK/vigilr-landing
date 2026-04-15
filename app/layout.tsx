import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { DemoModal } from '@/components/demo-modal'
import { Toaster } from '@/components/ui/sonner'
import { AnalyticsProvider } from '@/components/analytics-provider'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vigilr.io'),
  title: {
    default: 'Vigilr | AI-Native Third-Party Risk Management Platform',
    template: '%s | Vigilr',
  },
  description: 'Replace annual vendor questionnaires with real-time AI risk intelligence. Continuous CVE monitoring, breach detection, and dynamic risk scoring for enterprise security teams.',
  keywords: ['third-party risk management', 'TPRM', 'vendor risk', 'AI security', 'GRC platform', 'vendor monitoring', 'risk intelligence', 'cybersecurity'],
  authors: [{ name: 'Vigilr' }],
  creator: 'Vigilr',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vigilr.io',
    title: 'Vigilr | AI-Native Third-Party Risk Management',
    description: 'Replace annual vendor questionnaires with real-time AI risk intelligence. Continuous CVE monitoring, breach detection, and dynamic risk scoring.',
    siteName: 'Vigilr',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Vigilr — AI-Native Third-Party Risk Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vigilr | AI-Native Third-Party Risk Management',
    description: 'Replace annual vendor questionnaires with real-time AI risk intelligence.',
    images: ['/opengraph-image'],
    creator: '@vigilr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Vigilr",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Web",
              description:
                "AI-native third-party risk management platform. Continuous vendor monitoring with real-time CVE feeds, breach intelligence, and dynamic risk scoring.",
              url: "https://vigilr.io",
              offers: [
                { "@type": "Offer", price: "499", priceCurrency: "USD", name: "Starter" },
                { "@type": "Offer", price: "1499", priceCurrency: "USD", name: "Professional" },
              ],
              publisher: {
                "@type": "Organization",
                name: "Vigilr",
                url: "https://vigilr.io",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <DemoModal />
          <CookieConsent />
          <Toaster />
        </ThemeProvider>
        <AnalyticsProvider />
      </body>
    </html>
  )
}
