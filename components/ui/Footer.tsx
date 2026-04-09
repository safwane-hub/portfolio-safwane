import { Translations } from '@/lib/i18n'
import styles from '../styles/Footer.module.css'

export default function Footer({ t }: { t: Translations }) {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Safwane Bahho. <span>{t.footer_txt}</span></p>
      <div className={styles.links}>
        <a href="mailto:bahhosafwane99@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/safwane-bahho-6749761b7" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#hero" className={styles.topBtn} aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
