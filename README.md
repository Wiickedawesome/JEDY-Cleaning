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
- **Custom Design System** - Warm colors (cream, pink, lavender, mauve)

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
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── FAQSection.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── LocalBusinessSchema.tsx
│   │   ├── BreadcrumbSchema.tsx
│   │   └── ServiceSchema.tsx
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy page
│   ├── services/           # Services page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── error.tsx           # Error boundary
│   └── loading.tsx         # Loading state
├── __tests__/              # Jest test files
├── lib/
│   ├── constants.ts        # Business details, service areas, copy constants
│   ├── contact.ts          # Contact-form delivery boundary (Web3Forms)
│   ├── navigation.ts       # Active-nav path matching
│   └── seo.ts              # Shared Open Graph / Twitter metadata
├── public/                 # Static assets
├── docs/                   # Audit and remediation records
├── .github/workflows/      # CI/CD pipelines
├── jest.config.js          # Jest configuration
├── jest.setup.js           # Jest setup
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
npm run build        # Build the static export into out/
npm run start        # Preview the built export on a local static server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking
npm test             # Run Jest tests
```

## 🎨 Design System

### Color Palette

**Cream** - Warm, inviting background
- cream-50: `#FAFBFA`
- cream-100: `#F3F5F3`

**Brand** - Warm, approachable accents
- brand-pink: `#A85070`
- brand-mauve: `#6B6173` (5.9:1 on white — meets WCAG AA)
- brand-lavender: `#C3B6C9`

### Typography

- **Headings**: Quiche Display (self-hosted from `public/fonts/`, declared in `app/globals.css`)
- **Body**: Outfit (Google Fonts via `next/font/google`)

## 📄 Pages

- **Home** - Hero section with services overview
- **Services** - Detailed service offerings
- **About** - Company story and team
- **Contact** - Contact form and information
- **Privacy** - Privacy policy

## ✉️ Contact Form

Submissions are delivered by [Web3Forms](https://web3forms.com) from `lib/contact.ts`. Web3Forms is
used instead of a server because the site is a static export with no backend.

Behaviour contract:

- Success requires HTTP 2xx **and** `success === true` in the response — nothing else is reported as sent.
- Requests abort after 12 seconds, so a stalled provider cannot leave the form spinning.
- If `NEXT_PUBLIC_WEB3FORMS_KEY` is missing, no request is made and the visitor sees the phone/email
  fallback rather than a false confirmation.
- Failures always show a banner with `tel:` and `mailto:` links so a lead is never lost.

The free tier allows 250 submissions per month. Web3Forms rejects server-side (curl/Node) requests on
that tier, so delivery can only be verified from a browser.

## 🔐 Environment Variables

All site configuration lives in `lib/constants.ts`; environment variables are optional.
Create a `.env.local` file only if you need search-engine verification meta tags:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_SITE_VERIFICATION=
NEXT_PUBLIC_WEB3FORMS_KEY=
```

`NEXT_PUBLIC_WEB3FORMS_KEY` is public by design (it is inlined into the bundle) and only
identifies the destination inbox. It must be present at **build** time — in CI it comes from a
repository variable, not a local file. With no key, the form skips the network call and shows
the phone/email fallback instead of submitting.

## 🧪 Testing

The project uses Jest with React Testing Library for component testing.

```bash
npm test              # Run all tests
npm test -- --watch   # Run tests in watch mode
npm test -- --coverage # Run with coverage report
```

CI runs type-check, lint, tests, and a production build on every push to `main` or `Website`.

**Test Files:**
- `__tests__/Header.test.tsx` - Navigation and mobile menu tests
- `__tests__/Footer.test.tsx` - Footer links and content tests
- `__tests__/FAQSection.test.tsx` - FAQ accordion behavior tests
- `__tests__/ContactPage.test.tsx` - Form validation, honeypot, and failure fallbacks
- `__tests__/contact.test.ts` - Delivery boundary: success, rejection, timeout, missing key
- `__tests__/navigation.test.ts` - Active-nav matching with trailing slashes
- `__tests__/sitemap.test.ts` - Sitemap and robots output

## 📊 Analytics & SEO

- Google Analytics 4 (`G-ZNVLK51L9M`) loads through Google Tag Manager (`GTM-5R3V5QKN`)
- Per-page titles, descriptions, canonicals, Open Graph, and Twitter cards via `lib/seo.ts`
- Sitemap and robots generated as static routes with trailing-slash canonical URLs
- Structured data: `CleaningService`, `Service`, `BreadcrumbList`, `FAQPage`
- Lead events for phone clicks, email clicks, and form submissions (`data-track-*` attributes plus the
  `jedy:quote-form-submit` custom event)
- The Content-Security-Policy in `app/layout.tsx` must list any new analytics or form host in
  `connect-src`; wildcards do not match bare hostnames.

## 🚢 Deployment

### GitHub Pages

The website is deployed to GitHub Pages with automatic CI/CD via GitHub Actions.

**Live URL:** https://jedycleaning.us/

**How it works:**
1. Push code to the `Website` branch
2. GitHub Actions builds the static export into the `out` directory
3. The Pages workflow publishes that export to GitHub Pages
4. DNS maps the custom domain to the published Pages site

The build reads `NEXT_PUBLIC_WEB3FORMS_KEY` from a repository **variable**
(Settings → Secrets and variables → Actions → Variables). Because `NEXT_PUBLIC_*` values are
inlined at build time, a missing variable produces a working site whose form falls back to phone
and email instead of submitting.

**Deployment Status:** Check [GitHub Actions](https://github.com/Wiickedawesome/JEDY-Cleaning/actions)

## 📝 License

See LICENSE file for details

## 👨‍💻 Author

Built with ❤️ for a wonderful mom's cleaning business.
