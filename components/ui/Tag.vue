<script setup lang='ts'>
const { value } = defineProps<{ value?: string }>();
</script>

<template>
  <div class="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-primary-500/60 border border-primary-500">
    {{ value }}
  </div>
</template>
