import type { Metadata } from 'next'
import Image from 'next/image'
import { AgeDisclaimer } from '@/components/age-disclaimer'

export const metadata: Metadata = {
  title: 'Schnaps: Deutschlands starkster Fruchtbrand | German Schnaps Culture',
  description: 'Alles uber den traditionellen deutschen Schnaps: Geschichte, Herstellung, Sorten und Trinkkultur. Der starkste Fruchtbrand mit bis zu 50% Vol.',
}

const schnapsTypes = [
  {
    name: 'Zwetschgenbrand',
    region: 'Bayern, Baden-Wurttemberg',
    alcohol: '38 bis 45%',
    fruit: 'Zwetschgen',
    description: 'Einer der bekanntesten deutschen Obstbrande. Die reifen Zwetschgen werden fermentiert und doppelt destilliert. Das Ergebnis ist ein weicher, pflaumiger Brand mit tiefem Aroma.',
  },
  {
    name: 'Kirschwasser',
    region: 'Schwarzwald',
    alcohol: '40 bis 50%',
    fruit: 'Saurkirschen',
    description: 'Das Schwarzwalder Kirschwasser ist ein klarer, trockener Kirschbrand ohne Zuckerzusatz. Nach ausreichender Lagerung entfaltet er seinen vollen, charakteristischen Geschmack.',
  },
  {
    name: 'Birnenbrand',
    region: 'Hessen, Baden-Wurttemberg',
    alcohol: '38 bis 43%',
    fruit: 'Reife Birnen',
    description: 'Feinster Birnengeist aus vollreifen Birnen. Der zarte Duft und das blumige Aroma machen ihn zu einem der elegantesten deutschen Obstbrande.',
  },
  {
    name: 'Apfelbrand',
    region: 'Hessen, Bayern',
    alcohol: '38 bis 45%',
    fruit: 'Mostapfel',
    description: 'In Hessen wird der Apfelbrand als "Apfelwei-Brand" geschatzt. Ein rustikaler, kraftiger Destillat mit deutlicher Fruchtigkeit und einer langen Geschichte in der hessischen Tradition.',
  },
  {
    name: 'Himbeergeist',
    region: 'Schwarzwald, Sachsen',
    alcohol: '40 bis 45%',
    fruit: 'Wildbeeren',
    description: 'Himbeergeist wird nicht durch Fermentation, sondern durch Mazeration gewonnen. Die Beeren werden in Neutralalkohol eingelegt und anschliessend destilliert. Das Ergebnis ist intensiv und aromatisch.',
  },
  {
    name: 'Pflaumenbrand',
    region: 'Franken, Sachsen',
    alcohol: '40 bis 50%',
    fruit: 'Pflaumen',
    description: 'Ein kraftiger Pflaumenbrand aus vollreifen Pflaumen, der in deutschen Regionen eine eigene Identitat entwickelt hat. Intensiv im Aroma, mit einer charakteristischen Fruchtsusslichkeit.',
  },
]

export default function SchnapsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-schnaps.jpg"
            alt="Traditionelle deutsche Schnapsdestillation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-start gap-6">
          <AgeDisclaimer />
          <p className="text-xs tracking-widest uppercase text-gold">Der starkste Genuss</p>
          <h1 className="text-5xl md:text-7xl font-light text-balance max-w-3xl">
            Schnaps: Tradition und{' '}
            <span className="text-gold">Kraft</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Der traditionelle deutsche Obstbrand mit bis zu 50 Volumenprozent. Der starkste Genuss auf dieser Website.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <h2 className="text-3xl font-light mb-6">Was ist Schnaps?</h2>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Schnaps ist ein traditionelles deutsches Getrank, das durch Destillation von vergorenem Fruchtsaft, Maische oder anderen starkehaltigen Rohstoffen gewonnen wird. Im Gegensatz zu vielen anderen Spirituosen wird echter Obstbrand ohne kunstliche Aromen oder Zuckerzusatz hergestellt.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Der Begriff "Schnaps" leitet sich vom niederdeutschen Verb "schnappen" ab und bezeichnete ursprunglich jeden Schluck eines hochprozentigen Getranks. Heute versteht man darunter speziell die deutschen Fruchtbrande, die eine jahrhundertelange Tradition haben.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mit einem Alkoholgehalt zwischen 38 und 50 Volumenprozent ist Schnaps das starkste Getrank, das wir auf dieser Website vorstellen. Er wird traditionell nach dem Essen als Digestif gereicht und soll die Verdauung fordern.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-6">Geschichte des Schnapses</h2>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Geschichte des deutschen Schnapses reicht bis ins Mittelalter zuruck. Erste Nachweise uber die Obstbranntweinherstellung stammen aus dem 14. Jahrhundert, als Monche und Apotheker die Destillation nutzten, um medizinische Tinkturen herzustellen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Im 16. und 17. Jahrhundert verbreitete sich die Hausbrennerei auf dem Land. Bauern nutzen uberreife Fruchte, um Destillate herzustellen, die als Medizin und Nahrungsmittel gleichermassen dienten. Die Kupferdestille wurde zum festen Bestandteil landlicher Hofe.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Im 19. Jahrhundert entwickelten sich professionelle Brennereien, insbesondere in Bayern, Baden-Wurttemberg und Hessen. Das Brennrecht wurde geregelt, und die deutschen Obstbrande gewannen europaisches Ansehen. Viele Familienbetriebe blicken heute auf mehr als 150 Jahre Tradition zuruck.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-6">Herstellung: Vom Obstgarten zur Flasche</h2>
                <div className="w-12 h-px bg-gold mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[
                    { step: '01', title: 'Ernte', desc: 'Vollreife Fruchte werden per Hand oder mit schonenden Maschinen geerntet. Nur die besten Fruchte kommen in die Maische.' },
                    { step: '02', title: 'Garung', desc: 'Die zerkleinerten Fruchte werden mit Hefe angesetzt und vergaren uber Wochen zu einer Fruchtmaische mit etwa 6 bis 8 Prozent Alkohol.' },
                    { step: '03', title: 'Destillation', desc: 'In der Kupferdestille wird die Maische erhitzt. Der Alkoholdampf steigt auf, kondensiert und wird als Rohbrand aufgefangen. Meist wird zweimal destilliert.' },
                  ].map((item) => (
                    <div key={item.step} className="border border-border p-5">
                      <p className="text-3xl font-light text-gold mb-3">{item.step}</p>
                      <p className="text-sm font-semibold tracking-wide uppercase mb-2">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Nach der Destillation wird der Brand auf den gesetzlichen Mindestalkoholgehalt von 38% verdunnt und in Glasflaschen oder Holzfassern gelagert. Die Reifung im Fass verleiht dem Schnaps zusatzliche Tiefe und Komplexitat.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-6">Wie trinkt man Schnaps?</h2>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Schnaps wird in Deutschland traditionell nach dem Essen gereicht. Der Digestif soll die Verdauung unterstutzen und das Mahl abschliessen. Er wird in kleinen Glasern, sogenannten Schnapsglasen oder Stamperln, serviert.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die ideale Serviertemperatur liegt zwischen 10 und 15 Grad Celsius fur fruchtige Brande und bei Zimmertemperatur fur gereiftere, holzige Varianten. Guter Schnaps wird pur und ohne Eis getrunken, um das volle Aroma zu erleben.
                </p>
                <div className="bg-card border border-gold/30 p-6">
                  <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Verantwortungsvoller Genuss</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mit einem Alkoholgehalt von bis zu 50% ist Schnaps ein starkes Getrank. Bitte geniessen Sie ihn in Massen und nur, wenn Sie das gesetzliche Mindestalter von 18 Jahren erreicht haben. Schnaps sollte nie in grossen Mengen konsumiert werden.
                  </p>
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-8">
              <div className="border border-border p-6">
                <p className="text-xs tracking-widest uppercase text-gold mb-4">Starke im Vergleich</p>
                <div className="flex flex-col gap-3">
                  {[
                    { name: 'Schnaps', abv: 50, highlight: true },
                    { name: 'Korn', abv: 38, highlight: false },
                    { name: 'Wein', abv: 14, highlight: false },
                    { name: 'Bier', abv: 5, highlight: false },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className={item.highlight ? 'text-gold font-semibold' : 'text-foreground'}>{item.name}</span>
                        <span className={item.highlight ? 'text-gold' : 'text-muted-foreground'}>{item.abv}% Vol.</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.highlight ? 'bg-gold' : 'bg-stone/50'}`}
                          style={{ width: `${item.abv * 2}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/schnaps-article.jpg"
                  alt="Kupferdestille einer deutschen Brennerei"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="border border-border p-6">
                <p className="text-xs tracking-widest uppercase text-stone mb-4">Wussten Sie?</p>
                <ul className="flex flex-col gap-4">
                  <li className="text-sm text-muted-foreground leading-relaxed border-l-2 border-gold pl-4">
                    Deutschland hat uber 10.000 zugelassene Obstbrennereien.
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed border-l-2 border-gold/40 pl-4">
                    Das Schwarzwalder Kirschwasser hat seit 1989 europaischen Herkunftsschutz als geografische Angabe.
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed border-l-2 border-gold/40 pl-4">
                    Die wichtigsten deutschen Obstbrande sind Zwetschgenbrand, Kirschbrand und Birnenbrand.
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-gold mb-4">Regionale Vielfalt</p>
            <h2 className="text-4xl font-light text-balance">Traditionelle Schnapssorten Deutschlands</h2>
            <div className="w-16 h-px bg-gold mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schnapsTypes.map((type) => (
              <article
                key={type.name}
                className="border border-border p-6 flex flex-col gap-4 hover:border-gold/50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-semibold">{type.name}</h3>
                  <p className="text-xs tracking-widest uppercase text-gold mt-1">{type.region}</p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-stone uppercase tracking-widest">Starke</p>
                    <p className="text-sm font-semibold text-gold mt-0.5">{type.alcohol}</p>
                  </div>
                  <div>
                    <p className="text-xs text-stone uppercase tracking-widest">Frucht</p>
                    <p className="text-sm font-semibold mt-0.5">{type.fruit}</p>
                  </div>
                </div>
                <div className="w-8 h-px bg-border" />
                <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
