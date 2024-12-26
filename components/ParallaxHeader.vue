<template>
  <header class="relative overflow-hidden h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
    <!-- Parallax Background -->
    <div
      class="hidden md:block absolute inset-0 z-0"
      :style="{
        transform: `translateY(${translateY}px)`,
      }"
    >
      <ImageWithDefault :img-src="backgroundImage" />
      <!-- Overlay for better text visibility -->
      <div class="absolute inset-0 bg-black/40" />
    </div>

    <div
      class="block md:hidden absolute inset-0 z-0"
    >
      <ImageWithDefault :img-src="backgroundImage" />
      <!-- Overlay for better text visibility -->
      <div class="absolute inset-0 bg-black/40" />
    </div>

    <!-- Header Content -->
    <div class="relative z-1 h-full flex items-center justify-center m-auto text-white px-4">
      <h1
        class="hidden md:block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center motion-preset-blur-right"
        :style="{ transform: `translateY(${translateYTitle}px)` }"
      >
        {{ title }}
      </h1>
      <h1
        class="block md:hidden text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center motion-preset-blur-right"
      >
        {{ title }}
      </h1>
      <div
        v-if="subtitle"
        class="bg-primary-500 px-2 py-2 rounded-lg"
      >
        <p class="text-xl md:text-2xl text-center font-bold">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

defineProps<{ backgroundImage?: string; title: string; subtitle?: string }>();

const translateY = ref(0);
const translateYTitle = ref(0);
let rafId: number | null = null;

// Smooth scroll implementation using requestAnimationFrame
const targetTranslateY = ref(0);
const currentTranslateY = ref(0);
const smoothingFactor = 0.9; // Adjust this value to control smoothness (0.1 = smooth, 1 = instant)

const updateParallax = () => {
  const difference = targetTranslateY.value - currentTranslateY.value;
  currentTranslateY.value += difference * smoothingFactor;
  translateY.value = currentTranslateY.value;
  translateYTitle.value = currentTranslateY.value * 1.3;

  rafId = requestAnimationFrame(updateParallax);
};

const handleScroll = () => {
  // Update target position based on scroll
  targetTranslateY.value = window.scrollY / 2.5;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  rafId = requestAnimationFrame(updateParallax);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
});
</script>
