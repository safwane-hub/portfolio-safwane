'use client'

import { useState, useEffect } from 'react'
import { Translations, Lang, languages as langs } from '@/lib/i18n'
import styles from '../styles/Navbar.module.css'

type Props = {
  t: Translations
  lang: Lang
  setLang: (l: Lang) => void
  languages: typeof langs
}

export default function Navbar({ t, lang, setLang, languages }: Props) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = ['about', 'skills', 'experience', 'projects', 'contact']

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150

      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollPos >= top && scrollPos < bottom) {
            current = id
            break
          }
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={`${styles.burgerLine} ${open ? styles.burgerOpen : ''}`} />
        <span className={`${styles.burgerLine} ${open ? styles.burgerOpen : ''}`} />
        <span className={`${styles.burgerLine} ${open ? styles.burgerOpen : ''}`} />
      </button>
      <div className={styles.logo}>SB.</div>
      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        <li><a href="#about" className={activeSection === 'about' ? styles.activeLink : ''} onClick={() => setOpen(false)}>{t.nav_about}</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? styles.activeLink : ''} onClick={() => setOpen(false)}>{t.nav_skills}</a></li>
        <li><a href="#experience" className={activeSection === 'experience' ? styles.activeLink : ''} onClick={() => setOpen(false)}>{t.nav_exp}</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? styles.activeLink : ''} onClick={() => setOpen(false)}>{t.nav_projects}</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? styles.activeLink : ''} onClick={() => setOpen(false)}>{t.nav_contact}</a></li>
        <li className={styles.mobileLang}>
          <div className={styles.langSwitcherInline}>
            {languages.map(l => (
              <button
                key={`mobile-${l.code}`}
                className={`${styles.langBtn} ${lang === l.code ? styles.active : ''}`}
                onClick={() => setLang(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
        </li>
      </ul>
      <div className={styles.langSwitcher}>
        {languages.map(l => (
          <button
            key={l.code}
            className={`${styles.langBtn} ${lang === l.code ? styles.active : ''}`}
            onClick={() => setLang(l.code)}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className={styles.mobileStatus}>
        <span className={styles.flagIcon}>
          {{ en: '🇺🇸', fr: '🇫🇷', de: '🇩🇪', es: '🇪🇸', ar: '🇸🇦' }[lang]}
        </span>
      </div>
    </nav>
  )
}
