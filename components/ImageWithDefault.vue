<script setup lang='ts'>
defineProps<{ imgSrc?: string }>();
</script>

<template>
  <NuxtImg
    v-if="imgSrc"
    :src="imgSrc"
    :alt="imgSrc"
    class="w-full h-full object-cover object-center"
    loading="eager"
  />
  <img
    v-else
    src="/img/banner.webp"
    alt="Banner"
    class="w-full h-full object-cover object-center"
  >
</template>
