# Deployment and Configuration Guide

## Table of Contents
1. [Vercel Deployment](#vercel-deployment)
2. [Environment Variables](#environment-variables)
3. [Domain Configuration](#domain-configuration)
4. [SSL and Security](#ssl-and-security)
5. [Build Configuration](#build-configuration)
6. [Continuous Integration](#continuous-integration)
7. [Monitoring and Analytics](#monitoring-and-analytics)

---

## Vercel Deployment

### Initial Setup

**1. Connect Repository:**
```bash
# Install Vercel CLI (optional, can also use web UI)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel
```

**2. Web UI Setup:**
- Go to https://vercel.com
- Click "Add New Project"
- Import Git Repository
- Select `kmsull/DesignByKennySite`
- Configure project settings (see below)
- Click "Deploy"

### Project Configuration

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "s-maxage=0"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

### Build Settings

**Framework Preset:** Next.js

**Build Command:**
```bash
npm run build
# or
next build
```

**Output Directory:** 
- `.next` (automatic for Next.js)

**Install Command:**
```bash
npm install
# or
npm ci  # For consistent installs
```

**Development Command:**
```bash
npm run dev
```

### Deployment Branches

**Production Branch:** `main`
- Deploys to: `designbykenny.com`
- Automatic deployment on push
- Production environment variables

**Preview Branches:** All other branches
- Deploys to: `branch-name.vercel.app`
- Automatic preview URLs
- Development environment variables

**Pull Request Previews:**
- Every PR gets a unique preview URL
- Comment posted on PR with preview link
- Isolated environment for testing

---

## Environment Variables

### Required Variables

**.env.local** (Development):
```env
# Email Service (choose one)
# Option 1: EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx

# Option 2: Resend (Recommended)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_EMAIL=admin@designbykenny.com

# Optional: Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**.env.production** (Production):
```env
# Email Service
RESEND_API_KEY=re_prod_xxxxxxxxxxxxxxxxxx

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://designbykenny.com
NEXT_PUBLIC_ADMIN_EMAIL=admin@designbykenny.com

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**.env.example** (Template for team):
```env
# Email Service Configuration
# Choose either EmailJS or Resend

# EmailJS (Client-side)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Resend (Server-side - Recommended)
RESEND_API_KEY=your_resend_api_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_EMAIL=your_admin_email@example.com

# Optional Services
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_google_analytics_id
```

### Adding Variables to Vercel

**Via Web UI:**
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - Key: Variable name (e.g., `RESEND_API_KEY`)
   - Value: Variable value
   - Environment: Production, Preview, Development
4. Save changes
5. Redeploy to apply changes

**Via CLI:**
```bash
# Add production variable
vercel env add RESEND_API_KEY production

# Add preview variable
vercel env add RESEND_API_KEY preview

# Pull environment variables locally
vercel env pull
```

### Security Best Practices

**Naming Convention:**
- Public (client-side) variables: `NEXT_PUBLIC_*`
- Private (server-side) variables: No prefix

**Never Commit:**
- `.env.local`
- `.env.production`
- Any file with actual secrets

**Always Commit:**
- `.env.example` (with placeholder values)

**.gitignore:**
```gitignore
# Environment variables
.env
.env.local
.env.development
.env.production
.env*.local

# Vercel
.vercel
```

---

## Domain Configuration

### Custom Domain Setup

**1. Add Domain in Vercel:**
- Project Settings → Domains
- Enter domain: `designbykenny.com`
- Click "Add"

**2. DNS Configuration:**

**Option A: Vercel Nameservers (Recommended)**
```
Update nameservers at your registrar:
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: CNAME Record**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Option C: A Record**
```
Type: A
Name: @
Value: 76.76.21.21
```

**3. WWW Redirect:**
- Add both `designbykenny.com` and `www.designbykenny.com`
- Set primary domain (redirects will be automatic)

### Subdomain Configuration

**For staging environment:**
```
Type: CNAME
Name: staging
Value: cname.vercel-dns.com
```

**For API subdomain:**
```
Type: CNAME
Name: api
Value: cname.vercel-dns.com
```

---

## SSL and Security

### SSL Certificate

**Automatic SSL:**
- Vercel provides automatic SSL via Let's Encrypt
- Auto-renewal every 90 days
- No configuration needed

**Custom Certificate:**
- Enterprise plan only
- Upload via Project Settings → SSL

### Security Headers

**Next.js Configuration:**
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
```

### Content Security Policy

**CSP Header:**
```javascript
// next.config.js
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-insights.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          }
        ]
      }
    ]
  }
}
```

### HTTPS Enforcement

**Automatic HTTPS Redirect:**
- Vercel automatically redirects HTTP to HTTPS
- No configuration needed

**Force HTTPS in Code:**
```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Force HTTPS in production
  if (
    process.env.NODE_ENV === 'production' &&
    request.headers.get('x-forwarded-proto') !== 'https'
  ) {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
      301
    )
  }
}
```

### Form Security

**CSRF Protection:**
```typescript
// lib/csrf.ts
import { randomBytes } from 'crypto'

export function generateToken(): string {
  return randomBytes(32).toString('hex')
}

export function verifyToken(token: string, storedToken: string): boolean {
  return token === storedToken
}
```

**Input Sanitization:**
```typescript
// lib/sanitize.ts
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .slice(0, 1000) // Limit length
}
```

---

## Build Configuration

### Next.js Configuration

**next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
    ],
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

### TypeScript Configuration

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Tailwind Configuration

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
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
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

### Package Scripts

**package.json:**
```json
{
  "name": "designbykenny-site",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "format:check": "prettier --check \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "analyze": "ANALYZE=true next build"
  }
}
```

---

## Continuous Integration

### GitHub Actions Workflow

**.github/workflows/ci.yml:**
```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  lint-and-type-check:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run ESLint
        run: npm run lint
      
      - name: Type check
        run: npm run type-check
      
      - name: Format check
        run: npm run format:check
  
  build:
    runs-on: ubuntu-latest
    needs: lint-and-type-check
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: https://designbykenny.com
```

### Pre-commit Hooks

**husky + lint-staged:**

```json
// package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

**.husky/pre-commit:**
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

---

## Monitoring and Analytics

### Vercel Analytics

**Setup:**
```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

**Metrics Tracked:**
- Page views
- Unique visitors
- Top pages
- Referrers
- Devices and browsers
- Core Web Vitals

### Google Analytics

**Setup with GA4:**
```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  
  return (
    <html lang="en">
      <head>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Error Tracking

**Sentry Integration:**
```bash
npm install @sentry/nextjs
```

**sentry.client.config.ts:**
```typescript
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
})
```

### Uptime Monitoring

**Options:**
- Vercel Pro: Built-in uptime monitoring
- UptimeRobot: Free external monitoring
- Pingdom: Comprehensive monitoring
- Better Uptime: Modern uptime monitoring

---

## Deployment Checklist

### Pre-Launch

- [ ] Environment variables configured
- [ ] Domain and DNS configured
- [ ] SSL certificate active
- [ ] Security headers implemented
- [ ] Analytics configured
- [ ] Error tracking setup
- [ ] Performance optimized (Lighthouse score > 90)
- [ ] Mobile testing complete
- [ ] Cross-browser testing complete
- [ ] Forms tested end-to-end
- [ ] Email delivery verified
- [ ] 404 page implemented
- [ ] SEO meta tags added
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Favicon and app icons added

### Post-Launch

- [ ] Monitor error rates
- [ ] Check analytics data
- [ ] Verify email delivery
- [ ] Monitor Core Web Vitals
- [ ] Review user feedback
- [ ] Check mobile performance
- [ ] Monitor server logs
- [ ] Backup configuration

### Maintenance

- [ ] Weekly dependency updates
- [ ] Monthly security audit
- [ ] Quarterly performance review
- [ ] Annual tech stack evaluation
