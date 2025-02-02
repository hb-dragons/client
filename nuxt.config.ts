// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/eslint',
    'dayjs-nuxt',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'layout', mode: 'out-in' },
  },
  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://dragons.neemann.tech',
    name: 'Hanover Basketball Dragons e.V.',
    description: 'Die offizielle Website der Hanover Basketball Dragons e.V.',
    defaultLocale: 'de',
  },

  compatibilityDate: '2025-01-30',

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api.dragons.neemann.tech/graphql',
      },
    },
  },

  dayjs: {
    locales: ['de', 'fr'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'de',
    defaultTimezone: 'Europe/Berlin',
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
    domains: ['dragons.neemann.tech', 'api.dragons.neemann.tech'],
  },

  seo: {
    meta: {
      description: 'Die offizielle Website der Hanover Basketball Dragons e.V.',
      colorScheme: 'dark light',
      applicationName: 'Hanover Basketball Dragons e.V.',
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    viewer: true,
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
