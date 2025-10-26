# Design by Kenny - 3D Print Portfolio Website

## 📋 Overview

A modern, mobile-first portfolio website for showcasing 3D prints and accepting custom print requests. Optimized for QR code access in a work lab environment with a focus on performance, usability, and professional design.

### Key Features

- **Portfolio Gallery**: Responsive grid layout showcasing 3D print projects
- **Custom Request Form**: Easy-to-use form for submitting custom print requests
- **Mobile-First Design**: Optimized for QR code scanning and mobile devices
- **Email Integration**: Automated notifications for requests
- **Performance Optimized**: Fast loading with Next.js and optimized images

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Email**: Resend or EmailJS
- **Image Optimization**: Next.js Image component

---

## 📚 Documentation

This repository contains comprehensive design documentation for implementing the 3D print portfolio website. All documentation is organized into focused files:

### Core Documentation

1. **[DESIGN.md](./DESIGN.md)** - Complete design specification
   - Technology stack justification
   - Site architecture and navigation
   - User experience design
   - Portfolio gallery design
   - Request form design
   - File structure and organization
   - Responsive design specifications
   - Performance considerations
   - Email integration strategy

2. **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment and configuration guide
   - Vercel deployment setup
   - Environment variables
   - Domain configuration
   - SSL and security
   - Build configuration
   - Continuous integration
   - Monitoring and analytics

3. **[SAMPLE-DATA.md](./SAMPLE-DATA.md)** - Data structures and schemas
   - TypeScript type definitions
   - Portfolio data models
   - Request form schemas
   - Sample portfolio data
   - Email templates
   - API response schemas
   - Validation schemas

4. **[USER-FLOWS.md](./USER-FLOWS.md)** - User flows and wireframes
   - User flow diagrams
   - Mobile wireframes
   - Desktop wireframes
   - Interaction patterns
   - Navigation flows
   - Form workflows

5. **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** - Implementation guide
   - Project setup instructions
   - Component implementation order
   - Development workflow
   - Testing strategy
   - Performance optimization
   - Deployment process

6. **[FUTURE-ENHANCEMENTS.md](./FUTURE-ENHANCEMENTS.md)** - Future roadmap
   - Admin dashboard
   - Content management system
   - Payment integration
   - User accounts
   - 3D model viewer
   - Marketplace features
   - Priority matrix

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/kmsull/DesignByKennySite.git
cd DesignByKennySite

# Initialize Next.js project (when ready to implement)
npx create-next-app@latest . --typescript --tailwind --app --eslint

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env.local

# Configure your environment variables
# Edit .env.local with your API keys

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

---

## 📖 Implementation Phases

### Phase 1: Core Structure (Week 1)
- Layout and navigation
- Type definitions and data
- Portfolio gallery

### Phase 2: Interactive Features (Week 2)
- Portfolio details modal
- Filtering and search
- Gallery polish

### Phase 3: Request Form (Week 3)
- Form structure
- Form validation
- Form submission and email

### Phase 4: Email & Polish (Week 4)
- Email integration
- Performance optimization
- Final polish and testing

**See [IMPLEMENTATION.md](./IMPLEMENTATION.md) for detailed implementation timeline.**

---

## 🎨 Design Principles

### Mobile-First
- Optimized for QR code access
- Touch-friendly interface
- Responsive design from 320px to 1920px+

### Performance
- Core Web Vitals targets:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- Optimized images with WebP/AVIF
- Code splitting and lazy loading

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Semantic HTML

### Professional Aesthetic
- Clean, modern design
- Consistent spacing and typography
- High-quality imagery
- Smooth animations and transitions

---

## 📁 Project Structure

```
/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Portfolio homepage
│   ├── request/             # Request form page
│   └── api/                 # API routes
├── components/              # React components
│   ├── Navigation.tsx
│   ├── Gallery.tsx
│   ├── PortfolioCard.tsx
│   ├── RequestForm.tsx
│   └── ...
├── lib/                     # Utilities and types
│   ├── types.ts
│   ├── data.ts
│   ├── validation.ts
│   └── email.ts
├── public/                  # Static assets
│   └── images/
├── docs/                    # Documentation
│   ├── DESIGN.md
│   ├── DEPLOYMENT.md
│   ├── SAMPLE-DATA.md
│   ├── USER-FLOWS.md
│   ├── IMPLEMENTATION.md
│   └── FUTURE-ENHANCEMENTS.md
└── README.md
```

---

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Format code
npm run format
```

### Code Quality

- **ESLint**: Code linting and standards
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Husky**: Pre-commit hooks (optional)

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide.**

### Environment Variables

Required environment variables:

```env
# Email Service
RESEND_API_KEY=your_api_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ADMIN_EMAIL=admin@yourdomain.com
```

---

## 📊 Features Roadmap

### ✅ Phase 1 (MVP)
- Portfolio gallery
- Request form
- Email notifications
- Responsive design
- Mobile optimization

### 🔄 Phase 2 (Enhancement)
- Admin dashboard
- Request status tracking
- Content management system
- SEO improvements

### 🔮 Phase 3 (Advanced)
- Payment integration
- User accounts
- Review system
- 3D model viewer

**See [FUTURE-ENHANCEMENTS.md](./FUTURE-ENHANCEMENTS.md) for complete roadmap.**

---

## 🤝 Contributing

This is a design documentation repository. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project documentation is provided as-is for the Design by Kenny portfolio website.

---

## 📞 Contact

For questions or support regarding this documentation:

- **Project**: Design by Kenny 3D Print Portfolio
- **Repository**: [github.com/kmsull/DesignByKennySite](https://github.com/kmsull/DesignByKennySite)

---

## 🙏 Acknowledgments

- **Next.js**: React framework for production
- **Vercel**: Deployment platform
- **Tailwind CSS**: Utility-first CSS framework
- **Resend**: Modern email API

---

## 📝 Documentation Index

| Document | Description | Key Topics |
|----------|-------------|------------|
| [DESIGN.md](./DESIGN.md) | Complete design specification | Architecture, UX, Components |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deployment guide | Vercel, SSL, CI/CD |
| [SAMPLE-DATA.md](./SAMPLE-DATA.md) | Data structures | Types, Schemas, Templates |
| [USER-FLOWS.md](./USER-FLOWS.md) | User flows and wireframes | Flows, Wireframes, Interactions |
| [IMPLEMENTATION.md](./IMPLEMENTATION.md) | Implementation guide | Setup, Timeline, Testing |
| [FUTURE-ENHANCEMENTS.md](./FUTURE-ENHANCEMENTS.md) | Future roadmap | Features, Integrations, Costs |

---

**Version**: 1.0.0  
**Last Updated**: January 2024  
**Status**: Design Documentation Complete