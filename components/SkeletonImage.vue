<script setup lang='ts'>
import type { StyleValue } from 'vue';
import type { ImageProps } from '~/types/props/image-props';

const { imgSrc } = defineProps<ImageProps & { imgClasses?: string; imgStyles?: StyleValue }>();

const imageLoading = ref(true);

onMounted(() => {
  if (imgSrc) {
    const img = new Image();
    img.src = imgSrc;

    if (img.complete) {
      imageLoading.value = false;
    }
  }
});

function isLoaded() {
  imageLoading.value = false;
}
</script>

<template>
  <Transition name="fade">
    <img
      v-show="!imageLoading && !isLoading"
      :src="imgSrc"
      :alt="imgSrc"
      class="w-full h-full object-center object-cover"
      :class="imgClasses"
      :style="imgStyles"
      @load="isLoaded"
    >
  </Transition>
  <Skeleton
    v-if="imageLoading || isLoading"
    width="100%"
    height="100%"
  />
</template>
