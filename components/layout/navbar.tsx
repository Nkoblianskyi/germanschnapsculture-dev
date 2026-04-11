'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Startseite', href: '/' },
  { label: 'Schnaps', href: '/schnaps' },
  { label: 'Getranke', href: '/getranke' },
  { label: 'Uber uns', href: '/uber-uns' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-semibold tracking-widest text-gold uppercase">
          German Schnaps Culture
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menue offnen"
        >
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
