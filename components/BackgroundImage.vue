<script setup lang='ts'>
defineProps <{ imgSrc?: string; withOverlay?: boolean }>();
</script>

<template>
  <div
    class="absolute inset-0 z-0"
  >
    <ImageWithDefault :img-src="imgSrc" />
    <!-- Overlay for better text visibility -->
    <div
      v-if="withOverlay"
      class="absolute inset-0 bg-black/40"
    />
  </div>
</template>
