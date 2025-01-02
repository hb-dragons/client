<script setup lang='ts'>
import type { ImageWithDefaultProps } from '~/types/props/image-props';

defineProps<ImageWithDefaultProps>();
</script>

<template>
  <div
    class=" absolute inset-0 z-0"
  >
    <ImageWithDefault
      v-if="useDefaultImage"
      :img-src="imgSrc"
      :is-loading="isLoading"
    />
    <SkeletonImage
      :is-loading="isLoading"
      :img-src="imgSrc"
    />
    <!-- Overlay for better text visibility -->
    <div class="absolute inset-0 bg-black/40" />
  </div>
</template>
