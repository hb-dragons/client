<script setup lang='ts'>
const { is = 'p' } = defineProps<{ is?: string }>();
</script>

<template>
  <component
    :is="is"
    class="font-semibold text-surface-400"
  >
    <slot />
  </component>
</template>
