<script setup lang="ts">
import type { ImageProps } from '~/types/props/image-props';

const { imgSrc, defaultImage = '/img/banner.webp' } = defineProps<{ defaultImage?: string } & ImageProps>();
</script>

<template>
  <SkeletonImage
    v-if="imgSrc"
    :img-src="imgSrc"
    :is-loading="isLoading"
    :img-classes="imgClasses"
  />
  <SkeletonImage
    v-else
    :img-src="defaultImage"
    :is-loading="isLoading"
    :img-classes="imgClasses"
  />
</template>
