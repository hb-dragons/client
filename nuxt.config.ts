// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
    colorScheme: {
      light: {
        surface: {
          50: '{gray.50}',
          100: '{gray.100}',
          200: '{gray.200}',
          300: '{gray.300}',
          400: '{gray.400}',
          500: '{gray.500}',
          600: '{gray.600}',
          700: '{gray.700}',
          800: '{gray.800}',
          900: '{gray.900}',
          950: '{gray.950}',
        },
      },
      dark: {
        surface: {
          50: '{gray.50}',
          100: '{gray.100}',
          200: '{gray.200}',
          300: '{gray.300}',
          400: '{gray.400}',
          500: '{gray.500}',
          600: '{gray.600}',
          700: '{gray.700}',
          800: '{gray.800}',
          900: '{gray.900}',
          950: '{gray.950}',
        },
      },
    },
  },
});

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
  ],
  devtools: { enabled: true },

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'layout', mode: 'out-in' },
  },
  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://dragons.janeee.de',
    name: 'Hanover Basketball Dragons e.V.',
    description: 'Die offizielle Website der Hanover Basketball Dragons e.V.',
    defaultLocale: 'de',
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  compatibilityDate: '2024-04-03',

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api.dragons.janeee.de/graphql',
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
        indent: 2,
      },
    },
  },

  image: {
    format: ['webp'],
    domains: ['dragons.janeee.de'],
  },

  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    },
  },

  seo: {
    meta: {
      description: 'Die offizielle Website der Hanover Basketball Dragons e.V.',
      colorScheme: 'dark light',
      applicationName: 'Hanover Basketball Dragons e.V.',
    },
  },

  // sitemap: {
  //   urls: async () => {
  //     // const teams = result.value?.teams?.nodes;

  //     // if (!teams) return [];

  //     // const urls = teams.map(team => ({
  //     //   loc: `/team/${team.slug}`,
  //     // }));
  //     return [
  //       'https://dragons.janeee.de/teams/herren-1',
  //       'https://dragons.janeee.de/teams/herren-2',
  //       'https://dragons.janeee.de/teams/u18',
  //       'https://dragons.janeee.de/teams/u16',
  //       'https://dragons.janeee.de/teams/u14',
  //       'https://dragons.janeee.de/teams/u12',
  //       'https://dragons.janeee.de/teams/damen',
  //     ];
  //   },
  // },
});
