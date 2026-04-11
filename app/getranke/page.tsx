import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AgeDisclaimer } from '@/components/age-disclaimer'

export const metadata: Metadata = {
  title: 'Lokale Getranke und Bier | German Schnaps Culture',
  description: 'Entdecken Sie die Vielfalt der deutschen Bier- und Getrankkultur: regionale Bierstile, traditionelle Getranke und die Gaststubenkultur Deutschlands.',
}

const beerTypes = [
  {
    name: 'Helles Lagerbier',
    region: 'Bayern',
    abv: '4,7 bis 5,2%',
    color: 'Hell, goldgelb',
    description: 'Das typische bayerische Lagerbier. Mild, ausgewogen, mit dezenter Hopfennote und einem weichen, malzigen Abgang. Das klassische Bier der bayerischen Biergarten.',
  },
  {
    name: 'Weizenbier',
    region: 'Bayern, Baden-Wurttemberg',
    abv: '5,0 bis 5,5%',
    color: 'Trubes Gold',
    description: 'Gebraut aus mindestens 50% Weizenmalz, unfiltriert und naturtrub. Aromen von Banane und Nelke, fruchtig und erfrischend. Ein Symbol der bayerischen Braukultur.',
  },
  {
    name: 'Pilsner',
    region: 'Norddeutschland, NRW',
    abv: '4,8 bis 5,0%',
    color: 'Hell, klar',
    description: 'Das bekannteste Bier des Nordens. Trocken, hopfenbetont und bitter. In Deutschland wird es besonders in Nordrhein-Westfalen und Niedersachsen geschatzt.',
  },
  {
    name: 'Dunkles Bier',
    region: 'Bayern, Thuringen',
    abv: '4,5 bis 5,5%',
    color: 'Dunkelbraun',
    description: 'Gebraut aus dunklem Malz, das Aromen von Karamell, Schokolade und Kaffee in das Bier einbringt. Vollmundig und samtig, ein bayerischer Klassiker.',
  },
  {
    name: 'Bockbier',
    region: 'Bayern',
    abv: '6,3 bis 7,5%',
    color: 'Bernsteinfarben bis Dunkel',
    description: 'Ein starkes Lagerbier, das traditionell zu bestimmten Jahreszeiten gebraut wird. Es gibt hellere und dunkle Varianten, die sich durch kraftigeres Malzaroma und hohere Starke auszeichnen.',
  },
  {
    name: 'Kolsch',
    region: 'Koln',
    abv: '4,5 bis 5,0%',
    color: 'Hell, klar',
    description: 'Nur in Koln und Umgebung nach strengen regionalen Vorgaben gebraut. Obergargig, leicht hopfenbetont und von milder Fruchtigkeit. Wird traditionell im schmalen Stangen-Glas serviert.',
  },
  {
    name: 'Altbier',
    region: 'Dusseldorf',
    abv: '4,5 bis 5,0%',
    color: 'Kupferbraun',
    description: 'Das Bier der Dusseldorfer Altstadt. Obergargig und hopfenbetont mit einer charakteristischen Bitterkeit. Ein traditioneller obergaeriger Bierstil mit langer Geschichte im Rheinland.',
  },
  {
    name: 'Rauchbier',
    region: 'Bamberg, Franken',
    abv: '4,8 bis 5,4%',
    color: 'Dunkelbraun',
    description: 'Eine Bamberger Spezialitat. Das Malz wird uber Buchenholzfeuer gedarrt, wodurch das Bier seinen charakteristischen Raucharoma erhalt. Einzigartig in der deutschen Biervielfalt.',
  },
]

const otherDrinks = [
  {
    name: 'Apfelwein',
    region: 'Hessen (Frankfurt)',
    abv: '5,5 bis 7,0%',
    description: 'Der Hessische Apfelwein, liebevoll "Ebbelwoi" genannt, ist der gegordene Saft von Apfeln. Trocken, leicht sauer und naturlich. Ein Kultgetrank der Frankfurter Gaststuben.',
  },
  {
    name: 'Sekt',
    region: 'Rheingau, Mosel, Franken',
    abv: '11 bis 12,5%',
    description: 'Deutscher Qualitatsschaumwein aus traditionellen Rebsorten wie Riesling oder Spatburgunder. Fruchtig, feinperlig und oft von eleganter Frische, ein Produkt des deutschen Weinbaus.',
  },
  {
    name: 'Riesling',
    region: 'Mosel, Rheingau, Pfalz',
    abv: '9 bis 13%',
    description: 'Eine der bedeutendsten deutschen Rebsorten. An den steilen Schieferlagen der Mosel entstehen Weine von einzigartiger Mineralitat und Frische, die weltweit geschatzt werden.',
  },
  {
    name: 'Korn',
    region: 'Norddeutschland',
    abv: '32 bis 38%',
    description: 'Korn ist ein deutsches Getreidebranntwein aus Roggen, Weizen oder Gerste. Weniger komplex als Schnaps, aber traditionell in Norddeutschland sehr beliebt. Schwacher als Schnaps.',
  },
]

export default function GetrankePagePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/local-drinks.jpg"
            alt="Vielfalt der deutschen Getrankekultur"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-start gap-6">
          <AgeDisclaimer />
          <p className="text-xs tracking-widest uppercase text-gold">Bier und Getranke</p>
          <h1 className="text-5xl md:text-7xl font-light text-balance max-w-3xl">
            Deutsche Getrankekultur im{' '}
            <span className="text-gold">Uberblick</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Von Munchner Hell bis Kolsch: Die Vielfalt der deutschen Bier- und Getrankewelt. Alle mit niedrigerem Alkoholgehalt als unser Schnaps.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gold/10 border border-gold/30 p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="shrink-0">
              <p className="text-gold font-semibold text-sm uppercase tracking-widest">Wichtiger Hinweis</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Alle auf dieser Seite vorgestellten Getranke haben einen geringeren Alkoholgehalt als der traditionelle deutsche Schnaps. Schnaps mit bis zu 50% Vol. ist das starkste Getrank auf dieser Website.{' '}
              <Link href="/schnaps" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                Mehr uber Schnaps erfahren.
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold mb-4">Braukultur</p>
              <h2 className="text-4xl font-light text-balance mb-6">Deutsches Bier: 500 Jahre Reinheitsgebot</h2>
              <div className="w-12 h-px bg-gold mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Das Reinheitsgebot von 1516 ist das alteste lebensmittelrechtliche Gesetz der Welt, das noch Gultigkit hat. Es schreibt vor, dass deutsches Bier nur aus Wasser, Malz, Hopfen und Hefe gebraut werden darf.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Heute existieren uber 1.300 Brauereien in Deutschland, die mehr als 5.000 verschiedene Biersorten produzieren. Die UNESCO hat die deutsche Bierkultur 2016 als immaterielles Kulturerbe anerkannt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Jede Region hat ihre eigenen Bierstile entwickelt. Bayern besteht auf Weizenbier und Munchner Hell, Koln auf Kolsch, Dusseldorf auf Altbier und Franken auf Rauchbier.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/brewery.jpg"
                alt="Traditionelle deutsche Brauerei"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-gold mb-4">Bierstile</p>
            <h2 className="text-4xl font-light text-balance mb-2">Regionale Biersorten Deutschlands</h2>
            <div className="w-16 h-px bg-gold mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beerTypes.map((beer) => (
              <article
                key={beer.name}
                className="border border-border p-6 flex flex-col gap-4 hover:border-gold/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{beer.name}</h3>
                    <p className="text-xs tracking-widest uppercase text-gold mt-1">{beer.region}</p>
                  </div>
                  <span className="text-sm font-semibold text-foreground shrink-0 bg-secondary px-3 py-1">{beer.abv}</span>
                </div>
                <div className="flex gap-4 text-xs">
                  <div>
                    <p className="text-stone uppercase tracking-widest">Farbe</p>
                    <p className="text-muted-foreground mt-0.5">{beer.color}</p>
                  </div>
                </div>
                <div className="w-8 h-px bg-border" />
                <p className="text-sm text-muted-foreground leading-relaxed">{beer.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-gold mb-4">Weitere Getranke</p>
            <h2 className="text-4xl font-light text-balance">Wein, Apfelwein und Spirituosen</h2>
            <div className="w-16 h-px bg-gold mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {otherDrinks.map((drink) => (
              <article
                key={drink.name}
                className="border border-border p-6 flex flex-col gap-4 hover:border-gold/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{drink.name}</h3>
                    <p className="text-xs tracking-widest uppercase text-gold mt-1">{drink.region}</p>
                  </div>
                  <span className="text-sm font-semibold shrink-0 bg-secondary px-3 py-1">{drink.abv}</span>
                </div>
                <div className="w-8 h-px bg-border" />
                <p className="text-sm text-muted-foreground leading-relaxed">{drink.description}</p>
              </article>
            ))}
          </div>

          <div className="border border-gold/30 bg-gold/5 p-8 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <p className="text-xs tracking-widest uppercase text-gold mb-2">Das Starkste bleibt der Schnaps</p>
              <h3 className="text-2xl font-light mb-4">Traditioneller Obstbrand: bis zu 50% Vol.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Keines der hier vorgestellten Getranke ubertrifft den deutschen Schnaps in seiner Starke. Als traditioneller Fruchtbrand ist er das abschliessende Destillat der deutschen Getrankekultur.{' '}
                <Link href="/schnaps" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
                  Mehr uber Schnaps lesen.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
