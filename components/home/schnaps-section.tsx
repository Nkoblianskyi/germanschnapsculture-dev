import Image from 'next/image'
import Link from 'next/link'

export function SchnapsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-4">
              Der starkste Genuss
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-balance mb-6">
              Deutscher Schnaps
            </h2>
            <div className="w-16 h-px bg-gold mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Schnaps ist das starkste Getrank auf dieser Website. Mit einem Alkoholgehalt von bis zu 50 Volumenprozent steht er an der Spitze der deutschen Spirituosenkultur. Es handelt sich um einen traditionellen Fruchtbrand, der durch Destillation reifer Fruchte gewonnen wird.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ob Zwetschgenbrand aus Bayern, Kirschwasser aus dem Schwarzwald oder Birnenbrand aus Hessen, jede Region Deutschlands hat ihre eigene Schnapstradition, die seit Generationen weitergegeben wird.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border border-border p-5">
                <p className="text-2xl font-light text-gold mb-1">40 bis 50%</p>
                <p className="text-xs tracking-widest uppercase text-stone">Alkoholgehalt</p>
                <p className="text-sm text-muted-foreground mt-2">Das starkste Getrank auf diesem Blog</p>
              </div>
              <div className="border border-border p-5">
                <p className="text-2xl font-light text-gold mb-1">100%</p>
                <p className="text-xs tracking-widest uppercase text-stone">Fruchtbrand</p>
                <p className="text-sm text-muted-foreground mt-2">Rein aus frischen deutschen Fruchten</p>
              </div>
            </div>

            <Link
              href="/schnaps"
              className="inline-block px-8 py-3 bg-gold text-primary-foreground text-sm tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors"
            >
              Vollstandigen Artikel lesen
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/schnaps-article.jpg"
                alt="Traditionelle Schnapsbrennerei mit Kupferdestille"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold text-primary-foreground p-6 max-w-xs hidden md:block">
              <p className="text-sm font-semibold uppercase tracking-wider">Der Starkste</p>
              <p className="text-3xl font-light mt-1">bis 50% Vol.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
