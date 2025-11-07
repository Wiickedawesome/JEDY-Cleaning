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
        // Warm, charming color palette
        cream: {
          50: '#FFFBF5',
          100: '#FFF8F0',
          200: '#FFE8D6',
          300: '#FFD9BB',
          400: '#FFC199',
          500: '#FFAA77',
          600: '#E68955',
          700: '#CC6633',
          800: '#B34D22',
          900: '#8B3A15',
        },
        sage: {
          50: '#F8FAF6',
          100: '#ECEEE8',
          200: '#DCDDD5',
          300: '#C8CBBD',
          400: '#B4B8AA',
          500: '#9FA497',
          600: '#7F8775',
          700: '#5F6A53',
          800: '#4A5242',
          900: '#353B31',
        },
        terracotta: {
          50: '#FEF4F0',
          100: '#FDE5DB',
          200: '#F9CDB3',
          300: '#F5B08B',
          400: '#EE8B63',
          500: '#E26D3F',
          600: '#D55A2F',
          700: '#B84725',
          800: '#963921',
          900: '#7A2E1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      typography: ((theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.terracotta.600'),
              '&:hover': {
                color: theme('colors.terracotta.700'),
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
