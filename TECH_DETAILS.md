# Technical Details

## Overview
A modern, responsive personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a polished user experience.

## Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Icon library
- **OKLCH Color Space** - Modern color system for better color consistency

### Features & Functionality
- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Mode** - System preference detection with manual toggle
- **Smooth Animations** - CSS keyframes and transitions throughout
- **Scroll Animations** - Intersection Observer API for fade-in effects
- **Active Section Detection** - Navigation highlights based on scroll position
- **Form Validation** - Client-side validation for contact form

## Project Structure

```
personal-portfolio/
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page composition
├── components/
│   ├── About.tsx             # About section with skills
│   ├── Contact.tsx           # Contact form and information
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section with CTA
│   ├── Navigation.tsx        # Fixed navigation with scroll effects
│   ├── Projects.tsx          # Project showcase cards
│   └── ui/                   # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── hooks/
│   └── useScrollAnimation.ts # Custom hook for scroll-based animations
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
└── public/                   # Static assets (logos, images)
```

## Key Features

### 1. Hero Section
- Animated text with fade-in and slide-up effects
- Gradient background with decorative elements
- Social media links with hover effects
- Smooth scroll navigation buttons

### 2. Navigation
- Fixed top navigation with backdrop blur
- Shadow appears on scroll
- Active section indicator with animated underline
- Smooth scroll to sections
- Mobile responsive menu
- Theme toggle with icon animations

### 3. Section Transitions
- Custom `useScrollAnimation` hook using Intersection Observer
- Fade-in and slide-up animations when sections enter viewport
- Applied to About, Projects, and Contact sections

### 4. Card Hover Effects
- Project cards lift with shadow and border glow
- Skills cards with icon rotation and scale effects
- Smooth transitions on all interactive elements

### 5. Color & Typography
- Vibrant primary blue with high saturation
- Extrabold headings with tight tracking
- Color accents on section headings
- Gradient underlines for visual hierarchy
- Better contrast for improved readability

### 6. Dark Mode
- Blue-tinted backgrounds instead of pure gray
- Enhanced contrast and vibrancy
- Smooth theme transitions
- Persistent theme preference

### 7. Micro-interactions
- Button press effects (scale down on click)
- Icon animations on hover (rotate, scale, translate)
- Cursor pointer on all clickable elements
- Color changes to indicate interactivity

## CSS Architecture

### Custom Animations
```css
@keyframes fade-in
@keyframes slide-up
@keyframes float
@keyframes pulse-subtle
```

### Utility Classes
- `.animate-fade-in` - Fade in effect
- `.animate-slide-up` - Slide up from bottom
- `.animate-float` - Floating animation for decorative elements
- `.animation-delay-*` - Staggered animation delays
- `.bg-grid-pattern` - Decorative grid background

### Color System
Uses OKLCH color space for consistent, perceptually uniform colors across light and dark modes.

## Performance Optimizations
- Next.js automatic code splitting
- Image optimization with Next.js Image component
- CSS-only animations (no JavaScript animation libraries)
- Intersection Observer for efficient scroll detection
- Minimal bundle size with tree-shaking

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox for layouts
- CSS custom properties for theming
- Intersection Observer API for scroll animations

## Accessibility
- Semantic HTML structure
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus states on interactive elements
- Smooth scroll with `scroll-behavior: smooth`
- High contrast ratios for text

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Deployment
Optimized for deployment on Vercel, Netlify, or any static hosting platform that supports Next.js.

## Future Enhancements
- Blog section with MDX support
- Project filtering by technology
- Contact form backend integration
- Analytics integration
- SEO optimization with metadata
- Performance monitoring
