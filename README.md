# Ahmed Mohamed Abdelsalam — Personal Portfolio

A high-performance personal portfolio website built with Next.js 15, TypeScript (strict mode), and Tailwind CSS. Engineered with enterprise-grade architecture to demonstrate production-ready code quality.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with CSS Custom Properties
- **Architecture**: Atomic Design Pattern

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx            # About page
│   ├── projects/page.tsx         # Projects gallery with filters
│   ├── articles/page.tsx         # Articles page
│   └── contact/page.tsx          # Contact page
│
├── components/                   # Atomic Design components
│   ├── atoms/                    # Primitive, reusable UI units
│   │   ├── Button/               # Polymorphic button (primary/secondary/ghost)
│   │   ├── Typography/           # Polymorphic text component
│   │   ├── Input/                # Input + Textarea with label/error
│   │   ├── Tag/                  # Technology chip/badge
│   │   ├── Icon/                 # Material Symbols wrapper
│   │   └── ProgressBar/          # Animated skill progress bar
│   │
│   ├── molecules/                # Composed UI components
│   │   ├── NavLink/              # Active-aware navigation link
│   │   ├── ContactLink/          # Icon + label social link
│   │   ├── ServiceCard/          # Service offering card
│   │   ├── ProjectCard/          # Project showcase card
│   │   ├── ExperienceCard/       # Timeline experience item
│   │   ├── SkillGroup/           # Skill category with tags or bars
│   │   └── ArticleQuote/         # Featured article quote block
│   │
│   ├── organisms/                # Full page sections
│   │   ├── Header/               # Sticky nav with mobile drawer
│   │   ├── Hero/                 # Landing hero section
│   │   ├── Experience/           # Work history timeline
│   │   ├── TechnicalArsenal/     # Skills grid
│   │   ├── Services/             # Services offered grid
│   │   ├── Projects/             # Projects showcase grid
│   │   ├── Articles/             # Articles teaser section
│   │   ├── ContactForm/          # Full contact form with states
│   │   └── Footer/               # Site footer with social links
│   │
│   └── templates/                # Page-level layout wrappers
│       └── RootLayout/           # Shared header + main + footer
│
├── lib/
│   ├── constants/                # All site data (DRY data source)
│   ├── types/                    # TypeScript interfaces and types
│   └── utils/                    # Utility functions (cn, etc.)
│
└── styles/
    └── globals.css               # CSS variables design system
```

## Design System

All design tokens are defined as CSS Custom Properties in `globals.css` and mapped into Tailwind via `tailwind.config.ts`. No hardcoded values in components.

| Token Category | CSS Variable Prefix | Tailwind Key |
|---|---|---|
| Colors | `--color-*` | `primary`, `surface`, `on-surface`, etc. |
| Typography | `--text-*`, `--font-*` | `font-display`, `text-h1`, etc. |
| Spacing | `--spacing-*` | `px-gutter`, `py-section`, `p-card` |
| Border Radius | `--radius-*` | `rounded-md`, `rounded-xl` |
| Shadows | `--shadow-*` | `shadow-glow-primary` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run type-check` | TypeScript strict check |
| `npm run lint` | ESLint check |

## Architecture Principles

- **Atomic Design**: Strict atoms → molecules → organisms → templates hierarchy
- **DRY**: All data lives in `lib/constants/index.ts`; components consume it
- **Polymorphic Components**: `Button` and `Typography` accept an `as` prop for semantic HTML
- **Type Safety**: `noImplicitAny`, `strictNullChecks`, `noUnusedLocals` all enforced
- **Zero Comments**: Self-documenting code through naming conventions

## License

MIT © 2024 Ahmed Mohamed Abdelsalam
