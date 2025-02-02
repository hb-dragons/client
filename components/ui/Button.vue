<script lang="ts" setup>
import type { ConcreteComponent } from 'vue';

export type Sizes = 'small' | 'medium' | 'large';
export type Variants = 'primary' | 'secondary' | 'surface';
export type ButtonProps = {
  as?: ConcreteComponent | string;
  size?: Sizes;
  variant?: Variants;
};

const { as = 'button', size = 'medium', variant = 'primary' } = defineProps<ButtonProps>();

const sizeStyles = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const variantStyles = {
  primary: 'bg-primary-700 hover:bg-primary-800 border-primary-800',
  surface: 'bg-surface-700 hover:bg-surface-600 border-surface-600 ',
  secondary: 'bg-secondary-700 hover:bg-secondary-600 border-secondary-600 ',
};
</script>

<template>
  <component
    :is="as"
    type="button"
    class="inline-flex items-center justify-center border-2 rounded-md shadow-sm focus:outline-none focus:ring-0"
    :class="[sizeStyles[size], variantStyles[variant]]"
  >
    <slot />
  </component>
</template>
