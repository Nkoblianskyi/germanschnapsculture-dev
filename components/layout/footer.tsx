import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-lg font-semibold tracking-widest uppercase text-gold mb-4">
              German Schnaps Culture
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Ein Blog uber die traditionelle Schnapskultur Deutschlands. Wir berichten uber Obstbrande, Brennereien und die Geschichte des deutschen Destillats.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-stone mb-4">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Startseite', href: '/' },
                { label: 'Schnaps', href: '/schnaps' },
                { label: 'Getranke und Bier', href: '/getranke' },
                { label: 'Uber uns', href: '/uber-uns' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-stone mb-4">Rechtliches</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Datenschutzrichtlinie', href: '/datenschutz' },
                { label: 'Cookie-Richtlinie', href: '/cookies' },
                { label: 'Impressum', href: '/uber-uns' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground">
                Kontakt:{' '}
                <a
                  href="mailto:info@germanschnapsculture.com"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  info@germanschnapsculture.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            &copy; {new Date().getFullYear()} German Schnaps Culture. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Dieser Blog richtet sich ausschliesslich an Personen ab 18 Jahren. Alkohol verantwortungsvoll geniessen.
          </p>
        </div>
      </div>
    </footer>
  )
}
