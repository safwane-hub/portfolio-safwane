'use client'
import { Translations } from '@/lib/i18n'
import styles from '../styles/Hero.module.css'

export default function Hero({ t }: { t: Translations }) {
  const tagParts = t.hero_tag.split('·').map(s => s.trim())

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeRole}>{tagParts[0]}</span>
          {tagParts[1] && (
            <>
              <span className={styles.badgeSep} />
              <span className={styles.badgeLocation}>{tagParts[1]}</span>
            </>
          )}
        </div>
        <h1 className={styles.name}>
          Safwane<br />
          <span className={styles.nameGrad}>Bahho</span>
        </h1>
        <p className={styles.subtitle}>{t.hero_sub}</p>
        <div className={styles.cta}>
          <a href="#contact" className={styles.btnPrimary}>{t.hero_cta1}</a>
          <a href="#experience" className={styles.btnSecondary}>{t.hero_cta2}</a>
        </div>
        <a href="#about" className={styles.scrollIndicator}>
          <span className={styles.scrollLabel}>{t.hero_scroll}</span>
          <span className={styles.scrollArrow}>
            <svg width="18" height="26" viewBox="0 0 16 24" fill="none">
              <path d="M7.3 1v19.2L1.7 14.6a.7.7 0 00-1 1l7 7a.7.7 0 001 0l7-7a.7.7 0 00-1-1L9.3 20.2V1a1 1 0 10-2 0z" fill="currentColor"/>
            </svg>
          </span>
        </a>
      </div>
    </section>
  )
}
