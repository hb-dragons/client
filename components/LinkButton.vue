<script setup lang='ts'>
defineProps<{ to: string; size?: 'small' | 'large' | undefined; raised?: boolean; newTab?: boolean }>();

const NuxtLink = resolveComponent('nuxt-link');
</script>

<template>
  <Button
    :as="NuxtLink"
    :to="to"
    :size="size"
    :raised="raised"
    :target="newTab ? '_blank' : undefined"
  >
    <slot />
  </Button>
</template>
