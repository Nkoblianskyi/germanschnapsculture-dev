export function AgeDisclaimer() {
  return (
    <div className="border border-gold/30 bg-card/60 backdrop-blur-sm px-5 py-4 max-w-2xl">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-start">
        <span className="text-gold font-semibold text-lg tracking-wider shrink-0">18+</span>
        <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
          Dieser Inhalt richtet sich ausschliesslich an Personen ab 18 Jahren. Alkohol kann die Gesundheit
          gefaehrden. Bitte trinken Sie verantwortungsbewusst und massvoll. Kein Alkohol wird auf dieser
          Website verkauft oder beworben.
        </p>
      </div>
    </div>
  )
}
