# Implementation Guide

## Table of Contents
1. [Project Setup](#project-setup)
2. [Component Implementation Order](#component-implementation-order)
3. [Development Workflow](#development-workflow)
4. [Testing Strategy](#testing-strategy)
5. [Performance Optimization](#performance-optimization)
6. [Deployment Process](#deployment-process)

---

## Project Setup

### 1. Initialize Next.js Project

```bash
# Create new Next.js project with TypeScript and Tailwind
npx create-next-app@latest designbykenny-site --typescript --tailwind --app --eslint

cd designbykenny-site
```

**Configuration prompts:**
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: No
- App Router: Yes
- Import alias: Yes (@/*)

### 2. Install Dependencies

```bash
# Core dependencies
npm install

# Additional utilities
npm install clsx tailwind-merge
npm install lucide-react  # Icons
npm install zod  # Validation
npm install react-hook-form @hookform/resolvers  # Form handling

# Email service (choose one)
npm install @emailjs/browser  # Client-side option
# OR
npm install resend  # Server-side option (recommended)

# Development dependencies
npm install -D @types/node @types/react @types/react-dom
npm install -D prettier prettier-plugin-tailwindcss
npm install -D @tailwindcss/forms @tailwindcss/typography
```

### 3. Configure Tailwind CSS

**tailwind.config.ts:**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
```

### 4. Setup Prettier

**.prettierrc:**
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 5. Configure ESLint

**.eslintrc.json:**
```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "@next/next/no-html-link-for-pages": "off",
    "react/no-unescaped-entities": "off"
  }
}
```

### 6. Environment Variables

**.env.example:**
```env
# Email Service
RESEND_API_KEY=your_resend_api_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_EMAIL=admin@designbykenny.com

# Optional: Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**.env.local:**
```env
# Copy from .env.example and fill in real values
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_EMAIL=your-email@example.com
```

### 7. Git Setup

**.gitignore:**
```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## Component Implementation Order

### Phase 1: Core Structure (Week 1)

**Day 1-2: Layout & Navigation**
```
1. Create app/layout.tsx with basic structure
2. Implement components/Navigation.tsx
3. Implement components/MobileNav.tsx
4. Add responsive navigation behavior
5. Test navigation on all breakpoints
```

**Day 3-4: Type Definitions & Data**
```
1. Create lib/types.ts with all interfaces
2. Create lib/data.ts with sample portfolio items
3. Create lib/constants.ts for app constants
4. Verify TypeScript compilation
```

**Day 5-7: Portfolio Gallery**
```
1. Create app/page.tsx (homepage)
2. Implement components/Gallery.tsx
3. Implement components/PortfolioCard.tsx
4. Add image optimization with next/image
5. Test responsive grid layout
6. Add loading states
```

### Phase 2: Interactive Features (Week 2)

**Day 1-3: Portfolio Details**
```
1. Implement components/PortfolioModal.tsx
2. Add image carousel functionality
3. Add modal animations and transitions
4. Implement close/escape behavior
5. Test on mobile and desktop
```

**Day 4-5: Filtering & Search**
```
1. Add filter controls to Gallery
2. Implement category filtering
3. Implement material filtering
4. Add search functionality
5. Test filter combinations
```

**Day 6-7: Polish Gallery**
```
1. Add skeleton loading states
2. Implement lazy loading for images
3. Add hover effects and animations
4. Optimize performance
5. Cross-browser testing
```

### Phase 3: Request Form (Week 3)

**Day 1-2: Form Structure**
```
1. Create app/request/page.tsx
2. Implement components/RequestForm.tsx
3. Implement components/FormField.tsx
4. Add all form fields
5. Test form layout responsively
```

**Day 3-4: Form Validation**
```
1. Create lib/validation.ts
2. Integrate react-hook-form
3. Add Zod validation schemas
4. Implement client-side validation
5. Add error message display
6. Test all validation rules
```

**Day 5-7: Form Submission**
```
1. Implement components/FileUpload.tsx
2. Create app/api/submit-request/route.ts
3. Add server-side validation
4. Integrate email service
5. Implement success/error states
6. Test end-to-end submission
```

### Phase 4: Email & Polish (Week 4)

**Day 1-2: Email Integration**
```
1. Create lib/email.ts utilities
2. Create email templates
3. Test admin notification emails
4. Test user confirmation emails
5. Verify email delivery
```

**Day 3-4: Performance Optimization**
```
1. Optimize images (WebP, sizing)
2. Implement code splitting
3. Add proper caching headers
4. Test Core Web Vitals
5. Fix any performance issues
```

**Day 5-7: Final Polish**
```
1. Add error boundaries
2. Implement 404 page
3. Add SEO meta tags
4. Test accessibility
5. Cross-browser testing
6. Mobile device testing
7. Final QA
```

---

## Development Workflow

### Daily Development Routine

**Morning:**
```bash
# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Start development server
npm run dev
```

**During Development:**
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

**Before Committing:**
```bash
# Run all checks
npm run type-check
npm run lint
npm run format:check
npm run build
```

**Commit Changes:**
```bash
git add .
git commit -m "feat: add portfolio gallery component"
git push origin feature/portfolio-gallery
```

### Branch Strategy

**Main branches:**
- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Production hotfixes

**Workflow:**
```bash
# Create feature branch
git checkout -b feature/portfolio-modal

# Make changes and commit
git add .
git commit -m "feat: implement portfolio detail modal"

# Push and create PR
git push origin feature/portfolio-modal
# Create PR on GitHub from feature/portfolio-modal to develop
```

### Code Review Checklist

- [ ] Code follows project conventions
- [ ] TypeScript types are properly defined
- [ ] Components are properly documented
- [ ] Responsive design tested
- [ ] Accessibility considerations addressed
- [ ] Performance impact considered
- [ ] No console errors or warnings
- [ ] Tests pass (if applicable)

---

## Testing Strategy

### Manual Testing

**Browser Testing:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Device Testing:**
- iPhone SE (375×667)
- iPhone 14 Pro (393×852)
- iPad (768×1024)
- MacBook (1440×900)
- Desktop (1920×1080)

**Functionality Testing:**
```
Portfolio Gallery:
[ ] Images load correctly
[ ] Grid is responsive
[ ] Filtering works
[ ] Search works
[ ] Modal opens/closes
[ ] Image carousel works

Request Form:
[ ] All fields validate
[ ] File upload works
[ ] Submission succeeds
[ ] Error states display
[ ] Success message shows
[ ] Emails are sent

Navigation:
[ ] Links work correctly
[ ] Mobile menu toggles
[ ] Active states correct
[ ] Scroll behavior smooth
```

### Automated Testing (Optional)

**Unit Tests with Vitest:**
```bash
npm install -D vitest @vitejs/plugin-react
npm install -D @testing-library/react @testing-library/jest-dom
```

**Example Test:**
```typescript
// components/__tests__/PortfolioCard.test.tsx
import { render, screen } from '@testing-library/react'
import { PortfolioCard } from '../PortfolioCard'

describe('PortfolioCard', () => {
  it('renders portfolio item correctly', () => {
    const item = {
      id: '1',
      title: 'Dragon Figurine',
      // ... other properties
    }
    
    render(<PortfolioCard item={item} />)
    
    expect(screen.getByText('Dragon Figurine')).toBeInTheDocument()
  })
})
```

### E2E Testing with Playwright (Optional)

```bash
npm install -D @playwright/test
npx playwright install
```

**Example E2E Test:**
```typescript
// e2e/request-form.spec.ts
import { test, expect } from '@playwright/test'

test('submit request form', async ({ page }) => {
  await page.goto('/request')
  
  await page.fill('[name="title"]', 'Custom Print')
  await page.fill('[name="description"]', 'I need a custom phone holder')
  await page.fill('[name="name"]', 'John Doe')
  await page.fill('[name="email"]', 'john@example.com')
  
  await page.click('button[type="submit"]')
  
  await expect(page.locator('text=Request Submitted')).toBeVisible()
})
```

---

## Performance Optimization

### Image Optimization Checklist

- [ ] Use Next.js Image component
- [ ] Set appropriate image sizes
- [ ] Use WebP/AVIF formats
- [ ] Implement lazy loading
- [ ] Add blur placeholders
- [ ] Compress images before upload
- [ ] Use responsive images with `sizes` prop

### Code Optimization

**Dynamic Imports:**
```typescript
// Instead of:
import PortfolioModal from '@/components/PortfolioModal'

// Use:
import dynamic from 'next/dynamic'
const PortfolioModal = dynamic(() => import('@/components/PortfolioModal'))
```

**Bundle Analysis:**
```bash
# Install bundle analyzer
npm install -D @next/bundle-analyzer

# Configure in next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

### Lighthouse Targets

Run Lighthouse in Chrome DevTools and aim for:

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

**Key Metrics:**
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1
- Speed Index: < 3.4s

---

## Deployment Process

### Pre-deployment Checklist

- [ ] All features tested and working
- [ ] No console errors or warnings
- [ ] Lighthouse scores meet targets
- [ ] All images optimized
- [ ] Environment variables configured
- [ ] Email delivery tested
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete
- [ ] SEO meta tags added
- [ ] Analytics configured
- [ ] Error tracking setup

### Deployment Steps

**1. Final Build Test:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Build for production
npm run build

# Start production server locally
npm start

# Test production build locally
# Open http://localhost:3000
```

**2. Deploy to Vercel:**
```bash
# Using Vercel CLI
vercel --prod

# OR push to main branch (automatic deployment)
git push origin main
```

**3. Post-deployment Verification:**
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Forms submit successfully
- [ ] Emails are delivered
- [ ] Analytics tracking works
- [ ] No 404 errors
- [ ] SSL certificate active
- [ ] Custom domain working

### Rollback Procedure

If deployment has issues:

```bash
# Via Vercel Dashboard:
1. Go to Deployments
2. Find previous working deployment
3. Click "..." menu
4. Select "Promote to Production"

# Via CLI:
vercel rollback
```

---

## Continuous Maintenance

### Weekly Tasks
- [ ] Check error logs
- [ ] Review analytics
- [ ] Test form submissions
- [ ] Check email delivery
- [ ] Monitor performance metrics

### Monthly Tasks
- [ ] Update dependencies
- [ ] Security audit
- [ ] Performance review
- [ ] Content updates
- [ ] Backup verification

### Quarterly Tasks
- [ ] Major dependency updates
- [ ] Feature additions
- [ ] Design refresh (if needed)
- [ ] SEO audit
- [ ] Accessibility audit

---

## Troubleshooting Guide

### Common Issues

**Build Fails:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

**Images Not Loading:**
- Check file paths
- Verify images in public folder
- Check Next.js Image configuration
- Verify remote image domains

**Form Not Submitting:**
- Check API route path
- Verify environment variables
- Check email service credentials
- Review browser console errors
- Test with simplified payload

**Email Not Sending:**
- Verify API key in environment variables
- Check email service dashboard
- Review server logs
- Test with email service's test endpoint
- Check spam folder

**Performance Issues:**
- Run Lighthouse audit
- Check bundle size
- Optimize images
- Review third-party scripts
- Check database queries (future)

---

This implementation guide provides a structured approach to building the 3D print portfolio website from setup through deployment and maintenance.
