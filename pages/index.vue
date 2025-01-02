<script setup lang="ts">
import { useGetImageBySlugQuery } from '~/types/graphql';

const { result, loading } = useGetImageBySlugQuery({
  slug: 'teams',
});
</script>

<template>
  <div>
    <LandingVideoBackground>
      <div class="flex flex-col h-full justify-center items-center gap-8 text-center">
        <DragonsLogo class="w-48 lg:w-96 motion-preset-pop" />
        <h1 class="text-5xl lg:text-8xl text-white font-bold motion-preset-blur-right">
          HB Dragons
        </h1>
      </div>
    </LandingVideoBackground>

    <!-- <ParallaxImage
      :image-url="result?.mediaItemBy?.mediaItemUrl || undefined"
      :is-loading="loading"
    >
      <div class="py-24  text-center">
        <p>
          Basketball in Hannover
        </p>
        <p>
          #dragonstakeover
        </p>
      </div>
    </ParallaxImage> -->
    <ParallaxImage
      :img-src="result?.mediaItemBy?.mediaItemUrl || undefined"
      :is-loading="loading"
      :parallax-enabled="false"
      class="h-[250px] lg:h-[500px]"
    >
      <div class="py-24 text-center">
        <p class="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
          Basketball in Hannover
        </p>
        <p class="text-2xl lg:text-3xl xl:text-4xl font-semibold">
          #dragonstakeover
        </p>
      </div>
    </ParallaxImage>

    <div class="h-screen" />
  </div>
</template>
