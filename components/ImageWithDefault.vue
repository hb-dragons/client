<script setup lang="ts">
const { imgSrc } = defineProps<{ imgSrc?: string; isLoading?: boolean }>();
</script>

<template>
  <SkeletonImage
    v-if="imgSrc"
    :src="imgSrc"
    :is-loading="isLoading"
  />
  <SkeletonImage
    v-else
    src="/img/banner.webp"
    :is-loading="isLoading"
  />
</template>
