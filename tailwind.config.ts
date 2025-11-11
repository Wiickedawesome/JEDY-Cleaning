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
        // Pink & Cream color palette inspired by our cleaning mascot
        cream: {
          50: '#FFFEF9',
          100: '#FFF8E8',
          200: '#FFF1D4',
          300: '#FFE8B8',
          400: '#FFDF9C',
          500: '#FFD680',
          600: '#F5C563',
          700: '#E6B14A',
          800: '#D19A35',
          900: '#B88020',
        },
        pink: {
          50: '#FFF5F7',
          100: '#FFE8ED',
          200: '#FFD1DB',
          300: '#FFB4C8',
          400: '#FF8FAB',
          500: '#FF6B8E',
          600: '#E85577',
          700: '#D14165',
          800: '#B83354',
          900: '#9E2845',
        },
        brown: {
          50: '#F9F6F4',
          100: '#EBE3DD',
          200: '#D4C4B8',
          300: '#BDA593',
          400: '#A6866E',
          500: '#8F6749',
          600: '#6D4E37',
          700: '#5A3F2D',
          800: '#473223',
          900: '#34251A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      typography: ((theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.brown.800'),
            a: {
              color: theme('colors.pink.600'),
              '&:hover': {
                color: theme('colors.pink.700'),
              },
            },
          },
        },
      })) as any,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
