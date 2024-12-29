<script setup lang="ts">
const { src } = defineProps<{ src?: string; videoClasses?: string; isLoading?: boolean }>();

const videoLoading = ref(true);

onMounted(() => {
  if (src) {
    const video = document.createElement('video');
    video.src = src;

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

watch(() => src, () => {
  console.log(src);
});
</script>

<template>
  <Transition name="fade">
    <video
      v-show="!videoLoading && !isLoading"
      :src="src"
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
