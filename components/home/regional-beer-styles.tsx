const beerTypes = [
  {
    name: 'Helles Lagerbier',
    region: 'Bayern',
    abv: '4,7 bis 5,2%',
    color: 'Hell, goldgelb',
    description:
      'Das typische bayerische Lagerbier. Mild, ausgewogen, mit dezenter Hopfennote und einem weichen, malzigen Abgang. Das klassische Bier der bayerischen Biergarten.',
  },
  {
    name: 'Weizenbier',
    region: 'Bayern, Baden-Wurttemberg',
    abv: '5,0 bis 5,5%',
    color: 'Trubes Gold',
    description:
      'Gebraut aus mindestens 50% Weizenmalz, unfiltriert und naturtrub. Aromen von Banane und Nelke, fruchtig und erfrischend. Ein Symbol der bayerischen Braukultur.',
  },
  {
    name: 'Pilsner',
    region: 'Norddeutschland, NRW',
    abv: '4,8 bis 5,0%',
    color: 'Hell, klar',
    description:
      'Das bekannteste Bier des Nordens. Trocken, hopfenbetont und bitter. In Deutschland wird es besonders in Nordrhein-Westfalen und Niedersachsen geschatzt.',
  },
  {
    name: 'Dunkles Bier',
    region: 'Bayern, Thuringen',
    abv: '4,5 bis 5,5%',
    color: 'Dunkelbraun',
    description:
      'Gebraut aus dunklem Malz, das Aromen von Karamell, Schokolade und Kaffee in das Bier einbringt. Vollmundig und samtig, ein bayerischer Klassiker.',
  },
  {
    name: 'Bockbier',
    region: 'Bayern',
    abv: '6,3 bis 7,5%',
    color: 'Bernsteinfarben bis Dunkel',
    description:
      'Ein starkes Lagerbier, das traditionell zu bestimmten Jahreszeiten gebraut wird. Es gibt hellere und dunkle Varianten, die sich durch kraftigeres Malzaroma und hohere Starke auszeichnen.',
  },
  {
    name: 'Kolsch',
    region: 'Koln',
    abv: '4,5 bis 5,0%',
    color: 'Hell, klar',
    description:
      'Nur in Koln und Umgebung nach strengen regionalen Vorgaben gebraut. Obergargig, leicht hopfenbetont und von milder Fruchtigkeit. Wird traditionell im schmalen Stangen-Glas serviert.',
  },
  {
    name: 'Altbier',
    region: 'Dusseldorf',
    abv: '4,5 bis 5,0%',
    color: 'Kupferbraun',
    description:
      'Das Bier der Dusseldorfer Altstadt. Obergargig und hopfenbetont mit einer charakteristischen Bitterkeit. Ein traditioneller obergaeriger Bierstil mit langer Geschichte im Rheinland.',
  },
  {
    name: 'Rauchbier',
    region: 'Bamberg, Franken',
    abv: '4,8 bis 5,4%',
    color: 'Dunkelbraun',
    description:
      'Eine Bamberger Spezialitat. Das Malz wird uber Buchenholzfeuer gedarrt, wodurch das Bier seinen charakteristischen Raucharoma erhalt. Einzigartig in der deutschen Biervielfalt.',
  },
]

export function RegionalBeerStylesBlock() {
  return (
    <>
      <div className="mb-14">
        <p className="text-xs tracking-widest uppercase text-gold mb-4">Bierstile</p>
        <h2 className="text-3xl sm:text-4xl font-light text-balance mb-2">Regionale Biersorten Deutschlands</h2>
        <div className="w-16 h-px bg-gold mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beerTypes.map((beer) => (
          <article
            key={beer.name}
            className="border border-border p-6 flex flex-col gap-4 hover:border-gold/40 transition-colors"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold">{beer.name}</h3>
                <p className="text-xs tracking-widest uppercase text-gold mt-1">{beer.region}</p>
              </div>
              <span className="text-sm font-semibold text-foreground shrink-0 bg-secondary px-3 py-1 self-start sm:self-auto">
                {beer.abv}
              </span>
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
    </>
  )
}

export function RegionalBeerStylesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <RegionalBeerStylesBlock />
      </div>
    </section>
  )
}
