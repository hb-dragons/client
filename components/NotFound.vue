<script setup lang='ts'>
import { useGetImageBySlugQuery } from '~/types/graphql';

const { result, loading } = useGetImageBySlugQuery({
  slug: 'levent-bike',
});

const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

<template>
  <section class="h-screen flex-1">
    <ParallaxImage
      :parallax-enabled="true"
      :img-src="result?.mediaItemBy?.mediaItemUrl || undefined"
      :is-loading="loading"
      class="w-full h-full"
    >
      <div class="flex flex-col gap-8 items-center justify-center">
        <div>
          <h1 class="text-8xl font-bold mb-8">
            404 - Airball
          </h1>
          <p class="text-center text-4xl">
            Diese Seite gibt es nicht :(
          </p>
        </div>
        <UiButton
          size="large"
          @click="handleError"
        >
          <div class="flex items-center gap-4">
            <Icon
              name="ph:arrow-left"
              class="w-8 h-8"
            />
            <span class="text-xl">Zurück zur Startseite</span>
          </div>
        </UiButton>
      </div>
    </ParallaxImage>
  </section>
</template>
