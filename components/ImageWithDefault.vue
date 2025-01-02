<script setup lang="ts">
import type { ImageProps } from '~/types/props/image-props';

const { imgSrc } = defineProps<ImageProps>();
</script>

<template>
  <SkeletonImage
    v-if="imgSrc"
    :img-src="imgSrc"
    :is-loading="isLoading"
  />
  <SkeletonImage
    v-else
    img-src="/img/banner.webp"
    :is-loading="isLoading"
  />
</template>
