'use client'
import { useEffect, useRef } from 'react'
import { Translations } from '@/lib/i18n'
import styles from '../styles/Experience.module.css'

export default function Experience({ t }: { t: Translations }) {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    itemsRef.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      obs.observe(el)
      observers.push(obs)
      el.style.transitionDelay = `${i * 0.15}s`
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const jobs = [
    {
      period: 'Nov 2025 — Feb 2026',
      role: t.job1_role,
      company: 'Inelm · Freelance',
      desc: t.job1_desc,
    },
    {
      period: 'Nov 2022 — Oct 2025',
      role: t.job2_role,
      company: 'Berexia',
      desc: t.job2_desc,
    },
    {
      period: 'Jul 2022 — Sep 2022',
      role: t.job3_role,
      company: 'Intelvalia',
      desc: t.job3_desc,
    },
  ]

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.label}>{t.exp_label}</div>
      <h2 className={styles.title}>{t.exp_title}</h2>
      <div className={styles.timeline}>
        {jobs.map((job, i) => (
          <div
            key={i}
            ref={el => { itemsRef.current[i] = el }}
            className={styles.item}
          >
            <div className={styles.dot} />
            <div className={styles.period}>{job.period}</div>
            <div className={styles.role}>{job.role}</div>
            <div className={styles.company}>{job.company}</div>
            <div className={styles.desc}>{job.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
