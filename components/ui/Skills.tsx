'use client'
import { Translations } from '@/lib/i18n'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../styles/Skills.module.css'

const skillsList = (t: Translations) => [
  { icon: '⚡', name: 'TypeScript / JavaScript', level: t.sk_adv },
  { icon: '🅰️', name: 'Angular', level: t.sk_adv },
  { icon: '🐍', name: 'Python', level: t.sk_adv },
  { icon: '🟢', name: 'Node.js', level: t.sk_adv },
  { icon: '☁️', name: 'AWS (Serverless, Lambda)', level: t.sk_inter },
  { icon: '🐳', name: 'Docker / DevOps / CI-CD', level: t.sk_inter },
  { icon: '⚛️', name: 'React / React Native', level: t.sk_inter },
  { icon: '🤖', name: 'AI / Prompt Engineering', level: t.sk_adv },
  { icon: '🔗', name: 'REST APIs / Integration', level: t.sk_adv },
]

export default function Skills({ t }: { t: Translations }) {
  const ref = useScrollReveal()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.label}>{t.skills_label}</div>
      <h2 className={styles.title}>{t.skills_title}</h2>
      <div ref={ref} className={`${styles.grid} reveal`}>
        {skillsList(t).map((s, i) => (
          <div key={i} className={`${styles.card} skill-card`}>
            <span className={styles.icon}>{s.icon}</span>
            <div>
              <div className={styles.name}>{s.name}</div>
              <div className={styles.level}>{s.level}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
