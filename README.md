# Sales Mastery — Premium Sales Training Landing Page

A production-ready, pixel-perfect landing page for a high-ticket sales training program built with modern web technologies.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)

## ✨ Features

- **12 Sections**: Navbar, Hero, Statistics, Video, Features, Testimonials, Timeline, Mentors, Pricing, Community, FAQ, Footer
- **Dark Luxury Theme**: Deep blacks, orange/amber accents, purple glows, glassmorphism
- **Fully Responsive**: Tested across 320px to 1920px+
- **Animated**: Scroll-triggered animations, counters, hover effects, smooth accordion
- **Data-Driven**: All content stored in dedicated data files for easy updates
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Optimized**: Next.js Image component, dynamic imports, lazy loading

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17+ 
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd sales-mastery

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, SEO)
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Global styles, design tokens, effects
├── components/
│   ├── navbar/Navbar.tsx
│   ├── hero/Hero.tsx
│   ├── statistics/Statistics.tsx
│   ├── video/VideoSection.tsx
│   ├── features/Features.tsx
│   ├── testimonials/Testimonials.tsx
│   ├── timeline/Timeline.tsx
│   ├── mentor/MentorSection.tsx
│   ├── pricing/Pricing.tsx
│   ├── community/Community.tsx
│   ├── faq/FAQ.tsx
│   ├── footer/FooterCTA.tsx
│   └── shared/
│       ├── SectionWrapper.tsx
│       ├── GlowEffect.tsx
│       └── AnimatedCounter.tsx
├── data/
│   ├── navigation.ts
│   ├── statistics.ts
│   ├── features.ts
│   ├── testimonials.ts
│   ├── timeline.ts
│   ├── mentors.ts
│   ├── pricing.ts
│   ├── community.ts
│   └── faq.ts
├── lib/
│   └── utils.ts            # cn() class merger
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework & SSR |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations |
| Embla Carousel | Testimonials carousel |
| Lucide React | Icons |
| clsx + tailwind-merge | Class utilities |

## 🎨 Customization

### Replacing Images

All images use Unsplash URLs and can be easily replaced:

1. **Data files** (`src/data/`): Update image URLs in testimonials, mentors, and community data
2. **Hero**: Update the hero image URL in `src/components/hero/Hero.tsx`
3. **Local images**: Place images in `public/images/` and reference as `/images/filename.jpg`

### Updating Content

All content is data-driven. Edit the files in `src/data/` to update:
- Navigation links
- Statistics
- Feature cards
- Testimonials
- Timeline steps
- Mentor profiles
- Pricing plans
- FAQ items
- Community posts

### Theme Colors

Design tokens are defined in `src/app/globals.css` under `:root`. Key colors:
- Primary: Orange (#f97316)
- Accent: Purple (#7c3aed)
- Background: Deep Black (#060612)

## 📱 Responsive Breakpoints

- Mobile: 320px+, 375px+, 390px+
- Tablet: 768px+
- Laptop: 1024px+
- Desktop: 1280px+, 1440px+, 1920px+

## 🚢 Deployment

### Vercel (Recommended)

```bash
npx vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 License

MIT License — feel free to use for personal and commercial projects.
