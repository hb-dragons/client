import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import tailwindcssMotion from 'tailwindcss-motion';
import typography from '@tailwindcss/typography';

export default <Partial<Config>> {
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 1.2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      colors: {
        primary: colors.orange,
        gray: colors.slate,
        surface: colors.slate,
      },
      fontFamily: {
        sans: [
          'BLMelody',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'BLMelodyMono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      plugins: [tailwindcssMotion, typography],
    },
  },
};
