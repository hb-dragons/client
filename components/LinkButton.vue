<script setup lang='ts'>
import type { ButtonProps } from './ui/Button.vue';

defineProps<{ to: string; newTab?: boolean } & Omit<ButtonProps, 'as'>>();

const NuxtLink = resolveComponent('nuxt-link');
</script>

<template>
  <UiButton
    :as="NuxtLink"
    :to="to"
    :size="size"
    :variant="variant"
    :target="newTab ? '_blank' : undefined"
  >
    <slot />
  </UiButton>
</template>
