<script setup lang='ts'>
import { useElementBounding } from '@vueuse/core';
import type { ImageWithDefaultProps } from '~/types/props/image-props';

const { parallaxEnabled = true, backdropOpacity = 0.4 } = defineProps<ImageWithDefaultProps & { as?: Component | string; parallaxEnabled?: boolean; backdropOpacity?: number }>();

const translateY = ref(0);
let rafId: number | null = null;

const containerRef = ref<HTMLElement | null>(null);
const { height } = useElementBounding(containerRef);

const targetTranslateY = ref(0);
const currentTranslateY = ref(0);
const smoothingFactor = 0.9;

const updateParallax = () => {
  const difference = targetTranslateY.value - currentTranslateY.value;
  currentTranslateY.value += difference * smoothingFactor;
  translateY.value = currentTranslateY.value;

  rafId = requestAnimationFrame(updateParallax);
};

const handleScroll = () => {
  targetTranslateY.value = window.scrollY / 2.5;
};

onMounted(() => {
  if (!parallaxEnabled) {
    return;
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  rafId = requestAnimationFrame(updateParallax);
});

onUnmounted(() => {
  if (!parallaxEnabled) {
    return;
  }
  window.removeEventListener('scroll', handleScroll);
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
});
</script>

<template>
  <component
    :is="as || 'div'"
    ref="containerRef"
    class="relative overflow-hidden"
  >
    <div
      class="hidden md:block absolute inset-0 z-0 bottom-0"

      :style="{
        transform: `translateY(${translateY}px)`,
        height: height + 'px',
      }"
    >
      <ImageWithDefault
        v-if="useDefaultImage"
        :img-src="imgSrc"
        :is-loading="isLoading"
      />
      <SkeletonImage
        v-else
        :is-loading="isLoading"
        :img-src="imgSrc"
      />
      <!-- Overlay for better text visibility -->
      <div
        class="absolute inset-0"
        :style="{
          backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})`,
        }"
      />
    </div>

    <div
      class="block md:hidden absolute inset-0 z-0 "
    >
      <ImageWithDefault
        v-if="useDefaultImage"
        :is-loading="isLoading"
        :img-src="imgSrc"
      />
      <SkeletonImage
        v-else
        :is-loading="isLoading"
        :img-src="imgSrc"
      />
      <!-- Overlay for better text visibility -->
      <div
        class="absolute inset-0"
        :style="{
          backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})`,
        }"
      />
    </div>

    <div class="relative z-1 h-full flex items-center justify-center">
      <slot />
    </div>
  </component>
</template>
