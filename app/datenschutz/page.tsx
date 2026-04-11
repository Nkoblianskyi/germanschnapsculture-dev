import type { Metadata } from 'next'
import { PolicyLayout } from '@/components/policy-layout'

export const metadata: Metadata = {
  title: 'Datenschutzrichtlinie | German Schnaps Culture',
  description: 'Datenschutzrichtlinie von German Schnaps Culture. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.',
}

const sections = [
  {
    title: 'Einfuhrung und Verantwortlicher',
    content: [
      'Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst und behandeln diese vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzrichtlinie.',
      'Verantwortlicher fur die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist der Betreiber des Blogs German Schnaps Culture, erreichbar unter info@germanschnapsculture.com.',
      'Diese Datenschutzrichtlinie gilt fur alle Seiten von germanschnapsculture.com und informiert Sie uber Art, Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten.',
    ],
  },
  {
    title: 'Welche Daten wir erheben',
    content: [
      'Server-Logdaten: Beim Besuch unserer Website speichert unser Hosting-Anbieter automatisch Informationen, die Ihr Browser ubermittelt. Dies umfasst: IP-Adresse, Datum und Uhrzeit des Abrufs, Browsertyp und -version, Betriebssystem, die zuletzt besuchte Seite sowie die aufgerufene Seite. Diese Daten werden ausschliesslich fur statistische Auswertungen und zur Sicherstellung des Betriebs der Website verwendet.',
      'Kontaktformular: Wenn Sie unser Kontaktformular nutzen, verarbeiten wir die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Betreff, Nachricht) ausschliesslich zur Beantwortung Ihrer Anfrage. Eine Weitergabe an Dritte findet nicht statt.',
      'Cookies: Informationen zur Verwendung von Cookies finden Sie in unserer Cookie-Richtlinie.',
    ],
  },
  {
    title: 'Zweck und Rechtsgrundlage der Verarbeitung',
    content: [
      'Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zu folgenden Zwecken und auf folgenden Rechtsgrundlagen: Bereitstellung und Sicherstellung der technischen Funktionalitat der Website (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse), Beantwortung von Anfragen uber das Kontaktformular (Art. 6 Abs. 1 lit. a und b DSGVO, Einwilligung und Vertragsanbahnung).',
      'Soweit Sie uns gegenuber Ihre Einwilligung zur Datenverarbeitung erteilt haben, bildet Art. 6 Abs. 1 lit. a DSGVO die Rechtsgrundlage. Diese Einwilligung konnen Sie jederzeit mit Wirkung fur die Zukunft widerrufen.',
    ],
  },
  {
    title: 'Speicherdauer',
    content: [
      'Wir speichern Ihre personenbezogenen Daten nur so lange, wie es fur die Erfullung der jeweiligen Zwecke erforderlich ist, oder solange gesetzliche Aufbewahrungsfristen bestehen.',
      'Kontaktanfragen werden nach abschliessender Bearbeitung geloscht, spatestens jedoch nach 6 Monaten, sofern kein berechtigtes Interesse an einer langeren Speicherung besteht.',
      'Server-Logdaten werden in der Regel nach 7 Tagen automatisch geloscht.',
    ],
  },
  {
    title: 'Weitergabe von Daten an Dritte',
    content: [
      'Eine Ubermittlung Ihrer Daten an Dritte erfolgt nicht, es sei denn, wir sind dazu gesetzlich verpflichtet oder Sie haben ausdrucklich eingewilligt.',
      'Unser Hosting-Anbieter verarbeitet Server-Logdaten im Auftrag und im Rahmen einer Auftragsverarbeitungsvereinbarung gemas Art. 28 DSGVO.',
    ],
  },
  {
    title: 'Ihre Rechte als betroffene Person',
    content: [
      'Sie haben gegenuber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten: Recht auf Auskunft (Art. 15 DSGVO), Recht auf Berichtigung (Art. 16 DSGVO), Recht auf Loschung (Art. 17 DSGVO), Recht auf Einschrankung der Verarbeitung (Art. 18 DSGVO), Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) sowie Recht auf Datentragbarkeit (Art. 20 DSGVO).',
      'Zur Ausubung Ihrer Rechte konnen Sie uns jederzeit unter info@germanschnapsculture.com kontaktieren. Sie haben zudem das Recht, sich bei der zustandigen Datenschutzaufsichtsbehorde zu beschweren.',
    ],
  },
  {
    title: 'Datensicherheit',
    content: [
      'Wir setzen technische und organisatorische Sicherheitsmasnahmen ein, um Ihre Daten gegen zufallige oder vorsatzliche Manipulation, Verlust, Zerstorung oder den Zugriff unberechtigter Personen zu schutzen. Unsere Sicherheitsmasnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.',
      'Die Ubertragung von Daten auf unserer Website erfolgt uber eine verschlusselte HTTPS-Verbindung.',
    ],
  },
  {
    title: 'Anderungen dieser Datenschutzrichtlinie',
    content: [
      'Wir behalten uns vor, diese Datenschutzrichtlinie anzupassen, um sie an geanderte rechtliche Rahmenbedingungen oder bei Anderungen unserer Leistungen sowie der Datenverarbeitung anzupassen. Die jeweils aktuelle Version gilt fur Ihren Besuch.',
      'Bei wesentlichen Anderungen, die Ihre Rechte beruhren, informieren wir Sie uber einen entsprechenden Hinweis auf unserer Website.',
    ],
  },
  {
    title: 'Kontakt',
    content: [
      'Bei Fragen zum Datenschutz auf unserer Website konnen Sie sich jederzeit an uns wenden: info@germanschnapsculture.com',
    ],
  },
]

export default function DatenschutzPage() {
  return (
    <PolicyLayout
      title="Datenschutzrichtlinie"
      subtitle="Wir legen grossten Wert auf den Schutz Ihrer personenbezogenen Daten. In dieser Datenschutzrichtlinie erlautern wir, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie haben."
      lastUpdated="2026"
      sections={sections}
    />
  )
}
