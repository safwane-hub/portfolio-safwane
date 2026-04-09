import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Safwane Bahho — Software Developer',
  description: 'Full-stack developer with 4+ years of experience. TypeScript, Angular, Python, AWS.',
  keywords: ['software developer', 'full-stack', 'Angular', 'TypeScript', 'Morocco', 'Casablanca'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
