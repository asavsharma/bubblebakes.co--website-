import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bubble Bakes by Asav | Handmade Brownies & Jar Cakes in Delhi',
  description:
    'Bubble Bakes is a home bakery in Delhi crafting fudgy brownies, walnut & Oreo brownies, and layered jar cakes. Freshly baked to order. Message us on Instagram to place an order.',
  generator: 'v0.app',
  keywords: [
    'Bubble Bakes',
    'brownies Delhi',
    'jar cakes',
    'home bakery Delhi',
    'walnut brownies',
    'Oreo brownies',
    'Nutella cheesecake jar',
  ],
  openGraph: {
    title: 'Bubble Bakes by Asav',
    description:
      'Handmade fudgy brownies and layered jar cakes, freshly baked to order in Delhi.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#5a3a2a',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
