# Jagrik Foundation - Donation Website

A modern, fully animated 3D donation website focused on supporting dogs and mental health initiatives. Built with Next.js, React Three Fiber, and Framer Motion.

## 🌐 Live Website

**Visit the live website:** [https://jagrik-foundation-website.vercel.app](https://jagrik-foundation-website.vercel.app)

## Features

- 🎨 **Modern UI/UX** - Beautiful, professional design with smooth animations
- ✨ **Interactive Visuals** - Elegant animated visual components with floating icons
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ✨ **Smooth Animations** - Powered by Framer Motion and GSAP
- 💳 **Donation Interface** - User-friendly donation form with preset amounts
- 📊 **Impact Statistics** - Animated counters showing real impact
- 💬 **Testimonials** - Carousel of success stories
- 🚀 **Production Ready** - Optimized for performance and SEO

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber, Three.js, @react-three/drei
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section with visual component
│   ├── EnhancedVisual.tsx # Animated visual component with heart and icons
│   ├── About.tsx        # About/Mission section
│   ├── Impact.tsx       # Impact statistics
│   ├── Donation.tsx     # Donation form
│   ├── Stories.tsx      # Testimonials carousel
│   └── Footer.tsx       # Footer component
└── public/              # Static assets
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Content
Update the content in each component file to match your organization's information.

### Payment Integration
The donation form currently shows a placeholder. To integrate real payments:
1. Set up a payment provider (Stripe, PayPal, etc.)
2. Create API routes in `app/api/`
3. Update the `handleDonate` function in `components/Donation.tsx`

## License

This project is open source and available for use.

## Support

For questions or support, please contact your development team.

