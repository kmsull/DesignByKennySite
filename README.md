# Design By Kenny - 3D Print Portfolio Website

A professional portfolio website for showcasing 3D prints and accepting custom print requests. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Responsive Portfolio Gallery**: Beautiful grid layout showcasing 3D print projects
- **Modal/Lightbox View**: Detailed view of each print with specifications
- **Custom Request Form**: Users can submit custom 3D print requests with validation
- **Email Integration**: Form submissions ready for email integration (EmailJS or custom API)
- **Mobile-First Design**: Optimized for mobile devices and QR code access
- **SEO Optimized**: Meta tags and proper semantic HTML
- **Image Optimization**: Next.js Image component for fast loading

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: EmailJS ready (optional configuration)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kmsull/DesignByKennySite.git
cd DesignByKennySite
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure email integration:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your EmailJS credentials or email service details.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── submit-request/     # API route for form submissions
│   ├── request/
│   │   ├── success/            # Success confirmation page
│   │   └── page.tsx            # Request form page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with navigation
│   └── page.tsx                # Portfolio homepage
├── components/
│   ├── Footer.tsx              # Footer component
│   ├── Gallery.tsx             # Portfolio gallery with modal
│   ├── Navigation.tsx          # Header navigation with mobile menu
│   └── RequestForm.tsx         # Request form with validation
├── lib/
│   └── portfolioData.ts        # Sample portfolio items data
└── public/
    └── images/                 # Static images
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding Portfolio Items

Edit `lib/portfolioData.ts` to add or modify portfolio items:

```typescript
{
  id: 'unique-id',
  title: 'Print Title',
  description: 'Detailed description',
  image: 'image-url',
  material: 'PLA/PETG/etc',
  size: 'Dimensions',
  category: 'Category',
  printTime: 'Estimated time'
}
```

### Email Integration

To enable email functionality:

1. Sign up for [EmailJS](https://www.emailjs.com/) or use your preferred email service
2. Update environment variables in `.env.local`
3. Uncomment and configure the email code in `app/api/submit-request/route.ts`

### Styling

The site uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global CSS variables
- Individual components - Component-specific styles

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables if using email integration
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Build command: `npm run build`
Output directory: `.next`

## Environment Variables

For production deployment, set these environment variables (if using email):

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` - EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` - EmailJS public key
- `RECIPIENT_EMAIL` - Email address to receive requests

## Mobile QR Code Access

The site is optimized for mobile access via QR codes. Features include:
- Fast loading times
- Touch-friendly interface
- Mobile-optimized forms
- Responsive images

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on GitHub.