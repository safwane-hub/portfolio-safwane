'use client'

import { useState } from 'react'
import { i18n, languages, type Lang } from '@/lib/i18n'
import ThreeBackground from '@/components/ui/ThreeBackground'
import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/ui/Hero'
import About from '@/components/ui/About'
import Skills from '@/components/ui/Skills'
import Experience from '@/components/ui/Experience'
import Projects from '@/components/ui/Projects'
import Contact from '@/components/ui/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const t = i18n[lang]
  const isRTL = lang === 'ar'

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="noise" />
      <ThreeBackground />
      <Cursor />
      <Navbar t={t} lang={lang} setLang={setLang} languages={languages} />
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}
