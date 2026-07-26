import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          dim: 'var(--color-surface-dim)',
          bright: 'var(--color-surface-bright)',
          variant: 'var(--color-surface-variant)',
          tint: 'var(--color-surface-tint)',
          container: {
            lowest: 'var(--color-surface-container-lowest)',
            low: 'var(--color-surface-container-low)',
            DEFAULT: 'var(--color-surface-container)',
            high: 'var(--color-surface-container-high)',
            highest: 'var(--color-surface-container-highest)',
          },
        },
        'on-surface': {
          DEFAULT: 'var(--color-on-surface)',
          variant: 'var(--color-on-surface-variant)',
        },
        inverse: {
          surface: 'var(--color-inverse-surface)',
          'on-surface': 'var(--color-inverse-on-surface)',
          primary: 'var(--color-inverse-primary)',
        },
        outline: {
          DEFAULT: 'var(--color-outline)',
          variant: 'var(--color-outline-variant)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          container: 'rgb(var(--color-primary-container) / <alpha-value>)',
          fixed: 'var(--color-primary-fixed)',
          'fixed-dim': 'var(--color-primary-fixed-dim)',
        },
        'on-primary': {
          DEFAULT: 'var(--color-on-primary)',
          container: 'var(--color-on-primary-container)',
          fixed: 'var(--color-on-primary-fixed)',
          'fixed-variant': 'var(--color-on-primary-fixed-variant)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          container: 'var(--color-secondary-container)',
          fixed: 'var(--color-secondary-fixed)',
          'fixed-dim': 'var(--color-secondary-fixed-dim)',
        },
        'on-secondary': {
          DEFAULT: 'var(--color-on-secondary)',
          container: 'var(--color-on-secondary-container)',
          fixed: 'var(--color-on-secondary-fixed)',
          'fixed-variant': 'var(--color-on-secondary-fixed-variant)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary)',
          container: 'var(--color-tertiary-container)',
          fixed: 'var(--color-tertiary-fixed)',
          'fixed-dim': 'var(--color-tertiary-fixed-dim)',
        },
        'on-tertiary': {
          DEFAULT: 'var(--color-on-tertiary)',
          container: 'var(--color-on-tertiary-container)',
          fixed: 'var(--color-on-tertiary-fixed)',
          'fixed-variant': 'var(--color-on-tertiary-fixed-variant)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          container: 'var(--color-error-container)',
        },
        'on-error': {
          DEFAULT: 'var(--color-on-error)',
          container: 'var(--color-on-error-container)',
        },
        'on-background': 'var(--color-on-background)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        label: ['var(--font-label)', 'sans-serif'],
      },
      fontSize: {
        h1: ['var(--text-h1-size)', {
          lineHeight: 'var(--text-h1-line-height)',
          letterSpacing: 'var(--text-h1-letter-spacing)',
          fontWeight: 'var(--text-h1-weight)',
        }],
        h2: ['var(--text-h2-size)', {
          lineHeight: 'var(--text-h2-line-height)',
          letterSpacing: 'var(--text-h2-letter-spacing)',
          fontWeight: 'var(--text-h2-weight)',
        }],
        h3: ['var(--text-h3-size)', {
          lineHeight: 'var(--text-h3-line-height)',
          fontWeight: 'var(--text-h3-weight)',
        }],
        'body-lg': ['var(--text-body-lg-size)', {
          lineHeight: 'var(--text-body-lg-line-height)',
          fontWeight: 'var(--text-body-lg-weight)',
        }],
        'body-md': ['var(--text-body-md-size)', {
          lineHeight: 'var(--text-body-md-line-height)',
          fontWeight: 'var(--text-body-md-weight)',
        }],
        label: ['var(--text-label-size)', {
          lineHeight: 'var(--text-label-line-height)',
          letterSpacing: 'var(--text-label-letter-spacing)',
          fontWeight: 'var(--text-label-weight)',
        }],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      spacing: {
        unit: 'var(--spacing-unit)',
        gutter: 'var(--spacing-gutter)',
        card: 'var(--spacing-card)',
        section: 'var(--spacing-section)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      borderColor: {
        subtle: 'var(--border-subtle)',
        'subtle-hover': 'var(--border-subtle-hover)',
      },
      boxShadow: {
        'glow-primary': 'var(--shadow-glow-primary)',
        'glow-sm': 'var(--shadow-glow-sm)',
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',
        base: 'var(--transition-base)',
        slow: 'var(--transition-slow)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
