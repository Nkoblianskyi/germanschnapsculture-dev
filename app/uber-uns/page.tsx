import type { Metadata } from 'next'
import Image from 'next/image'
import { AgeDisclaimer } from '@/components/age-disclaimer'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Uber uns und Kontakt | German Schnaps Culture',
  description: 'Erfahren Sie mehr uber German Schnaps Culture: unser Team, unsere Mission und wie Sie uns erreichen konnen.',
}

export default function UberUnsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about.jpg"
            alt="Vintage Schnapsdestillerie mit alter Ausrustung"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-start gap-6">
          <AgeDisclaimer />
          <p className="text-xs tracking-widest uppercase text-gold">Uber uns</p>
          <h1 className="text-5xl md:text-7xl font-light text-balance max-w-3xl">
            Unser Blog uber{' '}
            <span className="text-gold">deutsche Schnapskultur</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Wir dokumentieren und bewahren das Wissen uber die traditionelle deutsche Schnapstradition und Getrankkultur.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold mb-4">Unsere Geschichte</p>
              <h2 className="text-4xl font-light text-balance mb-6">Was ist German Schnaps Culture?</h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                German Schnaps Culture ist ein unabhangiger Informationsblog, der sich der Dokumentation und Verbreitung des Wissens uber traditionelle deutsche Obstbrande und Getrankkultur widmet.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unser Ziel ist es, die reiche Geschichte des deutschen Schnapses, seine regionalen Variationen und seine kulturelle Bedeutung einem breiten Publikum zuganglich zu machen. Wir berichten uber Brennereien, Biergarten, Brauereien und die Traditionen, die dieses kulturelle Erbe am Leben halten.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dieser Blog verfolgt ausschliesslich informativen und kulturellen Zweck. Wir sind Enthusiasten, die das handwerkliche Wissen der deutschen Destillationskunst erhalten und weitergeben mochten.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { value: '2019', label: 'Gegrundet' },
                  { value: '150+', label: 'Artikel' },
                  { value: 'DE', label: 'Fokus' },
                ].map((stat) => (
                  <div key={stat.label} className="border border-border p-5 text-center">
                    <p className="text-3xl font-light text-gold">{stat.value}</p>
                    <p className="text-xs tracking-widest uppercase text-stone mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Uber German Schnaps Culture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border border-border p-6">
                <p className="text-xs tracking-widest uppercase text-gold mb-3">Unsere Grundsatze</p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Sachliche und fundierte Information uber Alkohol und Trinkkultur',
                    'Verantwortungsvoller Umgang mit dem Thema Alkohol',
                    'Keine Werbung fur ubermassigen Konsum',
                    'Ausschliesslich an Personen ab 18 Jahren gerichtet',
                    'Respekt vor regionalen Traditionen und Handwerkskunst',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card" id="kontakt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold mb-4">Kontakt</p>
              <h2 className="text-4xl font-light text-balance mb-6">Schreiben Sie uns</h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Haben Sie Fragen zu unseren Inhalten, mochten Sie einen Fehler melden oder haben Sie eine Anregung fur einen Artikel? Wir freuen uns uber Ihre Nachricht.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Wir bemichen uns, jede Anfrage innerhalb von 2 bis 3 Werktagen zu beantworten. Bitte beachten Sie, dass wir ausschliesslich zu redaktionellen und informativen Themen Stellung nehmen.
              </p>

              <div className="border border-border p-6">
                <p className="text-xs tracking-widest uppercase text-stone mb-4">Kontaktdaten</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-xs text-stone uppercase tracking-widest">E-Mail</p>
                    <a
                      href="mailto:info@germanschnapsculture.com"
                      className="text-gold hover:text-gold-light transition-colors text-sm mt-0.5 block"
                    >
                      info@germanschnapsculture.com
                    </a>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div>
                    <p className="text-xs text-stone uppercase tracking-widest">Reaktionszeit</p>
                    <p className="text-sm text-muted-foreground mt-0.5">2 bis 3 Werktage</p>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div>
                    <p className="text-xs text-stone uppercase tracking-widest">Sprache</p>
                    <p className="text-sm text-muted-foreground mt-0.5">Deutsch und Englisch</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-border p-8">
            <p className="text-xs tracking-widest uppercase text-gold mb-3">Impressum</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Dieser Blog wird als redaktionelles Informationsangebot betrieben und ist ausschliesslich an volljahrige Personen gerichtet. Alle Inhalte dienen dem Informations- und Bildungszweck uber die deutsche Getrankkultur.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kontakt: {' '}
              <a href="mailto:info@germanschnapsculture.com" className="text-gold hover:text-gold-light transition-colors">
                info@germanschnapsculture.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
