<script setup lang='ts'>
defineProps<{ to: string; size?: 'small' | 'large' | undefined; raised?: boolean }>();

const NuxtLink = resolveComponent('nuxt-link');
</script>

<template>
  <Button
    :as="NuxtLink"
    :to="to"
    :size="size"
    :raised="raised"
  >
    <slot />
  </Button>
</template>
