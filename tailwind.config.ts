import type { Config } from 'tailwindcss'

const rgb = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-ui)'],
        editorial: ['var(--font-editorial)'],
      },
      spacing: {
        section: 'var(--space-section-x)',
      },
      colors: {
        text: rgb('color-text'),
        'text-muted': rgb('color-text-muted'),
        surface: rgb('color-surface'),
        border: rgb('color-border'),
        background: rgb('color-background'),
        'on-dark': rgb('color-text-on-dark'),
        muted: rgb('color-text-muted'),
        /** Texte principal (#010101) — boutons, fonds sombres neutres */
        primary: rgb('color-text'),
        /** Accent Glaz primaire */
        secondary: rgb('glaz-700'),
        glaz: {
          900: rgb('glaz-900'),
          700: rgb('glaz-700'),
          500: rgb('glaz-500'),
          300: rgb('glaz-300'),
          100: rgb('glaz-100'),
        },
        sable: {
          900: rgb('sable-900'),
          700: rgb('sable-700'),
          300: rgb('sable-300'),
          100: rgb('sable-100'),
        },
        ocean: {
          900: rgb('ocean-900'),
          700: rgb('ocean-700'),
          300: rgb('ocean-300'),
          100: rgb('ocean-100'),
        },
        aurore: {
          900: rgb('aurore-900'),
          700: rgb('aurore-700'),
          300: rgb('aurore-300'),
          100: rgb('aurore-100'),
        },
        danger: rgb('color-danger'),
        success: rgb('color-success'),
        warning: rgb('color-warning'),
      },
    },
  },
  plugins: [],
} satisfies Config
