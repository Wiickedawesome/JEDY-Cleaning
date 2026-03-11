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
        // Modern teal + warm coral palette — fresh, clean, professional
        cream: {
          50: '#FAFBFA',
          100: '#F3F5F3',
          200: '#E8EDE8',
          300: '#D4DDD4',
          400: '#B8C7B8',
          500: '#9CB09C',
          600: '#7D957D',
          700: '#637A63',
          800: '#4A5E4A',
          900: '#364436',
        },
        pink: {
          50: '#FDF8F7',
          100: '#FBF1EF',
          200: '#F7E2DE',
          300: '#F0CEC8',
          400: '#E8B8B0',
          500: '#D9A198',
          600: '#C48B83',
          700: '#A87068',
          800: '#8A5A53',
          900: '#6E4740',
        },
        brown: {
          50: '#F8F9FA',
          100: '#EEF0F2',
          200: '#DDE1E6',
          300: '#C1C7CF',
          400: '#A2ABB7',
          500: '#78849A',
          600: '#5A6678',
          700: '#434E5E',
          800: '#2D3748',
          900: '#1A202C',
        },
        teal: {
          50: '#FFF0F3',
          100: '#FFE0E8',
          200: '#FFC2D1',
          300: '#FFA3B8',
          400: '#FF85A1',
          500: '#F9748F',
          600: '#E8607D',
          700: '#D14D6A',
          800: '#B33A57',
          900: '#8C2845',
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
              color: theme('colors.teal.600'),
              '&:hover': {
                color: theme('colors.teal.700'),
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
