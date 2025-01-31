<script setup lang='ts'>
import type { StyleValue } from 'vue';
import type { ImageProps } from '~/types/props/image-props';

const { imgSrc } = defineProps<ImageProps & { imgStyles?: StyleValue }>();

const imageLoading = ref(true);

onMounted(() => {
  loadImage();
});

watch(() => imgSrc, () => {
  if (imgSrc) {
    loadImage();
  }
});

function loadImage() {
  if (!imgSrc) {
    return;
  }
  imageLoading.value = true;

  const img = new Image();
  img.onload = () => {
    imageLoading.value = false;
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
      v-show="!imageLoading && !isLoading"
      :src="imgSrc"
      :alt="imgSrc"
      class="w-full h-full object-center object-cover"
      :class="imgClasses"
      :style="imgStyles"
    >
  </Transition>
  <UiSkeleton
    v-if="imageLoading || isLoading"
    class="w-full h-full"
  />
</template>
