# Mofebissyn Edutours Ltd — Coming Soon Landing Page

A premium, modern landing page for **Mofebissyn Edutours Ltd**, a digital education, travel, visa, and international consultancy platform.

## 🎨 Brand Identity

- **Emerald Green**: `#0c3c23`
- **Pine**: `#00311F`
- **Lime Glow**: `#AFE607`
- **Ivory Mist**: `#FAFFF2`

## 🚀 Tech Stack

- **Next.js 15** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **React Hook Form** — Form state management (Survey form uses clean React state)
- **Lucide React** — Icon library

## 📁 Project Structure

```
mofebissyn-edutours/
├── public/
│   └── images/
│       ├── logo.png              # Mofebissyn brand logo
│       └── globe-pattern.svg     # Decorative SVG
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with fonts & SEO
│   │   ├── page.tsx              # Main landing page
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky glassmorphism navbar
│   │   ├── Hero.tsx              # Premium hero with floating cards
│   │   ├── SectionHeader.tsx     # Reusable section header
│   │   ├── AboutSection.tsx      # Mission, Vision, Motto cards
│   │   ├── ServiceCard.tsx       # Service card component
│   │   ├── ServicesSection.tsx   # 6 service cards grid
│   │   ├── HowItWorks.tsx        # 4-step process
│   │   ├── WhyChooseUs.tsx       # 8 trust reasons
│   │   ├── AudienceCards.tsx     # 5 target audience cards
│   │   ├── ComingSoonPreview.tsx # Platform preview mockup
│   │   ├── SurveyForm.tsx        # Full survey questionnaire
│   │   ├── FinalCTA.tsx          # Final call-to-action
│   │   └── Footer.tsx            # Footer with contact info
│   ├── hooks/
│   │   ├── useScrollPosition.ts  # Scroll position tracking
│   │   └── useInView.ts          # Intersection observer hook
│   └── lib/
│       └── utils.ts              # Utility functions (cn helper)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 📝 Survey Form Integration

The survey form includes a detailed integration placeholder for connecting to:

- **Google Apps Script Web App**
- **SheetDB API**
- **Supabase**
- **Airtable**

Look for the `/* ╔════════════════════════════════...` block in `src/components/SurveyForm.tsx` for instructions.

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

- Desktop (lg): Full layout with side-by-side sections
- Tablet (md): Adjusted grids and typography
- Mobile (sm): Stacked layouts with hamburger menu

## 🌐 SEO

- Optimized meta tags and Open Graph data
- Semantic HTML structure
- Accessible form labels and ARIA attributes
- Fast-loading static export

---

**Mofebissyn Edutours Ltd** — Empowering Global Dreams.
