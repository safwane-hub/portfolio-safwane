'use client'

import { useState } from 'react'
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

  return (
    <nav className={styles.nav}>
      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={`${styles.burgerLine} ${open ? styles.burgerOpen : ''}`} />
        <span className={`${styles.burgerLine} ${open ? styles.burgerOpen : ''}`} />
        <span className={`${styles.burgerLine} ${open ? styles.burgerOpen : ''}`} />
      </button>
      <div className={styles.logo}>SB.</div>
      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        <li><a href="#about" onClick={() => setOpen(false)}>{t.nav_about}</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>{t.nav_skills}</a></li>
        <li><a href="#experience" onClick={() => setOpen(false)}>{t.nav_exp}</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>{t.nav_projects}</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>{t.nav_contact}</a></li>
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
    </nav>
  )
}
