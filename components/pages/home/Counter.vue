<script setup lang='ts'>
import { useGetImageBySlugQuery } from '~/types/graphql';

const { result, loading } = useGetImageBySlugQuery({ slug: 'gesamt' });
const backgroundImage = computed(() => result.value?.mediaItemBy?.mediaItemUrl || undefined);
</script>

<template>
  <ParallaxImage
    as="section"
    :img-src="backgroundImage"
    :is-loading="loading"
    img-classes="grayscale"
    :backdrop-opacity="0.8"
    :parallax-enabled="false"
  >
    <div class="grid grid-cols-3 items-center justify-center text-center font-mono py-12 md:py-24 text-4xl md:text-8xl w-full">
      <div>
        <div class="relative w-fit mx-auto mb-1 md:mb-3">
          <DragonsCountUp
            :end-val="100"
            :duration="3"
          />
          <div class="absolute -right-4 md:-right-8 top-0 text-2xl md:text-6xl">
            +
          </div>
        </div>
        <div class="text-base md:text-2xl font-sans">
          Mitglieder
        </div>
      </div>

      <div>
        <div class="relative w-fit mx-auto mb-1 md:mb-3">
          <DragonsCountUp
            :end-val="6"
            :duration="3"
          />
        </div>
        <div class="text-base md:text-2xl font-sans">
          Mannschaften
        </div>
      </div>

      <div>
        <div class="relative w-fit mx-auto flex items-baseline mb-1 md:mb-3">
          <DragonsCountUp
            :end-val="200"
            :duration="3"
          />
          <span class="text-2xl md:text-7xl">%</span>
        </div>
        <div class="text-base md:text-2xl font-sans">
          Basketball
        </div>
      </div>
    </div>
  </ParallaxImage>
</template>
