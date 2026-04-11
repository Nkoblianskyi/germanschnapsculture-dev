import type { Metadata } from 'next'
import { PolicyLayout } from '@/components/policy-layout'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie | German Schnaps Culture',
  description: 'Informationen uber die Verwendung von Cookies auf German Schnaps Culture.',
}

const sections = [
  {
    title: 'Was sind Cookies?',
    content: [
      'Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerat (Computer, Smartphone, Tablet) gespeichert werden. Sie ermoglichen es, Ihren Browser bei einem erneuten Besuch wiederzuerkennen und bestimmte Einstellungen oder Praferenzen zu speichern.',
      'Cookies konnen von der besuchten Website selbst (sogenannte "Erstanbieter-Cookies") oder von Drittanbietern gesetzt werden. Sie erfullen verschiedene Funktionen, unter anderem die Sicherstellung der technischen Funktionalitat der Website, die Analyse des Nutzerverhaltens sowie die Personalisierung von Inhalten.',
    ],
  },
  {
    title: 'Welche Cookies verwenden wir?',
    content: [
      'Notwendige Cookies: Diese Cookies sind fur den Betrieb der Website unbedingt erforderlich. Sie erfullen grundlegende Funktionen wie die Sicherheit, das Netzwerkmanagement und die Zuganglichkeit. Diese Cookies konnen nicht deaktiviert werden.',
      'Praferenz-Cookies: Diese Cookies ermoglichen der Website, Informationen zu speichern, die das Verhalten oder Aussehen der Website verandern, z. B. Ihre bevorzugte Sprache oder Ihre Cookie-Einstellungen. Wir speichern Ihre Cookie-Einwilligung lokal in Ihrem Browser.',
      'Analyse-Cookies: Mit diesen Cookies konnen wir Besuche und Verkehrsquellen zahlen, um die Leistung unserer Website zu messen und zu verbessern. Sie helfen uns zu verstehen, welche Seiten am beliebtesten sind und wie sich Besucher auf der Website bewegen. Alle durch diese Cookies erhobenen Daten werden aggregiert und anonymisiert.',
    ],
  },
  {
    title: 'Cookie-Einwilligung und Verwaltung',
    content: [
      'Beim ersten Besuch unserer Website wird Ihnen ein Cookie-Banner angezeigt, uber den Sie Ihre Einwilligung zur Verwendung von nicht notwendigen Cookies erteilen oder ablehnen konnen.',
      'Sie konnen Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookies in Ihrem Browser loschen und die Website erneut besuchen. Die meisten modernen Browser ermoglichen es Ihnen, Cookies uber die Einstellungen zu verwalten, zu blockieren oder zu loschen.',
      'Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalitat der Website beeintrachtigen kann.',
    ],
  },
  {
    title: 'Cookies von Drittanbietern',
    content: [
      'Auf unserer Website werden keine Cookies von sozialen Netzwerken oder Werbeplattformen eingesetzt. Wir binden keine externen Werbedienste ein.',
      'Sollten wir in Zukunft Dienste von Drittanbietern einbinden, werden wir diese Cookie-Richtlinie entsprechend aktualisieren und Sie daruber informieren.',
    ],
  },
  {
    title: 'Speicherdauer von Cookies',
    content: [
      'Session-Cookies: Diese Cookies werden automatisch geloscht, wenn Sie Ihren Browser schliessen.',
      'Persistente Cookies: Diese Cookies verbleiben fur einen vorher festgelegten Zeitraum auf Ihrem Endgerat. Das Cookie fur Ihre Cookie-Einwilligung wird fur 12 Monate gespeichert.',
    ],
  },
  {
    title: 'Anderungen dieser Cookie-Richtlinie',
    content: [
      'Wir behalten uns vor, diese Cookie-Richtlinie jederzeit zu andern, um sie an geanderte rechtliche Rahmenbedingungen oder technische Entwicklungen anzupassen. Die aktuelle Version mit dem Datum der letzten Aktualisierung ist stets auf dieser Seite abrufbar.',
      'Bei wesentlichen Anderungen werden wir Sie uber einen entsprechenden Hinweis auf unserer Website informieren.',
    ],
  },
  {
    title: 'Kontakt',
    content: [
      'Wenn Sie Fragen zu unserer Verwendung von Cookies haben, konnen Sie uns jederzeit unter info@germanschnapsculture.com kontaktieren.',
    ],
  },
]

export default function CookiesPage() {
  return (
    <PolicyLayout
      title="Cookie-Richtlinie"
      subtitle="Auf dieser Seite erklaren wir, welche Cookies wir auf German Schnaps Culture verwenden, warum wir sie einsetzen und wie Sie Ihre Cookie-Einstellungen verwalten konnen."
      lastUpdated="2026"
      sections={sections}
    />
  )
}
