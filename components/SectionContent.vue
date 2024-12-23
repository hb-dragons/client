<script setup lang='ts'>
defineProps<{
  headline: string;
}>();
</script>

<template>
  <section>
    <GrayHeadline
      is="h2"
      class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-1 md:mb-2 lg:mb-3 xl:mb-4"
    >
      {{ headline }}
    </GrayHeadline>

    <slot />
  </section>
</template>
