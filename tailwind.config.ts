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
          50: '#FFF9FA',
          100: '#FFEEF2',
          200: '#FFDDE5',
          300: '#FFCCD9',
          400: '#FFB5C9',
          500: '#FF9EB8',
          600: '#FF8AA8',
          700: '#FF7698',
          800: '#E66186',
          900: '#CC4D74',
        },
        brown: {
          50: '#FAF8F7',
          100: '#F2EDE9',
          200: '#E5DBD3',
          300: '#D8C9BD',
          400: '#C4AFA0',
          500: '#B09583',
          600: '#8F7562',
          700: '#735E4E',
          800: '#57473A',
          900: '#3B3027',
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
