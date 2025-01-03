<script setup lang="ts">
const scrollPosition = ref(0);

const hasBackground = computed(() => scrollPosition.value > 0);

const drawerOpen = ref(false);

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

const navigationItems = [
  { name: 'Home', to: '/' },
  { name: 'Teams', to: '/teams' },
  { name: 'News', to: '/news' },
  { name: 'Kontakt', to: '/kontakt' },
];
</script>

<template>
  <nav
    class="hidden md:flex fixed w-full z-50 py-4 px-8 gap-8 transition-all justify-end"
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
        v-for="item in navigationItems"
        :key="item.to"
        :to="item.to"
        class="text-xl px-3 py-0.5"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
  </nav>

  <div class="fixed z-50 bottom-5 right-5 md:hidden">
    <Button
      class="rounded-full"
      @click="drawerOpen = true"
    >
      <Icon name="ph:list" />
    </Button>
  </div>

  <Drawer
    v-model:visible="drawerOpen"
    position="bottom"
    header="Hanover Basketball Dragons e.V."
    style="height: auto"
  >
    <div class="w-full flex flex-col">
      <NuxtLink
        v-for="item in navigationItems"
        :key="item.to"
        :to="item.to"
        class="text-xl w-full px-3 py-0.5"
        @click="drawerOpen = false"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
  </Drawer>
</template>

<style>
.router-link-active {
  @apply bg-primary-600;
  @apply rounded-md;
  @apply font-semibold;
  @apply text-white;
  @apply transition-all;
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
