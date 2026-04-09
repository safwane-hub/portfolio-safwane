import { Translations } from '@/lib/i18n'
import styles from '../styles/Footer.module.css'

export default function Footer({ t }: { t: Translations }) {
  return (
    <>
      <div className={styles.backToTop}>
        <a href="#hero" className={styles.topIndicator} aria-label="Back to top">
          <span className={styles.topArrow}>
            <svg width="18" height="26" viewBox="0 0 16 24" fill="none">
              <path d="M8.7 23V3.8l5.6 5.6a.7.7 0 001-1l-7-7a.7.7 0 00-1 0l-7 7a.7.7 0 001 1l5.6-5.6V23a1 1 0 102 0z" fill="currentColor"/>
            </svg>
          </span>
          <span className={styles.topLabel}>{t.footer_top}</span>
        </a>
      </div>
      <footer className={styles.footer}>
        <p>© 2026 Safwane Bahho. <span>{t.footer_txt}</span></p>
        <div className={styles.links}>
          <a href="mailto:bahhosafwane99@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/safwane-bahho-6749761b7" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}
