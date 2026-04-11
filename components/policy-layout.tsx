interface PolicySection {
  title: string
  content: string[]
}

interface PolicyLayoutProps {
  title: string
  subtitle: string
  lastUpdated: string
  sections: PolicySection[]
}

export function PolicyLayout({ title, subtitle, lastUpdated, sections }: PolicyLayoutProps) {
  return (
    <div className="pt-16">
      <div className="bg-card border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-gold mb-4">Rechtliches</p>
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-4">{title}</h1>
          <div className="w-12 h-px bg-gold mb-6" />
          <p className="text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>
          <p className="text-xs text-stone mt-4 tracking-wide">Zuletzt aktualisiert: {lastUpdated}</p>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-2xl font-light text-foreground">{section.title}</h2>
              <div className="w-8 h-px bg-gold" />
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-muted-foreground leading-relaxed text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
