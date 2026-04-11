'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Diese Website verwendet Cookies, um Ihnen die bestmogliche Nutzererfahrung zu bieten. Weitere Informationen finden Sie in unserer{' '}
          <Link href="/cookies" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
            Cookie-Richtlinie
          </Link>{' '}
          und{' '}
          <Link href="/datenschutz" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
            Datenschutzrichtlinie
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-xs tracking-widest uppercase text-muted-foreground border border-border hover:border-foreground/40 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-xs tracking-widest uppercase bg-gold text-primary-foreground font-semibold hover:bg-gold-light transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
