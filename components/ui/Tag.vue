<script setup lang='ts'>
const { value } = defineProps<{ value?: string }>();
</script>

<template>
  <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
    {{ value }}
  </div>
</template>
