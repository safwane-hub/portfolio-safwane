import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Safwane Bahho — Software Developer',
  description: 'Full-stack developer with 4+ years of experience. TypeScript, Angular, Python, AWS.',
  keywords: ['software developer', 'full-stack', 'Angular', 'TypeScript', 'Morocco', 'Casablanca'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
