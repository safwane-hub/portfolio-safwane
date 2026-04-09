'use client'
import { useState } from 'react'
import { Translations } from '@/lib/i18n'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../styles/Contact.module.css'

export default function Contact({ t }: { t: Translations }) {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = new FormData(form)
    const res = await fetch('https://formspree.io/f/mojpoabg', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    if (res.ok) {
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } else {
      setStatus('idle')
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>
        <div ref={ref1} className={`${styles.info} reveal`}>
          <div className={styles.label}>{t.contact_label}</div>
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: t.contact_title }} />
          <p className={styles.sub}>{t.contact_sub}</p>
          <div className={styles.links}>
            <a href="mailto:bahhosafwane99@gmail.com" className={styles.link}>
              <span>✉️</span> bahhosafwane99@gmail.com
            </a>
            <a href="tel:+212614657218" className={styles.link}>
              <span>📱</span> +212 614 657 218
            </a>
            <a href="https://www.linkedin.com/in/safwane-bahho-6749761b7" target="_blank" rel="noreferrer" className={styles.link}>
              <span>🔗</span> linkedin.com/in/safwane-bahho
            </a>
            <span className={styles.link}>
              <span>📍</span> Casablanca, Morocco
            </span>
          </div>
        </div>

        <div ref={ref2} className="reveal">
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
              <label className={styles.formLabel}>{t.form_name}</label>
              <input type="text" name="name" className={styles.input} required placeholder="John Doe" />
            </div>
            <div className={styles.group}>
              <label className={styles.formLabel}>{t.form_email}</label>
              <input type="email" name="email" className={styles.input} required placeholder="john@example.com" />
            </div>
            <div className={styles.group}>
              <label className={styles.formLabel}>{t.form_msg}</label>
              <textarea name="message" className={styles.textarea} required placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className={styles.submit} disabled={status === 'loading'}>
              {status === 'loading' ? '...' : status === 'success' ? '✓' : t.form_send}
            </button>
            {status === 'success' && (
              <div className={styles.success}>{t.form_ok}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
