<script setup lang="ts">
import { useGetBackgroundVideoQuery } from '~/types/graphql';

const { result } = useGetBackgroundVideoQuery();
</script>
<template>
  <div class="relative w-full h-screen overflow-hidden">
    <video v-if="result?.mediaItemBy?.mediaItemUrl" autoplay loop muted playsinline class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover">
        <source :src="result?.mediaItemBy?.mediaItemUrl" type="video/mp4">
    </video>

    <div class="absolute inset-0 bg-black bg-opacity-50"/>


    <div class="relative z-10 h-full">
      <slot/>
    </div>
  </div>


</template>
