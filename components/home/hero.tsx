import Image from 'next/image'
import Link from 'next/link'
import { AgeDisclaimer } from '@/components/age-disclaimer'

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-schnaps.jpg"
          alt="Traditioneller deutscher Schnaps in rustikaler Atmosphare"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col items-start gap-8">
        <AgeDisclaimer />

        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-gold mb-4">
            Tradition seit Jahrhunderten
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight text-balance text-foreground mb-6">
            Die Seele des deutschen{' '}
            <span className="text-gold font-semibold">Schnapses</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Entdecken Sie die Welt der traditionellen deutschen Obstbrande. Destilliert aus frischen Fruchten, gereift in alten Brennereien, getrunken mit Bedacht.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            Daneben widmen wir uns dem deutschen Bier: ein mildes, unter geringem Druck vergorenes Getrank aus
            Malz, Hopfen, Hefe und Wasser, das in zahlreichen regionalen Stilen gebraut wird. Von klassischen
            Lager- und obergaerigen Spezialitaeten bis zu Brauereien und Gaststuben, in denen diese Kultur gelebt
            wird, zeigen wir, wie Bier Deutschland praegt.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/schnaps"
            className="px-8 py-3 bg-gold text-primary-foreground text-sm tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors"
          >
            Schnaps entdecken
          </Link>
          <Link
            href="/getranke"
            className="px-8 py-3 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors"
          >
            Getranke und Bier
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-8">
          <div className="text-center">
            <p className="text-3xl font-light text-gold">bis 50%</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Alkoholgehalt</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-light text-gold">100%</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Fruchtdestillat</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-light text-gold">Pur</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Handwerk</p>
          </div>
        </div>
      </div>
    </section>
  )
}
