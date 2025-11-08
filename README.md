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
- **Vitest** - Unit testing
- **GitHub Actions** - CI/CD pipeline

### Deployment
- **GitHub Actions** - Automated CI/CD pipeline
- **Ready for deployment** - Can be deployed to various hosting platforms

## 📁 Project Structure

```
jedy-cleaning/
├── app/
│   ├── components/          # Reusable React components
│   ├── pages/              # Page components
│   ├── lib/                # Utility functions
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
- npm or yarn

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
npm run test         # Run tests with Vitest
npm run test:ui      # Run tests with UI
npm run test:coverage # Generate test coverage
```

## 🎨 Design System

### Color Palette

**Cream** - Warm, inviting background
- cream-50: `#FFFBF5`
- cream-100: `#FFF8F0`

**Sage** - Calm, trustworthy text and accents
- sage-900: `#353B31`
- sage-700: `#5F6A53`

**Terracotta** - Warm accent for CTAs and highlights
- terracotta-600: `#D55A2F`
- terracotta-700: `#B84725`

### Typography

- **Headings**: Merriweather (serif) - classic, elegant
- **Body**: Inter (sans-serif) - modern, clean

## 📄 Pages

- **Home** - Hero section with services overview
- **Services** - Detailed service offerings
- **About** - Company story and team
- **Contact** - Contact form and information

## 🔐 Environment Variables

Create a `.env.local` file:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📊 Analytics & SEO

- Google Analytics ready
- Meta tags optimization
- Sitemap generation
- Structured data (Schema.org)
- Open Graph integration

## 🚢 Deployment

The website is ready to be deployed to various hosting platforms including:
- Azure Static Web Apps
- Vercel
- Netlify
- AWS Amplify

After deployment is configured, changes pushed to the `Website` branch will automatically deploy.

## 📝 License

See LICENSE file for details

## 👨‍💻 Author

Built with ❤️ for a wonderful mom's cleaning business.
