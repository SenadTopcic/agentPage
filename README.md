# ETHAN - AI Voice Agent Landing Page

Modern, accessible landing page for Ethan AI Voice Agent built with Next.js 14, React, TypeScript, and TailwindCSS.

## Features

- ✨ Modern, bright design with gradient colors
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ WCAG 2.1 AA accessibility compliant
- 🎨 Beautiful animations and transitions
- 🚀 Optimized performance
- 🎯 All sections from specification included

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ethan-voice-agent/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky header with mobile menu
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Stats.tsx           # Trust bar with metrics
│   ├── Features.tsx        # Why Ethan section
│   ├── Capabilities.tsx    # What Ethan can do
│   ├── Industries.tsx      # Industry use cases
│   ├── HowItWorks.tsx      # 6-step process
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── DemoForm.tsx        # Demo request form
│   └── Footer.tsx          # Footer with contact
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies

```

## Sections Included

1. **Navigation** - Sticky header with smooth scroll navigation
2. **Hero** - Main headline with CTAs and conversation demo
3. **Stats Bar** - Key metrics (24/7, <1s response, 15+ languages, 99.9% uptime)
4. **Features** - 6 key benefits with icons
5. **Capabilities** - Checklist of what Ethan can do
6. **Industries** - 7 industry use cases
7. **How It Works** - 6-step implementation process
8. **FAQ** - Accordion with common questions
9. **Demo Form** - Lead capture form
10. **Footer** - Company info and contact

## Accessibility Features

- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Focus indicators
- Screen reader optimized
- Color contrast compliance (WCAG 2.1 AA)
- Reduced motion support

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Secondary accent
}
```

### Content

All content is in the component files. Edit the text directly in:
- `components/Hero.tsx` - Headlines and CTAs
- `components/Features.tsx` - Feature descriptions
- `components/FAQ.tsx` - Questions and answers
- etc.

### Contact Email

Update the email in:
- `components/Footer.tsx`
- `components/DemoForm.tsx` (form submission handler)

## Build for Production

```bash
npm run build
npm start
```

## Performance

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Contact

**Vanadium Solutions**  
Email: sales@vanadium.solutions

---

Built with ❤️ for enterprise AI voice solutions
