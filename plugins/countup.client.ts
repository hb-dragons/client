import { CountUp } from 'countup.js';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      countup: CountUp,
    },
  };
});
