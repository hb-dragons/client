<script lang="ts" setup>
import type { ConcreteComponent } from 'vue';

const { as = 'button' } = defineProps<{ as?: ConcreteComponent | string }>();
</script>

<template>
  <component
    :is="as"
    type="button"
    class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
  >
    <slot />
  </component>
</template>
