export default {
  theme: {
    extend: {
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
    },
  },
  plugins: [require('tailwindcss-primeui'), require('tailwindcss-motion'), require('@tailwindcss/typography')],
};
