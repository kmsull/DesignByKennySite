# 3D Print Portfolio Website - Design Specification

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Site Architecture](#site-architecture)
4. [User Experience Design](#user-experience-design)
5. [Portfolio Gallery Design](#portfolio-gallery-design)
6. [Request Form Design](#request-form-design)
7. [File Structure](#file-structure)
8. [Responsive Design](#responsive-design)
9. [Performance](#performance)
10. [Email Integration](#email-integration)
11. [Deployment](#deployment)
12. [Sample Content](#sample-content)
13. [Future Enhancements](#future-enhancements)

---

## Project Overview

### Purpose
Create a professional 3D print portfolio website that showcases existing work and enables custom print requests. The site is optimized for QR code access in a work lab environment, ensuring mobile-first usability.

### Core Features
1. **Portfolio Gallery**: Browse existing 3D prints with high-quality images
2. **Request System**: Submit custom print requests with detailed specifications
3. **Mobile-First**: Optimized for QR code scanning and mobile access
4. **Professional Design**: Clean, modern aesthetic showcasing craftsmanship

### Target Users
- Lab visitors scanning QR codes on mobile devices
- Potential clients browsing portfolio
- Users requesting custom 3D prints
- Admin managing requests and portfolio

---

## Technology Stack

### Frontend Framework: Next.js 14 with App Router

**Justification:**
- **Server Components**: Reduce JavaScript sent to client, improving performance
- **App Router**: Modern routing with layouts, loading states, and streaming
- **Built-in Optimization**: Image optimization, font loading, script optimization
- **SEO-Friendly**: Server-side rendering for better search engine visibility
- **Fast Refresh**: Excellent developer experience with instant feedback
- **API Routes**: Built-in backend for form handling without separate server

**Alternatives Considered:**
- React with Vite: More manual setup, lacks built-in image optimization
- Gatsby: More complex for simple portfolio needs
- Plain HTML/CSS: Not scalable, poor developer experience

### Styling: Tailwind CSS

**Justification:**
- **Utility-First**: Rapid development with consistent design system
- **Responsive Design**: Mobile-first utilities built-in
- **Small Bundle**: Tree-shaking removes unused styles
- **Customization**: Easy to extend with custom colors, spacing
- **No Name Conflicts**: Utility classes eliminate CSS specificity issues
- **Dark Mode Support**: Built-in dark mode variants

**Alternatives Considered:**
- CSS Modules: More verbose, requires writing more custom CSS
- Styled Components: Runtime overhead, larger bundle size
- Bootstrap: Opinionated design, harder to customize

### Language: TypeScript

**Justification:**
- **Type Safety**: Catch errors at compile time, not runtime
- **Better IDE Support**: Autocomplete, refactoring, inline documentation
- **Maintainability**: Self-documenting code with interfaces and types
- **Team Collaboration**: Clear contracts between components
- **Gradual Adoption**: Can use alongside JavaScript if needed

**Alternatives Considered:**
- JavaScript: Less type safety, more prone to runtime errors
- Flow: Less popular, smaller community support

### Deployment: Vercel

**Justification:**
- **Zero Configuration**: Optimized for Next.js out of the box
- **Automatic CI/CD**: Deploy on git push with preview URLs
- **Global CDN**: Fast content delivery worldwide
- **Edge Functions**: Server-side logic at the edge for low latency
- **Free Tier**: Generous limits for portfolio sites
- **Environment Variables**: Easy secret management
- **Analytics**: Built-in performance monitoring

**Alternatives Considered:**
- Netlify: Similar features but less optimized for Next.js
- AWS Amplify: More complex setup
- Traditional hosting: Requires manual deployment setup

### Email Service: EmailJS / Next.js API Routes

**Justification:**
- **EmailJS**: Client-side, no backend needed, free tier available
- **API Routes**: Server-side, more secure, better control
- **Dual Approach**: Start with EmailJS, migrate to API routes if needed

**Alternatives Considered:**
- SendGrid: Requires backend, more setup
- Mailgun: API-based, more complex
- Nodemailer: Requires email server configuration

### Image Optimization: Next.js Image Component

**Justification:**
- **Automatic Optimization**: WebP/AVIF format conversion
- **Lazy Loading**: Images load as they enter viewport
- **Responsive Images**: Serves correct size based on device
- **Blur Placeholder**: Smooth loading experience
- **Built-in**: No additional dependencies needed

---

## Site Architecture

### Navigation Structure

```
┌─────────────────────────────────────┐
│           Navigation Bar            │
│  [Logo]  Portfolio  |  Request      │
└─────────────────────────────────────┘
```

**Routes:**
- `/` - Portfolio Gallery (Homepage)
- `/request` - Request Form Page
- `/api/submit-request` - API endpoint for form submissions

**Mobile Navigation:**
- Hamburger menu on screens < 768px
- Slide-in drawer with navigation links
- Touch-friendly tap targets (min 44px)

### URL Structure

```
https://designbykenny.com/
├── /                           # Portfolio gallery homepage
├── /request                    # Custom print request form
└── /api/submit-request         # Form submission endpoint (internal)
```

**SEO Considerations:**
- Clean, semantic URLs
- Meta tags for social sharing
- Structured data for portfolio items
- Sitemap.xml generation

### Page Hierarchy

```
App Layout (Root)
├── Navigation Component (persistent)
├── Home Page (/)
│   ├── Hero Section
│   ├── Portfolio Gallery
│   └── Call-to-Action (Request Button)
└── Request Page (/request)
    ├── Request Form
    ├── Form Validation
    └── Success/Error States
```

---

## User Experience Design

### Mobile-First Approach

**Design Principles:**
1. **Touch-First Interactions**: All interactive elements ≥ 44x44px
2. **Thumb-Friendly**: Important actions in easy-to-reach zones
3. **Progressive Enhancement**: Core functionality works on all devices
4. **Fast Loading**: < 2.5s LCP on 3G connections

### User Flow: Browse Portfolio

```
QR Code Scan → Landing (Gallery) → Browse Items → View Details → Request Custom Print
```

**Steps:**
1. User scans QR code on mobile device
2. Site loads with optimized images (lazy loading)
3. User scrolls through gallery (infinite scroll optional)
4. User taps portfolio item for enlarged view
5. User sees print details (materials, dimensions, description)
6. User clicks "Request Similar" or "Custom Request" button
7. User navigates to request form

### User Flow: Submit Request

```
Request Page → Fill Form → Upload Reference (optional) → Submit → Confirmation
```

**Steps:**
1. User navigates to /request from gallery or nav
2. Form loads with validation ready
3. User fills required fields (title, description, name, email)
4. User optionally uploads reference image
5. User submits form with client-side validation
6. Server processes submission (API route)
7. Email sent to admin and user confirmation
8. Success message displayed with next steps

### Touch-Friendly Interface

**Design Guidelines:**
- **Tap Targets**: Minimum 44x44px (Apple HIG standard)
- **Spacing**: Minimum 8px between interactive elements
- **Buttons**: Large, clearly labeled, with visual feedback
- **Form Fields**: 
  - Height: Minimum 44px
  - Font size: Minimum 16px (prevents iOS zoom)
  - Clear labels above fields
  - Floating labels or placeholders
- **Navigation**: 
  - Sticky header for easy access
  - Bottom sheet for mobile menus (optional)

### Visual Feedback

**Interactive States:**
- **Hover** (desktop): Subtle scale, shadow, or color change
- **Active/Pressed**: Visual depression or color shift
- **Focus**: Clear focus rings for accessibility
- **Loading**: Skeleton screens or spinners
- **Success**: Green checkmarks, success messages
- **Error**: Red highlights, clear error messages

### Professional Aesthetic

**Design System:**
- **Color Palette**:
  - Primary: Professional blue/teal for tech feel
  - Secondary: Accent color for CTAs
  - Neutral: Grays for text and backgrounds
  - Success: Green for confirmations
  - Error: Red for validation
  
- **Typography**:
  - Headings: Bold, modern sans-serif (Inter, Poppins)
  - Body: Readable sans-serif (Inter, Open Sans)
  - Size scale: 14px-48px with clear hierarchy
  
- **Spacing**:
  - Consistent scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px
  - Generous whitespace for breathing room
  
- **Imagery**:
  - High-quality portfolio photos
  - Consistent lighting and backgrounds
  - Multiple angles for each print

---

## Portfolio Gallery Design

### Grid Layout

**Desktop (1024px+):**
```
┌────────┬────────┬────────┬────────┐
│ Item 1 │ Item 2 │ Item 3 │ Item 4 │
├────────┼────────┼────────┼────────┤
│ Item 5 │ Item 6 │ Item 7 │ Item 8 │
└────────┴────────┴────────┴────────┘
```
- 4-column CSS Grid
- Equal height cards
- 16px gap between items

**Tablet (768px-1023px):**
```
┌────────┬────────┬────────┐
│ Item 1 │ Item 2 │ Item 3 │
├────────┼────────┼────────┤
│ Item 4 │ Item 5 │ Item 6 │
└────────┴────────┴────────┘
```
- 3-column CSS Grid
- Responsive padding
- 12px gap

**Mobile (< 768px):**
```
┌──────────────┐
│   Item 1     │
├──────────────┤
│   Item 2     │
├──────────────┤
│   Item 3     │
└──────────────┘
```
- 1-column layout (or 2-column for compact view)
- Full-width cards
- 8px gap

### Portfolio Card Design

**Card Structure:**
```
┌─────────────────────────┐
│                         │
│    [Portfolio Image]    │
│                         │
├─────────────────────────┤
│ Title: Dragon Figurine  │
│ Material: PLA           │
│ Size: 15cm × 10cm       │
│                         │
│ [View Details →]        │
└─────────────────────────┘
```

**Components:**
- **Image**: 
  - Aspect ratio: 4:3 or 1:1
  - Object-fit: cover
  - Hover: Slight zoom effect
  
- **Title**: 
  - Font: 18px-20px, bold
  - Truncate if too long
  
- **Metadata**:
  - Material, size, date (optional)
  - Icons for visual interest
  
- **Action Button**:
  - "View Details" or "Learn More"
  - Hover effect

### Image Display Features

**Hover Effects (Desktop):**
```css
.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.portfolio-card img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
```

**Lazy Loading:**
- Images load as they scroll into view
- Low-quality placeholder (LQIP) while loading
- Blur-up effect for smooth transition

### Print Details Modal

**Modal Layout:**
```
┌───────────────────────────────────────┐
│ [×]                                   │
│                                       │
│  ┌─────────────┐  Dragon Figurine    │
│  │             │                      │
│  │   Image     │  Material: PLA      │
│  │  Carousel   │  Dimensions: 15×10  │
│  │             │  Print Time: 8hrs   │
│  └─────────────┘  Layer Height: 0.2 │
│                                       │
│  Description:                         │
│  Custom dragon design with intricate  │
│  details and support structures...    │
│                                       │
│  [Request Similar] [Close]            │
└───────────────────────────────────────┘
```

**Features:**
- Image carousel for multiple angles
- Detailed specifications
- Material and settings information
- "Request Similar" CTA button
- Close button or click outside to dismiss

### Categories and Filtering

**Category Tags:**
- Figurines
- Functional Parts
- Decorative Items
- Prototypes
- Custom Designs

**Filter UI:**
```
[All] [Figurines] [Functional] [Decorative] [Prototypes]
```
- Pill-style buttons
- Active state highlighting
- Filter animation

---

## Request Form Design

### Form Layout

```
┌─────────────────────────────────────────┐
│  Request a Custom 3D Print              │
├─────────────────────────────────────────┤
│  Print Title *                          │
│  [________________________]             │
│                                         │
│  Description *                          │
│  [________________________]             │
│  [________________________]             │
│  [________________________]             │
│                                         │
│  Your Name *                            │
│  [________________________]             │
│                                         │
│  Your Email *                           │
│  [________________________]             │
│                                         │
│  Preferred Material (optional)          │
│  [Select Material ▼]                    │
│                                         │
│  Reference Image (optional)             │
│  [Choose File] or [Drag & Drop]         │
│                                         │
│  Additional Notes                       │
│  [________________________]             │
│  [________________________]             │
│                                         │
│  [Submit Request]                       │
└─────────────────────────────────────────┘
```

### Required Fields

**1. Print Title** (Text Input)
- Type: `text`
- Max length: 100 characters
- Validation: Required, min 3 characters
- Example: "Custom phone stand with logo"

**2. Description** (Textarea)
- Type: `textarea`
- Rows: 4-6
- Max length: 1000 characters
- Validation: Required, min 20 characters
- Example: "I need a phone stand that can hold my iPhone 14 Pro..."

**3. Your Name** (Text Input)
- Type: `text`
- Max length: 50 characters
- Validation: Required, min 2 characters
- Example: "John Smith"

**4. Your Email** (Email Input)
- Type: `email`
- Validation: Required, valid email format
- Pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`
- Example: "john.smith@example.com"

### Optional Fields

**5. Preferred Material** (Select Dropdown)
- Type: `select`
- Options:
  - PLA (Most common, biodegradable)
  - ABS (Stronger, heat resistant)
  - PETG (Durable, flexible)
  - TPU (Flexible, rubber-like)
  - Resin (High detail)
  - No preference
- Default: "No preference"

**6. Reference Image** (File Upload)
- Type: `file`
- Accept: `.jpg, .jpeg, .png, .gif, .pdf`
- Max size: 10MB
- Multiple: false (single file)
- Validation: Optional, file type and size check

**7. Additional Notes** (Textarea)
- Type: `textarea`
- Rows: 3
- Max length: 500 characters
- Validation: Optional
- Placeholder: "Any additional details, dimensions, color preferences, etc."

### Form Validation

**Client-Side Validation:**
```typescript
interface RequestFormData {
  title: string;           // min: 3, max: 100
  description: string;     // min: 20, max: 1000
  name: string;           // min: 2, max: 50
  email: string;          // email format
  material?: string;      // optional
  referenceImage?: File;  // optional, max 10MB
  notes?: string;         // optional, max 500
}

const validationRules = {
  title: {
    required: true,
    minLength: 3,
    maxLength: 100,
    message: "Title must be between 3 and 100 characters"
  },
  description: {
    required: true,
    minLength: 20,
    maxLength: 1000,
    message: "Description must be between 20 and 1000 characters"
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    message: "Name must be between 2 and 50 characters"
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address"
  }
};
```

**Server-Side Validation:**
- Duplicate client-side validation on API route
- Sanitize inputs to prevent XSS
- Rate limiting to prevent spam
- File type verification for uploads

### Success and Error States

**Success State:**
```
┌─────────────────────────────────────┐
│  ✓ Request Submitted Successfully! │
│                                     │
│  Thank you! We've received your     │
│  request for: "Custom phone stand"  │
│                                     │
│  You'll receive a confirmation      │
│  email at john@example.com shortly. │
│                                     │
│  We'll review your request and      │
│  contact you within 24-48 hours.    │
│                                     │
│  [View Portfolio] [New Request]     │
└─────────────────────────────────────┘
```

**Error State:**
```
┌─────────────────────────────────────┐
│  ✗ Submission Failed                │
│                                     │
│  We couldn't submit your request.   │
│  Please check the errors below:     │
│                                     │
│  • Email field is required          │
│  • Description must be at least     │
│    20 characters                    │
│                                     │
│  [Try Again]                        │
└─────────────────────────────────────┘
```

**Field-Level Errors:**
```
Email Address *
[invalid-email@]
⚠️ Please enter a valid email address
```

### Mobile Optimization

**Touch-Friendly Inputs:**
- Input height: 48px minimum
- Font size: 16px (prevents iOS zoom)
- Clear tap targets for file upload
- Native date/number pickers where applicable

**Keyboard Optimization:**
- Email fields trigger email keyboard
- Number fields trigger numeric keyboard
- Proper `inputMode` attributes

**Form Behavior:**
- Scroll to first error on submit
- Auto-focus on page load (optional)
- Save form state in session (optional)

---

## File Structure and Organization

### Complete Directory Structure

```
/home/runner/work/DesignByKennySite/DesignByKennySite/
├── app/
│   ├── layout.tsx                 # Root layout with Navigation
│   ├── page.tsx                   # Portfolio gallery homepage
│   ├── globals.css                # Global styles, Tailwind imports
│   ├── request/
│   │   └── page.tsx              # Request form page
│   ├── api/
│   │   └── submit-request/
│   │       └── route.ts          # POST handler for form submissions
│   └── fonts/                     # Custom fonts (optional)
│
├── components/
│   ├── Navigation.tsx             # Header navigation component
│   ├── MobileNav.tsx             # Mobile hamburger menu
│   ├── Gallery.tsx               # Portfolio grid display
│   ├── PortfolioCard.tsx         # Individual portfolio item card
│   ├── PortfolioModal.tsx        # Enlarged view modal
│   ├── RequestForm.tsx           # Request form component
│   ├── FormField.tsx             # Reusable form input component
│   ├── FileUpload.tsx            # Image upload component
│   ├── Button.tsx                # Reusable button component
│   ├── Footer.tsx                # Footer component (optional)
│   └── LoadingSpinner.tsx        # Loading state component
│
├── lib/
│   ├── types.ts                  # TypeScript type definitions
│   ├── data.ts                   # Sample portfolio data
│   ├── validation.ts             # Form validation utilities
│   ├── email.ts                  # Email sending utilities
│   ├── constants.ts              # App-wide constants
│   └── utils.ts                  # Utility functions
│
├── public/
│   ├── images/
│   │   ├── portfolio/           # Portfolio item images
│   │   │   ├── dragon-01.jpg
│   │   │   ├── phone-stand-01.jpg
│   │   │   └── ...
│   │   └── logo.svg             # Site logo
│   ├── favicon.ico
│   └── robots.txt
│
├── styles/                       # Additional CSS if needed
│   └── components.css           # Component-specific styles
│
├── .env.local                    # Environment variables (gitignored)
├── .env.example                  # Example env file template
├── .gitignore                    # Git ignore rules
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── vercel.json                  # Vercel deployment config (optional)
└── README.md                     # Project documentation
```

### Key File Descriptions

**app/layout.tsx** - Root Layout
```typescript
// Defines app-wide layout with navigation
// Includes fonts, metadata, and global providers
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

**app/page.tsx** - Portfolio Homepage
```typescript
// Main landing page with portfolio gallery
import Gallery from '@/components/Gallery'
import { portfolioItems } from '@/lib/data'

export default function Home() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Gallery items={portfolioItems} />
    </div>
  )
}
```

**app/request/page.tsx** - Request Form Page
```typescript
// Request submission page
import RequestForm from '@/components/RequestForm'

export default function RequestPage() {
  return (
    <div>
      <h1>Request a Custom Print</h1>
      <RequestForm />
    </div>
  )
}
```

**app/api/submit-request/route.ts** - API Handler
```typescript
// POST endpoint for form submissions
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import { validateRequest } from '@/lib/validation'

export async function POST(request: NextRequest) {
  const data = await request.json()
  const validation = validateRequest(data)
  
  if (!validation.valid) {
    return NextResponse.json(
      { error: validation.errors },
      { status: 400 }
    )
  }
  
  await sendEmail(data)
  
  return NextResponse.json({ success: true })
}
```

**components/Navigation.tsx**
```typescript
// Main navigation component
// Responsive with mobile menu
export default function Navigation() {
  return (
    <nav>
      <Logo />
      <DesktopMenu />
      <MobileMenu />
    </nav>
  )
}
```

**lib/types.ts** - Type Definitions
```typescript
// All TypeScript interfaces and types
export interface PortfolioItem {
  id: string
  title: string
  description: string
  images: string[]
  material: string
  dimensions: string
  printTime?: string
  category: string
  date: string
}

export interface RequestFormData {
  title: string
  description: string
  name: string
  email: string
  material?: string
  referenceImage?: File
  notes?: string
}
```

**lib/data.ts** - Sample Data
```typescript
// Portfolio items data
// In production, this would come from a CMS or database
export const portfolioItems: PortfolioItem[] = [...]
```

---

## Responsive Design Specifications

### Breakpoint Strategy

**Mobile-First Approach:**
```css
/* Default: Mobile (320px - 767px) */
.container {
  padding: 16px;
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
}
```

**Tailwind Breakpoints:**
```javascript
// tailwind.config.ts
export default {
  theme: {
    screens: {
      'sm': '640px',   // Small tablets
      'md': '768px',   // Tablets
      'lg': '1024px',  // Laptops
      'xl': '1280px',  // Desktops
      '2xl': '1536px', // Large screens
    }
  }
}
```

### Mobile (320px - 767px)

**Layout:**
- Single column layout
- Full-width components
- Stacked navigation
- Touch-optimized spacing

**Gallery Grid:**
```css
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
}

/* Optional: 2-column compact view */
@media (min-width: 480px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
```

**Typography:**
- Base font: 14px
- H1: 24px-28px
- H2: 20px-22px
- H3: 18px
- Line height: 1.5

**Touch Targets:**
- Minimum size: 44x44px
- Spacing between: 8px minimum
- Button height: 48px
- Input height: 48px

**Navigation:**
```
┌─────────────────────────┐
│ [☰]  Logo      [CTA]    │
└─────────────────────────┘
```
- Hamburger menu
- Fixed or sticky header
- Slide-in drawer menu

### Tablet (768px - 1023px)

**Layout:**
- Two-column layout for gallery
- Wider containers (max-width: 720px)
- Side-by-side form layout (optional)

**Gallery Grid:**
```css
.gallery {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 24px;
}

/* 3-column for landscape */
@media (min-width: 768px) and (orientation: landscape) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Typography:**
- Base font: 15px
- H1: 32px-36px
- H2: 24px-28px
- H3: 20px

**Navigation:**
```
┌─────────────────────────────────┐
│ Logo    Portfolio  |  Request   │
└─────────────────────────────────┘
```
- Full horizontal nav
- Hover states active

### Desktop (1024px+)

**Layout:**
- Multi-column layout (3-4 columns)
- Centered container (max-width: 1200px)
- Two-column form (labels left, inputs right)

**Gallery Grid:**
```css
.gallery {
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 32px;
}

/* 3-column for medium desktop */
@media (min-width: 1024px) and (max-width: 1279px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Typography:**
- Base font: 16px
- H1: 40px-48px
- H2: 32px-36px
- H3: 24px

**Navigation:**
```
┌───────────────────────────────────────┐
│ Logo         Portfolio  |  Request   │
└───────────────────────────────────────┘
```
- Full horizontal nav
- Hover effects and transitions
- Sticky on scroll (optional)

### Component-Specific Responsive Patterns

**Portfolio Card:**
```tsx
<div className="
  w-full                    /* Mobile: full width */
  md:w-1/2                  /* Tablet: half width */
  lg:w-1/3                  /* Desktop: third width */
  xl:w-1/4                  /* Large: quarter width */
  p-4                       /* Mobile padding */
  md:p-6                    /* Tablet padding */
">
  <img className="
    aspect-square             /* 1:1 ratio */
    md:aspect-[4/3]          /* Tablet: 4:3 ratio */
    object-cover
  " />
</div>
```

**Form Layout:**
```tsx
<form className="
  grid
  grid-cols-1               /* Mobile: single column */
  md:grid-cols-2           /* Tablet: two columns */
  gap-4                    /* Mobile gap */
  md:gap-6                 /* Tablet gap */
">
  <input className="
    h-12                    /* Mobile height */
    md:h-14                 /* Tablet height */
    text-base               /* Base font size */
    md:text-lg              /* Larger on tablet */
  " />
</form>
```

**Modal:**
```tsx
<div className="
  fixed inset-0             /* Full screen */
  p-4                       /* Mobile padding */
  md:p-8                    /* Tablet padding */
">
  <div className="
    w-full                  /* Mobile: full width */
    md:max-w-2xl           /* Tablet: limited width */
    lg:max-w-4xl           /* Desktop: larger */
    mx-auto                /* Center horizontally */
    max-h-screen           /* Don't exceed viewport */
    overflow-y-auto        /* Scroll if needed */
  ">
    {/* Modal content */}
  </div>
</div>
```

### Accessibility Considerations

**Focus Management:**
- Visible focus indicators on all interactive elements
- Skip to main content link
- Proper tab order

**Keyboard Navigation:**
- All features accessible via keyboard
- Modal trapping (Esc to close, Tab to cycle)
- Arrow keys for gallery navigation (optional)

**Screen Reader Support:**
- Semantic HTML elements
- ARIA labels where needed
- Alt text for all images
- Form labels properly associated

---

## Performance Optimization

### Core Web Vitals Targets

**Largest Contentful Paint (LCP): < 2.5 seconds**
- Hero image or largest gallery image should load quickly
- Use Next.js Image with priority prop for above-fold images
- Optimize image sizes and formats

**First Input Delay (FID): < 100 milliseconds**
- Minimize JavaScript execution time
- Use server components where possible
- Defer non-critical scripts

**Cumulative Layout Shift (CLS): < 0.1**
- Set explicit width/height on images
- Reserve space for dynamic content
- Use aspect-ratio CSS property

### Image Optimization Strategy

**Next.js Image Component:**
```tsx
import Image from 'next/image'

<Image
  src="/images/portfolio/dragon.jpg"
  alt="Dragon figurine"
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  loading="lazy"  // or "eager" for above-fold
  quality={85}    // 75-85 is optimal
/>
```

**Image Formats:**
- Serve WebP with JPEG fallback
- Use AVIF for modern browsers (Next.js automatic)
- Compress images before upload (TinyPNG, ImageOptim)

**Responsive Images:**
```tsx
// Different sizes for different viewports
sizes="(max-width: 640px) 100vw,
       (max-width: 1024px) 50vw,
       33vw"
```

**Lazy Loading:**
- Images below fold: `loading="lazy"`
- Images above fold: `loading="eager"` or `priority={true}`

### Bundle Size Optimization

**Code Splitting:**
```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const PortfolioModal = dynamic(() => import('@/components/PortfolioModal'), {
  loading: () => <LoadingSpinner />,
  ssr: false  // Client-side only if needed
})
```

**Tree Shaking:**
- Import only needed functions: `import { useState } from 'react'`
- Avoid importing entire libraries
- Use named imports from lodash-es

**Dependency Audit:**
```bash
# Analyze bundle size
npm run build
# Use bundle analyzer
npm install @next/bundle-analyzer
```

**Target Bundle Sizes:**
- First Load JS: < 100 KB
- Total page weight: < 500 KB (without images)

### Caching Strategy

**Static Generation:**
```tsx
// Generate static pages at build time
export const dynamic = 'force-static'

// Or with revalidation
export const revalidate = 3600  // Revalidate every hour
```

**API Route Caching:**
```tsx
export async function GET() {
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  })
}
```

**Image Caching:**
- Next.js automatically caches optimized images
- CDN caching via Vercel
- Browser caching with appropriate headers

### Font Loading Optimization

**next/font:**
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',  // Prevent FOIT
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

**Font Loading Strategy:**
- Use `font-display: swap` to prevent invisible text
- Subset fonts to include only needed characters
- Preload critical fonts

### Performance Monitoring

**Vercel Analytics:**
```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Web Vitals Tracking:**
```tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Performance Checklist

- [ ] Images optimized and lazy-loaded
- [ ] Critical CSS inlined
- [ ] JavaScript code-split and deferred
- [ ] Fonts optimized with font-display: swap
- [ ] Static pages pre-generated where possible
- [ ] API responses cached appropriately
- [ ] Third-party scripts loaded asynchronously
- [ ] No render-blocking resources
- [ ] Service worker for offline support (optional)
- [ ] Compression enabled (Gzip/Brotli via Vercel)

---

## Email Integration Strategy

### Option 1: EmailJS (Client-Side)

**Pros:**
- No backend required
- Free tier available (200 emails/month)
- Simple setup
- Works with client components

**Cons:**
- API key exposed in client
- Less secure
- Limited customization
- Rate limiting in free tier

**Setup:**
```tsx
// components/RequestForm.tsx
import emailjs from '@emailjs/browser'

const sendEmail = async (formData: RequestFormData) => {
  try {
    const result = await emailjs.send(
      'service_id',      // From EmailJS dashboard
      'template_id',     // Email template ID
      {
        title: formData.title,
        description: formData.description,
        name: formData.name,
        email: formData.email,
        material: formData.material,
        notes: formData.notes,
      },
      'public_key'       // Public key from EmailJS
    )
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}
```

**Environment Variables:**
```env
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx
```

### Option 2: Next.js API Routes (Server-Side) - Recommended

**Pros:**
- More secure (API keys on server)
- Full control over email content
- Better error handling
- Can save to database
- No client-side rate limits

**Cons:**
- Requires email service setup
- Slightly more complex

**Setup with Resend (Modern Email API):**
```tsx
// app/api/submit-request/route.ts
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Send email to admin
    await resend.emails.send({
      from: 'requests@designbykenny.com',
      to: 'admin@designbykenny.com',
      subject: `New Print Request: ${data.title}`,
      html: `
        <h2>New Custom Print Request</h2>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Material:</strong> ${data.material || 'No preference'}</p>
        <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
      `
    })
    
    // Send confirmation to user
    await resend.emails.send({
      from: 'noreply@designbykenny.com',
      to: data.email,
      subject: 'Print Request Received',
      html: `
        <h2>Thank you for your request!</h2>
        <p>We've received your request for: <strong>${data.title}</strong></p>
        <p>We'll review your request and get back to you within 24-48 hours.</p>
      `
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
```

**Environment Variables:**
```env
# .env.local
RESEND_API_KEY=re_xxx
```

### Email Templates

**Admin Notification Template:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #4F46E5; color: white; padding: 20px; }
    .content { padding: 20px; background: #f9fafb; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #374151; }
    .value { color: #1f2937; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Print Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Print Title:</span>
        <span class="value">{{title}}</span>
      </div>
      <div class="field">
        <span class="label">Description:</span>
        <p class="value">{{description}}</p>
      </div>
      <div class="field">
        <span class="label">Customer Name:</span>
        <span class="value">{{name}}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">{{email}}</span>
      </div>
      <div class="field">
        <span class="label">Preferred Material:</span>
        <span class="value">{{material}}</span>
      </div>
      <div class="field">
        <span class="label">Additional Notes:</span>
        <p class="value">{{notes}}</p>
      </div>
    </div>
  </div>
</body>
</html>
```

**User Confirmation Template:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #4F46E5; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .button { 
      background: #4F46E5; 
      color: white; 
      padding: 12px 24px; 
      text-decoration: none;
      border-radius: 6px;
      display: inline-block;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Request Received!</h1>
    </div>
    <div class="content">
      <p>Hi {{name}},</p>
      <p>Thank you for your custom print request: <strong>{{title}}</strong></p>
      <p>We've received your request and will review it carefully. Here's what happens next:</p>
      <ol>
        <li>We'll review your specifications within 24-48 hours</li>
        <li>We'll contact you at {{email}} with a quote and timeline</li>
        <li>Once approved, we'll begin printing your custom item</li>
      </ol>
      <p>If you have any questions in the meantime, feel free to reply to this email.</p>
      <a href="https://designbykenny.com" class="button">View Portfolio</a>
      <p>Best regards,<br>Design by Kenny Team</p>
    </div>
  </div>
</body>
</html>
```

### Error Handling

**Retry Mechanism:**
```tsx
async function sendEmailWithRetry(data: RequestFormData, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const result = await sendEmail(data)
      if (result.success) return result
    } catch (error) {
      if (i === maxRetries - 1) throw error
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
}
```

**Graceful Failure:**
```tsx
try {
  await sendEmail(formData)
  setStatus('success')
} catch (error) {
  setStatus('error')
  // Log error for debugging
  console.error('Email send failed:', error)
  // Show user-friendly message
  setErrorMessage('Unable to send request. Please try again or contact us directly.')
}
```

### Rate Limiting

**API Route Protection:**
```tsx
// lib/rate-limit.ts
import { LRUCache } from 'lru-cache'

const rateLimit = new LRUCache({
  max: 500,
  ttl: 60000, // 1 minute
})

export function checkRateLimit(ip: string): boolean {
  const requests = rateLimit.get(ip) || 0
  if (requests >= 5) return false  // Max 5 requests per minute
  
  rateLimit.set(ip, requests + 1)
  return true
}

// In API route:
const ip = request.headers.get('x-forwarded-for') || 'unknown'
if (!checkRateLimit(ip)) {
  return NextResponse.json(
    { error: 'Too many requests' },
    { status: 429 }
  )
}
```

---

_Continue to next section..._
