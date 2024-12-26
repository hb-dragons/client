<script setup lang="ts">
const scrollPosition = ref(0);

const hasBackground = computed(() => scrollPosition.value > 0);

onMounted(() => {
  scrollPosition.value = window.scrollY;
  window.addEventListener('scroll', updateScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
});

function updateScroll() {
  scrollPosition.value = window.scrollY;
}
</script>

<template>
  <nav
    class="fixed w-full z-50 py-4 px-8 gap-8 transition-all flex justify-end"
    :class="{ 'bg-surface-950/90 backdrop-blur-lg': hasBackground }"
  >
    <Transition name="zoom">
      <img
        v-if="scrollPosition"
        src="/img/logo.svg"
        alt="HB Dragons Logo"
        class="hidden md:block absolute left-4 top-4 w-32 h-32"
      >
    </Transition>
    <div class="flex justify-end items-center gap-8">
      <NuxtLink
        to="/"
        class="text-xl px-2 py-1"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/teams"
        class="text-xl px-2 py-1"
      >
        Teams
      </NuxtLink>
      <NuxtLink
        to="/news"
        class="text-xl px-2 py-1"
      >
        News
      </NuxtLink>
    </div>
  </nav>
</template>

<style>
.router-link-active {
  @apply bg-primary-500;
  @apply rounded-lg;
  @apply font-semibold;
  @apply text-black;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.95);
  opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>
