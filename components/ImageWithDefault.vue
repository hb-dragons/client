<script setup lang="ts">
const { imgSrc } = defineProps<{ imgSrc?: string }>();
</script>

<template>
  <SkeletonImage
    v-if="imgSrc"
    :src="imgSrc"
  />
  <SkeletonImage
    v-else
    src="/img/banner.webp"
  />
</template>
