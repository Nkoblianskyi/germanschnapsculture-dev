import Image from 'next/image'
import Link from 'next/link'

const breweries = [
  {
    name: 'Traditionsbrauerei Bayern',
    location: 'Bayern',
    founded: '16. Jahrhundert',
    description: 'Bayern ist die Heimat der deutschen Bierkultur. Seit dem 16. Jahrhundert pragte die bayerische Brautradition den Stil und das Handwerk des deutschen Bieres.',
  },
  {
    name: 'Klosterbrauerein Mitteldeutschlands',
    location: 'Thuringen, Sachsen',
    founded: '14. Jahrhundert',
    description: 'Monche des Mittelalters kultivierten das Brauerhandwerk in ihren Klostereien und legten den Grundstein fur die Brautradition in Mitteldeutschland.',
  },
  {
    name: 'Norddeutsche Braukultur',
    location: 'Nordrhein-Westfalen, Niedersachsen',
    founded: '17. Jahrhundert',
    description: 'Im Norden Deutschlands entwickelten sich herbe Pilsnerstile und die urbane Kneipenkultur, die bis heute das gesellschaftliche Leben pragen.',
  },
  {
    name: 'Frankische Biertradition',
    location: 'Franken',
    founded: '15. Jahrhundert',
    description: 'Franken gilt als eine der bierdichtesten Regionen Europas. Die frankischen Brauereien sind bekannt fur Rauchbier und untergarige Lagerbiere.',
  },
]

export function BrewerySection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-gold mb-4">Kultur und Handwerk</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-balance max-w-xl">
              Brauereien und Gaststuben Deutschlands
            </h2>
            <Link
              href="/getranke"
              className="shrink-0 px-8 py-3 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors self-start"
            >
              Alle Getranke
            </Link>
          </div>
          <div className="w-16 h-px bg-gold mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/brewery.jpg"
              alt="Traditionelle deutsche Brauerei mit Kupferkesseln"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-muted-foreground leading-relaxed">
              Deutschland ist das Land des Bieres. Mit uber 1.300 Brauereien und mehr als 5.000 verschiedenen Biersorten ist die deutsche Braukultur einzigartig auf der Welt und seit 2016 zum UNESCO-Kulturerbe erhoben.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Deutsche Gaststuben und Biergarten sind mehr als nur Orte zum Trinken. Sie sind Orte der Gemeinschaft, der Tradition und des Austauschs, wo Generationen zusammenkommen.
            </p>
            <p className="text-sm text-stone italic border-l-2 border-gold pl-4">
              Hinweis: Alle hier vorgestellten Getrankesorten haben einen geringeren Alkoholgehalt als unser traditioneller Schnaps mit bis zu 50% Vol.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {breweries.map((brewery) => (
            <div
              key={brewery.name}
              className="border border-border p-6 hover:border-gold/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{brewery.name}</h3>
                  <p className="text-xs tracking-widest uppercase text-gold mt-1">{brewery.location}</p>
                </div>
                <span className="text-sm text-muted-foreground">{brewery.founded}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{brewery.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
