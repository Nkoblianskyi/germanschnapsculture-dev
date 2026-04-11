import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CookieBanner } from '@/components/cookie-banner'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'German Schnaps Culture',
  description: 'Alles uber die traditionelle deutsche Schnapskultur. Fruchtige Destillate, Brennereien und die Geschichte des deutschen Schnapses.',
  keywords: 'Schnaps, Obstbrand, Deutschland, Brennerei, Destillat, Spirituosen, Tradition',
  authors: [{ name: 'German Schnaps Culture' }],
  openGraph: {
    title: 'German Schnaps Culture',
    description: 'Traditionelle deutsche Schnapskultur und Obstbrande',
    type: 'website',
    locale: 'de_DE',
    siteName: 'German Schnaps Culture',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={cormorant.variable}>
      <body className="font-serif antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
