<script setup lang="ts">
import type { ImageWithDefaultProps } from '~/types/props/image-props';

defineProps<ImageWithDefaultProps & { title: string; subtitle?: string }>();
</script>

<template>
  <ParallaxImage
    :as="'header'"
    :img-src="imgSrc"
    :use-default-image="useDefaultImage"
    class="h-[200px] md:h-[400px] lg:h-[600px]"
  >
    <!-- Header Content -->
    <div class="relative z-1 h-full flex items-center justify-center m-auto text-white px-4">
      <h1
        v-if="title"
        class="hidden md:block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center motion-preset-blur-right"
      >
        {{ title }}
      </h1>
      <h1
        v-if="title"
        class="block md:hidden text-5xl font-bold text-center motion-preset-blur-right"
      >
        {{ title }}
      </h1>
      <div
        v-if="subtitle"
        class="bg-primary-500 px-2 py-2 rounded-lg"
      >
        <p class="text-xl md:text-2xl text-center font-bold">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </ParallaxImage>
</template>
