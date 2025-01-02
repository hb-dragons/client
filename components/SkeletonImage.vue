<script setup lang='ts'>
import type { StyleValue } from 'vue';
import type { ImageProps } from '~/types/props/image-props';

const { imgSrc } = defineProps<ImageProps & { imgClasses?: string; imgStyles?: StyleValue }>();

const imageLoading = ref(true);

onMounted(() => {
  loadImage();
});

watch(() => imgSrc, () => {
  if (imgSrc) {
    loadImage();
  }
});

function isLoaded() {
  imageLoading.value = false;
  // console.log('IMAGE LOADED');
}

function loadImage() {
  if (!imgSrc) {
    return;
  }
  imageLoading.value = true;

  // Create a new Image object to preload the image
  const img = new Image();
  img.onload = () => {
    imageLoading.value = false;
    isLoaded(); // Call the isLoaded method
  };
  img.onerror = () => {
    imageLoading.value = false;
  };

  img.src = imgSrc; // Set the source to start loading
}
</script>

<template>
  <Transition name="fade">
    <img
      v-if="imgSrc"
      v-show="!imageLoading"
      :src="imgSrc"
      :alt="imgSrc"
      class="w-full h-full object-center object-cover"
      :class="imgClasses"
      :style="imgStyles"
    >
  </Transition>
  <Skeleton
    v-if="imageLoading || isLoading"
    width="100%"
    height="100%"
  />
</template>
