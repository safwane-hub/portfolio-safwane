'use client'
import { Translations } from '@/lib/i18n'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../styles/About.module.css'

export default function About({ t }: { t: Translations }) {
  const ref = useScrollReveal()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.label}>{t.about_label}</div>
      <h2 className={styles.title}>{t.about_title}</h2>
      <div ref={ref} className={`${styles.grid} reveal`}>
        <div className={styles.text}>
          <p className={styles.highlight}>{t.about_p1}</p>
          <p className={styles.highlight}>{t.about_p2}</p>
          <p className={styles.highlight}>{t.about_p3}</p>
        </div>
        <div className={styles.statsGrid}>
          {[
            { num: '4+', label: t.stat1 },
            { num: '3', label: t.stat2 },
            { num: '10+', label: t.stat3 },
            { num: '3', label: t.stat4 },
          ].map((s, i) => (
            <div key={i} className={`${styles.statCard} stat-card`}>
              <div className={styles.statNumber}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
