'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [agreed, setAgreed] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    setState('submitting')
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
    setShowPopup(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setAgreed(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs tracking-widest uppercase text-stone">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-input border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              placeholder="Ihr vollstandiger Name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs tracking-widest uppercase text-stone">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-input border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              placeholder="ihre@email.de"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-xs tracking-widest uppercase text-stone">
            Betreff
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={handleChange}
            className="bg-input border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
            placeholder="Ihr Anliegen"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs tracking-widest uppercase text-stone">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="bg-input border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Ihre Nachricht an uns..."
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 shrink-0">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-4 h-4 border transition-colors ${agreed ? 'bg-gold border-gold' : 'border-border group-hover:border-gold/50'}`}>
              {agreed && (
                <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-sm text-muted-foreground leading-relaxed">
            Ich stimme den{' '}
            <a href="/datenschutz" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
              Datenschutzbestimmungen
            </a>{' '}
            und der Verarbeitung meiner personenbezogenen Daten fur die Beantwortung meiner Anfrage zu.
          </span>
        </label>

        <button
          type="submit"
          disabled={!agreed || state === 'submitting'}
          className="px-8 py-3 bg-gold text-primary-foreground text-sm tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed self-start"
        >
          {state === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-6">
          <div className="bg-card border border-border max-w-md w-full p-8 flex flex-col gap-5">
            <div className="w-10 h-10 border border-gold flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-gold" viewBox="0 0 20 20" fill="none">
                <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Nachricht gesendet</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vielen Dank fur Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns so schnell wie moglich bei Ihnen melden. Bitte uberprufen Sie auch Ihren Spam-Ordner.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Sie konnen uns auch direkt unter{' '}
              <a href="mailto:info@germanschnapsculture.com" className="text-gold">
                info@germanschnapsculture.com
              </a>{' '}
              erreichen.
            </p>
            <button
              onClick={() => { setShowPopup(false); setState('idle') }}
              className="px-6 py-2.5 border border-border text-sm tracking-widest uppercase hover:border-gold/50 transition-colors self-start"
            >
              Schliessen
            </button>
          </div>
        </div>
      )}
    </>
  )
}
