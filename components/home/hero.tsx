import Image from 'next/image'
import Link from 'next/link'
import { AgeDisclaimer } from '@/components/age-disclaimer'

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] flex items-start md:items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-schnaps.jpg"
          alt="Traditioneller deutscher Schnaps in rustikaler Atmosphare"
          fill
          className="object-cover object-[center_30%] sm:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-10 sm:pt-24 sm:pb-20 flex flex-col items-start gap-6 sm:gap-8">
        <AgeDisclaimer />

        <div className="max-w-3xl w-full">
          <p className="text-xs tracking-widest uppercase text-gold mb-3 sm:mb-4">
            Tradition seit Jahrhunderten
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light leading-[1.1] sm:leading-tight text-balance text-foreground mb-4 sm:mb-6">
            Die Seele des deutschen{' '}
            <span className="text-gold font-semibold">Schnapses</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Entdecken Sie die Welt der traditionellen deutschen Obstbrande. Destilliert aus frischen Fruchten, gereift in alten Brennereien, getrunken mit Bedacht.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mt-3">
            Daneben widmen wir uns dem deutschen Bier: ein mildes, unter geringem Druck vergorenes Getrank aus
            Malz, Hopfen, Hefe und Wasser, das in zahlreichen regionalen Stilen gebraut wird. Von klassischen
            Lager- und obergaerigen Spezialitaeten bis zu Brauereien und Gaststuben, in denen diese Kultur gelebt
            wird, zeigen wir, wie Bier Deutschland praegt.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
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

        <div className="mt-4 sm:mt-8 flex w-full max-w-xl sm:max-w-none">
          <div className="flex-1 text-center sm:text-left sm:flex-none sm:pr-10">
            <p className="text-2xl sm:text-3xl font-light text-gold">bis 50%</p>
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mt-1 leading-tight">
              Alkoholgehalt
            </p>
          </div>
          <div className="flex-1 text-center sm:text-left sm:flex-none sm:border-l sm:border-border sm:pl-10 sm:pr-10">
            <p className="text-2xl sm:text-3xl font-light text-gold">100%</p>
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mt-1 leading-tight">
              Fruchtdestillat
            </p>
          </div>
          <div className="flex-1 text-center sm:text-left sm:flex-none sm:border-l sm:border-border sm:pl-10">
            <p className="text-2xl sm:text-3xl font-light text-gold">Pur</p>
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mt-1 leading-tight">
              Handwerk
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
