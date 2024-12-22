<script setup lang='ts'>
defineProps<{
  headline: string;
}>();
</script>

<template>
  <section>
    <GrayHeadline
      is="h2"
      class="text-lg md:text-3xl font-semibold mb-1 md:mb-5"
    >
      {{ headline }}
    </GrayHeadline>

    <slot />
  </section>
</template>
