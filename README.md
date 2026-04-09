# Portfolio — Safwane Bahho

Modern dark portfolio built with **Next.js 14**, **Three.js**, **TypeScript**, and **CSS Modules**.

## Features
- 🌌 Three.js animated background (particles + wireframe shapes)
- 🖱️ Custom cursor with ring effect
- 🌍 5 languages: English, French, German, Spanish, Arabic (with RTL)
- ✨ Scroll reveal animations
- 📬 Contact form
- 📱 Fully responsive

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

## Deploy on Vercel (recommended)
```bash
npm install -g vercel
vercel
```

## Project Structure
```
portfolio-safwane/
├── app/
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (language state)
├── components/
│   ├── ThreeBackground   # Three.js canvas
│   ├── Cursor            # Custom cursor
│   ├── Navbar            # Nav + language switcher
│   ├── Hero              # Hero section
│   ├── About             # About + stats
│   ├── Skills            # Skills grid
│   ├── Experience        # Timeline
│   ├── Projects          # Project cards
│   ├── Contact           # Contact form
│   └── Footer            # Footer
├── hooks/
│   └── useScrollReveal   # Intersection Observer hook
└── lib/
    └── i18n.ts           # All 5 language translations
```

## Customization
- Edit translations in `lib/i18n.ts`
- Update personal info in each component
- Change colors in `app/globals.css` (CSS variables)
