<script setup lang="ts">
import { useGetBackgroundVideoQuery } from '~/types/graphql';

const { result } = useGetBackgroundVideoQuery();
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <SkeletonVideo
      :img-src="result?.mediaItemBy?.mediaItemUrl || undefined"
      video-classes="absolute"
    />

    <div class="absolute inset-0 bg-black bg-opacity-60" />

    <div class="relative z-10 h-full">
      <slot />
    </div>
  </div>
</template>
