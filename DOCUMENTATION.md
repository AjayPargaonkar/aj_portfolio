# Ajay Pargaonkar - Portfolio Documentation

## Project Overview
A professional portfolio website for Ajay Pargaonkar, built with Angular 21.
Features a dark theme, scroll animations (AOS), typing effects, and a modular component architecture.

## Tech Stack
- **Framework**: Angular 21 (Standalone Components)
- **Language**: TypeScript 5.9
- **Animations**: AOS (Animate On Scroll) v2
- **Fonts**: Google Fonts (Inter, Fira Code)
- **Build**: Angular CLI with Vite

## Project Structure

```
src/
├── app/
│   ├── shared/
│   │   └── portfolio.data.ts       # Centralized resume data (interfaces + constants)
│   ├── layout/
│   │   ├── header/                  # Fixed navbar with glassmorphism + mobile menu
│   │   └── footer/                  # Footer with links, contact, scroll-to-top
│   ├── sections/
│   │   ├── hero/                    # Full-viewport hero with typing animation
│   │   ├── about/                   # About me + stats cards
│   │   ├── skills/                  # Skills grid by category with tags
│   │   ├── experience/              # Timeline layout for work history
│   │   ├── projects/                # Project cards with tech stacks
│   │   ├── education/               # Education cards
│   │   ├── achievements/            # Awards with gold accent
│   │   └── contact/                 # Contact form + info cards
│   ├── app.ts                       # Root component (composes all sections, inits AOS)
│   ├── app.html                     # App shell template
│   ├── app.css                      # Root styles
│   ├── app.config.ts                # App configuration (providers)
│   └── app.routes.ts                # Routes (single-page, no routing needed)
├── types/
│   └── aos.d.ts                     # TypeScript declarations for AOS library
├── styles.css                       # Global styles (theme, reset, utilities)
├── index.html                       # HTML entry point with Google Fonts
└── main.ts                          # Bootstrap entry point
```

## Component Architecture

### Data Flow
All portfolio content lives in `shared/portfolio.data.ts`. Components import only the data they need.
To update resume info, edit this single file — all sections update automatically.

### Components (all standalone)

| Component         | Selector            | Description                                    |
|-------------------|---------------------|------------------------------------------------|
| HeaderComponent   | `app-header`        | Fixed navbar, smooth scroll, hamburger menu    |
| HeroComponent     | `app-hero`          | Typing animation, particles, code window       |
| AboutComponent    | `app-about`         | Stats cards + about text                       |
| SkillsComponent   | `app-skills`        | Category-based skill tags grid                 |
| ExperienceComponent | `app-experience`  | Vertical timeline with glowing nodes           |
| ProjectsComponent | `app-projects`      | Project cards with highlights + tech tags      |
| EducationComponent | `app-education`    | Education cards with scores                    |
| AchievementsComponent | `app-achievements` | Gold-accented achievement cards             |
| ContactComponent  | `app-contact`       | Contact form (reactive forms) + info cards     |
| FooterComponent   | `app-footer`        | Quick links, contact, scroll-to-top            |

## Design System (CSS Custom Properties)

```css
--bg-primary: #0a0a0f        /* Main background */
--bg-card: #1a1a2e            /* Card backgrounds */
--accent-primary: #6366f1     /* Indigo accent */
--accent-secondary: #8b5cf6   /* Purple accent */
--gold: #f59e0b               /* Achievement accent */
--green: #22c55e              /* Current/active badge */
```

## How to Run

```bash
# Install dependencies
npm install

# Development server (http://localhost:4200)
ng serve

# Production build
ng build
```

## How to Customize

1. **Update resume data**: Edit `src/app/shared/portfolio.data.ts`
2. **Change theme colors**: Edit CSS variables in `src/styles.css`
3. **Add new sections**: Create component in `sections/`, import in `app.ts`
4. **Update resume PDF**: Replace `public/resume/ajay_pargaonkar_full_stack.pdf`

## Libraries Used
- **AOS v2.3.4**: Scroll-triggered animations via `data-aos` HTML attributes
- **Angular Reactive Forms**: Contact form with validation

## Browser Support
Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS features:
- `backdrop-filter` (glassmorphism)
- CSS Grid & Flexbox
- CSS Custom Properties
- `@keyframes` animations
