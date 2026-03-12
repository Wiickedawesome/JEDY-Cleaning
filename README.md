# JEDY Cleaning Website

A modern, professional website for a cleaning business built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Design Philosophy

The website combines modern development practices with a warm, charming aesthetic that feels inviting and trustworthy—perfect for a family cleaning business.

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with app router and server components
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom color palette
- **Custom Design System** - Warm colors (cream, sage, terracotta)

### Development Tools
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **GitHub Actions** - CI/CD pipeline

### Deployment
- **GitHub Pages** - Static hosting behind GitHub's CDN
- **GitHub Actions** - Automated CI/CD pipeline

## 🌐 Live Site

**Production:** https://jedycleaning.us/

The JEDY Cleaning website is live and automatically deploys when you push to the `Website` branch!

## 📁 Project Structure

```
jedy-cleaning/
├── app/
│   ├── components/         # Reusable React components
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy page
│   ├── services/           # Services page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── .github/workflows/      # CI/CD pipelines
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── .eslintrc.cjs
└── .prettierrc
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking
```

## 🎨 Design System

### Color Palette

**Cream** - Warm, inviting background
- cream-50: `#FFFBF5`
- cream-100: `#FFF8F0`

**Brand** - Warm, approachable accents
- brand-pink: `#A85070`
- brand-mauve: `#AEA4B3`
- brand-lavender: `#C3B6C9`

### Typography

- **Headings**: Space Grotesk
- **Body**: Plus Jakarta Sans

## 📄 Pages

- **Home** - Hero section with services overview
- **Services** - Detailed service offerings
- **About** - Company story and team
- **Contact** - Contact form and information

## 🔐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://jedycleaning.us
NEXT_PUBLIC_SITE_NAME=JEDY Cleaning
```

## 📊 Analytics & SEO

- Google Analytics 4 installed
- Meta tags optimization
- Sitemap generation
- Structured data (Schema.org)
- Open Graph integration
- Lead event tracking for phone clicks, email clicks, and form submissions

## 🚢 Deployment

### GitHub Pages

The website is deployed to GitHub Pages with automatic CI/CD via GitHub Actions.

**Live URL:** https://jedycleaning.us/

**How it works:**
1. Push code to the `Website` branch
2. GitHub Actions builds the static export into the `out` directory
3. The Pages workflow publishes that export to GitHub Pages
4. DNS maps the custom domain to the published Pages site

**Deployment Status:** Check [GitHub Actions](https://github.com/Wiickedawesome/JEDY-Cleaning/actions)

## 📝 License

See LICENSE file for details

## 👨‍💻 Author

Built with ❤️ for a wonderful mom's cleaning business.
