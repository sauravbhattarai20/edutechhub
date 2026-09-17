import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a5f7',
          500: '#0c87eb',
          600: '#006ac9',
          700: '#0154a3',
          800: '#054786',
          900: '#0a3c6f',
          950: '#07264a',
        },
        slate: {
          850: '#151f32',
          950: '#080d1a',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            a: {
              color: '#006ac9',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: '#0154a3',
              },
            },
            h1: {
              color: '#0f172a',
              fontWeight: '800',
            },
            h2: {
              color: '#0f172a',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h3: {
              color: '#1e293b',
              fontWeight: '600',
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            blockquote: {
              borderLeftColor: '#006ac9',
              color: '#475569',
              fontStyle: 'normal',
            },
            code: {
              backgroundColor: '#f1f5f9',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
