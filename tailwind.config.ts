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
      letterSpacing: {
        button: 'var(--button-letter-spacing)',
      },
      /**
       * Palette : uniquement les nuances employées dans les maquettes validées.
       * Les valeurs vivent dans `src/styles/theme.css` (:root) — ne jamais
       * écrire une couleur en dur ici ni dans un composant.
       */
      colors: {
        text: rgb('color-text'),
        muted: rgb('color-text-muted'),
        surface: rgb('color-surface'),
        border: rgb('color-border'),
        'list-separator': rgb('color-list-separator'),
        background: rgb('color-background'),
        'on-dark': rgb('color-text-on-dark'),
        /** Texte principal (#010101) — boutons, fonds sombres neutres */
        primary: rgb('color-text'),
        glaz: {
          700: rgb('glaz-700'),
          500: rgb('glaz-500'),
          300: rgb('glaz-300'),
          100: rgb('glaz-100'),
        },
        sable: {
          400: rgb('sable-400'),
          200: rgb('sable-200'),
        },
        ocean: {
          900: rgb('ocean-900'),
          300: rgb('ocean-300'),
        },
        aurore: {
          900: rgb('aurore-900'),
          700: rgb('aurore-700'),
          300: rgb('aurore-300'),
          100: rgb('aurore-100'),
        },
        danger: rgb('color-danger'),
      },
    },
  },
  plugins: [],
} satisfies Config
