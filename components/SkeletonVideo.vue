<script setup lang="ts">
import type { ImageProps } from '~/types/props/image-props';

const { imgSrc } = defineProps<ImageProps & { videoClasses?: string }>();

const videoLoading = ref(true);

onMounted(() => {
  if (imgSrc) {
    const video = document.createElement('video');
    video.src = imgSrc;

    // Check if the video is already loaded
    if (video.readyState === 4) {
      videoLoading.value = false;
    }
    else {
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
    }
  }
});

function handleLoadedData() {
  videoLoading.value = false;
}

function handleError() {
  console.error('Failed to load video.');
  videoLoading.value = false; // Optionally handle errors
}
</script>

<template>
  <Transition name="fade">
    <video
      v-show="!videoLoading && !isLoading"
      :src="imgSrc"
      autoplay
      loop
      muted
      playsinline
      preload="auto"
      class="w-full h-full object-cover object-center"
      :class="videoClasses"
      @loadeddata="handleLoadedData"
      @error="handleError"
    />
  </Transition>
  <div
    v-if="videoLoading || isLoading"
    :class="videoClasses"
    class="w-full h-full"
  >
    <Skeleton
      width="100%"
      height="100%"
    />
  </div>
</template>
