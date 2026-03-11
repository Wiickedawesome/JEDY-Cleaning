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
        brand: {
          'pink-light': '#EED2DE',
          'rose': '#DB9EB8',
          'pink': '#E28DB0',
          'lavender': '#C3B6C9',
          'mauve': '#AEA4B3',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      typography: ((theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.brown.800'),
            a: {
              color: theme('colors.brand.mauve'),
              '&:hover': {
                color: theme('colors.brand.pink'),
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
