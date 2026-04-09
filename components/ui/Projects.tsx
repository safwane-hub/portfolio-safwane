'use client'
import { useRef } from 'react'
import { Translations } from '@/lib/i18n'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../styles/Projects.module.css'

export default function Projects({ t }: { t: Translations }) {
  const ref = useScrollReveal()

  const projects = [
    {
      num: '01',
      tag: 'AWS · Serverless',
      title: t.p1_title,
      desc: t.p1_desc,
      stack: ['TypeScript', 'AWS Lambda', 'Serverless'],
    },
    {
      num: '02',
      tag: 'Mobile · React Native',
      title: 'Hailawan',
      desc: t.p2_desc,
      stack: ['React Native', 'Node.js', 'Mobile'],
    },
    {
      num: '03',
      tag: 'E-commerce · Web',
      title: 'Truley Gorgeous',
      desc: t.p3_desc,
      stack: ['React', 'Stripe API', 'Node.js'],
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    card.style.setProperty('--mx', `${x}%`)
    card.style.setProperty('--my', `${y}%`)
  }

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.label}>{t.proj_label}</div>
      <h2 className={styles.title}>{t.proj_title}</h2>
      <div ref={ref} className={`${styles.grid} reveal`}>
        {projects.map((p, i) => (
          <div
            key={i}
            className={`${styles.card} project-card`}
            onMouseMove={handleMouseMove}
          >
            <div className={styles.num}>{p.num}</div>
            <div className={styles.tag}>{p.tag}</div>
            <div className={styles.cardTitle}>{p.title}</div>
            <div className={styles.desc}>{p.desc}</div>
            <div className={styles.stack}>
              {p.stack.map((s, j) => (
                <span key={j} className={styles.stackTag}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
